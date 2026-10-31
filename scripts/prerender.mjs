// Po sestavení vytvoří z aplikace samostatné HTML pro každou stránku,
// aby vyhledávač viděl text bez spouštění JavaScriptu.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import sharp from 'sharp';
import { render, PAGES, NOT_FOUND_PAGE, SITE_URL } from '../dist-ssr/entry-server.js';

const DIST = 'dist';
const GALLERY_URL = 'https://firestore.googleapis.com/v1/projects/zeman-strechy/databases/(default)/documents/gallery?pageSize=300';

const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const toScriptJson = (data) => JSON.stringify(data).replace(/</g, '\\u003c');

// Fotky z galerie patří do HTML, aby je viděl i vyhledávač. Když je Firebase
// nedostupný, sestavení nespadne a galerie se načte až v prohlížeči.
const fetchGallery = async () => {
  try {
    const response = await fetch(GALLERY_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const { documents = [] } = await response.json();
    return documents
      .map(({ name, fields }) => ({
        id: name.split('/').pop(),
        url: fields.url.stringValue,
        category: fields.category.stringValue,
        title: fields.title.stringValue,
        description: fields.description?.stringValue,
        date: Number(fields.date.integerValue),
        storageId: fields.storageId?.stringValue,
      }))
      .sort((a, b) => b.date - a.date);
  } catch (error) {
    console.warn('Galerii se nepodařilo načíst:', error.message);
    return [];
  }
};

// Originály z Firebase mají i několik MB, do mřížky galerie stačí malý náhled.
// Originál zůstává ve zvětšeném zobrazení.
const addThumbnails = async (gallery) => {
  await mkdir(join(DIST, 'images/galerie'), { recursive: true });
  return Promise.all(
    gallery.map(async (item) => {
      try {
        const response = await fetch(item.url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const thumb = `/images/galerie/${item.id}.webp`;
        await sharp(Buffer.from(await response.arrayBuffer()))
          .rotate()
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 72 })
          .toFile(join(DIST, thumb));
        return { ...item, thumb };
      } catch (error) {
        console.warn(`Náhled ${item.id} se nepodařilo vytvořit:`, error.message);
        return item;
      }
    })
  );
};

const buildHead = (page) => {
  const url = `${SITE_URL}${page.path === '/' ? '' : page.path}`;
  const tags = [
    `<meta name="description" content="${escapeAttr(page.description)}">`,
    page.noindex
      ? '<meta name="robots" content="noindex">'
      : `<link rel="canonical" href="${url}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${escapeAttr(page.title)}">`,
    `<meta property="og:description" content="${escapeAttr(page.description)}">`,
    `<meta property="og:image" content="${SITE_URL}/images/logo.png">`,
    '<meta property="og:locale" content="cs_CZ">',
    ...(page.jsonLd ?? []).map(
      (data) => `<script type="application/ld+json">${toScriptJson(data)}</script>`
    ),
  ];
  return tags.join('\n    ');
};

const galleryForPage = (page, gallery) => {
  if (page.path === '/galerie') return gallery;
  return page.galleryMatch && gallery.filter((item) => item.title.includes(page.galleryMatch));
};

const buildHtml = (template, page, gallery) => {
  const pageGallery = galleryForPage(page, gallery) || undefined;
  return template
    .replace(/<title>.*<\/title>/, `<title>${page.title}</title>`)
    .replace('<!--seo-->', () => buildHead(page))
    .replace('<!--app-->', () => render(page.path, pageGallery))
    .replace('<!--data-->', () =>
      pageGallery ? `<script>window.__GALLERY__=${toScriptJson(pageGallery)}</script>` : ''
    );
};

const buildSitemap = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PAGES.filter((page) => !page.noindex).map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path === '/' ? '/' : page.path}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
};

const template = await readFile(join(DIST, 'index.html'), 'utf8');
const gallery = await addThumbnails(await fetchGallery());

for (const page of PAGES) {
  const file = page.path === '/' ? join(DIST, 'index.html') : join(DIST, page.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, buildHtml(template, page, gallery));
}

await writeFile(join(DIST, '404.html'), buildHtml(template, NOT_FOUND_PAGE, gallery));
await writeFile(join(DIST, 'sitemap.xml'), buildSitemap());
await rm('dist-ssr', { recursive: true, force: true });

console.log(`Předgenerováno ${PAGES.length} stránek, ${gallery.length} fotek v galerii.`);
