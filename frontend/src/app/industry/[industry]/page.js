'use client'

import Education from '@/components/industries/education/Education'
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'
import React, { useState, useEffect, use } from 'react'
import { getIndustryBySlug } from '@/lib/api'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const IndustryDetail = ({ industry, darkMode }) => {
  if (!industry) return null;

  return (
    <div className={`font-sans transition-colors duration-300 py-18 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <section className={`${darkMode ? 'bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900' : 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700'} text-white py-20 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{industry.title}</h1>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl leading-relaxed">{industry.description}</p>
          </motion.div>
        </div>
      </section>

      {industry.features && industry.features.length > 0 && (
        <section className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto max-w-6xl">
            <h2 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>Key Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {industry.stats && industry.stats.length > 0 && (
        <section className={`py-16 px-4 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-blue-950' : 'bg-gradient-to-r from-blue-600 to-blue-700'} text-white`}>
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industry.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-gray-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ready to Transform Your Business?</h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Let&apos;s discuss how we can help your {industry.title.toLowerCase()} business grow.</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

const Page = ({ params }) => {
  const { industry } = use(params);
  const [darkMode, setDarkMode] = useState(false);
  const [industryData, setIndustryData] = useState(null);
  const [loading, setLoading] = useState(true);

  const industrySlug = industry || 'education';

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    }

    async function loadIndustry() {
      const data = await getIndustryBySlug(industrySlug);
      setIndustryData(data);
      setLoading(false);
    }
    loadIndustry();
  }, [industrySlug]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <div className="pt-16">
          {loading ? (
            <div className="flex items-center justify-center py-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
            </div>
          ) : industryData ? (
            <IndustryDetail industry={industryData} darkMode={darkMode} />
          ) : (
            <Education darkMode={darkMode} />
          )}
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </main>
  )
}

export default Page;
