import React from 'react';
import { CONTACT_INFO, PHONE_HREF } from '../constants';
import { City, GalleryItem } from '../types';
import CallToAction from './CallToAction';
import ServiceCards from './ServiceCards';

interface CityPageProps {
  city: City;
  photos: GalleryItem[];
}

const CityPage: React.FC<CityPageProps> = ({ city, photos }) => (
  <>
    <div className="bg-slate-900 text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="text-sm text-slate-400 mb-3" aria-label="Drobečková navigace">
          <a href="/" className="inline-block py-3 hover:text-amber-500 transition-colors">Domů</a>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{city.h1}</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{city.h1}</h1>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">{city.intro}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={PHONE_HREF} className="px-10 py-4 bg-amber-700 text-white font-bold rounded-full text-center hover:bg-amber-800 transition-all">
            Zavolat {CONTACT_INFO.phone}
          </a>
          <a href="/galerie" className="px-10 py-4 bg-white/10 text-white border border-white/30 font-bold rounded-full text-center hover:bg-white/20 transition-all">
            Prohlédnout práce
          </a>
        </div>
      </div>
    </div>

    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 space-y-12">
        {photos.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Z naší práce {city.locative}</h2>
            <div className={`grid grid-cols-1 gap-4 ${photos.length > 1 ? 'sm:grid-cols-3' : 'max-w-md'}`}>
              {photos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.thumb ?? photo.url}
                  alt={photo.title.replace('RD ', 'rodinného domu, ')}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-md bg-slate-200"
                />
              ))}
            </div>
          </div>
        )}

        {city.sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{section.title}</h2>
            <p className="text-slate-600 leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Co pro vás uděláme</h2>
        <ServiceCards />
      </div>
    </section>

    <CallToAction title={`Potřebujete pokrývače ${city.locative}?`} />
  </>
);

export default CityPage;
