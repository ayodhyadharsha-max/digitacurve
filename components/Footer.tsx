'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, Instagram, MessageSquare, MapPin, Sparkles, Building2, HeartPulse, Plane, Sun } from 'lucide-react';
import GlobalPresence from './GlobalPresence';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-100/40 blur-[140px] pointer-events-none rounded-full" />

      {/* Global Client Reach & Skyline Vector Section */}
      <GlobalPresence />

      {/* Upper CTA Bar (06 / CONTACT & NEXT STEPS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[11px] font-mono text-blue-600 font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> 06 / CONTACT & NEXT STEPS
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              READY WHEN THE<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent italic font-light">PROBLEM IS.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              If your current website, search ranking, or paid ad campaigns are underperforming, let's audit your funnel and build for real growth.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5">
            <Link
              href="/company/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              START A PROJECT <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917572094201"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" /> CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1 - Studio Info & Founder */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <img
                src="/media/logo-dark.png?v=5"
                alt="Digitacurve Logo"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-600 text-xs leading-relaxed font-light">
              Premium Web Development &amp; Performance Marketing Studio from Noida. Building high-converting web apps, local SEO, and scalable ad funnels across India.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm space-y-1.5">
              <div className="text-[11px] font-bold text-slate-900 flex items-center justify-between">
                <span>FOUNDER: RISHABH JAISWAL (RJ)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-[10px] font-mono text-blue-600 flex items-center gap-1.5 font-bold">
                <MapPin className="w-3 h-3 shrink-0" /> NOIDA HQ · PAN-INDIA CLIENTELE
              </div>
            </div>
          </div>

          {/* Col 2 - Core Services & Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold border-b border-slate-200 pb-2">
              SOLUTIONS & SERVICES
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li>
                <Link href="/web-development" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-[10px]">01</span> Web Development
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-[10px]">02</span> Digital Marketing & SEO
                </Link>
              </li>
              <li>
                <Link href="/solutions/real-estate" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Building2 className="w-3 h-3 text-blue-600" /> Real Estate & Builders
                </Link>
              </li>
              <li>
                <Link href="/solutions/healthcare" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <HeartPulse className="w-3 h-3 text-emerald-600" /> Healthcare & Clinics
                </Link>
              </li>
              <li>
                <Link href="/solutions/travel-tourism" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Plane className="w-3 h-3 text-cyan-600" /> Travel & Tourism
                </Link>
              </li>
              <li>
                <Link href="/solutions/solar-energy" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Sun className="w-3 h-3 text-amber-600" /> Solar Energy Portals
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 - Navigation & Agency */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold border-b border-slate-200 pb-2">
              COMPANY
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li>
                <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
                  Work Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors text-blue-700 font-semibold">
                  Pricing &amp; Plans ⚡
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/company/contact" className="hover:text-blue-600 transition-colors">
                  Contact Studio
                </Link>
              </li>
              <li>
                <Link href="/#free-report" className="hover:text-blue-600 transition-colors">
                  Get Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 - Direct Contact Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold border-b border-slate-200 pb-2">
              DIRECT CHANNELS
            </h3>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:contact@digitacurve.com"
                className="p-2.5 bg-white border border-slate-200 hover:border-blue-500 rounded-xl flex items-center gap-3 transition-colors group shadow-sm"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono text-slate-500 uppercase">EMAIL</div>
                  <div className="font-bold text-slate-900 text-[11px] truncate">contact@digitacurve.com</div>
                </div>
              </a>

              <a
                href="tel:+917572094201"
                className="p-2.5 bg-white border border-slate-200 hover:border-blue-500 rounded-xl flex items-center gap-3 transition-colors group shadow-sm"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono text-slate-500 uppercase">CALL DIRECT</div>
                  <div className="font-bold text-slate-900 text-[11px]">+91 75720 94201</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/digitacurve/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white border border-slate-200 hover:border-pink-500 rounded-xl flex items-center gap-3 transition-colors group shadow-sm"
              >
                <div className="w-7 h-7 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-mono text-slate-500 uppercase">INSTAGRAM</div>
                  <div className="font-bold text-slate-900 text-[11px]">@digitacurve</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* GIANT FOOTER WATERMARK - DIGITACURVE */}
        <div className="pt-16 pb-4 overflow-hidden border-b border-slate-200">
          <h1 className="text-[14vw] font-black tracking-tighter leading-none bg-gradient-to-b from-slate-300 via-slate-200 to-transparent bg-clip-text text-transparent hover:from-blue-600 hover:to-indigo-800 transition-all duration-500 uppercase select-none text-center">
            DIGITACURVE
          </h1>
        </div>

        {/* Bottom Copyright Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 DIGITACURVE · FOUNDER: RISHABH JAISWAL (RJ) · NOIDA, INDIA
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/company/contact" className="hover:text-blue-600 transition-colors">
              PRIVACY POLICY
            </Link>
            <span>·</span>
            <Link href="/company/contact" className="hover:text-blue-600 transition-colors">
              TERMS &amp; CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
