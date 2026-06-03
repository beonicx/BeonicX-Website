'use client'

import Education from '@/components/industries/education/Education'
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'
import React, { useState, useEffect } from 'react'

// Industry mapping for SEO
const industryMetadata = {
  'education': {
    title: 'AI Solutions for Education Industry | EdTech Automation',
    description: 'Transform education with AI-powered solutions. Student engagement platforms, automated grading, personalized learning, and intelligent tutoring systems for schools and universities.',
  },
  'healthcare': {
    title: 'Healthcare AI Solutions | Medical Automation & Patient Care',
    description: 'Advanced AI solutions for healthcare. Patient management systems, medical automation, diagnostic support, and HIPAA-compliant healthcare technology.',
  },
  'finance': {
    title: 'Financial Services AI | FinTech Solutions & Automation',
    description: 'AI-powered solutions for financial services. Fraud detection, algorithmic trading, risk assessment, and automated financial analysis.',
  },
  'ecommerce': {
    title: 'E-commerce AI Solutions | Retail Automation & Personalization',
    description: 'Transform your online store with AI. Personalized recommendations, inventory management, customer service automation, and sales optimization.',
  },
};

const Page = ({ params }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Get industry slug from params
  const industrySlug = params?.eduction || 'education';

  // Update document head for SEO
  useEffect(() => {
    const meta = industryMetadata[industrySlug] || industryMetadata['education'];
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
  }, [industrySlug]);

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
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <div className="pt-16">
          <Education darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </main>
  )
}

export default Page;
