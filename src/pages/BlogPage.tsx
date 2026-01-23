import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  Search,
  TrendingUp,
  Home,
  DollarSign,
  Building
} from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: '2024 Real Estate Market Predictions',
      excerpt: 'Discover the latest trends and predictions for the real estate market in the coming year.',
      category: 'Market Trends',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      featured: true
    },
    {
      id: 2,
      title: 'First-Time Home Buyer Guide 2024',
      excerpt: 'Everything you need to know as a first-time home buyer in the current market.',
      category: 'Buyer Tips',
      author: 'Michael Chen',
      date: 'Dec 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      featured: true
    },
    {
      id: 3,
      title: 'Maximizing Property Value Before Selling',
      excerpt: 'Learn the best strategies to increase your property value before listing.',
      category: 'Seller Tips',
      author: 'Emily Rodriguez',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      featured: false
    },
    {
      id: 4,
      title: 'Investment Properties in Growing Neighborhoods',
      excerpt: 'Discover the top neighborhoods for real estate investment in 2024.',
      category: 'Investment',
      author: 'David Wilson',
      date: 'Nov 28, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      featured: false
    },
    {
      id: 5,
      title: 'Sustainable Home Features That Add Value',
      excerpt: 'Eco-friendly upgrades that increase property value and appeal.',
      category: 'Home Improvement',
      author: 'Jessica Lee',
      date: 'Nov 20, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
      featured: false
    },
    {
      id: 6,
      title: 'Understanding Mortgage Rates in 2024',
      excerpt: 'A comprehensive guide to current mortgage rates and trends.',
      category: 'Financing',
      author: 'Robert Kim',
      date: 'Nov 15, 2024',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      featured: false
    },
    {
      id: 7,
      title: 'Commercial Real Estate Opportunities',
      excerpt: 'Exploring the best opportunities in commercial real estate this year.',
      category: 'Commercial',
      author: 'David Wilson',
      date: 'Nov 10, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      featured: false
    },
    {
      id: 8,
      title: 'The Impact of Remote Work on Housing',
      excerpt: 'How remote work trends are reshaping the housing market.',
      category: 'Market Trends',
      author: 'Sarah Johnson',
      date: 'Nov 5, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      featured: false
    }
  ];

  const categories = [
    { name: 'All Articles', count: 24, icon: <Home className="w-4 h-4" /> },
    { name: 'Market Trends', count: 8, icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Buyer Tips', count: 6, icon: <User className="w-4 h-4" /> },
    { name: 'Seller Tips', count: 5, icon: <DollarSign className="w-4 h-4" /> },
    { name: 'Investment', count: 4, icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Financing', count: 3, icon: <DollarSign className="w-4 h-4" /> },
    { name: 'Commercial', count: 2, icon: <Building className="w-4 h-4" /> }
  ];

  const popularPosts = [
    { title: 'Top 10 Mistakes First-Time Buyers Make', views: '2.5K' },
    { title: '2024 Tax Benefits for Homeowners', views: '1.8K' },
    { title: 'Smart Home Technology ROI', views: '1.5K' },
    { title: 'Negotiation Strategies for Buyers', views: '1.2K' }
  ];

  return (
    <div className="min-h-screen">
      <NewNavbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Estate Insights & News</h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert advice, market updates, and valuable insights to guide your real estate journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{category.icon}</span>
                        <span>{category.name}</span>
                      </div>
                      <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                <h3 className="text-xl font-bold mb-6">Popular Articles</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                      <h4 className="font-medium mb-2 hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="text-sm text-gray-500">{post.views} views</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
                <p className="mb-4 text-blue-100">
                  Get the latest real estate insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.filter(post => post.featured).map((post) => (
                    <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                      <div className="h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
                            {post.category}
                          </span>
                          <span className="mx-4">•</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-1" />
                            <span className="mr-4">{post.author}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                            Read More <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Articles */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {blogPosts.filter(post => !post.featured).map((post) => (
                    <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="h-40">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="mx-3">•</span>
                          <span>{post.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-3 h-3 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <button className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-700">
                            Read <ArrowRight className="w-3 h-3 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Looking for Personalized Advice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to provide personalized guidance for your specific real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;