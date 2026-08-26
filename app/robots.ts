import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/wp-admin/',
          '/wp-content/',
          '/wp-includes/',
          '/wp-json/',
          '/wp-*.php',
        ],
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'GPTBot', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/wp-admin/',
          '/wp-content/',
          '/wp-includes/',
          '/wp-json/',
          '/wp-*.php',
        ],
      },
    ],
    sitemap: 'https://digitacurve.com/sitemap.xml',
    host: 'https://digitacurve.com',
  }
}
