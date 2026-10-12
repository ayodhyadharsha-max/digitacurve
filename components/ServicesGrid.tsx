'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      number: '01',
      tagline: 'STRATEGY · UX · DESIGN · DEVELOPMENT',
      title: 'WEBSITE DESIGN + DEVELOPMENT',
      desc: 'Responsive websites and landing pages that explain the offer, build confidence and make the next action obvious.',
      link: '/web-development',
    },
    {
      number: '02',
      tagline: 'TECHNICAL · ON-PAGE · LOCAL · CONTENT',
      title: 'SEO + LOCAL SEO',
      desc: 'Technical foundations, useful service pages and local visibility work designed for people and search engines.',
      link: '/digital-marketing',
    },
    {
      number: '03',
      tagline: 'GOOGLE SEARCH · META · TESTING · OPTIMISATION',
      title: 'GOOGLE ADS + META ADS',
      desc: 'Search and social campaigns with clear platform strategy, creative testing and ongoing optimisation around useful business actions.',
      isAdService: true,
      link: '/digital-marketing',
    },
    {
      number: '04',
      tagline: 'JOURNEY · LANDING · HANDOFF · MEASUREMENT',
      title: 'LEAD GENERATION',
      desc: 'Connect the ad, landing experience, WhatsApp handoff and follow-up into one clearer enquiry path.',
      link: '/digital-marketing',
    },
    {
      number: '05',
      tagline: 'POSITIONING · CONTENT · CHANNEL PLANNING',
      title: 'SOCIAL MEDIA + CONTENT',
      desc: 'Build a recognisable voice, visual direction and content rhythm instead of another disconnected feed.',
      link: '/digital-marketing',
    },
    {
      number: '06',
      tagline: 'POSITIONING · MESSAGE · VISUAL DIRECTION',
      title: 'BRAND STRATEGY',
      desc: 'Clarify the offer, message and visual direction so the business becomes easier to recognise and choose.',
      link: '/digital-marketing',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200 relative overflow-hidden">
      {/* Liquid Ambient Background Blobs */}
      <div className="liquid-blob w-72 sm:w-96 h-72 sm:h-96 bg-blue-400/25 top-20 -left-20 animate-liquid-float" />
      <div className="liquid-blob w-72 sm:w-96 h-72 sm:h-96 bg-indigo-300/20 bottom-10 -right-20 animate-liquid-float-slow" />

      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 lg:mb-16 relative z-10">
        <div className="lg:col-span-8 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
            01 / CORE SERVICES
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] text-slate-950 uppercase">
            WEBSITES.<br />
            MARKETING.<br />
            <span className="text-blue-600">SEARCH.</span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
            Choose a focused service or combine the disciplines needed to make your business clearer, easier to find and easier to contact.
          </p>
        </div>
      </div>

      {/* Services Grid (2 Columns on Mobile, 2 Columns on Desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6 relative z-10">
        {services.map((svc, idx) => (
          <Link
            key={idx}
            href={svc.link}
            className="group liquid-glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 flex flex-col justify-between min-h-[230px] sm:min-h-[320px] relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-full liquid-glass-pill flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold text-blue-600">
                  {svc.number}
                </span>
                {svc.isAdService && (
                  <div className="hidden sm:flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full text-[9px] font-mono text-blue-700 font-bold">
                    <span>ADS</span>
                  </div>
                )}
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Content */}
            <div className="my-2 sm:my-6 space-y-1 sm:space-y-3">
              <p className="text-[8px] sm:text-[10px] font-mono text-blue-600 font-bold tracking-wider uppercase truncate">
                {svc.tagline}
              </p>
              <h3 className="text-xs sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-950 uppercase group-hover:text-blue-600 transition-colors leading-snug">
                {svc.title}
              </h3>
              <p className="text-slate-600 text-[10px] sm:text-sm leading-snug sm:leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                {svc.desc}
              </p>
            </div>

            {/* Bottom link */}
            <div className="border-t border-slate-100 pt-2 sm:pt-4 flex items-center justify-between text-[9px] sm:text-xs font-mono text-slate-500 group-hover:text-blue-600 font-bold">
              <span className="truncate">VIEW DETAILS</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-12 sm:mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="text-xs font-mono text-slate-700 tracking-wider uppercase font-bold">
          NOT SURE WHERE TO START?
        </span>
        <Link
          href="/company/contact"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-blue-500/20"
        >
          BUILD A 60-SECOND BRIEF <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
