export default function sitemap() {
  const baseUrl = 'https://beonicx.com';

  // Only include pages that actually exist in the app directory structure
  const routes = [
    '',
    '/home',
    '/get-started',
    // Services
    '/services/web-development',
    '/services/app-development',
    '/services/ai-solutions',
    '/services/cloud-services',
    // Industries
    '/industry/education',
    '/industry/healthcare',
    '/industry/finance',
    '/industry/ecommerce',
    // Case Studies
    '/caseStudy/enterprise',
    '/caseStudy/startup',
    '/caseStudy/mobile',
    // About Us
    '/aboutUs/about',
    '/aboutUs/contact',
    '/aboutUs/team',
    // Technologies
    '/technologies/frontend/nextjs',
    '/technologies/frontend/react',
    '/technologies/backend/nodejs',
    '/technologies/backend/python',
    '/technologies/mobile/react-native',
    '/technologies/mobile/flutter',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));

  return routes;
}
