import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // MUI with Emotion
  compiler: {
    emotion: true,
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Redirects for canonical URLs (www to non-www) and retired routes.
  // The /flow rules must never be removed: promotional links and ChatGPT
  // citations point at those URLs permanently.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.rxsynapse.com',
          },
        ],
        destination: 'https://rxsynapse.com/:path*',
        permanent: true,
      },
      {
        source: '/flow',
        destination: '/',
        permanent: true,
      },
      {
        source: '/flow/pricing',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/communication',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
