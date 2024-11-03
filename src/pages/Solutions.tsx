import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Building, ShoppingBag, Rocket, Laptop } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'Custom solutions for large-scale organizations.',
    link: '/solutions/enterprise'
  },
  {
    icon: Briefcase,
    title: 'Small Business',
    description: 'Affordable marketing solutions for growing businesses.',
    link: '/solutions/small-business'
  },
  {
    icon: Building,
    title: 'Medical Practices',
    description: 'Specialized marketing for healthcare providers.',
    link: '/solutions/healthcare'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Drive sales and grow your online store.',
    link: '/solutions/ecommerce'
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Launch and scale your startup quickly.',
    link: '/solutions/startups'
  },
  {
    icon: Laptop,
    title: 'SaaS',
    description: 'Acquire and retain customers for your SaaS product.',
    link: '/solutions/saas'
  }
];

const caseStudies = [
  {
    title: 'Healthcare Provider',
    result: '150% increase in patient inquiries',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
  },
  {
    title: 'E-commerce Brand',
    result: '200% boost in online sales',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'SaaS Company',
    result: '300% growth in subscriptions',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80'
  }
];

const Solutions = () => {
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
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tailored digital marketing strategies for your industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how we've helped businesses in your industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const IndustryCard = ({ icon: Icon, title, description, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
  >
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} className="text-primary-600 hover:text-primary-700 font-medium">
      Learn More →
    </a>
  </motion.div>
);

const CaseStudyCard = ({ title, result, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl"
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-primary-200">{result}</p>
    </div>
  </motion.div>
);

export default Solutions;