export default function sitemap() {
  const baseUrl = 'https://beonicx.com';

  const routes = [
    '',
    '/home',
    '/services/autonomous-agents',
    '/services/customer-service-agents',
    '/services/sales-agents',
    '/services/data-agents',
    '/services/workflow-automation',
    '/solutions/chatbots',
    '/solutions/automation',
    '/solutions/analytics',
    '/solutions/integration',
    '/solutions/custom-models',
    '/industry/health-care',
    '/industry/finance',
    '/industry/ecommerce',
    '/industry/saas',
    '/industry/manufacturing',
    '/caseStudy/enterprise',
    '/caseStudy/startup-projects',
    '/caseStudy/mobile-application',
    '/caseStudy/web-platforms',
    '/contact/contact-us',
    '/contact/support',
    '/contact/partnership',
    '/get-started',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') || route.startsWith('/solutions') ? 0.9 : 0.8,
  }));

  return routes;
}
