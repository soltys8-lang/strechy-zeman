import React from 'react';
import { CONTACT_INFO, PHONE_HREF } from '../constants';

const CallToAction: React.FC<{ title: string }> = ({ title }) => (
  <section className="bg-slate-900 text-white px-4 py-16 text-center">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="text-slate-400 mb-8">Zavolejte nám, nebo napište a ozveme se vám.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href={PHONE_HREF} className="px-10 py-4 bg-amber-700 text-white font-bold rounded-full text-center hover:bg-amber-800 transition-all">
        Zavolat {CONTACT_INFO.phone}
      </a>
      <a href={`mailto:${CONTACT_INFO.email}`} className="px-10 py-4 bg-white/10 text-white border border-white/30 font-bold rounded-full text-center hover:bg-white/20 transition-all">
        Napsat e-mail
      </a>
    </div>
  </section>
);

export default CallToAction;
