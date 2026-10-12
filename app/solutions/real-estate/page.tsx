import Link from 'next/link';
import { ArrowUpRight, Building2, MapPin, MessageSquare, Layers } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Website Development & Lead Generation Noida | Digitacurve',
  description: 'Custom Next.js real estate websites, property landing pages, Google & Meta PPC ads, and instant WhatsApp lead capture funnels for builders & brokers in Noida & India.',
  alternates: {
    canonical: 'https://www.digitacurve.com/solutions/real-estate',
  },
};

export default function RealEstatePage() {
  const features = [
    {
      icon: MapPin,
      title: 'Location & Floor Plan Showcases',
      desc: 'Interactive property layout viewers, high-resolution photo galleries, location maps, and downloadable brochure widgets.',
    },
    {
      icon: MessageSquare,
      title: 'Instant WhatsApp Lead Capture',
      desc: 'Direct click-to-WhatsApp lead routing so your sales team connects with serious homebuyers within seconds of inquiry.',
    },
    {
      icon: Layers,
      title: 'Google & Meta Ads Funnels',
      desc: 'Hyper-targeted ad campaigns targeting property buyers and investors in specific micro-markets and cities.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
              <Building2 className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / REAL ESTATE</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              REAL ESTATE <br />
              <span className="text-blue-600 italic">
                GROWTH ENGINE.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              Supercharge your property sales with custom real estate websites, high-converting landing pages, and automated buyer lead capture funnels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                REQUEST REAL ESTATE DEMO <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">TAILORED FEATURES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">BUILT FOR REAL ESTATE DEVELOPERS &amp; BROKERS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black uppercase text-slate-900">LAUNCH YOUR REAL ESTATE PORTAL</h2>
          <p className="text-slate-600 text-sm font-light">Partner with Digitacurve to get a property portal that converts site traffic into qualified buyer inquiries.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            CONTACT REAL ESTATE TEAM <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
