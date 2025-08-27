import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  FileText, 
  Download,
  Upload,
  Plus,
  Search,
  Filter,
  Mail,
  BarChart3,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  LogOut,
  UserPlus,
  Bell,
  MessageSquare,
  Edit,
  Trash2,
  Settings,
  Activity,
  UserCheck,
  MapPin
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DevAdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'registrations', label: 'Registrations', icon: UserPlus },
    { id: 'payments', label: 'Transaction Status', icon: CreditCard },
    { id: 'committees', label: 'Committee Manager', icon: FileText },
    { id: 'portfolios', label: 'Portfolio Manager', icon: Edit },
    { id: 'pricing', label: 'Pricing', icon: Settings },
    { id: 'popups', label: 'Popup Manager', icon: AlertCircle },
    { id: 'mailer', label: 'Mailer', icon: Mail },
    { id: 'events', label: 'Attendance Events', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: UserCheck },
    { id: 'contact', label: 'Contact Forms', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'logs', label: 'Admin Logs', icon: Activity }
  ];

  const stats = [
    { label: 'Total Users', value: '1,247', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Total Registrations', value: '347', change: '+8%', icon: UserPlus, color: 'green' },
    { label: 'Confirmed Payments', value: '289', change: '+15%', icon: CreditCard, color: 'purple' },
    { label: 'Active Committees', value: '15', change: '0%', icon: FileText, color: 'yellow' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DEV</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dev Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Complete system administration and management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Quick Action
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-red-50 text-red-800 border-r-2 border-red-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className={`text-sm ${
                            stat.change.startsWith('+') ? 'text-green-600' : 
                            stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {stat.change} from last month
                          </p>
                        </div>
                        <div className={`p-3 rounded-full ${
                          stat.color === 'blue' ? 'bg-blue-100' :
                          stat.color === 'green' ? 'bg-green-100' :
                          stat.color === 'purple' ? 'bg-purple-100' :
                          'bg-yellow-100'
                        }`}>
                          <stat.icon className={`w-6 h-6 ${
                            stat.color === 'blue' ? 'text-blue-600' :
                            stat.color === 'green' ? 'text-green-600' :
                            stat.color === 'purple' ? 'text-purple-600' :
                            'text-yellow-600'
                          }`} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <UserPlus className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Add New User</h4>
                      <p className="text-sm text-gray-600">Create admin or delegate account</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <FileText className="w-6 h-6 text-green-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Add Committee</h4>
                      <p className="text-sm text-gray-600">Create new committee with portfolios</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                      <Bell className="w-6 h-6 text-purple-600 mb-2" />
                      <h4 className="font-medium text-gray-900">Send Notification</h4>
                      <p className="text-sm text-gray-600">Broadcast message to users</p>
                    </button>
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Database Connection</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Connected
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Payment Gateway</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email Service</span>
                      <span className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Operational
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs content would be implemented here */}
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h3>
                <p className="text-gray-600">
                  This section is under development. Full functionality will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevAdminDashboard;