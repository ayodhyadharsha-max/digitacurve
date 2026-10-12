'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'WHERE IS DIGITACURVE BASED?',
      a: 'Digitacurve and its core leadership team led by Rishabh Jaiswal are based in Noida, serving businesses and brands across India with zero location friction.',
    },
    {
      q: 'DO I GET DIRECT ACCESS TO THE FOUNDER?',
      a: 'Yes. Rishabh Jaiswal oversees strategy and execution directly on every project. No junior account manager pass-offs.',
    },
    {
      q: 'WHAT DOES THE FREE BUSINESS REPORT INCLUDE?',
      a: 'You receive a private 68/100 digital readiness diagnostic score covering your positioning, conversion setup, search visibility, and actionable 30-day priority recommendations.',
    },
    {
      q: 'HOW FAST CAN WE LAUNCH A WEBSITE OR CAMPAIGN?',
      a: 'High-conversion landing pages and ad campaigns launch in 7–14 days. Full multi-page web builds typically take 3–4 weeks.',
    },
    {
      q: 'DO YOU WORK WITH LOCAL BUSINESSES AND CAFÉS?',
      a: 'Yes. We have built digital identity and local search systems for hospitality brands, salons, real estate, clinics, and national digital brands.',
    },
    {
      q: 'WHAT ARE YOUR PRICING STRUCTURES?',
      a: 'We offer fixed project pricing for websites and monthly retainers for growth systems (SEO + Google/Meta Ads). No hidden fees.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Section Header */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
            CLEAR ANSWERS / FREQUENTLY ASKED
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-slate-900 uppercase">
            CLEAR ANSWERS.<br />
            <span className="text-blue-600 italic font-light">NO SALES FOG.</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-light">
            Everything you need to know about working with Digitacurve before starting a project.
          </p>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="liquid-glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                <span className="text-sm sm:text-base font-black tracking-tight uppercase">
                  {faq.q}
                </span>
                <span className="w-8 h-8 rounded-full liquid-glass-pill flex items-center justify-center text-blue-600 shrink-0">
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
