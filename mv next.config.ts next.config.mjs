/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your configuration options here
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
