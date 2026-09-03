'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Plus, X } from 'lucide-react'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#1a1a1a] shadow-2xl'
            : 'bg-[#050505] border-b border-[#111111]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Studio Name */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#222222] flex items-center justify-center font-bold text-white group-hover:border-cyan-400 transition-colors">
                <span className="text-xs tracking-tighter">DC</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 leading-none">
                  <span className="font-black text-base tracking-widest text-white uppercase">
                    DIGITA<em className="not-italic text-cyan-400 font-serif italic">CURVE</em>
                  </span>
                </div>
                <small className="text-[8px] font-mono text-slate-500 tracking-widest uppercase mt-0.5">
                  CREATIVE GROWTH STUDIO
                </small>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-slate-300">
              <Link href="/web-development" className="hover:text-white transition-colors">
                SERVICES
              </Link>
              <Link href="/portfolio" className="hover:text-white transition-colors">
                WORK
              </Link>
              <Link href="/digital-marketing" className="hover:text-white transition-colors">
                INDIA & GLOBAL
              </Link>
              <Link href="/company/about" className="hover:text-white transition-colors">
                FOUNDER
              </Link>
              <Link href="/company/about" className="hover:text-white transition-colors">
                ABOUT
              </Link>
            </nav>

            {/* Action CTA & Menu Toggle */}
            <div className="flex items-center gap-4">
              <MagneticButton>
                <Link
                  href="/company/contact"
                  data-cursor="START"
                  className="hidden sm:inline-flex agency-btn agency-btn-white text-xs"
                >
                  START A PROJECT <ArrowUpRight size={14} />
                </Link>
              </MagneticButton>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#222222] bg-[#0a0a0a] text-xs font-mono font-bold tracking-widest uppercase text-white hover:border-slate-500 transition-all"
              >
                <span>MENU</span>
                {menuOpen ? <X size={14} className="text-cyan-400" /> : <Plus size={14} className="text-cyan-400" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Overlay Menu Layer (Meet Digital Style) */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[#050505]/98 backdrop-blur-2xl px-6 py-12 flex flex-col justify-between border-b border-[#1a1a1a] animate-in fade-in slide-in-from-top-4">
          <div className="max-w-7xl mx-auto w-full">
            <span className="eyebrow-label">DC—NAV / INDIA BASE → GLOBAL</span>
            <nav className="flex flex-col gap-6 text-2xl sm:text-4xl font-black uppercase text-white mt-8">
              <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                <span><small className="text-xs font-mono text-slate-600 mr-4">01</small>Home</span>
                <ArrowUpRight size={24} className="text-cyan-400" />
              </Link>
              <Link href="/portfolio" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                <span><small className="text-xs font-mono text-slate-600 mr-4">02</small>Work</span>
                <ArrowUpRight size={24} className="text-cyan-400" />
              </Link>
              <Link href="/web-development" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                <span><small className="text-xs font-mono text-slate-600 mr-4">03</small>Services</span>
                <ArrowUpRight size={24} className="text-cyan-400" />
              </Link>
              <Link href="/company/about" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                <span><small className="text-xs font-mono text-slate-600 mr-4">04</small>Founder</span>
                <ArrowUpRight size={24} className="text-cyan-400" />
              </Link>
              <Link href="/company/about" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                <span><small className="text-xs font-mono text-slate-600 mr-4">05</small>About</span>
                <ArrowUpRight size={24} className="text-cyan-400" />
              </Link>
              <Link href="/company/contact" className="hover:text-cyan-400 transition-colors flex items-center justify-between">
                <span><small className="text-xs font-mono text-slate-600 mr-4">06</small>Contact</span>
                <ArrowUpRight size={24} className="text-cyan-400" />
              </Link>
            </nav>
          </div>

          <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#1a1a1a] pt-6 font-mono text-xs text-slate-400">
            <a href="https://www.instagram.com/digitacurve/" target="_blank" rel="noreferrer" className="hover:text-white">
              INSTAGRAM ↗
            </a>
            <a href="https://wa.me/917572094201" target="_blank" rel="noreferrer" className="hover:text-white">
              WHATSAPP ↗
            </a>
          </div>
        </div>
      )}
    </>
  )
}
