export const metadata = {
  title: 'AI & Automation Blog | BeonicX Insights',
  description: 'Expert insights on AI agents, automation, machine learning, RAG, and enterprise AI solutions. Learn from BeonicX experts about implementing intelligent automation.',
  keywords: [
    'AI blog',
    'AI agents blog',
    'automation blog',
    'machine learning insights',
    'enterprise AI',
    'AI tutorials',
    'autonomous agents',
    'RAG',
    'generative AI',
    'AI for business',
  ],
  alternates: {
    canonical: 'https://beonicx.com/blog',
  },
  openGraph: {
    title: 'AI & Automation Blog | BeonicX Insights',
    description: 'Expert insights on AI agents, automation, machine learning, and enterprise AI solutions.',
    url: 'https://beonicx.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'BeonicX AI Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Automation Blog | BeonicX Insights',
    description: 'Expert insights on AI agents, automation, machine learning, and enterprise AI solutions.',
  },
};

export default function BlogLayout({ children }) {
  return children;
}
