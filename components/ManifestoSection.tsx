'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ManifestoSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Founder Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="liquid-glass-card rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-white/60 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-600/30">
                RJ
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                  RISHABH JAISWAL
                </h3>
                <p className="text-xs font-mono text-blue-600 font-bold uppercase">
                  FOUNDER &amp; STRATEGY LEAD
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed font-light border-t border-slate-100 pt-4">
              Digitacurve is a founder-led digital studio based in Noida. We work directly with business owners to build high-performance websites, search visibility and paid growth campaigns without middleman noise.
            </p>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-xs font-mono text-slate-500">
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-slate-900 font-bold">NOIDA, INDIA</span>
              </div>
              <div className="flex justify-between">
                <span>DIRECT ACCESS:</span>
                <span className="text-blue-600 font-bold">YES</span>
              </div>
            </div>

            <Link
              href="/company/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 rounded-full liquid-glass-button transition-all"
            >
              TALK TO RISHABH <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column - 3 Strategy Principles */}
        <div className="lg:col-span-8 space-y-12" id="founder">
          <div className="space-y-4">
            <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
              OUR APPROACH / DIGITACURVE MANIFESTO
            </p>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-slate-900 uppercase">
              CLEARER MESSAGE.<br />
              BETTER VISIBILITY.<br />
              <span className="text-blue-600 italic font-light">MORE USEFUL ACTION.</span>
            </h2>
          </div>

          <div className="space-y-8 font-sans">
            {/* Principle 01 */}
            <div className="liquid-glass-card p-8 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-blue-600 liquid-glass-pill px-3 py-1 rounded-full font-bold inline-block">CHAPTER 01</span>
              <h3 className="text-2xl font-black text-slate-900 uppercase">
                1. CLARITY BEFORE CREATIVE FLUFF.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Fancy animations and trendy buzzwords mean nothing if a customer cannot figure out what you sell in 3 seconds. We start with positioning and message clarity before writing a line of code.
              </p>
            </div>

            {/* Principle 02 */}
            <div className="liquid-glass-card p-8 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-blue-600 liquid-glass-pill px-3 py-1 rounded-full font-bold inline-block">CHAPTER 02</span>
              <h3 className="text-2xl font-black text-slate-900 uppercase">
                2. ONE CONNECTED GROWTH SYSTEM.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                SEO without a high-converting website wastes search traffic. Ads without a clear landing page waste budget. Digitacurve connects design, search, paid media and WhatsApp into one clear path.
              </p>
            </div>

            {/* Principle 03 */}
            <div className="liquid-glass-card p-8 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-blue-600 liquid-glass-pill px-3 py-1 rounded-full font-bold inline-block">CHAPTER 03</span>
              <h3 className="text-2xl font-black text-slate-900 uppercase">
                3. DIRECT FOUNDER RESPONSIBILITY.
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                No junior account managers passing messages back and forth. You work directly with Rishabh Jaiswal and senior strategist engineers who understand business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
