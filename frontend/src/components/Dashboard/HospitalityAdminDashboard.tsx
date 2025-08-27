import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  UserCheck,
  Download,
  LogOut,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const HospitalityAdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('checkin');
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'checkin', label: 'Check-In/Out', icon: UserCheck },
    { id: 'reports', label: 'Reports', icon: Download }
  ];

  const participants = [
    { 
      id: 'KMUN25001',
      name: 'John Smith', 
      email: 'john@university.edu', 
      institution: 'Harvard University',
      gender: 'Male',
      phone: '+91 9876543210',
      checkedIn: true,
      checkedInTime: '2025-03-15 09:15:00',
      checkedOut: false,
      checkedOutTime: null,
      checkInFrequency: 1,
      checkOutFrequency: 0
    },
    { 
      id: 'KMUN25002',
      name: 'Sarah Johnson', 
      email: 'sarah@college.edu', 
      institution: 'MIT',
      gender: 'Female',
      phone: '+91 9876543211',
      checkedIn: false,
      checkedInTime: null,
      checkedOut: false,
      checkedOutTime: null,
      checkInFrequency: 0,
      checkOutFrequency: 0
    }
  ];

  const handleUserSearch = (userId: string) => {
    const user = participants.find(p => p.id === userId);
    if (user) {
      setSelectedUser(user);
      setShowCheckInModal(true);
    } else {
      alert('User not found');
    }
  };

  const handleCheckIn = (userId: string) => {
    console.log('Checking in user for accommodation:', userId);
    // Implementation for accommodation check-in
    setShowCheckInModal(false);
  };

  const handleCheckOut = (userId: string) => {
    console.log('Checking out user from accommodation:', userId);
    // Implementation for accommodation check-out
    setShowCheckInModal(false);
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
                <h1 className="text-xl font-bold text-gray-900">Hospitality Dashboard</h1>
                <p className="text-sm text-gray-600">Manage accommodation check-ins and check-outs</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
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
            {activeTab === 'checkin' && (
              <div className="space-y-6">
                {/* Check-in Form */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Accommodation Check-In/Out</h3>
                  
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Enter User ID (e.g., KMUN25001)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleUserSearch((e.target as HTMLInputElement).value);
                          }
                        }}
                      />
                    </div>
                     placeholder="Enter User ID (e.g., KMUN25001)"
                      onClick={() => {
                        const input = document.querySelector('input[placeholder*="User ID"]') as HTMLInputElement;
                        if (input?.value) {
                          handleUserSearch(input.value);
                        }
                      }}
                      className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </button>
                  </div>
                </div>

                {/* Check-in Modal */}
                {showCheckInModal && selectedUser && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Participant Details</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">User ID:</span>
                          <span className="font-medium">{selectedUser.id}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium">{selectedUser.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium">{selectedUser.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Institution:</span>
                          <span className="font-medium">{selectedUser.institution}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Gender:</span>
                          <span className="font-medium">{selectedUser.gender}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium">{selectedUser.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-in Frequency:</span>
                          <span className="font-medium">{selectedUser.checkInFrequency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Check-out Frequency:</span>
                          <span className="font-medium">{selectedUser.checkOutFrequency}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button 
                          onClick={() => setShowCheckInModal(false)}
                          className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                        >
                          Cancel
                        </button>
                        {!selectedUser.checkedIn ? (
                          <button 
                            onClick={() => handleCheckIn(selectedUser.id)}
                            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Check In
                          </button>
                        ) : (
                          <button 
                            onClick={() => handleCheckOut(selectedUser.id)}
                            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                          >
                            Check Out
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Generate Reports</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Check-In/Out Log</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Export complete accommodation check-in and check-out logs with all details.
                    </p>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Export Complete Details
                    </button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Accommodation Summary</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Generate summary of accommodation usage and statistics.
                    </p>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Generate Summary
                    </button>
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

export default HospitalityAdminDashboard;