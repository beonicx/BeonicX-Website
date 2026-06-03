/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: process.env.VERCEL_URL?.includes('vercel.app')
              ? 'noindex, nofollow'
              : 'index, follow',
          },
        ],
      },
    ]
  },
};

export default nextConfig;