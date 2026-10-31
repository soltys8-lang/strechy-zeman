import React from 'react';
import { CONTACT_INFO, PHONE_HREF } from '../constants';
import { Service, ServiceDetailContent } from '../types';
import AreaChips from './AreaChips';
import CallToAction from './CallToAction';
import ServiceCards from './ServiceCards';

interface ServiceDetailProps {
  service: Service;
  detail: ServiceDetailContent;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, detail }) => (
  <>
    <div className="bg-slate-900 text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <nav className="text-sm text-slate-400 mb-3" aria-label="Drobečková navigace">
          <a href="/" className="inline-block py-3 hover:text-amber-500 transition-colors">Domů</a>
          <span className="mx-2">/</span>
          <a href="/sluzby" className="inline-block py-3 hover:text-amber-500 transition-colors">Služby</a>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{service.name}</span>
        </nav>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{detail.h1}</h1>
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">{detail.intro}</p>
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
        {detail.sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{section.title}</h2>
            {section.text && <p className="text-slate-600 mb-4 leading-relaxed">{section.text}</p>}
            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start text-slate-800">
                    <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <img
          src={detail.image.src}
          alt={detail.image.alt}
          width={detail.image.width}
          height={detail.image.height}
          loading="lazy"
          className="w-full h-auto rounded-lg shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Jak to probíhá</h2>
          <ol className="space-y-6">
            {detail.steps.map((step, index) => (
              <li key={step.title} className="flex items-start">
                <span className="w-10 h-10 rounded-full bg-amber-700 text-white font-bold flex items-center justify-center mr-4 flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Časté otázky</h2>
          <div className="space-y-6">
            {detail.faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-bold text-lg text-slate-800 mb-1">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Kde působíme</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Pracujeme po celém Jihomoravském kraji, například v těchto městech a obcích:
          </p>
          <AreaChips />
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Další služby</h2>
        <ServiceCards exclude={service.slug} />
      </div>
    </section>

    <CallToAction title={detail.ctaTitle} />
  </>
);

export default ServiceDetail;
