'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFaqs } from '@/lib/api';

const defaultFaqItems = [
  {
    question: "What services does BeonicX offer?",
    answer: "BeonicX specializes in AI agent development, autonomous workflow automation, RAG-powered knowledge systems, custom LLM solutions, and enterprise SaaS platforms. We also offer web and mobile app development, cloud infrastructure, and AI consulting."
  },
  {
    question: "How does BeonicX ensure project success?",
    answer: "We follow an agile, milestone-driven process with dedicated project managers, weekly demos, and transparent reporting. Every AI agent goes through rigorous testing, including accuracy benchmarks and load testing, before deployment."
  },
  {
    question: "Why should I choose BeonicX over other software development companies?",
    answer: "We're not just a dev shop — we're AI-native. Our team has deep expertise in LLMs, multi-agent systems, and production-grade AI deployment. We focus on measurable ROI and long-term partnerships, not just deliverables."
  },
  {
    question: "What industries does BeonicX serve?",
    answer: "We serve healthcare, fintech, e-commerce, logistics, real estate, education, and more. Each solution is tailored to industry-specific regulations, workflows, and data requirements."
  },
  {
    question: "Do you offer post-development support?",
    answer: "Yes. Every project includes 3 months of post-launch support. We also offer ongoing maintenance plans that cover AI model retraining, performance monitoring, security patches, and feature enhancements."
  },
  {
    question: "Can I hire dedicated developers from BeonicX?",
    answer: "Absolutely. We offer dedicated AI engineers, full-stack developers, and data scientists who work exclusively on your project — fully embedded in your team's workflow."
  },
  {
    question: "How long does it take to develop a custom software solution?",
    answer: "Typical AI agent MVPs take 4-8 weeks. Full enterprise deployments range from 3-6 months depending on complexity, integrations, and data requirements. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Is BeonicX's software development process secure?",
    answer: "Security is foundational, not an afterthought. We implement end-to-end encryption, SOC 2-compliant practices, role-based access control, and regular security audits. For healthcare clients, we ensure full HIPAA compliance."
  }
];

const FAQ = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqItems, setFaqItems] = useState(defaultFaqItems);

  useEffect(() => {
    async function load() {
      const data = await getFaqs();
      if (data && data.length > 0) {
        setFaqItems(data);
      }
    }
    load();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`relative py-24 overflow-hidden ${darkMode ? 'bg-[#030712]' : 'bg-[#ffffff]'}`}>
      {darkMode && (
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />
      )}
      {!darkMode && (
        <div className="absolute inset-0 dot-pattern-light pointer-events-none" />
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 ${
            darkMode
              ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
              : 'bg-blue-50 text-blue-600 border border-blue-200/60'
          }`}>
            <HelpCircle size={14} />
            FAQ
          </span>

          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className={`rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300 ${
                  darkMode
                    ? `bg-white/[0.03] border border-white/[0.08] ${activeIndex === index ? 'border-blue-600/30 shadow-[0_0_30px_rgba(37,99,235,0.06)]' : 'hover:border-white/[0.15]'}`
                    : `bg-white border border-slate-100 ${activeIndex === index ? 'border-blue-200 shadow-[0_4px_24px_rgba(37,99,235,0.08)]' : 'hover:border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'}`
                }`}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-sm sm:text-base font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-4 pt-4 text-sm leading-relaxed border-t ${
                        darkMode ? 'border-white/[0.06] text-slate-400' : 'border-slate-100 text-slate-600'
                      }`}>
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
