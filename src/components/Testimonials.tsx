import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'OneTap Media transformed our digital presence. Their data-driven approach led to a 150% increase in our online engagement.'
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'The results speak for themselves. Our conversion rates doubled within the first three months of working with OneTap.'
  },
  {
    name: 'Emma Davis',
    role: 'E-commerce Manager',
    company: 'RetailPlus',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    content: 'Their innovative strategies and attention to detail have made them an invaluable partner in our digital growth journey.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600">Hear from our satisfied clients</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, company, image, content, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="bg-white p-8 rounded-2xl shadow-lg relative"
  >
    <Quote className="absolute top-4 right-4 text-primary-100" size={40} />
    <div className="flex items-center mb-6">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role} at {company}</p>
      </div>
    </div>
    <p className="text-gray-600 mb-6">{content}</p>
    <div className="flex text-primary-500">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  </motion.div>
);

export default Testimonials;