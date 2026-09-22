'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FreelamceBanner = ({ darkMode }) => {
  return (
    <div className="w-full mb-10">
      <motion.div
        className={`relative rounded-3xl overflow-hidden px-6 sm:px-12 lg:px-20 py-16 sm:py-20 ${
          darkMode ? 'aurora-dark' : 'aurora-light'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'grid-pattern' : ''} pointer-events-none`} />

        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 bg-blue-600/10 border border-blue-600/20 text-blue-400"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={14} />
            Start Your AI Journey
          </motion.div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Transform your business with{' '}
            <span className="gradient-text">AI at your fingertips</span>
          </h2>

          <p className={`text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Join leading enterprises using BeonicX AI agents to automate workflows, reduce costs, and scale operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              Get Started Free <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                darkMode
                  ? 'border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'
                  : 'border-slate-200 text-slate-700 hover:border-blue-200 hover:bg-blue-50/50'
              }`}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FreelamceBanner;
