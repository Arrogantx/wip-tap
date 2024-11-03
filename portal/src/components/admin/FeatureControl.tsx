import React from 'react';
import { useFeatureStore } from '../../store/featureStore';
import { Switch } from '@headlessui/react';
import toast from 'react-hot-toast';

export default function FeatureControl() {
  const { features, toggleFeature, updateFeature } = useFeatureStore();

  const handleToggle = (id: string) => {
    toggleFeature(id);
    toast.success('Feature status updated');
  };

  const handleRoleChange = (id: string, role: 'admin' | 'client' | 'all') => {
    updateFeature(id, { requiredRole: role });
    toast.success('Feature access updated');
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Feature Controls</h2>
      <div className="space-y-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">{feature.name}</h3>
              <select
                value={feature.requiredRole}
                onChange={(e) => handleRoleChange(feature.id, e.target.value as 'admin' | 'client' | 'all')}
                className="mt-1 text-sm border-gray-300 rounded-md"
              >
                <option value="all">All Users</option>
                <option value="client">Clients Only</option>
                <option value="admin">Admins Only</option>
              </select>
            </div>
            <Switch
              checked={feature.enabled}
              onChange={() => handleToggle(feature.id)}
              className={`${
                feature.enabled ? 'bg-brand-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2`}
            >
              <span
                className={`${
                  feature.enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        ))}
      </div>
    </section>
  );
}