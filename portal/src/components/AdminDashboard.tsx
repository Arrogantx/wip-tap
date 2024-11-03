import React from 'react';
import NotificationPanel from './admin/NotificationPanel';
import ContentEditor from './admin/ContentEditor';
import ClientManagement from './admin/ClientManagement';
import { useAuthStore } from '../store/authStore';

export default function AdminDashboard() {
  const { user } = useAuthStore();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="text-sm text-gray-600">
          Welcome back, {user?.name}
        </div>
      </div>
      
      <div className="space-y-6">
        <NotificationPanel />
        <ContentEditor />
        <ClientManagement />
      </div>
    </div>
  );
}