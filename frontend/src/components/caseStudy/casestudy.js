"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Sparkles, TrendingUp, Users, Clock, ArrowRight,
  Search, Star, CheckCircle, Zap, Target,
  Smartphone, Globe, ShoppingCart, Heart, Award,
  BookOpen, Activity, DollarSign, BarChart3
} from 'lucide-react';
import { getCaseStudies } from '@/lib/api';

const CardList = ({ darkMode = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [apiCaseStudies, setApiCaseStudies] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getCaseStudies();
      if (data && data.length > 0) {
        const mapped = data.map((cs, index) => ({
          id: index + 1,
          title: cs.title,
          description: cs.challenge || cs.solution || '',
          image: cs.image || '',
          category: cs.industry || 'General',
          tags: cs.technologies || [],
          client: cs.client || '',
          duration: '',
          results: cs.metrics?.reduce((acc, m, i) => {
            acc[`metric${i + 1}`] = m.value;
            acc[`label${i + 1}`] = m.label;
            return acc;
          }, {}) || {},
          challenges: cs.challenge ? [cs.challenge] : [],
          solutions: cs.solution ? [cs.solution] : [],
          technologies: cs.technologies || [],
          gradient: 'from-blue-600 to-blue-700',
          icon: <Globe className="w-6 h-6" />,
        }));
        setApiCaseStudies(mapped);
      }
    }
    load();
  }, []);

  const defaultCaseStudies = [
    {
      id: 1,
      title: "Papa John's Pizza Delivery Revolution",
      description: "Transforming pizza delivery with real-time tracking, AI recommendations, and seamless ordering experience.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
      category: "Food & Delivery",
      tags: ["Android", "iOS", "Node.js", "Real-time"],
      client: "Papa John's International",
      duration: "8 months",
      results: { metric1: "300%", label1: "Order Increase", metric2: "4.8★", label2: "App Rating", metric3: "2M+", label3: "Downloads" },
      challenges: ["Real-time order tracking integration", "High-traffic scalability", "Multi-location inventory management"],
      solutions: ["Microservices architecture for scalability", "WebSocket for real-time updates", "Cloud-based inventory sync"],
      technologies: ["React Native", "Node.js", "MongoDB", "Redis", "AWS"],
      gradient: "from-blue-600 to-blue-400",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Art of Living: Mindfulness & Meditation",
      description: "A comprehensive wellness platform offering guided meditations, yoga sessions, and personalized wellness journeys.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
      category: "Health & Wellness",
      tags: ["Android", "Flutter", "Node.js", "iOS"],
      client: "Art of Living Foundation",
      duration: "10 months",
      results: { metric1: "5M+", label1: "Active Users", metric2: "92%", label2: "Retention Rate", metric3: "4.9★", label3: "User Rating" },
      challenges: ["Offline content accessibility", "Multi-language support (20+ languages)", "Personalized content recommendations"],
      solutions: ["Progressive download system", "AI-powered recommendation engine", "Adaptive streaming for videos"],
      technologies: ["Flutter", "Firebase", "TensorFlow", "Cloud Storage"],
      gradient: "from-blue-600 to-blue-400",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 3,
      title: "FitTrack: AI-Powered Fitness Companion",
      description: "Smart fitness tracking with AI workout recommendations, nutrition planning, and real-time form correction.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      category: "Health & Wellness",
      tags: ["Android", "iOS", "React Native", "AI/ML"],
      client: "FitTrack Wellness Inc.",
      duration: "7 months",
      results: { metric1: "1.5M+", label1: "Active Users", metric2: "85%", label2: "Goal Achievement", metric3: "200K+", label3: "Premium Subscribers" },
      challenges: ["Real-time pose detection accuracy", "Wearable device integration", "Personalized workout algorithms"],
      solutions: ["Computer vision for form analysis", "Multi-device sync protocol", "ML-based adaptive training plans"],
      technologies: ["React Native", "Python", "TensorFlow", "HealthKit", "Google Fit"],
      gradient: "from-blue-600 to-blue-700",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 4,
      title: "EduLearn: Next-Gen Learning Platform",
      description: "Interactive e-learning platform with live classes, gamification, and AI-powered personalized learning paths.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      category: "Education",
      tags: ["Android", "iOS", "Node.js", "MongoDB", "WebRTC"],
      client: "EduLearn Technologies",
      duration: "12 months",
      results: { metric1: "500K+", label1: "Students", metric2: "95%", label2: "Satisfaction Rate", metric3: "10K+", label3: "Courses" },
      challenges: ["Low-latency video streaming", "Interactive whiteboard functionality", "Progress tracking across devices"],
      solutions: ["WebRTC for peer-to-peer streaming", "Canvas-based collaborative tools", "Real-time database synchronization"],
      technologies: ["React Native", "WebRTC", "Node.js", "PostgreSQL", "Redis"],
      gradient: "from-blue-600 to-blue-700",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 5,
      title: "ShopEasy: Smart E-Commerce Experience",
      description: "AI-driven shopping app with visual search, AR try-on, personalized recommendations, and voice shopping.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      category: "E-Commerce",
      tags: ["Android", "iOS", "Flutter", "Firebase", "AR"],
      client: "ShopEasy Retail",
      duration: "9 months",
      results: { metric1: "400%", label1: "Sales Growth", metric2: "3M+", label2: "Monthly Users", metric3: "45%", label3: "Conversion Rate" },
      challenges: ["Visual search accuracy", "AR try-on rendering speed", "Payment gateway integration"],
      solutions: ["Custom CNN for image recognition", "ARCore/ARKit optimization", "Multi-gateway payment abstraction"],
      technologies: ["Flutter", "TensorFlow", "ARCore", "ARKit", "Stripe"],
      gradient: "from-blue-600 to-blue-800",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      id: 6,
      title: "HealthPlus: Telemedicine & Appointment System",
      description: "Complete healthcare ecosystem with video consultations, EHR integration, prescription management, and health monitoring.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      category: "Healthcare",
      tags: ["Android", "iOS", "React Native", "Node.js", "HIPAA"],
      client: "HealthPlus Medical Group",
      duration: "14 months",
      results: { metric1: "100K+", label1: "Consultations", metric2: "98%", label2: "Uptime", metric3: "500+", label3: "Doctors" },
      challenges: ["HIPAA compliance requirements", "Secure data transmission", "EHR system integration"],
      solutions: ["End-to-end encryption", "FHIR standard implementation", "Blockchain for audit trails"],
      technologies: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "Blockchain"],
      gradient: "from-blue-400 to-blue-600",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 7,
      title: "BankSecure: Next-Gen Mobile Banking",
      description: "Secure mobile banking with biometric authentication, AI fraud detection, instant payments, and wealth management.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      category: "FinTech",
      tags: ["Android", "iOS", "Node.js", "Security", "Blockchain"],
      client: "BankSecure Financial",
      duration: "16 months",
      results: { metric1: "2M+", label1: "Users", metric2: "99.9%", label2: "Security Score", metric3: "$50B+", label3: "Transactions" },
      challenges: ["Multi-factor authentication", "Real-time fraud detection", "Regulatory compliance"],
      solutions: ["Biometric + behavioral authentication", "ML-based fraud detection", "PCI-DSS compliant architecture"],
      technologies: ["Native iOS/Android", "Node.js", "ML", "Blockchain", "AWS"],
      gradient: "from-blue-600 to-blue-700",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      id: 8,
      title: "WeatherNow: Hyperlocal Weather Intelligence",
      description: "Advanced weather forecasting with AI predictions, severe weather alerts, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      category: "Utilities",
      tags: ["Android", "iOS", "Flutter", "API", "ML"],
      client: "WeatherNow Inc.",
      duration: "5 months",
      results: { metric1: "10M+", label1: "Downloads", metric2: "4.7★", label2: "Rating", metric3: "95%", label3: "Accuracy" },
      challenges: ["Hyperlocal data accuracy", "Low-latency data updates", "Battery optimization"],
      solutions: ["Multi-source data aggregation", "Edge caching strategy", "Background sync optimization"],
      technologies: ["Flutter", "Python", "ML", "AWS", "OpenWeather API"],
      gradient: "from-sky-500 to-blue-600",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 9,
      title: "ChatConnect: Secure Messaging Platform",
      description: "End-to-end encrypted messaging with voice/video calls, file sharing, and enterprise collaboration features.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      category: "Social & Communication",
      tags: ["Android", "iOS", "Firebase", "Real-time", "WebRTC"],
      client: "ChatConnect Communications",
      duration: "11 months",
      results: { metric1: "8M+", label1: "Users", metric2: "500M+", label2: "Messages/Day", metric3: "4.6★", label3: "Rating" },
      challenges: ["Message delivery guarantee", "End-to-end encryption", "Cross-platform synchronization"],
      solutions: ["Queue-based message system", "Signal protocol implementation", "Real-time database sync"],
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "Socket.io"],
      gradient: "from-blue-600 to-blue-800",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 10,
      title: "TravelMate: Smart Travel Companion",
      description: "AI-powered travel planning with personalized itineraries, booking management, and local recommendations.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      category: "Travel & Tourism",
      tags: ["Android", "iOS", "React Native", "AI", "Maps"],
      client: "TravelMate Global",
      duration: "8 months",
      results: { metric1: "1M+", label1: "Trips Planned", metric2: "90%", label2: "User Satisfaction", metric3: "4.8★", label3: "Rating" },
      challenges: ["Multi-currency handling", "Offline maps and content", "Real-time price comparison"],
      solutions: ["Dynamic currency conversion API", "Progressive map downloading", "Price aggregation service"],
      technologies: ["React Native", "Google Maps API", "TensorFlow", "Node.js"],
      gradient: "from-blue-600 to-blue-400",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 11,
      title: "PropTech: Real Estate Marketplace",
      description: "Revolutionary property platform with virtual tours, AR visualization, mortgage calculator, and instant messaging.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      category: "Real Estate",
      tags: ["Android", "iOS", "Flutter", "AR", "Maps"],
      client: "PropTech Realty",
      duration: "10 months",
      results: { metric1: "50K+", label1: "Properties", metric2: "200K+", label2: "Users", metric3: "$2B+", label3: "Transactions" },
      challenges: ["3D property visualization", "Location-based search", "Secure document handling"],
      solutions: ["360° virtual tour integration", "Geospatial indexing", "Blockchain-based document storage"],
      technologies: ["Flutter", "ARCore", "ARKit", "Google Maps", "Blockchain"],
      gradient: "from-blue-600 to-blue-700",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 12,
      title: "FoodHub: Cloud Kitchen Aggregator",
      description: "Multi-restaurant ordering platform with live tracking, AI recommendations, and loyalty rewards program.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      category: "Food & Delivery",
      tags: ["Android", "iOS", "Node.js", "AI", "Maps"],
      client: "FoodHub Network",
      duration: "9 months",
      results: { metric1: "500K+", label1: "Orders/Month", metric2: "1000+", label2: "Restaurants", metric3: "4.5★", label3: "Rating" },
      challenges: ["Multi-vendor order management", "Dynamic pricing optimization", "Fleet management integration"],
      solutions: ["Microservices architecture", "ML-based demand prediction", "Real-time fleet tracking"],
      technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Google Maps"],
      gradient: "from-blue-400 to-blue-600",
      icon: <ShoppingCart className="w-6 h-6" />
    }
  ];

  const caseStudies = apiCaseStudies || defaultCaseStudies;

  const categories = [
    "All", "E-Commerce", "Healthcare", "Education", "Food & Delivery",
    "FinTech", "Health & Wellness", "Social & Communication",
    "Travel & Tourism", "Real Estate", "Utilities"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(37,99,235,0.03)' : 'rgba(37,99,235,0.02)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(37,99,235,0.03)' : 'rgba(37,99,235,0.02)'} 1px, transparent 1px)`,
          backgroundSize: '72px 72px'
        }} />
        {darkMode && (
          <>
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.06] blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-700/[0.04] blur-[120px] pointer-events-none" />
          </>
        )}
        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_100%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_40%,#ffffff_100%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 ${
                darkMode
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200/60'
              }`}
            >
              <Sparkles size={14} />
              Success Stories
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className={`text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.1] mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                Case Studies
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Explore our portfolio of successful projects that have transformed businesses and delighted millions of users worldwide.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className={`grid grid-cols-3 max-w-lg mx-auto gap-px rounded-2xl overflow-hidden ${
                darkMode ? 'bg-white/[0.06]' : 'bg-slate-200/60'
              }`}
            >
              {[
                { icon: <Award size={20} />, value: "150+", label: "Projects Delivered" },
                { icon: <Users size={20} />, value: "50M+", label: "Users Reached" },
                { icon: <Star size={20} />, value: "4.8★", label: "Avg Rating" }
              ].map((stat) => (
                <div key={stat.label} className={`px-6 py-5 text-center ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
                  <div className={`text-2xl font-extrabold tracking-tight mb-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs font-medium ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className={`sticky top-16 z-30 backdrop-blur-xl border-b ${
        darkMode ? 'bg-[#030712]/90 border-white/[0.06]' : 'bg-white/90 border-slate-200/60'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className={`flex items-center gap-3 rounded-xl px-4 py-3 mb-4 border transition-all ${
            darkMode
              ? 'bg-white/[0.04] border-white/[0.08] focus-within:border-blue-600/40'
              : 'bg-slate-50 border-slate-200 focus-within:border-blue-400'
          }`}>
            <Search size={18} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
            <input
              type="text"
              placeholder="Search projects, technologies, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`flex-1 bg-transparent text-sm outline-none ${
                darkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-xs whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : darkMode
                      ? 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                      : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={`mt-3 text-xs font-medium ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            {filteredCaseStudies.length} of {caseStudies.length} projects
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredCaseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={fadeInUp}
              onHoverStart={() => setHoveredCard(study.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 card-hover ${
                darkMode
                  ? 'bg-white/[0.03] border border-white/[0.08] hover:border-blue-600/30 hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]'
                  : 'bg-white border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md ${
                    darkMode ? 'bg-white/10 text-white border border-white/20' : 'bg-white/80 text-slate-700 border border-white/40'
                  }`}>
                    {study.category}
                  </span>
                </div>

                <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-blue-600 to-blue-700`}>
                  {study.icon}
                </div>

                {hoveredCard === study.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Link href="/get-started">
                      <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.05 }}
                        className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold py-3 px-6 rounded-xl text-sm hover:bg-slate-100 transition"
                      >
                        View Details <ArrowRight size={16} />
                      </motion.span>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-2 line-clamp-2 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {study.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-md ${
                        darkMode
                          ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                          : 'bg-blue-50 text-blue-600 border border-blue-100'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 3 && (
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md ${
                      darkMode ? 'bg-white/[0.04] text-slate-500 border border-white/[0.06]' : 'bg-slate-50 text-slate-400 border border-slate-200'
                    }`}>
                      +{study.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className={`grid grid-cols-3 gap-3 pt-4 border-t ${darkMode ? 'border-white/[0.06]' : 'border-slate-100'}`}>
                  {[
                    { val: study.results.metric1, lbl: study.results.label1 },
                    { val: study.results.metric2, lbl: study.results.label2 },
                    { val: study.results.metric3, lbl: study.results.label3 },
                  ].map((m, i) => (
                    <div key={i}>
                      <div className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {m.val}
                      </div>
                      <div className={`text-[10px] font-medium ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {m.lbl}
                      </div>
                    </div>
                  ))}
                </div>

                {study.duration && (
                  <div className={`flex items-center gap-1.5 mt-4 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    <Clock size={12} />
                    <span>{study.duration} development</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCaseStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <Search size={48} className={`mx-auto mb-4 ${darkMode ? 'text-slate-700' : 'text-slate-300'}`} />
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              No projects found
            </h3>
            <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA */}
      <section className={`relative py-24 px-4 overflow-hidden ${darkMode ? 'aurora-dark' : 'aurora-light'}`}>
        <div className={`absolute inset-0 ${darkMode ? 'grid-pattern' : ''} pointer-events-none`} />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 bg-blue-600/10 border border-blue-600/20 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <Zap size={14} />
              Start Building
            </span>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                Success Story
              </span>?
            </h2>

            <p className={`text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Let&apos;s collaborate to create an exceptional product that transforms your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  darkMode
                    ? 'border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'
                    : 'border-slate-200 text-slate-700 hover:border-blue-200 hover:bg-blue-50/50'
                }`}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CardList;
