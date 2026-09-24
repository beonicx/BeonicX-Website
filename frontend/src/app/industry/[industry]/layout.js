export async function generateMetadata({ params }) {
  const { industry } = await params;
  const industrySlug = industry || 'education';

  const industryMetadata = {
    'education': {
      title: 'Education App Development | EdTech Solutions & AI for Learning | BeonicX',
      description: 'Custom education app development for K-12, higher education, and corporate training. AI-powered learning platforms, LMS, interactive content, and student analytics.',
      keywords: ['education app development', 'EdTech solutions', 'learning management system', 'AI for education', 'e-learning platform', 'K-12 app development', 'corporate training app'],
    },
    'healthcare': {
      title: 'Healthcare App Development | HIPAA-Compliant Medical Software | BeonicX',
      description: 'Custom healthcare software development. Patient management systems, telemedicine apps, EHR integration, medical automation, and HIPAA-compliant solutions.',
      keywords: ['healthcare app development', 'medical software', 'telemedicine app', 'HIPAA-compliant', 'patient management system', 'healthcare AI', 'EHR integration'],
    },
    'finance': {
      title: 'FinTech App Development | Financial Software & AI Solutions | BeonicX',
      description: 'Custom FinTech solutions. Trading platforms, payment gateways, fraud detection, risk assessment, and AI-powered financial automation.',
      keywords: ['FinTech development', 'financial software', 'trading platform', 'fraud detection', 'payment gateway', 'financial AI', 'banking app development'],
    },
    'ecommerce': {
      title: 'E-commerce App Development | Online Store & Retail Solutions | BeonicX',
      description: 'Custom e-commerce development. Online stores, marketplace platforms, inventory management, AI-powered recommendations, and omnichannel retail solutions.',
      keywords: ['e-commerce development', 'online store', 'marketplace platform', 'Shopify alternative', 'retail AI', 'inventory management', 'e-commerce app'],
    },
  };

  const meta = industryMetadata[industrySlug] || industryMetadata['education'];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://beonicx.com/industry/${industrySlug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://beonicx.com/industry/${industrySlug}`,
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

export default function IndustryLayout({ children }) {
  return children;
}
