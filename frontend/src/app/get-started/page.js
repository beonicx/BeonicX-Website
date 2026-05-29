'use client'
import { useState, useEffect } from 'react';
import ContactUs from '@/components/getStarted/contactUs/ContactUs'
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <ContactUs darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Page
