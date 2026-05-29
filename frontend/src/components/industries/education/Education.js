'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, Award, TrendingUp, Sparkles, Code,
  Brain, Zap, Target, Shield, Clock, CheckCircle,
  GraduationCap, Laptop, Globe, MessageSquare, BarChart,
  Settings, Smartphone, Layers, ArrowRight, Star, Mail,
  Phone, MapPin, Send
} from 'lucide-react';

export default function Education({ darkMode = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [activeTab, setActiveTab] = useState('k12');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const appBenefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Custom Learning Path",
      description: "Personalized learning experiences based on student performance and preferences.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Interactive Content",
      description: "Engage students with interactive lessons, quizzes, and multimedia content.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Monitor student progress with detailed analytics and performance insights.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessibility",
      description: "Learn anytime, anywhere with mobile-friendly education applications.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Gamification Elements",
      description: "Increase motivation through badges, rewards, and competitive learning features.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Communication Tools",
      description: "Connect students, teachers, and parents through integrated messaging features.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const appFeatures = [
    { icon: <Shield className="w-6 h-6" />, title: "User Authentication", description: "Secure login with role-based access." },
    { icon: <Layers className="w-6 h-6" />, title: "Course Management", description: "Intuitive content organization dashboard." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Assessment Tools", description: "Automated grading capabilities." },
    { icon: <Users className="w-6 h-6" />, title: "Social Learning", description: "Forums and peer review functionality." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Responsive", description: "Seamless cross-device experience." },
    { icon: <BarChart className="w-6 h-6" />, title: "Analytics Dashboard", description: "Track performance and engagement." },
    { icon: <BookOpen className="w-6 h-6" />, title: "Content Library", description: "Rich educational resources." },
    { icon: <Laptop className="w-6 h-6" />, title: "Offline Mode", description: "Access without internet connectivity." }
  ];

  const developmentSteps = [
    { number: "01", icon: <Brain className="w-8 h-8" />, title: "Research & Analysis", description: "Strategic planning based on market trends and your requirements." },
    { number: "02", icon: <Code className="w-8 h-8" />, title: "UI/UX Design", description: "Intuitive interfaces tailored for educational excellence." },
    { number: "03", icon: <Settings className="w-8 h-8" />, title: "Development", description: "Building with latest technologies and best practices." },
    { number: "04", icon: <CheckCircle className="w-8 h-8" />, title: "Testing & QA", description: "Rigorous testing for flawless performance." },
    { number: "05", icon: <Zap className="w-8 h-8" />, title: "Deployment", description: "Smooth launch across all platforms." },
    { number: "06", icon: <TrendingUp className="w-8 h-8" />, title: "Support & Maintenance", description: "Ongoing optimization and enhancements." }
  ];

  const technologies = [
    'React Native', 'Flutter', 'iOS', 'Android', 'Node.js', 'Firebase',
    'AWS', 'MongoDB', 'GraphQL', 'Kotlin', 'Swift', 'Python'
  ];

  const industries = [
    'K-12 Schools and Districts',
    'Higher Education Institutions',
    'EdTech Startups',
    'Corporate Training',
    'Educational Publishers',
    'Language Learning Providers',
    'Online Learning Platforms',
    'Test Preparation Services',
    'Special Education'
  ];

  const caseStudies = [
    {
      title: "Interactive Learning Platform",
      description: "K-12 platform with interactive lessons, assessments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      category: "K-12 Education"
    },
    {
      title: "Virtual Classroom Solution",
      description: "Real-time collaboration tools for remote learning and hybrid classrooms.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "Higher Education"
    },
    {
      title: "Corporate Training App",
      description: "Employee skill development platform with certification tracking.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Corporate"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop an education app?",
      answer: "Timeline varies based on complexity. Simple apps take 3-4 months, while complex platforms require 6-12 months. We provide detailed timelines after understanding your requirements."
    },
    {
      question: "What is the cost of developing an education app?",
      answer: "Costs depend on platform choice, feature set, design complexity, and integrations. Our team provides detailed quotes after analyzing your specifications."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes, we provide comprehensive support including bug fixes, updates, feature enhancements, and technical assistance."
    },
    {
      question: "Can you help with education app monetization strategies?",
      answer: "Absolutely! We implement subscriptions, freemium models, in-app purchases, or licensing based on your goals."
    }
  ];

  return (
    <main className={`transition-colors duration-300 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950'
          : 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600'
      } text-white py-24 md:py-36 px-4`}>
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
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
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="lg:w-1/2" variants={fadeInUp}>
              <motion.div
                className={`inline-flex items-center gap-2 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border ${
                  darkMode ? 'bg-indigo-500/20 border-indigo-400/40' : 'bg-white/25 border-white/40'
                }`}
              >
                <Sparkles className={darkMode ? 'text-yellow-400' : 'text-yellow-200'} size={18} />
                <span className="text-sm font-semibold tracking-wide">Education Excellence</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
                Education App{' '}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  darkMode ? 'from-cyan-400 via-blue-400 to-purple-400' : 'from-white via-blue-100 to-purple-100'
                }`}>
                  Development
                </span>
              </h1>

              <p className={`text-lg md:text-xl mb-10 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-blue-50'}`}>
                Transform the learning experience with custom education applications tailored to your specific needs and audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition shadow-2xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Get Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-bold py-4 px-8 rounded-xl transition backdrop-blur-md flex items-center justify-center gap-2 border-2 ${
                    darkMode
                      ? 'border-gray-400 text-white bg-white/10 hover:bg-white hover:text-indigo-700'
                      : 'border-white text-white bg-white/20 hover:bg-white hover:text-indigo-700'
                  }`}
                >
                  <BookOpen size={20} />
                  Our Portfolio
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div className="flex flex-wrap gap-8 mt-12" variants={fadeInUp}>
                {[
                  { label: "Projects", value: "500+" },
                  { label: "Students Reached", value: "2M+" },
                  { label: "Success Rate", value: "98%" }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className={`text-3xl md:text-4xl font-extrabold ${darkMode ? 'text-cyan-400' : 'text-cyan-200'}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-blue-100'}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="lg:w-1/2" variants={fadeInUp}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                    alt="Education App Development"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star size={16} fill="white" />
                    Featured
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={`py-24 px-4 relative ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-20 right-0 w-[500px] h-[500px] ${darkMode ? 'bg-indigo-600/10' : 'bg-indigo-200/40'} rounded-full blur-3xl`} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-4 inline-block ${
                darkMode ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'bg-indigo-100 text-indigo-700 border border-indigo-300'
              }`}
            >
              Our Solutions
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Innovative Education Solutions
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We specialize in creating cutting-edge education applications that enhance learning experiences and drive better outcomes.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: <BookOpen className="w-10 h-10" />, title: "K-12 Education Apps", desc: "Interactive learning for primary and secondary education.", gradient: "from-blue-500 to-cyan-500" },
              { icon: <GraduationCap className="w-10 h-10" />, title: "Higher Education Platforms", desc: "Comprehensive solutions for colleges and universities.", gradient: "from-purple-500 to-pink-500" },
              { icon: <Users className="w-10 h-10" />, title: "Corporate Training Apps", desc: "Employee skill development and certification tracking.", gradient: "from-green-500 to-teal-500" }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-xl hover:shadow-indigo-900/20'
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
                <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg text-white`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-24 px-4 relative ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-4 inline-block ${
                darkMode ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-purple-100 text-purple-700 border border-purple-300'
              }`}
            >
              Key Benefits
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Our Services
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {appBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-lg hover:shadow-indigo-900/20'
                    : 'bg-white border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg text-white`}>
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {benefit.title}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-4 inline-block ${
                darkMode ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-cyan-100 text-cyan-700 border border-cyan-300'
              }`}
            >
              Features
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Powerful App Features
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl p-6 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800'
                    : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Process */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-4 inline-block ${
                darkMode ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-300'
              }`}
            >
              Our Process
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Development Journey
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {developmentSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-lg hover:shadow-indigo-900/20'
                    : 'bg-white border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div className={`absolute top-6 right-6 text-6xl font-bold ${darkMode ? 'text-gray-800' : 'text-gray-100'}`}>
                  {step.number}
                </div>
                <div className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-4 relative z-10`}>
                  {step.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`relative z-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-4 inline-block ${
                darkMode ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-orange-100 text-orange-700 border border-orange-300'
              }`}
            >
              Technology Stack
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technologies We Use
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`rounded-xl p-6 flex items-center justify-center h-24 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-indigo-700'
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                <p className={`text-base font-bold text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {tech}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide mb-4 inline-block ${
                darkMode ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' : 'bg-pink-100 text-pink-700 border border-pink-300'
              }`}
            >
              Success Stories
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Case Studies
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-lg hover:shadow-indigo-900/20'
                    : 'bg-white border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider bg-indigo-500 text-white px-3 py-1.5 rounded-full">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {study.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {study.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-indigo-500 font-semibold group"
                  >
                    Read Case Study
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Industries We Serve
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className={`rounded-xl p-6 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-indigo-700'
                    : 'bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200'
                }`}
              >
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {industry}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-24 px-4 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </h3>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-24 px-4 overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950'
          : 'bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600'
      }`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'opacity-5' : 'opacity-10'}`}
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, ${Math.random() * 0.3}) 0%, transparent 70%)`,
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
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Ready to Transform Education?
            </h2>
            <p className={`text-lg md:text-xl mb-10 ${darkMode ? 'text-gray-300' : 'text-blue-50'}`}>
              Let's collaborate to create an education app that enhances learning experiences and drives better outcomes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition shadow-2xl inline-flex items-center gap-2"
            >
              <Send size={20} />
              Schedule Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
