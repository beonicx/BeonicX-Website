'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles, TrendingUp, Rocket, BookOpen, Clock,
  Calendar, User, ArrowRight, Zap, Target, Shield,
  Code, Globe, Layers, ChevronRight, Star, Mail,
  CheckCircle, Search
} from 'lucide-react';

// Sample data with placeholder images from Unsplash
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
  { id: 1, name: "AI", slug: "ai", icon: "🤖", articleCount: 42 },
  { id: 2, name: "Cybersecurity", slug: "cybersecurity", icon: "🔒", articleCount: 38 },
  { id: 3, name: "Cloud", slug: "cloud-computing", icon: "☁️", articleCount: 31 },
  { id: 4, name: "Blockchain", slug: "blockchain", icon: "⛓️", articleCount: 27 },
  { id: 5, name: "Mobile", slug: "mobile", icon: "📱", articleCount: 45 },
  { id: 6, name: "IoT", slug: "iot", icon: "🌐", articleCount: 24 },
  { id: 7, name: "VR", slug: "vr", icon: "🥽", articleCount: 18 },
  { id: 8, name: "Data", slug: "data-science", icon: "📊", articleCount: 33 }
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

  // Generate random values only once for background shapes (prevents hydration mismatch)
  const [backgroundShapes] = useState(() =>
    Array.from({ length: 10 }, () => ({
      width: Math.random() * 400 + 150,
      height: Math.random() * 400 + 150,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.4,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5
    }))
  );

  const [newsletterShapes] = useState(() =>
    Array.from({ length: 6 }, () => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.3
    }))
  );

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Hero Section */}
      <section className={`relative ${
        darkMode
          ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-blue-950'
          : 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-600'
      } text-white py-24 md:py-36 px-4 overflow-hidden`}>
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {backgroundShapes.map((shape, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'opacity-10' : 'opacity-20'}`}
              style={{
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, ${shape.opacity}) 0%, transparent 70%)`,
                animation: `float ${shape.duration}s ease-in-out infinite`,
                animationDelay: `${shape.delay}s`,
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="lg:w-1/2 text-center lg:text-left" variants={fadeInUp}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border ${
                  darkMode
                    ? 'bg-blue-600/20 border-blue-400/40'
                    : 'bg-white/25 border-white/40'
                }`}
              >
                <Sparkles size={18} className={darkMode ? 'text-blue-400' : 'text-blue-200'} />
                <span className="text-sm font-semibold tracking-wide">Latest Tech Insights</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
                Explore the Future of{' '}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  darkMode
                    ? 'from-blue-300 via-blue-400 to-blue-600'
                    : 'from-white via-blue-100 to-blue-200'
                }`}>
                  Technology
                </span>
              </h1>
              <p className={`text-lg md:text-xl mb-10 leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-blue-50'
              }`}>
                Stay ahead with cutting-edge tech news, in-depth articles, and expert insights on innovations shaping tomorrow.
              </p>

              {/* Search Bar */}
              <motion.div
                className="max-w-xl mx-auto lg:mx-0 mb-10"
                variants={fadeInUp}
              >
                <div className={`flex items-center gap-3 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-800/60 border-slate-700/50 hover:border-slate-600'
                    : 'bg-white/95 border-white/60 hover:border-white/80'
                }`}>
                  <Search size={22} className={darkMode ? 'text-slate-400' : 'text-slate-600'} />
                  <input
                    type="text"
                    placeholder="Search articles, topics, technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`flex-1 bg-transparent text-base ${
                      darkMode
                        ? 'text-white placeholder-gray-500'
                        : 'text-slate-900 placeholder-gray-600'
                    } focus:outline-none`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-7 py-2.5 rounded-xl font-semibold shadow-lg transition-all ${
                      darkMode
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-700 text-white'
                        : 'bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-white'
                    }`}
                  >
                    Search
                  </motion.button>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: darkMode ? '0 20px 40px rgba(37, 99, 235, 0.4)' : '0 20px 40px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-bold py-4 px-8 rounded-xl transition shadow-2xl flex items-center justify-center gap-2 ${
                    darkMode
                      ? 'bg-white text-blue-700 hover:bg-slate-100'
                      : 'bg-white text-blue-700 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen size={20} />
                  Start Reading
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-bold py-4 px-8 rounded-xl transition backdrop-blur-md flex items-center justify-center gap-2 border-2 ${
                    darkMode
                      ? 'border-slate-400 text-white bg-white/10 hover:bg-white hover:text-blue-700'
                      : 'border-white text-white bg-white/20 hover:bg-white hover:text-blue-700'
                  }`}
                >
                  <TrendingUp size={20} />
                  Trending Topics
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                {[
                  { label: "Articles", value: "500+" },
                  { label: "Categories", value: "20+" },
                  { label: "Expert Authors", value: "50+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className={`text-3xl md:text-4xl font-extrabold ${
                      darkMode ? 'text-blue-400' : 'text-blue-200'
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium ${
                      darkMode ? 'text-slate-400' : 'text-blue-100'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              variants={fadeInUp}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-3xl blur-2xl opacity-30 animate-pulse" />

                {/* Main featured image */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={featuredArticles[0].imageSrc}
                    alt="Latest Technology"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                    priority
                    unoptimized
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />

                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star size={16} fill="white" />
                    Featured
                  </div>

                  {/* Article info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-blue-600/80 px-3 py-1 rounded-full">
                      {featuredArticles[0].category}
                    </span>
                    <h3 className="text-xl font-bold mt-3 mb-2">{featuredArticles[0].title}</h3>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        {featuredArticles[0].readTime} min read
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {featuredArticles[0].publishDate}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className={`py-24 px-4 relative ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-20 right-0 w-[500px] h-[500px] ${
            darkMode ? 'bg-blue-600/10' : 'bg-blue-200/40'
          } rounded-full blur-3xl`} />
          <div className={`absolute bottom-20 left-0 w-[500px] h-[500px] ${
            darkMode ? 'bg-blue-600/10' : 'bg-blue-200/40'
          } rounded-full blur-3xl`} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="flex justify-between items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.span
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide ${
                  darkMode
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                    : 'bg-blue-100 text-blue-700 border border-blue-300'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Featured Content
              </motion.span>
              <h2 className={`text-4xl md:text-5xl font-extrabold mt-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Must-Read Articles
              </h2>
            </div>
            <Link
              href="/articles"
              className={`hidden md:flex items-center gap-2 font-bold group transition-colors ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              View All
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className={`h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-slate-950 to-gray-950 border border-slate-800 shadow-xl hover:shadow-blue-900/20'
                    : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl'
                }`}>
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={article.imageSrc}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                        index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-blue-600' : 'bg-blue-600'
                      } text-white`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Read time */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs">
                      <Clock size={12} />
                      {article.readTime} min
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all ${
                      index === 0 ? 'group-hover:from-blue-500 group-hover:to-blue-400' :
                      index === 1 ? 'group-hover:from-blue-500 group-hover:to-blue-400' :
                      'group-hover:from-blue-600 group-hover:to-blue-400'
                    } ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {article.title}
                    </h3>
                    <p className={`text-base leading-relaxed line-clamp-3 mb-6 ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {article.excerpt}
                    </p>

                    {/* Author info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-blue-500">
                          <Image
                            src={article.author.avatar}
                            alt={article.author.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            {article.author.name}
                          </p>
                          <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {article.publishDate}
                          </p>
                        </div>
                      </div>

                      {/* Read more arrow */}
                      <motion.div
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                          darkMode ? 'bg-slate-800' : 'bg-slate-100'
                        } group-hover:bg-gradient-to-r ${
                          index === 0 ? 'group-hover:from-blue-500 group-hover:to-blue-400' :
                          index === 1 ? 'group-hover:from-blue-500 group-hover:to-blue-400' :
                          'group-hover:from-blue-600 group-hover:to-blue-400'
                        }`}
                        whileHover={{ scale: 1.15 }}
                      >
                        <ArrowRight size={18} className={`transition-colors ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        } group-hover:text-white`} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile view all link */}
          <div className="mt-12 text-center md:hidden">
            <Link
              href="/articles"
              className={`inline-flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-semibold`}
            >
              View All Articles
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className={`py-24 px-4 relative ${
        darkMode ? 'bg-gradient-to-b from-slate-950 to-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ${
            darkMode ? 'bg-blue-600/10' : 'bg-blue-200/30'
          } rounded-full blur-3xl`} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className={`inline-block px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-5 ${
                darkMode
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                  : 'bg-blue-100 text-blue-700 border border-blue-300'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Browse Topics
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Explore By Category
            </h2>
            <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Dive deep into your areas of interest with our curated technology categories
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {categories.map((cat, index) => {
              const gradients = [
                'from-blue-600 to-blue-700',
                'from-blue-600 to-blue-400',
                'from-blue-600 to-blue-700',
                'from-blue-400 to-blue-600',
                'from-blue-600 to-blue-400',
                'from-blue-600 to-blue-800',
                'from-blue-400 to-blue-600',
                'from-blue-600 to-blue-400'
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={cat.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <Link
                    href={`/category/${cat.slug}`}
                    className={`group block h-full rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden ${
                      darkMode
                        ? 'bg-gradient-to-br from-slate-950 to-gray-950 hover:from-gray-850 hover:to-slate-950 border border-slate-800 shadow-lg hover:shadow-blue-900/20'
                        : 'bg-white hover:bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl'
                    }`}
                  >
                    {/* Gradient glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

                    {/* Icon with gradient background */}
                    <div className="relative">
                      <motion.div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} mb-4 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-4xl">{cat.icon}</span>
                      </motion.div>

                      <h3 className={`text-lg font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {cat.name}
                      </h3>
                      <p className={`text-sm font-medium ${
                        darkMode ? 'text-slate-500' : 'text-slate-600'
                      }`}>
                        {cat.articleCount} Articles
                      </p>

                      {/* Arrow indicator */}
                      <motion.div
                        className={`mt-4 flex items-center justify-center gap-1 text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        Explore
                        <ChevronRight size={16} />
                      </motion.div>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-5 rounded-tl-full`} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={`py-20 px-4 relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-blue-950 via-blue-950 to-blue-950'
          : 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-600'
      }`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {newsletterShapes.map((shape, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'opacity-5' : 'opacity-10'}`}
              style={{
                width: `${shape.width}px`,
                height: `${shape.height}px`,
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, ${shape.opacity}) 0%, transparent 70%)`,
                filter: 'blur(30px)'
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Stay Updated with Tech Trends
            </h2>
            <p className={`text-lg mb-10 ${darkMode ? 'text-slate-300' : 'text-blue-50'}`}>
              Get the latest tech news delivered straight to your inbox.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className={`flex-1 px-6 py-4 rounded-xl text-base focus:outline-none focus:ring-4 transition-all ${
                  darkMode
                    ? 'bg-slate-800 text-white placeholder-gray-500 focus:ring-blue-600/50'
                    : 'bg-white text-slate-900 placeholder-gray-500 focus:ring-white/50'
                }`}
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-4 px-8 rounded-xl font-bold transition shadow-xl ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-700 text-white'
                    : 'bg-white text-blue-700 hover:bg-slate-100'
                }`}
              >
                Subscribe
              </motion.button>
            </form>

            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-blue-100'}`}>
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex justify-between items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.span
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-4 inline-block ${
                  darkMode
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
                    : 'bg-blue-100 text-blue-700 border border-blue-300'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Latest Updates
              </motion.span>
              <h2 className={`text-4xl md:text-5xl font-extrabold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Latest News
              </h2>
            </div>
            <Link
              href="/news"
              className={`hidden md:flex items-center gap-2 font-bold group transition-colors ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              View All News
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {latestNews.map((news, index) => (
              <motion.div
                key={news.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl transition-all duration-300 h-full ${
                  darkMode
                    ? 'bg-gradient-to-br from-slate-950 to-gray-950 border border-slate-800 shadow-lg hover:shadow-blue-900/20'
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-xl'
                }`}>
                  <div className="md:w-1/3 relative h-48 md:h-auto w-full rounded-xl overflow-hidden min-h-[180px]">
                    <Image
                      src={news.imageSrc}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                    <span className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                      index === 0 ? 'text-blue-600' :
                      index === 1 ? 'text-blue-600' :
                      index === 2 ? 'text-blue-600' :
                      'text-blue-600'
                    }`}>
                      {news.category}
                    </span>
                    <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${
                      index === 0 ? 'group-hover:from-blue-500 group-hover:to-blue-400' :
                      index === 1 ? 'group-hover:from-blue-500 group-hover:to-blue-400' :
                      index === 2 ? 'group-hover:from-blue-600 group-hover:to-blue-400' :
                      'group-hover:from-blue-400 group-hover:to-blue-600'
                    } transition-all`}>
                      {news.title}
                    </h3>
                    <p className={`text-base mb-6 line-clamp-2 flex-grow ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-blue-500">
                          <Image
                            src={news.author.avatar}
                            alt={news.author.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {news.author.name}
                          </p>
                          <p className={`text-xs ${
                            darkMode ? 'text-slate-500' : 'text-slate-500'
                          }`}>
                            {news.publishDate}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          darkMode ? 'bg-slate-800' : 'bg-slate-100'
                        }`}
                      >
                        <ArrowRight size={18} className={darkMode ? 'text-slate-400' : 'text-slate-600'} />
                      </motion.div>
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