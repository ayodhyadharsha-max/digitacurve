/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'assets.goodfirms.co',
      'sortlist-public-ui-manual-upload-production.s3.eu-west-1.amazonaws.com',
      'quantumitinnovation.com',
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      // Exact & Trailing slash 404 URL fixes from Google Search Console
      { source: '/pages', destination: '/pricing', permanent: true },
      { source: '/pages/:path*', destination: '/pricing', permanent: true },
      { source: '/service', destination: '/', permanent: true },
      { source: '/service/:path*', destination: '/', permanent: true },
      { source: '/services', destination: '/', permanent: true },
      { source: '/services/:path*', destination: '/', permanent: true },
      { source: '/privacy-policy', destination: '/faq', permanent: true },
      { source: '/privacy-policy/:path*', destination: '/faq', permanent: true },
      { source: '/terms-conditions', destination: '/faq', permanent: true },
      { source: '/terms-conditions/:path*', destination: '/faq', permanent: true },
      { source: '/terms-and-conditions', destination: '/faq', permanent: true },
      { source: '/terms-and-conditions/:path*', destination: '/faq', permanent: true },
      { source: '/refund-policy', destination: '/faq', permanent: true },
      { source: '/refund-policy/:path*', destination: '/faq', permanent: true },
      { source: '/faqs', destination: '/faq', permanent: true },
      { source: '/faqs/:path*', destination: '/faq', permanent: true },
      { source: '/about-us', destination: '/company/about', permanent: true },
      { source: '/about-us/:path*', destination: '/company/about', permanent: true },
      { source: '/about', destination: '/company/about', permanent: true },
      { source: '/contact-us', destination: '/company/contact', permanent: true },
      { source: '/contact-us/:path*', destination: '/company/contact', permanent: true },
      { source: '/contact', destination: '/company/contact', permanent: true },
      { source: '/news', destination: '/blog', permanent: true },
      { source: '/news/:path*', destination: '/blog', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:path*', destination: '/blog', permanent: true },
      { source: '/category/:path*', destination: '/digital-marketing', permanent: true },
      { source: '/author/:path*', destination: '/company/about', permanent: true },
      { source: '/2025/:path*', destination: '/blog', permanent: true },
      { source: '/2026/:path*', destination: '/blog', permanent: true },
      { source: '/testimonial', destination: '/company/about', permanent: true },
      { source: '/testimonial/:path*', destination: '/company/about', permanent: true },
      { source: '/great-solution-for-your-business-growth-4', destination: '/', permanent: true },
      { source: '/great-solution-for-your-business-growth-4/:path*', destination: '/', permanent: true },
      { source: '/digital-marketing-services-in-lucknow', destination: '/digital-marketing', permanent: true },
      { source: '/digital-marketing-services-in-lucknow/:path*', destination: '/digital-marketing', permanent: true },
      { source: '/online-marketing-services', destination: '/digital-marketing', permanent: true },
      { source: '/online-marketing-services/:path*', destination: '/digital-marketing', permanent: true },
      { source: '/reciprocal-links', destination: '/', permanent: true },
      { source: '/reciprocal-links/:path*', destination: '/', permanent: true },
      { source: '/packages', destination: '/pricing', permanent: true },
      { source: '/package', destination: '/pricing', permanent: true },
      { source: '/case-studies', destination: '/casestudy', permanent: true },
      { source: '/case-study', destination: '/casestudy', permanent: true },
      { source: '/work', destination: '/portfolio', permanent: true },
      { source: '/our-work', destination: '/portfolio', permanent: true },
      // Legacy WordPress URL redirects to clear GSC 403 Forbidden errors
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-includes/:path*', destination: '/', permanent: true },
      { source: '/blog/how-to-reactivate-and-recover-pinterest-account', destination: '/blog', permanent: true },
      { source: '/blog/how-to-use-facebook-messenger-without-app', destination: '/blog', permanent: true },
      { source: '/blog/marketing-for-apps-guide', destination: '/blog/marketing-guide-for-apps', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
