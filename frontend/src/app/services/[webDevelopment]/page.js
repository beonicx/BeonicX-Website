"use client";

import React, { useEffect, useState } from 'react';
import WebDevelopment from '@/components/services/webDevelopment/WebDevelopment';
import Footer from '@/layouts/footer/Footer';
import Navbar from '@/layouts/navbar/Navbar';

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
