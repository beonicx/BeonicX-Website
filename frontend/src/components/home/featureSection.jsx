'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaMicrochip,
  FaChartPie,
  FaProjectDiagram,
  FaRobot,
  FaCogs,
  FaUserSecret,
} from 'react-icons/fa';
import { getServices } from '@/lib/api';

const defaultFeatures = [
  {
    icon: <FaProjectDiagram />,
    title: "Website Development",
    slug: "website-development",
    description: "Custom websites and web apps built with Next.js, React, and modern full-stack technologies. Fast, responsive, SEO-optimized, and designed to convert.",
  },
  {
    icon: <FaMicrochip />,
    title: "App Development (Android + iOS)",
    slug: "app-development",
    description: "Native and cross-platform mobile apps with Swift, Kotlin, React Native, and Flutter. Pixel-perfect UI, offline support, and App Store-ready.",
  },
  {
    icon: <FaCogs />,
    title: "Custom CRM Development",
    slug: "crm-development",
    description: "Tailored CRM systems that centralize your customer data, automate sales pipelines, track communications, and drive retention — built for your exact workflow.",
  },
  {
    icon: <FaChartPie />,
    title: "ERP Solutions",
    slug: "erp-solutions",
    description: "Unified platforms for finance, HR, inventory, and operations. Streamline your entire business with custom ERP systems that scale as you grow.",
  },
  {
    icon: <FaRobot />,
    title: "AI Agents Integration",
    slug: "ai-agents-integration",
    description: "Deploy autonomous AI agents for customer support, sales automation, data analysis, and workflow orchestration. Powered by LLMs, RAG, and multi-agent systems.",
  },
  {
    icon: <FaUserSecret />,
    title: "Voice Agents Integration",
    slug: "voice-agents-integration",
    description: "Intelligent voice AI for inbound/outbound calls, IVR automation, appointment scheduling, and multilingual conversational support — available 24/7.",
  },
];

const iconMap = {
  'FaProjectDiagram': <FaProjectDiagram />,
  'FaMicrochip': <FaMicrochip />,
  'FaCogs': <FaCogs />,
  'FaChartPie': <FaChartPie />,
  'FaRobot': <FaRobot />,
  'FaUserSecret': <FaUserSecret />,
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FeatureSection({ darkMode = false }) {
  const [features, setFeatures] = useState(defaultFeatures);

  useEffect(() => {
    async function loadServices() {
      const data = await getServices();
      if (data && data.length > 0) {
        const mapped = data.map((svc) => ({
          icon: iconMap[svc.icon] || <FaRobot />,
          title: svc.title,
          slug: svc.slug,
          description: svc.shortDescription || svc.description,
        }));
        setFeatures(mapped);
      }
    }
    loadServices();
  }, []);

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        darkMode ? 'bg-[#030712]' : 'bg-[#ffffff]'
      }`}
    >
      {/* Background orbs */}
      {darkMode && (
        <>
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 right-[5%] w-[400px] h-[400px] rounded-full bg-blue-600/[0.06] blur-[100px] pointer-events-none" />
        </>
      )}
      {!darkMode && (
        <div className="absolute inset-0 dot-pattern-light pointer-events-none" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 ${
              darkMode
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                : 'bg-blue-50 text-blue-600 border border-blue-200/60'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Our Services
          </span>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            What We{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Build
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            End-to-end technology solutions — from web and app development to
            custom CRM, ERP, AI agents, and voice automation.
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
          {features.map((feature, index) => (
            <Link key={index} href={feature.slug ? `/services/${feature.slug}` : '/services'}>
              <motion.article
                variants={cardVariant}
                className={`group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer h-full ${
                  darkMode
                    ? 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]'
                    : 'bg-white backdrop-blur-xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(59,130,246,0.08)]'
                } card-hover`}
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-lg mb-5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-shadow">
                  {feature.icon}
                </div>

                <h3
                  className={`text-lg font-bold mb-2.5 tracking-tight ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {feature.description}
                </p>

              {/* Hover gradient line at bottom */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
