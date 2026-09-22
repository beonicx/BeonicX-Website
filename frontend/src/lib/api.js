const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchAPI(endpoint) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch {
    return null;
  }
}

async function fetchAPIClient(endpoint) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch {
    return null;
  }
}

export async function getServices() {
  return fetchAPIClient('/services');
}

export async function getServiceBySlug(slug) {
  return fetchAPIClient(`/services/slug/${slug}`);
}

export async function getBlogs(params = {}) {
  const query = new URLSearchParams(params).toString();
  const endpoint = query ? `/blog?${query}` : '/blog';
  return fetchAPIClient(endpoint);
}

export async function getBlogBySlug(slug) {
  return fetchAPIClient(`/blog/slug/${slug}`);
}

export async function getProjects() {
  return fetchAPIClient('/projects');
}

export async function getFeaturedProjects() {
  return fetchAPIClient('/projects/featured');
}

export async function getTestimonials() {
  return fetchAPIClient('/testimonials');
}

export async function getFeaturedTestimonials() {
  return fetchAPIClient('/testimonials/featured');
}

export async function getFaqs(category) {
  const endpoint = category ? `/faqs?category=${category}` : '/faqs';
  return fetchAPIClient(endpoint);
}

export async function getCaseStudies() {
  return fetchAPIClient('/case-studies');
}

export async function getCaseStudyBySlug(slug) {
  return fetchAPIClient(`/case-studies/slug/${slug}`);
}

export async function getIndustries() {
  return fetchAPIClient('/industries');
}

export async function getIndustryBySlug(slug) {
  return fetchAPIClient(`/industries/slug/${slug}`);
}

export async function getTechnologies() {
  return fetchAPIClient('/courses');
}

export async function getTechnologyBySlug(slug) {
  return fetchAPIClient(`/courses/slug/${slug}`);
}
