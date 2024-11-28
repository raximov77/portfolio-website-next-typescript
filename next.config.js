/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your configuration options here
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // Enable experimental features if necessary
  },
};

module.exports = nextConfig;
