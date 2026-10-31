
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const { hash, pathname } = window.location;

// Staré adresy typu #/galerie posíláme na nové /galerie
const redirectOldAddress = () => {
  if (window.location.hash.startsWith('#/')) {
    window.location.replace(window.location.hash.slice(1));
  }
};
window.addEventListener('hashchange', redirectOldAddress);

if (hash.startsWith('#/')) {
  redirectOldAddress();
} else {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const app = (
    <React.StrictMode>
      <App path={pathname.replace(/\/+$/, '') || '/'} gallery={(window as any).__GALLERY__} />
    </React.StrictMode>
  );

  // Předgenerovaná stránka se oživí, ve vývoji (npm run dev) se vykreslí celá
  if (rootElement.firstElementChild) {
    ReactDOM.hydrateRoot(rootElement, app);
  } else {
    ReactDOM.createRoot(rootElement).render(app);
  }
}
