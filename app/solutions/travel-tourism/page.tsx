import Link from 'next/link';
import { ArrowUpRight, Plane, Compass, CreditCard, Globe } from 'lucide-react';

export const metadata = {
  title: 'Travel Agency Website & Booking Engine Development Noida | Digitacurve',
  description: 'Custom travel agency web development, tour booking engines, package showcases, and performance marketing for travel operators in Noida & India.',
  alternates: {
    canonical: 'https://www.digitacurve.com/solutions/travel-tourism',
  },
};

export default function TravelTourismPage() {
  const features = [
    {
      icon: Compass,
      title: 'Interactive Tour & Package Catalog',
      desc: 'Dynamic itinerary layouts, day-wise tour breakdown widgets, photo carousels, and instant WhatsApp inquiry triggers.',
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway & Razorpay Integration',
      desc: 'Secure deposit collection, multi-currency pricing, and automated booking confirmation receipts.',
    },
    {
      icon: Globe,
      title: 'Global Performance Marketing',
      desc: 'Targeted PPC campaigns designed to capture seasonal holiday bookings, honeymooners, and corporate retreats.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 font-mono text-xs font-bold">
              <Plane className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / TRAVEL &amp; TOURISM</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              TRAVEL &amp; TOURISM <br />
              <span className="text-cyan-600 italic">
                BOOKING ENGINES.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              Transform your travel agency with automated booking workflows, stunning itinerary pages, and targeted traveler lead funnels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-cyan-600/30 transition-all hover:scale-105"
              >
                BUILD TRAVEL PLATFORM <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-cyan-700 tracking-widest uppercase font-bold">FEATURES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">EVERYTHING YOUR TRAVEL AGENCY NEEDS TO SCALE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 transition-all space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600">
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
          <h2 className="text-4xl font-black uppercase text-slate-900">READY TO INCREASE TOUR BOOKINGS?</h2>
          <p className="text-slate-600 text-sm font-light">Get in touch with Digitacurve to upgrade your travel portal today.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-cyan-600/30 transition-all hover:scale-105"
          >
            GET STARTED NOW <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
