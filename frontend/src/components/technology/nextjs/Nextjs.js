'use client';
import Image from 'next/image';
import Link from 'next/link';

// Sample data with placeholder images from Unsplash
const featuredArticles = [
  {
    id: 1,
    title: "The Future of AI: How Machine Learning is Transforming Industries",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing various sectors.",
    imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: "Artificial Intelligence",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    publishDate: "Apr 2, 2025",
    readTime: 8
  },
  {
    id: 2,
    title: "5G Technology: The New Era of Connectivity",
    excerpt: "Discover how 5G networks are changing the way we connect and communicate.",
    imageSrc: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    category: "Networking",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    publishDate: "Apr 1, 2025",
    readTime: 6
  },
  {
    id: 3,
    title: "Blockchain Beyond Cryptocurrency",
    excerpt: "Blockchain technology in real-world applications beyond digital currencies.",
    imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    category: "Blockchain",
    author: {
      name: "Michael Rivera",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    publishDate: "Mar 30, 2025",
    readTime: 7
  }
];

const categories = [
  { id: 1, name: "AI", slug: "ai", icon: "🤖", articleCount: 42 },
  { id: 2, name: "Cybersecurity", slug: "cybersecurity", icon: "🔒", articleCount: 38 },
  { id: 3, name: "Cloud", slug: "cloud-computing", icon: "☁️", articleCount: 31 },
  { id: 4, name: "Blockchain", slug: "blockchain", icon: "⛓️", articleCount: 27 },
  { id: 5, name: "Mobile", slug: "mobile", icon: "📱", articleCount: 45 },
  { id: 6, name: "IoT", slug: "iot", icon: "🌐", articleCount: 24 },
  { id: 7, name: "VR", slug: "vr", icon: "🥽", articleCount: 18 },
  { id: 8, name: "Data", slug: "data-science", icon: "📊", articleCount: 33 }
];

const latestNews = [
  {
    id: 1,
    title: "Apple Reveals Revolutionary Chip Architecture",
    excerpt: "Breakthrough semiconductor design with double performance and half the power.",
    imageSrc: "https://images.unsplash.com/photo-1591238371732-d75eb8d00f38?w=600&h=400&fit=crop",
    category: "Hardware",
    author: { name: "David Kim", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    publishDate: "Apr 5, 2025"
  },
  {
    id: 2,
    title: "EU Passes Landmark Privacy Law",
    excerpt: "New rules to transform data usage across international tech companies.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    category: "Policy",
    author: { name: "Elena Petrova", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
    publishDate: "Apr 4, 2025"
  },
  {
    id: 3,
    title: "Quantum Computing Hits 500 Qubits",
    excerpt: "Quantum systems solve previously impossible problems.",
    imageSrc: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    category: "Quantum Computing",
    author: { name: "Robert Chang", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
    publishDate: "Apr 3, 2025"
  },
  {
    id: 4,
    title: "Microsoft & Google Team Up on Open AI",
    excerpt: "A new open-source platform for safe, scalable AI dev.",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    category: "Artificial Intelligence",
    author: { name: "Jasmine Williams", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop" },
    publishDate: "Apr 2, 2025"
  }
];

export default function Nextjs() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-64 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Latest Tech News & Innovations</h1>
            <p className="text-xl mb-6">Stay updated with cutting-edge technology news, reviews, and insights from industry experts.</p>
            <div className="flex space-x-4">
              <Link href="/subscribe" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-medium transition">Subscribe Now</Link>
              <Link href="/technology" className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition">Explore News</Link>
            </div>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src={featuredArticles[0].imageSrc} 
              alt="Latest Technology" 
              fill 
              className="object-cover" 
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Featured Articles</h2>
            <Link href="/articles" className="text-blue-600 hover:text-blue-800 font-medium">View All Articles →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition">
                <div className="relative h-48 w-full">
                  <Image 
                    src={article.imageSrc} 
                    alt={article.title} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase">{article.category}</span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-800 line-clamp-2">{article.title}</h3>
                  <p className="mt-3 text-gray-600 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                      <Image 
                        src={article.author.avatar} 
                        alt={article.author.name} 
                        fill 
                        className="object-cover rounded-full"
                        unoptimized
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                      <div className="flex space-x-1 text-xs text-gray-500">
                        <time dateTime={article.publishDate}>{article.publishDate}</time>
                        <span>•</span>
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Explore By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="bg-white rounded-xl p-6 shadow text-center hover:shadow-md transition group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{cat.articleCount} Articles</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Tech Trends</h2>
          <p className="text-lg mb-8 text-blue-100">Get the latest tech news delivered straight to your inbox.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition">
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4 text-blue-200">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">View All News →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <div key={news.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="md:w-1/3 relative h-48 md:h-auto w-full rounded-lg overflow-hidden min-h-[180px]">
                  <Image 
                    src={news.imageSrc} 
                    alt={news.title} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="md:w-2/3">
                  <span className="text-xs font-semibold text-blue-600 uppercase">{news.category}</span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-800">{news.title}</h3>
                  <p className="mt-3 text-gray-600">{news.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                        <Image 
                          src={news.author.avatar} 
                          alt={news.author.name} 
                          fill 
                          className="object-cover rounded-full"
                          unoptimized
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{news.author.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{news.publishDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}