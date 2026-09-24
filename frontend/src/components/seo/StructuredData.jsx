export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BeonicX",
    "legalName": "BeonicX",
    "alternateName": ["BeonicX AI", "BeonicX Automation"],
    "url": "https://beonicx.com",
    "logo": "https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png",
    "description": "BeonicX provides cutting-edge AI agents, intelligent automation, web development, mobile app development, CRM, ERP, and cloud solutions for businesses worldwide.",
    "slogan": "AI-Powered Autonomous Agents for Enterprise Automation",
    "foundingDate": "2025",
    "founders": [
      { "@type": "Person", "name": "Nitish Yadav" },
      { "@type": "Person", "name": "Abhishek Mishra" },
      { "@type": "Person", "name": "Ansh Yadav" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Greater Noida",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "Artificial Intelligence", "Autonomous AI Agents", "Web Development",
      "Mobile App Development", "CRM Development", "ERP Solutions",
      "Cloud Services", "Voice AI Agents", "Workflow Automation",
      "Machine Learning", "Enterprise Software"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/beonicx",
      "https://twitter.com/beonicx",
      "https://www.facebook.com/beonicx"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9129842706",
      "contactType": "Customer Service",
      "email": "beonicxgroup@gmail.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development & AI Solutions",
    "provider": { "@type": "Organization", "name": "BeonicX", "url": "https://beonicx.com" },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Custom websites and web applications built with Next.js, React, and modern full-stack technologies.", "url": "https://beonicx.com/services/website-development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "Native and cross-platform mobile apps for Android and iOS with Swift, Kotlin, React Native, and Flutter.", "url": "https://beonicx.com/services/app-development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Agents Integration", "description": "Autonomous AI agents for customer support, sales automation, data analysis, and multi-agent orchestration.", "url": "https://beonicx.com/services/ai-agents-integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Voice Agents Integration", "description": "AI-powered voice agents for inbound/outbound calls, IVR automation, and multilingual conversational support.", "url": "https://beonicx.com/services/voice-agents-integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom CRM Development", "description": "Tailored CRM systems that centralize customer data, automate sales pipelines, and drive retention.", "url": "https://beonicx.com/services/crm-development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP Solutions", "description": "Enterprise resource planning systems that unify finance, HR, inventory, and operations.", "url": "https://beonicx.com/services/erp-solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Services", "description": "Cloud migration, DevOps, container orchestration, and infrastructure optimization on AWS, Azure, and GCP.", "url": "https://beonicx.com/services/cloud-services" } }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
