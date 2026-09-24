'use client'
import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2, Sparkles, Rocket, MessageSquare,
  Code, Layers, TrendingUp, Award, Users, ArrowRight, Lightbulb
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const GRADIENT_COLORS = [
  'from-blue-600 to-blue-500',
  'from-blue-500 to-indigo-500',
  'from-indigo-500 to-blue-600',
  'from-blue-600 to-blue-700',
  'from-blue-500 to-blue-600',
  'from-indigo-600 to-blue-600',
];

export default function ServiceDetail({ darkMode, service }) {
  const sections = service.sections || [];
  const processSteps = service.processSteps || [];
  const stats = service.stats || [];
  const techStack = service.techStack || [];
  const cta = service.cta || {};
  const features = service.features || [];

  const techByCategory = useMemo(() => {
    const map = {};
    techStack.forEach((t) => {
      const cat = t.category || 'General';
      if (!map[cat]) map[cat] = [];
      map[cat].push(t.name);
    });
    return Object.entries(map);
  }, [techStack]);

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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 sm:pb-32">
          <motion.div
            className={service.image ? 'flex flex-col lg:flex-row items-center gap-12' : 'text-center max-w-4xl mx-auto'}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div className={service.image ? 'lg:w-1/2' : ''}>
              {service.heroSubtitle && (
                <motion.span
                  variants={fadeUp}
                  className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 ${
                    darkMode
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}
                >
                  <Sparkles size={13} />
                  {service.heroSubtitle}
                </motion.span>
              )}

              <motion.h1
                variants={fadeUp}
                className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-7 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className={`text-lg sm:text-xl leading-relaxed mb-12 ${service.image ? '' : 'max-w-2xl mx-auto'} ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {service.description}
              </motion.p>

              <motion.div variants={fadeUp} className={`flex flex-col sm:flex-row items-center gap-4 ${service.image ? '' : 'justify-center'}`}>
                <Link
                  href={cta.buttonLink || '/get-started'}
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  <Rocket size={18} />
                  {cta.buttonText || 'Get Started'}
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/get-started"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    darkMode
                      ? 'text-slate-300 border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04]'
                      : 'text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  View Our Work
                </Link>
              </motion.div>

              {stats.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  className={`flex items-center gap-6 mt-10 flex-wrap ${service.image ? '' : 'justify-center'}`}
                >
                  {stats.slice(0, 3).map((stat, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-sm ${
                      darkMode ? 'text-slate-500' : 'text-slate-500'
                    }`}>
                      <CheckCircle2 size={15} className="text-blue-500" />
                      <span>{stat.value} {stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {service.image && (
              <motion.div
                className="lg:w-1/2 flex justify-center"
                variants={fadeUp}
              >
                <div className={`relative rounded-2xl overflow-hidden ${
                  darkMode
                    ? 'border border-white/[0.06] shadow-[0_0_60px_rgba(37,99,235,0.08)]'
                    : 'border border-slate-200/80 shadow-[0_20px_60px_rgba(37,99,235,0.12)]'
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={400}
                    className="object-cover w-full h-auto"
                    unoptimized
                    priority
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTIONS ═══════════ */}
      {sections.map((section, sectionIdx) => (
        <section
          key={sectionIdx}
          className={`relative py-24 sm:py-32 ${
            sectionIdx % 2 === 0
              ? ''
              : (darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70')
          }`}
        >
          {darkMode && (
            <div className={`absolute ${sectionIdx % 2 === 0 ? 'top-40 right-[5%]' : 'bottom-0 left-[10%]'} w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none`} />
          )}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 lg:mb-20"
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
                {section.title}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {section.title}
              </motion.h2>
              {section.description && (
                <motion.p
                  variants={fadeUp}
                  className={`text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {section.description}
                </motion.p>
              )}
            </motion.div>

            {section.items && section.items.length > 0 && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
              >
                {section.items.map((item, itemIdx) => (
                  <motion.div key={itemIdx} variants={fadeUp}>
                    <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 overflow-hidden ${
                      darkMode
                        ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                        : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                    } card-hover`}>
                      <span className={`absolute top-5 right-6 text-[5rem] font-black leading-none select-none pointer-events-none ${
                        darkMode ? 'text-white/[0.02]' : 'text-slate-900/[0.03]'
                      }`}>
                        {String(itemIdx + 1).padStart(2, '0')}
                      </span>

                      <div className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${GRADIENT_COLORS[itemIdx % GRADIENT_COLORS.length]} text-white mb-6 shadow-lg shadow-blue-600/20`}>
                        <Layers size={24} />
                      </div>

                      <h3 className={`text-xl font-bold mb-3 tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* ═══════════ FEATURES (fallback when no sections) ═══════════ */}
      {sections.length === 0 && features.length > 0 && (
        <section className="relative py-24 sm:py-32">
          {darkMode && (
            <div className="absolute top-40 right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
          )}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 lg:mb-20"
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
                What We Offer
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Key{' '}
                <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>
                  Features
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
              {features.map((feature, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                      : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                  } card-hover`}>
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${
                      darkMode
                        ? 'bg-blue-500/10 border border-blue-500/20'
                        : 'bg-blue-50 border border-blue-100'
                    }`}>
                      <CheckCircle2 size={22} className="text-blue-500" />
                    </div>
                    <h3 className={`text-lg font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {feature}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════ PROCESS STEPS ═══════════ */}
      {processSteps.length > 0 && (
        <section className={`relative py-24 sm:py-32 overflow-hidden ${
          darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'
        }`}>
          {darkMode && (
            <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
          )}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 lg:mb-20"
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
                Our Process
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                How We Build Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Success
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => {
                const stepNum = step.step || (index + 1);
                return (
                  <motion.div key={index} variants={fadeUp}>
                    <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 ${
                      darkMode
                        ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                        : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                    } card-hover`}>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                          darkMode
                            ? 'bg-blue-500/10 border border-blue-500/20'
                            : 'bg-blue-50 border border-blue-100'
                        }`}>
                          <Code size={22} className="text-blue-500" />
                        </div>
                        <span className={`text-[11px] font-bold tracking-[0.2em] uppercase ${
                          darkMode ? 'text-blue-400/40' : 'text-blue-500/40'
                        }`}>
                          {String(stepNum).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold mb-2 tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════ STATS ═══════════ */}
      {stats.length > 0 && (
        <section className={darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
            <motion.div
              className="text-center mb-14"
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
                Our Impact
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Trusted by{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Industry Leaders
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              className={`grid gap-8 md:gap-12 ${
                stats.length <= 2 ? 'grid-cols-2 max-w-2xl mx-auto' :
                stats.length === 3 ? 'grid-cols-3 max-w-4xl mx-auto' :
                'grid-cols-2 md:grid-cols-4'
              }`}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeUp} className="text-center">
                  <div className={`w-11 h-11 mx-auto mb-4 flex items-center justify-center rounded-xl ${
                    darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    <Award size={20} className="text-blue-500" />
                  </div>
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════ TECH STACK ═══════════ */}
      {techByCategory.length > 0 && (
        <section className="relative py-24 sm:py-32">
          {darkMode && (
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
          )}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16 lg:mb-20"
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
                Tech Stack
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Technologies{' '}
                <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>
                  We Use
                </span>
              </motion.h2>
            </motion.div>

            <div className="space-y-12">
              {techByCategory.map(([category, techs], stackIdx) => (
                <motion.div
                  key={stackIdx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: stackIdx * 0.08 }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <h3 className={`text-lg font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {category}
                    </h3>
                    <div className={`flex-1 h-px ${
                      darkMode ? 'bg-white/[0.06]' : 'bg-slate-200'
                    }`} />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {techs.map((tech, techIdx) => (
                      <div
                        key={techIdx}
                        className={`relative rounded-xl p-5 text-center transition-all duration-300 ${
                          darkMode
                            ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.06)]'
                            : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                        } card-hover`}
                      >
                        <div className={`w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-lg text-base font-bold ${
                          darkMode
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-blue-50 text-blue-600'
                        }`}>
                          {tech.charAt(0)}
                        </div>
                        <span className={`text-sm font-semibold ${
                          darkMode ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CTA ═══════════ */}
      {(cta.title || cta.description) && (
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
                {cta.title || 'Ready to Transform Your'}{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Digital Presence?
                </span>
              </h2>
              <p className={`text-base sm:text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {cta.description || "Let's discuss your project and create a tailored solution that exceeds your expectations."}
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-10">
                {['Free Consultation', 'No Obligation Quote', '24h Response Time'].map((item) => (
                  <span key={item} className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    <CheckCircle2 size={13} className="text-blue-500" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <Link
                  href={cta.buttonLink || '/get-started'}
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  {cta.buttonText || 'Get Started Now'}
                  <Rocket size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/get-started"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    darkMode
                      ? 'text-white/80 bg-white/10 hover:bg-white/[0.15]'
                      : 'text-slate-700 bg-white/80 border border-slate-200/50 hover:bg-white'
                  }`}
                >
                  <MessageSquare size={18} />
                  Schedule a Call
                </Link>
              </div>

              <p className={`text-xs mt-6 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                Join 250+ satisfied clients worldwide
              </p>
            </div>
          </motion.div>
        </section>
      )}
    </div>
  );
}
