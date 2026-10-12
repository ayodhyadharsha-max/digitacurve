/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/about', destination: '/company/contact', permanent: true },
      { source: '/about-us', destination: '/company/contact', permanent: true },
      { source: '/contact', destination: '/company/contact', permanent: true },
      { source: '/contact-us', destination: '/company/contact', permanent: true },
      { source: '/services', destination: '/web-development', permanent: true },
      { source: '/services/web-development', destination: '/web-development', permanent: true },
      { source: '/services/digital-marketing', destination: '/digital-marketing', permanent: true },
      { source: '/services/app-development', destination: '/app-development', permanent: true },
      { source: '/work', destination: '/portfolio', permanent: true },
      { source: '/case-studies', destination: '/portfolio', permanent: true },
      { source: '/projects', destination: '/portfolio', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/solutions', destination: '/web-development', permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/performance-marketing',
        destination: 'https://digitacurve-max.vercel.app',
      },
      {
        source: '/performance-marketing/:path*',
        destination: 'https://digitacurve-max.vercel.app/:path*',
      },
      {
        source: '/performance-marketing.php',
        destination: 'https://digitacurve-max.vercel.app',
      },
      {
        source: '/thank-you',
        destination: 'https://digitacurve-max.vercel.app/thank-you.html',
      },
      {
        source: '/thank-you.html',
        destination: 'https://digitacurve-max.vercel.app/thank-you.html',
      },
      {
        source: '/travel-company.html',
        destination: 'https://digitacurve-max.vercel.app/travel-company.html',
      },
      {
        source: '/real-estate.html',
        destination: 'https://digitacurve-max.vercel.app/real-estate.html',
      },
      {
        source: '/builder.html',
        destination: 'https://digitacurve-max.vercel.app/builder.html',
      },
      {
        source: '/e-commerce.html',
        destination: 'https://digitacurve-max.vercel.app/e-commerce.html',
      },
    ];
  },
};

module.exports = nextConfig;
