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
      { source: '/packages', destination: '/pricing', permanent: true },
      { source: '/package', destination: '/pricing', permanent: true },
      { source: '/about', destination: '/company/about', permanent: true },
      { source: '/about-us', destination: '/company/about', permanent: true },
      { source: '/contact', destination: '/company/contact', permanent: true },
      { source: '/contact-us', destination: '/company/contact', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/services', destination: '/', permanent: true },
      { source: '/service', destination: '/', permanent: true },
      { source: '/case-studies', destination: '/casestudy', permanent: true },
      { source: '/case-study', destination: '/casestudy', permanent: true },
      { source: '/work', destination: '/portfolio', permanent: true },
      { source: '/our-work', destination: '/portfolio', permanent: true },
      { source: '/privacy-policy', destination: '/faq', permanent: true },
      { source: '/terms-conditions', destination: '/faq', permanent: true },
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
