import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Zap } from 'lucide-react';
import CountUp from 'react-countup';

const features = [
  {
    icon: Shield,
    title: 'Data-Driven Approach',
    description: 'Make informed decisions with real-time analytics and actionable insights.'
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Over a decade of experience in digital marketing excellence.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your marketing needs.'
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description: 'Quick implementation and measurable outcomes.'
  }
];

const stats = [
  { value: 500, suffix: '+', label: 'Clients Worldwide' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 150, suffix: '%', label: 'Average ROI' },
  { value: 24, suffix: '/7', label: 'Support Available' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose OneTap Media?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise with cutting-edge technology to deliver 
            exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-primary-50 rounded-xl"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                <CountUp end={stat.value} duration={2.5} />
                {stat.suffix}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;