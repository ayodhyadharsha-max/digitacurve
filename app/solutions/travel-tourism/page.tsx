import type { Metadata } from 'next'
import Link from 'next/link'
import { Compass, CheckCircle2, ArrowRight, Phone, MessageSquare, Globe2, Plane, CreditCard, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Travel & Tourism Digital Marketing & Booking Website Solutions | Digitacurve',
  description: 'Custom travel booking websites, dynamic tour package portals, international tourist acquisition ads, and payment gateway integration for Travel Agencies and Tour Operators.',
  keywords: 'travel agency digital marketing, tour booking website development, travel portal development, tourism advertising agency, flight hotel booking engine',
}

export default function TravelSolutionPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-sky-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Compass size={14} /> Travel &amp; Tourism Solution
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            Scale Global <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Tour Bookings &amp; Inquiries</span> with Turnkey Tech
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            From luxury domestic holiday packages to international flight &amp; hotel reservations, Digitacurve engineers ultra-fast booking portals, automated itinerary builders, and high-ROI global ad campaigns.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20run%20a%20travel%20agency%20and%20need%20a%20tour%20booking%20website%20and%20marketing%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-lg"
            >
              <MessageSquare size={16} /> Consult with Travel Strategist
            </a>
            <a
              href="tel:+917572094201"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111] border border-[#2a2a2a] text-white hover:border-[#444] transition-all text-xs font-semibold"
            >
              <Phone size={14} className="text-sky-400" /> Direct Call: +91 7572094201
            </a>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-white mb-4">Complete Travel Agency Growth Architecture</h2>
            <p className="text-gray-400 text-xs">Everything required to convert global travelers into paid package bookings:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dynamic Tour Booking Engine</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Interactive holiday package showcases with day-wise itineraries, hotel tier options, seasonal pricing tables, and instant inquiry forms.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-sky-400" /> Dynamic Itinerary PDF Generator</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-sky-400" /> WhatsApp Direct Booking Inquiries</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                <Plane size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Tourist Acquisition Ads</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Google Search ads targeting high-budget vacation queries and visual Instagram reels/ads targeting honeymooners and family travel groups.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Multi-Country Targeted Campaigns</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Retargeting Vacation Shoppers</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Currency Payment Engine</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Accept bookings seamlessly in USD, EUR, GBP, AED, and INR using Stripe, Razorpay, and PayPal with automated digital invoice delivery.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-400" /> Secure Partial Advance Deposits</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-400" /> Automated Booking Confirmations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111] border-t border-[#2a2a2a] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Start Taking Direct Bookings Today</h2>
          <p className="text-gray-400 text-xs mb-8">Cut out high OTA commissions and build your own profitable direct travel booking platform.</p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg"
          >
            Explore Travel Packages <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
