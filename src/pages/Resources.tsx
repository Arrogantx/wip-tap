import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Play, Download, ArrowRight } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Marketing Resources & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert guides, tutorials, and tools to help you succeed
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                Browse Resources
              </button>
              <button className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest marketing trends and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get the latest marketing insights delivered straight to your inbox
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="px-8 py-3 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const resources = [
  {
    icon: BookOpen,
    title: 'Marketing Guides',
    description: 'In-depth guides on digital marketing strategies.',
    items: ['SEO Guide', 'Social Media Playbook', 'Content Marketing 101']
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real success stories from our clients.',
    items: ['E-commerce Growth', 'B2B Lead Generation', 'Brand Awareness']
  },
  {
    icon: Play,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides and webinars.',
    items: ['SEO Basics', 'PPC Masterclass', 'Analytics Guide']
  },
  {
    icon: Download,
    title: 'Templates',
    description: 'Ready-to-use marketing templates.',
    items: ['Content Calendar', 'SEO Checklist', 'Social Media Plan']
  }
];

const blogPosts = [
  {
    title: '10 SEO Trends for 2024',
    excerpt: 'Discover the latest SEO strategies that will dominate the digital landscape.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'SEO'
  },
  {
    title: 'Social Media Marketing Guide',
    excerpt: 'Learn how to create engaging social media campaigns that convert.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    category: 'Social Media'
  },
  {
    title: 'Content Marketing Strategy',
    excerpt: 'Build a content strategy that drives traffic and engagement.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    category: 'Content'
  }
];

const ResourceCard = ({ icon: Icon, title, description, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
  >
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-center text-primary-600 hover:text-primary-700">
          <ArrowRight className="w-4 h-4 mr-2" />
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </motion.div>
);

const BlogCard = ({ title, excerpt, image, category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden"
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48"
      />
    </div>
    <div className="p-6">
      <div className="text-sm font-medium text-primary-600 mb-2">{category}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <a href="#" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
        Read More
        <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  </motion.div>
);

export default Resources;