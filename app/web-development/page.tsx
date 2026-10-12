import Link from 'next/link';
import { ArrowUpRight, Code, Cpu, Smartphone, Zap, Shield, CheckCircle2, Server, Layout } from 'lucide-react';

export const metadata = {
  title: 'Next.js 14 Web Development Company Noida & India | Custom React Apps',
  description: 'Top Next.js 14 web development agency in Noida, Delhi NCR & India. Build sub-second high-converting web applications, React web apps, and enterprise lead portals.',
  alternates: {
    canonical: 'https://www.digitacurve.com/web-development',
  },
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      icon: Code,
      title: 'Custom Web Applications',
      desc: 'Bespoke web applications built with Next.js, React, and TypeScript. Optimized for speed, reliability, and enterprise scale.',
    },
    {
      icon: Smartphone,
      title: 'Responsive & Mobile First',
      desc: 'Flawless performance across all device viewports. Custom breakpoints, fluid motion, and crisp touch targets.',
    },
    {
      icon: Zap,
      title: 'Ultra-Fast Performance & CWV',
      desc: 'Optimized Core Web Vitals, dynamic asset compression, sub-second LCP, and top-tier Google PageSpeed scores.',
    },
    {
      icon: Server,
      title: 'API & Backend Integration',
      desc: 'Seamless integrations with CRMs, payment gateways (Razorpay, Stripe), headless CMS, and custom REST/GraphQL APIs.',
    },
    {
      icon: Layout,
      title: 'UI/UX & Design Systems',
      desc: 'Clean, high-converting digital interfaces engineered to turn passive website visitors into qualified inbound leads.',
    },
    {
      icon: Shield,
      title: 'Security & SEO Foundation',
      desc: 'Built-in SSL, DDoS protection, canonical structure, schema markup, and structured data ready for top search rankings.',
    },
  ];

  const techStack = [
    'Next.js 14 / React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js / Express',
    'PostgreSQL / MongoDB',
    'Vercel / AWS Cloud',
    'Framer Motion',
    'REST & GraphQL APIs',
  ];

  const processSteps = [
    { num: '01', title: 'Discovery & Blueprinting', desc: 'We map out your business objectives, target buyer personas, and technical architecture.' },
    { num: '02', title: 'UX & Visual Design', desc: 'Interactive prototypes and clean modern design themes tailored specifically to your brand identity.' },
    { num: '03', title: 'Engineering & Testing', desc: 'Clean, modular code execution with zero-debt TypeScript architecture and cross-browser testing.' },
    { num: '04', title: 'Launch & Growth Support', desc: 'Seamless server deployment, analytics integration, and continuous post-launch optimization.' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE SERVICE / ENGINEERING</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
              HIGH IMPACT <br />
              <span className="text-blue-600 italic">
                WEB DEVELOPMENT.
              </span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed">
              We design and code fast, scalable, modern web applications that project brand authority and drive tangible revenue growth for Indian and international businesses.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                BUILD YOUR WEBSITE <ArrowUpRight className="w-4 h-4" />
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

      {/* Capabilities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">TECHNICAL CAPABILITIES</p>
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">EVERYTHING WE BUILD IS ENGINEERED TO SCALE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
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

      {/* Tech Stack Banner */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase text-center mb-10 font-bold">
            MODERN TECHNOLOGY STACK
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-sm font-semibold text-slate-900 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-3">
            <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">OUR FRAMEWORK</p>
            <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">HOW WE DELIVER WEB PROJECTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-md">
                <span className="text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 font-bold">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">READY TO UPGRADE YOUR DIGITAL PRESENCE?</h2>
          <p className="text-slate-600 text-sm font-light">
            Let Digitacurve engineer a high-performing web application tailored specifically to your audience and business goals.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-9 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            GET STARTED NOW <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
