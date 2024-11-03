import React from 'react';
import { Stethoscope } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon = Stethoscope 
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;