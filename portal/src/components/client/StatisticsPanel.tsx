import React from 'react';
import { ChartBarIcon, ArrowTrendingUpIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Statistic {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: typeof ChartBarIcon;
}

export default function StatisticsPanel() {
  const stats: Statistic[] = [
    {
      id: '1',
      title: 'Active Projects',
      value: '12',
      change: '+2.5%',
      trend: 'up',
      icon: ChartBarIcon,
    },
    {
      id: '2',
      title: 'Project Hours',
      value: '164',
      change: '+12.3%',
      trend: 'up',
      icon: ClockIcon,
    },
    {
      id: '3',
      title: 'Completed Tasks',
      value: '48',
      change: '+8.2%',
      trend: 'up',
      icon: CheckCircleIcon,
    },
    {
      id: '4',
      title: 'Growth Rate',
      value: '24.8%',
      change: '+4.1%',
      trend: 'up',
      icon: ArrowTrendingUpIcon,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <div className="bg-indigo-50 p-3 rounded-lg">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <span className={`text-sm font-semibold ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{stat.title}</p>
          </div>
        );
      })}
    </section>
  );
}