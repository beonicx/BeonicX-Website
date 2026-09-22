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

  const socialLinks = [
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/beonicx/posts/?feedView=all', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/beonicx/', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://x.com/beonicx', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@beonicx', label: 'YouTube' },
  ];

  const companyLinks = [
    { label: 'About us', href: '/aboutUs/about' },
    { label: 'Team', href: '/aboutUs/team' },
    { label: 'Contact us', href: '/aboutUs/contact' },
    { label: 'Case Studies', href: '/caseStudy/enterprise' },
    { label: 'Get Started', href: '/get-started' },
  ];

  const industryLinks = [
    { label: 'Healthcare AI', href: '/industry/healthcare' },
    { label: 'E-commerce', href: '/industry/ecommerce' },
    { label: 'Finance & Banking', href: '/industry/finance' },
    { label: 'Education', href: '/industry/education' },
  ];

  const serviceLinks = [
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'App Development', href: '/services/app-development' },
    { label: 'AI Agents Integration', href: '/services/ai-agents-integration' },
    { label: 'CRM Development', href: '/services/crm-development' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/home' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industry/healthcare' },
    { label: 'Portfolio', href: '/caseStudy/enterprise' },
    { label: 'Technologies', href: '/technologies/frontend/nextjs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/get-started' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ];

  return (
    <footer className="w-full relative">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400" />

      <div
        className={`pt-16 pb-8 transition-colors duration-300 ${
          darkMode
            ? 'bg-[#030712] text-gray-300'
            : 'bg-[#f8fafc] text-gray-600 border-t border-gray-100'
        }`}
      >
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Newsletter Section */}
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-8 pb-12 mb-12 border-b ${
              darkMode ? 'border-white/[0.06]' : 'border-gray-200'
            }`}
          >
            <div className="text-center md:text-left">
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Stay in the loop
              </h2>
              <p className={`max-w-md text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Get the latest updates on AI agents, product news and special offers.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={`px-4 py-3 rounded-xl text-sm w-full md:w-72 outline-none transition-all duration-200 ${
                    darkMode
                      ? 'bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20'
                      : 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 shadow-sm'
                  }`}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 whitespace-nowrap"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <p className="mt-2 text-sm text-blue-400">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Footer Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Logo and Social */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-9 w-9 relative flex-shrink-0">
                  <Image
                    src={darkMode ? '/images/darklogo.png' : '/images/lightlogo2.png'}
                    alt="BeonicX Logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <span
                  className={`text-lg font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  BeonicX
                </span>
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                AI-Powered Automation for enterprises.
                <br />
                Building the future of intelligent workflows.
              </p>

              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-200 ${
                      darkMode
                        ? 'bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:text-white hover:border-blue-500/40 hover:shadow-[0_0_16px_rgba(59,130,246,0.15)]'
                        : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-[0_0_16px_rgba(59,130,246,0.1)]'
                    }`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-5 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`text-sm transition-all duration-200 ${
                        darkMode
                          ? 'text-gray-500 hover:text-gray-200'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-5 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Industries
              </h3>
              <ul className="space-y-3">
                {industryLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`text-sm transition-all duration-200 ${
                        darkMode
                          ? 'text-gray-500 hover:text-gray-200'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services + Contact */}
            <div>
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-5 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Services
              </h3>
              <ul className="space-y-3 mb-8">
                {serviceLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className={`text-sm transition-all duration-200 ${
                        darkMode
                          ? 'text-gray-500 hover:text-gray-200'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2.5">
                  <FaMapMarkerAlt
                    className={`mt-0.5 flex-shrink-0 ${
                      darkMode ? 'text-blue-400/60' : 'text-blue-500/60'
                    }`}
                  />
                  <span className={darkMode ? 'text-gray-500' : 'text-gray-500'}>
                    123 Business Avenue, Tech Park, Suite 456
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <FaPhone
                    className={`flex-shrink-0 ${
                      darkMode ? 'text-blue-400/60' : 'text-blue-500/60'
                    }`}
                  />
                  <span className={darkMode ? 'text-gray-500' : 'text-gray-500'}>
                    +91-9129842706
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <FaEnvelope
                    className={`flex-shrink-0 ${
                      darkMode ? 'text-blue-400/60' : 'text-blue-500/60'
                    }`}
                  />
                  <span className={darkMode ? 'text-gray-500' : 'text-gray-500'}>
                    contact@beonicx.com
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <InteractiveMap />

          {/* Quick links */}
          <div
            className={`flex flex-wrap justify-center gap-x-6 gap-y-2 border-t pt-8 pb-4 mt-8 ${
              darkMode ? 'border-white/[0.06]' : 'border-gray-200'
            }`}
          >
            {quickLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm transition-all duration-200 ${
                  darkMode
                    ? 'text-gray-600 hover:text-gray-300'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className={`mt-4 border-t pt-6 pb-2 text-xs flex flex-col md:flex-row justify-between items-center gap-4 ${
              darkMode ? 'border-white/[0.06] text-gray-600' : 'border-gray-200 text-gray-400'
            }`}
          >
            <p>&copy; {new Date().getFullYear()} BeonicX. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/aboutUs/privacyPolicy" className={`transition-colors duration-200 ${darkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
                Privacy Policy
              </a>
              <a href="/aboutUs/terms&Conditions" className={`transition-colors duration-200 ${darkMode ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
                Terms and Conditions
              </a>
            </div>
          </div>

          {/* Back to top */}
          <div className="flex justify-center pt-6 pb-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
