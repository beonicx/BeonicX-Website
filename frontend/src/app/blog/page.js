'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import Navbar from '@/layouts/navbar/Navbar';
import Footer from '@/layouts/footer/Footer';

// This will be replaced with server-side data fetching in layout
const BlogPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }

    // Fetch blog posts from API
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      const data = await response.json();
      setPosts(data.posts || []);
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Use mock data for development
      setPosts(getMockPosts());
      setCategories(getMockCategories());
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <main className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Hero Section */}
        <div className={`relative py-20 px-4 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600'}`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <BookOpen size={18} className="text-yellow-300" />
                <span className="text-sm font-medium text-white">AI & Automation Insights</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                BeonicX <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">AI Blog</span>
              </h1>

              <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
                Expert insights on AI agents, automation, machine learning, and enterprise AI solutions
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full px-6 py-4 pl-14 rounded-2xl text-lg outline-none transition-all duration-200 ${
                      darkMode
                        ? 'bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                    }`}
                  />
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Categories */}
        <div className={`sticky top-20 z-40 ${darkMode ? 'bg-gray-900/95' : 'bg-gray-50/95'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="container mx-auto max-w-6xl px-4 py-4">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="container mx-auto max-w-6xl px-4 py-12">
          {filteredPosts.length === 0 ? (
            <div className={`text-center py-20 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <BookOpen size={64} className="mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-bold mb-2">No posts found</h3>
              <p>Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
                  }`}
                >
                  <Link href={`/blog/${post.slug}`}>
                    {post.featuredImage && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {post.category && (
                          <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {post.category}
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm mb-3">
                        <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Calendar size={14} />
                          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Clock size={14} />
                          <span>{post.readingTime || '5 min read'}</span>
                        </div>
                      </div>

                      <h2 className={`text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {post.title}
                      </h2>

                      <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {post.excerpt}
                      </p>

                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              <Tag size={10} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                        Read More <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

// Mock data for development
function getMockPosts() {
  return [
    {
      slug: 'ai-agents-enterprise-automation',
      title: 'How AI Agents Transform Enterprise Automation',
      excerpt: 'Discover how autonomous AI agents are revolutionizing enterprise workflows and increasing productivity by 10x.',
      category: 'AI Agents',
      tags: ['AI', 'Automation', 'Enterprise'],
      publishedAt: '2026-06-01',
      readingTime: '8 min read',
      featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      author: 'BeonicX Team',
    },
    // Add more mock posts as needed
  ];
}

function getMockCategories() {
  return ['AI Agents', 'Automation', 'Machine Learning', 'Enterprise AI', 'Healthcare AI'];
}

export default BlogPage;
