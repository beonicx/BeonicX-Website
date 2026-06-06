'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Cloud, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import Navbar from '@/layouts/navbar/Navbar';
import Footer from '@/layouts/footer/Footer';

const ServicesHub = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const services = [
    {
      slug: 'ai-solutions',
      icon: <Brain size={48} />,
      title: 'AI Solutions & Autonomous Agents',
      description: 'Build intelligent AI agents that work 24/7 to automate complex workflows, make decisions, and drive business growth.',
      features: [
        'Autonomous AI Agents',
        'Custom AI Models',
        'RAG Systems',
        'AI Chatbots',
        'Machine Learning',
        'Predictive Analytics',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      slug: 'web-development',
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like Next.js, React, and cutting-edge technologies.',
      features: [
        'Full-Stack Development',
        'Progressive Web Apps',
        'E-commerce Platforms',
        'API Development',
        'Performance Optimization',
        'Security Hardening',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      slug: 'app-development',
      icon: <Smartphone size={48} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter',
        'App Store Optimization',
        'Push Notifications',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      slug: 'cloud-services',
      icon: <Cloud size={48} />,
      title: 'Cloud Services & Infrastructure',
      description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud with DevOps best practices.',
      features: [
        'Cloud Migration',
        'DevOps & CI/CD',
        'Serverless Architecture',
        'Container Orchestration',
        'Infrastructure as Code',
        'Cloud Security',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <main className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Hero Section */}
        <div className={`relative py-20 px-4 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600'}`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Sparkles size={18} className="text-yellow-300" />
                <span className="text-sm font-medium text-white">Comprehensive Technology Solutions</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                BeonicX <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Services</span>
              </h1>

              <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
                From AI-powered automation to cloud infrastructure, we deliver cutting-edge technology solutions that drive business growth and innovation.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white">
                  <Shield size={18} className="text-green-300" />
                  <span className="text-sm font-medium">Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white">
                  <Zap size={18} className="text-yellow-300" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-2xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
                }`}
              >
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h2>

                <p className={`text-base mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mt-1.5 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/services/${service.slug}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-br ${service.gradient} hover:shadow-lg transition-all group-hover:gap-3`}
                >
                  Learn More <ArrowRight size={18} />
                </Link>

                {/* Decorative element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-tl-full`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's discuss your project and create a tailored solution that exceeds your expectations.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default ServicesHub;
