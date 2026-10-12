import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Search, Target, BarChart3, Megaphone, Share2, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing & SEO Agency Noida | Google Ads & Meta PPC Company India',
  description: 'Data-driven digital marketing agency in Noida & India. Top SEO services, Google Search Ads, Meta Ads (Instagram/Facebook), and performance marketing systems engineered for maximum ROI.',
  alternates: {
    canonical: 'https://www.digitacurve.com/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      desc: 'Technical SEO audits, keyword strategy, high-authority backlink outreach, and local search optimization to rank #1 on Google.',
    },
    {
      icon: Target,
      title: 'Google Search & PPC Ads',
      desc: 'High-intent search campaigns focused on low cost per lead (CPL), strict keyword match targeting, and negative match filtering.',
    },
    {
      icon: Megaphone,
      title: 'Meta Ads (Facebook & Instagram)',
      desc: 'High-ROAS retargeting, video ad creative testing, custom audience lookalikes, and direct lead generation funnels.',
    },
    {
      icon: Share2,
      title: 'Social Media Management & Voice',
      desc: 'Brand voice strategy, visual content design, community management, and consistent multi-channel posting schedules.',
    },
    {
      icon: BarChart3,
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'A/B landing page testing, UX heatmap analysis, friction removal, and copy tweaks to turn visitors into buyers.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Funnel Tracking',
      desc: 'Google Analytics 4 (GA4), Meta Pixel setup, conversion event tracking, and transparent real-time growth dashboards.',
    },
  ];

  const highlights = [
    'Zero Vanity Metrics — Focus on Leads & Revenue',
    'Dedicated Campaign Manager in Noida HQ',
    'Sub-Second High Converting Landing Pages',
    'Custom Dashboards & Transparent ROI',
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>CORE SERVICE / PERFORMANCE MARKETING</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              GROWTH DRIVEN <br />
              <span className="text-blue-600 italic">
                DIGITAL MARKETING.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              We replace guesswork with high-converting marketing campaigns that capture high-intent leads, build brand dominance, and drive repeatable revenue.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                REQUEST AUDIT <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-900 font-bold text-sm px-8 py-4 rounded-full transition-all"
              >
                VIEW PACKAGES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">MARKETING CAPABILITIES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">SCALE YOUR BRAND WITH PRECISION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all hover:-translate-y-1 space-y-4 group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Digitacurve Marketing */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">THE DIGITACURVE ADVANTAGE</p>
              <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">NO WASTED AD SPEND. ONLY MEASURABLE RESULTS.</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Many agencies focus on vanity metrics like impressions and clicks. At Digitacurve, we align every campaign with your bottom line — tracking cost per lead (CPL), conversion rate, and revenue generation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  <div className="font-bold text-slate-900 text-sm">{h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">WANT TO DOMINATE YOUR MARKET SEARCH &amp; ADS?</h2>
          <p className="text-slate-600 text-sm font-light">
            Contact our Noida growth team today for a comprehensive audit of your digital marketing setup.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            TALK TO A GROWTH STRATEGIST <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
