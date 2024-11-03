import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, Target, Award, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'Target the right keywords with high search intent and conversion potential.'
  },
  {
    icon: BarChart2,
    title: 'Technical SEO',
    description: 'Optimize your website structure and performance for better rankings.'
  },
  {
    icon: Target,
    title: 'On-Page SEO',
    description: 'Optimize your content and meta elements for maximum visibility.'
  },
  {
    icon: Award,
    title: 'Link Building',
    description: 'Build high-quality backlinks to boost your domain authority.'
  },
  {
    icon: Users,
    title: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers.'
  },
  {
    icon: Globe,
    title: 'Content Strategy',
    description: 'Create SEO-optimized content that engages and converts.'
  }
];

const process = [
  {
    title: 'Audit',
    description: 'Comprehensive analysis of your current SEO performance.'
  },
  {
    title: 'Strategy',
    description: 'Develop a customized SEO roadmap for your business.'
  },
  {
    title: 'Optimize',
    description: 'Implement technical and on-page optimizations.'
  },
  {
    title: 'Scale',
    description: 'Monitor, adjust, and scale successful strategies.'
  }
];

const results = [
  {
    metric: '+150%',
    label: 'Organic Traffic',
    description: 'Increase in monthly organic visitors'
  },
  {
    metric: '#1',
    label: 'Rankings',
    description: 'For primary target keywords'
  },
  {
    metric: '+200%',
    label: 'Conversions',
    description: 'Growth in organic conversions'
  }
];

const SEOServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                SEO Services That Drive <span className="text-primary-600">Real Results</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Boost your search rankings and organic traffic with our data-driven SEO strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="SEO Analytics Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Comprehensive SEO Solutions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to dominate search rankings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology for sustainable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Real Results</h2>
            <p className="text-xl text-gray-600">
              See what we have achieved for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <ResultCard key={index} {...result} index={index} />
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
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free SEO audit and discover how we can help you achieve your goals.
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Get Your Free SEO Audit
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
  >
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ProcessStep = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="text-center"
  >
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ResultCard = ({ metric, label, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="text-center p-8 bg-primary-50 rounded-xl"
  >
    <div className="text-4xl font-bold text-primary-600 mb-2">{metric}</div>
    <div className="text-xl font-semibold mb-2">{label}</div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default SEOServices;