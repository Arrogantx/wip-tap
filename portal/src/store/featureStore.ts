import { create } from 'zustand';

interface Feature {
  id: string;
  name: string;
  enabled: boolean;
  requiredRole: 'admin' | 'client' | 'all';
}

interface FeatureState {
  features: Feature[];
  toggleFeature: (id: string) => void;
  updateFeature: (id: string, updates: Partial<Feature>) => void;
}

export const useFeatureStore = create<FeatureState>((set) => ({
  features: [
    { id: 'billing', name: 'Billing Access', enabled: true, requiredRole: 'client' },
    { id: 'support', name: 'Support System', enabled: true, requiredRole: 'all' },
    { id: 'documents', name: 'Document Management', enabled: true, requiredRole: 'client' },
    { id: 'analytics', name: 'Analytics Dashboard', enabled: true, requiredRole: 'client' },
    { id: 'notifications', name: 'Notifications', enabled: true, requiredRole: 'all' },
  ],
  toggleFeature: (id) =>
    set((state) => ({
      features: state.features.map((feature) =>
        feature.id === id ? { ...feature, enabled: !feature.enabled } : feature
      ),
    })),
  updateFeature: (id, updates) =>
    set((state) => ({
      features: state.features.map((feature) =>
        feature.id === id ? { ...feature, ...updates } : feature
      ),
    })),
}));