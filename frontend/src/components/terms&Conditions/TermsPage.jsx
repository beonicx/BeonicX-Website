'use client'
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { termsData } from './terms&Conditions';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function TermsPage({ darkMode = false }) {
  const { lastUpdated, sections } = termsData;

  return (
    <main className={darkMode ? 'bg-[#000000]' : 'bg-white'}>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] ${
            darkMode ? 'bg-neutral-800/[0.08]' : 'bg-neutral-200/70'
          }`} />
          <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${
            darkMode ? 'bg-indigo-600/[0.06]' : 'bg-indigo-50/60'
          }`} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(128,128,128,0.02)' : 'rgba(128,128,128,0.015)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(128,128,128,0.02)' : 'rgba(128,128,128,0.015)'} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#000000_80%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#ffffff_80%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-14 sm:pb-18">
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
                  ? 'bg-neutral-700/10 text-neutral-300 border border-neutral-500/20'
                  : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
              }`}
            >
              <Sparkles size={13} />
              Legal
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-7 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Terms &{' '}
              <span className="bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-600 bg-clip-text text-transparent">
                Conditions
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Last Updated: {lastUpdated}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.02 }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0a0a] border border-white/[0.06]'
                    : 'bg-white border border-slate-200/80 shadow-[0_2px_20px_rgba(0,0,0,0.03)]'
                }`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold ${
                    darkMode
                      ? 'bg-neutral-700/10 text-neutral-300 border border-neutral-500/20'
                      : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className={`text-xl sm:text-2xl font-bold tracking-tight pt-1 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {section.title}
                  </h2>
                </div>

                {section.content && (
                  <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-2.5">
                    {section.items.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <CheckCircle2 size={15} className="text-neutral-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-5 mt-5">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className={`text-base font-bold mb-3 tracking-tight ${
                          darkMode ? 'text-slate-300' : 'text-slate-800'
                        }`}>
                          {sub.subtitle}
                        </h3>
                        {sub.items && (
                          <ul className="space-y-2.5 ml-1">
                            {sub.items.map((item, j) => (
                              <li key={j} className={`flex items-start gap-3 text-sm leading-relaxed ${
                                darkMode ? 'text-slate-400' : 'text-slate-600'
                              }`}>
                                <CheckCircle2 size={15} className="text-neutral-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.contactInfo && (
                  <div className={`mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4`}>
                    <div className={`flex items-center gap-3 rounded-xl px-5 py-4 ${
                      darkMode
                        ? 'bg-white/[0.03] border border-white/[0.06]'
                        : 'bg-slate-50 border border-slate-200/80'
                    }`}>
                      <Mail size={18} className="text-neutral-500 shrink-0" />
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Email</p>
                        <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{section.contactInfo.email}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-3 rounded-xl px-5 py-4 ${
                      darkMode
                        ? 'bg-white/[0.03] border border-white/[0.06]'
                        : 'bg-slate-50 border border-slate-200/80'
                    }`}>
                      <MapPin size={18} className="text-neutral-500 shrink-0" />
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Address</p>
                        <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{section.contactInfo.address}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-3 rounded-xl px-5 py-4 ${
                      darkMode
                        ? 'bg-white/[0.03] border border-white/[0.06]'
                        : 'bg-slate-50 border border-slate-200/80'
                    }`}>
                      <Phone size={18} className="text-neutral-500 shrink-0" />
                      <div>
                        <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Phone</p>
                        <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{section.contactInfo.phone}</p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
