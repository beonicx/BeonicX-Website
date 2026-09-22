'use client';

import React, { useState, useEffect, use } from 'react';
import { getBlogBySlug, getBlogs } from '@/lib/api';
import { marked } from 'marked';
import BlogPostClient from './BlogPostClient';

const BlogPost = ({ params }) => {
  const { slug } = use(params);
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-slate-600">The blog post you're looking for doesn't exist.</p>
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
