import React from 'react';
import DashboardLayout from '../DashboardLayout';
import DashboardCard from '../DashboardCard';
import StatCard from '../StatCard';
import { 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';

const ClientDashboard = () => {
  const stats = [
    {
      title: 'Active Projects',
      value: 3,
      icon: ChartBarIcon,
      trend: { value: 2, isPositive: true }
    },
    {
      title: 'Project Hours',
      value: 164,
      icon: ClockIcon,
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Completed Tasks',
      value: 48,
      icon: CheckCircleIcon,
      trend: { value: 8, isPositive: true }
    },
    {
      title: 'Growth Rate',
      value: 24.8,
      suffix: '%',
      icon: ArrowTrendingUpIcon,
      trend: { value: 4, isPositive: true }
    }
  ];

  return (
    <DashboardLayout 
      title="Welcome back!" 
      subtitle="Here's what's happening with your projects today"
    >
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects Overview */}
          <div className="lg:col-span-2">
            <DashboardCard>
              <h3 className="text-lg font-semibold mb-4">Projects Overview</h3>
              {/* Projects content */}
            </DashboardCard>
          </div>

          {/* Notifications */}
          <DashboardCard>
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            {/* Notifications content */}
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientDashboard;