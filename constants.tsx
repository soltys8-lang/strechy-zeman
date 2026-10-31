
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Domů', href: '/' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const CONTACT_INFO = {
  name: 'Zdeněk Zeman',
  address: 'Křižanovice 273, 685 01 Křižanovice',
  phone: '+420 728 349 241',
  email: 'strechynakliczeman@gmail.com',
  ico: '73803481',
};

export const PHONE_HREF = `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`;

export const AREAS = [
  'Křižanovice',
  'Brno',
  'Vyškov',
  'Bučovice',
  'Slavkov u Brna',
  'Rousínov',
  'Ivanovice na Hané',
];

export const REGION = 'Jihomoravský kraj';
