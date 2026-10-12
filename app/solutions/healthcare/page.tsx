import Link from 'next/link';
import { ArrowUpRight, HeartPulse, Stethoscope, CalendarCheck, Activity } from 'lucide-react';

export const metadata = {
  title: 'Healthcare & Clinic Website Development Noida | Patient Booking & Local SEO',
  description: 'Custom healthcare web development, doctor appointment booking engines, patient inquiry forms, and hospital local SEO systems for clinics and doctors in Noida & India.',
  alternates: {
    canonical: 'https://www.digitacurve.com/solutions/healthcare',
  },
};

export default function HealthcarePage() {
  const features = [
    {
      icon: Stethoscope,
      title: 'Doctor Profile & Speciality Showcases',
      desc: 'Clean physician bio pages, treatment details, patient testimonials, and verified credentials.',
    },
    {
      icon: CalendarCheck,
      title: 'Seamless Patient Booking',
      desc: 'Simple, friction-free appointment request engines with instant SMS and WhatsApp confirmation alerts.',
    },
    {
      icon: Activity,
      title: 'Local SEO for Hospitals & Clinics',
      desc: 'Dominate local healthcare search queries, Google Maps citations, and emergency clinic searches.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>INDUSTRY SOLUTION / HEALTHCARE</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              HEALTHCARE <br />
              <span className="text-emerald-600 italic">
                DIGITAL ECOSYSTEM.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              Build patient trust, streamline appointment scheduling, and expand your healthcare facility’s reach across digital channels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                DISCUSS HEALTHCARE SYSTEM <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-emerald-700 tracking-widest uppercase font-bold">SOLUTIONS</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">DESIGNED FOR CLINICS, HOSPITALS &amp; WELLNESS BRANDS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 transition-all space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
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
          <h2 className="text-4xl font-black uppercase text-slate-900">ELEVATE YOUR HEALTHCARE BRAND</h2>
          <p className="text-slate-600 text-sm font-light">Let Digitacurve build your clinical portal and manage patient acquisition marketing.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            TALK TO OUR TEAM <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
