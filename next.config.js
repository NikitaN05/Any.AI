/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    // Required for Netlify image optimization
    unoptimized: process.env.NETLIFY === 'true',
  },
  // Disable console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Output configuration for Netlify
  output: 'standalone',
};

module.exports = nextConfig;

