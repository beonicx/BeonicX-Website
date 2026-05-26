"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from "@/layouts/navbar/Navbar";
import Footer from "@/layouts/footer/Footer";
import {
  Sparkles, TrendingUp, Users, Clock, ArrowRight,
  Filter, Search, Star, CheckCircle, Zap, Target,
  Smartphone, Globe, ShoppingCart, Heart, Award,
  BookOpen, Activity, DollarSign, BarChart3
} from 'lucide-react';

const CardList = ({ darkMode = false, toggleDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Comprehensive case study data with detailed information
  const caseStudies = [
    {
      id: 1,
      title: "Papa John's Pizza Delivery Revolution",
      description: "Transforming pizza delivery with real-time tracking, AI recommendations, and seamless ordering experience.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
      category: "Food & Delivery",
      tags: ["Android", "iOS", "Node.js", "Real-time"],
      client: "Papa John's International",
      duration: "8 months",
      results: {
        metric1: "300%",
        label1: "Order Increase",
        metric2: "4.8★",
        label2: "App Rating",
        metric3: "2M+",
        label3: "Downloads"
      },
      challenges: [
        "Real-time order tracking integration",
        "High-traffic scalability",
        "Multi-location inventory management"
      ],
      solutions: [
        "Microservices architecture for scalability",
        "WebSocket for real-time updates",
        "Cloud-based inventory sync"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Redis", "AWS"],
      gradient: "from-red-500 to-orange-500",
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
      results: {
        metric1: "5M+",
        label1: "Active Users",
        metric2: "92%",
        label2: "Retention Rate",
        metric3: "4.9★",
        label3: "User Rating"
      },
      challenges: [
        "Offline content accessibility",
        "Multi-language support (20+ languages)",
        "Personalized content recommendations"
      ],
      solutions: [
        "Progressive download system",
        "AI-powered recommendation engine",
        "Adaptive streaming for videos"
      ],
      technologies: ["Flutter", "Firebase", "TensorFlow", "Cloud Storage"],
      gradient: "from-purple-500 to-pink-500",
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
      results: {
        metric1: "1.5M+",
        label1: "Active Users",
        metric2: "85%",
        label2: "Goal Achievement",
        metric3: "200K+",
        label3: "Premium Subscribers"
      },
      challenges: [
        "Real-time pose detection accuracy",
        "Wearable device integration",
        "Personalized workout algorithms"
      ],
      solutions: [
        "Computer vision for form analysis",
        "Multi-device sync protocol",
        "ML-based adaptive training plans"
      ],
      technologies: ["React Native", "Python", "TensorFlow", "HealthKit", "Google Fit"],
      gradient: "from-green-500 to-teal-500",
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
      results: {
        metric1: "500K+",
        label1: "Students",
        metric2: "95%",
        label2: "Satisfaction Rate",
        metric3: "10K+",
        label3: "Courses"
      },
      challenges: [
        "Low-latency video streaming",
        "Interactive whiteboard functionality",
        "Progress tracking across devices"
      ],
      solutions: [
        "WebRTC for peer-to-peer streaming",
        "Canvas-based collaborative tools",
        "Real-time database synchronization"
      ],
      technologies: ["React Native", "WebRTC", "Node.js", "PostgreSQL", "Redis"],
      gradient: "from-blue-500 to-cyan-500",
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
      results: {
        metric1: "400%",
        label1: "Sales Growth",
        metric2: "3M+",
        label2: "Monthly Users",
        metric3: "45%",
        label3: "Conversion Rate"
      },
      challenges: [
        "Visual search accuracy",
        "AR try-on rendering speed",
        "Payment gateway integration"
      ],
      solutions: [
        "Custom CNN for image recognition",
        "ARCore/ARKit optimization",
        "Multi-gateway payment abstraction"
      ],
      technologies: ["Flutter", "TensorFlow", "ARCore", "ARKit", "Stripe"],
      gradient: "from-indigo-500 to-purple-500",
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
      results: {
        metric1: "100K+",
        label1: "Consultations",
        metric2: "98%",
        label2: "Uptime",
        metric3: "500+",
        label3: "Doctors"
      },
      challenges: [
        "HIPAA compliance requirements",
        "Secure data transmission",
        "EHR system integration"
      ],
      solutions: [
        "End-to-end encryption",
        "FHIR standard implementation",
        "Blockchain for audit trails"
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "Blockchain"],
      gradient: "from-cyan-500 to-blue-500",
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
      results: {
        metric1: "2M+",
        label1: "Users",
        metric2: "99.9%",
        label2: "Security Score",
        metric3: "$50B+",
        label3: "Transactions"
      },
      challenges: [
        "Multi-factor authentication",
        "Real-time fraud detection",
        "Regulatory compliance"
      ],
      solutions: [
        "Biometric + behavioral authentication",
        "ML-based fraud detection",
        "PCI-DSS compliant architecture"
      ],
      technologies: ["Native iOS/Android", "Node.js", "ML", "Blockchain", "AWS"],
      gradient: "from-emerald-500 to-teal-500",
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
      results: {
        metric1: "10M+",
        label1: "Downloads",
        metric2: "4.7★",
        label2: "Rating",
        metric3: "95%",
        label3: "Accuracy"
      },
      challenges: [
        "Hyperlocal data accuracy",
        "Low-latency data updates",
        "Battery optimization"
      ],
      solutions: [
        "Multi-source data aggregation",
        "Edge caching strategy",
        "Background sync optimization"
      ],
      technologies: ["Flutter", "Python", "ML", "AWS", "OpenWeather API"],
      gradient: "from-sky-500 to-blue-500",
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
      results: {
        metric1: "8M+",
        label1: "Users",
        metric2: "500M+",
        label2: "Messages/Day",
        metric3: "4.6★",
        label3: "Rating"
      },
      challenges: [
        "Message delivery guarantee",
        "End-to-end encryption",
        "Cross-platform synchronization"
      ],
      solutions: [
        "Queue-based message system",
        "Signal protocol implementation",
        "Real-time database sync"
      ],
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "Socket.io"],
      gradient: "from-violet-500 to-purple-500",
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
      results: {
        metric1: "1M+",
        label1: "Trips Planned",
        metric2: "90%",
        label2: "User Satisfaction",
        metric3: "4.8★",
        label3: "Rating"
      },
      challenges: [
        "Multi-currency handling",
        "Offline maps and content",
        "Real-time price comparison"
      ],
      solutions: [
        "Dynamic currency conversion API",
        "Progressive map downloading",
        "Price aggregation service"
      ],
      technologies: ["React Native", "Google Maps API", "TensorFlow", "Node.js"],
      gradient: "from-amber-500 to-orange-500",
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
      results: {
        metric1: "50K+",
        label1: "Properties",
        metric2: "200K+",
        label2: "Users",
        metric3: "$2B+",
        label3: "Transactions"
      },
      challenges: [
        "3D property visualization",
        "Location-based search",
        "Secure document handling"
      ],
      solutions: [
        "360° virtual tour integration",
        "Geospatial indexing",
        "Blockchain-based document storage"
      ],
      technologies: ["Flutter", "ARCore", "ARKit", "Google Maps", "Blockchain"],
      gradient: "from-rose-500 to-pink-500",
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
      results: {
        metric1: "500K+",
        label1: "Orders/Month",
        metric2: "1000+",
        label2: "Restaurants",
        metric3: "4.5★",
        label3: "Rating"
      },
      challenges: [
        "Multi-vendor order management",
        "Dynamic pricing optimization",
        "Fleet management integration"
      ],
      solutions: [
        "Microservices architecture",
        "ML-based demand prediction",
        "Real-time fleet tracking"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Google Maps"],
      gradient: "from-orange-500 to-red-500",
      icon: <ShoppingCart className="w-6 h-6" />
    }
  ];

  const categories = [
    "All",
    "E-Commerce",
    "Healthcare",
    "Education",
    "Food & Delivery",
    "FinTech",
    "Health & Wellness",
    "Social & Communication",
    "Travel & Tourism",
    "Real Estate",
    "Utilities"
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Filter logic
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950'
          : 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600'
      } text-white py-24 md:py-32 px-4`}>
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'opacity-5' : 'opacity-10'}`}
              style={{
                width: `${Math.random() * 400 + 150}px`,
                height: `${Math.random() * 400 + 150}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, ${Math.random() * 0.4}) 0%, transparent 70%)`,
                animation: `float ${Math.random() * 15 + 15}s ease-in-out infinite`,
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className={`inline-flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border ${
                darkMode ? 'bg-indigo-500/20 border-indigo-400/40' : 'bg-white/25 border-white/40'
              }`}
            >
              <Sparkles className={darkMode ? 'text-yellow-400' : 'text-yellow-200'} size={18} />
              <span className="text-sm font-semibold tracking-wide">Success Stories</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
            >
              Our{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                darkMode ? 'from-cyan-400 via-blue-400 to-purple-400' : 'from-white via-blue-100 to-purple-100'
              }`}>
                Case Studies
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-blue-50'
              }`}
            >
              Explore our portfolio of successful projects that have transformed businesses and delighted millions of users worldwide.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-12"
            >
              {[
                { icon: <Award className="w-8 h-8" />, value: "150+", label: "Projects Delivered" },
                { icon: <Users className="w-8 h-8" />, value: "50M+", label: "Users Reached" },
                { icon: <Star className="w-8 h-8" />, value: "4.8★", label: "Average Rating" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${darkMode ? 'text-cyan-400' : 'text-cyan-200'} mb-2 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl md:text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-blue-100'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`sticky top-16 z-30 ${
        darkMode ? 'bg-gray-900/95 border-b border-gray-800' : 'bg-white/95 border-b border-gray-200'
      } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className={`flex items-center gap-3 backdrop-blur-xl rounded-xl p-4 border transition-all ${
              darkMode
                ? 'bg-gray-800/60 border-gray-700/50 hover:border-gray-600'
                : 'bg-white border-gray-300 hover:border-gray-400'
            }`}>
              <Search size={22} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
              <input
                type="text"
                placeholder="Search by project name, technology, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 bg-transparent text-base ${
                  darkMode ? 'text-white placeholder-gray-500' : 'text-gray-900 placeholder-gray-600'
                } focus:outline-none`}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Filter size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? darkMode
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Results Count */}
          <div className={`mt-4 text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing {filteredCaseStudies.length} of {caseStudies.length} projects
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredCaseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(study.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-xl hover:shadow-indigo-900/20'
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r ${study.gradient} text-white shadow-lg`}>
                    {study.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r ${study.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {study.icon}
                </div>

                {/* Hover Overlay */}
                {hoveredCard === study.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 flex items-center justify-center"
                  >
                    <motion.button
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition flex items-center gap-2"
                    >
                      View Details
                      <ArrowRight size={18} />
                    </motion.button>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {study.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        darkMode
                          ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                          : 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 3 && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'
                    }`}>
                      +{study.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Results Metrics */}
                <div className={`grid grid-cols-3 gap-4 pt-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div>
                    <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                      {study.results.metric1}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      {study.results.label1}
                    </div>
                  </div>
                  <div>
                    <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                      {study.results.metric2}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      {study.results.label2}
                    </div>
                  </div>
                  <div>
                    <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                      {study.results.metric3}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                      {study.results.label3}
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className={`flex items-center gap-2 mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Clock size={16} />
                  <span>{study.duration} development</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredCaseStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className={`text-6xl mb-4 ${darkMode ? 'text-gray-700' : 'text-gray-300'}`}>
              🔍
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No projects found
            </h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Try adjusting your search or filters
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className={`relative py-24 px-4 overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950'
          : 'bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600'
      }`}>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className={`text-lg md:text-xl mb-10 ${darkMode ? 'text-gray-300' : 'text-blue-50'}`}>
              Let's collaborate to create an exceptional product that transforms your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition shadow-2xl inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default CardList;
