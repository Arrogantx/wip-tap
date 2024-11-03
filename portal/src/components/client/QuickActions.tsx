import React from 'react';
import {
  UserIcon,
  TicketIcon,
  CreditCardIcon,
  DocumentIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useFeatureStore } from '../../store/featureStore';
import { useAuthStore } from '../../store/authStore';

const allActions = [
  { id: 'profile', icon: UserIcon, label: 'View Profile', color: 'brand', feature: 'all' },
  { id: 'support', icon: TicketIcon, label: 'Support Tickets', color: 'brand', feature: 'support' },
  { id: 'billing', icon: CreditCardIcon, label: 'Billing Information', color: 'brand', feature: 'billing' },
  { id: 'documents', icon: DocumentIcon, label: 'Documents', color: 'brand', feature: 'documents' },
  { id: 'analytics', icon: ChartBarIcon, label: 'Analytics', color: 'brand', feature: 'analytics' },
] as const;

export default function QuickActions() {
  const { features } = useFeatureStore();
  const { user } = useAuthStore();

  const availableActions = allActions.filter(action => {
    const feature = features.find(f => f.id === action.feature);
    return !feature || (feature.enabled && (feature.requiredRole === 'all' || feature.requiredRole === user?.role));
  });

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {availableActions.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            className="p-4 bg-white border-2 border-brand-600 text-brand-700 rounded-lg hover:bg-brand-50 flex items-center gap-3 transition-colors duration-200"
          >
            <Icon className="h-6 w-6" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}