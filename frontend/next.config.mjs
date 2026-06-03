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
            // Only apply noindex on Vercel preview deployments (not production)
            value: process.env.VERCEL_ENV === 'preview'
              ? 'noindex, nofollow'
              : 'index, follow',
          },
        ],
      },
    ]
  },
};

export default nextConfig;