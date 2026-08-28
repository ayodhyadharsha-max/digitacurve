import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.digitacurve.com'

  // Define static routes
  const staticRoutes = [
    '',
    '/pricing',
    '/solutions/real-estate',
    '/solutions/healthcare',
    '/solutions/travel-tourism',
    '/solutions/solar-energy',
    '/company/about',
    '/company/contact',
    '/web-development',
    '/digital-marketing',
    '/app-development',
    '/artificial-intelligence',
    '/casestudy',
    '/portfolio',
    '/blog',
    '/faq',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/pricing' ? 1.0 : 0.8,
  }))

  // Define static blog slugs
  const blogSlugs = [
    'generative-ai-enterprise-software',
    'mobile-app-ux-trends-2026',
    'serverless-nextjs-edge-computing',
    'search-engine-landscaping-ai-search',
    'securing-iot-devices-firmware',
    'mastering-aso-app-store-optimization',
    'ultimate-guide-to-generative-engine-optimization',
    'how-to-optimize-nextjs-web-apps-for-core-web-vitals',
    'react-native-vs-flutter-choosing-the-right-hybrid-app-framework',
    'the-impact-of-local-citations-on-gemini-and-chatgpt-search-recommendations',
    'building-a-two-sided-on-demand-booking-marketplace-architecture-and-ux',
    'building-enterprise-ai-agents-with-nextjs-and-serverless-architectures',
    'global-web-development-services-custom-nextjs-vs-legacy-cms',
    'real-estate-digital-marketing-lead-generation-guide-2026',
    'digital-marketing-for-doctors-healthcare-clinics-2026',
    'travel-tourism-digital-marketing-global-booking-guide',
    'solar-company-digital-marketing-lead-generation-guide-2026',
    'headless-ecommerce-shopify-to-nextjs-migration-guide',
    'enterprise-ai-agents-llm-workflows-automation-guide-2026',
    'multi-location-local-seo-google-map-pack-domination-guide-2026',
    'building-scalable-b2b-saas-nextjs-multi-tenancy-guide-2026',
    'landing-page-conversion-rate-optimization-nextjs-guide-2026',
    'global-web-performance-sub-50ms-ttfb-nextjs-edge-caching-2026',
    'website-development-cost-in-india-2026-pricing-guide',
    'mobile-app-development-cost-in-india-2026-price-breakdown',
    'digital-marketing-packages-pricing-india-2026-roi-guide',
    'top-it-company-noida-delhi-ncr-custom-software-services-2026',
    'generative-engine-optimization-geo-agency-guide-2026',
    'react-native-vs-flutter-app-development-cost-performance-2026',
    'ecommerce-website-development-cost-shopify-vs-nextjs-2026',
    'hire-dedicated-nextjs-fullstack-developers-india-2026-guide',
    'ai-development-services-llm-agents-india-2026-guide',
    'top-marketplaces-for-buying-and-selling',
    'web-2-0-vs-web-3-0-guide',
    'what-is-walmart-marketplace-and-how-to-sell-on-it',
    'how-much-to-charge-for-shipping',
    'ott-advertising-guide-strategy-platforms-benefits',
    'marketing-guide-for-apps',
    'how-does-instacart-work-guide',
    'how-to-build-an-app-with-chatgpt',
    'zigbee-vs-z-wave-guide',
    'custom-healthcare-app-development-hipaa-telemedicine-guide-2026',
    'real-estate-website-crm-development-proptech-lead-guide-2026',
    'solar-cleantech-digital-marketing-website-app-lead-guide-2026',
    'deepseek-r1-vs-gpt4o-claude35-sonnet-ai-benchmarks-2026',
    'best-digital-marketing-agency-in-lucknow-web-development-company-2026',
    'top-digital-marketing-agency-delhi-ncr-custom-web-app-services-2026',
    'best-digital-marketing-agency-in-mumbai-web-app-development-company-2026',
    'top-digital-marketing-agency-in-pune-custom-software-web-services-2026',
  ]

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
