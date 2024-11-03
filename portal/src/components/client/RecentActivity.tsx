import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

interface Activity {
  id: string;
  title: string;
  timestamp: string;
  type: 'profile' | 'document' | 'billing' | 'support';
}

export default function RecentActivity() {
  const activities: Activity[] = [
    {
      id: '1',
      title: 'Profile Updated',
      timestamp: '2 days ago',
      type: 'profile',
    },
    {
      id: '2',
      title: 'Document Uploaded',
      timestamp: '5 days ago',
      type: 'document',
    },
    {
      id: '3',
      title: 'Support Ticket Created',
      timestamp: '1 week ago',
      type: 'support',
    },
  ];

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'profile': return 'blue';
      case 'document': return 'green';
      case 'billing': return 'yellow';
      case 'support': return 'purple';
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-4">
        <ClockIcon className="h-6 w-6 text-gray-600" />
        <h2 className="text-xl font-semibold">Recent Activity</h2>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`border-l-4 border-${getActivityColor(activity.type)}-500 pl-4`}
          >
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-gray-500">{activity.timestamp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}