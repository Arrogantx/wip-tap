import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  suffix = '',
  prefix = '',
  icon: Icon,
  trend
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-200 hover:scale-105"
    >
      <div className="flex items-center justify-between">
        <div className="bg-primary-50 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        {trend && (
          <span className={`text-sm font-semibold ${
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.isPositive ? '+' : '-'}{trend.value}%
          </span>
        )}
      </div>
      <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
        {prefix}<CountUp end={value} duration={2.5} />{suffix}
      </h3>
      <p className="text-gray-600 text-sm mt-1">{title}</p>
    </motion.div>
  );
};

export default StatCard;