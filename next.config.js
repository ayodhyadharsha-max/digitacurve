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
}

module.exports = nextConfig
