export default function sitemap() {
  const baseUrl = 'https://beonicx.com';
  const currentDate = new Date().toISOString();

  // Core pages - highest priority
  const corePages = [
    { url: '', priority: 1.0, changeFreq: 'daily' }, // Homepage only
    { url: '/get-started', priority: 0.95, changeFreq: 'weekly' }, // Key conversion page
  ];

  // Service pages - high priority
  const servicePages = [
    { url: '/services/ai-solutions', priority: 0.9, changeFreq: 'weekly' },
    { url: '/services/web-development', priority: 0.9, changeFreq: 'weekly' },
    { url: '/services/app-development', priority: 0.9, changeFreq: 'weekly' },
    { url: '/services/cloud-services', priority: 0.9, changeFreq: 'weekly' },
  ];

  // Industry pages
  const industryPages = [
    { url: '/industry/healthcare', priority: 0.85, changeFreq: 'weekly' },
    { url: '/industry/finance', priority: 0.85, changeFreq: 'weekly' },
    { url: '/industry/ecommerce', priority: 0.85, changeFreq: 'weekly' },
    { url: '/industry/education', priority: 0.85, changeFreq: 'weekly' },
  ];

  // Case studies
  const caseStudyPages = [
    { url: '/caseStudy/enterprise', priority: 0.8, changeFreq: 'monthly' },
    { url: '/caseStudy/startup', priority: 0.8, changeFreq: 'monthly' },
    { url: '/caseStudy/mobile', priority: 0.8, changeFreq: 'monthly' },
  ];

  // About pages
  const aboutPages = [
    { url: '/aboutUs/about', priority: 0.7, changeFreq: 'monthly' },
    { url: '/aboutUs/contact', priority: 0.85, changeFreq: 'monthly' },
    { url: '/aboutUs/team', priority: 0.6, changeFreq: 'monthly' },
  ];

  // Technology pages - lower priority
  const technologyPages = [
    { url: '/technologies/frontend/nextjs', priority: 0.6, changeFreq: 'monthly' },
    { url: '/technologies/frontend/react', priority: 0.6, changeFreq: 'monthly' },
    { url: '/technologies/backend/nodejs', priority: 0.6, changeFreq: 'monthly' },
    { url: '/technologies/backend/python', priority: 0.6, changeFreq: 'monthly' },
    { url: '/technologies/mobile/react-native', priority: 0.6, changeFreq: 'monthly' },
    { url: '/technologies/mobile/flutter', priority: 0.6, changeFreq: 'monthly' },
  ];

  // Combine all pages
  const allPages = [
    ...corePages,
    ...servicePages,
    ...industryPages,
    ...caseStudyPages,
    ...aboutPages,
    ...technologyPages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));
}
