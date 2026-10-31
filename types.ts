export enum Category {
  PLECHOVA = 'Plechová',
  SINDEL = 'Šindel',
  TASKA = 'Taška',
  JINE = 'Jiné'
}

export interface GalleryItem {
  id: string;
  url: string;
  thumb?: string;
  category: Category;
  title: string;
  description?: string;
  date: number;
  storageId?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceSection {
  title: string;
  text?: string;
  items?: string[];
}

export interface ServiceDetailContent {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  image: { src: string; alt: string; width: number; height: number };
  sections: ServiceSection[];
  steps: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  ctaTitle: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  detail?: ServiceDetailContent;
}

export interface City {
  slug: string;
  name: string;
  locative: string;
  // Fotky z galerie, které mají tento text v názvu, se ukážou na stránce města
  galleryMatch: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
}

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  jsonLd?: object[];
  galleryMatch?: string;
}
