import React, { useState } from 'react';
import { useNotificationStore } from '../../store/notificationStore';
import toast from 'react-hot-toast';

export default function NotificationPanel() {
  const [newNotification, setNewNotification] = useState('');
  const [notificationType, setNotificationType] = useState<'info' | 'warning' | 'success' | 'error'>('info');
  const { addNotification } = useNotificationStore();

  const handleSendNotification = () => {
    if (newNotification.trim()) {
      addNotification({
        message: newNotification,
        type: notificationType,
      });
      toast.success('Notification sent successfully');
      setNewNotification('');
    }
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Send Notification</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notification Type
          </label>
          <select
            value={notificationType}
            onChange={(e) => setNotificationType(e.target.value as any)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="info">Information</option>
            <option value="warning">Warning</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
          </select>
        </div>
        <textarea
          value={newNotification}
          onChange={(e) => setNewNotification(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Enter notification message..."
        />
        <button
          onClick={handleSendNotification}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Notification
        </button>
      </div>
    </section>
  );
}