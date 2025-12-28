
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Zdeněk Zeman</h3>
          <p className="text-sm leading-relaxed">
            Specialista na tesařské a pokrývačské práce s dlouholetou tradicí. Realizujeme střechy na klíč s důrazem na detail a kvalitu.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Kontakt</h3>
          <p className="text-sm mb-2">{CONTACT_INFO.address}</p>
          <p className="text-sm mb-2">Tel: <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-amber-500 transition-colors">{CONTACT_INFO.phone}</a></p>
          <p className="text-sm">E-mail: <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-500 transition-colors">{CONTACT_INFO.email}</a></p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Navigace</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#/" className="hover:text-amber-500 transition-colors">Domů</a></li>
            <li><a href="#/galerie" className="hover:text-amber-500 transition-colors">Galerie prací</a></li>
            <li><a href="#/kontakt" className="hover:text-amber-500 transition-colors">Kontaktujte nás</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Střechy Zeman. Všechna práva vyhrazena.
      </div>
    </footer>
  );
};

export default Footer;
