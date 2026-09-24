export default function sitemap() {
  const baseUrl = 'https://beonicx.com';
  const now = new Date().toISOString();

  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/home', priority: 0.9, changeFrequency: 'daily' },
    { url: '/get-started', priority: 0.95, changeFrequency: 'weekly' },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/website-development', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/app-development', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/ai-agents-integration', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/voice-agents-integration', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/crm-development', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/erp-solutions', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/services/cloud-services', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/industry/education', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/industry/healthcare', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/industry/finance', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/industry/ecommerce', priority: 0.85, changeFrequency: 'weekly' },
    { url: '/blog', priority: 0.8, changeFrequency: 'daily' },
    { url: '/caseStudy/enterprise', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/caseStudy/startup', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/caseStudy/mobile', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/aboutUs/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/aboutUs/contact', priority: 0.85, changeFrequency: 'monthly' },
    { url: '/aboutUs/team', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/aboutUs/privacyPolicy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/aboutUs/terms', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/technologies/frontend/nextjs', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/technologies/frontend/react', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/technologies/backend/nodejs', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/technologies/backend/python', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/technologies/mobile/react-native', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/technologies/mobile/flutter', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
