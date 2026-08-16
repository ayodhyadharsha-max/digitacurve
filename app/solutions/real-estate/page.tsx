import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle2, ArrowRight, Phone, MessageSquare, Target, BarChart3, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Digital Marketing & Lead Generation Package | Digitacurve',
  description: 'High-converting digital marketing, custom property listing websites, Meta lead ads, and CRM automation for Real Estate Builders, Brokers, and Property Developers.',
  keywords: 'real estate digital marketing, real estate lead generation, property listing website development, real estate ads agency, digital marketing for builders',
}

export default function RealEstateSolutionPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-amber-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Building2 size={14} /> Real Estate Growth Solution
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            Acquire High-Ticket <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Property Buyers &amp; Investors</span> on Autopilot
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            From luxury residential towers to commercial real estate, Digitacurve engineers ultra-fast project landing pages, targeted Meta &amp; Google buyer campaigns, and automated WhatsApp lead follow-ups.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20need%20a%20Real%20Estate%20Digital%20Marketing%20and%20Lead%20Generation%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-lg"
            >
              <MessageSquare size={16} /> Get Real Estate Growth Proposal
            </a>
            <a
              href="tel:+917572094201"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111] border border-[#2a2a2a] text-white hover:border-[#444] transition-all text-xs font-semibold"
            >
              <Phone size={14} className="text-amber-400" /> Talk to Specialist: +91 7572094201
            </a>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-white mb-4">What's Included in the Real Estate Growth Package</h2>
            <p className="text-gray-400 text-xs">Everything required to generate verified buyer site visits and closed bookings:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hyper-Targeted Buyer Ads</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                High-converting Google Search ads targeting active luxury property seekers and geo-targeted Meta campaigns targeting NRI and high-net-worth investors.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Verified Phone &amp; Budget Leads</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-400" /> Retargeting &amp; Lookalike Audiences</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Project Showcase Website</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Sub-second Next.js property landing pages with interactive floor plans, brochure downloads, price sheets, and location map amenities.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-400" /> Instant WhatsApp Brochure Trigger</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-400" /> 100/100 Mobile Page Speed</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automated CRM &amp; Follow-Up</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Connect lead forms directly into your sales team's WhatsApp &amp; CRM with zero delay, ensuring lead response time under 60 seconds.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-yellow-400" /> Site Visit Scheduling Automation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-yellow-400" /> Daily Lead Quality Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111] border-t border-[#2a2a2a] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to Fill Your Site Visit Calendars?</h2>
          <p className="text-gray-400 text-xs mb-8">Let Digitacurve design your complete digital marketing and buyer acquisition funnel today.</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg"
          >
            View Full Package Pricing <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
