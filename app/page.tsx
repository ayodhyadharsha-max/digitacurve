'use client'

import { useState, useEffect, useRef, createContext, useContext } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight, ArrowRight, Star, ChevronLeft, ChevronRight,
  Globe, Smartphone, TrendingUp, Cpu, Users, Briefcase, Award,
  Clock, MapPin, Mail, Phone, CheckCircle2
} from 'lucide-react'
import InteractiveCard from '@/components/InteractiveCard'
import CyberGrid from '@/components/CyberGrid'

/* ── Hero Slider ───────────────────────────────────────────────── */
const slides = [
  {
    id: 1,
    eyebrow: 'Digital Engineering',
    title: 'Next-Gen Software &',
    titleAccent: 'AI-Powered Platforms',
    titleEnd: '',
    subtitle:
      'We build secure, hyper-scalable, and modern digital ecosystems engineered to accelerate your enterprise growth.',
    cta: "Let's Begin",
    ctaHref: '/company/contact',
    gradient: 'from-blue-900/80 via-black/60 to-black',
    accentColor: 'from-blue-400 to-purple-500',
  },
  {
    id: 2,
    eyebrow: 'Generative Search Visibility',
    title: 'Be the Brand that',
    titleAccent: 'AI Models Recommend',
    titleEnd: '',
    subtitle:
      'Go beyond traditional search. We optimize your digital presence for ChatGPT, Google Gemini, Perplexity, and classic SEO rankings.',
    cta: 'Get Recommended',
    ctaHref: '/digital-marketing',
    gradient: 'from-orange-900/80 via-black/60 to-black',
    accentColor: 'from-orange-400 to-yellow-500',
  },
  {
    id: 3,
    eyebrow: 'Supreme Web Engineering',
    title: 'Ultra-Fast Next.js &',
    titleAccent: 'Edge Native Solutions',
    titleEnd: '',
    subtitle:
      'Tailor-made web solutions optimized for maximum page speed, seamless UI interactions, and top-tier conversions.',
    cta: 'Explore Services',
    ctaHref: '/web-development',
    gradient: 'from-teal-900/80 via-black/60 to-black',
    accentColor: 'from-teal-400 to-blue-500',
  },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (idx: number) => {
    if (animating || idx === current) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 600)
  }

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  useEffect(() => {
    timerRef.current = setInterval(next, 5500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [current])

  const slide = slides[current]

  return (
    <section className="relative w-full h-[85vh] min-h-[560px] overflow-hidden bg-black">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-all duration-700`}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Interactive 3D Particles Background */}
      <CyberGrid />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div key={current} className={`transition-all duration-600 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 max-w-4xl">
            <span className="text-white">{slide.title} </span>
            <span className="gradient-text-shimmer">
              {slide.titleAccent}
            </span>
            {slide.titleEnd && <span className="text-white"> {slide.titleEnd}</span>}
          </h1>

          <p className="text-gray-300 text-lg max-w-xl leading-relaxed mb-10">
            {slide.subtitle}
          </p>

          <div className="flex items-center gap-4">
            <Link
              href={slide.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 btn-shine"
            >
              {slide.cta}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              View Work
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-white/10 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-white/10 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

const categories = [
  {
    image: '/assets/web dev.webp',
    title: 'Web Development',
    href: '/web-development',
  },
  {
    image: '/assets/dm.webp',
    title: 'SEO & PPC Solutions',
    href: '/digital-marketing',
  },
  {
    image: '/assets/services-icons/qa.svg',
    title: 'Social Media Management',
    href: '/digital-marketing',
  },
  {
    image: '/assets/services-icons/it-consultancy.svg',
    title: 'Digital & IT Consulting',
    href: '/company/contact',
  },
]

function CategoriesGrid() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealStaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, idx) => (
              <RevealStaggerItem key={cat.title} index={idx} className="h-full">
                <InteractiveCard
                  href={cat.href}
                  className="p-8 group flex flex-col items-center justify-center category-card h-full"
                >
                  {/* Corner Arrow rotated 325 degrees */}
                  <div 
                    className="absolute top-3 right-3 text-secondary text-gray-500 group-hover:text-white transition-all duration-300"
                    style={{ transform: 'translateZ(35px)' }}
                  >
                    <ArrowRight size={16} className="rotate-[325deg]" />
                  </div>
                  
                  {/* Centered webp image inside a circular outline */}
                  <div 
                    className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center mb-4 bg-blue-500/5 group-hover:border-blue-500/60 transition-all duration-300"
                    style={{ transform: 'translateZ(25px)' }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  
                  {/* Title */}
                  <p 
                    className="text-white font-semibold text-sm tracking-wide text-center"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    {cat.title}
                  </p>
                </InteractiveCard>
              </RevealStaggerItem>
            ))}
          </div>
        </RevealStaggerContainer>
      </div>
    </section>
  )
}

/* ── Review Badges ──────────────────────────────────────────────── */
const reviewBadges = [
  { platform: 'Google', count: '150+', logo: '/assets/reviews/rgoogle.png', href: 'https://share.google/THrR3FaoU9IJ7h73Y' },
  { platform: 'Clutch', count: '50+', logo: '/assets/reviews/rclutch.png' },
  { platform: 'GoodFirms', count: '60+', logo: '/assets/reviews/rgoodfirms.png' },
  { platform: 'Sortlist', count: '110+', logo: '/assets/reviews/sortlistlight.png' },
]

function ReviewBadges() {
  return (
    <section className="py-12 bg-black border-y border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {reviewBadges.map(badge => {
            const content = (
              <>
                <img
                  src={badge.logo}
                  alt={`${badge.platform} logo`}
                  className="h-10 sm:h-12 w-auto object-contain mb-3"
                />
                <div className="flex gap-0.5 mb-1 text-[#EDB451] text-base">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-lg font-bold text-white tracking-wide">{badge.count}</p>
              </>
            )
            return badge.href ? (
              <a
                key={badge.platform}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform"
              >
                {content}
              </a>
            ) : (
              <div
                key={badge.platform}
                className="flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform cursor-default"
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const awardLogos = [
  { alt: 'Good Firms Award', src: '/assets/about/award2.png' },
  { alt: 'Google Review', src: '/assets/socials/googlepartner.png', href: 'https://share.google/THrR3FaoU9IJ7h73Y' },
  { alt: 'Sortlist', src: 'https://sortlist-public-ui-manual-upload-production.s3.eu-west-1.amazonaws.com/badges/certified-primary-500.svg' },
  { alt: 'Clutch SEO', src: '/assets/home/cluctch-Rpa.jpg' },
  { alt: 'Top Mobile App Development Company on GoodFirms', src: 'https://assets.goodfirms.co/badges/color-badge/app-development.svg' },
  { alt: 'Top Software Developers in the USA', src: '/assets/home/tech-reviewer.jpeg' },
  { alt: 'Top Generative AI Development Companies', src: '/assets/home/tech-reviewer-2.jpeg' },
]

function CollaborationBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awardLogos.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awardLogos.length) % awardLogos.length)
  }

  return (
    <section className="py-20 bg-black overflow-hidden border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ... Left Column ... */}
          <div>
            <div className="section-label">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Partnerships
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Creating pathways for{' '}
              <span className="gradient-text-shimmer">seamless collaboration</span>{' '}
              among businesses
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
              Facilitating synergistic partnerships that drive collective success. Our tailored approach
              fosters open communication channels, innovation, enabling companies to achieve their shared
              objectives efficiently.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20 btn-shine"
            >
              Begin Your Journey
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Interactive Awards Carousel Box */}
          <div className="relative p-8 rounded-3xl border border-[#2a2a2a] bg-[#050505] flex flex-col items-center justify-center min-h-[300px]">
            <div className="relative w-full max-w-[280px] mx-auto overflow-hidden h-[180px]">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {awardLogos.map((logo, idx) => {
                  const content = (
                    <div className="relative w-[160px] h-[160px]">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )
                  return (
                    <div
                      key={idx}
                      className="w-full flex-shrink-0 flex justify-center items-center h-full px-4"
                    >
                      {logo.href ? (
                        <a
                          href={logo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-full h-full flex justify-center items-center hover:scale-105 transition-transform"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="relative w-full h-full flex justify-center items-center hover:scale-105 transition-transform cursor-default">
                          {content}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation buttons positioned absolutely inside the card */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#2a2a2a] hover:border-white/40 flex items-center justify-center text-gray-400 hover:text-white transition-all bg-black/50 backdrop-blur z-10"
              aria-label="Previous Award"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#2a2a2a] hover:border-white/40 flex items-center justify-center text-gray-400 hover:text-white transition-all bg-black/50 backdrop-blur z-10"
              aria-label="Next Award"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Services Grid ──────────────────────────────────────────────── */
const services = [
  {
    image: '/assets/services-icons/Vector.svg',
    title: 'Web Development',
    desc: 'Crafting engaging online experiences through bespoke web development solutions, tailored to elevate your brand\'s digital presence.',
    href: '/web-development',
  },
  {
    image: '/assets/services-icons/dedicated-team.svg',
    title: 'SEO (Search Engine Optimization)',
    desc: 'Drive organic search traffic, secure high keyword rankings, and increase conversion rates with our technical, on-page, and off-page SEO services.',
    href: '/digital-marketing',
  },
  {
    image: '/assets/services-icons/uiux.svg',
    title: 'PPC Management',
    desc: 'Maximize ROI with data-driven search, display, and social PPC ad campaigns. We optimize bids, ad copy, and landing pages for optimal results.',
    href: '/digital-marketing',
  },
  {
    image: '/assets/services-icons/qa.svg',
    title: 'Social Media Management',
    desc: 'Enhance your brand presence and engage active audiences on Facebook, LinkedIn, Instagram, and Twitter through custom organic strategies.',
    href: '/digital-marketing',
  },
  {
    image: '/assets/services-icons/it-consultancy.svg',
    title: 'IT & Digital Consulting',
    desc: 'Facilitating strategic IT and digital marketing consulting to streamline processes, drive innovation, and scale your business growth.',
    href: '/company/contact',
  },
  {
    image: '/assets/services-icons/geo.svg',
    title: 'GEO (Generative Engine Optimization)',
    desc: 'Optimize your brand visibility for AI search engines, Gemini, and ChatGPT. We ensure your business is cited and recommended in generative AI search summaries.',
    href: '/digital-marketing',
  },
]

function ServicesGrid() {
  return (
    <section className="py-20 bg-black section4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4">
            <span className="our-service-btn">Our Services</span>
          </div>
          <h2 className="service-tagline text-center text-capitalize">
            We Provide An Extensive Range Of IT Services
          </h2>
        </div>

        <RevealStaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {services.map((svc, idx) => (
              <RevealStaggerItem key={idx} index={idx} className="h-full">
                <InteractiveCard
                  href={svc.href}
                  className="p-6 flex flex-col items-center justify-center text-center service-card h-full border border-transparent hover:border-[#2a2a2a] bg-[#0a0a0a]/20 dark:bg-transparent rounded-2xl"
                >
                  <div className="flex flex-col items-center text-white w-full h-full justify-between" style={{ transformStyle: 'preserve-3d' }}>
                    <div 
                      className="image my-3 flex items-center justify-center h-14"
                      style={{ transform: 'translateZ(25px)' }}
                    >
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="h-10 w-auto object-contain filter brightness-110"
                        loading="lazy"
                      />
                    </div>
                    <div 
                      className="title my-3"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      <h4>{svc.title}</h4>
                    </div>
                    <div 
                      className="description max-w-sm flex-1 flex items-center justify-center"
                      style={{ transform: 'translateZ(12px)' }}
                    >
                      <p className="text-sm text-gray-400">{svc.desc}</p>
                    </div>
                  </div>
                </InteractiveCard>
              </RevealStaggerItem>
            ))}
          </div>
        </RevealStaggerContainer>
      </div>
    </section>
  )
}

/* ── Stats Bar ──────────────────────────────────────────────────── */
const stats = [
  { value: '400+', label: 'ACTIVE CLIENTS' },
  { value: '850 +', label: 'Projects done' },
  { value: '250+', label: 'team advisors' },
  { value: '10+', label: 'glorious years' },
]

function StatsBar() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="numbers w-full">
          <div className="numbers-section w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="miletone-container text-white">
                  <div className="miletone-number">
                    <StatsCounter value={stat.value} />
                  </div>
                  <div className="miletone-title flex items-center justify-center gap-1">
                    <span className="text-[10px] mr-1">●</span>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Featured Projects ──────────────────────────────────────────── */
const projects = [
  {
    title: 'AMPS App Design',
    category: 'Mobile App Development',
    desc: 'We provided app development services for The AMPS Institute, delivering a platform tailored to support its programs focused on the Roadmap to Entrepreneurship Excellence.',
    tags: ['React Native', 'UI/UX', 'iOS', 'Android'],
    color: 'from-blue-600/30 to-purple-600/10',
    accent: 'border-blue-500/20',
  },
  {
    title: 'MeinHaus Website Design',
    category: 'Web Development',
    desc: 'We developed MeinHaus\' website, linking service providers and users for services like painting, demolition, cleaning, and appliance installation.',
    tags: ['Next.js', 'Tailwind', 'Node.js', 'PostgreSQL'],
    color: 'from-purple-600/30 to-pink-600/10',
    accent: 'border-purple-500/20',
  },
  {
    title: 'Wikistrings Website Design',
    category: 'Web Development',
    desc: 'We crafted the website for Wikistrings, a dynamic platform designed for real-life interaction and evaluation of guitar strings.',
    tags: ['React', 'Express', 'MongoDB', 'AWS'],
    color: 'from-teal-600/30 to-blue-600/10',
    accent: 'border-teal-500/20',
  },
]

function FeaturedProjects() {
  return (
    <section className="py-20 bg-black section5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label mb-3">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Latest Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Our{' '}
              <span className="gradient-text-shimmer">Successful Projects</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2a2a2a] text-gray-300 hover:text-white hover:border-[#444] text-sm font-medium transition-all"
          >
            View All
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="projects-section">
          {/* Left Side: Tall Vertical Card */}
          <InteractiveCard
            href="/app-development"
            className="flex-1 project-sec-one project-one"
          >
            <div className="project-one-details" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
              <h3 className="project-title text-white mb-2" style={{ transform: 'translateZ(15px)' }}>AMPS App Design</h3>
              <p className="decs text-gray-300 max-w-md" style={{ transform: 'translateZ(10px)' }}>
                We provided app development services for The AMPS Institute, delivering a platform tailored to support its programs focused on the Roadmap to Entrepreneurship Excellence.
              </p>
            </div>
          </InteractiveCard>

          {/* Right Side: Stacked Horizontal Cards */}
          <div className="flex-1 flex flex-col gap-4 justify-between h-full" style={{ transformStyle: 'preserve-3d' }}>
            <InteractiveCard
              href="/app-development"
              className="flex-1 project-sec-two project-two"
            >
              <div className="project-two-details" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                <h3 className="project-title text-white mb-2" style={{ transform: 'translateZ(15px)' }}>MainHaus Website Design</h3>
                <p className="decs text-gray-300" style={{ transform: 'translateZ(10px)' }}>
                  We developed MeinHaus' website, linking service providers and users for services like painting, demolition, cleaning, and appliance installation.
                </p>
              </div>
            </InteractiveCard>

            <InteractiveCard
              href="/web-development"
              className="flex-1 project-sec-two project-three"
            >
              <div className="project-three-details" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                <h3 className="project-title text-white mb-2" style={{ transform: 'translateZ(15px)' }}>Wikistrings Website Design</h3>
                <p className="decs text-gray-300" style={{ transform: 'translateZ(10px)' }}>
                  We crafted the website for Wikistrings, a dynamic platform designed for real-life interaction and evaluation of guitar strings.
                </p>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Office Locations ───────────────────────────────────────────── */
const locations = [
  {
    country: 'United States',
    address: '173 E Columbine LN, Westfield, Indiana 46074',
    skyline: '/assets/locations/USA.svg',
  },
  {
    country: 'India',
    address: 'H-11, First Floor, Sector 62, Noida, Uttar Pradesh 201301',
    skyline: '/assets/locations/INDIA.svg',
  },
  {
    country: 'Australia',
    address: '10 Suffolk Place Aintree, Victoria, Australia 3336',
    skyline: '/assets/locations/AUSTRALIA.svg',
  },
  {
    country: 'Ontario, Canada',
    address: '6-425 Hespeler Road, Cambridge, Unit 303, N1R8J6',
    skyline: '/assets/locations/CANADA.svg',
  },
  {
    country: 'United Kingdom',
    address: 'United Kingdom Office',
    skyline: '/assets/locations/UK.svg',
  },
  {
    country: 'Ireland',
    address: '5 Gleann Dara, Tully, Ballinamore Co Leitrim, Ireland',
    skyline: '/assets/locations/Dublin.png',
  },
]

function OfficeLocations() {
  return (
    <section className="py-20 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
            Our Locations
          </h2>
        </div>

        {/* 6 Country Grid */}
        <RevealStaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {locations.map((loc, idx) => (
              <RevealStaggerItem key={loc.country} index={idx}>
                <div className="text-center flex flex-col items-center">
                  <div className="w-full h-36 flex items-center justify-center mb-6">
                    <img
                      src={loc.skyline}
                      alt={`${loc.country} Skyline`}
                      className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">{loc.country}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{loc.address}</p>
                </div>
              </RevealStaggerItem>
            ))}
          </div>
        </RevealStaggerContainer>

        {/* UAE separate banner */}
        <div className="border-t border-[#2a2a2a]/40 pt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-full h-40 flex items-center justify-center mb-6">
              <img
                src="/assets/locations/UAE.svg"
                alt="UAE Skyline"
                className="max-h-full max-w-full object-contain filter brightness-90"
              />
            </div>
            <h3 className="text-white font-bold text-2xl mb-6">UAE</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify md:text-center max-w-3xl mx-auto font-medium">
              Digitacurve is a global technology company that offers a wide array of services focused on moving companies into the digital age. Our operations span the USA, UK, Canada, Australia, Middle-East, Ireland, and India, and across the globe. We excel in the fields of web development, SEO, PPC, social media management, and digital consulting. Our web development services include the design of dynamic, sophisticated, and high-end CMS websites with the use of advanced technologies. Also, our digital marketing campaigns with SEO, SMO and Paid ads are designed to deliver results by maximizing conversion rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Trusted Clients Ticker ─────────────────────────────────────── */
const clients = [
  'AMPS Institute', 'MeinHaus', 'Wikistrings', 'Imbooked', 'VLaunch Solutions',
  'Fiscal Kids', 'Keep It Going', 'Happiness Calculator', 'TechVentures', 'DigiGrowth',
]

function TrustedClients() {
  return (
    <section className="py-16 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="section-label justify-center mb-4">
            <span className="w-6 h-px bg-blue-400 inline-block" />
            Our Customers
            <span className="w-6 h-px bg-blue-400 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Trusted Over Worldwide
          </h2>
        </div>
        <div className="flex justify-center items-center w-full">
          <img
            src="/assets/home/map2.svg"
            alt="Trusted Worldwide Map"
            className="w-full max-w-5xl h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Reveal Section ────────────────────────────────────────────── */
function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  )
}

/* ── Stagger Reveal Components ─────────────────────────────────── */
const StaggerContext = createContext({ animate: false })

function RevealStaggerContainer({ children, threshold = 0.05 }: { children: React.ReactNode, threshold?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <StaggerContext.Provider value={{ animate }}>
      <div ref={ref}>{children}</div>
    </StaggerContext.Provider>
  )
}

function RevealStaggerItem({ children, index, className = '' }: { children: React.ReactNode, index: number, className?: string }) {
  const { animate } = useContext(StaggerContext)
  const delays = [
    'delay-[0ms]',
    'delay-[100ms]',
    'delay-[200ms]',
    'delay-[300ms]',
    'delay-[400ms]',
    'delay-[500ms]',
    'delay-[600ms]',
  ]
  const delayClass = delays[index % delays.length]

  return (
    <div
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${delayClass} ${
        animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* ── Animated Stats Counter ────────────────────────────────────── */
function StatsCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  const match = value.match(/(\d+)/)
  const target = match ? parseInt(match[0], 10) : 0
  const suffix = value.replace(/[\d\s]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress * (2 - progress) // Ease out quad
      const currentCount = Math.floor(easeProgress * target)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

/* ── Custom Slider ──────────────────────────────────────────────── */
interface CustomSliderProps {
  children: React.ReactNode[]
  className?: string
  arrowOffsetClass?: string
}

function CustomSlider({
  children,
  className = '',
  arrowOffsetClass = 'left-[-2.5rem] right-[-2.5rem]'
}: CustomSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  if (children.length === 0) return null

  const arrowClasses = arrowOffsetClass.split(' ')
  const leftClass = arrowClasses[0] || 'left-[-2.5rem]'
  const rightClass = arrowClasses[1] || 'right-[-2.5rem]'

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, idx) => (
            <div key={idx} className="w-full flex-shrink-0 flex justify-center items-center">
              {child}
            </div>
          ))}
        </div>
      </div>

      {children.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute ${leftClass} top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-[#2a2a2a] hover:border-white/40 flex items-center justify-center text-gray-400 hover:text-white transition-all bg-black/50 backdrop-blur`}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute ${rightClass} top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-[#2a2a2a] hover:border-white/40 flex items-center justify-center text-gray-400 hover:text-white transition-all bg-black/50 backdrop-blur`}
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  )
}

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

/* ── Testimonials & Feedback Carousel ───────────────────────────── */
const videoSlides = [
  {
    desktopVideos: [
      'https://www.youtube.com/embed/4YtZVEFoKOk?si=QtSjYw7pfVf_LTSP',
      'https://www.youtube.com/embed/WT_BrOCELO0?si=Bdb2LklrC8cEY8Dj'
    ],
    mobileVideos: [
      'https://www.youtube.com/embed/4YtZVEFoKOk?si=QtSjYw7pfVf_LTSP',
      'https://www.youtube.com/embed/WT_BrOCELO0?si=Bdb2LklrC8cEY8Dj'
    ]
  },
  {
    desktopVideos: [
      'https://www.youtube.com/embed/mX2CPiqvwBk?si=mM9JWEsZeExYCmfw',
      'https://www.youtube.com/embed/pMPsnbiOl4w?si=ncGGXZxvY3efXCNG'
    ],
    mobileVideos: [
      'https://www.youtube.com/embed/mX2CPiqvwBk?si=mM9JWEsZeExYCmfw',
      'https://www.youtube.com/embed/pMPsnbiOl4w?si=ncGGXZxvY3efXCNG'
    ]
  },
  {
    desktopVideos: [
      'https://www.youtube.com/embed/4N7M0jR32Us?si=ekhGgyr9VCuLpieX',
      'https://www.youtube.com/embed/TKIA_4ZRR9s?si=gvblLysR61vvNzHk'
    ],
    mobileVideos: [
      'https://www.youtube.com/embed/4N7M0jR32Us?si=ekhGgyr9VCuLpieX',
      'https://www.youtube.com/embed/TKIA_4ZRR9s?si=gvblLysR61vvNzHk'
    ]
  },
  {
    desktopVideos: [
      'https://www.youtube.com/embed/TIrjXN3XY-A?si=Z4ZLe9oynnEjqG4P',
      'https://www.youtube.com/embed/HXgyx4Suux4'
    ],
    mobileVideos: [
      'https://www.youtube.com/embed/TIrjXN3XY-A?si=Z4ZLe9oynnEjqG4P',
      'https://www.youtube.com/embed/HXgyx4Suux4'
    ]
  }
]

interface FeedbackItem {
  _id: string
  name: string
  profileImg: string
  designation: string
  stars: number
  message: string
  link: string
  logo: string
  category: string | null
}

const localFeedbacks: FeedbackItem[] = [
  {
    _id: 'fb1',
    name: 'Caroline Andrew',
    profileImg: '/assets/avatars/avatar1.png',
    designation: 'CEO, AppSphere Inc.',
    stars: 5,
    message: 'Best Digital Marketing Company. Our objective behind the collaboration with Digitacurve was to strengthen our online presence through targeted SEO strategies, aiming to increase organic traffic and improve brand authority. They exceeded our expectations in every milestone.',
    link: 'https://clutch.co/profile/digitacurve',
    logo: '/assets/reviews/rclutch.png',
    category: 'Marketing'
  },
  {
    _id: 'fb2',
    name: 'Kelvin Murphy',
    profileImg: '/assets/avatars/avatar2.png',
    designation: 'CEO at PointB Travel Sector',
    stars: 5,
    message: 'Proactive approach. They continuously analyzed performance, adapted strategies, and focused on long-term growth tailored to our business goals. Digitacurve is a highly professional and responsive development partner.',
    link: 'https://clutch.co/profile/digitacurve',
    logo: '/assets/reviews/rclutch.png',
    category: 'Web Dev'
  },
  {
    _id: 'fb3',
    name: 'Sarah Jenkins',
    profileImg: '/assets/avatars/avatar3.png',
    designation: 'Product Lead, FinTech Solutions',
    stars: 5,
    message: 'Digitacurve delivered our mobile app on schedule and within budget. The user experience and visual design are outstanding. Highly recommend their skilled mobile app engineering team.',
    link: 'https://google.com',
    logo: '/assets/reviews/rgoogle.png',
    category: 'App Dev'
  },
  {
    _id: 'fb4',
    name: 'David Chen',
    profileImg: '/assets/avatars/avatar4.png',
    designation: 'Founder, VLaunch Accelerator',
    stars: 5,
    message: 'We hired Digitacurve to redesign our corporate portal. Their technical consulting and development velocity were top-tier. Our site speed increased by 150%, and client sign-ups rose instantly.',
    link: 'https://google.com',
    logo: '/assets/reviews/rgoogle.png',
    category: 'Web Dev'
  }
]

function TestimonialsSection({ videoTestimonials }: { videoTestimonials: boolean }) {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>(localFeedbacks)
  const [isMobile, setIsMobile] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!hasMounted) return null

  return (
    <section className={`py-16 bg-black ${videoTestimonials ? 'border-t border-[#1a1a1a]' : 'section7 border-t border-[#1a1a1a]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">
            <span className="w-6 h-px bg-blue-400 inline-block" />
            {videoTestimonials ? 'Video Reviews' : 'Client Feedback'}
            <span className="w-6 h-px bg-blue-400 inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {videoTestimonials ? 'What Our Clients Say' : 'Trusted by Thousands'}
          </h2>
        </div>

        {videoTestimonials ? (
          /* Video Carousel */
          isMobile ? (
            <CustomSlider arrowOffsetClass="left-2 right-2" className="Testimonials-carou">
              {videoSlides.flatMap((slide) => slide.mobileVideos).map((videoUrl, idx) => (
                <div key={idx} className="w-full max-w-[340px] h-[220px] rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#0a0a0a]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title={`Video review ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ))}
            </CustomSlider>
          ) : (
            <CustomSlider arrowOffsetClass="left-[-2.5rem] right-[-2.5rem]" className="Testimonials-carou">
              {videoSlides.map((slide, slideIdx) => (
                <div key={slideIdx} className="flex justify-center gap-6 w-full max-w-5xl py-4">
                  {slide.desktopVideos.map((videoUrl, idx) => (
                    <div key={idx} className="w-[500px] h-[300px] rounded-2xl overflow-hidden border border-[#2a2a2a] bg-[#0a0a0a] shadow-lg shadow-black/50 hover:border-blue-500/30 transition-all duration-300">
                      <iframe
                        width="100%"
                        height="100%"
                        src={videoUrl}
                        title={`Video testimonial ${slideIdx * 2 + idx + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              ))}
            </CustomSlider>
          )
        ) : (
          /* Text Reviews Carousel */
          feedbacks.length > 0 && (
            <CustomSlider
              arrowOffsetClass={isMobile ? 'left-2 right-2' : 'left-[-2.5rem] right-[-2.5rem]'}
              className="Testimonials-carou"
            >
              {chunkArray(feedbacks, isMobile ? 1 : 2).map((chunk, slideIdx) => (
                <div key={slideIdx} className="flex justify-center gap-8 py-6 px-2 w-full max-w-5xl">
                  {chunk.map((item, idx) => (
                    <div key={idx} className="customer-feedback w-full max-w-[500px] flex">
                      <div className="cf-cont cf-cont-dark flex flex-col justify-between text-left w-full h-full min-h-[335px] hover:border-blue-500/20 transition-all duration-300">
                        {/* Stars & Logo */}
                        <div className="stars flex justify-between items-center mb-5 w-full">
                          <div className="flex gap-0.5 text-[#EDB451]">
                            {Array.from({ length: item.stars || 5 }).map((_, starIdx) => (
                              <Star key={starIdx} size={15} fill="#EDB451" stroke="#EDB451" />
                            ))}
                          </div>
                          {item.logo && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer shrink-0">
                              <img
                                src={item.logo}
                                alt="review platform logo"
                                loading="lazy"
                                className="rounded-[5px] w-[60px] h-[34px] object-contain bg-white/10 p-0.5"
                              />
                            </a>
                          )}
                        </div>

                        {/* Review body */}
                        <div className="feedback overflow-auto max-h-32 p-2 scrollbar-hide text-sm text-gray-300 font-light leading-relaxed mb-6 flex-1">
                          {item.message}
                        </div>

                        {/* Author */}
                        <div className="customer flex justify-between items-end mt-auto w-full pt-4 border-t border-white/5">
                          <div className="customer-name">
                            <h5 className="font-bold text-white text-base leading-tight mb-1">{item.name}</h5>
                            <p className="m-0 text-xs text-gray-500 font-medium">{item.designation}</p>
                          </div>
                          {item.profileImg && (
                            <div className="profile shrink-0 ml-4">
                              <img
                                className="rounded-full w-[60px] h-[60px] object-cover border border-white/20 bg-white"
                                src={item.profileImg}
                                alt={`${item.name} profile`}
                                loading="lazy"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </CustomSlider>
          )
        )}
      </div>
    </section>
  )
}

/* ── Recent Blogs Section ───────────────────────────────────────── */
interface BlogItem {
  id: string
  title: string
  description: string
  category: string
  image: string
  image2: string
  readTime: string
  quote: string
  custom_url: string
  meta_title: string
  meta_desc: string
  createdAt: string
  updatedAt: string
}

function getBlogImage(title: string, originalImage: string): string {
  const lower = title.toLowerCase();
  if (lower.includes('shipping') || lower.includes('delivery')) {
    return '/assets/blogs/shipping.jpg';
  }
  if (lower.includes('walmart') || lower.includes('ecommerce')) {
    return '/assets/blogs/ecommerce.jpg';
  }
  if (lower.includes('marketplace') || lower.includes('buying') || lower.includes('selling')) {
    return '/assets/blogs/marketplace.jpg';
  }
  if (lower.includes('instacart') || lower.includes('shopper') || lower.includes('grocery')) {
    return '/assets/blogs/grocery.jpg';
  }
  if (lower.includes('chatgpt') || lower.includes('ai') || lower.includes('dopple') || lower.includes('quillbot') || lower.includes('generative')) {
    return '/assets/blogs/tech.jpg';
  }
  if (lower.includes('zigbee') || lower.includes('z-wave') || lower.includes('smart home') || lower.includes('iot')) {
    return '/assets/blogs/smart-home.jpg';
  }
  if (lower.includes('web 2.0') || lower.includes('web 3.0') || lower.includes('blockchain')) {
    return '/assets/blogs/web3.jpg';
  }
  if (lower.includes('azure') || lower.includes('aws') || lower.includes('google cloud') || lower.includes('cloud')) {
    return '/assets/blogs/cloud.jpg';
  }
  if (lower.includes('youtube') || lower.includes('shorts') || lower.includes('video')) {
    return '/assets/blogs/video.jpg';
  }
  if (lower.includes('canva') || lower.includes('photo') || lower.includes('design') || lower.includes('chub')) {
    return '/assets/blogs/design.jpg';
  }
  if (lower.includes('marketing') || lower.includes('grow your mobile app')) {
    return '/assets/blogs/marketing.png';
  }
  if (lower.includes('ott') || lower.includes('ott advertising')) {
    return '/assets/blogs/ott.png';
  }
  if (originalImage && originalImage.startsWith('http')) {
    return originalImage;
  }
  return '/assets/blogs/default.jpg';
}

const localBlogs: BlogItem[] = [
  {
    id: '1',
    title: 'How Generative AI is Changing Enterprise Software Development',
    description: 'Generative AI tools are reshaping the software engineering lifecycle. Discover how companies are implementing LLMs to automate testing and speed up coding velocity.',
    category: 'AI & Tech',
    image: '/assets/blogs/tech.jpg',
    image2: '',
    readTime: '6 min read',
    quote: '',
    custom_url: 'generative-ai-enterprise-software',
    meta_title: 'How Generative AI is Changing Enterprise Software Development',
    meta_desc: 'Generative AI tools are reshaping the software engineering lifecycle. Discover how companies are implementing LLMs to automate testing and speed up coding velocity.',
    createdAt: 'May 20, 2026',
    updatedAt: 'May 20, 2026',
  },
  {
    id: '2',
    title: 'Top 5 Mobile App UX Trends to Watch in 2026',
    description: 'From spatial computing design patterns to micro-gestures and AI-driven personalization, explore the core design elements that will dominate iOS and Android app stores.',
    category: 'App Dev',
    image: '/assets/blogs/design.jpg',
    image2: '',
    readTime: '5 min read',
    quote: '',
    custom_url: 'mobile-app-ux-trends-2026',
    meta_title: 'Top 5 Mobile App UX Trends to Watch in 2026',
    meta_desc: 'From spatial computing design patterns to micro-gestures and AI-driven personalization, explore the core design elements that will dominate iOS and Android app stores.',
    createdAt: 'May 15, 2026',
    updatedAt: 'May 15, 2026',
  },
  {
    id: '3',
    title: 'The Shift to Serverless Next.js and Edge Computing Platforms',
    description: 'Edge middleware and serverless APIs are minimizing TTFB and maximizing Core Web Vitals performance. Learn why businesses are migrating their backends to edge configurations.',
    category: 'Web Dev',
    image: '/assets/blogs/cloud.jpg',
    image2: '',
    readTime: '8 min read',
    quote: '',
    custom_url: 'serverless-nextjs-edge-computing',
    meta_title: 'The Shift to Serverless Next.js and Edge Computing Platforms',
    meta_desc: 'Edge middleware and serverless APIs are minimizing TTFB and maximizing Core Web Vitals performance. Learn why businesses are migrating their backends to edge configurations.',
    createdAt: 'May 08, 2026',
    updatedAt: 'May 08, 2026',
  },
  {
    id: '4',
    title: 'Search Engine Landscaping: Navigating AI-Generated Search Summaries',
    description: 'As search engines incorporate AI-driven results, traditional SEO strategies must evolve. Discover how to optimize content for AI answers and maintain high visibility.',
    category: 'Marketing',
    image: '/assets/blogs/marketplace.jpg',
    image2: '',
    readTime: '7 min read',
    quote: '',
    custom_url: 'search-engine-landscaping-ai-search',
    meta_title: 'Search Engine Landscaping: Navigating AI-Generated Search Summaries',
    meta_desc: 'As search engines incorporate AI-driven results, traditional SEO strategies must evolve. Discover how to optimize content for AI answers and maintain high visibility.',
    createdAt: 'Apr 28, 2026',
    updatedAt: 'Apr 28, 2026',
  },
  {
    id: '5',
    title: 'Securing IoT Devices: Best Practices for Firmware Development',
    description: 'Connected hardware devices present unique security vulnerabilities. Explore practical steps for provisioning credentials, encrypting telemetry, and deploying OTA updates.',
    category: 'AI & Tech',
    image: '/assets/blogs/smart-home.jpg',
    image2: '',
    readTime: '9 min read',
    quote: '',
    custom_url: 'securing-iot-devices-firmware',
    meta_title: 'Securing IoT Devices: Best Practices for Firmware Development',
    meta_desc: 'Connected hardware devices present unique security vulnerabilities. Explore practical steps for provisioning credentials, encrypting telemetry, and deploying OTA updates.',
    createdAt: 'Apr 22, 2026',
    updatedAt: 'Apr 22, 2026',
  },
  {
    id: '6',
    title: 'Mastering App Store Optimization (ASO) for Higher Downloads',
    description: 'Creating a great application is only half the battle. Discover the visual and text optimization guidelines to rank higher in Google Play and iOS App Store searches.',
    category: 'Marketing',
    image: '/assets/blogs/ecommerce.jpg',
    image2: '',
    readTime: '5 min read',
    quote: '',
    custom_url: 'mastering-aso-app-store-optimization',
    meta_title: 'Mastering App Store Optimization (ASO) for Higher Downloads',
    meta_desc: 'Creating a great application is only half the battle. Discover the visual and text optimization guidelines to rank higher in Google Play and iOS App Store searches.',
    createdAt: 'Apr 14, 2026',
    updatedAt: 'Apr 14, 2026',
  },
]

function RecentBlogsSection() {
  const [blogs, setBlogs] = useState<BlogItem[]>(localBlogs)
  const [slides, setSlides] = useState<BlogItem[][]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (blogs.length === 0) return

    let chunkSize = 3
    if (isMobile) chunkSize = 1
    else if (isTablet) chunkSize = 2

    const filtered = blogs.slice(0, 9)
    setSlides(chunkArray(filtered, chunkSize))
  }, [blogs, isMobile, isTablet])

  if (!hasMounted || blogs.length === 0) return null

  return (
    <section className="py-20 bg-black recent-blogs border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 w-full">
          <div className="w-1/3"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center w-1/3 rc-blogs">
            Recent Blogs
          </h2>
          <div className="w-1/3 text-right">
            <Link
              href="/blog"
              className="inline-block px-5 py-2.5 bg-[#00a3ff] hover:bg-[#008ae0] text-white rounded-lg text-sm font-semibold transition-all btn-shine"
            >
              View All Blogs
            </Link>
          </div>
        </div>

        <CustomSlider
          arrowOffsetClass={isMobile ? 'left-2 right-2' : isTablet ? 'left-[-2.5rem] right-[-2.5rem]' : 'left-[-6rem] right-[-6rem]'}
          className="recent-blogs-carou"
        >
          {slides.map((chunk, slideIdx) => (
            <div key={slideIdx} className="flex justify-center gap-6 py-4 px-2 w-full max-w-5xl">
              {chunk.map((blog) => (
                <div key={blog.id} className="w-full max-w-[340px] md:max-w-[385px] shrink-0 flex">
                  <div className="card rounded-2xl flex flex-col w-full min-h-[440px] bg-[#111111] border border-[#2a2a2a] overflow-hidden hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={getBlogImage(blog.title, blog.image)}
                      alt={blog.title}
                      className="w-full h-[200px] object-cover rounded-t-2xl border-b border-[#2a2a2a]/40"
                      loading="lazy"
                    />
                    <div className="card-body p-6 flex flex-col flex-1 text-left">
                      <h5 className="card-title text-white text-lg font-bold mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                        {blog.meta_title || blog.title}
                      </h5>
                      <p
                        className="card-text text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.meta_desc && blog.meta_desc.length > 140
                              ? `${blog.meta_desc.slice(0, 140)}...`
                              : (blog.meta_desc || '')
                        }}
                      />
                      <Link
                        href={`/blog/${blog.custom_url}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="px-5 py-2.5 bg-[#00a3ff] hover:bg-[#008ae0] text-white rounded-lg text-sm font-semibold transition-all inline-block text-center self-start btn-shine"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </CustomSlider>
      </div>
    </section>
  )
}

function GeoOptimizationSection() {
  const engines = [
    {
      name: 'ChatGPT',
      description: 'Be the go-to suggestion when users ask for your products or services.',
      icon: (
        <svg className="w-8 h-8 text-[#10a37f]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.9 11.3c.2-.5.3-1 .3-1.6 0-2.8-2.3-5.1-5.1-5.1-.9 0-1.8.2-2.5.7C12.8 4.4 11.5 3.8 10 3.8 7.2 3.8 5 6.1 5 8.9c0 .6.1 1.2.3 1.7C4.4 11.4 3.8 12.8 3.8 14.2c0 2.8 2.3 5.1 5.1 5.1.9 0 1.7-.2 2.5-.7.8.9 2.1 1.5 3.5 1.5 2.8 0 5.1-2.3 5.1-5.1 0-.6-.1-1.2-.3-1.7.9-.7 1.6-2.1 1.6-3.5 0-1.2-.5-2.2-1.3-3zm-6 8c-.6 0-1.2-.2-1.6-.5.1 0 .1-.1.2-.1l3.5-2c.2-.1.3-.4.3-.6v-4.9l1.5.9c.8.5 1.3 1.3 1.3 2.3 0 1.5-1.2 2.7-2.7 2.7-1.2.1-2.2-.8-2.5-1.8zm-5.6-2.3c-.3-.5-.4-1.1-.4-1.7.1 0 .2.1.2.1l3.5 2c.2.1.5.1.7-.1l4.2-2.4v1.7c0 1-.5 1.9-1.3 2.4-1.3.8-3 .3-3.8-1l-3.1-5zm-1.8-6.1c.3-.5.7-.9 1.2-1.2v4.1c0 .2.1.5.4.6l4.2 2.4-1.5.9c-.8.5-1.9.7-2.8.2-.9-.5-1.5-1.5-1.5-2.6.1-1.8.8-3.4 1.8-4.4zM7.2 8.9c0-1.5 1.2-2.7 2.7-2.7.6 0 1.2.2 1.6.5-.1 0-.1.1-.2.1L7.8 8.8c-.2.1-.3.4-.3.6v4.9L6 13.4c-.8-.5-1.3-1.4-1.3-2.3 0-1.2.9-2.2 2.5-2.2zm7 2.8l-3.5-2 1.5-.9 3.5 2v4l-1.5-1.1v-2zm-5 5.2V11c0-.2-.1-.5-.4-.6L4.6 8v-1.7c0-1 .5-1.9 1.3-2.4 1.3-.8 3-.3 3.8 1l3.1 5.1-4 2.2zM14 6.7c.3.5.4 1.1.4 1.7-.1 0-.2-.1-.2-.1l-3.5-2c-.2-.1-.5-.1-.7.1L5.8 8.8V7.1c0-1 .5-1.9 1.3-2.4 1.3-.8 3-.3 3.8 1l3.1 5z" />
        </svg>
      ),
      glow: 'hover:shadow-green-500/10 hover:border-green-500/30'
    },
    {
      name: 'Google Gemini',
      description: 'Get featured across Search, Maps, and Gemini\'s local answers.',
      icon: (
        <svg className="w-8 h-8 text-[#4a90e2]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096a5.148 5.148 0 00-4.225-4.225L1 11l5.096-.813a5.148 5.148 0 004.225-4.225L11 1l.813 5.096a5.148 5.148 0 004.225 4.225L23 11l-5.096.813a5.148 5.148 0 00-4.225 4.225L13 21l-.813-5.096a5.15 5.15 0 00-4.225-4.225z" fill="url(#gemini-grad)" />
          <defs>
            <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      ),
      glow: 'hover:shadow-blue-500/10 hover:border-blue-500/30'
    },
    {
      name: 'Perplexity AI',
      description: 'Be referenced and linked as a credible source in real-time answers.',
      icon: (
        <svg className="w-8 h-8 text-[#19cca2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V3m0 18a9 9 0 000-18m0 0a9.004 9.004 0 00-8.716 6.747M12 3a9.004 9.004 0 018.716 6.747M12 3a9.004 9.004 0 00-8.716 6.747" />
        </svg>
      ),
      glow: 'hover:shadow-teal-500/10 hover:border-teal-500/30'
    },
    {
      name: 'Claude',
      description: 'Match Claude\'s content style so it confidently cites your brand.',
      icon: (
        <svg className="w-8 h-8 text-[#cc785c]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8M9 9l6 6M15 9l-6 6" />
        </svg>
      ),
      glow: 'hover:shadow-amber-600/10 hover:border-amber-600/30'
    },
    {
      name: 'Meta AI',
      description: 'Surface inside Facebook, Instagram, & WhatsApp AI chats.',
      icon: (
        <svg className="w-8 h-8 text-[#a855f7]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829a9 9 0 11-12.728 0m0 0l2.829-2.829m-2.829 2.829a9 9 0 010-12.728m0 0l2.828 2.828" />
        </svg>
      ),
      glow: 'hover:shadow-purple-500/10 hover:border-purple-500/30'
    },
    {
      name: 'Grok',
      description: 'Appear in X\'s conversational AI for trending & niche topics.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
        </svg>
      ),
      glow: 'hover:shadow-white/10 hover:border-white/20'
    },
    {
      name: 'Google Search',
      description: 'Classic SEO — technical, content & local rankings that still matter.',
      icon: (
        <svg className="w-8 h-8 text-[#ea4335]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.92 1 12s4.92 11 11.24 11c6.6 0 11-4.65 11-11.2 0-.75-.08-1.32-.18-1.815z" />
        </svg>
      ),
      glow: 'hover:shadow-red-500/10 hover:border-red-500/30'
    },
    {
      name: 'Voice & Visual',
      description: 'Get noticed in AI tools that use voice commands and images too.',
      icon: (
        <svg className="w-8 h-8 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      glow: 'hover:shadow-sky-500/10 hover:border-sky-500/30'
    }
  ]

  return (
    <section className="py-24 bg-black border-t border-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
            <span className="w-6 h-px bg-blue-400 inline-block" />
            Where We Get You Seen
            <span className="w-6 h-px bg-blue-400 inline-block" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Optimized for every major <span className="gradient-text">AI engine</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            GEO + SEO: The new front page of the internet is an AI answer. Be the brand that AI recommends and Google ranks.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engines.map((engine) => (
            <div
              key={engine.name}
              className={`p-8 rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111111] hover:border-opacity-50 ${engine.glow} group flex flex-col items-center text-center`}
            >
              <div className="w-16 h-16 rounded-2xl bg-black border border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-inner shadow-black">
                {engine.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-wide">{engine.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{engine.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <RevealSection>
        <CategoriesGrid />
      </RevealSection>
      <RevealSection>
        <ReviewBadges />
      </RevealSection>
      <RevealSection>
        <CollaborationBanner />
      </RevealSection>
      <RevealSection>
        <ServicesGrid />
      </RevealSection>
      <RevealSection>
        <GeoOptimizationSection />
      </RevealSection>
      <RevealSection>
        <StatsBar />
      </RevealSection>
      <RevealSection>
        <FeaturedProjects />
      </RevealSection>
      <RevealSection>
        <TrustedClients />
      </RevealSection>
      <RevealSection>
        <TestimonialsSection videoTestimonials={false} />
      </RevealSection>
      <RevealSection>
        <RecentBlogsSection />
      </RevealSection>
      <RevealSection>
        <OfficeLocations />
      </RevealSection>
    </>
  )
}
