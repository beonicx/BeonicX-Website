'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Subtitles } from 'lucide-react';

const Navbar = ({ darkMode = false, onToggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      
      // Apply scrolled style to navbar
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const navLinks = [
    {
      name: 'SERVICES',
      href: '/services/web-development',
      id: 'services',
      hoverContent: [
        { title: 'Web Development', href: '/services/web-development', onClick: ()=>{router.push('/services/web-development')} },
        { title: 'Mobile App Development', href: '/services/app-development', onClick: ()=>{router.push('/services/app-development')} },
        { 
          title: 'AI Automation',
          subItems: [
            { title: 'WhatsApp Automation', href: 'https://wacrm.beonicx.com', onClick: () => { window.open('https://wacrm.beonicx.com', '_blank') } },
            { title: 'Instagram Automation', href: '/services/ai-automation/instagram', onClick: () => { router.push('/services/ai-automation/instagram') } },
            { title: 'Voice Agent', href: '/services/ai-automation/voice-agent', onClick: () => { router.push('/services/ai-automation/voice-agent') } },
          ], href: '/services/ai-automation', onClick: ()=>{router.push('/services/ai-automation')} 
        },
        { title: 'Cloud Services', href: '/services/cloud-services', onClick: ()=>{router.push('/services/cloud-services')} },
      ]
    },
    {
      name: 'TECHNOLOGIES',
      href: '/technologies/frontend/nextjs',
      id: 'technologies',
      hoverContent: [
        {
          title: 'Frontend Technologies',
          subItems: [
            { title: 'Next.js', href: '/technologies/frontend/nextjs', onClick: () => { router.push('/technologies/frontend/nextjs') } },
            { title: 'React.js', href: '/technologies/frontend/reactjs', onClick: () => { router.push('/technologies/frontend/reactjs') } },
          ]
        },
        {
          title: 'Backend Technologies',
          subItems: [
            { title: 'Node.js', href: '/technologies/backend/nodejs', onClick: () => { router.push('/technologies/backend/nodejs') } },
            { title: 'Python', href: '/technologies/backend/python', onClick: () => { router.push('/technologies/backend/python') } },
          ]
        },
        {
          title: 'Mobile Development',
          subItems: [
            { title: 'React Native', href: '/technologies/mobile/react-native', onClick: () => { router.push('/technologies/mobile/react-native') } },
            { title: 'Flutter', href: '/technologies/mobile/flutter', onClick: () => { router.push('/technologies/mobile/flutter') } },
          ]
        },
      ]
    },
    {
      name: 'INDUSTRIES',
      href: '/industry/healthcare',
      id: 'industry',
      hoverContent: [
        { title: 'Healthcare', href: '/industry/healthcare', onClick: ()=>{router.push('/industry/healthcare')} },
        { title: 'Finance & Banking', href: '/industry/finance', onClick: ()=>{router.push('/industry/finance')} },
        { title: 'E-commerce', href: '/industry/ecommerce', onClick: ()=>{router.push('/industry/ecommerce')}},
        { title: 'Education', href: '/industry/education', onClick: ()=>{router.push('/industry/education')} },
      ]
    },
    {
      name: 'CASE STUDY',
      href: '/caseStudy/enterprise',
      id: 'caseStudy',
      hoverContent: [
        { title: 'Enterprise Solutions', href: '/caseStudy/enterprise', onClick: () => router.push('/caseStudy/enterprise') },
        { title: 'Startup Projects', href: '/caseStudy/startup', onClick: () => router.push('/caseStudy/startup') },
        { title: 'Mobile Applications', href: '/caseStudy/mobile', onClick: () => router.push('/caseStudy/mobile') },
      ]
    },
    {
      name: 'ABOUT US',
      href: '/aboutUs/about',
      id: 'aboutUs',
      hoverContent: [
        { title: 'About Us', href: '/aboutUs/about', onClick: () => router.push('/aboutUs/about') },
        { title: 'Contact', href: '/aboutUs/contact', onClick: () => router.push('/aboutUs/contact') },
        { title: 'Team', href: '/aboutUs/team', onClick: () => router.push('/aboutUs/team') },
        { title: 'Privacy Policy', href: '/aboutUs/privacyPolicy', onClick: () => router.push('/aboutUs/privacyPolicy') },
        { title: 'Terms & Conditions', href: '/aboutUs/terms&Conditions', onClick: () => router.push('/aboutUs/terms&Conditions') }
      ]
    }
  ];
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      height: 'auto', 
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -5, 
      height: 0,
      transition: { duration: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        when: "afterChildren"
      }
    }
  };

  const headerVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 }
  };

  return (
    <>

      {/* Main Navbar */}
      <nav className={`
        fixed w-full z-40 transition-all duration-500
        ${scrolled ? (darkMode ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-white/90 backdrop-blur-md shadow-lg shadow-blue-500/10') : (darkMode ? 'bg-gray-900' : 'bg-white')}
        ${darkMode ? 'text-white' : 'text-black'}
        ${showHeader ? 'top-0' : 'top-0'}
      `}>
        <div className="max-w-7xl mx-auto">
          {/* Main navbar */}
          <div className="flex items-center justify-between py-2 px-4 md:px-6">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="/"
                className="flex items-center font-bold text-xl tracking-tight relative cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/');
                }}
              >
                {darkMode ? (
                  <div className="h-16 w-16 relative mr-3 flex-shrink-0">
                    <Image
                      src="/images/darklogo.png"
                      alt="BeonicX - AI Agents & Intelligent Automation Solutions Logo"
                      fill
                      sizes="64px"
                      className="object-contain transition-all duration-300 hover:scale-105"
                      priority
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 relative flex-shrink-0">
                    <Image
                      src="/images/lightlogo2.png"
                      alt="BeonicX - AI Agents & Intelligent Automation Solutions Logo"
                      fill
                      sizes="64px"
                      className="object-contain transition-all duration-300 hover:scale-105"
                      priority
                    />
                  </div>
                )}
                <span className={`bg-clip-text text-transparent ${darkMode? 'bg-white' : 'bg-gray-700'} font-extrabold`}>
                  BeonicX
                </span>
              </a>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div 
              className="hidden lg:flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredItem(link.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setActiveLink(link.id)}
                      className={`
                        relative px-4 py-6 text-sm font-medium transition-all duration-300 flex items-center
                        ${activeLink === link.id ? 
                          (darkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold') : 
                          (darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600')}
                        group
                      `}
                    >
                      {link.name}
                      {link.hoverContent && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:rotate-180" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      
                      <motion.span 
                        className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}
                        whileHover={{ width: '100%' }}
                      />
                    </a>
                    
                    {/* Hover Content Panel */}
                    <AnimatePresence>
                      {link.hoverContent && hoveredItem === link.id && (
                        <motion.div
                          className={`
                            absolute left-0 mt-0 py-4 px-4 w-64 rounded-lg shadow-lg z-10
                            ${darkMode ? 'bg-gray-900 text-white border-t-2 border-blue-500' : 'bg-white text-gray-800 border-t-2 border-blue-600'}
                          `}
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <div className="space-y-1">
                            {link.hoverContent.map((item, index) => (
                              <motion.div
                                key={index}
                                className="relative"
                                variants={itemVariants}
                                onMouseEnter={() => item.subItems && setHoveredSubItem(index)}
                                onMouseLeave={() => setHoveredSubItem(null)}
                              >
                                {item.href ? (
                                  <a
                                    href={item.href}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      item.onClick?.();
                                    }}
                                    className={`
                                      flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-200 cursor-pointer
                                      ${darkMode ? 'hover:bg-blue-900/50 hover:text-blue-300' : 'hover:bg-blue-50 hover:text-blue-600'}
                                    `}
                                  >
                                    <span>{item.title}</span>
                                  </a>
                                ) : (
                                  <div
                                    className={`
                                      flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-200
                                      ${item.subItems ? 'cursor-default' : 'cursor-pointer'}
                                      ${darkMode ? 'hover:bg-blue-900/50 hover:text-blue-300' : 'hover:bg-blue-50 hover:text-blue-600'}
                                    `}
                                  >
                                    <span>{item.title}</span>
                                    {item.subItems && (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    )}
                                  </div>
                                )}

                                {/* Second-level dropdown for sub-items */}
                                <AnimatePresence>
                                  {item.subItems && hoveredSubItem === index && (
                                    <motion.div
                                      className={`
                                        absolute left-full top-0 ml-2 py-4 px-4 w-64 rounded-lg shadow-lg z-20
                                        ${darkMode ? 'bg-gray-900 text-white border-t-2 border-blue-500' : 'bg-white text-gray-800 border-t-2 border-blue-600'}
                                      `}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <div className="space-y-1">
                                        {item.subItems.map((subItem, subIndex) => (
                                          <motion.a
                                            key={subIndex}
                                            href={subItem.href}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              subItem.onClick?.();
                                            }}
                                            className={`
                                              block px-3 py-2 text-sm rounded-md transition-all duration-200 cursor-pointer
                                              ${darkMode ? 'hover:bg-blue-900/50 hover:text-blue-300' : 'hover:bg-blue-50 hover:text-blue-600'}
                                            `}
                                            whileHover={{ x: 5 }}
                                          >
                                            {subItem.title}
                                          </motion.a>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
              
              <motion.a 
                href="/get-started"
                className={`
                  ml-8 px-6 py-3 text-sm font-medium rounded-full transition-all duration-300
                  ${darkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}
                  hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1
                  ) 
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              
              <motion.button 
                onClick={onToggleDarkMode}
                className={`
                  ml-4 p-2 rounded-full transition-all duration-300 cursor-pointer
                  ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}
                `}
                aria-label="Toggle Dark Mode"
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </motion.button>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <motion.button 
                onClick={onToggleDarkMode}
                className={`
                  p-2 mr-2 rounded-full transition-all duration-300
                  ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}
                `}
                aria-label="Toggle Dark Mode"
                whileHover={{ rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </motion.button>
              
              <motion.button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`
                  p-2 rounded-lg transition-all duration-300
                  ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}
                `}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className={`
                lg:hidden shadow-lg
                ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-100'}
              `}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={`py-3 px-4`}>
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.id} 
                    className="py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="flex justify-between items-center py-2"
                      onClick={() => setActiveLink(activeLink === link.id ? '' : link.id)}
                    >
                      <a
                        href={link.href}
                        className={`
                          font-medium text-base transition-all duration-300
                          ${activeLink === link.id ? 
                            (darkMode ? 'text-blue-400' : 'text-blue-600') : 
                            (darkMode ? 'text-gray-300' : 'text-gray-800')}
                        `}
                      >
                        {link.name}
                      </a>
                      {link.hoverContent && (
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 transition-transform duration-300" 
                          animate={{ rotate: activeLink === link.id ? 180 : 0 }}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {link.hoverContent && activeLink === link.id && (
                        <motion.div
                          className={`
                            ml-4 mt-2 space-y-1 border-l-2
                            ${darkMode ? 'border-blue-500 pl-4' : 'border-blue-500 pl-4'}
                          `}
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {link.hoverContent.map((item, index) => (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                            >
                              <div
                                onClick={item.onClick}
                                className={`
                                  block py-2 text-sm cursor-pointer transition-all duration-300
                                  ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}
                                `}
                              >
                                {item.title}
                              </div>

                              {/* Sub-items for mobile */}
                              {item.subItems && (
                                <div className="ml-4 mt-1 space-y-1">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <motion.div
                                      key={subIndex}
                                      onClick={subItem.onClick}
                                      className={`
                                        block py-1.5 text-xs cursor-pointer transition-all duration-300
                                        ${darkMode ? 'text-gray-400 hover:text-blue-300' : 'text-gray-600 hover:text-blue-600'}
                                      `}
                                      whileHover={{ x: 5 }}
                                    >
                                      {subItem.title}
                                    </motion.div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                
                <motion.div 
                  className={`
                    mt-6 pt-4 border-t
                    ${darkMode ? 'border-gray-800' : 'border-gray-200'}
                  `}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a 
                    href="/get-started" 
                    className={`
                      block w-full py-3 text-center font-medium rounded-full transition-all duration-300
                      ${darkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}
                      hover:shadow-lg hover:shadow-blue-500/30
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join Us
                  </motion.a>
                  
                  <div className="flex justify-center mt-6 space-x-6">
                    <motion.a 
                      href="tel:+91-9129842706" 
                      className={`
                        flex items-center text-sm transition-colors duration-300
                        ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Contact</span>
                    </motion.a>
                    <motion.a 
                      href="mailto:contact@beonicx.com" 
                      className={`
                        flex items-center text-sm transition-colors duration-300
                        ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;