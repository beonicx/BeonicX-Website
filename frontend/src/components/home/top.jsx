'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Play, CheckCircle, Bot, Cpu, Workflow } from 'lucide-react';

export default function Toppage({ darkMode = false }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const inputCls = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200
    focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
    ${darkMode
      ? 'bg-white/[0.04] border border-white/[0.1] text-white placeholder:text-gray-500'
      : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400'}`;

  const labelCls = `block text-[11px] font-semibold tracking-wider uppercase mb-1.5
    ${darkMode ? 'text-gray-500' : 'text-gray-500'}`;

  return (
    <>
      <section
        className={`relative overflow-hidden min-h-[90vh] flex items-center ${
          darkMode ? 'bg-[#030712]' : 'bg-[#ffffff]'
        }`}
      >
        {/* Background mesh gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] ${
            darkMode ? 'bg-blue-600/[0.12]' : 'bg-blue-400/[0.08]'
          }`} />
          <div className={`absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] ${
            darkMode ? 'bg-blue-600/[0.08]' : 'bg-blue-400/[0.06]'
          }`} />
          <div className={`absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full blur-[80px] ${
            darkMode ? 'bg-blue-500/[0.06]' : 'bg-blue-400/[0.05]'
          }`} />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(59,130,246,0.04)' : 'rgba(59,130,246,0.03)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(59,130,246,0.04)' : 'rgba(59,130,246,0.03)'} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Radial fade at edges */}
        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_100%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="flex flex-col items-center gap-16">
            {/* Top: Content */}
            <div className="text-center max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 ${
                  darkMode
                    ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                    : 'bg-blue-50 border border-blue-200/60 text-blue-600'
                }`}>
                  <Sparkles size={14} />
                  AI-Powered Enterprise Platform
                </div>

                {/* Headline */}
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Build Smarter.{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                    Automate Everything.
                  </span>
                </h1>

                {/* Subheading */}
                <p className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  BeonicX deploys autonomous AI agents that handle your workflows end-to-end — from customer engagement to data intelligence. Ship faster, scale smarter.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center">
                  <Link
                    href="/get-started"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
                  >
                    Start Building <ArrowRight size={18} />
                  </Link>
                  <button
                    onClick={() => { setShowModal(true); setSubmitMessage(''); }}
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 border cursor-pointer ${
                      darkMode
                        ? 'border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]'
                        : 'border-gray-200 text-gray-700 hover:border-blue-200 hover:bg-blue-50/50'
                    }`}
                  >
                    <Play size={16} className="text-blue-500" />
                    Talk to Us
                  </button>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center">
                  {['No credit card required', 'Free consultation', '24h response time'].map((item) => (
                    <div key={item} className={`flex items-center gap-1.5 text-xs font-medium ${
                      darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      <CheckCircle size={14} className="text-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom: Visual dashboard */}
            <motion.div
              className="w-full max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 via-blue-500/15 to-blue-500/15 rounded-3xl blur-3xl opacity-60" />

                {/* Main card */}
                <div className={`relative rounded-3xl p-6 sm:p-8 ${
                  darkMode
                    ? 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]'
                    : 'bg-white/80 backdrop-blur-xl border border-gray-200/60 shadow-2xl shadow-blue-500/5'
                }`}>
                  {/* Top row: Stats + Agent status side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: Stats */}
                    <div>
                      <p className={`text-[11px] font-semibold tracking-wider uppercase mb-4 ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>Platform Metrics</p>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { num: '50+', label: 'AI Agents', icon: Bot },
                          { num: '30+', label: 'Clients', icon: Cpu },
                          { num: '1M+', label: 'Tasks', icon: Workflow },
                        ].map((s) => (
                          <div key={s.num} className="text-center">
                            <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg mb-2 ${
                              darkMode ? 'bg-white/[0.06]' : 'bg-blue-50'
                            }`}>
                              <s.icon size={16} className="text-blue-500" />
                            </div>
                            <div className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                              {s.num}
                            </div>
                            <div className={`text-[10px] sm:text-[11px] font-medium mt-0.5 ${
                              darkMode ? 'text-gray-500' : 'text-gray-400'
                            }`}>{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Agent activity */}
                    <div>
                      <p className={`text-[11px] font-semibold tracking-wider uppercase mb-4 ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>Live Agents</p>
                      <div className="space-y-3">
                        {[
                          { label: 'Customer Support Agent', status: 'Active', color: 'emerald' },
                          { label: 'Lead Qualification Bot', status: 'Processing', color: 'indigo' },
                          { label: 'Data Analysis Pipeline', status: 'Active', color: 'emerald' },
                        ].map((agent) => (
                          <div
                            key={agent.label}
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xl ${
                              darkMode ? 'bg-white/[0.03] border border-white/[0.06]' : 'bg-gray-50 border border-gray-100'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${
                                agent.color === 'emerald' ? 'bg-blue-500' : 'bg-blue-500'
                              } animate-pulse`} />
                              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {agent.label}
                              </span>
                            </div>
                            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                              agent.color === 'emerald'
                                ? (darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600')
                                : (darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600')
                            }`}>
                              {agent.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                    darkMode ? 'border-white/[0.06]' : 'border-gray-200/60'
                  }`}>
                    <p className={`text-xs font-medium ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                      Real-time agent dashboard
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className={`text-xs font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>All systems operational</span>
                    </div>
                  </div>
                </div>

                {/* Floating badge - top right */}
                <motion.div
                  className={`absolute -top-3 right-6 sm:right-10 px-4 py-2 rounded-xl text-xs font-bold shadow-lg ${
                    darkMode
                      ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                      : 'bg-white border border-blue-200 text-blue-600 shadow-blue-500/10'
                  }`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  99.9% Uptime
                </motion.div>

                {/* Floating badge - bottom left */}
                <motion.div
                  className={`absolute -bottom-3 left-6 sm:left-10 px-4 py-2 rounded-xl text-xs font-bold shadow-lg ${
                    darkMode
                      ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                      : 'bg-white border border-blue-200 text-blue-600 shadow-blue-500/10'
                  }`}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                  Enterprise Ready
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Partners */}
          <motion.div
            className="mt-20 sm:mt-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className={`text-[11px] font-semibold tracking-[0.15em] uppercase mb-6 ${
              darkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Trusted by teams at
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: 'Google', color: darkMode ? '#93c5fd' : '#2563eb' },
                { name: 'Hostinger', color: darkMode ? '#60a5fa' : '#1d4ed8' },
                { name: 'AWS', color: darkMode ? '#93c5fd' : '#2563eb' },
                { name: 'Shopify', color: darkMode ? '#60a5fa' : '#2563eb' },
              ].map(p => (
                <div
                  key={p.name}
                  className={`h-10 px-6 rounded-full flex items-center justify-center font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode
                      ? 'bg-white/[0.04] border border-white/[0.06]'
                      : 'bg-white border border-gray-200/60 shadow-sm'
                  }`}
                  style={{ color: p.color }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Query Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative rounded-3xl p-8 w-full max-w-md shadow-2xl ${
              darkMode
                ? 'bg-[#030712] border border-white/[0.08]'
                : 'bg-white border border-gray-200'
            }`}
          >
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h3>

            {submitMessage && (
              <div className={`mb-4 px-4 py-3 rounded-xl text-sm ${
                submitMessage.includes('Thank you')
                  ? 'bg-blue-50 text-blue-800 border border-blue-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
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
                <label className={labelCls}>Message *</label>
                <textarea
                  name="message" value={formData.message}
                  onChange={handleInputChange} placeholder="Tell us about your project..."
                  rows={3} required
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <button
              className={`absolute top-4 right-5 text-2xl leading-none cursor-pointer transition-colors hover:text-blue-500 ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
