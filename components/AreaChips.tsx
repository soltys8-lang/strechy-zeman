import React from 'react';
import { AREAS } from '../constants';
import { CITIES } from '../content';

const chipClass = 'inline-block px-4 py-3 rounded-full text-sm font-medium';

const AreaChips: React.FC<{ className?: string }> = ({ className = '' }) => (
  <ul className={`flex flex-wrap gap-3 ${className}`}>
    {AREAS.map((area) => {
      const city = CITIES.find(({ name }) => name === area);
      return (
        <li key={area}>
          {city ? (
            <a href={`/${city.slug}`} className={`${chipClass} bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors`}>{area}<span aria-hidden="true"> →</span></a>
          ) : (
            <span className={`${chipClass} bg-slate-100 text-slate-800`}>{area}</span>
          )}
        </li>
      );
    })}
  </ul>
);

export default AreaChips;
