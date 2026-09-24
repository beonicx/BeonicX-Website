'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code, Smartphone, Brain, Cloud, ArrowRight, Sparkles, Shield, Zap,
  Database, BarChart3, Mic, CheckCircle2, ArrowUpRight,
  Lightbulb, Layers, Rocket, Target, Users, Globe, Clock
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { getServices } from '@/lib/api';

const iconMap = {
  'Code': <Code size={28} />,
  'Smartphone': <Smartphone size={28} />,
  'Brain': <Brain size={28} />,
  'Cloud': <Cloud size={28} />,
  'Database': <Database size={28} />,
  'BarChart3': <BarChart3 size={28} />,
  'Mic': <Mic size={28} />,
};

const defaultServices = [
  {
    slug: 'website-development',
    icon: <Code size={28} />,
    title: 'Website Development',
    description: 'Custom websites and web applications built with Next.js, React, and modern full-stack technologies — fast, responsive, and SEO-optimized.',
    features: ['Full-Stack Web Apps', 'E-commerce Platforms', 'Progressive Web Apps', 'API Development', 'Performance Optimization', 'SEO & Analytics'],
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    slug: 'app-development',
    icon: <Smartphone size={28} />,
    title: 'App Development (Android + iOS)',
    description: 'Native and cross-platform mobile apps for Android and iOS — built with Swift, Kotlin, React Native, and Flutter.',
    features: ['iOS (Swift & SwiftUI)', 'Android (Kotlin & Compose)', 'React Native & Flutter', 'App Store Optimization', 'Push Notifications', 'Offline-First Architecture'],
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    slug: 'crm-development',
    icon: <Database size={28} />,
    title: 'Custom CRM Development',
    description: 'Tailored CRM systems that centralize your customer data, automate sales pipelines, and drive retention — built for your exact workflow.',
    features: ['Sales Pipeline Automation', 'Contact & Lead Management', 'Custom Dashboards & Reports', 'Email & Communication Tracking', 'Third-Party Integrations', 'Role-Based Access Control'],
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    slug: 'erp-solutions',
    icon: <BarChart3 size={28} />,
    title: 'ERP Solutions',
    description: 'Enterprise resource planning systems that unify finance, HR, inventory, and operations into one intelligent platform.',
    features: ['Financial Management', 'HR & Payroll Automation', 'Inventory & Supply Chain', 'Project Management', 'Business Intelligence', 'Multi-Location Support'],
    gradient: 'from-indigo-600 to-blue-600',
  },
  {
    slug: 'ai-agents-integration',
    icon: <Brain size={28} />,
    title: 'AI Agents Integration',
    description: 'Deploy autonomous AI agents into your business — from customer support bots and sales assistants to data analysis and workflow automation.',
    features: ['Custom AI Agents', 'RAG & Knowledge Bases', 'LLM Fine-Tuning', 'Multi-Agent Orchestration', 'CRM & ERP AI Integration', 'Predictive Analytics'],
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    slug: 'voice-agents-integration',
    icon: <Mic size={28} />,
    title: 'Voice Agents Integration',
    description: 'Intelligent voice AI agents for inbound/outbound calls, IVR automation, appointment scheduling, and real-time conversational support.',
    features: ['AI-Powered Voice Bots', 'Inbound & Outbound Calling', 'IVR Automation', 'Appointment Scheduling', 'Multilingual Support', 'Call Analytics & Transcription'],
    gradient: 'from-blue-500 to-indigo-500',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const stats = [
  { value: '100+', label: 'Projects Delivered', icon: Rocket },
  { value: '98%', label: 'Client Satisfaction', icon: Users },
  { value: '50+', label: 'Enterprise Clients', icon: Globe },
  { value: '24/7', label: 'Dedicated Support', icon: Clock },
];

const processSteps = [
  { icon: Lightbulb, title: 'Discovery', desc: 'Deep dive into your goals and market landscape' },
  { icon: Target, title: 'Strategy', desc: 'Architecture, tech stack, and roadmap planning' },
  { icon: Layers, title: 'Build', desc: 'Agile sprints with continuous delivery' },
  { icon: Rocket, title: 'Launch', desc: 'Deploy, optimize, and ongoing support' },
];

const ServicesHub = () => {
  const { darkMode } = useTheme();
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    async function loadServices() {
      const data = await getServices();
      if (data && data.length > 0) {
        const mapped = data.map(svc => ({
          slug: svc.slug,
          icon: iconMap[svc.icon] || <Code size={28} />,
          title: svc.title,
          description: svc.shortDescription || svc.description,
          features: svc.features || [],
          gradient: svc.gradient || 'from-blue-600 to-blue-500',
        }));
        setServices(mapped);
      }
    }
    loadServices();
  }, []);

  return (
    <div className={darkMode ? 'bg-[#030712]' : 'bg-white'}>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] ${
            darkMode ? 'bg-blue-600/[0.08]' : 'bg-blue-100/70'
          }`} />
          <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${
            darkMode ? 'bg-indigo-600/[0.06]' : 'bg-indigo-50/60'
          }`} />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.015)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.015)'} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#030712_80%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#ffffff_80%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 sm:pb-32">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 ${
                darkMode
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-100'
              }`}
            >
              <Sparkles size={13} />
              Our Services
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-7 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Technology That{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Moves You Forward
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              We design, build, and scale software products — from web platforms and mobile apps to AI-powered systems and enterprise solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#services"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  darkMode
                    ? 'text-slate-300 border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04]'
                    : 'text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SERVICES GRID ═══════════ */}
      <section id="services" className="relative py-24 sm:py-32">
        {darkMode && (
          <div className="absolute top-40 right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mb-16 lg:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Full-spectrum capabilities,{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>
                one partner.
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {services.map((service, index) => (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 overflow-hidden ${
                    darkMode
                      ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                      : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                  } card-hover`}>

                    <span className={`absolute top-5 right-6 text-[5rem] font-black leading-none select-none pointer-events-none ${
                      darkMode ? 'text-white/[0.02]' : 'text-slate-900/[0.03]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-shadow`}>
                      {service.icon}
                    </div>

                    <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {service.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-6 ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 mb-7">
                      {service.features.slice(0, 4).map((feature) => (
                        <div key={feature} className={`flex items-start gap-2 text-xs ${
                          darkMode ? 'text-slate-500' : 'text-slate-500'
                        }`}>
                          <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-px" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-500 group-hover:gap-2.5 transition-all">
                      Explore
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ METRICS STRIP ═══════════ */}
      <section className={darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className={`w-11 h-11 mx-auto mb-4 flex items-center justify-center rounded-xl ${
                  darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                }`}>
                  <stat.icon size={20} className="text-blue-500" />
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {darkMode && (
          <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
        )}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              How We Work
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              From Idea to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Impact
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={`hidden lg:block absolute top-7 left-[15%] right-[15%] h-px ${
              darkMode
                ? 'bg-gradient-to-r from-transparent via-white/[0.06] to-transparent'
                : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
            }`} />

            {processSteps.map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className="relative text-center">
                <div className={`w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl relative z-10 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.08]'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}>
                  <step.icon size={22} className="text-blue-500" />
                </div>
                <span className={`inline-block text-[11px] font-bold tracking-[0.2em] uppercase mb-2 ${
                  darkMode ? 'text-blue-400/60' : 'text-blue-500/60'
                }`}>
                  0{i + 1}
                </span>
                <h3 className={`text-lg font-bold mb-2 tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed max-w-[200px] mx-auto ${
                  darkMode ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 sm:py-28 px-4">
        <motion.div
          className={`relative max-w-5xl mx-auto rounded-3xl overflow-hidden px-8 sm:px-16 py-16 sm:py-20 ${
            darkMode ? 'aurora-dark' : 'aurora-light'
          }`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`absolute inset-0 ${darkMode ? 'grid-pattern' : ''} pointer-events-none`} />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold mb-5 tracking-tight leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Remarkable
              </span>
            </h2>
            <p className={`text-base sm:text-lg mb-10 leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Share your vision. We&apos;ll turn it into technology that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  darkMode
                    ? 'text-white/80 bg-white/10 hover:bg-white/[0.15]'
                    : 'text-slate-700 bg-white/80 border border-slate-200/50 hover:bg-white'
                }`}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesHub;
