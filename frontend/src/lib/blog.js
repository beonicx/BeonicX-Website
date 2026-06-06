// Blog data management
// This uses static JSON for now. Can be replaced with MongoDB/PostgreSQL/Contentful later.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

// Ensure directory exists
if (!fs.existsSync(BLOG_DIRECTORY)) {
  try {
    fs.mkdirSync(BLOG_DIRECTORY, { recursive: true });
  } catch (err) {
    console.error('Could not create blog directory:', err);
  }
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts() {
  try {
    if (!fs.existsSync(BLOG_DIRECTORY)) {
      return [];
    }

    const fileNames = fs.readdirSync(BLOG_DIRECTORY);

    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(BLOG_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          content,
          ...data,
        };
      });

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.date);
      const dateB = new Date(b.publishedAt || b.date);
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

/**
 * Get single post by slug
 */
export function getPostBySlug(slug) {
  try {
    const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category) {
  const allPosts = getAllPosts();
  return allPosts.filter(post =>
    post.category?.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag) {
  const allPosts = getAllPosts();
  return allPosts.filter(post =>
    post.tags && post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories
 */
export function getAllCategories() {
  const allPosts = getAllPosts();
  const categories = new Set();

  allPosts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });

  return Array.from(categories);
}

/**
 * Get all unique tags
 */
export function getAllTags() {
  const allPosts = getAllPosts();
  const tags = new Set();

  allPosts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });

  return Array.from(tags);
}

/**
 * Get related posts based on category and tags
 */
export function getRelatedPosts(slug, limit = 3) {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();

  // Calculate relevance score
  const postsWithScore = allPosts
    .filter(post => post.slug !== slug)
    .map(post => {
      let score = 0;

      // Same category = +5 points
      if (post.category === currentPost.category) {
        score += 5;
      }

      // Shared tags = +1 point per tag
      if (currentPost.tags && post.tags) {
        const sharedTags = currentPost.tags.filter(tag =>
          post.tags.includes(tag)
        );
        score += sharedTags.length;
      }

      return { ...post, relevanceScore: score };
    })
    .filter(post => post.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);

  return postsWithScore;
}

/**
 * Search posts by title or excerpt
 */
export function searchPosts(query) {
  const allPosts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();

  return allPosts.filter(post =>
    post.title?.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt?.toLowerCase().includes(lowercaseQuery) ||
    post.content?.toLowerCase().includes(lowercaseQuery)
  );
}

/**
 * Generate reading time estimate
 */
export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}
