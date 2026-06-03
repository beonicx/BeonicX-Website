export async function generateMetadata({ params }) {
  const { section, subsection } = params;

  const formatTitle = (str) => str?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  const title = `${formatTitle(subsection)} | ${formatTitle(section)} Technology | BeonicX`;
  const description = `Explore our expertise in ${formatTitle(subsection)} for ${formatTitle(section)} development. Professional development services using cutting-edge ${formatTitle(subsection)} technology.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/technologies/${section}/${subsection}`,
    },
    openGraph: {
      title,
      description,
      url: `https://beonicx.com/technologies/${section}/${subsection}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function TechnologyLayout({ children }) {
  return children;
}
