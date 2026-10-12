'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const playVideo = () => {
      if (video) {
        video.defaultMuted = true;
        video.muted = true;
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
      }
    };

    playVideo();

    const handleInteraction = () => {
      playVideo();
    };

    window.addEventListener('touchstart', handleInteraction, { passive: true, capture: true });
    window.addEventListener('click', handleInteraction, { passive: true, capture: true });
    window.addEventListener('scroll', handleInteraction, { passive: true, capture: true });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        playVideo();
      }
    });

    return () => {
      window.removeEventListener('touchstart', handleInteraction, { capture: true });
      window.removeEventListener('click', handleInteraction, { capture: true });
      window.removeEventListener('scroll', handleInteraction, { capture: true });
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-[#030712] overflow-hidden flex items-center py-8 lg:py-16">
      {/* Background / Right-Side Video Container (digitacurve.mov / digitacurve.mp4) */}
      <div className="absolute top-0 right-0 w-full lg:w-[58%] h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          className="w-full h-full object-cover opacity-90 lg:opacity-100 pointer-events-none select-none"
        >
          <source src="/media/digitacurve.mp4" type="video/mp4" />
          <source src="/media/digitacurve.mov" type="video/quicktime" />
        </video>

        {/* Blueprint Radar Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#030712] via-[#030712]/40 lg:via-transparent to-transparent z-10 pointer-events-none" />

        {/* System Nodes Box Overlay on Right */}
        <div className="absolute inset-0 p-3 sm:p-8 flex flex-col justify-between z-10 pointer-events-none max-w-full overflow-hidden">
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-blue-400">
            <span className="bg-slate-950/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-blue-900/60 backdrop-blur-md">
              ONE CONNECTED SYSTEM
            </span>
            <span className="text-slate-400 text-[10px] hidden sm:block">DIGITACURVE MOTION FILM</span>
          </div>

          {/* 4 Connected System Nodes */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-4 max-w-[220px] sm:max-w-md ml-auto mr-0 sm:mr-4 my-auto opacity-80 sm:opacity-100">
            <Link href="/web-development" className="bg-[#000B29]/90 hover:bg-[#000B29] border border-blue-500/60 backdrop-blur-md p-2 sm:p-4 rounded-xl space-y-0.5 block transition-transform hover:scale-105">
              <span className="text-[8px] sm:text-[10px] font-mono text-blue-400">01</span>
              <div className="text-xs sm:text-xl font-black text-white">WEB</div>
              <div className="text-[7px] sm:text-[10px] font-mono text-slate-300">→ CLARITY</div>
            </Link>

            <Link href="/digital-marketing" className="bg-[#000B29]/90 hover:bg-[#000B29] border border-blue-500/60 backdrop-blur-md p-2 sm:p-4 rounded-xl space-y-0.5 block transition-transform hover:scale-105">
              <span className="text-[8px] sm:text-[10px] font-mono text-blue-400">02</span>
              <div className="text-xs sm:text-xl font-black text-white">SEARCH</div>
              <div className="text-[7px] sm:text-[10px] font-mono text-slate-300">→ INTENT</div>
            </Link>

            <Link href="/digital-marketing" className="bg-[#000B29]/90 hover:bg-[#000B29] border border-orange-500/60 backdrop-blur-md p-2 sm:p-4 rounded-xl space-y-0.5 block transition-transform hover:scale-105">
              <span className="text-[8px] sm:text-[10px] font-mono text-orange-400">03</span>
              <div className="text-xs sm:text-xl font-black text-white">ADS</div>
              <div className="text-[7px] sm:text-[10px] font-mono text-slate-300">→ MOMENTUM</div>
            </Link>

            <Link href="/portfolio" className="bg-[#000B29]/90 hover:bg-[#000B29] border border-blue-500/60 backdrop-blur-md p-2 sm:p-4 rounded-xl space-y-0.5 block transition-transform hover:scale-105">
              <span className="text-[8px] sm:text-[10px] font-mono text-blue-400">04</span>
              <div className="text-xs sm:text-xl font-black text-white">BRAND</div>
              <div className="text-[7px] sm:text-[10px] font-mono text-slate-300">→ MEMORY</div>
            </Link>
          </div>

          <div className="flex justify-end items-center text-[9px] sm:text-[10px] font-mono text-blue-400">
            <span className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-blue-900/60 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              PLAYING / MUTED LOOP
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 my-auto pt-12 lg:pt-0">
        <div className="w-full lg:w-[48%] bg-white/95 backdrop-blur-md text-slate-900 rounded-3xl p-5 sm:p-10 shadow-2xl space-y-4 sm:space-y-6 border border-slate-200">
          {/* Metadata Top Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-slate-500 border-b border-slate-100 pb-3">
            <span className="font-bold text-slate-900">DIGITACURVE / CREATIVE GROWTH STUDIO</span>
            <span>NOIDA → INDIA</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-slate-950">
            <span className="block">EVERY BUSINESS.</span>
            <span className="block">EVERY STAGE.</span>
            <span className="block text-blue-600 italic">BUILT TO GROW.</span>
          </h1>

          {/* Subheading Intro */}
          <p className="text-xs sm:text-base text-slate-600 font-light leading-relaxed">
            We turn scattered websites, search, paid media and content into one clear digital system built to move business.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
            <Link
              href="#free-report"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              GET MY FREE REPORT <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/company/contact"
              className="bg-white border-2 border-slate-300 hover:border-slate-900 text-slate-900 font-bold text-xs px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              START A PROJECT <ArrowUpRight className="w-4 h-4 text-slate-600" />
            </Link>
          </div>

          {/* Proofline Grid Box (4 Columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 pt-3 border-t border-slate-100 text-[9px] sm:text-[10px] font-mono font-bold text-slate-700">
            <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs" /> WEB
            </div>
            <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs" /> SEARCH
            </div>
            <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs" /> PAID MEDIA
            </div>
            <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-center flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-xs" /> BRAND
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
