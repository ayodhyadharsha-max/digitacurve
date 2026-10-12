'use client';

import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { number: '01', label: 'Home', href: '/' },
    { number: '02', label: 'Web Development', href: '/web-development' },
    { number: '03', label: 'Mobile App Development', href: '/app-development' },
    { number: '04', label: 'Digital Marketing & SEO', href: '/digital-marketing' },
    { number: '05', label: 'Real Estate Solution', href: '/solutions/real-estate' },
    { number: '06', label: 'Healthcare Solution', href: '/solutions/healthcare' },
    { number: '07', label: 'Travel & Tourism', href: '/solutions/travel-tourism' },
    { number: '08', label: 'Solar Energy', href: '/solutions/solar-energy' },
    { number: '09', label: 'Pricing & Packages', href: '/pricing' },
    { number: '10', label: 'Portfolio Showcase', href: '/portfolio' },
    { number: '11', label: 'Insights & Blog', href: '/blog' },
    { number: '12', label: 'Contact Studio', href: '/company/contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 w-full h-[100dvh] bg-white/85 backdrop-blur-3xl flex flex-col justify-between p-4 sm:p-6 md:p-12 text-slate-900 animate-in fade-in duration-300 overflow-y-auto overscroll-contain relative">
      {/* Liquid Ambient Blobs */}
      <div className="liquid-blob w-96 h-96 bg-blue-500/20 top-10 left-10 animate-liquid-float" />
      <div className="liquid-blob w-96 h-96 bg-cyan-400/20 bottom-10 right-10 animate-liquid-float-slow" />

      {/* Header inside overlay */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 sm:pb-6 shrink-0 relative z-10">
        <div className="text-xs tracking-widest text-blue-600 font-mono flex items-center gap-2 sm:gap-3">
          <img src="/media/logo-dark.png?v=5" alt="Digitacurve" className="h-6 sm:h-7 w-auto object-contain" />
          <span className="text-[10px] sm:text-xs font-bold">DIGITACURVE / NOIDA BASE → INDIA</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 liquid-glass-pill hover:bg-blue-600 hover:text-white text-blue-700 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all shrink-0"
        >
          CLOSE <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Links Grid */}
      <nav className="my-auto py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 max-w-6xl mx-auto w-full relative z-10">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            onClick={onClose}
            className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl liquid-glass-card hover:border-blue-500/60 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-blue-600 liquid-glass-pill px-2 py-0.5 rounded-md font-bold">
                {link.number}
              </span>
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {link.label}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 opacity-80 sm:opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
          </Link>
        ))}
      </nav>

      {/* Footer Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 sm:pt-6 text-[10px] sm:text-xs text-slate-500 font-mono shrink-0">
        <div>DIGITACURVE AGENCY © 2026</div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://www.instagram.com/digitacurve/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
          >
            INSTAGRAM <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://wa.me/917572094201"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
          >
            WHATSAPP <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
