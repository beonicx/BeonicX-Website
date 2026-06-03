export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is BeonicX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BeonicX is a leading AI and automation company that provides cutting-edge autonomous AI agents, intelligent automation solutions, and custom AI models for businesses across healthcare, finance, e-commerce, and SaaS industries."
        }
      },
      {
        "@type": "Question",
        "name": "What services does BeonicX offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BeonicX offers web development, mobile app development, AI solutions, cloud services, autonomous AI agents, customer service bots, sales automation, and workflow automation solutions tailored to your business needs."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries does BeonicX serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BeonicX serves multiple industries including healthcare, finance, e-commerce, education, SaaS, and manufacturing with specialized AI and automation solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with BeonicX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get started by visiting our Get Started page at https://beonicx.com/get-started or contacting us directly at contact@beonicx.com for a free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What makes BeonicX different from other AI companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BeonicX stands out with our custom-tailored AI solutions, autonomous agents that work 24/7, industry-specific expertise, and commitment to measurable results. We focus on intelligent automation that transforms business operations."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
