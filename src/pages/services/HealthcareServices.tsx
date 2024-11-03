import React from 'react';
import { motion } from 'framer-motion';
import { Building, Heart, Activity, UserPlus, Search, Clipboard } from 'lucide-react';

const features = [
  {
    icon: Building,
    title: 'Medical Practice Marketing',
    description: 'Targeted strategies to grow your medical practice and attract new patients.'
  },
  {
    icon: Heart,
    title: 'Healthcare Branding',
    description: 'Build trust and recognition in your healthcare brand.'
  },
  {
    icon: Activity,
    title: 'Patient Engagement',
    description: 'Improve patient communication and satisfaction through digital channels.'
  },
  {
    icon: UserPlus,
    title: 'Patient Acquisition',
    description: 'Data-driven strategies to attract and retain more patients.'
  },
  {
    icon: Search,
    title: 'Medical SEO',
    description: 'Optimize your online presence for healthcare-specific searches.'
  },
  {
    icon: Clipboard,
    title: 'Content Marketing',
    description: 'Educational content that builds authority in healthcare.'
  }
];

const HealthcareServices = () => {
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
              Healthcare Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized digital marketing strategies for healthcare providers
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

export default HealthcareServices;