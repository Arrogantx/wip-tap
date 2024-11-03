import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-commerce Revenue Growth',
    client: 'Fashion Retailer',
    stats: '+245% Revenue',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
  },
  {
    title: 'B2B Lead Generation',
    client: 'SaaS Company',
    stats: '+180% Leads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Brand Awareness Campaign',
    client: 'Startup',
    stats: '+320% Engagement',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80'
  }
];

const CaseStudies = () => {
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results for real businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={study.image}
                  alt={study.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-medium mb-2">{study.client}</div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <div className="text-primary-400 font-bold mb-4">{study.stats}</div>
                <button className="inline-flex items-center text-white hover:text-primary-400 transition-colors">
                  View Case Study
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;