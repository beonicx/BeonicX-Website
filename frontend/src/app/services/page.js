'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code, Smartphone, Brain, Cloud, ArrowRight, Sparkles, Shield, Zap,
  Database, BarChart3, Mic, ChevronRight, CheckCircle2,
  Lightbulb, Layers, Rocket, Target, ArrowUpRight
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const spanPattern = [2, 1, 1, 2, 2, 1];
const getSpan = (index) => spanPattern[index % spanPattern.length];

const processSteps = [
  { icon: Lightbulb, title: 'Discovery', desc: 'Deep dive into your goals, users, and market landscape' },
  { icon: Target, title: 'Strategy', desc: 'Architecture, tech stack, and milestone roadmap' },
  { icon: Layers, title: 'Build', desc: 'Agile sprints with continuous delivery and feedback' },
  { icon: Rocket, title: 'Launch', desc: 'Deployment, optimization, and long-term support' },
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
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[160px] ${
            darkMode ? 'bg-blue-600/[0.07]' : 'bg-blue-100/60'
          }`} />
          <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${
            darkMode ? 'bg-indigo-600/[0.05]' : 'bg-blue-50/50'
          }`} />
          <div className={`absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full blur-[100px] ${
            darkMode ? 'bg-blue-500/[0.04]' : 'bg-blue-100/30'
          }`} />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(37,99,235,0.015)' : 'rgba(37,99,235,0.01)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(37,99,235,0.015)' : 'rgba(37,99,235,0.01)'} 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_100%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 sm:pb-28">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8 ${
                darkMode
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200/60'
              }`}
            >
              <Sparkles size={14} />
              What We Build
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              End-to-End Technology{' '}
              <br className="hidden sm:block" />
              Solutions That{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Deliver Results
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              From custom software and mobile apps to AI agents and enterprise platforms — we architect, build, and scale the technology your business needs to win.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-14">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link
                href="#services"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  darkMode
                    ? 'text-slate-300 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12]'
                    : 'text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                Explore Services <ChevronRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 justify-center">
              {[
                { icon: Shield, label: 'Enterprise-Grade Security' },
                { icon: Zap, label: 'Rapid Delivery' },
                { icon: CheckCircle2, label: '100+ Projects Shipped' },
              ].map((item) => (
                <div key={item.label} className={`flex items-center gap-2 text-xs font-medium ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  <item.icon size={14} className="text-blue-500" />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services Bento Grid ── */}
      <section id="services" className="relative py-20 sm:py-28">
        {darkMode ? (
          <div className="absolute top-20 left-[10%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.03] blur-[140px] pointer-events-none" />
        ) : (
          <div className="absolute inset-0 dot-pattern-light pointer-events-none opacity-40" />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 ${
                darkMode
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200/60'
              }`}
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Build & Scale
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Six core capabilities that cover the full spectrum of modern software development.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {services.map((service, index) => {
              const isFeatured = getSpan(index) === 2;

              return (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  className={isFeatured ? 'lg:col-span-2' : ''}
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div className={`group relative rounded-2xl h-full overflow-hidden transition-all duration-300 ${
                      darkMode
                        ? 'bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.04]'
                        : 'bg-white border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                    } card-hover`}>

                      {isFeatured ? (
                        <div className="flex flex-col sm:flex-row h-full">
                          <div className="flex-1 p-7 sm:p-8">
                            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-5 shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-shadow`}>
                              {service.icon}
                            </div>

                            <h3 className={`text-xl sm:text-2xl font-bold mb-3 tracking-tight ${
                              darkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                              {service.title}
                            </h3>

                            <p className={`text-sm leading-relaxed mb-6 ${
                              darkMode ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                              {service.description}
                            </p>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                              {service.features.map((feature) => (
                                <div key={feature} className={`flex items-start gap-2 text-sm ${
                                  darkMode ? 'text-slate-400' : 'text-slate-600'
                                }`}>
                                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-500 group-hover:gap-2.5 transition-all">
                              Explore Service <ArrowUpRight size={16} />
                            </div>
                          </div>

                          <div className={`relative hidden sm:flex items-center justify-center w-56 lg:w-64 shrink-0 ${
                            darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/80'
                          }`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.04]`} />
                            <div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                backgroundImage: `radial-gradient(circle, ${darkMode ? 'rgba(37,99,235,0.06)' : 'rgba(37,99,235,0.04)'} 1px, transparent 1px)`,
                                backgroundSize: '20px 20px',
                              }}
                            />
                            <div className={`relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-2xl shadow-blue-600/20`}>
                              {React.cloneElement(service.icon, { size: 36 })}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-7">
                          <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-5 shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/30 transition-shadow`}>
                            {service.icon}
                          </div>

                          <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {service.title}
                          </h3>

                          <p className={`text-sm leading-relaxed mb-5 ${
                            darkMode ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {service.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {service.features.slice(0, 3).map((feature) => (
                              <span key={feature} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${
                                darkMode
                                  ? 'bg-white/[0.05] text-slate-400 border border-white/[0.06]'
                                  : 'bg-slate-50 text-slate-500 border border-slate-100'
                              }`}>
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 3 && (
                              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${
                                darkMode
                                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                                  : 'bg-blue-50 text-blue-600 border border-blue-100'
                              }`}>
                                +{service.features.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-500 group-hover:gap-2.5 transition-all">
                            Learn More <ChevronRight size={16} />
                          </div>

                          <div className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {darkMode && (
          <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[140px] pointer-events-none" />
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
              className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 ${
                darkMode
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200/60'
              }`}
            >
              Our Process
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              How We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Bring Ideas to Life
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
                <div className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl relative z-10 transition-colors ${
                  darkMode
                    ? 'bg-white/[0.05] border border-white/[0.08]'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}>
                  <step.icon size={24} className="text-blue-500" />
                </div>

                <span className={`inline-block text-[11px] font-bold tracking-widest uppercase mb-2.5 ${
                  darkMode ? 'text-blue-400/70' : 'text-blue-500/70'
                }`}>
                  Step 0{i + 1}
                </span>

                <h3 className={`text-lg font-bold mb-2 tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {step.title}
                </h3>

                <p className={`text-sm leading-relaxed max-w-[220px] mx-auto ${
                  darkMode ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 px-4">
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
            <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Build Something{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Exceptional
              </span>
              ?
            </h2>
            <p className={`text-base sm:text-lg mb-10 leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Tell us about your project and let&apos;s create a solution that drives real business impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  darkMode
                    ? 'text-slate-300 bg-white/10 hover:bg-white/[0.15]'
                    : 'text-slate-700 bg-white/80 hover:bg-white border border-slate-200/50'
                }`}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ServicesHub;
