"use client";

import React, { useEffect, useState } from 'react';
import WebDevelopment from '@/components/services/webDevelopment/WebDevelopment';
import Footer from '@/layouts/footer/Footer';
import Navbar from '@/layouts/navbar/Navbar';

// Service mapping for SEO
const serviceMetadata = {
  'web-development': {
    title: 'Web Development Services | Custom Websites & Web Applications',
    description: 'Expert web development services for custom websites, web applications, and e-commerce platforms. Modern, responsive, and scalable solutions built with Next.js, React, and cutting-edge technologies.',
  },
  'app-development': {
    title: 'Mobile App Development Services | iOS & Android Apps',
    description: 'Professional mobile app development for iOS and Android. Build native and cross-platform mobile applications with React Native and Flutter.',
  },
  'ai-solutions': {
    title: 'AI Solutions & Machine Learning Services | BeonicX',
    description: 'Advanced AI solutions and machine learning services. Custom AI models, chatbots, predictive analytics, and intelligent automation for your business.',
  },
  'cloud-services': {
    title: 'Cloud Services & Infrastructure | AWS, Azure, GCP',
    description: 'Comprehensive cloud services including cloud migration, infrastructure management, DevOps, and serverless architecture on AWS, Azure, and Google Cloud.',
  },
};

const Page = ({ params }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get service slug from params
  const serviceSlug = params?.webDevelopment || 'web-development';

  // Update document head for SEO
  useEffect(() => {
    const meta = serviceMetadata[serviceSlug] || serviceMetadata['web-development'];
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
  }, [serviceSlug]);

  // Initialize theme based on user preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
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

  // Toggle mobile menu (not used currently but included for future use)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <WebDevelopment darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Page;
