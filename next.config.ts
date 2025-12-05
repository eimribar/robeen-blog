import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Multi-zone configuration - this blog will be served at /blog
  basePath: '/blog',
  assetPrefix: '/blog',

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },

  // Enable experimental features
  experimental: {
    // Improve performance
  },
};

export default nextConfig;
