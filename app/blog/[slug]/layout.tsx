import type { Metadata } from 'next'

// Static blog metadata dictionary for instant SSR SEO rendering
const blogMetaDictionary: Record<string, { title: string; desc: string }> = {
  'generative-ai-enterprise-software': {
    title: 'How Generative AI is Changing Enterprise Software Development | Digitacurve',
    desc: 'Explore how LLMs, AI agents, and Generative AI are accelerating code generation, automated testing, and legacy codebase modernization in 2026.',
  },
  'mobile-app-ux-trends-2026': {
    title: 'Top Mobile App UX Trends to Watch in 2026 | Digitacurve',
    desc: 'Discover critical UI/UX shifts in mobile apps including spatial computing, micro-interactions, gesture-first navigation, and adaptive interfaces.',
  },
  'serverless-nextjs-edge-computing': {
    title: 'Why Serverless & Next.js Edge Computing is the Future of Web Apps | Digitacurve',
    desc: 'Learn how Next.js Edge functions and serverless architectures deliver sub-50ms TTFB globally while reducing infrastructure overhead.',
  },
  'search-engine-landscaping-ai-search': {
    title: 'The Shifting Search Landscape: SEO Strategies for the AI Era | Digitacurve',
    desc: 'How to optimize your brand for ChatGPT Search, Google AI Overviews, Perplexity, and conversational generative answer engines.',
  },
  'securing-iot-devices-firmware': {
    title: 'Securing IoT Devices: Firmware Security Best Practices | Digitacurve',
    desc: 'Comprehensive guidelines for securing IoT hardware, firmware encryption, zero-trust device authentication, and OTA update protection.',
  },
  'mastering-aso-app-store-optimization': {
    title: 'Mastering App Store Optimization (ASO) for Higher Downloads | Digitacurve',
    desc: 'Discover visual and text optimization guidelines to rank higher in Google Play and iOS App Store keyword searches in 2026.',
  },
  'ultimate-guide-to-generative-engine-optimization': {
    title: 'The Ultimate Guide to Generative Engine Optimization (GEO) | Digitacurve',
    desc: 'Master GEO strategies to get your business cited and recommended by ChatGPT, Google Gemini, Perplexity, and Claude in 2026.',
  },
  'how-to-optimize-nextjs-web-apps-for-core-web-vitals': {
    title: 'How to Optimize Next.js Web Apps for Core Web Vitals in 2026 | Digitacurve',
    desc: 'Step-by-step performance optimization guide for Next.js App Router: achieving 100/100 Lighthouse scores, sub-200ms INP, and fast LCP.',
  },
  'react-native-vs-flutter-choosing-the-right-hybrid-app-framework': {
    title: 'React Native vs Flutter: Choosing the Right Hybrid App Framework in 2026 | Digitacurve',
    desc: 'In-depth performance, developer experience, and cost comparison between React Native and Flutter for enterprise mobile app development.',
  },
  'the-impact-of-local-citations-on-gemini-and-chatgpt-search-recommendations': {
    title: 'The Impact of Local Citations on Gemini & ChatGPT Search Recommendations | Digitacurve',
    desc: 'How consistent NAP data across business directories and Schema.org structured markup influence AI chatbot local recommendations.',
  },
  'building-a-two-sided-on-demand-booking-marketplace-architecture-and-ux': {
    title: 'Building a Two-Sided On-Demand Booking Marketplace: Architecture & UX | Digitacurve',
    desc: 'Engineering scalable on-demand booking platforms with real-time location tracking, multi-vendor payouts, and resilient state machines.',
  },
  'building-enterprise-ai-agents-with-nextjs-and-serverless-architectures': {
    title: 'Building Enterprise AI Agents with Next.js & Serverless Architectures | Digitacurve',
    desc: 'Technical architecture for autonomous AI agents, tool-calling pipelines, streaming LLM responses, and vector database indexing.',
  },
  'global-web-development-services-custom-nextjs-vs-legacy-cms': {
    title: 'Global Web Development Services: Custom Next.js vs Legacy CMS Platforms | Digitacurve',
    desc: 'Why global businesses in London, Melbourne, Sydney, Toronto, and Dubai choose custom Next.js architecture over WordPress and Shopify.',
  },
  'real-estate-digital-marketing-lead-generation-guide-2026': {
    title: 'Real Estate Digital Marketing & Lead Generation Blueprint 2026 | Digitacurve',
    desc: 'How property builders and brokers generate pre-qualified buyer leads, virtual tour bookings, and NRI investments using Next.js portals and Meta ads.',
  },
  'digital-marketing-for-doctors-healthcare-clinics-2026': {
    title: 'Digital Marketing for Doctors & Healthcare Clinics: Patient Acquisition Strategy | Digitacurve',
    desc: 'Patient acquisition playbook for doctors and hospitals: Google Map 3-Pack domination, verified reviews, and instant appointment booking.',
  },
  'travel-tourism-digital-marketing-global-booking-guide': {
    title: 'Travel & Tourism Digital Marketing: How to Scale Booking Inquiries Globally | Digitacurve',
    desc: 'Scale direct tourist bookings with dynamic tour package websites, itinerary builders, and multi-currency checkout funnels without OTA commissions.',
  },
  'solar-company-digital-marketing-lead-generation-guide-2026': {
    title: 'Solar Company Digital Marketing & Lead Generation Blueprint 2026 | Digitacurve',
    desc: 'Exclusive rooftop solar lead generation funnels, solar savings calculator integrations, and Google PPC strategies for Solar EPC contractors.',
  },
  'headless-ecommerce-shopify-to-nextjs-migration-guide': {
    title: 'Headless E-Commerce: Migrate from Shopify to Custom Next.js Architecture | Digitacurve',
    desc: 'Discover why high-growth e-commerce brands migrate from monolithic Shopify themes to headless Next.js for sub-second page loads and higher checkout conversion.',
  },
  'enterprise-ai-agents-llm-workflows-automation-guide-2026': {
    title: 'Enterprise AI Agents & Custom LLM Workflows Guide 2026 | Digitacurve',
    desc: 'Learn how modern enterprises automate business operations, lead qualification, and customer support with autonomous AI agents and vector RAG architectures.',
  },
  'multi-location-local-seo-google-map-pack-domination-guide-2026': {
    title: 'Multi-Location Local SEO & Google Map Pack Guide 2026 | Digitacurve',
    desc: 'Master multi-location local SEO strategies: Google Local Map 3-Pack domination, branch landing page architecture, and verified NAP synchronization.',
  },
  'building-scalable-b2b-saas-nextjs-multi-tenancy-guide-2026': {
    title: 'Building Scalable B2B SaaS: Next.js Multi-Tenancy & Stripe Guide 2026 | Digitacurve',
    desc: 'Engineering blueprint for building high-scale B2B SaaS platforms: Next.js edge multi-tenancy, Stripe billing webhooks, and serverless architectures.',
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = blogMetaDictionary[params.slug]
  if (meta) {
    return {
      title: meta.title,
      description: meta.desc,
      openGraph: {
        title: meta.title,
        description: meta.desc,
        url: `https://digitacurve.com/blog/${params.slug}`,
        siteName: 'Digitacurve',
        type: 'article',
      },
    }
  }

  const formattedTitle = params.slug
    ? params.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : 'Insights & Technical Blog'

  return {
    title: `${formattedTitle} | Digitacurve`,
    description: 'Read the latest technical insights, architectural guides, and digital marketing strategies from Digitacurve.',
  }
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
