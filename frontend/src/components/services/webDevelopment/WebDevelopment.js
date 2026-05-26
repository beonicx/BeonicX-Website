// Web Development Services Page
'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Phone, Server, Code, Globe, CheckCircle, Award,
  Users, Activity, Zap, MessageSquare, Sparkles, Rocket,
  Shield, TrendingUp, Target, Layers
} from 'lucide-react';

export default function WebDevelopment({ darkMode }) {
  // Apply dark mode class to <html> based on prop
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`font-sans transition-colors duration-300 py-42 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800'}`}>
      <Head>
        <title>Web Development Services | BeonicX</title>
        <meta name="description" content="Custom web development solutions with modern technologies. Build responsive, scalable, and high-performance web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className={`${darkMode ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900' : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600'} text-white py-20 px-4 relative overflow-hidden`}>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'opacity-10' : 'opacity-20'}`}
              style={{
                width: `${Math.random() * 400 + 150}px`,
                height: `${Math.random() * 400 + 150}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, ${Math.random() * 0.4}) 0%, transparent 70%)`,
                animation: `float ${Math.random() * 15 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
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
              className="md:w-1/2 mb-12 md:mb-0"
              variants={fadeInUp}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30"
              >
                <Sparkles size={18} className="text-yellow-300" />
                <span className="text-sm font-medium">Award-Winning Development Team</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300">Web Development</span> Services
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Transform your vision into reality with cutting-edge web applications. We build scalable, high-performance solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition shadow-2xl flex items-center justify-center gap-2"
                >
                  <Rocket size={20} />
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-indigo-700 transition backdrop-blur-md bg-white/10"
                >
                  View Our Work
                </motion.button>
              </div>

              {/* Trust indicators */}
              <motion.div
                className="flex items-center gap-6 mt-8 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-300" />
                  <span className="text-sm">100+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-300" />
                  <span className="text-sm">98% Client Satisfaction</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center items-center"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 40, rotateY: 20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-lg">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />

                {/* Main image container */}
                <div className="relative perspective-container">
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                      alt="Professional web development workspace with modern code editor and design tools"
                      width={500}
                      height={400}
                      className="object-cover w-full h-auto"
                      unoptimized
                      priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                  </motion.div>

                  {/* Floating tech badges */}
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-gray-200"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2">
                      <Code size={20} className="text-indigo-600" />
                      <span className="font-bold text-gray-800">Modern Stack</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-gray-200"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Zap size={20} className="text-yellow-500" />
                      <span className="font-bold text-gray-800">Fast & Scalable</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-20 right-0 w-96 h-96 ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} rounded-full blur-3xl`} />
          <div className={`absolute bottom-20 left-0 w-96 h-96 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-100/50'} rounded-full blur-3xl`} />
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
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>
                Our Services
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Comprehensive Web Development Solutions
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              From concept to deployment, we deliver full-stack web development services that drive business growth and user engagement.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Globe size={40} />,
                title: "Full-Stack Development",
                desc: "End-to-end web solutions with modern frontend frameworks and robust backend systems.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Layers size={40} />,
                title: "Progressive Web Apps",
                desc: "Fast, reliable, and engaging PWAs that work seamlessly across all devices and platforms.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Code size={40} />,
                title: "Custom Web Applications",
                desc: "Tailored web applications built with cutting-edge technologies to meet your unique needs.",
                gradient: "from-indigo-500 to-blue-500"
              },
              {
                icon: <Server size={40} />,
                title: "API Development & Integration",
                desc: "Scalable RESTful and GraphQL APIs with seamless third-party service integration.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: <Shield size={40} />,
                title: "Security & Performance",
                desc: "Enterprise-grade security measures and optimized performance for lightning-fast experiences.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Maintenance & Support",
                desc: "Ongoing support, updates, and enhancements to keep your application ahead of the curve.",
                gradient: "from-violet-500 to-purple-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`group relative rounded-2xl p-8 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border border-gray-700 hover:border-indigo-500/50'
                    : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-indigo-300 shadow-lg hover:shadow-2xl'
                }`}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
              >
                {/* Gradient glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

                {/* Icon with gradient background */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                  <div className={`w-full h-full rounded-2xl flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className={`bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:${service.gradient} transition-all`}>
                  {service.title}
                </h3>
                <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.desc}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  className={`mt-4 flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Learn More →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'} relative overflow-hidden`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-0 left-1/4 w-64 h-64 ${darkMode ? 'bg-indigo-600/20' : 'bg-indigo-200/40'} rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 right-1/4 w-64 h-64 ${darkMode ? 'bg-purple-600/20' : 'bg-purple-200/40'} rounded-full blur-3xl`} />
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
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>
                Our Process
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              How We Build Your Success
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              Our proven development methodology ensures transparency, quality, and timely delivery at every stage.
            </p>
          </motion.div>
          
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Connection line for desktop */}
            <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-1 ${darkMode ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300'} opacity-30`} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  desc: "Deep dive into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
                  icon: <Target size={24} />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "UI/UX Design",
                  desc: "Craft intuitive, beautiful interfaces with user-centered design principles and modern aesthetics.",
                  icon: <Sparkles size={24} />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Development",
                  desc: "Build robust, scalable applications using cutting-edge technologies and best coding practices.",
                  icon: <Code size={24} />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  step: "04",
                  title: "Testing & QA",
                  desc: "Rigorous testing across devices, browsers, and scenarios to ensure flawless performance.",
                  icon: <CheckCircle size={24} />,
                  color: "from-green-500 to-teal-500"
                },
                {
                  step: "05",
                  title: "Deployment",
                  desc: "Seamless launch with optimized configurations, monitoring, and performance tuning.",
                  icon: <Rocket size={24} />,
                  color: "from-orange-500 to-red-500"
                },
                {
                  step: "06",
                  title: "Support & Growth",
                  desc: "Continuous monitoring, updates, and feature enhancements to drive ongoing success.",
                  icon: <TrendingUp size={24} />,
                  color: "from-violet-500 to-purple-500"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeInUp}
                >
                  <motion.div
                    className={`group relative ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850' : 'bg-white hover:bg-gray-50'} rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border ${darkMode ? 'border-gray-700 hover:border-indigo-500/50' : 'border-gray-200 hover:border-indigo-300'}`}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Step number with gradient */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${process.color} shadow-lg`}>
                        <span className="text-white font-bold text-lg">{process.step}</span>
                      </div>

                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} group-hover:scale-110 transition-transform`}>
                        <div className={`bg-gradient-to-br ${process.color} bg-clip-text text-transparent`}>
                          {process.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {process.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {process.desc}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-6">
                      <div className={`h-1.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                        <motion.div
                          className={`h-full bg-gradient-to-r ${process.color} rounded-full`}
                          initial={{ width: '0%' }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${darkMode ? 'bg-indigo-600/10' : 'bg-indigo-200/30'} rounded-full blur-3xl`} />
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
                Why Choose Us
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Your Success is Our Mission
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              Partner with a team that's committed to delivering exceptional results and exceeding expectations.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Award size={36} />,
                title: "Expert Team",
                desc: "Industry veterans with 10+ years of experience in cutting-edge web technologies.",
                gradient: "from-yellow-400 to-orange-500",
                stat: "10+ Years"
              },
              {
                icon: <Users size={36} />,
                title: "Client-Centric",
                desc: "Your vision drives our process. We prioritize communication and collaboration.",
                gradient: "from-blue-400 to-indigo-500",
                stat: "98% Satisfaction"
              },
              {
                icon: <Shield size={36} />,
                title: "Quality First",
                desc: "Rigorous testing, code reviews, and security audits ensure enterprise-grade quality.",
                gradient: "from-green-400 to-teal-500",
                stat: "Zero Compromise"
              },
              {
                icon: <Zap size={36} />,
                title: "Fast Delivery",
                desc: "Agile methodology and efficient workflows deliver your project on time, every time.",
                gradient: "from-purple-400 to-pink-500",
                stat: "On-Time Delivery"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className={`relative ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-white'} rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 border ${darkMode ? 'border-gray-700 hover:border-indigo-500/50' : 'border-gray-200 hover:border-indigo-300'} overflow-hidden`}>
                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon with animated background */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Stat badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {feature.stat}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.desc}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-tl-full`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${darkMode ? 'bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600'} text-white py-20 px-4 relative overflow-hidden`}>
        {/* Animated particles for background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `floatParticle ${Math.random() * 20 + 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
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
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved together with our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: "500+", text: "Projects Delivered", icon: <Rocket size={28} /> },
              { number: "250+", text: "Happy Clients", icon: <Users size={28} /> },
              { number: "15+", text: "Years Experience", icon: <Award size={28} /> },
              { number: "50+", text: "Team Members", icon: <Target size={28} /> }
            ].map((stat, index) => (
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
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {/* Icon background */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  {/* Number with counter animation */}
                  <motion.h3
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {stat.number}
                  </motion.h3>
                </motion.div>

                <p className="text-base md:text-lg font-medium text-gray-100 group-hover:text-white transition-colors">
                  {stat.text}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-50 transition-opacity"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional trust badges */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              "ISO Certified",
              "24/7 Support",
              "Agile Methodology",
              "100% Satisfaction"
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <CheckCircle size={18} className="text-green-300" />
                <span className="text-sm font-medium">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-white'} relative overflow-hidden`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-24 -right-24 w-96 h-96 ${darkMode ? 'bg-indigo-600/20' : 'bg-indigo-200/40'} rounded-full blur-3xl`} />
          <div className={`absolute -bottom-24 -left-24 w-96 h-96 ${darkMode ? 'bg-purple-600/20' : 'bg-purple-200/40'} rounded-full blur-3xl`} />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className={`relative ${darkMode ? 'bg-gradient-to-br from-indigo-900 to-purple-900' : 'bg-gradient-to-br from-indigo-600 to-purple-600'} rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>

            {/* Glowing orbs */}
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
                    <Sparkles size={18} className="text-yellow-300" />
                    <span className="text-sm font-medium text-white">Let's Build Something Amazing</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                    Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Digital Presence?</span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    Let's discuss your project and create a tailored solution that exceeds your expectations. Get a free consultation today.
                  </p>

                  {/* Features list */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {[
                      "Free Consultation",
                      "No Obligation Quote",
                      "24h Response Time"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-white">
                        <CheckCircle size={18} className="text-green-300" />
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
                <motion.button
                  className="w-full lg:w-auto bg-white text-indigo-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-50 transition shadow-2xl flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started Now</span>
                  <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="w-full lg:w-auto border-2 border-white text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-indigo-700 transition backdrop-blur-md bg-white/10 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare size={20} />
                  <span>Schedule a Call</span>
                </motion.button>

                <p className="text-sm text-gray-200 text-center lg:text-right mt-2">
                  Join 250+ satisfied clients worldwide
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-1/3 w-96 h-96 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/40'} rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 right-1/3 w-96 h-96 ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100/40'} rounded-full blur-3xl`} />
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
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border border-cyan-200'}`}>
                Tech Stack
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Cutting-Edge Technologies
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              We leverage the most powerful and modern technologies to build scalable, performant, and future-proof web applications.
            </p>
          </motion.div>

          {/* Tech categories */}
          <div className="space-y-12">
            {[
              {
                category: "Frontend",
                gradient: "from-blue-500 to-cyan-500",
                techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
              },
              {
                category: "Backend",
                gradient: "from-green-500 to-teal-500",
                techs: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"]
              },
              {
                category: "Database & Cloud",
                gradient: "from-purple-500 to-pink-500",
                techs: ["PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Docker"]
              },
              {
                category: "Tools & Platforms",
                gradient: "from-orange-500 to-red-500",
                techs: ["Git", "CI/CD", "Kubernetes", "Vercel", "Firebase"]
              }
            ].map((stack, stackIndex) => (
              <motion.div
                key={stackIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stackIndex * 0.1 }}
              >
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${stack.gradient} bg-clip-text text-transparent inline-block`}>
                    {stack.category}
                  </h3>
                  <div className={`h-1 w-20 bg-gradient-to-r ${stack.gradient} rounded-full`} />
                </div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {stack.techs.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className={`group relative ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-750 hover:to-gray-850 border border-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200'} rounded-xl p-6 text-center transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}
                      variants={fadeInUp}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Gradient glow on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

                      {/* Tech icon placeholder - can be replaced with actual icons */}
                      <div className={`relative w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${stack.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {tech.charAt(0)}
                      </div>

                      <span className={`relative font-semibold text-base ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${stack.gradient}`}>
                        {tech}
                      </span>

                      {/* Decorative corner */}
                      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stack.gradient} opacity-5 rounded-bl-full`} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            className={`mt-16 text-center p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Code size={40} className={`mx-auto mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              And Many More...
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We stay up-to-date with the latest technologies and frameworks to deliver the best solutions for your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(15px, -15px) rotate(90deg);
            opacity: 0.5;
          }
          50% {
            transform: translate(0, -30px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translate(-15px, -15px) rotate(270deg);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
            opacity: 0.3;
          }
        }

        .perspective-container {
          perspective: 1500px;
          transform-style: preserve-3d;
        }

        /* Dark mode transitions */
        .dark {
          color-scheme: dark;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom gradient text animation */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Improved dark mode colors */
        .dark .bg-gray-750 {
          background-color: #1f2937;
        }

        .dark .bg-gray-850 {
          background-color: #1a202c;
        }

        /* Enhanced shadows for dark mode */
        .dark .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        /* Gradient border animation */
        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Pulse animation for badges */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
          }
        }
      `}</style>
    </div>
  );
}