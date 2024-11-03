import React from 'react';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-xl shadow-lg p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DashboardCard;