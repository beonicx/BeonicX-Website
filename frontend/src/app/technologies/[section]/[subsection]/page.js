'use client'

import Nextjs from '@/components/technologies/nextjs/Nextjs'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'

const Page = () => {
  const { darkMode } = useTheme();
  const params = useParams();
  const { section, subsection } = params;

  useEffect(() => {
    const title = `${subsection?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | ${section?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Technology | BeonicX`;
    const description = `Explore our expertise in ${subsection?.replace(/-/g, ' ')} for ${section?.replace(/-/g, ' ')} development. Professional development services using cutting-edge ${subsection?.replace(/-/g, ' ')} technology.`;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;
  }, [section, subsection]);

  const renderContent = () => {
    if (section === 'frontend' && subsection === 'nextjs') {
      return <Nextjs darkMode={darkMode} />;
    }

    return (
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <div className={`rounded-lg p-8 ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {subsection?.replace(/-/g, ' ')}
          </h1>
          <p className={`text-lg mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Category: {section?.replace(/-/g, ' ')}
          </p>

          <div className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} space-y-4`}>
            <h2 className="text-2xl font-semibold mb-4">About {subsection?.replace(/-/g, ' ')}</h2>
            <p>
              This is the {subsection?.replace(/-/g, ' ')} technology page. Content for this technology will be added soon.
            </p>
            <div className="mt-8 p-6 rounded-lg bg-neutral-800/10 border border-neutral-600/20">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p>Detailed information about {subsection?.replace(/-/g, ' ')} will be available here.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return renderContent();
}

export default Page;
