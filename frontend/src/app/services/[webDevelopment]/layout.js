export async function generateMetadata({ params }) {
  const { webDevelopment } = await params;
  const serviceSlug = webDevelopment || 'web-development';

  const serviceMetadata = {
    'website-development': {
      title: 'Website Development Services | Custom Websites & Web Apps | BeonicX',
      description: 'Expert website development services. Custom websites, web applications, and e-commerce platforms built with Next.js, React, and modern full-stack technologies.',
    },
    'web-development': {
      title: 'Website Development Services | Custom Websites & Web Apps | BeonicX',
      description: 'Expert website development services. Custom websites, web applications, and e-commerce platforms built with Next.js, React, and modern full-stack technologies.',
    },
    'app-development': {
      title: 'App Development Services | Android & iOS | BeonicX',
      description: 'Professional mobile app development for Android and iOS. Native and cross-platform apps with Swift, Kotlin, React Native, and Flutter.',
    },
    'crm-development': {
      title: 'Custom CRM Development Services | BeonicX',
      description: 'Tailored CRM solutions that centralize customer data, automate sales pipelines, and boost retention. Built for your exact business workflow.',
    },
    'erp-solutions': {
      title: 'ERP Solutions | Enterprise Resource Planning | BeonicX',
      description: 'Custom ERP systems that unify finance, HR, inventory, and operations into one intelligent platform. Scalable solutions for growing businesses.',
    },
    'ai-agents-integration': {
      title: 'AI Agents Integration Services | BeonicX',
      description: 'Deploy autonomous AI agents for customer support, sales automation, data analysis, and workflow orchestration. Custom LLM and multi-agent solutions.',
    },
    'voice-agents-integration': {
      title: 'Voice Agents Integration | AI Voice Bots | BeonicX',
      description: 'Intelligent voice AI agents for inbound/outbound calls, IVR automation, appointment scheduling, and real-time conversational support.',
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
