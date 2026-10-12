'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plus, ChevronDown, Building2, HeartPulse, Plane, Sun, Code, Search, Target, Share2, Smartphone } from 'lucide-react';
import NavigationMenu from './NavigationMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full liquid-glass-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo - DIGITACURVE */}
          <Link href="/" className="flex items-center group shrink-0">
            <img
              src="/media/logo-dark.png?v=5"
              alt="Digitacurve Logo"
              className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-wider text-slate-700">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              HOME
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative py-6"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors uppercase font-bold text-slate-700">
                SOLUTIONS <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {isSolutionsOpen && (
                <div className="absolute top-full left-0 w-72 liquid-glass rounded-2xl p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="text-[10px] font-mono text-blue-600 px-3 py-1.5 uppercase font-bold tracking-widest border-b border-slate-100 mb-1">
                    INDUSTRY SOLUTIONS
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/solutions/real-estate"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Building2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Real Estate &amp; Builders</div>
                        <div className="text-[10px] text-slate-500">Property portals &amp; CRM lead funnels</div>
                      </div>
                    </Link>

                    <Link
                      href="/solutions/healthcare"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <HeartPulse className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Healthcare &amp; Doctors</div>
                        <div className="text-[10px] text-slate-500">Online booking &amp; clinic portals</div>
                      </div>
                    </Link>

                    <Link
                      href="/solutions/travel-tourism"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                        <Plane className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Travel &amp; Tourism</div>
                        <div className="text-[10px] text-slate-500">Holiday packages &amp; booking engine</div>
                      </div>
                    </Link>

                    <Link
                      href="/solutions/solar-energy"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <Sun className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Solar Energy Companies</div>
                        <div className="text-[10px] text-slate-500">Rooftop solar ROI calculators</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative py-6"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors uppercase font-bold text-slate-700">
                SERVICES <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 liquid-glass rounded-2xl p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="text-[10px] font-mono text-blue-600 px-3 py-1.5 uppercase font-bold tracking-widest border-b border-slate-100 mb-1">
                    CORE SERVICES
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/web-development"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Code className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Web Development</div>
                        <div className="text-[10px] text-slate-500">Next.js 14, React &amp; Web Apps</div>
                      </div>
                    </Link>

                    <Link
                      href="/app-development"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Smartphone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Mobile App Development</div>
                        <div className="text-[10px] text-slate-500">iOS, Android &amp; Flutter Apps</div>
                      </div>
                    </Link>

                    <Link
                      href="/digital-marketing"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Search className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">SEO Optimization</div>
                        <div className="text-[10px] text-slate-500">Search ranking &amp; technical SEO</div>
                      </div>
                    </Link>

                    <Link
                      href="/digital-marketing"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Target className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Pay-Per-Click (PPC)</div>
                        <div className="text-[10px] text-slate-500">Google Ads &amp; Meta Ads</div>
                      </div>
                    </Link>

                    <Link
                      href="/digital-marketing"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-800 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                        <Share2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Social Media Manager</div>
                        <div className="text-[10px] text-slate-500">Content strategy &amp; visual growth</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="hover:text-purple-600 text-purple-700 font-bold transition-colors">
              PRICING ⚡
            </Link>
            <Link href="/portfolio" className="hover:text-blue-600 transition-colors">
              PORTFOLIO
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              INSIGHTS
            </Link>
            <Link href="/company/contact" className="hover:text-blue-600 transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/#free-report"
              className="hidden sm:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-full liquid-glass-button transition-all hover:scale-105"
            >
              FREE REPORT <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex items-center gap-1.5 liquid-glass-pill text-slate-800 text-xs font-mono font-bold px-4 py-2.5 rounded-full transition-all hover:border-blue-400"
            >
              MENU <Plus className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-over Fullscreen Navigation Menu */}
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
