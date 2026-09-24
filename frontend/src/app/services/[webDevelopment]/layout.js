export async function generateMetadata({ params }) {
  const { webDevelopment } = await params;
  const serviceSlug = webDevelopment || 'web-development';

  const serviceMetadata = {
    'website-development': {
      title: 'Website Development Services | Custom Websites & Web Apps | BeonicX',
      description: 'Expert website development services. Custom websites, web applications, and e-commerce platforms built with Next.js, React, and modern full-stack technologies. Fast, responsive, SEO-optimized.',
      keywords: ['website development', 'custom web apps', 'Next.js development', 'React development', 'e-commerce development', 'full-stack developer India', 'web application development company'],
    },
    'web-development': {
      title: 'Web Development Services | Custom Websites & Web Apps | BeonicX',
      description: 'Expert web development services. Custom websites, web applications, and e-commerce platforms built with Next.js, React, and modern full-stack technologies. Fast, responsive, SEO-optimized.',
      keywords: ['web development', 'custom web apps', 'Next.js development', 'React development', 'full-stack developer', 'web application development company'],
    },
    'app-development': {
      title: 'Mobile App Development Services | Android & iOS Apps | BeonicX',
      description: 'Professional mobile app development for Android and iOS. Native and cross-platform apps with Swift, Kotlin, React Native, and Flutter. Pixel-perfect UI, scalable backends.',
      keywords: ['mobile app development', 'Android app development', 'iOS app development', 'React Native', 'Flutter development', 'cross-platform apps', 'app development company India'],
    },
    'crm-development': {
      title: 'Custom CRM Development Services | Sales Pipeline Automation | BeonicX',
      description: 'Tailored CRM solutions that centralize customer data, automate sales pipelines, and boost retention. Custom dashboards, integrations, and role-based access control.',
      keywords: ['custom CRM development', 'CRM software', 'sales pipeline automation', 'customer relationship management', 'CRM development company', 'custom CRM India'],
    },
    'erp-solutions': {
      title: 'Custom ERP Solutions | Enterprise Resource Planning | BeonicX',
      description: 'Custom ERP systems that unify finance, HR, inventory, and operations. Scalable enterprise resource planning solutions with real-time analytics and multi-location support.',
      keywords: ['ERP solutions', 'enterprise resource planning', 'custom ERP development', 'ERP software', 'business management software', 'ERP company India'],
    },
    'ai-agents-integration': {
      title: 'AI Agents Integration Services | Custom LLM & Multi-Agent Solutions | BeonicX',
      description: 'Deploy autonomous AI agents for customer support, sales automation, data analysis, and workflow orchestration. Custom LLM fine-tuning, RAG systems, and multi-agent solutions.',
      keywords: ['AI agents', 'AI integration', 'LLM fine-tuning', 'RAG systems', 'autonomous AI agents', 'multi-agent orchestration', 'AI development company'],
    },
    'voice-agents-integration': {
      title: 'Voice Agents Integration | AI-Powered Voice Bots & IVR | BeonicX',
      description: 'Deploy AI-powered voice agents for inbound/outbound calls, IVR automation, appointment scheduling, and real-time multilingual conversational support.',
      keywords: ['voice AI agents', 'AI voice bots', 'IVR automation', 'voice agent development', 'conversational AI', 'AI call center', 'voice AI company'],
    },
    'cloud-services': {
      title: 'Cloud Services & DevOps | AWS, Azure, GCP Migration | BeonicX',
      description: 'Enterprise cloud solutions on AWS, Azure, and GCP. Cloud migration, Kubernetes orchestration, CI/CD pipelines, infrastructure as code, and cost optimization.',
      keywords: ['cloud services', 'cloud migration', 'DevOps services', 'AWS consulting', 'Kubernetes', 'infrastructure as code', 'cloud development company'],
    },
  };

  const meta = serviceMetadata[serviceSlug] || serviceMetadata['web-development'];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://beonicx.com/services/${serviceSlug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://beonicx.com/services/${serviceSlug}`,
      type: 'website',
      images: [{ url: 'https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png', width: 1200, height: 630, alt: `${meta.title}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function ServiceLayout({ children }) {
  return children;
}
