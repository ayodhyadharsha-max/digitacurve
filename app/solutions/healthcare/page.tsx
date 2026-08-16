import type { Metadata } from 'next'
import Link from 'next/link'
import { Stethoscope, CheckCircle2, ArrowRight, Phone, MessageSquare, ShieldCheck, MapPin, Calendar, HeartPulse } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Marketing & Patient Acquisition for Doctors & Clinics | Digitacurve',
  description: 'Turnkey digital marketing, clinic website development, Google Local Service Ads, and appointment booking systems for Doctors, Dentists, Hospitals, and Healthcare Providers.',
  keywords: 'digital marketing for doctors, healthcare digital marketing, clinic website development, dental marketing agency, patient appointment booking system',
}

export default function HealthcareSolutionPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-emerald-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Stethoscope size={14} /> Healthcare Growth Solution
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            Attract High-Value <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Patients &amp; Appointments</span> to Your Clinic
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Build unshakeable patient trust. Digitacurve engineers compliant clinic websites, Google Local Map Pack domination, and automated appointment scheduling systems for doctors and healthcare centers.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20am%20a%20doctor%2Fhealthcare%20provider%20looking%20for%20a%20digital%20marketing%20and%20patient%20acquisition%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-lg"
            >
              <MessageSquare size={16} /> Consult with Healthcare Strategist
            </a>
            <a
              href="tel:+917572094201"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111] border border-[#2a2a2a] text-white hover:border-[#444] transition-all text-xs font-semibold"
            >
              <Phone size={14} className="text-emerald-400" /> Direct Call: +91 7572094201
            </a>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-white mb-4">Complete Clinic Patient Acquisition Suite</h2>
            <p className="text-gray-400 text-xs">Everything required to establish authority and fill patient appointment slots:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Google Local 3-Pack SEO</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Dominate local searches like "best dentist near me" or "orthopedic specialist in [City]" through optimized Google Business Profiles and verified patient reviews.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Local Citation &amp; NAP Synchronization</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Medical Schema &amp; Doctor Bio Graphs</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Appointment Portal</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Pre-rendered clinic web application with seamless slot selection, doctor calendar synchronization, and automated SMS/WhatsApp reminders.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> Zero No-Show WhatsApp Reminders</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-400" /> Mobile Fast Teleconsultation Integration</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Doctor Reputation &amp; Ads</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Google Search ads targeting high-intent medical queries, paired with automated 5-star review collection from satisfied patients.
              </p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> 100% HIPAA &amp; Medical Advertising Compliant</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Transparent Monthly Inflow Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#111] border-t border-[#2a2a2a] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Grow Your Medical Practice Online</h2>
          <p className="text-gray-400 text-xs mb-8">Turn your clinic website into your practice's #1 patient source.</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg"
          >
            View Full Healthcare Packages <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
