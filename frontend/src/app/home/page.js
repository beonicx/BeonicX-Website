'use client';

import { useState, useEffect, createContext } from "react";
import Faq from "../../constants/FaqConstants";
import WhatsAppButton from "../../constants/whatsapp";
import Navbar from "@/layouts/navbar/Navbar";
import Footer from "@/layouts/footer/Footer";
import Featuressection from "../../components/home/featuressection";
import Testonomial from "../../components/home/testonomial";
import Slider from "../../constants/slider/Slider";
import FreelamceBanner from "../../components/home/join";
import HeroSection1 from "../../components/home/heroSection1";
import IndustrySlider from "../../components/home/industrySlider";
import Header from "@/components/header/Header";
import Technologiessection from "@/components/service/technologiessection";
import Toppage from "@/components/home/top";

// Create a context to share dark mode state across components
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Theme context value
  const themeContextValue = {
    darkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <main className={darkMode ? "dark" : ""}>
        <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
          <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
          <div className="pt-16">
            {/* <Header darkMode={darkMode} /> */}
            <Toppage darkMode={darkMode}/>
            <Featuressection darkMode={darkMode} />
            <Technologiessection darkMode={darkMode}/>
            <Slider darkMode={darkMode} />
            <Testonomial darkMode={darkMode} />
            <HeroSection1 darkMode={darkMode} />
            <Faq darkMode={darkMode} />
            <IndustrySlider darkMode={darkMode} />
            <WhatsAppButton darkMode={darkMode} />
            <div className="px-10">
              <FreelamceBanner darkMode={darkMode} />
            </div>
          </div>
          <Footer darkMode={darkMode} />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}