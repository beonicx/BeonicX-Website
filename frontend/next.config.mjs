/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.postimg.cc', 'images.pexels.com'],
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