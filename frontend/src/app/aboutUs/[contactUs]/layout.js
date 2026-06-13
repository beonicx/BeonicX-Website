export async function generateMetadata({ params }) {
  const aboutSlug = params.contactUs || 'about';

  const aboutMetadata = {
    'about': {
      title: 'About BeonicX | AI & Automation Experts',
      description: 'Learn about BeonicX, a leading AI and automation company. Our mission, vision, team, and commitment to transforming businesses with intelligent solutions.',
    },
    'contact': {
      title: 'Contact BeonicX | Get in Touch',
      description: 'Contact BeonicX for AI solutions and automation services. Speak with our experts about your project requirements and get a free consultation.',
    },
    'team': {
      title: 'Our Team | BeonicX Leadership & Experts',
      description: 'Meet the BeonicX team of AI experts, developers, and consultants. Experienced professionals dedicated to delivering exceptional results.',
    },
  };

  const meta = aboutMetadata[aboutSlug] || aboutMetadata['about'];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://beonicx.com/aboutUs/${aboutSlug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://beonicx.com/aboutUs/${aboutSlug}`,
      images: ['https://beonicx.com/og-default.jpg'],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function AboutUsLayout({ children }) {
  return children;
}
