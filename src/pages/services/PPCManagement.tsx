import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart2, Users2, DollarSign, Search, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Targeted Campaigns',
    description: 'Reach your ideal customers with precision targeting.'
  },
  {
    icon: BarChart2,
    title: 'Performance Tracking',
    description: 'Real-time monitoring and optimization of campaign performance.'
  },
  {
    icon: DollarSign,
    title: 'ROI Optimization',
    description: 'Maximize return on ad spend with data-driven strategies.'
  },
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'Identify high-converting keywords for your campaigns.'
  },
  {
    icon: Users2,
    title: 'Audience Targeting',
    description: 'Reach the right audience at the right time.'
  },
  {
    icon: Zap,
    title: 'Quick Results',
    description: 'Generate immediate traffic and conversions.'
  }
];

const PPCManagement = () => {
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
              PPC Management Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Drive targeted traffic and maximize ROI with our expert PPC management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPCManagement;