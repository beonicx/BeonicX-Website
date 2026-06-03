'use client'
import { usePathname } from 'next/navigation';

export default function BreadcrumbSchema() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === '/' || pathname === '/home') {
    return null;
  }

  // Build breadcrumb list
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://beonicx.com"
      }
    ]
  };

  // Add each path segment as a breadcrumb
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());

    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": name,
      "item": `https://beonicx.com${currentPath}`
    });
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}
