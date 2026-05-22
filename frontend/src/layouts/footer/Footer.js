'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import InteractiveMap from '@/components/footer/map';

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

  // Force dark mode class on parent element when darkMode is true
  const darkModeClass = darkMode ? 'dark' : '';

  return (
    <footer className={`${darkModeClass} w-full`}>
      {/* Use "dark:" prefix for dark mode styling with Tailwind */}
      <div className={`bg-gray-100 text-gray-800 pt-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Newsletter Section */}
          <div className={`flex flex-col md:flex-row justify-between items-center border-b pb-10 mb-10 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="mb-6 md:mb-0">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Subscribe to our</h2>
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>Newsletter</h1>
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
              <div className="flex gap-4 text-2xl">
                <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-500' : 'hover:text-blue-700'}`}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-pink-400' : 'hover:text-pink-500'}`}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-red-400' : 'hover:text-red-600'}`}>
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-red-400' : 'hover:text-red-500'}`}>
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Company</h3>
              <ul className="space-y-3">
                {['About us', 'Careers', 'Contact-us', 'Blog', 'Case Study', 'Process', 'Vision', 'Client'].map((item, index) => (
                  <li key={index} className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                    <a href="#" className="flex items-center">
                      <span className="mr-2 text-xs">▶</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry */}
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Industries</h3>
              <ul className="space-y-3">
                {['Healthcare AI', 'SaaS & Tech', 'E-commerce', 'Finance & Banking', 'Manufacturing', 'Customer Service', 'Marketing & Sales', 'HR & Operations'].map((item, index) => (
                  <li key={index} className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                    <a href="#" className="flex items-center">
                      <span className="mr-2 text-xs">▶</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services and Contact */}
            <div>
              <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>AI Agent Services</h3>
              <ul className="space-y-3 mb-8">
                {['Autonomous AI Agents', 'Customer Service Bots', 'Sales Automation', 'Data Intelligence', 'Workflow Orchestration'].map((item, index) => (
                  <li key={index} className={`transition-colors duration-200 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                    <a href="#" className="flex items-center">
                      <span className="mr-2 text-xs">▶</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>Contact Us</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start">
                  <i className={`fas fa-map-marker-alt mr-3 mt-1 ${darkMode ? 'text-blue-500' : 'text-blue-800'}`}></i>
                  <span>123 Business Avenue, Tech Park, Suite 456</span>
                </p>
                <p className="flex items-center">
                  <i className={`fas fa-phone mr-3 ${darkMode ? 'text-blue-500' : 'text-blue-800'}`}></i>
                  <span>+91-9129842706</span>
                </p>
                <p className="flex items-center">
                  <i className={`fas fa-envelope mr-3 ${darkMode ? 'text-blue-500' : 'text-blue-800'}`}></i>
                  <span>contact@beonicx.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
         <InteractiveMap/>

          {/* Quick Links */}
          <div className={`flex flex-wrap justify-center gap-6 border-t pt-8 pb-4 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            {['Home', 'Services', 'Solutions', 'Portfolio', 'Testimonials', 'FAQ', 'Support', 'Sitemap'].map((link, index) => (
              <a key={index} href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                {link}
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className={`mt-6 border-t py-6 text-sm flex flex-col md:flex-row justify-between items-center ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
            <p>© {new Date().getFullYear()} All rights reserved - BeonicX</p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
              <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                Privacy Policy
              </a>
              <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                Terms and Conditions
              </a>
              <a href="#" className={`transition-colors duration-200 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-800'}`}>
                Cookies Policy
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <div className="flex justify-center pb-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`text-white rounded-full p-3 transition-colors duration-300 ${
                darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-800 hover:bg-blue-700'
              }`}
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;