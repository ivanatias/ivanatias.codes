/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [
      640, 750, 828, 1080, 1200, 1920, 2048, 2400, 2800, 3200, 3840
    ],
    imageSizes: [16, 32, 48, 56, 64, 96, 128, 150, 256, 384, 520]
  }
})
