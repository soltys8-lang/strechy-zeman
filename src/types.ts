export enum Category {
  PLECHOVA = 'Plechová',
  SINDEL = 'Šindel',
  TASKA = 'Taška',
  JINE = 'Jiné'
}

export interface GalleryItem {
  id: string;
  url: string;
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
