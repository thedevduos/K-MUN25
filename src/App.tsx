import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
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
  return (
    <AuthProvider>
      <Router>
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
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

          {/* Redirect any unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;