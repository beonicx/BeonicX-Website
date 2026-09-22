'use client'
import React from 'react';
import Image from 'next/image';
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const socialLinks = [
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/beonicx/posts/?feedView=all', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/beonicx/', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://x.com/beonicx', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@beonicx', label: 'YouTube' },
  ];

  const companyLinks = [
    { label: 'About us', href: '/aboutUs/about' },
    { label: 'Team', href: '/aboutUs/team' },
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

  return (
    <footer className={`w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black border-t border-black/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top — Logo + Social */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-14">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 relative flex-shrink-0">
              <Image
                src={darkMode ? '/images/darklogo.png' : '/images/lightlogo2.png'}
                alt="BeonicX Logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold tracking-tight">
              BeonicX
            </span>
          </div>

          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-200 border ${
                  darkMode
                    ? 'border-white/20 text-white/60 hover:text-white hover:border-white/40'
                    : 'border-black/15 text-black/50 hover:text-black hover:border-black/30'
                }`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Middle — 4 columns: Company, Industries, Services, Contact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode
                        ? 'text-white/50 hover:text-white'
                        : 'text-black/50 hover:text-black'
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
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Industries
            </h3>
            <ul className="space-y-3">
              {industryLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode
                        ? 'text-white/50 hover:text-white'
                        : 'text-black/50 hover:text-black'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode
                        ? 'text-white/50 hover:text-white'
                        : 'text-black/50 hover:text-black'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <FaMapMarkerAlt className={`mt-0.5 flex-shrink-0 ${darkMode ? 'text-white/40' : 'text-black/40'}`} />
                <span className={darkMode ? 'text-white/50' : 'text-black/50'}>
                  123 Business Avenue, Tech Park, Suite 456
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <FaPhone className={`flex-shrink-0 ${darkMode ? 'text-white/40' : 'text-black/40'}`} />
                <span className={darkMode ? 'text-white/50' : 'text-black/50'}>
                  +91-9129842706
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <FaEnvelope className={`flex-shrink-0 ${darkMode ? 'text-white/40' : 'text-black/40'}`} />
                <span className={darkMode ? 'text-white/50' : 'text-black/50'}>
                  contact@beonicx.com
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`border-t pt-6 pb-2 text-xs flex flex-col md:flex-row justify-between items-center gap-4 ${
          darkMode ? 'border-white/10 text-white/40' : 'border-black/10 text-black/40'
        }`}>
          <p>&copy; {new Date().getFullYear()} BeonicX. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/aboutUs/privacyPolicy" className={`transition-colors duration-200 ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>
              Privacy Policy
            </a>
            <a href="/aboutUs/terms&Conditions" className={`transition-colors duration-200 ${darkMode ? 'hover:text-white' : 'hover:text-black'}`}>
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
