import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: 'admin' | 'client';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRole }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Navigate to="/portal/login" replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to={`/portal/${user.role}`} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;