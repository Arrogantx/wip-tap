import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './components/portal/Login';
import AdminDashboard from './components/portal/admin/AdminDashboard';
import ClientDashboard from './components/portal/client/ClientDashboard';
import ProtectedRoute from './components/portal/ProtectedRoute';

// Service Pages
import SEOServices from './pages/services/SEOServices';
import PPCManagement from './pages/services/PPCManagement';
import SocialMedia from './pages/services/SocialMedia';
import ContentMarketing from './pages/services/ContentMarketing';
import Analytics from './pages/services/Analytics';
import BrandStrategy from './pages/services/BrandStrategy';
import HealthcareServices from './pages/services/HealthcareServices';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Portal Routes */}
      <Route path="/portal">
        <Route path="login" element={<Login />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="client"
          element={
            <ProtectedRoute allowedRole="client">
              <ClientDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="" element={<Navigate to="/portal/login" replace />} />
      </Route>

      {/* Main Website Routes */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="services/seo" element={<SEOServices />} />
                <Route path="services/ppc" element={<PPCManagement />} />
                <Route path="services/social-media" element={<SocialMedia />} />
                <Route path="services/content-marketing" element={<ContentMarketing />} />
                <Route path="services/analytics" element={<Analytics />} />
                <Route path="services/brand-strategy" element={<BrandStrategy />} />
                <Route path="services/healthcare" element={<HealthcareServices />} />
                <Route path="solutions" element={<Solutions />} />
                <Route path="resources" element={<Resources />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
              <Footer />
            </main>
          </>
        }
      />
    </Routes>
  );
};

export default App;