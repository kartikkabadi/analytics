/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['assets.whop.com', 'cdn.whop.com'],
  },
  env: {
    WHOP_API_KEY: process.env.WHOP_API_KEY,
    WHOP_APP_ID: process.env.WHOP_APP_ID,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
