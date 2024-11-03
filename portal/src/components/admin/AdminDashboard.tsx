import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import NotificationPanel from './NotificationPanel';
import ContentEditor from './ContentEditor';
import ClientManagement from './ClientManagement';
import FeatureControl from './FeatureControl';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

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
              Admin Dashboard
            </h1>
            <p className="mt-1 text-gray-600">
              Manage your clients and platform features from one place.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <NotificationPanel />
            <ContentEditor />
          </div>
          <FeatureControl />
          <ClientManagement />
        </div>
      </div>
    </div>
  );
}