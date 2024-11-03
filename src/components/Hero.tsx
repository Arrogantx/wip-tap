import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-primary-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-8 mx-auto">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">Revolutionizing Digital Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Transform Your <span className="text-primary-400">Digital Presence</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Elevate your brand with data-driven strategies and cutting-edge technology. We turn clicks into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                Get Started
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors">
                View Our Work
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 max-w-lg mx-auto">
              <Stat icon={Globe} value="500+" label="Global Clients" />
              <Stat icon={Rocket} value="98%" label="Success Rate" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary-500/20 to-transparent rounded-full" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-primary-500/20 to-transparent rounded-full" />
      </div>
    </section>
  );
};

const Stat = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
      <Icon size={24} className="text-white" />
    </div>
    <div className="text-white text-left">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-200">{label}</div>
    </div>
  </div>
);

export default Hero;