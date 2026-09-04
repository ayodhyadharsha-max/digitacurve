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
  'landing-page-conversion-rate-optimization-nextjs-guide-2026': {
    title: 'Landing Page CRO & Next.js Funnel Optimization Guide 2026 | Digitacurve',
    desc: 'How to optimize landing page conversion rates with Next.js sub-second speed, interactive cost estimators, and instant WhatsApp customer acquisition funnels.',
  },
  'global-web-performance-sub-50ms-ttfb-nextjs-edge-caching-2026': {
    title: 'Global Web Performance: Sub-50ms TTFB with Next.js Edge Caching | Digitacurve',
    desc: 'Engineering sub-50ms TTFB for international enterprises using Next.js Edge runtime, stale-while-revalidate caching, and distributed edge nodes.',
  },
  'website-development-cost-in-india-2026-pricing-guide': {
    title: 'Website Development Cost in India (2026 Price Guide) | Digitacurve',
    desc: 'Transparent 2026 cost breakdown for small business websites, custom Next.js corporate portals, and headless e-commerce stores in India.',
  },
  'mobile-app-development-cost-in-india-2026-price-breakdown': {
    title: 'Mobile App Development Cost in India (2026 Complete Price Breakdown) | Digitacurve',
    desc: 'Complete 2026 price guide for iOS, Android, Flutter & React Native app development costs in India. Detailed line-item breakdown for MVPs & enterprise apps.',
  },
  'digital-marketing-packages-pricing-india-2026-roi-guide': {
    title: 'Digital Marketing Packages & Pricing in India (2026 ROI Guide) | Digitacurve',
    desc: 'Transparent 2026 guide to digital marketing packages in India: SEO, PPC management, Generative Engine Optimization (GEO), and 360° lead machine retainers.',
  },
  'top-it-company-noida-delhi-ncr-custom-software-services-2026': {
    title: 'Top IT & Software Company in Noida & Delhi NCR (2026 Guide) | Digitacurve',
    desc: 'Top software engineering and IT consulting company in Noida & Delhi NCR specializing in custom Next.js web applications, mobile apps, and enterprise AI.',
  },
  'generative-engine-optimization-geo-agency-guide-2026': {
    title: 'Generative Engine Optimization (GEO) Agency Guide 2026 | Digitacurve',
    desc: 'How to rank on ChatGPT Search, Google Gemini, and Perplexity AI in 2026 with Generative Engine Optimization (GEO) strategies.',
  },
  'react-native-vs-flutter-app-development-cost-performance-2026': {
    title: 'React Native vs Flutter in 2026: Cost & Performance | Digitacurve',
    desc: 'Technical comparison of React Native vs Flutter in 2026: performance benchmarks, development cost, and cross-platform mobile architecture.',
  },
  'ecommerce-website-development-cost-shopify-vs-nextjs-2026': {
    title: 'E-Commerce Website Cost 2026: Shopify vs Headless Next.js | Digitacurve',
    desc: 'Complete 2026 cost comparison for e-commerce website development: monolithic Shopify vs custom headless Next.js online stores.',
  },
  'hire-dedicated-nextjs-fullstack-developers-india-2026-guide': {
    title: 'Hire Dedicated Next.js & App Developers in India (2026 Guide) | Digitacurve',
    desc: 'How to hire dedicated Next.js, React Native, and full-stack software developers in India: monthly retainer pricing, skill verification, and time-zone models.',
  },
  'ai-development-services-llm-agents-india-2026-guide': {
    title: 'AI Development Services & LLM Agent Solutions in India (2026 Guide) | Digitacurve',
    desc: 'Enterprise guide to custom AI development services, multi-agent orchestration, RAG vector architectures, and LLM integrations in India.',
  },
  'top-marketplaces-for-buying-and-selling': {
    title: 'Top Marketplaces for Buying and Selling in 2026 | Digitacurve',
    desc: 'Multi-vendor marketplace architecture, escrow payment processing, inventory API sync, and seller management guide.',
  },
  'web-2-0-vs-web-3-0-guide': {
    title: 'Web 2.0 vs Web 3.0 Guide 2026 | Digitacurve',
    desc: 'Technical comparison of Web 2.0 vs Web 3.0: centralized cloud servers vs IPFS storage, OAuth vs wallet authentication.',
  },
  'what-is-walmart-marketplace-and-how-to-sell-on-it': {
    title: 'Walmart Marketplace 2026 Guide | Digitacurve',
    desc: 'How to sell, scale, and integrate custom e-commerce APIs on Walmart Marketplace.',
  },
  'how-much-to-charge-for-shipping': {
    title: 'How Much to Charge for Shipping in 2026 | Digitacurve',
    desc: 'E-commerce shipping pricing models, carrier API calculation, and checkout conversion rate optimization.',
  },
  'ott-advertising-guide-strategy-platforms-benefits': {
    title: 'OTT Advertising Guide 2026 | Digitacurve',
    desc: 'Over-The-Top (OTT) video advertising strategies, Connected TV targeting, and streaming ad platform performance.',
  },
  'marketing-guide-for-apps': {
    title: 'Mobile App Marketing Guide 2026 | Digitacurve',
    desc: 'App Store Optimization (ASO), paid user acquisition, Apple Search Ads, and mobile app growth funnels.',
  },
  'how-does-instacart-work-guide': {
    title: 'How Does Instacart Work 2026 Guide | Digitacurve',
    desc: 'On-demand grocery delivery platform business model, shopper dispatch algorithms, and multi-store inventory APIs.',
  },
  'how-to-build-an-app-with-chatgpt': {
    title: 'How to Build an App with ChatGPT & AI Agents 2026 | Digitacurve',
    desc: 'Building custom Next.js and mobile apps using ChatGPT, OpenAI APIs, and AI coding assistants.',
  },
  'zigbee-vs-z-wave-guide': {
    title: 'Zigbee vs Z-Wave 2026 IoT Guide | Digitacurve',
    desc: 'Technical comparison of Zigbee vs Z-Wave wireless mesh protocols for smart home IoT hubs and mobile automation apps.',
  },
  'custom-healthcare-app-development-hipaa-telemedicine-guide-2026': {
    title: 'Custom Healthcare & Telemedicine App Development (2026 Guide) | Digitacurve',
    desc: 'HIPAA-compliant healthcare web portals, mobile telemedicine app engineering, WebRTC video consultations, and EHR/EMR FHIR integrations.',
  },
  'real-estate-website-crm-development-proptech-lead-guide-2026': {
    title: 'Real Estate Website & CRM Development (2026 PropTech Guide) | Digitacurve',
    desc: 'Custom real estate website development, MLS/RETS API feed integration, interactive Mapbox search, and automated CRM lead capture for brokerages.',
  },
  'solar-cleantech-digital-marketing-website-app-lead-guide-2026': {
    title: 'Solar & CleanTech Digital Marketing Guide (2026) | Digitacurve',
    desc: 'Solar company digital marketing strategies, custom solar installer website development, rooftop ROI calculators, and mobile lead dispatch apps.',
  },
  'deepseek-r1-vs-gpt4o-claude35-sonnet-ai-benchmarks-2026': {
    title: 'DeepSeek R1 vs GPT-4o vs Claude 3.5 Sonnet: 2026 AI Benchmarks & Free API Guide | Digitacurve',
    desc: 'Comprehensive 2026 AI benchmark comparison: DeepSeek R1 reasoning architecture vs OpenAI GPT-4o vs Claude 3.5 Sonnet. SWE-bench coding scores, local Ollama execution, and API cost breakdown.',
  },
  'best-digital-marketing-agency-in-lucknow-web-development-company-2026': {
    title: 'Digital Marketing Agency & Web Development Company in Lucknow | Digitacurve',
    desc: 'Top digital marketing agency in Lucknow & custom web development company. Google 3-Pack Local SEO, Next.js website design, and high-ROI lead generation.',
  },
  'top-digital-marketing-agency-delhi-ncr-custom-web-app-services-2026': {
    title: 'Digital Marketing Agency & Custom App Development in Delhi NCR | Digitacurve',
    desc: 'Premier digital marketing agency in Delhi NCR & custom web app development company in Delhi, Gurgaon, and Noida.',
  },
  'best-digital-marketing-agency-in-mumbai-web-app-development-company-2026': {
    title: 'Digital Marketing Agency & Software Company in Mumbai | Digitacurve',
    desc: 'Top digital marketing agency in Mumbai & software development company. Enterprise SEO, headless e-commerce, and custom mobile app engineering.',
  },
  'top-digital-marketing-agency-in-pune-custom-software-web-services-2026': {
    title: 'Digital Marketing Agency & Software Company in Pune | Digitacurve',
    desc: 'Top digital marketing agency in Pune & custom software development company. SaaS product SEO, microservices, and mobile app engineering.',
  },
  'what-is-digital-marketing-benefits-for-business-2026': {
    title: 'What is Digital Marketing? 10 Benefits for Business (2026 Guide) | Digitacurve',
    desc: 'Complete beginner guide to digital marketing: SEO, social media, PPC ads, and 10 ways digital marketing multiplies business revenue.',
  },
  'what-is-ai-how-small-businesses-can-use-artificial-intelligence-2026': {
    title: "What is AI? A Beginner's Guide for Business Owners (2026) | Digitacurve",
    desc: "Understand Artificial Intelligence (AI) for business: automated chatbots, content generation, and small business productivity tools.",
  },
  'how-to-choose-the-best-web-development-agency-2026-checklist': {
    title: 'How to Choose the Best Web Development Agency in 2026 | Digitacurve',
    desc: '10-point checklist for hiring a web development agency in 2026. Evaluating Next.js SSR tech stacks, 100/100 Core Web Vitals, GEO AI search optimization, and transparent pricing.',
  },
  '5-reasons-every-business-needs-custom-mobile-app-2026': {
    title: '5 Reasons Every Business Needs a Custom Mobile App in 2026 | Digitacurve',
    desc: 'Why businesses need custom mobile app development in 2026: direct push notification engagement, 3x higher checkout conversions, brand loyalty rewards, and React Native/Flutter cross-platform efficiency.',
  },
  'how-ai-automation-saves-20-hours-per-week-small-business-2026': {
    title: 'How AI Automation Saves 20+ Hours Per Week for Small Business (2026) | Digitacurve',
    desc: 'Practical guide on how small businesses use AI chatbots, automated CRM follow-up sequences, and AI workflows to save 20+ hours weekly and double lead conversions.',
  },
  'top-digital-marketing-agency-in-patna-indore-bhopal-jaipur-2026': {
    title: 'Digital Marketing Agency & Web Development Company in Patna, Indore, Bhopal & Jaipur | Digitacurve',
    desc: 'Premier digital marketing agency & web development company in Patna, Indore, Bhopal, and Jaipur. Local SEO Google 3-Pack, Next.js web apps, and high-ROI performance ads.',
  },
  'digital-marketing-website-development-cost-in-india-2026-pricing-packages': {
    title: 'Digital Marketing & Website Development Cost in India (2026 Price List) | Digitacurve',
    desc: 'Comprehensive 2026 price guide: Digital marketing cost in India, website development pricing breakdown, monthly SEO package rates, and transparent agency pricing.',
  },
  'top-social-media-marketing-agency-instagram-management-2026-guide': {
    title: 'Social Media Marketing Agency & Instagram Account Management Company | Digitacurve',
    desc: 'Top social media marketing agency & Instagram account management company. Viral Reels strategy, targeted lead ads, brand collaborations, and 24/7 engagement automation.',
  },
  'top-digital-marketing-agency-in-surat-agra-meerut-varanasi-regional-2026': {
    title: 'Digital Marketing Agency in Surat, Agra, Meerut, Varanasi & Regional Hubs | Digitacurve',
    desc: 'Top digital marketing agency & web development company in Surat, Agra, Meerut, Varanasi, Rajkot, Gorakhpur, and Prayagraj.',
  },
  'performance-marketing-google-ads-seo-services-guide-2026': {
    title: 'Performance Marketing, Google Ads Management & SEO Services Guide | Digitacurve',
    desc: 'Top performance marketing agency, Google Ads specialist, and SEO company in India. Data-driven PPC campaigns, technical SEO, and sub-50ms lead landing pages.',
  },
  'small-business-digital-marketing-guide-2026-affordable-packages': {
    title: 'Small Business Digital Marketing Guide & Affordable Packages (2026) | Digitacurve',
    desc: 'Affordable digital marketing agency solutions for small businesses: Local SEO, low-cost Instagram lead ads, automated WhatsApp responses, and fast websites.',
  },
  'niche-digital-marketing-guide-2026-real-estate-ecommerce-hotel-app': {
    title: 'Niche Digital Marketing Agency: Real Estate, E-Commerce, Hotel & App Growth | Digitacurve',
    desc: 'Industry-specific digital marketing agency for real estate, luxury hotels, headless e-commerce, and mobile app growth in 2026.',
  },
  'how-generative-engine-optimization-geo-helps-businesses-rank-chatgpt-gemini-2026': {
    title: 'Generative Engine Optimization (GEO): Rank on ChatGPT & Gemini (2026) | Digitacurve',
    desc: 'Learn how Generative Engine Optimization (GEO) and AEO help your business rank #1 on ChatGPT, Google Gemini, and Perplexity AI search engines.',
  },
  'how-nextjs-14-ssr-sub-50ms-ttfb-boost-ecommerce-b2b-conversions-2026': {
    title: 'How Next.js 14 SSR & Sub-50ms TTFB Boost E-Commerce & B2B Conversions | Digitacurve',
    desc: 'Technical guide on Next.js 14 SSR, edge network rendering, 100/100 Core Web Vitals, and sub-50ms TTFB web development for maximum sales conversions.',
  },
  'digital-marketing-agency-in-noida-delhi-ncr-seo-web-development-2026': {
    title: 'Digital Marketing Agency & Web Development Company in Noida & Delhi NCR | Digitacurve',
    desc: 'Top digital marketing agency & Next.js web development company in Noida and Delhi NCR. Local SEO, Google 3-Pack, GEO AI search recommendations, and high-ROI ads.',
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
