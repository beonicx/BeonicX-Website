'use client'

import CardList from '@/components/caseStudy/casestudy'
import React, { useState, useEffect } from 'react'

// Case study mapping for SEO
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

const Page = ({ params }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Get case study slug from params
  const caseStudySlug = params?.enterprise || 'enterprise';

  // Update document head for SEO
  useEffect(() => {
    const meta = caseStudyMetadata[caseStudySlug] || caseStudyMetadata['enterprise'];
    document.title = meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = meta.description;

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = meta.title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = meta.description;
  }, [caseStudySlug]);

  // Initialize theme based on user preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Toggle theme function
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <CardList darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </main>
  )
}

export default Page;
