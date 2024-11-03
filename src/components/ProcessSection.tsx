import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, BarChart2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your business goals, target audience, and current digital presence.'
  },
  {
    icon: PenTool,
    title: 'Strategy',
    description: 'Our team develops a customized digital marketing strategy aligned with your objectives.'
  },
  {
    icon: BarChart2,
    title: 'Implementation',
    description: 'We execute the strategy using industry-leading tools and best practices.'
  },
  {
    icon: Rocket,
    title: 'Optimization',
    description: 'Continuous monitoring and optimization to maximize your ROI.'
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach to achieving your digital marketing goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-100 transform -translate-y-1/2">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-primary-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;