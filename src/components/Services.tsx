import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MousePointerClick, 
  Share2, 
  PenTool, 
  BarChart, 
  Briefcase 
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Boost your online visibility and rank higher in search results.',
    link: '/services/seo'
  },
  {
    icon: MousePointerClick,
    title: 'PPC Management',
    description: 'Maximize ROI with targeted paid advertising campaigns.',
    link: '/services/ppc'
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Engage your audience across all social platforms.',
    link: '/services/social-media'
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description: 'Create compelling content that drives conversions.',
    link: '/services/content-marketing'
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Data-driven insights to optimize your marketing strategy.',
    link: '/services/analytics'
  },
  {
    icon: Briefcase,
    title: 'Brand Strategy',
    description: 'Build a strong, memorable brand identity.',
    link: '/services/brand-strategy'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <div className="text-center">
                <a
                  href={service.link}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;