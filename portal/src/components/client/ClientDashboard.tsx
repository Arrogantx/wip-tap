import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import StatisticsPanel from './StatisticsPanel';
import ProjectsList from './ProjectsList';
import NotificationList from './NotificationList';
import QuickActions from './QuickActions';
import { useFeatureStore } from '../../store/featureStore';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function ClientDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { features } = useFeatureStore();

  const showAnalytics = features.find(f => f.id === 'analytics')?.enabled;
  const showNotifications = features.find(f => f.id === 'notifications')?.enabled;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              Welcome back, {user?.name}
            </h1>
            <p className="mt-1 text-gray-600">
              Here's what's happening with your projects today.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Logout
          </button>
        </div>

        <div className="space-y-8">
          {showAnalytics && <StatisticsPanel />}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProjectsList />
            </div>
            <div className="space-y-8">
              {showNotifications && <NotificationList />}
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}