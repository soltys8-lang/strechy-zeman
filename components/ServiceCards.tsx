import React from 'react';
import { SERVICES } from '../content';
import { Service } from '../types';

const cardClass = 'block bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-100';

const CardBody: React.FC<{ service: Service }> = ({ service }) => (
  <>
    <h3 className="font-bold text-xl text-slate-800 mb-2">{service.name}</h3>
    <p className="text-slate-600 leading-relaxed">{service.short}</p>
  </>
);

interface ServiceCardsProps {
  exclude?: string;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ exclude }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {SERVICES.filter((service) => service.slug !== exclude).map((service) =>
      service.detail ? (
        <a
          key={service.slug}
          href={`/sluzby/${service.slug}`}
          className={`${cardClass} hover:shadow-xl transition-all duration-300`}
        >
          <CardBody service={service} />
          <span className="inline-block mt-4 text-amber-700 font-bold">Více o službě</span>
        </a>
      ) : (
        <div key={service.slug} className={cardClass}>
          <CardBody service={service} />
        </div>
      )
    )}
  </div>
);

export default ServiceCards;
