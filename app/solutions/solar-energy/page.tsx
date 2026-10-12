import Link from 'next/link';
import { ArrowUpRight, Sun, Calculator, ShieldCheck, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Solar Energy Website & Lead Generation Company Noida | Digitacurve',
  description: 'Custom solar energy website design, solar ROI calculator web tools, Google PPC ads, and lead generation systems for solar rooftop installers.',
  alternates: {
    canonical: 'https://www.digitacurve.com/solutions/solar-energy',
  },
};

export default function SolarEnergyPage() {
  const features = [
    {
      icon: Calculator,
      title: 'Interactive Solar Savings Calculator',
      desc: 'Embeddable dynamic ROI widget letting homeowners and factory owners estimate rooftop monthly solar bill savings.',
    },
    {
      icon: ShieldCheck,
      title: 'Subsidy & Financial Scheme Guides',
      desc: 'Trust-building landing page modules detailing PM Surya Ghar Yojana, subsidies, net metering, and EMI options.',
    },
    {
      icon: TrendingUp,
      title: 'Hyper-Local Google & Meta Ads',
      desc: 'Geo-targeted ad campaigns focusing on high-electricity consumers and industrial rooftop solar decision makers.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-mono text-xs font-bold">
              <Sun className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / SOLAR ENERGY</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              SOLAR ENERGY <br />
              <span className="text-amber-600 italic">
                LEAD PLATFORM.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              Capture high-volume residential and commercial solar inquiries with interactive calculators and high-converting marketing funnels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-amber-600/30 transition-all hover:scale-105"
              >
                BUILD SOLAR WEBPAGE <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-amber-700 tracking-widest uppercase font-bold">SOLAR TOOLS &amp; MARKETING</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">SCALE YOUR SOLAR INSTALLATION BUSINESS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 transition-all space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
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
          <h2 className="text-4xl font-black uppercase text-slate-900">START GENERATING SOLAR LEADS</h2>
          <p className="text-slate-600 text-sm font-light">Empower your sales reps with qualified rooftop solar inquiries.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-amber-600/30 transition-all hover:scale-105"
          >
            TALK TO SOLAR DIGITAL EXPERTS <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
