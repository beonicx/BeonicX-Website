'use client'

import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'
import Nextjs from '@/components/technologies/nextjs/Nextjs'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const params = useParams();
  const { section, subsection } = params;

  // Initialize theme based on user preference
  useEffect(() => {
    // Check for saved preference in localStorage first
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
    // Save preference to localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  // Update document head for SEO
  useEffect(() => {
    const title = `${subsection?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | ${section?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Technology | BeonicX`;
    const description = `Explore our expertise in ${subsection?.replace(/-/g, ' ')} for ${section?.replace(/-/g, ' ')} development. Professional development services using cutting-edge ${subsection?.replace(/-/g, ' ')} technology.`;

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://beonicx.com/technologies/${section}/${subsection}`;
  }, [section, subsection]);

  // Render content based on section and subsection
  const renderContent = () => {
    // Map specific technologies to their components
    if (section === 'frontend' && subsection === 'nextjs') {
      return <Nextjs darkMode={darkMode} />;
    }

    // Default placeholder content for technologies without specific components
    return (
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <div className={`rounded-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {subsection?.replace(/-/g, ' ')}
          </h1>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Category: {section?.replace(/-/g, ' ')}
          </p>

          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
            <h2 className="text-2xl font-semibold mb-4">About {subsection?.replace(/-/g, ' ')}</h2>
            <p>
              This is the {subsection?.replace(/-/g, ' ')} technology page. Content for this technology will be added soon.
            </p>
            <div className="mt-8 p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p>Detailed information about {subsection?.replace(/-/g, ' ')} will be available here.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <div className="pt-16">
          {renderContent()}
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </main>
  )
}

export default Page;
