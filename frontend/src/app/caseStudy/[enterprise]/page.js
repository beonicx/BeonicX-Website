'use client'

import CardList from '@/components/caseStudy/casestudy'
import React, { useState, useEffect } from 'react'

const Page = ({ params }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Metadata is handled server-side in layout.js

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
