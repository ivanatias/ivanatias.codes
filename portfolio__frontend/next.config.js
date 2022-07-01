/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    deviceSizes: [520, 560, 640, 768, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 56, 64, 96, 128, 150, 256, 384],
  },
};

module.exports = nextConfig;
