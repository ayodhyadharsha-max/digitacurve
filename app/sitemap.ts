import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitacurve.com'

  // Define static routes
  const staticRoutes = [
    '',
    '/company/about',
    '/company/contact',
    '/web-development',
    '/digital-marketing',
    '/app-development',
    '/artificial-intelligence',
    '/casestudy',
    '/portfolio',
    '/blog',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Define static blog slugs
  const blogSlugs = [
    'generative-ai-enterprise-software',
    'mobile-app-ux-trends-2026',
    'serverless-nextjs-edge-computing',
    'search-engine-landscaping-ai-search',
    'securing-iot-devices-firmware',
    'mastering-aso-app-store-optimization',
  ]

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
