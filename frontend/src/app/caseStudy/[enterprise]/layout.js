export async function generateMetadata({ params }) {
  const caseStudySlug = params.enterprise || 'enterprise';

  const caseStudyMetadata = {
    'enterprise': {
      title: 'Enterprise Case Studies | BeonicX Success Stories',
      description: 'Explore our enterprise AI and automation success stories. See how we help large organizations transform with intelligent solutions and achieve measurable results.',
    },
    'startup': {
      title: 'Startup Success Stories | BeonicX Case Studies',
      description: 'Discover how startups leverage BeonicX AI solutions to scale rapidly. Real-world case studies of startup growth and innovation.',
    },
    'mobile': {
      title: 'Mobile App Case Studies | iOS & Android Success Stories',
      description: 'Mobile application development case studies. See our successful iOS and Android app projects and client results.',
    },
  };

  const meta = caseStudyMetadata[caseStudySlug] || caseStudyMetadata['enterprise'];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://beonicx.com/caseStudy/${caseStudySlug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://beonicx.com/caseStudy/${caseStudySlug}`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function CaseStudyLayout({ children }) {
  return children;
}
