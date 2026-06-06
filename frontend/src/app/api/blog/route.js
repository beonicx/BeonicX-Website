import { NextResponse } from 'next/server';

// Mock blog data - Replace with database queries
const mockPosts = [
  {
    slug: 'ai-agents-enterprise-automation',
    title: 'How AI Agents Transform Enterprise Automation',
    excerpt: 'Discover how autonomous AI agents are revolutionizing enterprise workflows and increasing productivity by 10x through intelligent automation.',
    category: 'AI Agents',
    tags: ['AI Agents', 'Automation', 'Enterprise', 'Productivity'],
    publishedAt: '2026-06-01T10:00:00Z',
    author: 'BeonicX Team',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    readingTime: '8 min read',
  },
  {
    slug: 'rag-implementation-guide',
    title: 'RAG for Enterprise: Complete Implementation Guide',
    excerpt: 'Learn how to build production-ready RAG systems for your enterprise with vector databases, embeddings, and best practices.',
    category: 'RAG',
    tags: ['RAG', 'LLM', 'Enterprise AI', 'Vector Database'],
    publishedAt: '2026-05-28T10:00:00Z',
    author: 'BeonicX Team',
    featuredImage: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=600&fit=crop',
    readingTime: '12 min read',
  },
  {
    slug: 'ai-healthcare-hipaa-compliance',
    title: 'AI Agents in Healthcare: HIPAA Compliance Guide',
    excerpt: 'Essential guide to implementing HIPAA-compliant AI agents in healthcare settings with security best practices and regulatory requirements.',
    category: 'Healthcare AI',
    tags: ['Healthcare', 'HIPAA', 'Compliance', 'AI Agents'],
    publishedAt: '2026-05-25T10:00:00Z',
    author: 'BeonicX Team',
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    readingTime: '10 min read',
  },
  {
    slug: 'generative-ai-business-beyond-chatgpt',
    title: 'Generative AI for Business: Beyond ChatGPT',
    excerpt: 'Explore enterprise applications of generative AI beyond chatbots including content generation, code synthesis, and process automation.',
    category: 'Generative AI',
    tags: ['Generative AI', 'ChatGPT', 'Enterprise', 'LLM'],
    publishedAt: '2026-05-20T10:00:00Z',
    author: 'BeonicX Team',
    featuredImage: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=600&fit=crop',
    readingTime: '9 min read',
  },
  {
    slug: 'ai-fraud-detection-real-time',
    title: 'AI for Fraud Detection: Real-Time Prevention',
    excerpt: 'Implement real-time fraud detection systems using AI agents and machine learning to protect your financial operations.',
    category: 'Finance AI',
    tags: ['Finance', 'Fraud Detection', 'Machine Learning', 'Security'],
    publishedAt: '2026-05-15T10:00:00Z',
    author: 'BeonicX Team',
    featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    readingTime: '11 min read',
  },
];

const mockCategories = [
  'AI Agents',
  'RAG',
  'Healthcare AI',
  'Finance AI',
  'Generative AI',
  'E-commerce AI',
  'Automation',
  'Machine Learning',
];

const mockTags = [
  'AI Agents',
  'Automation',
  'Enterprise',
  'RAG',
  'LLM',
  'Healthcare',
  'HIPAA',
  'Finance',
  'Fraud Detection',
  'Generative AI',
  'ChatGPT',
  'Machine Learning',
  'Security',
  'Compliance',
];

export async function GET() {
  try {
    // In production, fetch from database
    // const posts = await db.posts.findMany({ orderBy: { publishedAt: 'desc' } });

    return NextResponse.json({
      success: true,
      posts: mockPosts,
      categories: mockCategories,
      tags: mockTags,
      total: mockPosts.length,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
