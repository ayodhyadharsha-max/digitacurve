'use client'

import { useState } from 'react'
import {
  Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Send, Phone, MessageSquare, Building2, Stethoscope, Compass, SunMedium, Globe, Smartphone, ShieldCheck
} from 'lucide-react'

export default function QuoteCalculator() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    serviceType: '',
    industry: '',
    budgetRange: '',
    timeline: '',
    fullName: '',
    phone: '',
    email: '',
    projectNotes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSelectService = (val: string) => {
    setFormData({ ...formData, serviceType: val })
    setStep(2)
  }

  const handleSelectIndustry = (val: string) => {
    setFormData({ ...formData, industry: val })
    setStep(3)
  }

  const handleSelectBudget = (budget: string, timeline: string) => {
    setFormData({ ...formData, budgetRange: budget, timeline: timeline })
    setStep(4)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      access_key: '568444bb-4e66-4c91-9c3f-7f7ecda42a8b', // Web3Forms Access Key
      subject: `🔥 New Client Lead: ${formData.fullName} - ${formData.serviceType} (${formData.industry})`,
      from_name: 'Digitacurve Lead Engine',
      ...formData,
      message: `New Lead Request:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.serviceType}
Industry: ${formData.industry}
Budget: ${formData.budgetRange}
Timeline: ${formData.timeline}
Notes: ${formData.projectNotes || 'N/A'}`,
    }

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.error('Submission error:', err)
    }

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div id="quote-calculator" className="w-full max-w-4xl mx-auto rounded-3xl border border-purple-500/30 bg-[#0d0d0d] p-6 sm:p-10 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-600/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles size={14} /> Instant Cost &amp; Strategy Estimator
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white mb-2">
          Calculate Your Project Scope &amp; <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get an Instant Proposal</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400">
          Answer 3 quick questions to receive a custom deliverable timeline, pricing breakdown, and marketing roadmap.
        </p>

        {/* Step Indicator */}
        {!submitted && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                    : s < step
                    ? 'w-2 bg-emerald-400'
                    : 'w-2 bg-gray-700'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {submitted ? (
        <div className="text-center py-10 relative z-10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl font-black text-white mb-2">Inquiry Successfully Received!</h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
            Thank you, <strong>{formData.fullName}</strong>. Our senior technical consultant will contact you via WhatsApp &amp; Phone at <strong>{formData.phone}</strong> within 15 minutes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/917572094201?text=Hi%20Digitacurve%2C%20I%20just%20submitted%20the%20Quote%20Calculator%20for%20${encodeURIComponent(formData.serviceType)}%20(${encodeURIComponent(formData.industry)}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-all shadow-lg"
            >
              <MessageSquare size={16} /> Open Direct WhatsApp Chat
            </a>
            <button
              onClick={() => {
                setSubmitted(false)
                setStep(1)
              }}
              className="px-6 py-3 rounded-full bg-[#222] text-gray-300 hover:text-white text-xs font-semibold"
            >
              Calculate Another Project
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          {/* STEP 1: SERVICE TYPE */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-white text-center mb-6">Step 1: What service does your business require?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: '360° Digital Growth Package', desc: 'Web + App + Full SEO + Meta & Google Ads', icon: Sparkles, color: 'text-purple-400 border-purple-500/30' },
                  { name: 'Custom Website Development', desc: 'Ultra-fast Next.js, Headless E-commerce, Corporate Portals', icon: Globe, color: 'text-blue-400 border-blue-500/30' },
                  { name: 'Mobile App Development', desc: 'iOS & Android Hybrid Apps (Flutter / React Native)', icon: Smartphone, color: 'text-pink-400 border-pink-500/30' },
                  { name: 'Lead Generation & Ads (Meta + Google)', desc: 'High-intent client customer acquisition funnels', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-500/30' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleSelectService(item.name)}
                      className="p-5 rounded-2xl border border-[#2a2a2a] bg-[#141414] hover:border-purple-500 hover:bg-[#1a1a1a] transition-all text-left group flex items-start gap-4"
                    >
                      <div className={`p-3 rounded-xl bg-white/5 border ${item.color} shrink-0`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm group-hover:text-purple-400 transition-colors">{item.name}</h4>
                        <p className="text-xxs text-gray-400 mt-1">{item.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* STEP 2: INDUSTRY SELECTION */}
          {step === 2 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setStep(1)} className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white">
                  <ArrowLeft size={14} /> Back
                </button>
                <h3 className="text-lg font-bold text-white text-center">Step 2: Select Your Industry Niche</h3>
                <div className="w-10" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Real Estate & Builders', icon: Building2 },
                  { name: 'Healthcare & Doctors', icon: Stethoscope },
                  { name: 'Travel & Tourism', icon: Compass },
                  { name: 'Solar Energy', icon: SunMedium },
                  { name: 'E-Commerce / D2C', icon: Globe },
                  { name: 'Other Business / Startup', icon: Sparkles },
                ].map((ind) => {
                  const Icon = ind.icon
                  return (
                    <button
                      key={ind.name}
                      onClick={() => handleSelectIndustry(ind.name)}
                      className="p-5 rounded-2xl border border-[#2a2a2a] bg-[#141414] hover:border-purple-500 hover:bg-[#1a1a1a] transition-all text-center group flex flex-col items-center justify-center gap-3"
                    >
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-bold text-white group-hover:text-purple-400">{ind.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* STEP 3: BUDGET & TIMELINE */}
          {step === 3 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setStep(2)} className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white">
                  <ArrowLeft size={14} /> Back
                </button>
                <h3 className="text-lg font-bold text-white text-center">Step 3: What is your estimated investment tier?</h3>
                <div className="w-10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { budget: '₹40,000 - ₹90,000 ($500 - $1,200)', tier: 'Standard Growth', time: '1-2 Weeks' },
                  { budget: '₹1,00,000 - ₹2,50,000 ($1,500 - $3,500)', tier: 'Full 360° Lead Machine', time: '2-4 Weeks' },
                  { budget: '₹2,50,000+ ($4,000+)', tier: 'Enterprise Scale', time: '4-8 Weeks' },
                ].map((tier) => (
                  <button
                    key={tier.tier}
                    onClick={() => handleSelectBudget(tier.budget, tier.time)}
                    className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#141414] hover:border-purple-500 hover:bg-[#1a1a1a] transition-all text-left group"
                  >
                    <span className="text-xxs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                      {tier.tier}
                    </span>
                    <h4 className="text-base font-black text-white mt-3 mb-1">{tier.budget}</h4>
                    <p className="text-xxs text-gray-400">Estimated Delivery: {tier.time}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT INFO FOR INSTANT PROPOSAL */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <button type="button" onClick={() => setStep(3)} className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white">
                  <ArrowLeft size={14} /> Back
                </button>
                <h3 className="text-base font-bold text-white text-center">Final Step: Where should we send your Proposal?</h3>
                <div className="w-10" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / John Smith"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">Any specific features or requirements? (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Tell us any details (e.g. need property listings, doctor booking, or tour packages)..."
                  value={formData.projectNotes}
                  onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                  className="w-full bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black text-sm hover:opacity-95 transition-all shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2"
              >
                {loading ? 'Generating Custom Proposal...' : '🚀 Get My Custom Estimate & Strategy Call'}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}
