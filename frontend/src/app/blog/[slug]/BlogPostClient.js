'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import Navbar from '@/layouts/navbar/Navbar';
import Footer from '@/layouts/footer/Footer';

const BlogPostClient = ({ post, relatedPosts, slug }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const sharePost = (platform) => {
    const url = `https://beonicx.com/blog/${slug}`;
    const title = post.title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      <article className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className={`relative py-12 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="container mx-auto max-w-4xl">
            <Link
              href="/blog"
              className={`inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            {post.category && (
              <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                {post.category}
              </div>
            )}

            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Calendar size={16} />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Clock size={16} />
                <span>{post.readingTime}</span>
              </div>
              {post.author && (
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span>By <span className="font-medium">{post.author}</span></span>
                </div>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {post.featuredImage && (
          <div className="container mx-auto max-w-4xl px-4 py-8">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        )}

        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className={`prose prose-lg max-w-none ${
            darkMode
              ? 'prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-code:text-blue-400'
              : 'prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600'
          }`}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <Share2 size={20} />
              Share this article
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => sharePost('twitter')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <Twitter size={18} />
                Twitter
              </button>
              <button
                onClick={() => sharePost('facebook')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              >
                <Facebook size={18} />
                Facebook
              </button>
              <button
                onClick={() => sharePost('linkedin')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Linkedin size={18} />
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="container mx-auto max-w-6xl px-4">
              <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50'
                    }`}
                  >
                    {relatedPost.featuredImage && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {relatedPost.category && (
                        <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                          {relatedPost.category}
                        </div>
                      )}
                      <h3 className={`text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {relatedPost.title}
                      </h3>
                      <p className={`text-sm line-clamp-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default BlogPostClient;
