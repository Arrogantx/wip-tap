import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, Users2, Megaphone, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Boost your search rankings and organic traffic with data-driven SEO strategies.',
    link: '/services/seo'
  },
  {
    icon: Target,
    title: 'PPC Management',
    description: 'Maximize ROI with targeted paid advertising campaigns across multiple platforms.',
    link: '/services/ppc'
  },
  {
    icon: Users2,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage your audience on social platforms.',
    link: '/services/social-media'
  },
  {
    icon: Megaphone,
    title: 'Content Marketing',
    description: 'Create compelling content that drives engagement and conversions.',
    link: '/services/content-marketing'
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    description: 'Get actionable insights with comprehensive performance tracking.',
    link: '/services/analytics'
  },
  {
    icon: Lightbulb,
    title: 'Brand Strategy',
    description: 'Develop a strong brand identity and marketing strategy.',
    link: '/services/brand-strategy'
  }
];

const Services = () => {
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
              Digital Marketing Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive solutions to help your business grow in the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Schedule a free consultation to discuss your digital marketing needs.
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Book Your Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
  >
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to={link}
      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
    >
      Learn More →
    </Link>
  </motion.div>
);

export default Services;