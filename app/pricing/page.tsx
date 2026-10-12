import Link from 'next/link';
import { ArrowUpRight, Check, Zap, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Pricing & Packages | Next.js Web Dev & SEO Agency Noida - Digitacurve',
  description: 'Transparent pricing packages for website development, SEO, and Google/Meta Ads management. Fixed scopes, zero hidden costs, and founder-led execution.',
  alternates: {
    canonical: 'https://www.digitacurve.com/pricing',
  },
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Essential Growth',
      tagline: 'Perfect for local businesses, cafes, doctors, and startups establishing digital authority.',
      price: '₹24,999',
      billing: 'Fixed One-Time Build',
      highlighted: false,
      features: [
        '5–7 Page Custom Next.js 14 Website',
        'Mobile Responsive & Sub-Second LCP',
        'Google Business Profile & Local SEO Setup',
        'WhatsApp & Lead Form Integration',
        'Basic On-Page SEO & Schema Markup',
        '1 Year Hosting & Domain Guidance',
      ],
    },
    {
      name: 'Business Scaler',
      tagline: 'Complete digital engine with website + paid ads + local search dominance.',
      price: '₹49,999',
      billing: 'Fixed Build + 1st Month Growth',
      highlighted: true,
      badge: 'MOST POPULAR',
      features: [
        'Up to 12 Page High-Converting Web Portal',
        'Google Ads & Meta Ads Funnel Setup',
        'Targeted Keyword SEO Strategy',
        'Dynamic CRM & WhatsApp Auto-Lead Route',
        'Custom Motion Graphics & Identity',
        'Weekly Conversion Optimization & Analytics',
        'Direct Founder (RJ) Access',
      ],
    },
    {
      name: 'Enterprise Custom',
      tagline: 'Bespoke web applications, multi-location brands, and scalable lead engines.',
      price: 'Custom',
      billing: 'Tailored Monthly / Project Scope',
      highlighted: false,
      features: [
        'Unlimited Next.js Pages & Custom Backend',
        'Full Omnichannel PPC + SEO Dominance',
        'E-Commerce & Payment Gateway API Integration',
        'SOC2 & HIPAA Security Compliance Ready',
        'Dedicated Growth Manager in Noida',
        '24/7 Slack / WhatsApp Direct Channel',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
            SIMPLE, VALUE-DRIVEN <br />
            <span className="text-blue-600 italic">
              PRICING TIERS.
            </span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            No hidden costs. Clear scope, deliverables, and high ROI engineered directly into every tier.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-blue-50/80 border-2 border-blue-600 shadow-xl scale-105 z-10'
                  : 'bg-white border border-slate-200 hover:border-blue-400 shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase shadow-md">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black tracking-tight uppercase text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed font-light">{plan.tagline}</p>
                </div>

                <div className="border-t border-b border-slate-200 py-6">
                  <div className="text-4xl font-black text-slate-900">{plan.price}</div>
                  <div className="text-xs font-mono text-blue-600 mt-1 uppercase font-bold">{plan.billing}</div>
                </div>

                <ul className="space-y-3 text-xs text-slate-700 font-light">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link
                  href="/company/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs px-6 py-4 rounded-full transition-all ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-900 hover:bg-black text-white'
                  }`}
                >
                  SELECT PACKAGE <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Banner */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto" />
          <h2 className="text-3xl font-black uppercase text-slate-900">NEED A CUSTOM TAILORED PROPOSAL?</h2>
          <p className="text-slate-600 text-sm font-light">
            We build bespoke solutions for specialized business requirements, multi-city enterprises, and dynamic web applications.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-md"
          >
            GET CUSTOM QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
