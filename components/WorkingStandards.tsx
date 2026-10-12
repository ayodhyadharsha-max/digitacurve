'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function WorkingStandards() {
  const standards = [
    {
      num: '01',
      title: 'DIRECT ACCESS',
      desc: 'You speak to the person shaping the strategy—not through layers of account management.',
    },
    {
      num: '02',
      title: 'CLEAR SCOPE',
      desc: 'Responsibilities, deliverables, timing and investment are written before the work begins.',
    },
    {
      num: '03',
      title: 'EVIDENCE STANDARD',
      desc: 'Results are presented with source, period and baseline. If the evidence is not approved, we do not invent it.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200 space-y-16">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
        <div className="lg:col-span-8 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
            04 / CLIENT EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-slate-900 uppercase">
            WHAT WORKING TOGETHER<br />
            <span className="text-blue-600 italic font-light">SHOULD FEEL LIKE.</span>
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
            Strong agency relationships are built on clarity before hype. These are Digitacurve's working standards—not attributed client testimonials.
          </p>
        </div>
      </div>

      {/* 3 Standard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {standards.map((std, idx) => (
          <div
            key={idx}
            className="liquid-glass-card rounded-3xl p-5 sm:p-8 flex flex-col justify-between group space-y-4"
          >
            <div className="flex justify-between items-center text-xs font-mono text-blue-600 font-bold">
              <span className="liquid-glass-pill px-2.5 py-1 rounded-full">
                {std.num}
              </span>
              <span className="text-blue-600 text-sm">✦</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {std.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                {std.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Gate Banner */}
      <div className="liquid-glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="font-mono text-blue-600 font-bold uppercase tracking-wider">
            REAL CLIENT VOICES
          </span>
          <span className="text-slate-600 font-light">
            Approved client quotes can be added here as soon as the exact wording, name, role and permission are supplied.
          </span>
        </div>
        <Link
          href="/company/contact"
          className="text-blue-600 hover:text-blue-800 font-mono font-bold flex items-center gap-1 shrink-0 transition-colors"
        >
          SHARE APPROVED FEEDBACK <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
