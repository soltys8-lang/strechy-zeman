import { AREAS, CONTACT_INFO, REGION } from './constants';
import { CITIES, SERVICES } from './content';
import { PageMeta } from './types';

export const SITE_URL = 'https://strechynakliczeman.cz';

const BUSINESS_ID = `${SITE_URL}/#firma`;

const AREA_SERVED = [
  ...AREAS.map((name) => ({ '@type': 'City', name })),
  { '@type': 'AdministrativeArea', name: REGION },
];

const business = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': BUSINESS_ID,
  name: 'Střechy Zeman',
  image: `${SITE_URL}/images/logo.png`,
  description: 'Pokrývačské, tesařské a klempířské práce. Střechy na klíč, rekonstrukce a opravy.',
  telephone: CONTACT_INFO.phone.replace(/\s/g, ''),
  email: CONTACT_INFO.email,
  taxID: CONTACT_INFO.ico,
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Křižanovice 273',
    addressLocality: 'Křižanovice',
    postalCode: '685 01',
    addressRegion: 'Jihomoravský kraj',
    addressCountry: 'CZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.142,
    longitude: 16.939,
  },
  areaServed: AREA_SERVED,
};

const servicePages: PageMeta[] = SERVICES.flatMap(({ slug, name, detail }) =>
  detail
    ? [
        {
          path: `/sluzby/${slug}`,
          title: detail.seoTitle,
          description: detail.seoDescription,
          jsonLd: [
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name,
              description: detail.seoDescription,
              provider: { '@id': BUSINESS_ID, '@type': 'RoofingContractor', name: 'Střechy Zeman' },
              areaServed: AREA_SERVED,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Domů', item: `${SITE_URL}/` },
                { '@type': 'ListItem', position: 2, name: 'Služby', item: `${SITE_URL}/sluzby` },
                { '@type': 'ListItem', position: 3, name },
              ],
            },
          ],
        },
      ]
    : []
);

const cityPages: PageMeta[] = CITIES.map(({ slug, name, h1, seoTitle, seoDescription, galleryMatch }) => ({
  path: `/${slug}`,
  title: seoTitle,
  description: seoDescription,
  galleryMatch,
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: h1,
      description: seoDescription,
      provider: { '@id': BUSINESS_ID, '@type': 'RoofingContractor', name: 'Střechy Zeman' },
      areaServed: { '@type': 'City', name },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Domů', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: h1 },
      ],
    },
  ],
}));

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Pokrývač a tesař Vyškov, Bučovice, Slavkov | Střechy Zeman',
    description:
      'Pokrývačské, tesařské a klempířské práce v Brně, na Vyškovsku a v celém Jihomoravském kraji. Nové střechy na klíč, rekonstrukce a opravy zatékání. Tel. 728 349 241.',
    jsonLd: [business],
  },
  {
    path: '/sluzby',
    title: 'Pokrývačské a tesařské služby | Střechy Zeman',
    description:
      'Nové střechy na klíč, rekonstrukce a výměna krytiny, opravy zatékání, krovy a klempířské práce v Brně, na Vyškovsku a v celém Jihomoravském kraji.',
  },
  ...servicePages,
  ...cityPages,
  {
    path: '/galerie',
    title: 'Galerie realizací střech | Střechy Zeman',
    description: 'Ukázky našich střech z tašek a plechu. Křižanovice, Slavkov u Brna a okolí.',
  },
  {
    path: '/kontakt',
    title: 'Kontakt | Střechy Zeman, Křižanovice',
    description:
      'Máte zájem o nezávaznou cenovou nabídku? Zavolejte na 728 349 241 nebo napište. Střechy Zeman, Křižanovice 273.',
  },
  {
    path: '/admin',
    title: 'Administrace | Střechy Zeman',
    description: 'Správa galerie.',
    noindex: true,
  },
];

export const NOT_FOUND_PAGE: PageMeta = {
  path: '/404',
  title: 'Stránka nenalezena | Střechy Zeman',
  description: 'Tato stránka neexistuje.',
  noindex: true,
};
