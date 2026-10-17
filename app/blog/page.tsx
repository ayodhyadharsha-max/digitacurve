import Link from 'next/link';
import { ArrowUpRight, BookOpen, Calendar, Clock, Tag } from 'lucide-react';

export const metadata = {
  title: 'Insights & Articles | Digitacurve Blog',
  description: 'Actionable strategies on modern web development, SEO ranking, performance marketing, and digital growth from the Digitacurve team.',
  alternates: {
    canonical: 'https://www.digitacurve.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'programmatic-seo-nextjs-app-router-directory-scale-2026',
    title: 'Programmatic SEO & Scalable Dynamic Routing in Next.js 15: Building 10,000+ Indexable Landing Pages in 2026',
    category: 'Programmatic SEO',
    date: 'Oct 15, 2026',
    readTime: '9 min read',
    excerpt: 'How enterprise tech brands and multi-location directories scale organic search visibility with Next.js 15 Incremental Static Regeneration (ISR), automated OpenGraph image generation, and programmatic schema graphs.',
  },
  {
    slug: 'ai-agentic-lead-generation-whatsapp-crm-automation-2026',
    title: 'AI Agentic Lead Generation & Intelligent WhatsApp CRM Systems 2026: Converting Traffic at 35%+ Conversion Rate',
    category: 'AI Lead Systems',
    date: 'Oct 15, 2026',
    readTime: '8 min read',
    excerpt: 'A tactical engineering blueprint for service enterprises and real estate groups to combine Next.js lead capture with autonomous AI pre-qualification agents and real-time WhatsApp CRM routing.',
  },
  {
    slug: 'healthcare-hospital-clinic-local-seo-patient-funnel-2026',
    title: 'Healthcare & Hospital Digital Marketing Playbook 2026: HIPAA/ABDM-Compliant Patient Booking & Local Maps SEO',
    category: 'Healthcare Growth',
    date: 'Oct 14, 2026',
    readTime: '8 min read',
    excerpt: 'How hospitals, multi-specialty clinics, and healthcare networks in Noida and Delhi NCR dominate Google Maps 3-pack rankings while building frictionless, ABDM-compliant patient appointment systems.',
  },
  {
    slug: 'real-estate-luxury-proptech-web-app-seo-noida-gurgaon-2026',
    title: 'Luxury Real Estate & PropTech Web Development 2026: High-Ticket Lead Funnels for Noida, Gurgaon & UAE Investors',
    category: 'Real Estate PropTech',
    date: 'Oct 13, 2026',
    readTime: '8 min read',
    excerpt: 'The exact architectural framework top luxury developers use to capture NRI and domestic investors using interactive 3D floor plans, sub-second payment calculators, and hyper-targeted PPC funnels.',
  },
  {
    slug: 'generative-engine-optimization-chatgpt-search-perplexity-gemini-2026',
    title: 'Generative Engine Optimization (GEO) & Answer Engine Playbook 2026: How to Rank #1 on ChatGPT Search, Perplexity & Gemini',
    category: 'GEO & AI Search',
    date: 'Oct 12, 2026',
    readTime: '9 min read',
    excerpt: 'How forward-thinking brands combine entity-fact JSON-LD schema, direct answer extraction, and brand authority citations to win prime recommendation spots across ChatGPT Search, Perplexity, and Google Gemini.',
  },
  {
    slug: 'local-seo-google-maps-3-pack-ranking-noida-delhi-ncr-2026',
    title: 'Local SEO & Google Maps 3-Pack Dominance 2026: Hyper-Local Ranking Blueprint for Noida, Delhi NCR & India',
    category: 'Local SEO & Growth',
    date: 'Oct 12, 2026',
    readTime: '8 min read',
    excerpt: 'A battle-tested blueprint for local service businesses and agencies to dominate Google Maps 3-pack rankings, boost phone calls, and capture high-intent inquiries in Noida and Delhi NCR.',
  },
  {
    slug: 'nextjs-15-enterprise-performance-cwv-inp-optimization-2026',
    title: 'Next.js 15 & React 19 Enterprise Web Architecture 2026: Sub-Second Core Web Vitals, INP Mastery & TTFB Optimization',
    category: 'Web Architecture',
    date: 'Oct 11, 2026',
    readTime: '8 min read',
    excerpt: 'How enterprise engineering teams achieve sub-100ms Interaction to Next Paint (INP), sub-second Largest Contentful Paint (LCP), and 99+ Google PageSpeed scores with Next.js 15.',
  },
  {
    slug: 'high-converting-landing-page-cro-whatsapp-funnels-2026',
    title: 'High-Converting B2B & Real Estate Landing Page Architecture 2026: Quadruple ROAS with WhatsApp Funnels & CRO',
    category: 'Conversion Optimization',
    date: 'Oct 10, 2026',
    readTime: '8 min read',
    excerpt: 'The exact landing page architecture and micro-conversion psychology that top-performing B2B brands and luxury real estate developers use to convert paid ad clicks into booked deals.',
  },
  {
    slug: 'omnichannel-marketing-custom-ecommerce-nextjs-2026',
    title: 'Omnichannel Marketing Systems & Headless E-Commerce Architecture in 2026: Next.js 14 Playbook',
    category: 'E-Commerce Growth',
    date: 'Sep 30, 2026',
    readTime: '8 min read',
    excerpt: 'How scaling D2C brands and enterprise retailers combine headless Next.js e-commerce storefronts, sub-second checkout hydration, and automated WhatsApp funnels.',
  },
  {
    slug: 'b2b-enterprise-web-design-cro-noida-2026',
    title: 'High-Converting B2B Enterprise Web Design & CRO Blueprint 2026: Driving 4x Inbound Sales Pipeline',
    category: 'B2B Web Design',
    date: 'Sep 30, 2026',
    readTime: '8 min read',
    excerpt: 'A tactical guide for B2B tech companies and IT services firms to quadruple inbound RFP inquiries using fast Next.js architecture and micro-copy CRO.',
  },
  {
    slug: 'enterprise-web-security-soc2-hipaa-nextjs-2026',
    title: 'Enterprise Web Security & SOC 2 / HIPAA Compliant Next.js Web Development (2026 Shield Playbook)',
    category: 'Web Security',
    date: 'Sep 29, 2026',
    readTime: '8 min read',
    excerpt: 'How enterprise tech brands build bank-grade Next.js web applications compliant with SOC 2 Type II, HIPAA, CSP policies, and zero-trust data encryption.',
  },
  {
    slug: 'ai-search-optimization-geo-brand-citations-2026',
    title: 'AI Search Optimization (GEO) 2026: Winning Brand Citations on ChatGPT Search, Perplexity & Gemini',
    category: 'GEO & AI Search',
    date: 'Sep 29, 2026',
    readTime: '8 min read',
    excerpt: 'A tactical blueprint for capturing top AI recommendations and brand citations on ChatGPT Search, Perplexity, and Google Gemini using entity-fact schema.',
  },
  {
    slug: 'enterprise-nextjs-microservices-app-router-2026',
    title: 'Enterprise Next.js 14 App Router & Microservices Architecture (2026 Engineering Playbook)',
    category: 'Web Architecture',
    date: 'Sep 28, 2026',
    readTime: '8 min read',
    excerpt: 'How global engineering teams architect decoupled Next.js 14 App Router platforms with Server Components, Edge Middleware, microservices, and sub-50ms TTFB.',
  },
  {
    slug: 'b2b-saas-multi-tenant-web-portal-development-2026',
    title: 'B2B SaaS & Multi-Tenant Web Portal Development in 2026: Scalable Next.js Architecture & Local SEO',
    category: 'SaaS Engineering',
    date: 'Sep 28, 2026',
    readTime: '8 min read',
    excerpt: 'A comprehensive guide for B2B SaaS startups building isolated multi-tenant client portals, interactive pricing calculators, and programmatic SEO lead funnels.',
  },
  {
    slug: 'fintech-banking-website-development-security-seo-2026',
    title: 'FinTech & Banking Web Application Development 2026: Next.js Security Architecture, API Integrations & Local SEO',
    category: 'FinTech Engineering',
    date: 'Sep 27, 2026',
    readTime: '8 min read',
    excerpt: 'How FinTech startups and financial institutions build bank-grade Next.js web applications, sub-second EMI calculators, secure CRM lead routing, and dominate local search.',
  },
  {
    slug: 'ai-lead-generation-whatsapp-funnels-conversion-2026',
    title: 'AI-Powered Lead Generation & WhatsApp Funnels in 2026: Automating B2B & D2C Sales Workflows',
    category: 'AI Lead Systems',
    date: 'Sep 27, 2026',
    readTime: '7 min read',
    excerpt: 'A tactical blueprint for service brands and D2C enterprises to combine Next.js lead forms, AI pre-screening chatbots, and automated WhatsApp sequences with 90%+ open rates.',
  },
  {
    slug: 'mobile-app-development-company-noida-delhi-ncr-2026',
    title: 'Top iOS & Android Mobile App Development Agency in Noida & Delhi NCR (2026 Tech Stack Guide)',
    category: 'Mobile Engineering',
    date: 'Sep 26, 2026',
    readTime: '8 min read',
    excerpt: 'How leading enterprises and tech startups build high-performance iOS, Android, and React Native mobile applications equipped with Apple Intelligence, Siri App Intents, and real-time backend sync.',
  },
  {
    slug: 'conversion-rate-optimization-cro-landing-pages-2026',
    title: 'Conversion Rate Optimization (CRO) Blueprint 2026: Designing Zero-Bounce Next.js Landing Pages That Quadruple ROAS',
    category: 'Conversion Optimization',
    date: 'Sep 26, 2026',
    readTime: '7 min read',
    excerpt: 'A tactical CRO guide on sub-second mobile hydration, dual WhatsApp lead triggers, micro-copy social proof, and A/B testing frameworks that transform ad clicks into high-ticket inbound leads.',
  },
  {
    slug: 'ai-powered-seo-strategy-rank-1-google-gemini-2026',
    title: 'AI-Powered SEO Strategy 2026: Combining Next.js Technical Speed, Generative Search Optimization & LLM Brand Citations',
    category: 'AI & Search Strategy',
    date: 'Sep 25, 2026',
    readTime: '8 min read',
    excerpt: 'Discover how modern digital agencies combine Core Web Vitals optimization, entity-fact schema mapping, and AI Generative Engine Optimization (GEO) to capture top rankings on Google and ChatGPT Search.',
  },
  {
    slug: '360-degree-digital-marketing-agency-noida-india-2026',
    title: '360° Digital Marketing & Full-Funnel Growth Agency in Noida & India (2026 Enterprise Guide)',
    category: 'Digital Growth Systems',
    date: 'Sep 25, 2026',
    readTime: '7 min read',
    excerpt: 'A comprehensive evaluation of end-to-end digital growth systems connecting Next.js web portals, Google & Meta PPC ads, technical SEO, and automated WhatsApp lead nurture.',
  },
  {
    slug: 'educational-edtech-portal-website-development-2026',
    title: 'Educational & EdTech Portal Development in 2026: Next.js Student Portals, LMS Integration & High-Intent Student Lead Gen',
    category: 'EdTech Solutions',
    date: 'Sep 24, 2026',
    readTime: '8 min read',
    excerpt: 'How universities, coaching institutes, and EdTech platforms in Noida, Delhi NCR, and India double student enrollments using fast Next.js course portals, Meta lead ads, and automated WhatsApp counseling.',
  },
  {
    slug: 'google-ppc-ads-agency-noida-delhi-ncr-2026',
    title: 'Top Google PPC Ads & Performance Marketing Agency in Noida & Delhi NCR (2026 ROAS Framework)',
    category: 'PPC & Digital Marketing',
    date: 'Sep 24, 2026',
    readTime: '7 min read',
    excerpt: 'A data-driven playbook for service brands and B2B enterprises to maximize ROAS, eliminate negative keyword waste, and drive 3x more inbound sales calls using Google Search PPC.',
  },
  {
    slug: 'ecommerce-web-development-nextjs-shopify-headless-2026',
    title: 'Headless E-Commerce & Next.js 14 in 2026: Architecting High-Converting D2C Stores with Sub-Second Page Speeds',
    category: 'E-Commerce Engineering',
    date: 'Sep 23, 2026',
    readTime: '8 min read',
    excerpt: 'Discover how D2C brands and enterprise e-commerce platforms in Noida, Delhi NCR, and globally increase checkout conversion rates by 40% using headless Next.js storefronts, Shopify APIs, and instant search.',
  },
  {
    slug: 'b2b-saas-lead-generation-digital-marketing-agency-2026',
    title: 'B2B SaaS Digital Marketing & Growth Playbook 2026: Next.js Product Landing Pages, LinkedIn Ads & Automated Demo Booking',
    category: 'B2B Growth',
    date: 'Sep 23, 2026',
    readTime: '7 min read',
    excerpt: 'How B2B software companies and SaaS startups scale Monthly Recurring Revenue (MRR) using high-converting Next.js product pages, targeted PPC ad campaigns, and instant sales calendar routing.',
  },
  {
    slug: 'solar-energy-cleantech-lead-generation-digital-agency-2026',
    title: 'Solar Energy & Cleantech Lead Generation Playbook 2026: Next.js Calculators, Google PPC & WhatsApp Automation',
    category: 'CleanTech Lead Gen',
    date: 'Sep 22, 2026',
    readTime: '8 min read',
    excerpt: 'How solar EPC installers and renewable energy companies across India, Noida, and globally capture high-intent commercial & residential solar leads using interactive Next.js ROI calculators and Meta ads.',
  },
  {
    slug: 'travel-tourism-booking-engine-nextjs-seo-2026',
    title: 'Building High-Converting Travel & Tourism Booking Platforms in 2026: Custom Next.js Systems vs Off-The-Shelf Plugins',
    category: 'Travel Engineering',
    date: 'Sep 22, 2026',
    readTime: '7 min read',
    excerpt: 'Discover how tour operators, luxury travel agencies, and hotel chains increase direct booking revenues with ultra-fast Next.js itineraries, Razorpay/Stripe checkout, and Local SEO.',
  },
  {
    slug: 'healthcare-hospital-website-development-lead-gen-2026',
    title: 'Healthcare & Hospital Web Development in 2026: Architecting HIPAA-Compliant Next.js Portals & Doctor Appointment Systems',
    category: 'Healthcare Solutions',
    date: 'Sep 21, 2026',
    readTime: '8 min read',
    excerpt: 'How hospitals, clinics, and healthtech platforms in Noida, Delhi NCR, and India double patient consultations using fast Next.js appointment portals, Local SEO, and instant WhatsApp booking.',
  },
  {
    slug: 'generative-ai-search-optimization-chatgpt-gemini-2026',
    title: 'How to Optimize Your Business for ChatGPT Search & Google Gemini Overviews (2026 GEO Playbook)',
    category: 'GEO & AI Search',
    date: 'Sep 21, 2026',
    readTime: '7 min read',
    excerpt: 'Master Generative Engine Optimization (GEO) strategies to ensure LLMs cite, recommend, and feature your company when users ask commercial questions on ChatGPT and Gemini.',
  },
  {
    slug: 'real-estate-digital-marketing-agency-noida-gurgaon-2026',
    title: 'Top Real Estate Digital Marketing & Lead Generation Agency in Noida & Gurgaon (2026 Playbook)',
    category: 'Real Estate Lead Gen',
    date: 'Sep 20, 2026',
    readTime: '8 min read',
    excerpt: 'How leading real estate developers in Noida, Gurgaon, and Delhi NCR capture 3x more qualified buyer leads using Next.js interactive project portals, Meta PPC ads, and instant WhatsApp routing.',
  },
  {
    slug: 'nextjs-vs-wordpress-seo-performance-agency-guide-2026',
    title: 'Next.js 14 vs WordPress in 2026: Why Modern Enterprises Are Migrating to Custom React Architectures for 10x SEO Rankings',
    category: 'Web Engineering & SEO',
    date: 'Sep 20, 2026',
    readTime: '7 min read',
    excerpt: 'A detailed comparison of Core Web Vitals, page speed, security, and Google indexing speed between legacy WordPress CMS and modern Next.js serverless web applications.',
  },
  {
    slug: 'autonomous-ai-coding-agents-nextjs-web-development-2026',
    title: 'How Autonomous AI Coding Agents (Antigravity & Gemini) Are Rewriting Web Development in 2026: From Prompt to Enterprise Next.js App',
    category: 'AI & Future Tech',
    date: 'Sep 20, 2026',
    readTime: '7 min read',
    excerpt: 'Discover how modern autonomous AI coding agents like Google Antigravity & Gemini 2.0 build production-grade Next.js web applications, automate technical SEO, and reshape digital agency workflows in 2026.',
  },
  {
    slug: 'how-to-go-viral-and-rank-1-on-google-and-chatgpt-2026',
    title: 'The 2026 Blueprint to Going Viral & Ranking #1 on Google Search, Gemini & ChatGPT Search',
    category: 'Viral Marketing & GEO',
    date: 'Sep 20, 2026',
    readTime: '8 min read',
    excerpt: 'A step-by-step masterclass on Generative Engine Optimization (GEO), viral content loops, and zero-bounce landing page architectures that drive thousands of organic impressions and clicks.',
  },
  {
    slug: 'meta-ads-whatsapp-lead-funnels-roi-2026',
    title: 'Meta Ads & WhatsApp Automation in 2026: Reducing Lead CPA by 50% for D2C & Service Brands',
    category: 'Performance Marketing',
    date: 'Sep 19, 2026',
    readTime: '7 min read',
    excerpt: 'How combining high-converting Meta click-to-WhatsApp ad campaigns with Next.js web forms drives 50% lower customer acquisition costs for Indian and global brands.',
  },
  {
    slug: 'schema-markup-jsonld-geo-search-ranking-2026',
    title: 'Enterprise JSON-LD Schema Markup Guide (2026): Structuring Web Data for Search Engine Rich Snippets & LLM AI Engines',
    category: 'Technical SEO & GEO',
    date: 'Sep 19, 2026',
    readTime: '8 min read',
    excerpt: 'Master modern JSON-LD schema implementation (Organization, LocalBusiness, FAQPage, Service, Article) to capture Google rich snippets and generative AI recommendations.',
  },
  {
    slug: 'ai-agents-nextjs-web-app-integration-2026',
    title: 'AI Agents & Next.js Web App Integration in 2026: Automating Enterprise Customer Operations & Lead Qualification',
    category: 'AI & Web Engineering',
    date: 'Sep 18, 2026',
    readTime: '7 min read',
    excerpt: 'Discover how integrating autonomous AI agents into Next.js 14 web applications automates 24/7 customer support, lead scoring, and CRM synchronization for modern enterprises.',
  },
  {
    slug: 'local-seo-geo-noida-delhi-ncr-business-guide-2026',
    title: 'Local SEO & GEO Dominance for Noida & Delhi NCR Businesses: Ranking #1 on Google Search, Maps & ChatGPT Search',
    category: 'Local SEO & GEO',
    date: 'Sep 18, 2026',
    readTime: '8 min read',
    excerpt: 'A definitive playbook for businesses in Noida, Delhi NCR, and Pan-India to dominate Google Local Pack rankings, Google Maps citations, and AI generative recommendations.',
  },
  {
    slug: 'apple-intelligence-ios-app-development-trends-2026',
    title: 'Apple Intelligence & iOS App Development: Leveraging On-Device AI & Siri Intents for 10x UX in 2026',
    category: 'Mobile & AI Tech',
    date: 'Sep 15, 2026',
    readTime: '6 min read',
    excerpt: 'Explore how Apple Intelligence, Siri App Intents, Swift CoreML, and privacy-first on-device AI transform mobile application performance and user engagement.',
  },
  {
    slug: 'best-web-development-digital-agency-noida-india-2026',
    title: 'Top Next.js Web Development & Digital Marketing Agencies in Noida & India (2026 Buyers Guide)',
    category: 'Industry Guide',
    date: 'Sep 15, 2026',
    readTime: '8 min read',
    excerpt: 'A comprehensive evaluation of leading Next.js web application partners, SEO specialists, and performance marketing agencies in Noida and India.',
  },
  {
    slug: '360-lead-generation-systems-nextjs-whatsapp-funnels-2026',
    title: '360° Lead Generation Systems in 2026: Integrating Next.js Web Apps, Meta Ads & Automated WhatsApp Funnels',
    category: 'Lead Generation',
    date: 'Sep 15, 2026',
    readTime: '6 min read',
    excerpt: 'Discover how combining high-speed Next.js web applications, targeted Meta/Google PPC ad campaigns, and instant WhatsApp automation maximizes lead qualification and conversion.',
  },
  {
    slug: 'nextjs-landing-page-architecture-lead-generation-2026',
    title: 'High-Converting Next.js Landing Page Architecture for Real Estate & B2B Lead Generation',
    Category: 'Conversion Optimization',
    date: 'Sep 14, 2026',
    readTime: '7 min read',
    excerpt: 'Architecting sub-second landing pages with instant Web3Forms lead capture, WhatsApp routing, and custom CRM integrations to maximize ROAS.',
  },
  {
    slug: 'generative-engine-optimization-geo-guide-2026',
    title: 'Generative Engine Optimization (GEO): How to Rank on Google Gemini, ChatGPT Search & Perplexity in 2026',
    category: 'GEO & AI Search',
    date: 'Sep 13, 2026',
    readTime: '6 min read',
    excerpt: 'Master the transition from traditional SEO to Generative Engine Optimization. Learn how AI engines select brand citations, extract structured data, and recommend businesses.',
  },
  {
    slug: 'nextjs-14-speed-optimization',
    title: 'Why Next.js 14 is the Ultimate Web Framework for High-Converting Business Websites',
    category: 'Engineering',
    date: 'Sep 08, 2026',
    readTime: '5 min read',
    excerpt: 'Discover how server-side rendering, automatic image optimization, and sub-second Core Web Vitals elevate user experience and search rankings.',
  },
  {
    slug: 'google-ads-roi-framework',
    title: 'How to Reduce Google Ads CPA by 40% Without Sacrificing High-Intent Lead Quality',
    category: 'Digital Marketing',
    date: 'Sep 04, 2026',
    readTime: '7 min read',
    excerpt: 'Step-by-step breakdown of negative keyword management, exact-match bid strategies, and high-converting dark landing page layouts.',
  },
  {
    slug: 'real-estate-lead-generation-2026',
    title: 'The 2026 Playbook for Real Estate Digital Lead Generation in Tier-1 & Tier-2 Indian Cities',
    category: 'Industry Solutions',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
    excerpt: 'How real estate developers in Noida, Gurgaon, and Bangalore use interactive property viewports and instant WhatsApp CTAs to double sales leads.',
  },
  {
    slug: 'seo-domain-authority-guide',
    title: 'Technical SEO Audit Checklist: Dominating Local & Pan-India Search Rankings',
    category: 'SEO',
    date: 'Aug 18, 2026',
    readTime: '8 min read',
    excerpt: 'Learn how clean canonical tags, schema markup, and structured metadata boost search engine indexing speed and organic visibility.',
  },
];

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DIGITACURVE INSIGHTS</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase text-slate-900">
            GROWTH &amp; TECH <br />
            <span className="text-blue-600 italic">
              ARTICLES.
            </span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-2xl">
            Practical insights on web engineering, performance advertising, and digital positioning.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-medium">
                  <span className="text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full flex items-center gap-1 font-bold">
                    <Tag className="w-3 h-3" /> {post.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{post.excerpt}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  READ ARTICLE <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
