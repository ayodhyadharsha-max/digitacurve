import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'GPTBot', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://digitacurve.com/sitemap.xml',
    host: 'https://digitacurve.com',
  }
}
