import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Committees from './pages/Committees';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DelegateGuidelines from './pages/DelegateGuidelines';
import TermsOfService from './pages/TermsOfService';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';
import Maintenance from './pages/Maintenance';
import ErrorBoundary from './components/Common/ErrorBoundary';
import ParticipantDashboard from './components/Dashboard/ParticipantDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import RegistrationAdminDashboard from './components/Dashboard/RegistrationAdminDashboard';
import HospitalityAdminDashboard from './components/Dashboard/HospitalityAdminDashboard';
import AllocationAdminDashboard from './components/Dashboard/AllocationAdminDashboard';
import ExecutiveBoardDashboard from './components/Dashboard/ExecutiveBoardDashboard';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles?: string[] }> = ({ 
  children, 
  allowedRoles 
}) => {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role || '')) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

// Dashboard Router Component
const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  switch (user.role) {
    case 'participant':
      return <ParticipantDashboard />;
    case 'software-admin':
    case 'super-admin':
      return <AdminDashboard />;
    case 'registration-admin':
      return <RegistrationAdminDashboard />;
    case 'hospitality-admin':
      return <HospitalityAdminDashboard />;
    case 'allocation-admin':
      return <AllocationAdminDashboard />;
    case 'executive-board':
      return <ExecutiveBoardDashboard />;
    default:
      return <ParticipantDashboard />;
  }
};

function App() {
  const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, [pathname]);
    return null;
  };

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/committees" element={<Layout><Committees /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/resources" element={<Layout><Resources /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/delegate-guidelines" element={<Layout><DelegateGuidelines /></Layout>} />
          <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardRouter />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/participant" 
            element={
              <ProtectedRoute allowedRoles={['participant']}>
                <ParticipantDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/admin" 
            element={
              <ProtectedRoute allowedRoles={['software-admin', 'super-admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/registration" 
            element={
              <ProtectedRoute allowedRoles={['registration-admin']}>
                <RegistrationAdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/hospitality" 
            element={
              <ProtectedRoute allowedRoles={['hospitality-admin']}>
                <HospitalityAdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/allocation" 
            element={
              <ProtectedRoute allowedRoles={['allocation-admin']}>
                <AllocationAdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/dashboard/executive" 
            element={
              <ProtectedRoute allowedRoles={['executive-board']}>
                <ExecutiveBoardDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Error Pages */}
          <Route path="/404" element={<Layout><Error404 /></Layout>} />
          <Route path="/500" element={<Layout><Error500 /></Layout>} />
          <Route path="/maintenance" element={<Layout><Maintenance /></Layout>} />
          
          {/* Redirect any unmatched routes to 404 */}
          <Route path="*" element={<Layout><Error404 /></Layout>} />
        </Routes>
      </Router>
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;