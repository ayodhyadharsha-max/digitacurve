'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Calculator, CheckCircle2, ArrowRight, Phone, MessageSquare, Sparkles,
  HelpCircle, DollarSign, Globe, Smartphone, TrendingUp, ShieldCheck, Zap,
  Rocket, Shield, Building2, Stethoscope, Compass, SunMedium
} from 'lucide-react'
import QuoteCalculator from '@/components/QuoteCalculator'

const turnkeyPackages = [
  {
    name: 'Starter Business Growth',
    badge: 'Essential Setup',
    tagline: 'Best for Local Businesses & Service Providers needing instant authority',
    priceINR: '₹49,999',
    priceUSD: '$999',
    period: 'One-Time + Optional Monthly Retainer',
    features: [
      'High-Speed Next.js Custom Website (5-8 Pages)',
      '100/100 Mobile & Desktop Core Web Vitals',
      'Google My Business & Local Map 3-Pack Setup',
      'On-Page SEO & Schema Markup Integration',
      'Direct WhatsApp & Lead Capture Form Integration',
      '1 Year High-Speed Cloud Edge Hosting Setup',
      'Domain & SSL Configuration Included',
    ],
    buttonText: 'Get Starter Growth',
    popular: false,
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-[#2a2a2a]',
  },
  {
    name: '360° Lead Machine',
    badge: 'Most Popular Choice',
    tagline: 'For Builders, Doctors, Travel & Solar Companies scaling revenue fast',
    priceINR: '₹1,24,999',
    priceUSD: '$2,499',
    period: 'Complete Growth Architecture',
    features: [
      'Everything in Starter Package +',
      'Custom Mobile-Responsive Web Portal or Web App',
      'Google Search PPC & Meta (FB/Insta) Ad Setup',
      'Interactive Lead Magnets & Cost Calculators',
      'Automated WhatsApp & Email Lead Notifications',
      'Generative Engine Optimization (GEO for ChatGPT & Gemini)',
      'High-Intent Landing Page Conversion Funnel',
      'Bi-Weekly ROI & Lead Tracking Reports',
    ],
    buttonText: 'Claim 360° Lead Machine',
    popular: true,
    color: 'from-purple-500/30 via-pink-500/20 to-purple-500/10',
    borderColor: 'border-purple-500/50',
  },
  {
    name: 'Enterprise Global Dominance',
    badge: 'Full Scale Tech & Marketing',
    tagline: 'For Established Brands, Startups & Multi-Location Global Enterprises',
    priceINR: '₹2,49,999+',
    priceUSD: '$4,999+',
    period: 'Custom Enterprise Blueprint',
    features: [
      'Everything in 360° Lead Machine +',
      'Cross-Platform Hybrid Mobile App (iOS & Android)',
      'Custom AI Agents & Internal Workflow Automations',
      'Multi-Location SEO for Global Cities (US, UK, UAE, India)',
      'Advanced Multi-Tenant SaaS or Headless E-Commerce',
      'Dedicated Senior Project Manager & 24/7 Priority SLA',
      'Full Source Code Ownership & Tech IP Transfer',
    ],
    buttonText: 'Consult Enterprise Architect',
    popular: false,
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'border-[#2a2a2a]',
  },
]

const itemizedServices = [
  {
    category: 'Website Development Costs (2026)',
    desc: 'Cost breakdown based on architecture, design complexity, and performance requirements.',
    items: [
      {
        type: 'Startup / Small Business Website',
        priceINR: '₹25,000 – ₹45,000',
        priceUSD: '$350 – $600',
        delivery: '5-7 Days',
        features: ['5-8 Custom Pages', 'Mobile Responsive Next.js / Tailwind', 'Basic On-Page SEO', 'Contact Form & WhatsApp Integration', '1 Year Free Hosting Setup'],
      },
      {
        type: 'Corporate & Lead Generation Website',
        priceINR: '₹50,000 – ₹95,000',
        priceUSD: '$700 – $1,300',
        delivery: '10-15 Days',
        popular: true,
        features: ['10-20 Dynamic Pages', 'Sub-Second Next.js Performance', 'Custom Interactive Calculators', 'Full GEO & Schema Integration', 'CRM & WhatsApp Lead Automation'],
      },
      {
        type: 'Headless E-Commerce / Custom Portal',
        priceINR: '₹1,00,000 – ₹2,50,000+',
        priceUSD: '$1,500 – $3,500+',
        delivery: '3-5 Weeks',
        features: ['Shopify Headless / Custom Cart', 'Payment Gateway (Stripe/Razorpay)', 'Multi-Currency & Geo-IP Routing', 'Custom Admin Dashboard', 'High-Scale Cloud Architecture'],
      },
    ],
  },
  {
    category: 'Mobile App Development Costs (2026)',
    desc: 'Pricing for cross-platform hybrid (Flutter/React Native) and native mobile applications.',
    items: [
      {
        type: 'MVP / Basic Business Mobile App',
        priceINR: '₹60,000 – ₹1,20,000',
        priceUSD: '$800 – $1,600',
        delivery: '2-3 Weeks',
        features: ['iOS & Android (Flutter / React Native)', 'User Authentication & Profiles', 'Push Notifications', 'App Store & Play Store Publishing', 'REST API Integration'],
      },
      {
        type: 'On-Demand / Marketplace Mobile App',
        priceINR: '₹1,50,000 – ₹3,00,000',
        priceUSD: '$2,000 – $4,000',
        delivery: '4-6 Weeks',
        popular: true,
        features: ['Customer + Driver/Vendor Two-Sided App', 'Real-Time GPS Tracking & Maps', 'In-App Wallet & Payments', 'Admin Analytics Dashboard', 'Cloud Socket Server Architecture'],
      },
      {
        type: 'Enterprise AI & Custom SaaS App',
        priceINR: '₹3,00,000 – ₹6,00,000+',
        priceUSD: '$4,000 – $8,000+',
        delivery: '6-10 Weeks',
        features: ['Custom LLM / AI Agent Integration', 'Multi-Tenant Cloud Backend', 'Biometric & Enterprise Security', 'Offline Sync & Real-Time WebSockets', 'Dedicated SLA & 24/7 Monitoring'],
      },
    ],
  },
]

const industries = [
  {
    title: 'Real Estate & Builders',
    desc: 'High-converting project showcase sites, virtual tours, NRI investor targeting, and WhatsApp brochure funnels.',
    href: '/solutions/real-estate',
    icon: Building2,
    color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  },
  {
    title: 'Doctors & Healthcare Clinics',
    desc: 'Patient appointment booking systems, Google Local 3-Pack domination, and verified medical review automation.',
    href: '/solutions/healthcare',
    icon: Stethoscope,
    color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  },
  {
    title: 'Travel & Tourism Agencies',
    desc: 'Tour package booking engines, downloadable itinerary builders, multi-currency checkout, and tourist acquisition ads.',
    href: '/solutions/travel-tourism',
    icon: Compass,
    color: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  },
  {
    title: 'Solar Energy Companies',
    desc: 'Interactive solar savings calculator funnels, verified rooftop solar leads, and site survey booking automations.',
    href: '/solutions/solar-energy',
    icon: SunMedium,
    color: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
  },
]

const faqs = [
  {
    q: 'How much does website development cost in India in 2026?',
    a: 'In 2026, a professional small business website in India typically ranges from ₹25,000 to ₹45,000 ($350 - $600). High-converting corporate lead generation websites with custom Next.js performance cost between ₹50,000 and ₹95,000 ($700 - $1,300), while enterprise e-commerce portals range from ₹1,00,000 to ₹2,50,000+ ($1,500 - $3,500+).',
  },
  {
    q: 'How much does it cost to build a mobile app in 2026?',
    a: 'A hybrid cross-platform mobile app (iOS and Android built with Flutter or React Native) costs between ₹60,000 and ₹1,20,000 ($800 - $1,600) for an MVP, and ₹1,50,000 to ₹3,00,000 ($2,000 - $4,000) for on-demand booking marketplaces.',
  },
  {
    q: 'Are there any hidden or recurring maintenance costs?',
    a: 'No. Digitacurve provides 100% transparent milestone pricing with zero hidden charges. You retain full ownership of source code, design assets, and cloud hosting accounts.',
  },
  {
    q: 'How fast can our project be delivered?',
    a: 'Standard business websites are delivered within 5 to 7 business days. Complex corporate portals take 10 to 15 days, and full mobile applications take 3 to 6 weeks.',
  },
]

export default function PricingPage() {
  const [pricingTab, setPricingTab] = useState<'packages' | 'services'>('packages')

  return (
    <main className="bg-black text-white min-h-screen">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-purple-950/20 via-black to-black border-b border-[#1a1a1a] text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <DollarSign size={14} /> 2026 Transparent Pricing &amp; Packages
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            Transparent Pricing &amp; <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">360° Growth Packages</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            No guesswork or hidden fees. Explore our full-service 360° digital growth packages and individual service pricing tables built for maximum ROI.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <a
              href="#instant-calculator"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs hover:opacity-95 transition-all shadow-xl shadow-purple-500/20"
            >
              <Calculator size={16} /> Calculate Your Exact Cost in 60s
            </a>
            <a
              href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20want%20to%20know%20the%20exact%20pricing%20and%20packages%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-lg"
            >
              <MessageSquare size={16} /> WhatsApp Quote: +91 7572094201
            </a>
          </div>

          {/* Toggle Switch */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#141414] border border-[#2a2a2a]">
            <button
              onClick={() => setPricingTab('packages')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                pricingTab === 'packages'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ⚡ 360° All-In-One Packages
            </button>
            <button
              onClick={() => setPricingTab('services')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                pricingTab === 'services'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🛠️ Individual Service Breakdown
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Content Grid based on Tab */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pricingTab === 'packages' ? (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Complete 360° Digital Growth Packages</h2>
                <p className="text-xs sm:text-sm text-gray-400">Everything needed to launch, rank on Google, and acquire clients on autopilot:</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {turnkeyPackages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`relative rounded-3xl border ${pkg.borderColor} bg-[#111] p-8 flex flex-col justify-between ${
                      pkg.popular ? 'shadow-2xl shadow-purple-500/10 bg-gradient-to-b from-purple-950/20 via-[#111] to-[#111]' : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xxs font-black uppercase tracking-wider shadow-lg">
                        {pkg.badge}
                      </div>
                    )}

                    <div>
                      {!pkg.popular && (
                        <span className="inline-block px-3 py-1 rounded-md text-xxs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 mb-4">
                          {pkg.badge}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-xxs text-gray-400 mb-6 leading-relaxed">{pkg.tagline}</p>

                      <div className="mb-6">
                        <div className="text-3xl sm:text-4xl font-black text-white">{pkg.priceINR}</div>
                        <div className="text-xs text-gray-400 mt-1">Global Clients: <span className="text-purple-400 font-semibold">{pkg.priceUSD}</span></div>
                        <div className="text-xxs text-gray-500 mt-1">{pkg.period}</div>
                      </div>

                      <div className="w-full h-px bg-[#222] my-6" />

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20(${encodeURIComponent(pkg.priceINR)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 shadow-lg'
                          : 'bg-[#1c1c1c] hover:bg-[#252525] text-white border border-[#333]'
                      }`}
                    >
                      {pkg.buttonText} <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-24">
              {itemizedServices.map((tierGroup) => (
                <div key={tierGroup.category}>
                  <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">{tierGroup.category}</h2>
                    <p className="text-xs sm:text-sm text-gray-400">{tierGroup.desc}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {tierGroup.items.map((item) => (
                      <div
                        key={item.type}
                        className={`relative rounded-3xl border ${
                          item.popular
                            ? 'border-purple-500/50 bg-gradient-to-b from-purple-950/30 via-[#111] to-[#111] shadow-2xl shadow-purple-500/10'
                            : 'border-[#2a2a2a] bg-[#111]'
                        } p-8 flex flex-col justify-between`}
                      >
                        {item.popular && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xxs font-black uppercase tracking-wider shadow-lg">
                            Most Popular Choice
                          </div>
                        )}

                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{item.type}</h3>
                          <div className="my-6">
                            <div className="text-3xl font-black text-white">{item.priceINR}</div>
                            <div className="text-xs text-gray-400 mt-1">Global Clients: <span className="text-purple-400 font-semibold">{item.priceUSD}</span></div>
                            <div className="text-xxs text-gray-500 mt-1">Estimated Timeline: {item.delivery}</div>
                          </div>

                          <div className="w-full h-px bg-[#222] my-6" />

                          <ul className="space-y-3 mb-8">
                            {item.features.map((feat) => (
                              <li key={feat} className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={`https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(item.type)}%20(${encodeURIComponent(item.priceINR)}).`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                            item.popular
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 shadow-lg'
                              : 'bg-[#1c1c1c] hover:bg-[#252525] text-white border border-[#333]'
                          }`}
                        >
                          Inquire for This Tier <ArrowRight size={14} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Specialized Industry Solutions Hub */}
      <section className="py-20 bg-gradient-to-b from-black via-blue-950/10 to-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Tailored Industry Solutions for Immediate Customer Inquiries
            </h2>
            <p className="text-gray-400 text-sm">
              Different industries require unique conversion funnels. Explore our specialized packages built for rapid client acquisition:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Link
                  key={ind.title}
                  href={ind.href}
                  className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${ind.color}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                    Explore Solution <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Instant Cost Calculator */}
      <section id="instant-calculator" className="py-20 bg-gradient-to-b from-black via-purple-950/20 to-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* FAQs for High-Intent Google Search Answers */}
      <section className="py-20 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 bg-white/5 text-gray-300 text-xxs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={14} /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-black text-white">Website &amp; App Development Cost FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111]">
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
