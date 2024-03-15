/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['systemsmanagerlda.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'dawid-food-ordering.s3.amazonaws.com',
      },
    ]
  }
}

module.exports = nextConfig
