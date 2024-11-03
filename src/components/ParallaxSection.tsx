import React from 'react';
import { Parallax } from 'react-scroll-parallax';

interface ParallaxSectionProps {
  imageUrl: string;
  children: React.ReactNode;
  height?: string;
  overlay?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  imageUrl, 
  children, 
  height = 'h-[600px]',
  overlay = true 
}) => {
  return (
    <div className={`relative ${height} overflow-hidden`}>
      <Parallax
        translateY={[-20, 20]}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {overlay && (
          <div className="absolute inset-0 bg-black/50" />
        )}
      </Parallax>
      <div className="relative h-full z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;