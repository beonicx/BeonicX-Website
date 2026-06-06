export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BeonicX",
    "legalName": "BeonicX",
    "alternateName": ["BeonicX AI", "BeonicX Automation"],
    "url": "https://beonicx.com",
    "logo": "https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png",
    "description": "BeonicX provides cutting-edge AI agents and intelligent automation solutions for businesses across healthcare, finance, e-commerce, and SaaS industries.",
    "slogan": "AI-Powered Autonomous Agents for Enterprise Automation",
    "knowsAbout": [
      "Artificial Intelligence",
      "Autonomous AI Agents",
      "Workflow Automation",
      "AI Chatbots",
      "Machine Learning",
      "Intelligent Automation",
      "Enterprise AI",
      "AI for Healthcare",
      "AI for Finance",
      "AI for E-commerce"
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
      "email": "contact@beonicx.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    }
  };

  // WebSite schema is in root layout.js to avoid duplication

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI & Automation Solutions",
    "provider": {
      "@type": "Organization",
      "name": "BeonicX"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autonomous AI Agents",
            "description": "Intelligent autonomous agents that work 24/7 to automate complex business processes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer Service Agents",
            "description": "AI-powered customer service automation for enhanced support experiences"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales & Marketing Agents",
            "description": "Intelligent sales and marketing automation to drive growth"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Automation",
            "description": "End-to-end workflow automation solutions for business efficiency"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
