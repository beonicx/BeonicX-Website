export async function generateMetadata({ params }) {
  const { webDevelopment } = await params;
  const serviceSlug = webDevelopment || 'web-development';

  const serviceMetadata = {
    'web-development': {
      title: 'Web Development Services | Custom Websites & Web Applications',
      description: 'Expert web development services for custom websites, web applications, and e-commerce platforms. Modern, responsive, and scalable solutions built with Next.js, React, and cutting-edge technologies.',
    },
    'app-development': {
      title: 'Mobile App Development Services | iOS & Android Apps',
      description: 'Professional mobile app development for iOS and Android. Build native and cross-platform mobile applications with React Native and Flutter.',
    },
    'ai-solutions': {
      title: 'AI Solutions & Machine Learning Services | BeonicX',
      description: 'Advanced AI solutions and machine learning services. Custom AI models, chatbots, predictive analytics, and intelligent automation for your business.',
    },
    'cloud-services': {
      title: 'Cloud Services & Infrastructure | AWS, Azure, GCP',
      description: 'Comprehensive cloud services including cloud migration, infrastructure management, DevOps, and serverless architecture on AWS, Azure, and Google Cloud.',
    },
  };

  const meta = serviceMetadata[serviceSlug] || serviceMetadata['web-development'];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://beonicx.com/services/${serviceSlug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://beonicx.com/services/${serviceSlug}`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function ServiceLayout({ children }) {
  return children;
}
