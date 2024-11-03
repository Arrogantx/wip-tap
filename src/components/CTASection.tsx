import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Schedule a free consultation with our digital marketing experts and discover 
              how we can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-primary-700 transition-colors">
                View Pricing
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Request a Free Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-colors">
                    <option value="">Select Service</option>
                    <option value="seo">SEO Services</option>
                    <option value="ppc">PPC Management</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;