import type { Metadata } from 'next'
import Link from 'next/link'
import { SunMedium, CheckCircle2, ArrowRight, Phone, MessageSquare, Calculator, Zap, TrendingUp, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Company Digital Marketing & Lead Generation Solutions | Digitacurve',
  description: 'Turnkey solar lead generation, custom rooftop solar savings calculator websites, Google PPC ads, and CRM funnels for Solar EPCs, Installers, and Clean Energy Companies.',
  keywords: 'solar digital marketing, solar lead generation agency, solar company website development, rooftop solar leads, solar PPC ads agency',
}

export default function SolarSolutionPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-yellow-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
            <SunMedium size={14} /> Solar Energy Growth Solution
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            Generate High-Intent <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Residential &amp; Commercial Solar Leads</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Stop buying shared, recycled solar leads. Digitacurve engineers proprietary solar savings calculator funnels, Google Search ads targeting high-power consumers, and instant lead CRM delivery.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20run%20a%20solar%20energy%20company%20and%20need%20a%20solar%20lead%20generation%20and%20website%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-lg"
            >
              <MessageSquare size={16} /> Consult with Solar Lead Strategist
            </a>
            <a
              href="tel:+917572094201"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111] border border-[#2a2a2a] text-white hover:border-[#444] transition-all text-xs font-semibold"
            >
              <Phone size={14} className="text-yellow-400" /> Direct Call: +91 7572094201
            </a>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-white mb-4">Complete Solar EPC Growth Architecture</h2>
            <p className="text-gray-400 text-xs">Everything needed to generate exclusive homeowner &amp; commercial solar site surveys:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6">
                <Calculator size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Interactive Solar Savings Calculator</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                A custom calculator on your website allowing users to input monthly electric bill amounts and calculate estimated solar subsidy savings, capturing phone numbers before results.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-yellow-400" /> 35%+ Conversion Rate Form</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-yellow-400" /> Government Subsidy &amp; Net Metering Explainer</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Exclusive High-Intent Solar Ads</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Google Search ads targeting high-volume terms like "best solar rooftop company in [City]" and "commercial solar panel installation cost".
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Zero Shared Leads Guarantee</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Verified Property Owner Filters</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant WhatsApp Site Survey Funnel</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Send newly submitted solar lead details straight to your surveyors via WhatsApp with electricity bill attachments and rooftop size estimates.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-400" /> Automated Site Survey Booking</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-400" /> Full Solar CRM Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111] border-t border-[#2a2a2a] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Scale Your Solar Installation Volume</h2>
          <p className="text-gray-400 text-xs mb-8">Get high-ticket solar installation inquiries delivered straight to your team every single day.</p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold text-xs hover:from-yellow-400 hover:to-amber-400 transition-all shadow-lg"
          >
            Explore Solar Packages <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
