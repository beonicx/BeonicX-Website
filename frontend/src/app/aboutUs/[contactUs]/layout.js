export async function generateMetadata({ params }) {
  const { contactUs } = await params;
  const aboutSlug = contactUs || 'about';

  const aboutMetadata = {
    'about': {
      title: 'About BeonicX | AI-Powered Software Company | Our Story & Mission',
      description: 'Learn about BeonicX — a leading AI and software development company founded in 2025. Our mission, vision, team, and commitment to delivering intelligent digital solutions worldwide.',
      keywords: ['about BeonicX', 'AI company', 'software development company', 'BeonicX team', 'tech startup India', 'AI automation company'],
    },
    'contact': {
      title: 'Contact BeonicX | Get in Touch for AI & Software Solutions',
      description: 'Contact BeonicX for AI agents, web development, mobile apps, and automation services. Free consultation, 24h response time. Offices in Greater Noida and Chandigarh.',
      keywords: ['contact BeonicX', 'AI consultation', 'software development inquiry', 'hire developers India', 'BeonicX office'],
    },
    'team': {
      title: 'Our Team | BeonicX Founders & Leadership',
      description: 'Meet the BeonicX founding team — Nitish Yadav (CEO), Abhishek Mishra (CTO), and Ansh Yadav (COO). Experienced leaders driving innovation in AI and software development.',
      keywords: ['BeonicX team', 'BeonicX founders', 'Nitish Yadav', 'Abhishek Mishra', 'Ansh Yadav', 'AI company leadership'],
    },
    'privacyPolicy': {
      title: 'Privacy Policy | BeonicX',
      description: 'BeonicX Privacy Policy. How we collect, use, and protect your personal information when you use our services and website.',
      keywords: ['privacy policy', 'data protection', 'BeonicX privacy'],
    },
    'terms': {
      title: 'Terms & Conditions | BeonicX',
      description: 'Terms of Service for BeonicX. By using our AI, web development, and automation services, you agree to these terms and conditions.',
      keywords: ['terms of service', 'terms and conditions', 'BeonicX terms'],
    },
  };

  const meta = aboutMetadata[aboutSlug] || aboutMetadata['about'];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://beonicx.com/aboutUs/${aboutSlug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://beonicx.com/aboutUs/${aboutSlug}`,
      type: 'website',
      images: [{ url: 'https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png', width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function AboutUsLayout({ children }) {
  return children;
}
