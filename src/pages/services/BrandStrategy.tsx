import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users2, Lightbulb, TrendingUp, Heart, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Brand Development',
    description: 'Create a unique and memorable brand identity.'
  },
  {
    icon: Target,
    title: 'Market Positioning',
    description: 'Position your brand for maximum impact.'
  },
  {
    icon: Users2,
    title: 'Audience Research',
    description: 'Understand your target audience deeply.'
  },
  {
    icon: Heart,
    title: 'Brand Experience',
    description: 'Create meaningful connections with customers.'
  },
  {
    icon: MessageCircle,
    title: 'Brand Voice',
    description: 'Develop a consistent brand voice and messaging.'
  },
  {
    icon: TrendingUp,
    title: 'Brand Growth',
    description: 'Scale your brand presence and impact.'
  }
];

const BrandStrategy = () => {
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
              Brand Strategy Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build a strong, memorable brand that resonates with your audience
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

export default BrandStrategy;