import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Filter,
  Upload,
  Download,
  UserPlus,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Mail,
  Settings
} from 'lucide-react';

const AllocationAdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'unallocated', label: 'Unallocated', icon: Clock },
    { id: 'allocation', label: 'Manual Allocation', icon: UserPlus },
    { id: 'matrix', label: 'Allocation Matrix', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Mail }
  ];

  const unallocatedParticipants = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@university.edu',
      institution: 'Harvard University',
      grade: 'Undergraduate',
      paymentStatus: 'paid',
      preferences: {
        committee1: 'UNSC',
        committee2: 'GA',
        committee3: 'ECOSOC',
        portfolio1: 'United States',
        portfolio2: 'China',
        portfolio3: 'Germany'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@college.edu',
      institution: 'MIT',
      grade: 'Graduate',
      paymentStatus: 'paid',
      preferences: {
        committee1: 'GA',
        committee2: 'HRC',
        committee3: 'WHO',
        portfolio1: 'United Kingdom',
        portfolio2: 'France',
        portfolio3: 'Japan'
      }
    }
  ];

  const committees = [
    {
      id: 1,
      name: 'UNSC',
      fullName: 'United Nations Security Council',
      totalPortfolios: 15,
      allocatedPortfolios: 12,
      availablePortfolios: 3,
      level: 'Advanced'
    },
    {
      id: 2,
      name: 'GA',
      fullName: 'General Assembly',
      totalPortfolios: 193,
      allocatedPortfolios: 150,
      availablePortfolios: 43,
      level: 'Beginner'
    },
    {
      id: 3,
      name: 'ECOSOC',
      fullName: 'Economic and Social Council',
      totalPortfolios: 54,
      allocatedPortfolios: 45,
      availablePortfolios: 9,
      level: 'Intermediate'
    }
  ];

  const stats = [
    { label: 'Total Participants', value: '347', icon: Users, color: 'blue' },
    { label: 'Allocated', value: '289', icon: CheckCircle, color: 'green' },
    { label: 'Unallocated', value: '58', icon: Clock, color: 'yellow' },
    { label: 'Pending Payment', value: '23', icon: AlertCircle, color: 'red' }
  ];

  const allocationMatrix = [
    { committee: 'UNSC', beginner: 0, intermediate: 5, advanced: 10, total: 15 },
    { committee: 'GA', beginner: 120, intermediate: 50, advanced: 23, total: 193 },
    { committee: 'ECOSOC', beginner: 15, intermediate: 30, advanced: 9, total: 54 },
    { committee: 'HRC', beginner: 20, intermediate: 20, advanced: 7, total: 47 }
  ];

  const handleAllocate = (participantId: number, committee: string, portfolio: string) => {
    console.log('Allocating participant:', participantId, 'to', committee, portfolio);
    // Implementation for manual allocation
  };

  const handleBulkAllocate = () => {
    console.log('Starting bulk allocation process');
    // Implementation for bulk allocation
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Allocation Admin Dashboard</h1>
              <p className="text-gray-600">Manage committee and portfolio allocations</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleBulkAllocate}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                Auto Allocate
              </button>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Bulk Upload
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                </div>
                <div className={`p-3 rounded-full ${
                  stat.color === 'blue' ? 'bg-blue-100' :
                  stat.color === 'green' ? 'bg-green-100' :
                  stat.color === 'yellow' ? 'bg-yellow-100' :
                  'bg-red-100'
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.color === 'blue' ? 'text-blue-600' :
                    stat.color === 'green' ? 'text-green-600' :
                    stat.color === 'yellow' ? 'text-yellow-600' :
                    'text-red-600'
                  }`} />
                </div>
              </div>
            </motion.div>
          ))}
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Committee Overview */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Committee Allocation Status</h3>
                  <div className="space-y-4">
                    {committees.map((committee) => (
                      <div key={committee.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{committee.fullName}</h4>
                            <p className="text-sm text-gray-600">{committee.name} • {committee.level} Level</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            committee.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            committee.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {committee.level}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">
                            {committee.allocatedPortfolios}/{committee.totalPortfolios} allocated
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {Math.round((committee.allocatedPortfolios / committee.totalPortfolios) * 100)}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(committee.allocatedPortfolios / committee.totalPortfolios) * 100}%` }}
                          ></div>
                        </div>
                        
                        <div className="mt-2 text-sm text-gray-600">
                          {committee.availablePortfolios} portfolios available
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Allocations */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Allocations</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">John Smith</p>
                        <p className="text-sm text-gray-600">Allocated to UNSC - United States</p>
                      </div>
                      <span className="text-sm text-gray-500">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">Sarah Johnson</p>
                        <p className="text-sm text-gray-600">Allocated to GA - United Kingdom</p>
                      </div>
                      <span className="text-sm text-gray-500">3 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'unallocated' && (
              <div className="space-y-6">
                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search unallocated participants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option value="all">All Participants</option>
                      <option value="paid">Paid Only</option>
                      <option value="unpaid">Unpaid Only</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option value="all">All Grades</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="high-school">High School</option>
                    </select>
                  </div>
                </div>

                {/* Unallocated Participants */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Participant
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Preferences
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Payment Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {unallocatedParticipants.map((participant) => (
                          <tr key={participant.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="font-medium text-gray-900">{participant.name}</div>
                                <div className="text-sm text-gray-500">{participant.institution}</div>
                                <div className="text-sm text-gray-500">{participant.grade}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm">
                                <div className="font-medium text-gray-900">Committees:</div>
                                <div className="text-gray-600">
                                  1. {participant.preferences.committee1}<br/>
                                  2. {participant.preferences.committee2}<br/>
                                  3. {participant.preferences.committee3}
                                </div>
                                <div className="font-medium text-gray-900 mt-2">Portfolios:</div>
                                <div className="text-gray-600">
                                  1. {participant.preferences.portfolio1}<br/>
                                  2. {participant.preferences.portfolio2}<br/>
                                  3. {participant.preferences.portfolio3}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                participant.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {participant.paymentStatus}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button 
                                onClick={() => handleAllocate(participant.id, participant.preferences.committee1, participant.preferences.portfolio1)}
                                className="bg-blue-800 text-white px-3 py-1 rounded text-xs hover:bg-blue-900 mr-2"
                              >
                                Quick Allocate
                              </button>
                              <button className="text-blue-800 hover:text-blue-900">
                                Manual Allocate
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

            {activeTab === 'allocation' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Manual Allocation</h3>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Allocation Tools</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                        Preference-Based Auto Allocation
                      </button>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                        Random Allocation
                      </button>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Institution-Based Allocation
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">Bulk Upload Allocation</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Upload an Excel file with participant allocations.
                      </p>
                      <div className="space-y-2">
                        <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                          Download Template
                        </button>
                        <button className="w-full bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Allocations
                        </button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">Allocation Rules</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span>Paid participants get priority</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span>First preference gets highest priority</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span>Experience level matching</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          <span>Institution diversity consideration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'matrix' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Allocation Matrix</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Committee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Beginner
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Intermediate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Advanced
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {allocationMatrix.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            {row.committee}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {row.beginner}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {row.intermediate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {row.advanced}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.total}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-800 hover:text-blue-900 mr-4">
                              View Details
                            </button>
                            <button className="text-emerald-600 hover:text-emerald-700">
                              Manage
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Send Allocation Notifications</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Email Notifications</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Send allocation confirmation emails to participants.
                      </p>
                      <div className="space-y-2">
                        <button className="w-full bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                          Send to All Allocated
                        </button>
                        <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                          Send to Recently Allocated
                        </button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">WhatsApp Notifications</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Send allocation updates via WhatsApp.
                      </p>
                      <div className="space-y-2">
                        <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Send WhatsApp Updates
                        </button>
                        <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                          Bulk WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">Notification Log</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-yellow-800">Email sent to 45 participants</span>
                        <span className="text-yellow-600">2 hours ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-800">WhatsApp sent to 23 participants</span>
                        <span className="text-yellow-600">4 hours ago</span>
                      </div>
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

export default AllocationAdminDashboard;