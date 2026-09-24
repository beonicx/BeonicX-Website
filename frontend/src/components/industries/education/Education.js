'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Award, TrendingUp, Sparkles, Code,
  Brain, Zap, Target, Shield, CheckCircle2,
  GraduationCap, Laptop, Globe, MessageSquare, BarChart,
  Settings, Smartphone, Layers, ArrowRight, ArrowUpRight,
  Send
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const solutions = [
  { icon: BookOpen, title: 'K-12 Education Apps', desc: 'Interactive learning for primary and secondary education.', gradient: 'from-blue-600 to-blue-500' },
  { icon: GraduationCap, title: 'Higher Education Platforms', desc: 'Comprehensive solutions for colleges and universities.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Users, title: 'Corporate Training Apps', desc: 'Employee skill development and certification tracking.', gradient: 'from-indigo-500 to-blue-600' },
];

const benefits = [
  { icon: Target, title: 'Custom Learning Path', desc: 'Personalized learning experiences based on student performance and preferences.', gradient: 'from-blue-600 to-blue-500' },
  { icon: Zap, title: 'Interactive Content', desc: 'Engage students with interactive lessons, quizzes, and multimedia content.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: BarChart, title: 'Progress Tracking', desc: 'Monitor student progress with detailed analytics and performance insights.', gradient: 'from-indigo-500 to-blue-600' },
  { icon: Globe, title: 'Accessibility', desc: 'Learn anytime, anywhere with mobile-friendly education applications.', gradient: 'from-blue-600 to-blue-700' },
  { icon: Award, title: 'Gamification Elements', desc: 'Increase motivation through badges, rewards, and competitive learning features.', gradient: 'from-blue-500 to-blue-600' },
  { icon: MessageSquare, title: 'Communication Tools', desc: 'Connect students, teachers, and parents through integrated messaging features.', gradient: 'from-indigo-600 to-blue-600' },
];

const features = [
  { icon: Shield, title: 'User Authentication', desc: 'Secure login with role-based access.' },
  { icon: Layers, title: 'Course Management', desc: 'Intuitive content organization dashboard.' },
  { icon: CheckCircle2, title: 'Assessment Tools', desc: 'Automated grading capabilities.' },
  { icon: Users, title: 'Social Learning', desc: 'Forums and peer review functionality.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Seamless cross-device experience.' },
  { icon: BarChart, title: 'Analytics Dashboard', desc: 'Track performance and engagement.' },
  { icon: BookOpen, title: 'Content Library', desc: 'Rich educational resources.' },
  { icon: Laptop, title: 'Offline Mode', desc: 'Access without internet connectivity.' },
];

const processSteps = [
  { icon: Brain, title: 'Research & Analysis', desc: 'Strategic planning based on market trends and your requirements.' },
  { icon: Code, title: 'UI/UX Design', desc: 'Intuitive interfaces tailored for educational excellence.' },
  { icon: Settings, title: 'Development', desc: 'Building with latest technologies and best practices.' },
  { icon: CheckCircle2, title: 'Testing & QA', desc: 'Rigorous testing for flawless performance.' },
  { icon: Zap, title: 'Deployment', desc: 'Smooth launch across all platforms.' },
  { icon: TrendingUp, title: 'Support & Maintenance', desc: 'Ongoing optimization and enhancements.' },
];

const technologies = [
  'React Native', 'Flutter', 'iOS', 'Android', 'Node.js', 'Firebase',
  'AWS', 'MongoDB', 'GraphQL', 'Kotlin', 'Swift', 'Python'
];

const industries = [
  'K-12 Schools and Districts', 'Higher Education Institutions', 'EdTech Startups',
  'Corporate Training', 'Educational Publishers', 'Language Learning Providers',
  'Online Learning Platforms', 'Test Preparation Services', 'Special Education'
];

const caseStudies = [
  { title: 'Interactive Learning Platform', desc: 'K-12 platform with interactive lessons, assessments, and progress tracking.', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', category: 'K-12 Education' },
  { title: 'Virtual Classroom Solution', desc: 'Real-time collaboration tools for remote learning and hybrid classrooms.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop', category: 'Higher Education' },
  { title: 'Corporate Training App', desc: 'Employee skill development platform with certification tracking.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', category: 'Corporate' },
];

const faqs = [
  { q: 'How long does it take to develop an education app?', a: 'Timeline varies based on complexity. Simple apps take 3-4 months, while complex platforms require 6-12 months. We provide detailed timelines after understanding your requirements.' },
  { q: 'What is the cost of developing an education app?', a: 'Costs depend on platform choice, feature set, design complexity, and integrations. Our team provides detailed quotes after analyzing your specifications.' },
  { q: 'Do you offer post-launch support and maintenance?', a: 'Yes, we provide comprehensive support including bug fixes, updates, feature enhancements, and technical assistance.' },
  { q: 'Can you help with education app monetization strategies?', a: 'Absolutely! We implement subscriptions, freemium models, in-app purchases, or licensing based on your goals.' },
];

export default function Education({ darkMode = false }) {
  return (
    <main className={darkMode ? 'bg-[#030712]' : 'bg-white'}>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] ${
            darkMode ? 'bg-blue-600/[0.08]' : 'bg-blue-100/70'
          }`} />
          <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${
            darkMode ? 'bg-indigo-600/[0.06]' : 'bg-indigo-50/60'
          }`} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.015)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.015)'} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#030712_80%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#ffffff_80%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 sm:pb-32">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 ${
                darkMode
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-100'
              }`}
            >
              <Sparkles size={13} />
              Education Excellence
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-7 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Education App{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Transform the learning experience with custom education applications tailored to your specific needs and audience.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Get Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  darkMode
                    ? 'text-slate-300 border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04]'
                    : 'text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <BookOpen size={18} />
                Our Portfolio
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mt-12 justify-center">
              {[
                { label: 'Projects', value: '500+' },
                { label: 'Students Reached', value: '2M+' },
                { label: 'Success Rate', value: '98%' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>{stat.value}</div>
                  <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SOLUTIONS ═══════════ */}
      <section className="relative py-24 sm:py-32">
        {darkMode && (
          <div className="absolute top-40 right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Our Solutions</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Innovative education solutions,{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>built for impact.</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
            {solutions.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp}>
                <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 overflow-hidden ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <span className={`absolute top-5 right-6 text-[5rem] font-black leading-none select-none pointer-events-none ${darkMode ? 'text-white/[0.02]' : 'text-slate-900/[0.03]'}`}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white mb-6 shadow-lg shadow-blue-600/20`}>
                    <s.icon size={24} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ BENEFITS ═══════════ */}
      <section className={`relative py-24 sm:py-32 ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Key Benefits</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Our Services</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {benefits.map((b, i) => (
              <motion.div key={b.title} variants={fadeUp}>
                <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 overflow-hidden ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${b.gradient} text-white mb-6 shadow-lg shadow-blue-600/20`}>
                    <b.icon size={24} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{b.title}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FEATURES ═══════════ */}
      <section className="relative py-24 sm:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Features</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Powerful App{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>Features</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <div className={`rounded-2xl p-6 h-full transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                } card-hover`}>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl mb-4 ${
                    darkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
                  }`}>
                    <f.icon size={20} className="text-blue-500" />
                  </div>
                  <h3 className={`text-sm font-bold mb-1 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{f.title}</h3>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className={`relative py-24 sm:py-32 ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Our Process</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Development{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Journey</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {processSteps.map((step, i) => (
              <motion.div key={step.title} variants={fadeUp}>
                <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                      darkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
                    }`}>
                      <step.icon size={22} className="text-blue-500" />
                    </div>
                    <span className={`text-[11px] font-bold tracking-[0.2em] uppercase ${darkMode ? 'text-blue-400/40' : 'text-blue-500/40'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TECHNOLOGIES ═══════════ */}
      <section className="relative py-24 sm:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Tech Stack</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Technologies{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>We Use</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {technologies.map((tech) => (
              <motion.div key={tech} variants={fadeUp}>
                <div className={`relative rounded-xl p-5 text-center transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                } card-hover`}>
                  <div className={`w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-lg text-base font-bold ${
                    darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>{tech.charAt(0)}</div>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{tech}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CASE STUDIES ═══════════ */}
      <section className={`relative py-24 sm:py-32 ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Success Stories</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Case{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>Studies</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {caseStudies.map((study) => (
              <motion.div key={study.title} variants={fadeUp}>
                <div className={`group h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-[#0a0f1e] to-transparent' : 'bg-gradient-to-t from-black/30 to-transparent'}`} />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1.5 rounded-full">{study.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{study.title}</h3>
                    <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{study.desc}</p>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      Read Case Study <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ INDUSTRIES ═══════════ */}
      <section className="relative py-24 sm:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Who We Serve</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Industries{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>We Serve</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {industries.map((ind) => (
              <motion.div key={ind} variants={fadeUp}>
                <div className={`flex items-center gap-3 rounded-xl px-6 py-5 transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                } card-hover`}>
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  <span className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{ind}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className={`relative py-24 sm:py-32 ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}`}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>FAQ</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div className="space-y-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {faqs.map((faq) => (
              <motion.div key={faq.q} variants={fadeUp}>
                <div className={`rounded-2xl p-7 transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06]'
                    : 'bg-white border border-slate-200/80'
                }`}>
                  <h3 className={`text-base font-bold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{faq.q}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 sm:py-28 px-4">
        <motion.div
          className={`relative max-w-5xl mx-auto rounded-3xl overflow-hidden px-8 sm:px-16 py-16 sm:py-20 ${
            darkMode ? 'aurora-dark' : 'aurora-light'
          }`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`absolute inset-0 ${darkMode ? 'grid-pattern' : ''} pointer-events-none`} />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <GraduationCap className={`w-12 h-12 mx-auto mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold mb-5 tracking-tight leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Transform{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Education?</span>
            </h2>
            <p className={`text-base sm:text-lg mb-10 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Let&apos;s collaborate to create an education app that enhances learning experiences and drives better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Schedule Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
