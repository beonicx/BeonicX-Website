'use client'

import Education from '@/components/industries/education/Education'
import React, { useState, useEffect, use } from 'react'
import { getIndustryBySlug } from '@/lib/api'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const IndustryDetail = ({ industry, darkMode }) => {
  if (!industry) return null;

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(37,99,235,0.03)' : 'rgba(37,99,235,0.02)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(37,99,235,0.03)' : 'rgba(37,99,235,0.02)'} 1px, transparent 1px)`,
          backgroundSize: '72px 72px'
        }} />
        {darkMode && (
          <>
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.06] blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-700/[0.04] blur-[120px] pointer-events-none" />
          </>
        )}
        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_100%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeInUp}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 ${
                darkMode
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200/60'
              }`}
            >
              <TrendingUp size={14} />
              Industry Solutions
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className={`text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.1] mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {industry.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-lg sm:text-xl max-w-3xl leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {industry.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      {industry.stats && industry.stats.length > 0 && (
        <section className={`py-2 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden ${
              darkMode ? 'bg-white/[0.06]' : 'bg-slate-200/60'
            }`}>
              {industry.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-6 py-8 text-center ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}
                >
                  <p className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {stat.value}
                  </p>
                  <p className={`text-xs font-medium ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {industry.features && industry.features.length > 0 && (
        <section className={`py-24 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 ${
                darkMode
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200/60'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Key Solutions
              </span>

              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                What We{' '}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Deliver
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {industry.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 card-hover ${
                    darkMode
                      ? 'bg-white/[0.03] border border-white/[0.08] hover:border-blue-600/30'
                      : 'bg-white border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white flex-shrink-0 shadow-lg shadow-blue-600/20">
                      <CheckCircle size={16} />
                    </div>
                    <p className={`text-sm leading-relaxed font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {feature}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`relative py-24 px-4 overflow-hidden ${darkMode ? 'aurora-dark' : 'aurora-light'}`}>
        <div className={`absolute inset-0 ${darkMode ? 'grid-pattern' : ''} pointer-events-none`} />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 bg-blue-600/10 border border-blue-600/20 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <Sparkles size={14} />
              Get Started
            </span>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                Business
              </span>?
            </h2>

            <p className={`text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Let&apos;s discuss how we can help your {industry.title.toLowerCase()} business grow.
            </p>

            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Page = ({ params }) => {
  const { industry } = use(params);
  const { darkMode } = useTheme();
  const [industryData, setIndustryData] = useState(null);
  const [loading, setLoading] = useState(true);

  const industrySlug = industry || 'education';

  useEffect(() => {
    async function loadIndustry() {
      const data = await getIndustryBySlug(industrySlug);
      setIndustryData(data);
      setLoading(false);
    }
    loadIndustry();
  }, [industrySlug]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-40 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  if (industryData) {
    return <IndustryDetail industry={industryData} darkMode={darkMode} />;
  }

  return <Education darkMode={darkMode} />;
}

export default Page;
