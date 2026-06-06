'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import InteractiveMap from '@/components/map/map';
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const darkModeClass = darkMode ? 'dark' : '';

  return (
    <footer className={`${darkModeClass} w-full`}>
      <div className={`bg-gray-100 text-gray-800 pt-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Newsletter Section */}
          <div className={`flex flex-col md:flex-row justify-between items-center border-b pb-10 mb-10 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="mb-6 md:mb-0">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Subscribe to our</h2>
              <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>Newsletter</p>
              <p className={`mt-2 max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Get the latest updates, news and special offers sent directly to your inbox.</p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none border w-full md:w-72 focus:outline-none focus:ring-2 transition duration-300 
                    ${darkMode 
                      ? 'border-gray-600 bg-gray-800 text-white focus:border-blue-500 focus:ring-blue-700' 
                      : 'border-gray-300 bg-white text-gray-800 focus:border-blue-500 focus:ring-blue-300'}`}
                  required
                />
                <button 
                  type="submit" 
                  className={`px-6 py-3 rounded-md sm:rounded-l-none sm:rounded-r-md transition duration-300 font-medium text-white
                    ${darkMode 
                      ? 'bg-blue-700 hover:bg-blue-600' 
                      : 'bg-blue-800 hover:bg-blue-700'}`}>
                  {subscribed ? 'Subscribed!' : 'Join'}
                </button>
              </form>
              {subscribed && <p className={`mt-2 text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Thank you for subscribing!</p>}
            </div>
          </div>

          {/* Footer Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            {/* Logo and Social */}
            <div>
              <div className="mb-6 w-full">
                <Image
                  src={darkMode ? "/images/darklogo.png" : "/images/lightlogo2.png"}
                  alt="BeonicX - Leading AI & SaaS Platform for Intelligent Automation"
                  width={150}
                  height={75}
                  className="max-w-full h-auto"
                />
              </div>
              <p className="font-semibold mb-2">Leading AI & SaaS Platform</p>
              <p className="font-semibold mb-6">Powering Intelligent Automation</p>

              {/* ✅ FIXED: Using React Icons components instead of <i> tags */}
              <div className="flex gap-4 text-2xl">
                <a href="https://www.linkedin.com/company/beonicx/posts/?feedView=all" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-500' : 'hover:text-blue-700'}`}>
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/beonicx/" className={`transition-colors duration-200 ${darkMode ? 'hover:text-pink-400' : 'hover:text-pink-500'}`}>
                  <FaInstagram />
                </a>
                <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>
                  <FaTwitter />
                </a>
                <a href="https://www.youtube.com/@beonicx" className={`transition-colors duration-200 ${darkMode ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Company</h3>
              <ul className="space-y-3">
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/aboutUs/about" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> About us
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/aboutUs/team" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Careers
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/aboutUs/contact" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Contact us
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/caseStudy/enterprise" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Case Studies
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/get-started" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Get Started
                  </a>
                </li>
              </ul>
            </div>

            {/* Industry */}
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Industries</h3>
              <ul className="space-y-3">
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/industry/healthcare" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Healthcare AI
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/industry/ecommerce" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> E-commerce
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/industry/finance" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Finance & Banking
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/industry/education" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Education
                  </a>
                </li>
              </ul>
            </div>

            {/* Services and Contact */}
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>AI Agent Services</h3>
              <ul className="space-y-3 mb-8">
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/services/web-development" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Web Development
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/services/app-development" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> App Development
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/services/ai-solutions" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> AI Solutions
                  </a>
                </li>
                <li className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                  <a href="/services/cloud-services" className="flex items-center">
                    <span className="mr-2 text-xs">▶</span> Cloud Services
                  </a>
                </li>
              </ul>
              
              <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Contact Us</h3>

              {/* ✅ FIXED: Using React Icons components instead of <i> tags */}
              <div className="space-y-3 text-sm">
                <p className="flex items-start">
                  <FaMapMarkerAlt className={`mr-3 mt-1 flex-shrink-0 ${darkMode ? 'text-blue-500' : 'text-blue-800'}`} />
                  <span>123 Business Avenue, Tech Park, Suite 456</span>
                </p>
                <p className="flex items-center">
                  <FaPhone className={`mr-3 flex-shrink-0 ${darkMode ? 'text-blue-500' : 'text-blue-800'}`} />
                  <span>+91-9129842706</span>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className={`mr-3 flex-shrink-0 ${darkMode ? 'text-blue-500' : 'text-blue-800'}`} />
                  <span>contact@beonicx.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <InteractiveMap/>

          {/* Quick Links */}
          <div className={`flex flex-wrap justify-center gap-6 border-t pt-8 pb-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <a href="/home" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
              Home
            </a>
            <a href="/services/web-development" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
              Services
            </a>
            <a href="/industry/healthcare" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
              Industries
            </a>
            <a href="/caseStudy/enterprise" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
              Portfolio
            </a>
            <a href="/technologies/frontend/nextjs" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
              Technologies
            </a>
            <a href="/get-started" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
              Contact
            </a>
            <a href="/sitemap.xml" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
              Sitemap
            </a>
          </div>

          {/* Bottom Bar */}
          <div className={`mt-6 border-t py-6 text-sm flex flex-col md:flex-row justify-between items-center ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <p>© {new Date().getFullYear()} All rights reserved - BeonicX</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
              <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>Privacy Policy</a>
              <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>Terms and Conditions</a>
              <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>Cookies Policy</a>
            </div>
          </div>

          {/* Back to top button */}
          {/* ✅ FIXED: Using React Icons component instead of <i> tag */}
          <div className="flex justify-center pb-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-white rounded-full p-3 transition-colors duration-300 ${
                darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-800 hover:bg-blue-700'
              }`}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;