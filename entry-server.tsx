import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { GalleryItem } from './types';

export { PAGES, NOT_FOUND_PAGE, SITE_URL } from './pages';

export const render = (path: string, gallery?: GalleryItem[]) =>
  renderToString(<App path={path} gallery={gallery} />);
