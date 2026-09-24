'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles, Brain, Target, Zap, Shield, Smartphone, Globe,
  Cloud, Briefcase, Palette, Rocket, Users, Award, CheckCircle2,
  ArrowRight, MessageSquare, MapPin, Mail, Phone
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const stats = [
  { value: '100+', label: 'Projects Delivered', icon: Rocket },
  { value: '50+', label: 'Happy Clients', icon: Users },
  { value: '10+', label: 'Team Members', icon: Award },
  { value: '10+', label: 'Countries Served', icon: Globe },
];

const values = [
  { icon: Brain, title: 'Innovation First', desc: 'We leverage cutting-edge AI and emerging technologies to create solutions that push boundaries and drive digital transformation.' },
  { icon: Target, title: 'Client-Centric', desc: 'Your success is our priority. We work closely with you to understand your unique needs and deliver tailored solutions.' },
  { icon: Zap, title: 'Agile Excellence', desc: 'Fast, flexible, and focused. Our agile methodology ensures rapid delivery without compromising on quality.' },
  { icon: Shield, title: 'Security & Quality', desc: 'Enterprise-grade security and rigorous quality assurance are built into every solution we create.' },
];

const team = [
  { name: 'Nitish Yadav', role: 'Co-Founder & CEO', desc: 'Visionary leader driving innovation in AI-powered software solutions', initials: 'NY' },
  { name: 'Abhishek Mishra', role: 'Co-Founder & CTO', desc: 'Technology architect specializing in scalable systems and AI integration', initials: 'AM' },
  { name: 'Ansh Yadav', role: 'Co-Founder & COO', desc: 'Operations expert ensuring excellence in delivery and client satisfaction', initials: 'AY' },
];

const services = [
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Custom AI solutions, ML models, NLP, computer vision, and intelligent automation.', gradient: 'from-blue-600 to-blue-500' },
  { icon: Smartphone, title: 'Mobile Development', desc: 'Native and cross-platform mobile apps for iOS and Android with exceptional UX.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Globe, title: 'Web Development', desc: 'Modern web applications using React, Next.js, and scalable backend architectures.', gradient: 'from-indigo-500 to-blue-600' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Cloud migration, DevOps, microservices, and infrastructure optimization.', gradient: 'from-blue-600 to-blue-700' },
  { icon: Briefcase, title: 'Enterprise Software', desc: 'Custom enterprise solutions, ERP, CRM, and business process automation.', gradient: 'from-blue-500 to-blue-600' },
  { icon: Palette, title: 'UI/UX Design', desc: 'User-centered design creating intuitive and engaging digital experiences.', gradient: 'from-indigo-600 to-blue-600' },
];

const milestones = [
  { date: 'Jan 2025', event: 'BeonicX Founded', desc: 'Started our journey with a vision to revolutionize software development' },
  { date: 'Sep 2025', event: 'First 10 Clients', desc: 'Reached our first major milestone serving clients across multiple industries' },
  { date: 'Nov 2025', event: 'AI Division Launch', desc: 'Expanded into AI and machine learning solutions' },
  { date: 'Jan 2026', event: 'Global Expansion', desc: 'Extended services to 15+ countries worldwide' },
  { date: 'Feb 2026', event: 'Industry Recognition', desc: 'Awarded for excellence in innovation and client satisfaction' },
  { date: 'Apr 2026', event: 'Next Generation', desc: 'Leading the future of AI-powered enterprise solutions' },
];

const contactInfo = [
  { icon: MapPin, label: 'Headquarters', value: 'Greater Noida, Haryana, India' },
  { icon: Mail, label: 'Email', value: 'beonicxgroup@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-9129842706' },
];

export default function AboutUs({ darkMode = false }) {
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
              About Us
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-7 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                BeonicX
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Empowering businesses with cutting-edge AI-powered software solutions. We transform ideas into intelligent, scalable, and innovative digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className={darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className={`w-11 h-11 mx-auto mb-4 flex items-center justify-center rounded-xl ${
                  darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                }`}>
                  <stat.icon size={20} className="text-blue-500" />
                </div>
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-1 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>{stat.value}</div>
                <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ OUR STORY ═══════════ */}
      <section className="relative py-24 sm:py-32">
        {darkMode && (
          <div className="absolute top-40 right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Our Story</motion.span>
              <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Building the future,{' '}
                <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>one product at a time.</span>
              </motion.h2>
              <motion.div variants={fadeUp} className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                <p>Founded in 2025, BeonicX emerged from a simple yet powerful vision: to democratize access to cutting-edge technology and help businesses of all sizes harness the power of AI and modern software solutions.</p>
                <p>What started as a small team of passionate developers has grown into a global force in software development, serving clients across 15+ countries and delivering 100+ successful projects.</p>
                <p>Today, we specialize in AI-powered solutions, custom software development, and digital transformation, helping businesses stay ahead in an increasingly competitive digital landscape.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className={`rounded-2xl p-8 ${
                darkMode
                  ? 'bg-[#0a0f1e] border border-white/[0.06]'
                  : 'bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(37,99,235,0.06)]'
              }`}>
                <h3 className={`text-lg font-bold mb-3 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Mission</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  To empower businesses with intelligent, scalable, and innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                </p>
              </div>
              <div className={`rounded-2xl p-8 ${
                darkMode
                  ? 'bg-[#0a0f1e] border border-white/[0.06]'
                  : 'bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(37,99,235,0.06)]'
              }`}>
                <h3 className={`text-lg font-bold mb-3 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Vision</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  To be the world&apos;s most trusted partner in AI-powered digital transformation, recognized for excellence, innovation, and the lasting impact we create for our clients.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ VALUES ═══════════ */}
      <section className={`relative py-24 sm:py-32 ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Our Values</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Core{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Principles</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={`text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <div className={`relative rounded-2xl p-8 h-full transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${
                    darkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
                  }`}>
                    <v.icon size={22} className="text-blue-500" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{v.title}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="relative py-24 sm:py-32">
        {darkMode && (
          <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>What We Do</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Comprehensive solutions,{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>one partner.</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}>
            {services.map((s, i) => (
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

      {/* ═══════════ TEAM ═══════════ */}
      <section className={`relative py-24 sm:py-32 ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}`}>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Leadership</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Meet Our{' '}
              <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>Founders</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {team.map((m) => (
              <motion.div key={m.name} variants={fadeUp}>
                <div className={`text-center rounded-2xl p-8 h-full transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl text-xl font-bold ${
                    darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>{m.initials}</div>
                  <h3 className={`text-lg font-bold mb-1 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{m.name}</h3>
                  <p className={`text-xs font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{m.role}</p>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section className="relative py-24 sm:py-32">
        {darkMode && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/[0.04] blur-[150px] pointer-events-none" />
        )}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16 lg:mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Milestones</motion.span>
            <motion.h2 variants={fadeUp} className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Journey</span>
            </motion.h2>
          </motion.div>

          <motion.div className="space-y-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {milestones.map((m, i) => (
              <motion.div key={m.event} variants={fadeUp}>
                <div className={`flex gap-6 items-start rounded-2xl p-6 transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                } card-hover`}>
                  <div className={`shrink-0 w-14 h-14 flex items-center justify-center rounded-xl text-sm font-bold ${
                    darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>{String(i + 1).padStart(2, '0')}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`text-base font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{m.event}</h3>
                      <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-full shrink-0 ${
                        darkMode ? 'bg-white/[0.04] text-slate-500' : 'bg-slate-100 text-slate-500'
                      }`}>{m.date}</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT INFO ═══════════ */}
      <section className={`relative py-16 sm:py-20 ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'}`}>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((c) => (
              <motion.div key={c.label} variants={fadeUp}>
                <div className={`text-center rounded-2xl p-7 transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06]'
                    : 'bg-white border border-slate-200/80'
                }`}>
                  <div className={`w-11 h-11 mx-auto mb-4 flex items-center justify-center rounded-xl ${
                    darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    <c.icon size={20} className="text-blue-500" />
                  </div>
                  <h3 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{c.label}</h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{c.value}</p>
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
            <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold mb-5 tracking-tight leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Business?</span>
            </h2>
            <p className={`text-base sm:text-lg mb-10 leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Let&apos;s build something amazing together. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  darkMode
                    ? 'text-white/80 bg-white/10 hover:bg-white/[0.15]'
                    : 'text-slate-700 bg-white/80 border border-slate-200/50 hover:bg-white'
                }`}
              >
                <MessageSquare size={18} />
                View Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
