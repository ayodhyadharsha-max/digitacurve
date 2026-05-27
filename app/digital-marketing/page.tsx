import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp, CheckCircle2, ArrowRight, Search, Target, Megaphone, FileText, Activity, BarChart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Quantum IT Innovation',
  description: 'Delve into our comprehensive array of services to witness the transformative evolution of digital marketing. SEO, PPC, SMO, and Content Marketing.',
}

const serviceDetails = [
  {
    title: 'Search Engine Optimization (SEO)',
    desc: 'Drive organic search traffic, secure high keyword rankings, and increase conversion rates with our technical, on-page, and off-page SEO services.',
    icon: Search,
    color: 'text-orange-400',
    bg: 'from-orange-500/10',
  },
  {
    title: 'Pay Per Click (PPC) Management',
    desc: 'Maximize ROI with data-driven search, display, and social PPC campaigns. We optimize bids, ad copy, and landing pages for optimal results.',
    icon: Target,
    color: 'text-red-400',
    bg: 'from-red-500/10',
  },
  {
    title: 'Social Media Optimization (SMO)',
    desc: 'Enhance your brand presence and engage active audiences on Facebook, LinkedIn, Instagram, and Twitter through custom organic strategies.',
    icon: Megaphone,
    color: 'text-blue-400',
    bg: 'from-blue-500/10',
  },
  {
    title: 'Content Marketing',
    desc: 'Build authority and guide customers through the sales funnel with high-quality blog posts, infographics, whitepapers, and copy assets.',
    icon: FileText,
    color: 'text-purple-400',
    bg: 'from-purple-500/10',
  },
  {
    title: 'Local SEO (Indianapolis, NJ & Global)',
    desc: 'Target local buyers in specific geographic regions. We optimize Google Business Profiles and localized citations to increase foot traffic.',
    icon: Search,
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10',
  },
  {
    title: 'Healthcare Digital Marketing',
    desc: 'HIPAA-compliant, highly targeted digital campaigns tailored for doctors, hospitals, dental clinics, and biotech solutions providers.',
    icon: Activity,
    color: 'text-teal-400',
    bg: 'from-teal-500/10',
  },
]

const performanceMetrics = [
  { value: '150%', desc: 'Average increase in organic keywords rank positioning' },
  { value: '3.4x', desc: 'Average return on ad spend (ROAS) across client accounts' },
  { value: '12M+', desc: 'Total organic impressions generated for partner sites' },
  { value: '25%', desc: 'Average reduction in cost-per-acquisition (CPA) on PPC' },
]

export default function DigitalMarketingPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-orange-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-5">
              <span className="w-6 h-px bg-orange-400 inline-block" />
              Digital Marketing
              <span className="w-6 h-px bg-orange-400 inline-block" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              Experience the Future of <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Witness the transformative evolution of digital marketing, where strategy meets innovation, and potential is unlocked into measurable growth.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold text-sm hover:from-orange-500 hover:to-yellow-500 transition-all shadow-lg shadow-orange-500/20 hover:scale-105"
              >
                Start Marketing
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Our Marketing <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our certified digital marketing experts design strategic funnels that scale brand visibility and maximize traffic acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all hover:translate-y-[-2px] group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.bg} to-transparent flex items-center justify-center ${service.color} mb-6`}>
                  <service.icon size={22} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-16 bg-gradient-to-r from-orange-950/20 via-black to-black border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-10">
            Engineered to deliver <span className="gradient-text">performance metrics</span> that matter
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((item) => (
              <div key={item.desc} className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111]">
                <div className="text-4xl font-black text-orange-400 mb-1">{item.value}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Ready to scale your organic presence and sales channels?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Schedule a free campaign strategy session or request an SEO audit from our specialist marketing teams today.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold hover:from-orange-500 hover:to-yellow-500 transition-all shadow-lg shadow-orange-500/20 hover:scale-105"
          >
            Request Free Audit
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
