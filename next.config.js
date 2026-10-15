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
      { source: '/performance-marketing.php', destination: '/performance-marketing', permanent: true },
    ];
  },
};

module.exports = nextConfig;
