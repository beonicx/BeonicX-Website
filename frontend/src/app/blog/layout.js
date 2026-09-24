export const metadata = {
  title: 'AI & Technology Blog | Expert Insights & Tutorials | BeonicX',
  description: 'Expert insights on AI agents, automation, machine learning, web development, cloud architecture, and enterprise software. Practical tutorials and industry analysis from BeonicX engineers.',
  keywords: [
    'AI blog', 'AI agents blog', 'automation insights', 'machine learning tutorials',
    'enterprise AI', 'web development blog', 'software engineering', 'RAG tutorials',
    'generative AI', 'AI for business', 'tech blog India', 'BeonicX blog'
  ],
  alternates: {
    canonical: 'https://beonicx.com/blog',
  },
  openGraph: {
    title: 'AI & Technology Blog | Expert Insights & Tutorials | BeonicX',
    description: 'Expert insights on AI agents, automation, machine learning, and enterprise AI solutions from BeonicX engineers.',
    url: 'https://beonicx.com/blog',
    type: 'website',
    images: [{ url: 'https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png', width: 1200, height: 630, alt: 'BeonicX AI Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Technology Blog | Expert Insights & Tutorials | BeonicX',
    description: 'Expert insights on AI agents, automation, machine learning, and enterprise AI solutions.',
  },
};

export default function BlogLayout({ children }) {
  return children;
}
