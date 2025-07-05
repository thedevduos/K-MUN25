import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  CheckCircle,
  Clock,
  FileText,
  Download,
  Plus,
  Edit,
  Calendar,
  UserCheck,
  BookOpen,
  MessageSquare
} from 'lucide-react';

const ExecutiveBoardDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('participants');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'participants', label: 'My Committee', icon: Users },
    { id: 'attendance', label: 'Attendance', icon: UserCheck },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'sessions', label: 'Session Notes', icon: MessageSquare }
  ];

  // Mock data for committee participants
  const committeeParticipants = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@university.edu',
      institution: 'Harvard University',
      portfolio: 'United States',
      experience: 'Advanced',
      attendance: {
        session1: true,
        session2: true,
        session3: false,
        session4: true
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@college.edu',
      institution: 'MIT',
      portfolio: 'China',
      experience: 'Intermediate',
      attendance: {
        session1: true,
        session2: false,
        session3: true,
        session4: true
      }
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike@school.edu',
      institution: 'Stanford University',
      portfolio: 'Russia',
      experience: 'Advanced',
      attendance: {
        session1: true,
        session2: true,
        session3: true,
        session4: false
      }
    }
  ];

  const sessions = [
    { id: 1, name: 'Opening Session', date: '2024-03-15 09:00', status: 'completed' },
    { id: 2, name: 'Formal Debate I', date: '2024-03-15 11:00', status: 'completed' },
    { id: 3, name: 'Formal Debate II', date: '2024-03-15 14:00', status: 'completed' },
    { id: 4, name: 'Closing Session', date: '2024-03-15 16:00', status: 'upcoming' }
  ];

  const stats = [
    { label: 'Total Delegates', value: '15', icon: Users, color: 'blue' },
    { label: 'Present Today', value: '13', icon: UserCheck, color: 'green' },
    { label: 'Sessions Completed', value: '3', icon: CheckCircle, color: 'purple' },
    { label: 'Attendance Rate', value: '87%', icon: Clock, color: 'yellow' }
  ];

  const documents = [
    {
      id: 1,
      name: 'Background Guide - UNSC',
      type: 'PDF',
      size: '2.4 MB',
      uploadedDate: '2024-02-15',
      downloads: 45
    },
    {
      id: 2,
      name: 'Rules of Procedure',
      type: 'PDF',
      size: '1.8 MB',
      uploadedDate: '2024-02-10',
      downloads: 38
    },
    {
      id: 3,
      name: 'Committee Agenda',
      type: 'PDF',
      size: '0.9 MB',
      uploadedDate: '2024-02-20',
      downloads: 42
    }
  ];

  const sessionNotes = [
    {
      id: 1,
      session: 'Opening Session',
      date: '2024-03-15',
      notes: 'All delegates present. Introduced the agenda and rules of procedure. Delegates showed good understanding of the topic.',
      createdBy: 'Chair'
    },
    {
      id: 2,
      session: 'Formal Debate I',
      date: '2024-03-15',
      notes: 'Productive debate on nuclear disarmament. US and Russia presented strong opposing views. China proposed middle ground.',
      createdBy: 'Chair'
    }
  ];

  const markAttendance = (participantId: number, sessionId: number, present: boolean) => {
    console.log('Marking attendance:', participantId, sessionId, present);
    // Implementation for marking attendance
  };

  const getAttendanceRate = (attendance: any) => {
    const sessions = Object.values(attendance);
    const presentSessions = sessions.filter(session => session === true).length;
    return Math.round((presentSessions / sessions.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Executive Board Dashboard</h1>
              <p className="text-gray-600">United Nations Security Council</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Add Note
              </button>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
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
            {activeTab === 'participants' && (
              <div className="space-y-6">
                {/* Search */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search delegates..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      <option value="all">All Experience Levels</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                {/* Participants Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Delegate
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Portfolio
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Experience
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Attendance Rate
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {committeeParticipants.map((participant) => (
                          <tr key={participant.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="font-medium text-gray-900">{participant.name}</div>
                                <div className="text-sm text-gray-500">{participant.institution}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {participant.portfolio}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                participant.experience === 'Advanced' ? 'bg-red-100 text-red-800' :
                                participant.experience === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {participant.experience}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {getAttendanceRate(participant.attendance)}%
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <button className="text-blue-800 hover:text-blue-900 mr-4">
                                View Profile
                              </button>
                              <button className="text-emerald-600 hover:text-emerald-700">
                                Contact
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

            {activeTab === 'attendance' && (
              <div className="space-y-6">
                {/* Session Overview */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Session Attendance</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {sessions.map((session) => (
                      <div key={session.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{session.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            session.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {session.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{session.date}</p>
                      </div>
                    ))}
                  </div>

                  {/* Attendance Matrix */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Delegate
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Session 1
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Session 2
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Session 3
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Session 4
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {committeeParticipants.map((participant) => (
                          <tr key={participant.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{participant.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              {participant.attendance.session1 ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full mx-auto"></div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              {participant.attendance.session2 ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full mx-auto"></div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              {participant.attendance.session3 ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full mx-auto"></div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center">
                              {participant.attendance.session4 ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <div className="w-5 h-5 border-2 border-gray-300 rounded-full mx-auto"></div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                              {getAttendanceRate(participant.attendance)}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Committee Documents</h3>
                  <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Document
                  </button>
                </div>
                
                <div className="space-y-4">
                  {documents.map((document) => (
                    <div key={document.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-red-100 rounded-lg">
                            <FileText className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{document.name}</h4>
                            <p className="text-sm text-gray-600">
                              {document.type} • {document.size} • Uploaded {document.uploadedDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">{document.downloads} downloads</span>
                          <button className="bg-blue-800 text-white px-3 py-1 rounded text-sm hover:bg-blue-900">
                            Download
                          </button>
                          <button className="text-gray-600 hover:text-gray-700">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sessions' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Session Notes</h3>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Note
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {sessionNotes.map((note) => (
                      <div key={note.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-gray-900">{note.session}</h4>
                            <p className="text-sm text-gray-600">{note.date} • Added by {note.createdBy}</p>
                          </div>
                          <button className="text-gray-600 hover:text-gray-700">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-gray-700">{note.notes}</p>
                      </div>
                    ))}
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

export default ExecutiveBoardDashboard;