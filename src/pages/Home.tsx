import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Partners from '../components/Partners';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import LeadPopup from '../components/LeadPopup';
import ParallaxShowcase from '../components/ParallaxShowcase';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Partners />
      <Services />
      <ParallaxShowcase />
      <WhyChooseUs />
      <ProcessSection />
      <CaseStudies />
      <Testimonials />
      <CTASection />
      <LeadPopup />
    </div>
  );
};

export default Home;