import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Industrial Automation',
      excerpt: 'Exploring the latest trends in industrial automation and how they\'re shaping manufacturing.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      author: 'John Smith',
      date: 'March 15, 2025',
      category: 'Industry Trends'
    },
    {
      id: 2,
      title: 'Safety First: Essential PPE Guidelines',
      excerpt: 'A comprehensive guide to personal protective equipment in industrial settings.',
      image: 'https://images.unsplash.com/photo-1587425988139-ea7519fd1a33?auto=format&fit=crop&q=80',
      author: 'Sarah Johnson',
      date: 'March 10, 2025',
      category: 'Safety'
    },
    {
      id: 3,
      title: 'Choosing the Right Power Tools',
      excerpt: 'Expert tips on selecting the best power tools for your industrial projects.',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80',
      author: 'Mike Wilson',
      date: 'March 5, 2025',
      category: 'Tools'
    },
    {
      id: 4,
      title: 'Sustainable Manufacturing Practices',
      excerpt: 'How to implement eco-friendly practices in your industrial operations.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      author: 'Emily Brown',
      date: 'March 1, 2025',
      category: 'Sustainability'
    },
    {
      id: 5,
      title: 'Maintenance Tips for Industrial Equipment',
      excerpt: 'Essential maintenance practices to extend the life of your industrial equipment.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80',
      author: 'David Lee',
      date: 'February 25, 2025',
      category: 'Maintenance'
    },
    {
      id: 6,
      title: 'Industry 4.0: Digital Transformation',
      excerpt: 'Understanding the impact of digital transformation in industrial operations.',
      image: 'https://images.unsplash.com/photo-1581091226825-c6a89f4742a5?auto=format&fit=crop&q=80',
      author: 'Lisa Chen',
      date: 'February 20, 2025',
      category: 'Technology'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Industrial Insights Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest industry news, tips, and best practices
            in the industrial supply and equipment sector.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-blue-600 mb-2">{posts[0].category}</div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{posts[0].author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{posts[0].date}</span>
                </div>
                <button className="text-blue-600 font-semibold inline-flex items-center">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map(post => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <button className="text-blue-600 font-semibold inline-flex items-center">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for the latest industry insights and updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;