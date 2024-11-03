import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, BarChart2, Target, Users } from 'lucide-react';

const ParallaxShowcase = () => {
  return (
    <section className="relative">
      {/* First Parallax Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </Parallax>
        <div className="relative h-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Data-Driven Marketing Solutions
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Transform your business with actionable insights and proven strategies that deliver measurable results.
              </p>
              <div className="flex space-x-4">
                <StatsCard icon={BarChart2} value="250%" label="Average ROI" />
                <StatsCard icon={Users} value="10k+" label="Clients Served" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Parallax Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Parallax translateY={[-15, 15]} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />
        </Parallax>
        <div className="relative h-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Strategic Growth Partners
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                We work alongside your team to develop and implement strategies that drive sustainable growth.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                View Our Process
                <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Third Parallax Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Parallax translateY={[-25, 25]} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920)',
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </Parallax>
        <div className="relative h-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Join hundreds of businesses that have achieved exceptional growth with our digital marketing expertise.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon: Icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
    <div className="flex items-center space-x-3">
      <Icon className="text-primary-400" size={24} />
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </div>
  </div>
);

export default ParallaxShowcase;