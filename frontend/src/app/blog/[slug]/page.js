'use client';

import React, { useState, useEffect, use } from 'react';
import { getBlogBySlug, getBlogs } from '@/lib/api';
import { marked } from 'marked';
import BlogPostClient from './BlogPostClient';
import { useTheme } from '@/context/ThemeContext';

const BlogPost = ({ params }) => {
  const { slug } = use(params);
  const { darkMode } = useTheme();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getBlogBySlug(slug);

      if (!data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const readingTime = `${Math.ceil((data.content?.length || 0) / 1500)} min read`;
      const htmlContent = marked(data.content || '');

      setPost({
        title: data.title,
        slug: data.slug,
        content: htmlContent,
        excerpt: data.excerpt,
        featuredImage: data.image,
        author: data.author?.name || 'BeonicX Team',
        category: data.categories?.[0] || '',
        categories: data.categories || [],
        tags: data.tags || [],
        publishedAt: data.createdAt,
        readingTime,
      });

      const allPosts = await getBlogs();
      if (allPosts && allPosts.length > 0) {
        const related = allPosts
          .filter(p => p.slug !== slug)
          .slice(0, 3)
          .map(p => ({
            slug: p.slug,
            title: p.title,
            excerpt: p.excerpt,
            featuredImage: p.image,
            category: p.categories?.[0] || '',
          }));
        setRelatedPosts(related);
      }

      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className={`min-h-[60vh] flex items-center justify-center ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
          <span className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Loading article...</span>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className={`min-h-[60vh] flex items-center justify-center ${darkMode ? 'bg-[#030712]' : 'bg-white'}`}>
        <div className="text-center">
          <h1 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Post Not Found
          </h1>
          <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <BlogPostClient
      post={post}
      relatedPosts={relatedPosts}
      slug={slug}
    />
  );
};

export default BlogPost;
