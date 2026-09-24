export async function generateMetadata({ params }) {
  const { section, subsection } = await params;

  const fmt = (str) => str?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  const techKeywords = {
    'nextjs': ['Next.js development', 'Next.js company', 'server-side rendering', 'React framework', 'SSR SSG ISR'],
    'react': ['React development', 'React.js company', 'React developers', 'single page application', 'React consulting'],
    'nodejs': ['Node.js development', 'Node.js company', 'backend development', 'Express.js', 'server-side JavaScript'],
    'python': ['Python development', 'Python company', 'Django Flask', 'Python backend', 'Python AI development'],
    'react-native': ['React Native development', 'cross-platform mobile app', 'React Native company', 'hybrid mobile app'],
    'flutter': ['Flutter development', 'Flutter company', 'Dart development', 'cross-platform app', 'Flutter app development'],
  };

  const sectionName = fmt(section);
  const subsectionName = fmt(subsection);
  const title = `${subsectionName} Development Services | ${sectionName} Technology | BeonicX`;
  const description = `Professional ${subsectionName} development services. We build scalable, high-performance ${sectionName?.toLowerCase()} solutions with ${subsectionName} — from architecture to deployment and ongoing support.`;
  const keywords = [
    ...(techKeywords[subsection] || []),
    `${subsection} developers`, `${subsection} consulting`,
    `${section} development`, 'BeonicX', 'hire developers India'
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://beonicx.com/technologies/${section}/${subsection}`,
    },
    openGraph: {
      title,
      description,
      url: `https://beonicx.com/technologies/${section}/${subsection}`,
      type: 'website',
      images: [{ url: 'https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function TechnologyLayout({ children }) {
  return children;
}
