'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const rotatingWords = ['AI Agents', 'SaaS Products', 'Workflow Automation', 'Intelligent CRMs'];

export default function Toppage({ darkMode = false }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';
      const response = await fetch(`${apiUrl}/contact/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Home Page Query',
          message: formData.message
        }),
      });
      const data = await response.json();
      if (response.ok && data.status === 'success') {
        setSubmitMessage('Thank you! Your query has been submitted successfully.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => { setShowModal(false); setSubmitMessage(''); }, 2000);
      } else {
        setSubmitMessage(data.message || 'Failed to submit query. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      setSubmitMessage('Failed to submit query. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = `w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-200
    focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600
    ${darkMode
      ? 'bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-slate-500'
      : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400'}`;

  const labelCls = `block text-[11px] font-semibold tracking-wider uppercase mb-1.5
    ${darkMode ? 'text-slate-500' : 'text-slate-500'}`;

  const stats = [
    { value: '50+', label: 'AI Agents Deployed' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '3x', label: 'Faster Time-to-Market' },
    { value: '80%', label: 'Cost Reduction' },
  ];

  return (
    <>
      <section className={`relative overflow-hidden ${darkMode ? 'bg-[#030712]' : 'bg-[#ffffff]'}`}>
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[160px] ${
            darkMode ? 'bg-blue-600/[0.06]' : 'bg-blue-100/40'
          }`} />
          <div className={`absolute bottom-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full blur-[140px] ${
            darkMode ? 'bg-blue-700/[0.04]' : 'bg-blue-50/50'
          }`} />
          <div className={`absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full blur-[100px] ${
            darkMode ? 'bg-blue-500/[0.03]' : 'bg-blue-100/30'
          }`} />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.012)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.012)'} 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Radial fade */}
        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_100%)]'
        }`} />

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tag */}
              <motion.p
                className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-8 px-4 py-2 rounded-full border ${
                  darkMode
                    ? 'text-blue-400 bg-blue-600/10 border-blue-600/20'
                    : 'text-blue-600 bg-blue-50 border-blue-200/60'
                }`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                SaaS Development & AI Engineering
              </motion.p>

              {/* Heading */}
              <h1 className={`text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.1] mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                We Build{' '}
                <span className="relative inline-block min-w-[280px] sm:min-w-[340px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -24, filter: 'blur(4px)' }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                That Scale Your Business
              </h1>

              {/* Subheading */}
              <p className={`text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                From custom SaaS platforms to autonomous AI agents — we engineer production-grade software that drives revenue, cuts costs, and gives you an unfair advantage.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center">
                <Link
                  href="/get-started"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  Get a Free Consultation
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <button
                  onClick={() => { setShowModal(true); setSubmitMessage(''); }}
                  className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 border cursor-pointer ${
                    darkMode
                      ? 'border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                      : 'border-slate-200 text-slate-700 hover:border-blue-200 hover:bg-blue-50/50'
                  }`}
                >
                  <Play size={16} className="text-blue-600" />
                  See How It Works
                </button>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center">
                {['No upfront cost', 'SOC 2 aligned', 'Dedicated team in 48h'].map((item) => (
                  <div key={item} className={`flex items-center gap-2 text-xs font-medium tracking-wide ${
                    darkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    <CheckCircle size={14} className="text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            className="mt-20 sm:mt-24"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden ${
              darkMode ? 'bg-white/[0.06]' : 'bg-slate-200/60'
            }`}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`px-6 py-8 text-center ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                >
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-1.5 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs font-medium tracking-wide ${
                    darkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Query Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl p-8 w-full max-w-md shadow-2xl ${
                darkMode
                  ? 'bg-[#030712] border border-white/[0.08]'
                  : 'bg-white border border-slate-200'
              }`}
            >
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Let&apos;s Build Together
              </h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                Tell us about your project and we&apos;ll get back within 24 hours.
              </p>

              {submitMessage && (
                <div className={`mb-4 px-4 py-3 rounded-xl text-sm ${
                  submitMessage.includes('Thank you')
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmitQuery} className="flex flex-col gap-4">
                <div>
                  <label className={labelCls}>Name *</label>
                  <input
                    type="text" name="name" value={formData.name}
                    onChange={handleInputChange} placeholder="Your name" required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Email *</label>
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleInputChange} placeholder="you@company.com" required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Project Details *</label>
                  <textarea
                    name="message" value={formData.message}
                    onChange={handleInputChange} placeholder="Describe your SaaS idea, AI use case, or business challenge..."
                    rows={3} required
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-blue-600/30"
                >
                  {isSubmitting ? 'Sending...' : 'Request Consultation'}
                </button>
              </form>

              <button
                className={`absolute top-4 right-5 text-2xl leading-none cursor-pointer transition-colors hover:text-blue-600 ${
                  darkMode ? 'text-slate-500' : 'text-slate-400'
                }`}
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
