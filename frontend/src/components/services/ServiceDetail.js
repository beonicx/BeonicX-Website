'use client'
import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle, Sparkles, Rocket, MessageSquare,
  Code, Shield, Zap, Target, Layers, TrendingUp,
  Award, Users, Globe, Server, Activity, Brain
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const GRADIENT_COLORS = [
  'from-blue-500 to-blue-400',
  'from-blue-600 to-blue-400',
  'from-blue-600 to-blue-400',
  'from-blue-500 to-blue-400',
  'from-blue-400 to-blue-600',
  'from-blue-500 to-blue-700',
];

export default function ServiceDetail({ darkMode, service }) {
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const gradient = service.gradient || 'from-blue-500 to-blue-400';
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
    <div className={`font-sans transition-colors duration-300 py-18 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800'}`}>

      {/* Hero Section */}
      <section className={`${darkMode ? 'bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900' : 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500'} text-white py-20 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'opacity-10' : 'opacity-20'}`}
              style={{
                width: `${150 + (i * 50)}px`,
                height: `${150 + (i * 50)}px`,
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)`,
                animation: `float ${15 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.7}s`,
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className={service.image ? 'md:w-1/2 mb-12 md:mb-0' : 'w-full text-center'}
              variants={fadeInUp}
            >
              {service.heroSubtitle && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30"
                >
                  <Sparkles size={18} className="text-blue-300" />
                  <span className="text-sm font-medium">{service.heroSubtitle}</span>
                </motion.div>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
                  {service.title}
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={cta.buttonLink || '/get-started'}
                    className="bg-white text-blue-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition shadow-2xl flex items-center justify-center gap-2"
                  >
                    <Rocket size={20} />
                    {cta.buttonText || 'Get Started'}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/get-started"
                    className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-700 transition backdrop-blur-md bg-white/10 flex items-center justify-center"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </div>

              {stats.length > 0 && (
                <motion.div
                  className="flex items-center gap-6 mt-8 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {stats.slice(0, 3).map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={20} className="text-blue-300" />
                      <span className="text-sm">{stat.value} {stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {service.image && (
              <motion.div
                className="md:w-1/2 flex justify-center items-center"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 40, rotateY: 20 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-full max-w-lg">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${gradient} rounded-3xl blur-2xl opacity-30 animate-pulse`} />
                  <div className="relative perspective-container">
                    <motion.div
                      className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={400}
                        className="object-cover w-full h-auto"
                        unoptimized
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sections (services/capabilities) */}
      {sections.map((section, sectionIdx) => (
        <section
          key={sectionIdx}
          className={`py-24 px-4 ${sectionIdx % 2 === 0
            ? (darkMode ? 'bg-gray-900' : 'bg-white')
            : (darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white')
          } relative`}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-20 right-0 w-96 h-96 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/50'} rounded-full blur-3xl`} />
            <div className={`absolute bottom-20 left-0 w-96 h-96 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/50'} rounded-full blur-3xl`} />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                  {section.title}
                </span>
              </motion.div>

              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h2>
              {section.description && (
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                  {section.description}
                </p>
              )}
            </motion.div>

            {section.items && section.items.length > 0 && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {section.items.map((item, itemIdx) => {
                  const itemGradient = GRADIENT_COLORS[itemIdx % GRADIENT_COLORS.length];
                  return (
                    <motion.div
                      key={itemIdx}
                      className={`group relative rounded-2xl p-8 transition-all duration-300 ${
                        darkMode
                          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50'
                          : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl'
                      }`}
                      variants={fadeInUp}
                      whileHover={{ y: -12, transition: { duration: 0.3 } }}
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${itemGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

                      <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${itemGradient} p-0.5 mb-6`}>
                        <div className={`w-full h-full rounded-2xl flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                          <div className={`bg-gradient-to-br ${itemGradient} bg-clip-text text-transparent`}>
                            <Layers size={40} />
                          </div>
                        </div>
                      </div>

                      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* Features (from service.features[]) — shown if no sections but features exist */}
      {sections.length === 0 && features.length > 0 && (
        <section className={`py-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                What We Offer
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, idx) => {
                const itemGradient = GRADIENT_COLORS[idx % GRADIENT_COLORS.length];
                return (
                  <motion.div
                    key={idx}
                    className={`group relative rounded-2xl p-8 transition-all duration-300 ${
                      darkMode
                        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50'
                        : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-2xl'
                    }`}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                  >
                    <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${itemGradient} shadow-lg mb-6`}>
                      <CheckCircle size={24} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {processSteps.length > 0 && (
        <section className={`py-24 px-4 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-30">
            <div className={`absolute top-0 left-1/4 w-64 h-64 ${darkMode ? 'bg-blue-600/20' : 'bg-blue-200/40'} rounded-full blur-3xl`} />
            <div className={`absolute bottom-0 right-1/4 w-64 h-64 ${darkMode ? 'bg-blue-600/20' : 'bg-blue-200/40'} rounded-full blur-3xl`} />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                  Our Process
                </span>
              </motion.div>

              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                How We Build Your Success
              </h2>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 ${darkMode ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400' : 'bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200'} opacity-30`} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, index) => {
                  const stepGradient = GRADIENT_COLORS[index % GRADIENT_COLORS.length];
                  const stepNum = step.step || (index + 1);
                  return (
                    <motion.div key={index} className="relative" variants={fadeInUp}>
                      <motion.div
                        className={`group relative ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-white hover:bg-gray-50'} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border ${darkMode ? 'border-gray-700 hover:border-blue-500/50' : 'border-gray-200 hover:border-blue-300'}`}
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stepGradient} shadow-lg`}>
                            <span className="text-white font-bold text-lg">
                              {String(stepNum).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {step.description}
                        </p>

                        <div className="mt-6">
                          <div className={`h-1.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                            <motion.div
                              className={`h-full bg-gradient-to-r ${stepGradient} rounded-full`}
                              initial={{ width: '0%' }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {stats.length > 0 && (
        <section className={`${darkMode ? 'bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900' : 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500'} text-white py-20 px-4 relative overflow-hidden`}>
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${3 + (i % 8)}px`,
                  height: `${3 + (i % 8)}px`,
                  left: `${(i * 5) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                  opacity: 0.1 + (i % 3) * 0.1,
                  animation: `floatParticle ${15 + i}s linear infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Industry Leaders
              </h2>
            </motion.div>

            <motion.div
              className={`grid gap-8 md:gap-12 ${
                stats.length <= 2 ? 'grid-cols-2 max-w-2xl mx-auto' :
                stats.length === 3 ? 'grid-cols-3 max-w-4xl mx-auto' :
                'grid-cols-2 md:grid-cols-4'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <motion.div
                    className="relative inline-block mb-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award size={28} />
                    </div>

                    <motion.h3
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      {stat.value}
                    </motion.h3>
                  </motion.div>

                  <p className="text-base md:text-lg font-medium text-gray-100 group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {(cta.title || cta.description) && (
        <section className={`py-24 px-4 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'} relative overflow-hidden`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute -top-24 -right-24 w-96 h-96 ${darkMode ? 'bg-blue-600/20' : 'bg-blue-200/40'} rounded-full blur-3xl`} />
            <div className={`absolute -bottom-24 -left-24 w-96 h-96 ${darkMode ? 'bg-blue-600/20' : 'bg-blue-200/40'} rounded-full blur-3xl`} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              className={`relative ${darkMode ? 'bg-gradient-to-br from-blue-900 to-blue-950' : 'bg-gradient-to-br from-blue-600 to-blue-700'} rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                  }}
                />
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-2/3 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                      <Sparkles size={18} className="text-blue-300" />
                      <span className="text-sm font-medium text-white">{"Let's Build Something Amazing"}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                      {cta.title || 'Ready to Transform Your Digital Presence?'}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                      {cta.description || "Let's discuss your project and create a tailored solution that exceeds your expectations."}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      {['Free Consultation', 'No Obligation Quote', '24h Response Time'].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white">
                          <CheckCircle size={18} className="text-blue-300" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="lg:w-1/3 flex flex-col gap-4 w-full lg:items-end"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full lg:w-auto">
                    <Link
                      href={cta.buttonLink || '/get-started'}
                      className="w-full lg:w-auto bg-white text-blue-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-50 transition shadow-2xl flex items-center justify-center gap-3 group"
                    >
                      <span>{cta.buttonText || 'Get Started Now'}</span>
                      <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full lg:w-auto">
                    <Link
                      href="/get-started"
                      className="w-full lg:w-auto border-2 border-white text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-blue-700 transition backdrop-blur-md bg-white/10 flex items-center justify-center gap-3"
                    >
                      <MessageSquare size={20} />
                      <span>Schedule a Call</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      {techByCategory.length > 0 && (
        <section className={`py-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-0 left-1/3 w-96 h-96 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/40'} rounded-full blur-3xl`} />
            <div className={`absolute bottom-0 right-1/3 w-96 h-96 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/40'} rounded-full blur-3xl`} />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                  Tech Stack
                </span>
              </motion.div>

              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technologies We Use
              </h2>
            </motion.div>

            <div className="space-y-12">
              {techByCategory.map(([category, techs], stackIndex) => {
                const stackGradient = GRADIENT_COLORS[stackIndex % GRADIENT_COLORS.length];
                return (
                  <motion.div
                    key={stackIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stackIndex * 0.1 }}
                  >
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${stackGradient} bg-clip-text text-transparent inline-block`}>
                        {category}
                      </h3>
                      <div className={`h-1 w-20 bg-gradient-to-r ${stackGradient} rounded-full`} />
                    </div>

                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                    >
                      {techs.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          className={`group relative ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200'} rounded-xl p-6 text-center transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}
                          variants={fadeInUp}
                          whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${stackGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

                          <div className={`relative w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${stackGradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                            {tech.charAt(0)}
                          </div>

                          <span className={`relative font-semibold text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }

        @keyframes floatParticle {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(15px, -15px) rotate(90deg); opacity: 0.5; }
          50% { transform: translate(0, -30px) rotate(180deg); opacity: 0.3; }
          75% { transform: translate(-15px, -15px) rotate(270deg); opacity: 0.5; }
          100% { transform: translate(0, 0) rotate(360deg); opacity: 0.3; }
        }

        .perspective-container {
          perspective: 1500px;
          transform-style: preserve-3d;
        }

        .dark { color-scheme: dark; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
