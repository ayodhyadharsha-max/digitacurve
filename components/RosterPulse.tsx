'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function RosterPulse() {
  const brandTiles = [
    {
      name: 'Blinkit / Grofers',
      logoImg: '/brand-roster/blinkit.svg',
    },
    {
      name: 'Starbucks',
      logoImg: '/brand-roster/starbucks.png?v=5',
    },
    {
      name: 'Burger King',
      logoImg: '/brand-roster/burger-king.svg',
    },
    {
      name: 'Ola Electric',
      logoImg: '/brand-roster/ola.png',
    },
    {
      name: 'Bajaj Finserv',
      logoImg: '/brand-roster/bajaj.png',
    },
    {
      name: 'Tata Capital',
      logoImg: '/brand-roster/tata-capital.svg',
    },
    {
      name: 'Bewakoof',
      logoImg: '/brand-roster/bewakoof.svg',
    },
    {
      name: 'SHEIN India',
      logoImg: '/brand-roster/shein.png',
    },
    {
      name: 'Glenary’s',
      logoImg: '/brand-roster/glenarys.svg',
    },
    {
      name: 'Glen’s Bakehouse',
      logoImg: '/brand-roster/glens-bakehouse.svg',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-blue-600 liquid-glass-pill px-3 py-1 rounded-full font-bold">
            44 IDENTITIES
          </span>
          <h2 className="text-xs font-mono text-slate-700 tracking-wider uppercase mt-2 font-bold">
            NATIONAL · HOSPITALITY · BEAUTY · REAL ESTATE · HEALTHCARE
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-500 font-medium">
          MD—BRAND ROSTER TICKER
        </div>
      </div>

      {/* Auto-sliding Marquee with Image Logo Cards */}
      <div className="flex w-max animate-marquee-slow space-x-6 py-4 hover-pause">
        {[...brandTiles, ...brandTiles, ...brandTiles, ...brandTiles].map((brand, idx) => (
          <Link
            key={idx}
            href="/portfolio"
            className="w-64 h-40 liquid-glass-card rounded-2xl p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 group cursor-pointer shrink-0"
          >
            {/* Top Real Image Logo Display */}
            <div className="flex-1 flex items-center justify-center p-2 bg-slate-900 rounded-xl overflow-hidden">
              <img
                src={brand.logoImg}
                alt={brand.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>

            {/* Bottom Title & Arrow */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-900 font-sans">
              <span>{brand.name}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
