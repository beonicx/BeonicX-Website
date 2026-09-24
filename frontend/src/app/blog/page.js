'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Tag, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { getBlogs } from '@/lib/api';

const BlogPage = () => {
  const { darkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getBlogs();
    if (data && data.length > 0) {
      const mapped = data.map(post => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt || '',
        category: post.categories?.[0] || '',
        tags: post.tags || [],
        publishedAt: post.createdAt,
        readingTime: `${Math.ceil((post.content?.length || 0) / 1500)} min read`,
        featuredImage: post.image,
        author: post.author?.name || 'BeonicX Team',
      }));
      setPosts(mapped);

      const allCategories = [...new Set(data.flatMap(p => p.categories || []))];
      setCategories(allCategories);
    } else {
      setPosts(getMockPosts());
      setCategories(getMockCategories());
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <>
      {/* Header */}
      <section className={`relative pt-12 pb-16 px-4 ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full blur-[140px] ${
            darkMode ? 'bg-blue-600/[0.06]' : 'bg-blue-100/40'
          }`} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 ${
              darkMode
                ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                : 'bg-blue-50 text-blue-600 border border-blue-200/60'
            }`}>
              <TrendingUp size={13} />
              Insights & Resources
            </span>

            <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              The BeonicX{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className={`text-lg max-w-2xl leading-relaxed mb-10 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Expert insights on AI agents, automation, machine learning, and enterprise AI solutions.
            </p>

            {/* Search */}
            <div className="max-w-xl">
              <div className={`flex items-center gap-3 rounded-xl px-5 py-3.5 border transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-600/20 ${
                darkMode
                  ? 'bg-white/[0.04] border-white/[0.08] focus-within:border-blue-600/40'
                  : 'bg-slate-50 border-slate-200 focus-within:border-blue-300'
              }`}>
                <Search size={18} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`flex-1 bg-transparent text-sm outline-none ${
                    darkMode ? 'text-white placeholder:text-slate-500' : 'text-slate-900 placeholder:text-slate-400'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className={`sticky top-16 z-30 ${
        darkMode ? 'bg-[#030712]/90' : 'bg-white/90'
      } backdrop-blur-xl border-b ${darkMode ? 'border-white/[0.06]' : 'border-slate-200/60'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : darkMode
                    ? 'bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : darkMode
                      ? 'bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className={`py-12 px-4 ${darkMode ? 'bg-[#030712]' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                darkMode ? 'bg-white/[0.05]' : 'bg-slate-100'
              }`}>
                <BookOpen size={28} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                No articles found
              </h3>
              <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Featured Post */}
              {featured && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <Link href={`/blog/${featured.slug}`} className="group block">
                    <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                      darkMode
                        ? 'bg-white/[0.03] border border-white/[0.06] hover:border-blue-600/30'
                        : 'bg-white border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]'
                    }`}>
                      <div className="grid md:grid-cols-2 gap-0">
                        {featured.featuredImage && (
                          <div className="relative h-64 md:h-80 overflow-hidden">
                            <img
                              src={featured.featuredImage}
                              alt={featured.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {featured.category && (
                              <div className="absolute top-4 left-4">
                                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                  {featured.category}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-4 text-xs mb-4">
                            <span className={`flex items-center gap-1.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                              <Calendar size={13} />
                              {new Date(featured.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className={`flex items-center gap-1.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                              <Clock size={13} />
                              {featured.readingTime || '5 min read'}
                            </span>
                          </div>

                          <h2 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {featured.title}
                          </h2>

                          <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {featured.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all">
                            Read article <ArrowRight size={15} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Post Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group block h-full">
                        <div className={`rounded-2xl overflow-hidden h-full transition-all duration-300 ${
                          darkMode
                            ? 'bg-white/[0.03] border border-white/[0.06] hover:border-blue-600/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.06)]'
                            : 'bg-white border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] hover:border-blue-200'
                        }`}>
                          {post.featuredImage && (
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              {post.category && (
                                <div className="absolute top-3 left-3">
                                  <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide">
                                    {post.category}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          <div className="p-6">
                            <div className="flex items-center gap-3 text-xs mb-3">
                              <span className={`flex items-center gap-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                <Calendar size={12} />
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </span>
                              <span className={`flex items-center gap-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                <Clock size={12} />
                                {post.readingTime || '5 min read'}
                              </span>
                            </div>

                            <h3 className={`text-lg font-bold mb-2.5 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors ${
                              darkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                              {post.title}
                            </h3>

                            <p className={`text-sm mb-4 line-clamp-2 leading-relaxed ${
                              darkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              {post.excerpt}
                            </p>

                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {post.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium ${
                                      darkMode ? 'bg-white/[0.06] text-slate-400' : 'bg-slate-100 text-slate-500'
                                    }`}
                                  >
                                    <Tag size={9} />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            <span className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold group-hover:gap-2.5 transition-all">
                              Read more <ArrowRight size={13} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

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
  ];
}

function getMockCategories() {
  return ['AI Agents', 'Automation', 'Machine Learning', 'Enterprise AI', 'Healthcare AI'];
}

export default BlogPage;
