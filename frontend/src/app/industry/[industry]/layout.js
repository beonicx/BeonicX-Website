export async function generateMetadata({ params }) {
  const { industry } = await params;
  const industrySlug = industry || 'education';

  const industryMetadata = {
    'education': {
      title: 'AI Solutions for Education Industry | EdTech Automation',
      description: 'Transform education with AI-powered solutions. Student engagement platforms, automated grading, personalized learning, and intelligent tutoring systems for schools and universities.',
    },
    'healthcare': {
      title: 'Healthcare AI Solutions | Medical Automation & Patient Care',
      description: 'Advanced AI solutions for healthcare. Patient management systems, medical automation, diagnostic support, and HIPAA-compliant healthcare technology.',
    },
    'finance': {
      title: 'Financial Services AI | FinTech Solutions & Automation',
      description: 'AI-powered solutions for financial services. Fraud detection, algorithmic trading, risk assessment, and automated financial analysis.',
    },
    'ecommerce': {
      title: 'E-commerce AI Solutions | Retail Automation & Personalization',
      description: 'Transform your online store with AI. Personalized recommendations, inventory management, customer service automation, and sales optimization.',
    },
  };

  const meta = industryMetadata[industrySlug] || industryMetadata['education'];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://beonicx.com/industry/${industrySlug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://beonicx.com/industry/${industrySlug}`,
      images: ['https://beonicx.com/og-default.jpg'],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function IndustryLayout({ children }) {
  return children;
}
