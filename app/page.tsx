'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowDown, Plus, Minus, Play } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import MagneticButton from '@/components/MagneticButton'
import AnimatedMarquee from '@/components/AnimatedMarquee'
import ProcessSystem from '@/components/ProcessSystem'
import DigitacurveAI from '@/components/DigitacurveAI'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useGSAP(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' }
      )
    }
  }, [])

  const rosterBrands = [
    'Burger King', 'Ola Electric', 'Bajaj Finserv', 'Tata Capital', 'Bewakoof',
    'SHEIN India', 'Blinkit / Grofers', 'Starbucks', 'Glenary’s', 'Sheroes Hangout',
    'Lakmé Salon', 'Looks Salon', 'Jawed Habib', 'DLF', 'Lodha Group',
    'Godrej Properties', 'Oberoi Realty', 'Medanta', 'Apollo Hospitals', 'Fortis Healthcare'
  ]

  const coreServices = [
    {
      num: '01',
      tags: 'STRATEGY · UX · DESIGN · DEVELOPMENT',
      title: 'WEBSITE DESIGN + DEVELOPMENT',
      desc: 'Responsive websites and landing pages that explain the offer, build confidence and make the next action obvious.',
      image: '/assets/web dev.webp',
      href: '/web-development',
    },
    {
      num: '02',
      tags: 'TECHNICAL · ON-PAGE · LOCAL · CONTENT',
      title: 'SEO + LOCAL SEO',
      desc: 'Technical foundations, useful service pages and local visibility work designed for people and search engines.',
      image: '/assets/dm.webp',
      href: '/digital-marketing',
    },
    {
      num: '03',
      tags: 'GOOGLE SEARCH · META · TESTING · OPTIMISATION',
      title: 'GOOGLE ADS + META ADS',
      desc: 'Search and social campaigns with clear platform strategy, creative testing and ongoing optimisation around useful business actions.',
      image: '/assets/blogs/marketing.webp',
      href: '/digital-marketing',
    },
    {
      num: '04',
      tags: 'JOURNEY · LANDING · HANDOFF · MEASUREMENT',
      title: 'LEAD GENERATION',
      desc: 'Connect the ad, landing experience, WhatsApp handoff and follow-up into one clearer enquiry path.',
      image: '/assets/ai.webp',
      href: '/company/contact',
    },
    {
      num: '05',
      tags: 'POSITIONING · CONTENT · CHANNEL PLANNING',
      title: 'SOCIAL MEDIA + CONTENT',
      desc: 'Build a recognisable voice, visual direction and content rhythm instead of another disconnected feed.',
      image: '/assets/appdev.webp',
      href: '/digital-marketing',
    },
    {
      num: '06',
      tags: 'POSITIONING · MESSAGE · VISUAL DIRECTION',
      title: 'BRAND STRATEGY',
      desc: 'Clarify the offer, message and visual direction so the business becomes easier to recognise and choose.',
      image: '/assets/about/award2.webp',
      href: '/company/contact',
    },
  ]

  const featuredProjects = [
    {
      title: 'FiscalKids Financial Platform',
      category: 'Web App & Design',
      image: '/assets/projects/fiscalkids.webp',
    },
    {
      title: 'ImBooked SaaS Portal',
      category: 'SaaS Platform',
      image: '/assets/projects/imbooked.webp',
    },
    {
      title: 'SocialBoost Lead Engine',
      category: 'Performance Marketing',
      image: '/assets/projects/socialboost.webp',
    },
    {
      title: 'VLaunch Brand Ecosystem',
      category: 'Brand Strategy',
      image: '/assets/projects/vlaunch.webp',
    },
  ]

  const faqs = [
    {
      q: 'WHERE IS DIGITACURVE BASED?',
      a: 'Digitacurve and its founder team are based in India, operating remotely with businesses across major Indian cities and international markets.',
    },
    {
      q: 'DO YOU PROVIDE SEO AND LOCAL SEO?',
      a: 'Yes. SEO work can include technical foundations, on-page improvements, service and location content, local visibility, measurement and an improvement plan. Exact scope follows an audit.',
    },
    {
      q: 'SHOULD WE USE GOOGLE ADS OR META ADS?',
      a: 'Google Ads can capture existing search intent, while Meta Ads can create demand through Facebook and Instagram. The right starting point depends on the offer, audience, sales cycle, tracking and available creative.',
    },
    {
      q: 'CAN WE START WITH ONLY ONE SERVICE?',
      a: 'Yes. The scope can begin with website design, SEO, Google Ads, Meta Ads, social media, branding or a focused consultation. Additional services are recommended only when they support the same business goal.',
    },
    {
      q: 'HOW IS PRICING DECIDED?',
      a: 'After a short diagnosis, the proposal confirms the exact deliverables, responsibilities, timing and investment. There is no automatic one-size-fits-all package.',
    },
  ]

  return (
    <div className="bg-[#050505] text-white font-sans min-h-screen relative noise-overlay">
      {/* Edge Live Tag */}
      <div className="edge-signal-tag font-mono">
        <span>DC—LIVE ✦</span>
      </div>

      {/* ── 1. STUDIO HERO (EXACT MEET DIGITAL LAYOUT) ───────────────────── */}
      <section className="relative py-20 lg:py-28 border-b border-[#111111] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Copy */}
            <div ref={heroRef} className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                <span className="text-cyan-400 font-bold">DIGITACURVE / CREATIVE GROWTH STUDIO</span>
                <span>BANGALORE → INDIA & GLOBAL</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight mb-8">
                <span className="block font-serif italic text-white font-normal">FROM</span>
                <span className="block font-serif italic text-white font-normal">NOISE</span>
                <span className="block font-serif italic text-cyan-400 font-normal">TO SIGNAL.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
                We turn scattered websites, search, paid media and content into one clear digital system built to move business.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <MagneticButton>
                  <Link href="/company/contact" className="agency-btn agency-btn-white">
                    START A PROJECT <ArrowUpRight size={14} />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <a href="#capabilities" className="agency-btn agency-btn-outline">
                    SEE THE SYSTEM <ArrowDown size={14} />
                  </a>
                </MagneticButton>
              </div>

              <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest text-slate-500 uppercase border-t border-[#1a1a1a] pt-6">
                <span>WEB</span>
                <span>✦</span>
                <span>SEARCH</span>
                <span>✦</span>
                <span>PAID MEDIA</span>
                <span>✦</span>
                <span>BRAND</span>
              </div>
            </div>

            {/* Right Column: Hero Motion Identity Card with Auto-playing Live Video */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a] p-6 relative group overflow-hidden shadow-2xl">
                <div className="aspect-video rounded-2xl bg-[#111111] border border-[#222222] relative overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/assets/homepage.webp"
                    className="w-full h-full object-cover"
                  >
                    <source src="/assets/signal-reel.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 uppercase">
                  <span>DC—SIGNAL FILM</span>
                  <span>15 SEC / ORIGINAL MOTION IDENTITY</span>
                </div>
                <div className="mt-3 flex items-center gap-2 font-mono text-[9px] text-cyan-400 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>PLAYING / MUTED LOOP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STUDIO MARQUEE ─────────────────────────────────────────── */}
      <AnimatedMarquee
        items={[
          'WEBSITE DESIGN',
          'SEO',
          'LOCAL SEO',
          'GOOGLE ADS',
          'META ADS',
          'SOCIAL MEDIA',
          'BRAND',
        ]}
        speed={25}
      />

      {/* ── 3. ROSTER PULSE ───────────────────────────────────────────── */}
      <section className="py-8 bg-[#0a0a0a] border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs">
            <div>
              <span className="font-bold text-white uppercase tracking-wider block">44 IDENTITIES</span>
              <span className="text-[10px] text-slate-500 uppercase">NATIONAL · HOSPITALITY · BEAUTY · REAL ESTATE · HEALTHCARE</span>
            </div>

            <div className="flex-1 overflow-hidden whitespace-nowrap text-slate-400 text-xs">
              <div className="inline-flex gap-4 animate-marquee">
                {rosterBrands.map((brand, idx) => (
                  <span key={idx} className="inline-flex items-center gap-2">
                    <span className="text-white font-bold">{brand}</span>
                    <span className="text-cyan-400">✦</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CORE SERVICES GRID (WITH IMAGES) ────────────────────────── */}
      <section id="capabilities" className="py-24 bg-[#050505] border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <span className="eyebrow-label">01 / CORE SERVICES</span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase leading-tight">
                WEBSITES.<br />
                MARKETING.<br />
                <em className="font-serif italic text-cyan-400 font-normal">SEARCH.</em>
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              Choose a focused service or combine the disciplines needed to make your business clearer, easier to find and easier to contact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <div
                key={service.num}
                className="group p-8 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 font-mono text-xs">
                    <span className="font-bold text-cyan-400">{service.num}</span>
                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  {/* Service Image Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#222222] p-2.5 mb-6 overflow-hidden group-hover:scale-110 transition-transform">
                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                  </div>

                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block mb-3">
                    {service.tags}
                  </span>
                  <h3 className="text-lg font-black uppercase text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest group-hover:underline"
                >
                  VIEW SERVICE ↗
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#111111] flex items-center justify-between font-mono text-xs">
            <span className="text-slate-500 uppercase">NOT SURE WHERE TO START?</span>
            <Link href="/company/contact" className="agency-btn agency-btn-white text-xs">
              BUILD A 60-SECOND BRIEF ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. LIVING STUDIO (WITH RICH PHOTOS) ────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="eyebrow-label">REAL MOTION · REAL PROCESS · DIGITAL CRAFT</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase leading-tight">
              STRATEGY YOU CAN<br />
              <em className="font-serif italic text-cyan-400 font-normal">SEE MOVING.</em>
            </h2>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              Strong digital work is not a stack of disconnected posts and pages. It is a live system—research, ideas, design, media and measurement moving toward one useful business action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Strategy Photo Card */}
            <div className="lg:col-span-2 rounded-3xl bg-[#050505] border border-[#1a1a1a] overflow-hidden relative group min-h-[380px] flex flex-col justify-between p-8">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/assets/backgroungimages/section4-bg-image.webp"
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              >
                <source src="/assets/signal-reel.mp4" type="video/mp4" />
              </video>
              <div className="relative z-10 flex justify-between font-mono text-xs text-cyan-400">
                <span>01 / ORIGINAL MOTION IDENTITY</span>
                <span>NOISE → DIRECTION → SIGNAL</span>
              </div>
              <div className="relative z-10 my-auto py-8">
                <span className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider block mb-2">
                  FULL-STACK GROWTH SYSTEM
                </span>
                <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
                  Next.js App Router + GSAP Micro-Interactions + Lenis Smooth Scroll + AI Chatbots.
                </p>
              </div>
            </div>

            {/* Founder Portrait Card */}
            <div className="rounded-3xl bg-[#050505] border border-[#1a1a1a] overflow-hidden relative group p-8 flex flex-col justify-between">
              <div className="w-20 h-20 rounded-full border border-cyan-400/40 overflow-hidden mb-4">
                <img
                  src="/assets/team/team1.webp"
                  alt="Founder Digitacurve"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="font-mono text-xs text-cyan-400">02 / FOUNDER-LED</span>
              <div>
                <h4 className="text-lg font-black text-white uppercase mt-2">ONE CLEAR POINT OF RESPONSIBILITY</h4>
                <p className="text-xs text-slate-400 mt-2">Direct communication with lead engineers and strategists.</p>
              </div>
              <Link href="/company/about" className="text-xs font-mono font-bold text-cyan-400 mt-6 inline-block uppercase">
                MEET THE FOUNDER ↗
              </Link>
            </div>
          </div>

          {/* 4 Featured Project Photo Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {featuredProjects.map((proj, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-[#050505] border border-[#1a1a1a] overflow-hidden hover:border-cyan-400/60 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 font-mono text-xs">
                  <span className="text-[9px] text-cyan-400 uppercase tracking-widest block mb-1">
                    {proj.category}
                  </span>
                  <h4 className="font-bold text-white uppercase text-sm group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OUR APPROACH / MANIFESTO ───────────────────────────────── */}
      <section className="py-24 bg-[#050505] border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="eyebrow-label">02 / OUR APPROACH</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase leading-tight">
              CLEARER MESSAGE.<br />
              BETTER VISIBILITY.<br />
              <em className="font-serif italic text-cyan-400 font-normal">MORE USEFUL ACTION.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a]">
              <span className="font-mono text-cyan-400 font-bold text-sm block mb-4">01</span>
              <h3 className="text-base font-black uppercase text-white mb-3">START WITH THE NUMBER</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Define the business outcome and the customer action before choosing a channel.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a]">
              <span className="font-mono text-cyan-400 font-bold text-sm block mb-4">02</span>
              <h3 className="text-base font-black uppercase text-white mb-3">CREATIVE MEETS DATA</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Use evidence to sharpen the work without turning the brand into a dashboard.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a]">
              <span className="font-mono text-cyan-400 font-bold text-sm block mb-4">03</span>
              <h3 className="text-base font-black uppercase text-white mb-3">BUILD FOR IMPROVEMENT</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Create reusable assets so every page and campaign makes the next decision better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INTERACTIVE PROCESS SYSTEM ─────────────────────────────── */}
      <ProcessSystem />

      {/* ── 8. WORKING STANDARD ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="eyebrow-label">04 / CLIENT EXPERIENCE</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase leading-tight">
              WHAT WORKING<br />
              TOGETHER SHOULD<br />
              <em className="font-serif italic text-cyan-400 font-normal">FEEL LIKE.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#050505] border border-[#1a1a1a]">
              <span className="font-mono text-cyan-400 text-xs block mb-2">01</span>
              <span className="text-cyan-400 text-sm block mb-4">✦</span>
              <h3 className="text-base font-black uppercase text-white mb-3">DIRECT ACCESS</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You speak to the person shaping the strategy—not through layers of account management.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#050505] border border-[#1a1a1a]">
              <span className="font-mono text-cyan-400 text-xs block mb-2">02</span>
              <span className="text-cyan-400 text-sm block mb-4">✦</span>
              <h3 className="text-base font-black uppercase text-white mb-3">CLEAR SCOPE</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Responsibilities, deliverables, timing and investment are written before the work begins.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#050505] border border-[#1a1a1a]">
              <span className="font-mono text-cyan-400 text-xs block mb-2">03</span>
              <span className="text-cyan-400 text-sm block mb-4">✦</span>
              <h3 className="text-base font-black uppercase text-white mb-3">EVIDENCE STANDARD</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Results are presented with source, period and baseline. If the evidence is not approved, we do not invent it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. BEFORE YOU ASK (FAQ ACCORDION) ─────────────────────────── */}
      <section className="py-24 bg-[#050505] border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <span className="eyebrow-label">05 / BEFORE YOU ASK</span>
              <h2 className="text-4xl font-black uppercase leading-tight">
                USEFUL ANSWERS.<br />
                <em className="font-serif italic text-cyan-400 font-normal">NO SALES FOG.</em>
              </h2>
              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                Everything a serious client usually wants to understand before the first conversation.
              </p>
              <div className="mt-8">
                <Link href="/company/contact" className="agency-btn agency-btn-outline text-xs">
                  ASK A DIFFERENT QUESTION ↗
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-sm text-white uppercase tracking-wider hover:text-cyan-400 transition-colors"
                  >
                    <span>
                      <span className="text-cyan-400 font-mono mr-3">0{idx + 1}</span>
                      {faq.q}
                    </span>
                    {openFaq === idx ? <Minus size={16} className="text-cyan-400 shrink-0" /> : <Plus size={16} className="text-slate-500 shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-xs text-slate-400 leading-relaxed border-t border-[#111111] pt-4 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. HOME CONTACT BAND ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0a] border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="font-bold text-white text-lg uppercase tracking-wider block">READY WHEN THE PROBLEM IS.</span>
            <p className="text-xs text-slate-400 mt-1">Tell us what is stuck. We'll help identify the most useful next move.</p>
          </div>
          <Link href="/company/contact" className="agency-btn agency-btn-white text-xs">
            START A 60-SECOND BRIEF ↗
          </Link>
        </div>
      </section>

      {/* AI Floating Chatbot */}
      <DigitacurveAI />
    </div>
  )
}
