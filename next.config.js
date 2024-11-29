/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.125.43.204',
        port: '9000',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
