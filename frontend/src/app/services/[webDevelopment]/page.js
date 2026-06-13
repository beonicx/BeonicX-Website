"use client";

import React, { useState, useEffect } from 'react';
import WebDevelopment from '@/components/services/webDevelopment/WebDevelopment';
import AiSolutions from '@/components/services/aiSolutions/AiSolutions';
import AppDevelopment from '@/components/services/appDevelopment/AppDevelopment';
import CloudServices from '@/components/services/cloudServices/CloudServices';
import Footer from '@/layouts/footer/Footer';
import Navbar from '@/layouts/navbar/Navbar';

const Page = ({ params }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Get service slug from params
  const serviceSlug = params?.webDevelopment || 'web-development';

  // Component mapping for dynamic routing
  const serviceComponents = {
    'web-development': WebDevelopment,
    'ai-solutions': AiSolutions,
    'app-development': AppDevelopment,
    'cloud-services': CloudServices,
  };

  const ServiceComponent = serviceComponents[serviceSlug] || WebDevelopment;

  // Metadata is handled server-side in layout.js - no client-side manipulation needed

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
      <ServiceComponent darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Page;
