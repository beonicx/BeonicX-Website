'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles, TrendingUp, BookOpen, Clock,
  ArrowRight, ArrowUpRight, Mail, Search
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing various sectors.",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "Artificial Intelligence",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    publishDate: "Apr 2, 2025",
    readTime: 8
  },
  {
    id: 2,
    title: "5G Technology: The New Era of Connectivity",
    excerpt: "Discover how 5G networks are changing the way we connect and communicate.",
    imageSrc: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    category: "Networking",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    publishDate: "Apr 1, 2025",
    readTime: 6
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency",
    excerpt: "Blockchain technology in real-world applications beyond digital currencies.",
    imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    category: "Blockchain",
    author: {
      name: "Michael Rivera",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    publishDate: "Mar 30, 2025",
    readTime: 7
  }
];

const categories = [
  { id: 1, name: "Artificial Intelligence", slug: "ai", icon: "AI", articleCount: 42 },
  { id: 2, name: "Cybersecurity", slug: "cybersecurity", icon: "CS", articleCount: 38 },
  { id: 3, name: "Cloud Computing", slug: "cloud-computing", icon: "CC", articleCount: 31 },
  { id: 4, name: "Blockchain", slug: "blockchain", icon: "BC", articleCount: 27 },
  { id: 5, name: "Mobile Dev", slug: "mobile", icon: "MD", articleCount: 45 },
  { id: 6, name: "IoT", slug: "iot", icon: "IO", articleCount: 24 },
  { id: 7, name: "VR / AR", slug: "vr", icon: "VR", articleCount: 18 },
  { id: 8, name: "Data Science", slug: "data-science", icon: "DS", articleCount: 33 }
];

const latestNews = [
  {
    id: 1,
    title: "Apple Reveals Revolutionary Chip Architecture",
    excerpt: "Breakthrough semiconductor design with double performance and half the power.",
    imageSrc: "https://images.unsplash.com/photo-1591238371732-d75eb8d00f38?w=600&h=400&fit=crop",
    category: "Hardware",
    author: { name: "David Kim", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    publishDate: "Apr 5, 2025"
  },
  {
    id: 2,
    title: "EU Passes Landmark Privacy Law",
    excerpt: "New rules to transform data usage across international tech companies.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    category: "Policy",
    author: { name: "Elena Petrova", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    publishDate: "Apr 4, 2025"
  },
  {
    id: 3,
    title: "Quantum Computing Hits 500 Qubits",
    excerpt: "Quantum systems solve previously impossible problems.",
    imageSrc: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    category: "Quantum Computing",
    author: { name: "Robert Chang", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    publishDate: "Apr 3, 2025"
  },
  {
    id: 4,
    title: "Microsoft & Google Team Up on Open AI",
    excerpt: "A new open-source platform for safe, scalable AI dev.",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    category: "Artificial Intelligence",
    author: { name: "Jasmine Williams", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop" },
    publishDate: "Apr 2, 2025"
  }
];

export default function Nextjs({ darkMode = false }) {
  const [searchQuery, setSearchQuery] = useState('');

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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 sm:pb-28">
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
              Latest Tech Insights
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-7 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Explore the Future of{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Technology
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Stay ahead with cutting-edge tech news, in-depth articles, and expert insights on innovations shaping tomorrow.
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={fadeUp} className="max-w-xl mx-auto mb-10">
              <div className={`flex items-center gap-3 rounded-xl p-2 transition-all ${
                darkMode
                  ? 'bg-[#0a0f1e] border border-white/[0.08] focus-within:border-blue-500/40'
                  : 'bg-slate-50 border border-slate-200 focus-within:border-blue-300'
              }`}>
                <Search size={20} className={`ml-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} />
                <input
                  type="text"
                  placeholder="Search articles, topics, technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`flex-1 bg-transparent text-sm py-2 ${
                    darkMode
                      ? 'text-white placeholder-slate-500'
                      : 'text-slate-900 placeholder-slate-400'
                  } focus:outline-none`}
                />
                <button className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25">
                  Search
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link
                href="/articles"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <BookOpen size={18} />
                Start Reading
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/trending"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  darkMode
                    ? 'text-slate-300 border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04]'
                    : 'text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <TrendingUp size={18} />
                Trending Topics
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 mt-12 justify-center"
            >
              {[
                { label: "Articles", value: "500+" },
                { label: "Categories", value: "20+" },
                { label: "Expert Authors", value: "50+" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FEATURED ARTICLES ═══════════ */}
      <section className="relative py-24 sm:py-32">
        {darkMode && (
          <div className="absolute top-40 right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-end mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div>
              <motion.span
                variants={fadeUp}
                className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Featured Content
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Must-Read{' '}
                <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>
                  Articles
                </span>
              </motion.h2>
            </div>
            <Link
              href="/articles"
              className={`hidden md:flex items-center gap-1.5 text-sm font-semibold transition-all ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              View All
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {featuredArticles.map((article) => (
              <motion.div key={article.id} variants={fadeUp}>
                <div className={`group h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={article.imageSrc}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className={`absolute inset-0 ${
                      darkMode ? 'bg-gradient-to-t from-[#0a0f1e] to-transparent' : 'bg-gradient-to-t from-black/30 to-transparent'
                    }`} />

                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-blue-600 text-white">
                        {article.category}
                      </span>
                    </div>

                    <div className={`absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium ${
                      darkMode ? 'bg-black/40 text-white/80' : 'bg-black/40 text-white'
                    } backdrop-blur-sm`}>
                      <Clock size={10} />
                      {article.readTime} min
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 tracking-tight line-clamp-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {article.title}
                    </h3>
                    <p className={`text-sm leading-relaxed line-clamp-2 mb-5 ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={article.author.avatar}
                            alt={article.author.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            {article.author.name}
                          </p>
                          <p className={`text-[10px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                            {article.publishDate}
                          </p>
                        </div>
                      </div>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        darkMode
                          ? 'bg-white/[0.04] group-hover:bg-blue-500/20'
                          : 'bg-slate-100 group-hover:bg-blue-50'
                      }`}>
                        <ArrowUpRight size={15} className={`transition-colors ${
                          darkMode ? 'text-slate-500 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-600'
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CATEGORIES ═══════════ */}
      <section className={`relative py-24 sm:py-32 ${
        darkMode ? 'bg-white/[0.02]' : 'bg-slate-50/70'
      }`}>
        {darkMode && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/[0.04] blur-[150px] pointer-events-none" />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Browse Topics
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Explore By{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Category
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className={`text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Dive deep into your areas of interest with our curated technology categories
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={fadeUp}>
                <Link
                  href={`/category/${cat.slug}`}
                  className={`group block h-full rounded-2xl p-6 text-center transition-all duration-300 ${
                    darkMode
                      ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                      : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                  } card-hover`}
                >
                  <div className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl text-base font-bold ${
                    darkMode
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>
                    {cat.icon}
                  </div>

                  <h3 className={`text-sm font-bold mb-1 tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cat.name}
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    {cat.articleCount} Articles
                  </p>

                  <div className={`mt-3 flex items-center justify-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Explore
                    <ArrowUpRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ NEWSLETTER ═══════════ */}
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

          <div className="relative z-10 text-center max-w-xl mx-auto">
            <Mail className={`w-12 h-12 mx-auto mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Stay Updated with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Tech Trends
              </span>
            </h2>
            <p className={`text-base mb-8 leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Get the latest tech news delivered straight to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`flex-1 px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all ${
                  darkMode
                    ? 'bg-white/[0.06] border border-white/[0.1] text-white placeholder-slate-500 focus:border-blue-500/40'
                    : 'bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-300'
                }`}
                required
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>

            <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════ LATEST NEWS ═══════════ */}
      <section className="relative py-24 sm:py-32">
        {darkMode && (
          <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-end mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div>
              <motion.span
                variants={fadeUp}
                className={`inline-flex text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Latest Updates
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Latest{' '}
                <span className={darkMode ? 'text-slate-500' : 'text-slate-400'}>
                  News
                </span>
              </motion.h2>
            </div>
            <Link
              href="/news"
              className={`hidden md:flex items-center gap-1.5 text-sm font-semibold transition-all ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              View All News
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {latestNews.map((news) => (
              <motion.div key={news.id} variants={fadeUp}>
                <div className={`group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl h-full transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                    : 'bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)]'
                } card-hover`}>
                  <div className="sm:w-1/3 relative h-44 sm:h-auto w-full rounded-xl overflow-hidden min-h-[160px]">
                    <Image
                      src={news.imageSrc}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="sm:w-2/3 flex flex-col py-1">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.15em] mb-2 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {news.category}
                    </span>
                    <h3 className={`text-base font-bold mb-2 tracking-tight line-clamp-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {news.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 line-clamp-2 flex-grow ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="relative h-7 w-7 rounded-full overflow-hidden">
                          <Image
                            src={news.author.avatar}
                            alt={news.author.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            {news.author.name}
                          </p>
                          <p className={`text-[10px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                            {news.publishDate}
                          </p>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        darkMode
                          ? 'bg-white/[0.04] group-hover:bg-blue-500/20'
                          : 'bg-slate-100 group-hover:bg-blue-50'
                      }`}>
                        <ArrowRight size={14} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
