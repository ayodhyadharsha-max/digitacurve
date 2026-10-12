'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FreeReportFeature() {
  return (
    <section id="free-report" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200 relative overflow-hidden">
      {/* Liquid Ambient Blobs */}
      <div className="liquid-blob w-80 sm:w-[420px] h-80 sm:h-[420px] bg-blue-500/20 -top-20 -right-20 animate-liquid-float" />
      <div className="liquid-blob w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/20 -bottom-10 -left-20 animate-liquid-float-slow" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Copy Column */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
            FREE / PERSONALISED / 5–7 MINUTES
          </p>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[0.95] text-slate-900 uppercase">
            KNOW WHAT YOUR<br />
            BUSINESS NEEDS<br />
            <span className="text-blue-600 italic font-light">NEXT.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-light">
            Answer focused questions and receive a private Digitacurve growth diagnostic—your readiness score, priority gaps, channel plan and a practical 30-day roadmap.
          </p>

          <div className="pt-2">
            <Link
              href="/company/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full liquid-glass-button transition-all active:scale-95"
            >
              PREPARE MY FREE REPORT <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-[10px] sm:text-xs font-mono text-slate-500">
            Saved securely to your account · sent to your verified email
          </p>
        </div>

        {/* Right Column - Diagnostic Report Graphic Card */}
        <div className="lg:col-span-6">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 text-[10px] font-mono text-slate-500">
              <span className="text-blue-600 font-bold truncate">DIGITACURVE / BUSINESS DIAGNOSTIC</span>
              <span className="flex items-center gap-1 text-slate-700 shrink-0 font-bold">
                PRIVATE REPORT <ArrowUpRight className="w-3 h-3 text-blue-600" />
              </span>
            </div>

            {/* Score Display */}
            <div className="my-6 sm:my-8 flex items-baseline gap-3">
              <span className="text-6xl sm:text-7xl font-black text-slate-900 tracking-tighter">68</span>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-blue-600">/100</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                  DIGITAL READINESS
                </span>
              </div>
            </div>

            {/* Headline */}
            <h3 className="text-xl sm:text-3xl font-black text-slate-900 leading-tight uppercase mb-6 sm:mb-8">
              SOLID BASE.<br />
              <span className="text-blue-600">DISCONNECTED EXECUTION.</span>
            </h3>

            {/* Diagnostic Progress Bars */}
            <div className="space-y-4 font-mono text-xs mb-6 sm:mb-8">
              <div>
                <div className="flex justify-between mb-1.5 text-slate-700 text-[11px] font-bold">
                  <span>POSITIONING</span>
                  <span className="text-blue-600">74%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[74%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 text-slate-700 text-[11px] font-bold">
                  <span>CONVERSION</span>
                  <span className="text-blue-600">48%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[48%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 text-slate-700 text-[11px] font-bold">
                  <span>SEARCH</span>
                  <span className="text-blue-600">57%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[57%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5 text-slate-700 text-[11px] font-bold">
                  <span>PAID MEDIA</span>
                  <span className="text-blue-600">62%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-[62%]" />
                </div>
              </div>
            </div>

            {/* Footer metadata line */}
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>GENERATED BY DIGITACURVE AI</span>
              <span className="text-blue-600 font-bold">AUDIT READY →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
