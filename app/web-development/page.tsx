import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe, CheckCircle2, ArrowRight, Server, Shield, Layers, Layout, Palette, Code2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web App Development Services | Digitacurve',
  description: 'Top-tier web development services, tailored to perfection. We specialize in PHP, Ruby on Rails, Node.js, Joomla, and UI/UX design.',
}

const serviceDetails = [
  {
    title: 'PHP Development',
    desc: 'Scalable and dynamic server-side applications built using modern frameworks like Laravel and Symfony for fast development and secure execution.',
    techs: ['PHP', 'Laravel', 'Symfony', 'MySQL'],
  },
  {
    title: 'Ruby on Rails Development',
    desc: 'Accelerate your time-to-market with the robust Ruby on Rails framework. Clean coding structures make maintenance and scaling seamless.',
    techs: ['Ruby', 'Rails', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Node.js Development',
    desc: 'High-speed, real-time web applications built using event-driven, asynchronous I/O architectures on V8 Javascript engine for absolute scalability.',
    techs: ['Node.js', 'Express.js', 'NestJS', 'MongoDB'],
  },
  {
    title: 'Joomla Development',
    desc: 'Bespoke content management systems designed around Joomla. Easy administration interfaces paired with powerful extensibility options.',
    techs: ['Joomla CMS', 'PHP', 'XML', 'Bootstrap'],
  },
  {
    title: 'Custom Web Apps (USA & Global)',
    desc: 'Custom corporate platforms, e-commerce applications, and secure portal developments built for enterprise deployment across global markets.',
    techs: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
  },
  {
    title: 'UI/UX Design Services',
    desc: 'Empathetic, data-driven design systems, digital wireframing, interactive prototyping, and visual interface styling that keep users engaged.',
    techs: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
  },
]

const technologies = [
  { category: 'Frontend', items: ['React / Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'] },
  { category: 'Backend Frameworks', items: ['Node.js / Express', 'PHP / Laravel', 'Ruby on Rails', 'Python / Django'] },
  { category: 'Databases & Cache', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'] },
  { category: 'DevOps & Hosting', items: ['AWS', 'Docker', 'Vercel', 'Netlify', 'GitHub Actions'] },
]

export default function WebDevelopmentPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-teal-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-5">
              <span className="w-6 h-px bg-teal-400 inline-block" />
              Web App Development
              <span className="w-6 h-px bg-teal-400 inline-block" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              Supreme <span className="gradient-text">Web Development</span> Solutions
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We engineer bespoke, brand-elevating web solutions, single page applications, and corporate platforms built to perform at absolute scale.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold text-sm hover:from-teal-500 hover:to-blue-500 transition-all shadow-lg shadow-teal-500/20 hover:scale-105"
              >
                Get Started
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Our Web <span className="gradient-text">Development Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Leveraging the best of frameworks and standards to design responsive, lightning-fast web assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all hover:translate-y-[-2px] group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500/20 transition-all">
                  <Globe size={22} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black border border-[#222] text-xs font-semibold text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-20 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Our Technical <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We use modern, reliable, and high-performance tools to build products that last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] transition-all hover:border-[#444]"
              >
                <h3 className="text-white font-bold text-lg mb-4 border-b border-[#222] pb-2 text-teal-400">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-400">
                      <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Need a scalable web application? Let&apos;s build it <span className="gradient-text">together</span>.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our teams are ready to help you plan, design, and deliver a premium online experience for your users.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold hover:from-teal-500 hover:to-blue-500 transition-all shadow-lg shadow-teal-500/20 hover:scale-105"
          >
            Start Your Web Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
