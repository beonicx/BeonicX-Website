'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, Cpu, BarChart3 } from 'lucide-react';
import Link from 'next/link';

function Aboutus({ darkMode = false }) {
  const highlights = [
    { icon: Bot, label: 'Autonomous AI Agents' },
    { icon: Cpu, label: 'LLM & RAG Pipelines' },
    { icon: BarChart3, label: 'Measurable ROI' },
  ];

  return (
    <section className={`relative py-24 overflow-hidden ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
      <div className={`absolute inset-0 ${darkMode ? 'dot-pattern' : 'dot-pattern-light'} opacity-40`} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <motion.div
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`relative rounded-3xl p-8 ${
              darkMode
                ? 'bg-white/[0.03] border border-white/[0.08]'
                : 'bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-100/60'
            }`}>
              <div className="relative h-48 md:h-64 w-full rounded-2xl overflow-hidden">
                <Image
                  src={darkMode ? "/images/darklogo.png" : "/images/lightlogo1.png"}
                  alt="BeonicX AI Platform"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-blue-500/15 rounded-full blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border bg-gradient-to-r from-blue-500/10 to-blue-500/10 border-blue-500/20 text-blue-400">
              <Sparkles size={14} />
              About Us
            </div>

            <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Building the Future of{' '}
              <span className="gradient-text">Intelligent Automation</span>
            </h2>

            <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Founded in 2023, BeonicX is a fast-growing AI and SaaS company building the next generation of intelligent automation. We design autonomous AI agents that think, adapt, and execute complex business tasks — helping enterprises operate faster, smarter, and at scale.
            </p>

            <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              From customer support and lead qualification to data analysis and workflow orchestration, our AI agents handle it all. Built on advanced LLMs, RAG pipelines, and multi-agent architectures, our solutions deliver measurable impact from day one.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                    darkMode
                      ? 'bg-white/[0.04] border border-white/[0.08] text-gray-300'
                      : 'bg-gray-50 border border-gray-200 text-gray-700'
                  }`}
                >
                  <item.icon size={16} className="text-blue-500" />
                  {item.label}
                </div>
              ))}
            </div>

            <Link
              href="/aboutUs/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
