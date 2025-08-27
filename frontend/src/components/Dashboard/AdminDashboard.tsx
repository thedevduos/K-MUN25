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
  Eye,
  Settings
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { mockPricing } from '../../context/AuthContext';

const AdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [pricing, setPricing] = useState(mockPricing);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'registrations', label: 'Registrations', icon: Users },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'committees', label: 'Committees', icon: FileText },
    { id: 'pricing', label: 'Pricing', icon: Settings },
    { id: 'mailer', label: 'Mailer', icon: Mail },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'contact', label: 'Contact Forms', icon: MessageSquare },
    { id: 'users', label: 'Users', icon: UserPlus },
    { id: 'events', label: 'Events', icon: Calendar }
  ];

  const stats = [
    { label: 'Total Registrations', value: '347', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Confirmed Payments', value: '289', change: '+8%', icon: CreditCard, color: 'green' },
    { label: 'Pending Allocations', value: '58', change: '-5%', icon: Clock, color: 'yellow' },
    { label: 'Active Committees', value: '15', change: '0%', icon: FileText, color: 'purple' }
  ];

  const recentRegistrations = [
    { 
      id: 1, 
      firstName: 'John', 
      lastName: 'Smith', 
      email: 'john@university.edu', 
      phone: '+91 9876543210',
      institution: 'Harvard University', 
      status: 'confirmed', 
      paymentStatus: 'paid',
      gender: 'Male',
      isKumaraguru: 'No',
      totalMuns: '3-5'
    },
    { 
      id: 2, 
      firstName: 'Sarah', 
      lastName: 'Johnson', 
      email: 'sarah@college.edu', 
      phone: '+91 9876543211',
      institution: 'MIT', 
      status: 'pending', 
      paymentStatus: 'pending',
      gender: 'Female',
      isKumaraguru: 'No',
      totalMuns: '1-2'
    }
  ];

  const committees = [
    { 
      id: 1, 
      name: 'United Nations Security Council', 
      portfolios: ['United States', 'China', 'Russia'], 
      agenda: 'Nuclear Disarmament',
      backgroundGuide: 'unsc-bg.pdf',
      logo: 'unsc-logo.png'
    },
    { 
      id: 2, 
      name: 'General Assembly', 
      portfolios: ['India', 'Germany', 'Japan'], 
      agenda: 'Climate Change',
      backgroundGuide: 'ga-bg.pdf',
      logo: 'ga-logo.png'
    }
  ];

  const contactSubmissions = [
    {
      id: 1,
      name: 'Alice Brown',
      email: 'alice@example.com',
      phone: '+91 9876543212',
      subject: 'Registration Query',
      message: 'I have questions about the registration process...',
      status: 'pending',
      submittedAt: '2024-12-15T10:30:00Z'
    }
  ];

  const users = [
    {
      id: 1,
      name: 'John Admin',
      email: 'admin@mun.com',
      role: 'software-admin',
      status: 'active',
      createdAt: '2024-01-01'
    }
  ];

  const events = [
    {
      id: 1,
      name: 'Committee Session 1',
      date: '2025-03-15',
      startTime: '09:00',
      endTime: '12:00',
      status: 'scheduled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'shortlisted': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">MUN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Software Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Manage registrations, payments, and system settings</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                <UserPlus className="w-4 h-4 mr-2" />
                Add User
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
                        ? 'bg-blue-50 text-blue-800 border-r-2 border-blue-800'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
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
                          stat.color === 'yellow' ? 'bg-yellow-100' :
                          'bg-purple-100'
                        }`}>
                          <stat.icon className={`w-6 h-6 ${
                            stat.color === 'blue' ? 'text-blue-600' :
                            stat.color === 'green' ? 'text-green-600' :
                            stat.color === 'yellow' ? 'text-yellow-600' :
                            'text-purple-600'
                          }`} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Registrations</h3>
                    <div className="space-y-4">
                      {recentRegistrations.slice(0, 4).map((registration) => (
                        <div key={registration.id} className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium text-gray-900">{registration.firstName} {registration.lastName}</p>
                            <p className="text-sm text-gray-600">{registration.institution}</p>
                          </div>
                          <div className="flex space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(registration.status)}`}>
                              {registration.status}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(registration.paymentStatus)}`}>
                              {registration.paymentStatus}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Committee Status</h3>
                    <div className="space-y-4">
                      {committees.map((committee) => (
                        <div key={committee.id} className="flex items-center justify-between py-2">
                          <div>
                            <p className="font-medium text-gray-900">{committee.name}</p>
                            <p className="text-sm text-gray-600">{committee.agenda}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                              {committee.portfolios.length} portfolios
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'registrations' && (
              <div className="space-y-6">
                {/* Search and Actions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search registrations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </button>
                      <button 
                        onClick={() => setShowUploadModal(true)}
                        className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors flex items-center"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Bulk Upload
                      </button>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Export Data
                      </button>
                    </div>
                  </div>
                </div>

                {/* Registrations Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Participant
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Institution
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentRegistrations.map((registration) => (
                          <tr key={registration.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="font-medium text-gray-900">{registration.firstName} {registration.lastName}</div>
                                <div className="text-sm text-gray-500">{registration.gender} • {registration.totalMuns} MUNs</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{registration.email}</div>
                              <div className="text-sm text-gray-500">{registration.phone}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {registration.institution}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(registration.status)}`}>
                                {registration.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-blue-800 hover:text-blue-900 mr-4">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'committees' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Committee Management</h3>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Committee
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {committees.map((committee) => (
                      <div key={committee.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{committee.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">Agenda: {committee.agenda}</p>
                            <p className="text-sm text-gray-600">Portfolios: {committee.portfolios.join(', ')}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="text-blue-800 hover:text-blue-900">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Pricing Configuration</h3>
                    <button 
                      onClick={() => setShowPricingModal(true)}
                      className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center"
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Update Pricing
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Internal Delegate</h4>
                      <p className="text-2xl font-bold text-blue-800">₹{pricing.internalDelegate}</p>
                      <p className="text-sm text-gray-600">For Kumaraguru students</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">External Delegate</h4>
                      <p className="text-2xl font-bold text-blue-800">₹{pricing.externalDelegate}</p>
                      <p className="text-sm text-gray-600">For external participants</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Accommodation</h4>
                      <p className="text-2xl font-bold text-blue-800">₹{pricing.accommodationCharge}</p>
                      <p className="text-sm text-gray-600">Per night accommodation</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Last Updated:</strong> {new Date(pricing.updatedAt).toLocaleString()} by {pricing.updatedBy}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Form Submissions</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Pending Submissions</h4>
                      <div className="space-y-4">
                        {contactSubmissions.filter(s => s.status === 'pending').map((submission) => (
                          <div key={submission.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h5 className="font-medium text-gray-900">{submission.name}</h5>
                                <p className="text-sm text-gray-600">{submission.email} • {submission.phone}</p>
                                <p className="text-sm text-gray-600">Subject: {submission.subject}</p>
                              </div>
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                Pending
                              </span>
                            </div>
                            <p className="text-gray-700 mb-4">{submission.message}</p>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                              Mark as Resolved
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Resolved Submissions</h4>
                      <div className="text-gray-500 text-center py-8">
                        No resolved submissions yet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Upload Modal */}
            {showUploadModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Upload Registrations</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      Download Template
                    </button>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload Excel file</p>
                    </div>
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => setShowUploadModal(false)}
                        className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                      >
                        Cancel
                      </button>
                      <button className="flex-1 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Modal */}
            {showPricingModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Pricing</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Internal Delegate (₹)</label>
                      <input
                        type="number"
                        value={pricing.internalDelegate}
                        onChange={(e) => setPricing({...pricing, internalDelegate: Number(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">External Delegate (₹)</label>
                      <input
                        type="number"
                        value={pricing.externalDelegate}
                        onChange={(e) => setPricing({...pricing, externalDelegate: Number(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Charge (₹)</label>
                      <input
                        type="number"
                        value={pricing.accommodationCharge}
                        onChange={(e) => setPricing({...pricing, accommodationCharge: Number(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => setShowPricingModal(false)}
                        className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => {
                          setPricing({...pricing, updatedAt: new Date().toISOString(), updatedBy: 'admin@mun.com'});
                          setShowPricingModal(false);
                          toast.success('Pricing updated successfully!');
                        }}
                        className="flex-1 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;