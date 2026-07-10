import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, HelpCircle, Globe, Smartphone, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | Digitacurve',
  description: 'Find clear answers about Digitacurve\'s web development, custom software engineering, mobile app development, and Generative Engine Optimization (GEO/SEO) services.',
}

const faqCategories = [
  {
    id: 'general',
    title: 'General Inquiries',
    icon: HelpCircle,
    color: 'text-blue-400',
    faqs: [
      {
        q: 'What is Digitacurve?',
        a: 'Digitacurve is a premier digital engineering and marketing agency. We design and build modern web applications, native & cross-platform mobile apps, and provide advanced marketing services including SEO, PPC management, and Generative Engine Optimization (GEO).'
      },
      {
        q: 'How does your development process work?',
        a: 'We follow a structured agile lifecycle: Discovery & Consulting, UI/UX Design, Development & Coding, Quality Assurance & Testing, and Launch & Post-Launch Support. You are updated on progress during active sprint cycles.'
      },
      {
        q: 'Do you work with international clients?',
        a: 'Yes, we serve clients globally across key hubs including Melbourne, Sydney, London, Toronto, Dubai, and the USA. Our teams coordinate across time zones for seamless communication.'
      }
    ]
  },
  {
    id: 'web',
    title: 'Web & Software Development',
    icon: Globe,
    color: 'text-teal-400',
    faqs: [
      {
        q: 'What technologies do you use for custom web development?',
        a: 'We primarily specialize in building modern, ultra-fast web platforms using Next.js, React, Node.js, and Tailwind CSS. We also design high-converting e-commerce sites using Shopify, and customized corporate websites using WordPress based on project requirements.'
      },
      {
        q: 'What are the benefits of Serverless Next.js on CDNs?',
        a: 'Deploying Next.js on CDNs (like Vercel or Cloudflare Edge) enables global static pre-rendering, serverless API execution, and asset caching close to your users. This results in loading speeds under 1.5 seconds, improved Core Web Vitals, and robust security.'
      },
      {
        q: 'Do you build custom web applications from scratch?',
        a: 'Yes, we offer custom web application development tailored to your specific business requirements. We cover the entire lifecycle including database design (PostgreSQL/MongoDB), API engineering, frontend integration, and security audits.'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    icon: Smartphone,
    color: 'text-purple-400',
    faqs: [
      {
        q: 'What platforms do you support for mobile app development?',
        a: 'We build native iOS applications using Swift and SwiftUI, native Android applications using Kotlin and Jetpack Compose, and cross-platform applications using React Native and Flutter for a shared single codebase.'
      },
      {
        q: 'How much does it cost to build a mobile app in 2026?',
        a: 'The cost varies depending on feature complexity, platform requirements, and third-party integrations (like payment gateways or ML APIs). We provide a detailed project roadmap and transparent pricing models during our free discovery call.'
      },
      {
        q: 'Do you assist with App Store and Google Play deployments?',
        a: 'Yes. We manage the entire publishing process including profile setup, app store guidelines compliance checks, visual assets preparation, metadata writing, and final store submission review.'
      }
    ]
  },
  {
    id: 'marketing',
    title: 'GEO & SEO Services',
    icon: TrendingUp,
    color: 'text-orange-400',
    faqs: [
      {
        q: 'What is GEO (Generative Engine Optimization)?',
        a: 'GEO is the process of optimizing your brand content so that AI search engines (like ChatGPT search, Google Gemini, Claude, and Perplexity) can crawl, parse, and cite your website in their answers. It is the modern evolution of traditional SEO.'
      },
      {
        q: 'How does Answer Engine Optimization (AEO) work?',
        a: 'AEO focuses on designing direct, highly structured answer blocks (such as bulleted lists, structured schemas, and Q&A accordions) that match conversational voice and search engine queries. AI engines scrape these semantic blocks to extract quick answers.'
      },
      {
        q: 'Do you offer local SEO and citation audits?',
        a: 'Yes. We optimize local search presence by aligning Name, Address, Phone (NAP) details, managing Google Business Profiles, auditing directories (like Clutch and GoodFirms), and targeting local geolocated search keywords.'
      }
    ]
  }
]

export default function FAQPage() {
  // Construct FAQ Schema dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => 
      cat.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Support & Insights
              <span className="w-6 h-px bg-blue-400 inline-block" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Find clear, direct answers about our web development, custom software engineering, mobile app development, and Generative Engine Optimization (GEO/SEO) capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Hub Content */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-8 border-b border-[#222] pb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#111] to-[#000] border border-[#2a2a2a] flex items-center justify-center ${category.color}`}>
                    <category.icon size={18} />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-wide">{category.title}</h2>
                </div>

                {/* Category Accordions */}
                <div className="space-y-4">
                  {category.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-[#2a2a2a] bg-[#111]/30 hover:bg-[#111]/60 rounded-2xl p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden open:border-blue-500/30"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="text-white font-bold text-base sm:text-lg pr-4">{faq.q}</h3>
                        <span className="shrink-0">
                          <svg
                            className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Still have questions? Let&apos;s talk.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our technology consultants and strategy teams are ready to help you plan your custom web, mobile, or marketing project.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20 hover:scale-105"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
