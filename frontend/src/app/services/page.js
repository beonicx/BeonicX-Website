'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Cloud, ArrowRight, Sparkles, Shield, Zap, Database, BarChart3, Mic } from 'lucide-react';
import Navbar from '@/layouts/navbar/Navbar';
import Footer from '@/layouts/footer/Footer';
import { getServices } from '@/lib/api';

const iconMap = {
  'Code': <Code size={48} />,
  'Smartphone': <Smartphone size={48} />,
  'Brain': <Brain size={48} />,
  'Cloud': <Cloud size={48} />,
  'Database': <Database size={48} />,
  'BarChart3': <BarChart3 size={48} />,
  'Mic': <Mic size={48} />,
};

const defaultServices = [
  {
    slug: 'website-development',
    icon: <Code size={48} />,
    title: 'Website Development',
    description: 'Custom websites and web applications built with Next.js, React, and modern full-stack technologies — fast, responsive, and SEO-optimized.',
    features: ['Full-Stack Web Apps', 'E-commerce Platforms', 'Progressive Web Apps', 'API Development', 'Performance Optimization', 'SEO & Analytics'],
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    slug: 'app-development',
    icon: <Smartphone size={48} />,
    title: 'App Development (Android + iOS)',
    description: 'Native and cross-platform mobile apps for Android and iOS — built with Swift, Kotlin, React Native, and Flutter.',
    features: ['iOS (Swift & SwiftUI)', 'Android (Kotlin & Compose)', 'React Native & Flutter', 'App Store Optimization', 'Push Notifications', 'Offline-First Architecture'],
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    slug: 'crm-development',
    icon: <Database size={48} />,
    title: 'Custom CRM Development',
    description: 'Tailored CRM systems that centralize your customer data, automate sales pipelines, and drive retention — built for your exact workflow.',
    features: ['Sales Pipeline Automation', 'Contact & Lead Management', 'Custom Dashboards & Reports', 'Email & Communication Tracking', 'Third-Party Integrations', 'Role-Based Access Control'],
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    slug: 'erp-solutions',
    icon: <BarChart3 size={48} />,
    title: 'ERP Solutions',
    description: 'Enterprise resource planning systems that unify finance, HR, inventory, and operations into one intelligent platform.',
    features: ['Financial Management', 'HR & Payroll Automation', 'Inventory & Supply Chain', 'Project Management', 'Business Intelligence', 'Multi-Location Support'],
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    slug: 'ai-agents-integration',
    icon: <Brain size={48} />,
    title: 'AI Agents Integration',
    description: 'Deploy autonomous AI agents into your business — from customer support bots and sales assistants to data analysis and workflow automation.',
    features: ['Custom AI Agents', 'RAG & Knowledge Bases', 'LLM Fine-Tuning', 'Multi-Agent Orchestration', 'CRM & ERP AI Integration', 'Predictive Analytics'],
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    slug: 'voice-agents-integration',
    icon: <Mic size={48} />,
    title: 'Voice Agents Integration',
    description: 'Intelligent voice AI agents for inbound/outbound calls, IVR automation, appointment scheduling, and real-time conversational support.',
    features: ['AI-Powered Voice Bots', 'Inbound & Outbound Calling', 'IVR Automation', 'Appointment Scheduling', 'Multilingual Support', 'Call Analytics & Transcription'],
    gradient: 'from-blue-600 to-blue-400',
  },
];

const ServicesHub = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }

    async function loadServices() {
      const data = await getServices();
      if (data && data.length > 0) {
        const mapped = data.map(svc => ({
          slug: svc.slug,
          icon: iconMap[svc.icon] || <Code size={48} />,
          title: svc.title,
          description: svc.shortDescription || svc.description,
          features: svc.features || [],
          gradient: svc.gradient || 'from-blue-600 to-blue-400',
        }));
        setServices(mapped);
      }
    }
    loadServices();
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <main className={`min-h-screen pt-24 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className={`relative py-20 px-4 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950' : 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800'}`}>
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
                <Sparkles size={18} className="text-blue-300" />
                <span className="text-sm font-medium text-white">Comprehensive Technology Solutions</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                BeonicX <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">Services</span>
              </h1>

              <p className="text-xl mb-8 text-slate-100 max-w-3xl mx-auto leading-relaxed">
                From AI-powered automation to cloud infrastructure, we deliver cutting-edge technology solutions that drive business growth and innovation.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white">
                  <Shield size={18} className="text-blue-300" />
                  <span className="text-sm font-medium">Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white">
                  <Zap size={18} className="text-blue-300" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-2xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h2>

                <p className={`text-base mb-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mt-1.5 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-br ${service.gradient} hover:shadow-lg transition-all group-hover:gap-3`}
                >
                  Learn More <ArrowRight size={18} />
                </Link>

                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-tl-full`} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className={`py-20 px-4 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`text-lg mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
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
