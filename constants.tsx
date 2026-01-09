
import { Category, GalleryItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Domů', href: '#/' },
  { label: 'Galerie', href: '#/galerie' },
  { label: 'Kontakt', href: '#/kontakt' },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop',
    category: Category.TASKA,
    title: 'Rekonstrukce historické budovy',
    date: Date.now() - 100000,
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1635339001026-6163dc5ca31a?q=80&w=1200&auto=format&fit=crop',
    category: Category.PLECHOVA,
    title: 'Moderní plechová krytina',
    date: Date.now() - 200000,
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    category: Category.SINDEL,
    title: 'Rodinný dům - šindel',
    date: Date.now() - 300000,
  },
];

export const CONTACT_INFO = {
  name: 'Zdeněk Zeman',
  address: 'Křižanovice 273, 685 01 Křižanovice',
  phone: '+420 728 349 241',
  email: 'strechynakliczeman@gmail.com',
};
