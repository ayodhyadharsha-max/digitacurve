'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, Phone, Instagram, Linkedin, Github } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start justify-between border-b border-slate-800 pb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4">
            READY FOR A MORE CONNECTED SYSTEM?
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
            LET'S BUILD <br />
            <span className="agency-serif-italic text-cyan-400">WHAT'S NEXT.</span>
          </h2>

          <div className="mt-10">
            <MagneticButton>
              <Link
                href="/company/contact"
                data-cursor="BUILD"
                className="agency-pill agency-pill-primary px-8 py-4 text-sm shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                START A PROJECT <ArrowUpRight size={18} />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-slate-900">
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-3">
              AGENCY BASE
            </span>
            <p className="text-sm font-bold text-white uppercase tracking-wider">
              DIGITACURVE CREATIVE GROWTH STUDIO <br />
              <span className="text-slate-400 font-normal">INDIA BASE → SERVING GLOBALLY</span>
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-3">
              DIRECT CONTACT
            </span>
            <div className="space-y-2 text-sm font-bold text-slate-300">
              <a
                href="mailto:sales@digitacurve.com"
                className="hover:text-cyan-400 flex items-center gap-2 transition-colors"
              >
                <Mail size={14} className="text-cyan-400" /> sales@digitacurve.com
              </a>
              <a
                href="https://wa.me/917572094201"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 flex items-center gap-2 transition-colors"
              >
                <Phone size={14} className="text-cyan-400" /> +91 75720 94201 (WhatsApp)
              </a>
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-3">
              CONNECT
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/digitacurve"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/digitacurve/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com/ayodhyadharsha-max/digitacurve"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 DIGITACURVE CREATIVE GROWTH STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              TERMS OF SERVICE
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
