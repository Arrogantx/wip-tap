import React from 'react';
import DashboardLayout from '../DashboardLayout';
import DashboardCard from '../DashboardCard';
import StatCard from '../StatCard';
import { 
  UsersIcon, 
  DocumentCheckIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Clients',
      value: 156,
      icon: UsersIcon,
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Active Projects',
      value: 32,
      icon: DocumentCheckIcon,
      trend: { value: 8, isPositive: true }
    },
    {
      title: 'Revenue',
      value: 85600,
      prefix: '$',
      icon: CurrencyDollarIcon,
      trend: { value: 15, isPositive: true }
    },
    {
      title: 'Conversion Rate',
      value: 64,
      suffix: '%',
      icon: ChartBarIcon,
      trend: { value: 5, isPositive: true }
    }
  ];

  return (
    <DashboardLayout 
      title="Admin Dashboard" 
      subtitle="Monitor and manage your client accounts"
    >
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <DashboardCard>
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            {/* Activity content */}
          </DashboardCard>

          {/* Quick Actions */}
          <DashboardCard>
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            {/* Actions content */}
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;