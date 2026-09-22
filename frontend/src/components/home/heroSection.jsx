'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot, Zap, Brain, MessageSquare,
  Activity, Building2, Clock, TrendingDown,
} from 'lucide-react';

const stats = [
  { icon: Bot,            number: '100+',  label: 'AI Agents Built',     accent: 'from-blue-600 to-blue-700' },
  { icon: Zap,            number: '99%',   label: 'Automation Rate',     accent: 'from-blue-600 to-blue-700' },
  { icon: Brain,          number: '200+',  label: 'AI Models Trained',   accent: 'from-blue-600 to-blue-400' },
  { icon: MessageSquare,  number: '500+',  label: 'Conversational AI',   accent: 'from-blue-600 to-blue-700' },
  { icon: Activity,       number: '10M+',  label: 'Tasks Processed',     accent: 'from-blue-600 to-indigo-600' },
  { icon: Building2,      number: '50+',   label: 'Enterprise Clients',  accent: 'from-blue-600 to-blue-800' },
  { icon: Clock,          number: '24/7',  label: 'Agent Uptime',        accent: 'from-blue-600 to-blue-700' },
  { icon: TrendingDown,   number: '80%',   label: 'Cost Reduction',      accent: 'from-blue-600 to-blue-800' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
};

function HeroSection({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-28 transition-colors duration-500 ${
        darkMode ? 'text-white' : 'text-slate-900'
      }`}
      style={{
        background: darkMode
          ? 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.12) 0%, transparent 50%),' +
            'radial-gradient(ellipse at 80% 20%, rgba(37,99,235,0.09) 0%, transparent 50%),' +
            'radial-gradient(ellipse at 60% 80%, rgba(59,130,246,0.07) 0%, transparent 50%),' +
            '#030712'
          : 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.06) 0%, transparent 50%),' +
            'radial-gradient(ellipse at 80% 20%, rgba(37,99,235,0.05) 0%, transparent 50%),' +
            'radial-gradient(ellipse at 60% 80%, rgba(59,130,246,0.04) 0%, transparent 50%),' +
            '#ffffff',
      }}
    >
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${
            darkMode ? 'rgba(37,99,235,0.12)' : 'rgba(37,99,235,0.07)'
          } 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="max-w-3xl mb-14 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={`inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full ${
              darkMode
                ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                : 'bg-blue-50 text-blue-600 border border-blue-200/60'
            }`}
          >
            Platform Metrics
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5">
            Next-Gen AI Agents That{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 bg-clip-text text-transparent">
              Run Your Business
            </span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            We engineer autonomous AI agents that handle complex workflows end-to-end — from
            customer engagement and sales automation to data intelligence and process orchestration.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-default ${
                  darkMode
                    ? 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] hover:border-blue-600/30 hover:bg-white/[0.07]'
                    : 'bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-blue-600/50'
                }`}
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                }}
                whileHover={{ y: -4 }}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    darkMode ? '' : 'hidden'
                  }`}
                  style={{
                    boxShadow: '0 0 40px rgba(37,99,235,0.08), inset 0 0 40px rgba(37,99,235,0.03)',
                  }}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.accent} mb-4 shadow-lg`}
                  style={{
                    boxShadow: darkMode
                      ? '0 4px 20px rgba(37,99,235,0.2)'
                      : '0 4px 16px rgba(37,99,235,0.12)',
                  }}
                >
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>

                {/* Number */}
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>

                {/* Label */}
                <div className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
