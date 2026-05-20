// pages/index.js

'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Phone, Server, Code, Globe, CheckCircle, Award, 
  Users, Activity, Zap, MessageSquare, Moon, Sun
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
    <div className={`font-sans transition-colors duration-300 py-42 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Head>
        <title>Mobile App Development Company | YourBrand</title>
        <meta name="description" content="Custom iOS, Android, and cross-platform mobile apps tailored to your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-blue-800'} text-white py-20 px-4 relative overflow-hidden`}>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(255, 255, 255, ${Math.random() * 0.3})`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() * 0.5 + 0.5})`
              }}
            />
          ))}
        </div>

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mobile App <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Development</span> Company
              </h1>
              <p className="text-xl mb-8 text-gray-100">Transform your business with custom mobile applications designed for today&apos;s digital landscape.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-800 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition shadow-lg"
                >
                  Get a Free Quote
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-blue-800 transition backdrop-blur-sm bg-white/10"
                >
                  Our Portfolio
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 40, rotateY: 30 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md perspective">
                <div className="phone-3d-wrapper">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=900&fit=crop"
                    alt="Modern mobile app interface showcasing iOS and Android development with sleek UI design"
                    width={400}
                    height={450}
                    className="h-96 object-contain transform hover:scale-105 transition-transform duration-500 rounded-2xl"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Our Mobile App Development Services
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              We offer comprehensive mobile app development solutions tailored to your business needs.
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
              { icon: <Phone size={36} />, title: "iOS App Development", desc: "Native iOS applications with stunning UX/UI design and performance." },
              { icon: <Server size={36} />, title: "Android App Development", desc: "Custom Android applications optimized for various devices and OS versions." },
              { icon: <Code size={36} />, title: "Cross-Platform Development", desc: "Build once, deploy everywhere with React Native and Flutter." },
              { icon: <Globe size={36} />, title: "Web App Development", desc: "Progressive web apps with responsive design for all screen sizes." },
              { icon: <CheckCircle size={36} />, title: "QA & Testing", desc: "Comprehensive testing ensuring high-quality, bug-free applications." },
              { icon: <MessageSquare size={36} />, title: "Ongoing Support", desc: "Continuous maintenance and updates to keep your app running smoothly." }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-blue-50'} rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300 border border-transparent ${darkMode ? 'hover:border-blue-500' : 'hover:border-blue-200'}`}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {service.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Our Development Process
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              We follow a structured approach to deliver high-quality mobile applications.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row flex-wrap justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { step: "01", title: "Discovery & Planning", desc: "Understanding your business goals and planning the app architecture." },
              { step: "02", title: "UI/UX Design", desc: "Creating intuitive user interfaces with engaging user experience." },
              { step: "03", title: "Development", desc: "Coding the application with clean, efficient, and maintainable code." },
              { step: "04", title: "Testing", desc: "Rigorous testing to ensure quality and performance across devices." },
              { step: "05", title: "Deployment", desc: "Publishing your app to app stores with proper optimization." },
              { step: "06", title: "Maintenance", desc: "Ongoing support and updates to keep your app running smoothly." }
            ].map((process, index) => (
              <motion.div 
                key={index} 
                className="w-full md:w-1/2 lg:w-1/3 p-4"
                variants={fadeInUp}
              >
                <div className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-blue-50'} rounded-lg shadow-lg p-6 h-full border-l-4 border-blue-500 hover:shadow-xl transition duration-300`}>
                  <div className="flex items-start mb-4">
                    <span className="text-3xl font-bold text-blue-500 mr-4">{process.step}</span>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {process.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {process.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Why Choose Us
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              We deliver exceptional mobile app development services that drive results.
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
              { icon: <Award size={32} />, title: "Expert Team", desc: "Skilled developers with years of experience." },
              { icon: <Users size={32} />, title: "Client Focus", desc: "Your goals and satisfaction are our priority." },
              { icon: <Activity size={32} />, title: "Quality Assurance", desc: "Rigorous testing for flawless performance." },
              { icon: <Zap size={32} />, title: "Fast Delivery", desc: "On-time project completion without compromising quality." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} rounded-lg p-6 text-center transition duration-300 transform hover:scale-105`}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-500 flex justify-center mb-4 transform-gpu hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {feature.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${darkMode ? 'bg-blue-900' : 'bg-blue-800'} text-white py-16 px-4 relative overflow-hidden`}>
        {/* Animated particles for background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${Math.random() * 15 + 10}s linear infinite`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: "850+", text: "Completed Projects" },
              { number: "200+", text: "Happy Clients" },
              { number: "15+", text: "Years Experience" },
              { number: "120+", text: "Team Members" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeInUp}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-lg">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className={`${darkMode ? 'bg-gray-700 border border-blue-500' : 'bg-white'} rounded-lg shadow-xl p-8 md:p-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Ready to Build Your Mobile App?
                </h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Get in touch with us today to discuss your project and receive a free quote.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <motion.button 
                  className={`${darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold py-3 px-8 rounded-md transition shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Technologies We Use
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              We leverage the latest technologies to build powerful mobile applications.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              "React Native", "Flutter", "Swift", "Kotlin", "JavaScript",
              "TypeScript", "Node.js", "Firebase", "AWS", "Google Cloud"
            ].map((tech, index) => (
              <motion.div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg p-6 text-center flex items-center justify-center h-24 transition-all duration-300`}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: darkMode ? '0 0 15px rgba(59, 130, 246, 0.5)' : '0 4px 15px rgba(0, 0, 0, 0.1)' 
                }}
              >
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatParticle {
          0% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(0, 20px); }
          75% { transform: translate(-10px, 10px); }
          100% { transform: translate(0, 0); }
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .phone-3d-wrapper {
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }
        
        .phone-3d-wrapper:hover {
          transform: rotateY(15deg) rotateX(5deg);
        }
        
        /* Dark mode transitions */
        .dark {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
}