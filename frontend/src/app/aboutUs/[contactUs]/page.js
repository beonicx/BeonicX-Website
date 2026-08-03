'use client'
import { useState, useEffect, use } from 'react';
import AboutUs from '@/components/aboutUs/AboutUs';
import PrivacyPolicyPage from '@/components/privacyPolicy/PrivacyPolicyPage';
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'

// About Us pages mapping for SEO
const aboutMetadata = {
  'about': {
    title: 'About BeonicX | AI & Automation Experts',
    description: 'Learn about BeonicX, a leading AI and automation company. Our mission, vision, team, and commitment to transforming businesses with intelligent solutions.',
  },
  'contact': {
    title: 'Contact BeonicX | Get in Touch',
    description: 'Contact BeonicX for AI solutions and automation services. Speak with our experts about your project requirements and get a free consultation.',
  },
  'team': {
    title: 'Our Team | BeonicX Leadership & Experts',
    description: 'Meet the BeonicX team of AI experts, developers, and consultants. Experienced professionals dedicated to delivering exceptional results.',
  },
  'privacyPolicy': {
    title: 'Privacy Policy | BeonicX',
    description: 'Privacy Policy for BeonicX. We are committed to protecting your privacy and ensuring the security of your personal information.',
  },
  'terms': {
    title: 'Terms & Conditions | BeonicX',
    description: 'Terms of Service for BeonicX. By using our services, you agree to the terms and conditions outlined in this document.',
  },
};

const Page = ({ params }) => {
  const { contactUs } = use(params);
  const [darkMode, setDarkMode] = useState(false);

  const aboutSlug = contactUs || 'about';

  // Update document head for SEO
  useEffect(() => {
    const meta = aboutMetadata[aboutSlug] || aboutMetadata['about'];
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
  }, [aboutSlug]);

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

  const renderContent = () => {
    switch (aboutSlug) {
      case 'privacyPolicy':
        return <PrivacyPolicyPage darkMode={darkMode} />;
      default:
        return <AboutUs darkMode={darkMode} />;
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        {renderContent()}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}

export default Page;
