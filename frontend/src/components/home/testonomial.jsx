'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTestimonials } from '@/lib/api';

const defaultTestimonials = [
  {
    quote: "BeonicX deployed AI agents that now handle 80% of our customer inquiries autonomously. Response times dropped from hours to seconds, and our CSAT score jumped to 96%.",
    name: 'Rahul Sharma',
    position: 'CTO, TechInnovate Solutions',
  },
  {
    quote: "Their RAG-powered knowledge base agent transformed how we onboard clients. What used to take our team 3 days now takes 4 hours — with better accuracy.",
    name: 'Priya Patel',
    position: 'Head of Operations, RetailMax',
  },
  {
    quote: "The predictive analytics agents from BeonicX cut our inventory waste by 42% and improved demand forecasting accuracy to 94%. Game-changing for our supply chain.",
    name: 'Amit Singh',
    position: 'Supply Chain Director, GlobalFoods',
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Testonomial({ darkMode }) {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);

  useEffect(() => {
    async function load() {
      const data = await getTestimonials();
      if (data && data.length > 0) {
        setTestimonials(data);
      }
    }
    load();
  }, []);

  return (
    <section className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={
          darkMode
            ? {
                backgroundImage:
                  'linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }
            : {
                backgroundImage:
                  'radial-gradient(circle, rgba(37,99,235,0.05) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }
        }
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 ${
              darkMode
                ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Testimonials
          </span>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              Clients
            </span>{' '}
            Say
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Hear from businesses that have transformed their operations with our
            AI solutions.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardUp}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-white/[0.02] border border-white/[0.06] hover:border-blue-600/25 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(37,99,235,0.06)]'
                  : 'bg-white border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)]'
              }`}
            >
              {/* Quote mark */}
              <span
                className="block text-5xl font-serif leading-none mb-4 select-none bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p className={`text-[15px] leading-relaxed mb-8 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div
                className="w-10 h-px mb-5"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                }}
              />

              {/* Author */}
              <div>
                <p className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {testimonial.name}
                </p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testonomial;
