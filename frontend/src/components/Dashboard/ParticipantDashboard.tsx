import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Calendar, 
  CreditCard, 
  FileText, 
  Download,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Bell,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ParticipantDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'registration', label: 'Registration', icon: FileText },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'schedule', label: 'Schedule', icon: Calendar }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Committee Allocation Released',
      message: 'Your committee allocation is now available. Check your registration details.',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      title: 'Payment Reminder',
      message: 'Please complete your payment by March 1st to secure your registration.',
      time: '1 day ago',
      type: 'warning'
    }
  ];

  const schedule = [
    {
      date: 'March 15, 2025',
      events: [
        { time: '09:00 AM', title: 'Registration & Check-in', location: 'Main Hall' },
        { time: '10:00 AM', title: 'Opening Ceremony', location: 'Auditorium' },
        { time: '11:30 AM', title: 'Committee Session I', location: 'Assigned Room' },
        { time: '01:00 PM', title: 'Lunch Break', location: 'Cafeteria' }
      ]
    },
    {
      date: 'March 16, 2025',
      events: [
        { time: '09:00 AM', title: 'Committee Session II', location: 'Assigned Room' },
        { time: '11:00 AM', title: 'Coffee Break', location: 'Lobby' },
        { time: '11:30 AM', title: 'Committee Session III', location: 'Assigned Room' },
        { time: '01:00 PM', title: 'Lunch & Networking', location: 'Cafeteria' }
      ]
    }
  ];

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
                <h1 className="text-xl font-bold text-gray-900">Participant Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {user?.name}!</p>
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
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {user?.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                <p className="text-gray-600">{user?.institution || 'Institution not specified'}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${
                  user?.registrationStatus === 'confirmed' ? 'bg-green-500' : 
                  user?.registrationStatus === 'shortlisted' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <span className="text-sm font-medium capitalize">
                  {user?.registrationStatus || 'Pending'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  user?.paymentStatus === 'paid' ? 'bg-green-500' : 
                  user?.paymentStatus === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm font-medium capitalize">
                  Payment {user?.paymentStatus || 'Pending'}
                </span>
              </div>
            </div>
          </div>
        </div>

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

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Committee</span>
                  <span className="font-medium">{user?.allocatedCommittee || 'Unallocated'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Portfolio</span>
                  <span className="font-medium">{user?.allocatedPortfolio || 'Unallocated'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days Left</span>
                  <span className="font-medium text-blue-800">45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Status Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Registration</p>
                        <p className="text-2xl font-bold text-gray-900 capitalize">
                          {user?.registrationStatus || 'Pending'}
                        </p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Payment</p>
                        <p className="text-2xl font-bold text-gray-900 capitalize">
                          {user?.paymentStatus || 'Pending'}
                        </p>
                      </div>
                      <CreditCard className={`w-8 h-8 ${
                        user?.paymentStatus === 'paid' ? 'text-green-500' : 'text-yellow-500'
                      }`} />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Committee</p>
                        <p className="text-lg font-bold text-gray-900">
                          {user?.allocatedCommittee ? 'Allocated' : 'Unallocated'}
                        </p>
                      </div>
                      <FileText className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Announcements */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Announcements
                  </h3>
                  <div className="space-y-4">
                    {announcements.map((announcement) => (
                      <div
                        key={announcement.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          announcement.type === 'success'
                            ? 'bg-green-50 border-green-500'
                            : 'bg-yellow-50 border-yellow-500'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                            <p className="text-gray-600 mt-1">{announcement.message}</p>
                          </div>
                          <span className="text-sm text-gray-500">{announcement.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Committee Allocation */}
                {user?.allocatedCommittee && (
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Allocation</h3>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Committee</p>
                          <p className="font-semibold text-gray-900">{user.allocatedCommittee}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Portfolio</p>
                          <p className="font-semibold text-gray-900">{user.allocatedPortfolio}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download Background Guide
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'registration' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Registration Details</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <p className="text-gray-900">{user?.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <p className="text-gray-900">{user?.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <p className="text-gray-900">{user?.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institution
                      </label>
                      <p className="text-gray-900">{user?.institution}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Grade/Year
                      </label>
                      <p className="text-gray-900 capitalize">{user?.grade}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Registration Status
                      </label>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user?.registrationStatus === 'confirmed' ? 'bg-green-100 text-green-800' :
                        user?.registrationStatus === 'shortlisted' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {user?.registrationStatus || 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Information</h3>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Registration Fee</span>
                      <span className="text-2xl font-bold text-gray-900">₹150.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Status</span>
                      <span className={`font-medium ${
                        user?.paymentStatus === 'paid' ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {user?.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                      </span>
                    </div>
                  </div>

                  {user?.paymentStatus === 'paid' ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <div>
                          <p className="font-medium text-green-800">Payment Successful</p>
                          <p className="text-green-600 text-sm">
                            Your payment was processed on January 15, 2025
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download Invoice
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center mb-4">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                        <div>
                          <p className="font-medium text-yellow-800">Payment Pending</p>
                          <p className="text-yellow-600 text-sm">
                            Please complete your payment to secure your registration
                          </p>
                        </div>
                      </div>
                      <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                        Pay Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Conference Schedule</h3>
                <div className="space-y-8">
                  {schedule.map((day, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">{day.date}</h4>
                      <div className="space-y-4">
                        {day.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-20 text-sm text-gray-600 font-medium">
                              {event.time}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{event.title}</p>
                              <p className="text-sm text-gray-600 flex items-center mt-1">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDashboard;