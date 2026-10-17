'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function BrandUniverse() {
  const nationalBrandCards = [
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
  ];

  const hospitalityBrandCards = [
    {
      name: 'Glenary’s',
      logoImg: '/brand-roster/glenarys.svg',
    },
    {
      name: 'Sheroes Hangout',
      logoImg: '/brand-roster/sheroes-hangout.svg',
    },
    {
      name: 'Glen’s Bakehouse',
      logoImg: '/brand-roster/glens-bakehouse.svg',
    },
    {
      name: 'Lakmé Salon',
      logoImg: '/brand-roster/lakme.svg',
    },
    {
      name: 'Jawed Habib',
      logoImg: '/brand-roster/jawed-habib.svg',
    },
    {
      name: 'Toni & Guy',
      logoImg: '/brand-roster/toni-guy.svg',
    },
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200 overflow-hidden">
      {/* Electric Blue Header Banner */}
      <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 mb-16 text-white relative overflow-hidden shadow-xl shadow-blue-600/30">
        <div className="max-w-2xl space-y-4 relative z-10">
          <p className="text-xs font-mono text-blue-200 tracking-widest uppercase font-bold">
            03 / BRAND ROSTER
          </p>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            MORE RANGE.<br />
            MORE ENERGY.
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-light">
            National brands, cafés, salons, real estate and healthcare—organized into one cinematic identity system. Names are shown without copied rankings, ratings or unsupported performance claims.
          </p>
        </div>

        <div className="mt-8 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white text-xs font-mono font-bold px-6 py-3.5 rounded-full shadow-md transition-all"
          >
            EXPLORE THE FULL ROSTER <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>
      </div>

      {/* Brand Group Stack */}
      <div className="space-y-16">
        {/* Group 1: National + Digital Brands */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-blue-600 liquid-glass-pill px-2.5 py-1 rounded-full font-bold">
                01
              </span>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                NATIONAL + DIGITAL BRANDS
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-mono font-medium">
              Consumer, mobility, finance, fashion and quick-commerce names.
            </p>
          </div>

          {/* Auto-sliding Horizontal Marquee Rail */}
          <div className="flex w-max animate-marquee space-x-6 py-4 hover-pause">
            {[...nationalBrandCards, ...nationalBrandCards, ...nationalBrandCards, ...nationalBrandCards].map((brand, idx) => (
              <Link
                key={idx}
                href="/portfolio"
                className="w-64 h-40 liquid-glass-card rounded-2xl p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 group cursor-pointer shrink-0"
              >
                <div className="flex-1 flex items-center justify-center p-2 bg-slate-900 rounded-xl overflow-hidden">
                  <img
                    src={brand.logoImg}
                    alt={brand.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-900 font-sans">
                  <span>{brand.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Group 2: Cafés + Hospitality (Same Exact Format Cards) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-blue-600 liquid-glass-pill px-2.5 py-1 rounded-full font-bold">
                02
              </span>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                CAFÉS + HOSPITALITY
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-mono font-medium">
              A focused hospitality row for café &amp; dining names.
            </p>
          </div>

          {/* Auto-sliding Horizontal Marquee Rail */}
          <div className="flex w-max animate-marquee space-x-6 py-4 hover-pause">
            {[...hospitalityBrandCards, ...hospitalityBrandCards, ...hospitalityBrandCards, ...hospitalityBrandCards].map((brand, idx) => (
              <Link
                key={idx}
                href="/portfolio"
                className="w-64 h-40 liquid-glass-card rounded-2xl p-4 flex flex-col justify-between hover:scale-105 transition-transform duration-300 group cursor-pointer shrink-0"
              >
                <div className="flex-1 flex items-center justify-center p-2 bg-slate-900 rounded-xl overflow-hidden">
                  <img
                    src={brand.logoImg}
                    alt={brand.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-bold text-slate-900 font-sans">
                  <span>{brand.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
