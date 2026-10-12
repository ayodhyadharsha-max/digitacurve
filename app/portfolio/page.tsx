import Link from 'next/link';
import { ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';

export const metadata = {
  title: 'Portfolio & Case Studies | Next.js Websites & SEO Projects Noida - Digitacurve',
  description: 'Explore Digitacurve portfolio of high-converting Next.js web applications, real estate lead engines, healthcare portals, and PPC ad campaigns.',
  alternates: {
    canonical: 'https://www.digitacurve.com/portfolio',
  },
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Luxury Real Estate Lead Generation Engine',
      category: 'Real Estate Solution',
      metric: '3.4x Conversion Lift',
      desc: 'Next.js 14 property showcase portal integrated with WhatsApp Instant Route, dynamic location filters, and high-converting floorplan downloads.',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
      link: '/solutions/real-estate',
    },
    {
      title: 'Multi-Specialty Clinic Patient Booking System',
      category: 'Healthcare & Clinics',
      metric: '850+ Monthly Inquiries',
      desc: 'Sub-second doctor appointment booking portal with HIPAA compliant lead routing, doctor profiles, and local SEO Google Map dominance.',
      tech: ['React', 'Next.js', 'Local SEO', 'CRM Webhook'],
      link: '/solutions/healthcare',
    },
    {
      title: 'Rooftop Solar ROI Calculator & Funnel',
      category: 'Clean Energy & Solar',
      metric: '₹42L Monthly Pipeline Generated',
      desc: 'Solar ROI savings calculator widget and landing page suite targeting residential and industrial rooftop solar buyers.',
      tech: ['React', 'Tailwind CSS', 'Meta Ads', 'Google Ads'],
      link: '/solutions/solar-energy',
    },
    {
      title: 'E-Commerce Growth & Performance',
      category: 'Digital Marketing & SEO',
      metric: '+410% Organic Traffic Growth',
      desc: 'Full-funnel digital marketing strategy combining high-intent Google PPC, technical SEO, and retargeting ads.',
      tech: ['Google Ads', 'SEO Audit', 'Analytics 4', 'Meta PPC'],
      link: '/digital-marketing',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO &amp; CASE STUDIES</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
            OUR PROVEN <br />
            <span className="text-blue-600 italic">
              WORK ROSTER.
            </span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            A selection of web platforms, performance campaigns, and industry solutions built by Digitacurve.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-bold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 font-bold">{project.metric}</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{project.desc}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors pt-2"
                >
                  VIEW PROJECT DETAILS <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black uppercase text-slate-900">WANT YOUR BRAND FEATURED HERE?</h2>
          <p className="text-slate-600 text-sm font-light">Let Digitacurve engineer your next web application or growth campaign.</p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            START A PROJECT WITH US <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
