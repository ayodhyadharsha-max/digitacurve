import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Globe, CheckCircle2, ArrowRight, Server, Shield, Layers, Layout, Palette, Code2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Development Company | Custom Website Design Agency | Digitacurve',
  description: 'Digitacurve is a premier website development company and web design agency offering responsive, professional website design & custom website development services globally in Melbourne, Sydney, London, Toronto, Dubai, and USA.',
}

const serviceDetails = [
  {
    title: 'Custom Website Development',
    desc: 'Bespoke corporate platforms, SaaS solutions, and business website development built for absolute performance, stability, and global scalability.',
    techs: ['Next.js', 'React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Ecommerce Website Development',
    desc: 'Professional ecommerce website development featuring custom shopify website development storefronts and robust wordpress website development integrations.',
    techs: ['Shopify API', 'WordPress', 'WooCommerce', 'Stripe'],
  },
  {
    title: 'Small Business Website Design',
    desc: 'Tailor-made, responsive web design and small business website design that is lightweight, fully optimized, and built to convert local traffic.',
    techs: ['UI/UX Design', 'Figma', 'Responsive Web Design', 'HTML/CSS'],
  },
  {
    title: 'PHP & Laravel Development',
    desc: 'Scalable and dynamic server-side applications built using Laravel and Symfony for secure database execution and custom backend systems.',
    techs: ['PHP', 'Laravel', 'Symfony', 'MySQL'],
  },
  {
    title: 'Node.js & Real-time Web Apps',
    desc: 'High-speed, real-time web applications built on event-driven, asynchronous architectures on V8 JavaScript engines for absolute scalability.',
    techs: ['Node.js', 'Express.js', 'NestJS', 'MongoDB'],
  },
  {
    title: 'UI/UX & Interactive Design',
    desc: 'Empathetic, data-driven design systems, custom interface wireframes, and professional website design that keeps users engaged.',
    techs: ['Figma', 'Prototyping', 'User Journeys', 'A/B Testing'],
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
              Web Development <span className="gradient-text">Company & Design</span> Agency
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We are a premier website development company and custom web design agency. We deliver professional website design, custom website development, and business website development services to help you scale globally.
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

      {/* Global Locations Footprint */}
      <section className="py-20 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-5">
              <span className="w-6 h-px bg-teal-400 inline-block" />
              Global Reach
              <span className="w-6 h-px bg-teal-400 inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Serving Clients <span className="gradient-text">Globally</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Digitacurve is a trusted global web development company providing premium website design and custom software solutions across key tech hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                city: 'Melbourne',
                devKwd: 'Website Development Melbourne',
                designKwd: 'Web Design Melbourne',
                desc: 'Specialized in custom website development and digital platform engineering for Australian businesses.'
              },
              {
                city: 'Sydney',
                devKwd: 'Website Development Sydney',
                designKwd: 'Web Design Sydney',
                desc: 'Delivering responsive web design and secure corporate business website development.'
              },
              {
                city: 'London',
                devKwd: 'Website Development London',
                designKwd: 'Web Design London',
                desc: 'Engineered for UK enterprise companies seeking professional website design and web applications.'
              },
              {
                city: 'Toronto',
                devKwd: 'Website Development Toronto',
                designKwd: 'Web Design Toronto',
                desc: 'Premium Shopify and custom e-commerce website development solutions for North American retail.'
              },
              {
                city: 'Dubai',
                devKwd: 'Website Development Dubai',
                designKwd: 'Web Design Dubai',
                desc: 'Cutting-edge web design agency services and custom software consulting in the UAE.'
              }
            ].map((loc) => (
              <div
                key={loc.city}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all hover:translate-y-[-2px]"
              >
                <h3 className="text-white font-bold text-lg mb-2 text-teal-400">{loc.city}</h3>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4 leading-normal">
                  {loc.devKwd} <br /> {loc.designKwd}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies & Insights */}
      <section className="py-20 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-5">
              <span className="w-6 h-px bg-teal-400 inline-block" />
              Related Resources
              <span className="w-6 h-px bg-teal-400 inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Featured Case Studies & <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore how our web design agency translates complex requirements into performant platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]/30 hover:border-[#444] transition-all flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">EdTech Case Study</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">Fiscal Kids</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Learn how we engineered a secure, COPPA-compliant gamified financial literacy Next.js web application that registered 8,500+ students in 60 days.
                </p>
              </div>
              <Link href="/casestudy#fiscal-kids" className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300">
                View Case Study <ArrowRight size={14} />
              </Link>
            </div>

            <div className="p-8 rounded-3xl border border-[#2a2a2a] bg-[#111]/30 hover:border-[#444] transition-all flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20">Technical Insight</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">Serverless Next.js & Edge Computing</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Edge middleware and serverless APIs minimize TTFB and maximize Core Web Vitals. Discover why we migrate custom website backends to edge configurations.
                </p>
              </div>
              <Link href="/blog/serverless-nextjs-edge-computing" className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300">
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-5">
              <span className="w-6 h-px bg-teal-400 inline-block" />
              Direct Answers
              <span className="w-6 h-px bg-teal-400 inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Got questions about our web development capabilities? Here are direct answers to our most common inquiries.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What technologies do you use for website development?",
                a: "We primarily specialize in building modern, ultra-fast web platforms using Next.js, React, Node.js, and Tailwind CSS. We also design high-converting e-commerce sites using Shopify, and customized corporate websites using WordPress based on project requirements."
              },
              {
                q: "Do you build custom web applications from scratch?",
                a: "Yes, we offer custom website development services tailored to your specific business requirements. We cover the entire lifecycle including system architecture design, UI/UX design, database integration, API development, and secure deployments."
              },
              {
                q: "How do you optimize websites for page speed and Core Web Vitals?",
                a: "We follow modern optimization patterns such as static page pre-rendering, local font hosting, image conversion to next-gen formats (WebP/AVIF), asset compression, and edge CDN deployments (like Vercel and Cloudflare) to ensure your website loads in under 1.5 seconds."
              },
              {
                q: "Do you offer search engine and AI agent optimization (GEO/SEO)?",
                a: "Absolutely. Our custom web builds are optimized out of the box with structured JSON-LD schemas and clean semantic HTML so they can be easily indexed by traditional search engines (Google/Bing) and cited by AI answer engines (ChatGPT, Claude, Perplexity, Gemini)."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group border border-[#2a2a2a] bg-[#111] rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden open:border-teal-500/50"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-white font-bold text-base sm:text-lg pr-4">{faq.q}</h3>
                  <span className="shrink-0">
                    <svg
                      className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-[#222] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What technologies do you use for website development?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We primarily specialize in building modern, ultra-fast web platforms using Next.js, React, Node.js, and Tailwind CSS. We also design high-converting e-commerce sites using Shopify, and customized corporate websites using WordPress based on project requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you build custom web applications from scratch?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we offer custom website development services tailored to your specific business requirements. We cover the entire lifecycle including system architecture design, UI/UX design, database integration, API development, and secure deployments."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do you optimize websites for page speed and Core Web Vitals?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We follow modern optimization patterns such as static page pre-rendering, local font hosting, image conversion to next-gen formats (WebP/AVIF), asset compression, and edge CDN deployments (like Vercel and Cloudflare) to ensure your website loads in under 1.5 seconds."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer search engine and AI agent optimization (GEO/SEO)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Our custom web builds are optimized out of the box with structured JSON-LD schemas and clean semantic HTML so they can be easily indexed by traditional search engines (Google/Bing) and cited by AI answer engines (ChatGPT, Claude, Perplexity, Gemini)."
                    }
                  }
                ]
              })
            }}
          />
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
