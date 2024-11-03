import React from 'react';
import { useNotificationStore } from '../../store/notificationStore';
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NotificationList() {
  const { notifications, removeNotification } = useNotificationStore();

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-4">
        <BellIcon className="h-6 w-6 text-gray-600" />
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg relative ${
              notification.type === 'info'
                ? 'bg-blue-50 text-blue-700'
                : notification.type === 'warning'
                ? 'bg-yellow-50 text-yellow-700'
                : notification.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            <button
              onClick={() => removeNotification(notification.id)}
              className="absolute top-2 right-2 hover:opacity-75"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            <p>{notification.message}</p>
            <span className="text-sm opacity-75 block mt-2">
              {new Date(notification.timestamp).toLocaleString()}
            </span>
          </div>
        ))}
        {notifications.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <BellIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No notifications</p>
          </div>
        )}
      </div>
    </section>
  );
}