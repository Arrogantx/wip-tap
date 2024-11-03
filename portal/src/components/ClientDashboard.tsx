import React from 'react';
import NotificationList from './client/NotificationList';
import QuickActions from './client/QuickActions';
import RecentActivity from './client/RecentActivity';
import { useAuthStore } from '../store/authStore';

export default function ClientDashboard() {
  const { user } = useAuthStore();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Client Dashboard</h1>
        <div className="text-sm text-gray-600">
          Welcome back, {user?.name}
        </div>
      </div>
      
      <div className="space-y-6">
        <NotificationList />
        <QuickActions />
        <RecentActivity />
      </div>
    </div>
  );
}