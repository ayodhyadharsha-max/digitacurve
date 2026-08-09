import type { Metadata } from 'next'
import Link from 'next/link'
import {
  CheckCircle2, ArrowRight, Zap, Shield, Rocket, Phone, MessageSquare, Globe, Sparkles, Building2, Stethoscope, Compass, SunMedium
} from 'lucide-react'
import QuoteCalculator from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Complete 360° Digital Marketing & Development Packages | Digitacurve',
  description: 'Turnkey full-service digital marketing, custom website development, mobile apps, and lead generation packages for Real Estate, Healthcare, Travel, Solar, and Global Enterprises.',
  keywords: 'digital marketing packages, 360 digital marketing services, custom website development package, real estate digital marketing, healthcare marketing for doctors, travel agency booking website, solar lead generation agency',
}

const packages = [
  {
    name: 'Starter Business Growth',
    badge: 'Essential Launch',
    price: '$999',
    inrPrice: '₹49,999',
    period: 'one-time setup + monthly SEO',
    description: 'Perfect for startups, local businesses, and clinics establishing a dominant local and global digital presence.',
    features: [
      'Custom Ultra-Fast Next.js Website (Up to 7 Pages)',
      '100/100 Core Web Vitals & Mobile-First UX',
      'Local & Global SEO Setup + Google Business Optimization',
      'Schema.org JSON-LD Structured Data Graphs',
      'Social Media Profiles Branding (Instagram, LinkedIn, FB)',
      'Lead Capture Form with Instant WhatsApp & Email Alerts',
      '1 Month Free Technical Support & Maintenance'
    ],
    popular: false,
    color: 'from-blue-600 to-cyan-500',
    buttonColor: 'bg-blue-600 hover:bg-blue-500',
    buttonText: 'Get Started with Starter',
  },
  {
    name: '360° Full-Service Lead Machine',
    badge: 'Most Popular for High ROI',
    price: '$2,499',
    inrPrice: '₹1,24,999',
    period: 'full turnkey deployment',
    description: 'The ultimate growth engine designed for Real Estate, Doctors, Travel Agencies, and Solar Companies seeking daily high-intent customer leads.',
    features: [
      'High-Converting Custom Web & WebApp Platform',
      'Meta (Facebook/Instagram) & Google Search Ads Management',
      'High-Intent Lead Funnel with CRM / WhatsApp Automation',
      'Generative Engine Optimization (GEO/AEO) for ChatGPT & Gemini',
      '12 Target City Local Citations (Noida, Delhi, Dubai, London, Sydney)',
      'Dedicated Analytics Dashboard & Monthly Conversion Reports',
      'Payment Gateway Integration (Stripe / Razorpay / PayPal)',
      '3 Months Priority Engineering & Marketing Support'
    ],
    popular: true,
    color: 'from-purple-600 via-pink-600 to-blue-600',
    buttonColor: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500',
    buttonText: 'Claim 360° Lead Machine',
  },
  {
    name: 'Enterprise Global Dominance',
    badge: 'Custom Architecture',
    price: '$4,999+',
    inrPrice: '₹2,49,999+',
    period: 'custom enterprise scope',
    description: 'Comprehensive software and multi-channel global marketing suite for expanding corporate brands and marketplace platforms.',
    features: [
      'Complete Web Platform + Cross-Platform Mobile App (iOS & Android)',
      'Custom AI Agent / LLM Chatbot Integration',
      'Multi-Country Edge CDN Infrastructure & International SEO',
      'High-Scale Ad Campaign Funnels across Global Markets',
      'Custom Booking / Marketplace / CRM Software Development',
      '24/7 Dedicated Account Manager & DevOps SLA',
      'Quarterly Performance & Growth Strategy Roadmaps'
    ],
    popular: false,
    color: 'from-amber-500 to-orange-600',
    buttonColor: 'bg-amber-600 hover:bg-amber-500',
    buttonText: 'Schedule Enterprise Consultation',
  }
]

const industries = [
  {
    title: 'Real Estate & Builders',
    icon: Building2,
    href: '/solutions/real-estate',
    desc: 'Automated property listing portals, high-ROI buyer lead ads, and 3D walkthroughs.',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
  },
  {
    title: 'Healthcare & Doctors',
    icon: Stethoscope,
    href: '/solutions/healthcare',
    desc: 'Verified patient appointment systems, doctor reputation management, and local clinic SEO.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    title: 'Travel & Tourism',
    icon: Compass,
    href: '/solutions/travel-tourism',
    desc: 'Dynamic tour package booking engines, flight/hotel integrations, and global tourist acquisition.',
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
  },
  {
    title: 'Solar Energy Companies',
    icon: SunMedium,
    href: '/solutions/solar-energy',
    desc: 'Commercial & residential solar cost calculators and verified rooftop installation leads.',
    color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30'
  }
]

export default function PackagesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-purple-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Turnkey 360° Digital Growth Packages
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
            Everything Your Business Needs to <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Dominate Online &amp; Acquire Clients</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop juggling multiple freelancers. Digitacurve delivers full-stack custom engineering, Generative Engine Optimization (GEO), and high-converting ad management bundled into transparent, high-ROI packages.
          </p>

          {/* Quick CTA Helpline */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold">
            <a
              href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20want%20to%20discuss%20a%20360%20Digital%20Marketing%20Package%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/20"
            >
              <MessageSquare size={18} /> Chat with Lead Strategist on WhatsApp
            </a>
            <a
              href="tel:+917572094201"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] border border-[#2a2a2a] text-white hover:border-[#444] transition-all"
            >
              <Phone size={16} className="text-blue-400" /> Direct Call: +91 7572094201
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Packages Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border ${
                  pkg.popular
                    ? 'border-purple-500/50 bg-gradient-to-b from-purple-950/30 via-[#111] to-[#111] shadow-2xl shadow-purple-500/10'
                    : 'border-[#2a2a2a] bg-[#111]'
                } p-8 flex flex-col justify-between`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-black uppercase tracking-wider shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {!pkg.popular && (
                    <span className="inline-block px-3 py-1 rounded-md text-xxs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 mb-4">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed">{pkg.description}</p>

                  <div className="mb-6 pb-6 border-b border-[#222]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">{pkg.price}</span>
                      <span className="text-sm font-semibold text-gray-500">/ {pkg.inrPrice}</span>
                    </div>
                    <span className="text-xxs text-gray-500 uppercase tracking-widest">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20Package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-xs text-center flex items-center justify-center gap-2 transition-all ${pkg.buttonColor}`}
                >
                  {pkg.buttonText} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Cost Estimator Section */}
      <section className="py-16 bg-gradient-to-b from-black via-purple-950/20 to-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
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
                    Explore Solution Package <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Client Guarantee */}
      <section className="py-16 bg-black border-t border-[#1a1a1a] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
            <Shield size={16} /> Digitacurve Growth Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Serving Growing Businesses Across India, USA, UK, UAE &amp; Australia
          </h2>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto mb-8 leading-relaxed">
            Our engineering and growth frameworks are built to deliver verifiable ROI. Whether you need a local customer acquisition funnel in Noida &amp; Delhi NCR, or international client reach across London and Dubai, we build the entire pipeline for you.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
          >
            Request Custom Proposal &amp; Strategy Call <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
