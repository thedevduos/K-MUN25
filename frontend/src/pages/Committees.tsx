import React from 'react';
import { motion } from 'framer-motion';
import { Download, Users, Globe, FileText } from 'lucide-react';
import { mockCommittees } from '../context/AuthContext';

const Committees: React.FC = () => {

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Committees</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our diverse range of committees
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockCommittees.map((committee, index) => (
              <motion.div
                key={committee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{committee.logo}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{committee.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Agenda</h4>
                      <p className="text-gray-600">{committee.agenda}</p>
                    </div>
                    
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{committee.portfolios.length} portfolios</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-950 transition-colors">
                      <Download className="w-4 h-4" />
                      Background Guide
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Committee Experience Levels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose committees based on your MUN experience and expertise level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Beginner</h3>
              <p className="text-gray-600 mb-4">
                Perfect for first-time delegates or those with limited MUN experience. 
                Committees focus on fundamental diplomatic skills and procedures.
              </p>
              <div className="text-sm text-gray-500">
                Recommended for: 0-2 MUNs
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intermediate</h3>
              <p className="text-gray-600 mb-4">
                For delegates with some MUN experience who are ready for more complex 
                topics and advanced diplomatic procedures.
              </p>
              <div className="text-sm text-gray-500">
                Recommended for: 3-5 MUNs
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced</h3>
              <p className="text-gray-600 mb-4">
                Designed for experienced delegates who thrive in high-pressure environments 
                with complex agendas and specialized procedures.
              </p>
              <div className="text-sm text-gray-500">
                Recommended for: 6+ MUNs
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join a Committee?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Register now and select your preferred committees during the registration process.
            </p>
            <a
              href="/register"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg inline-block"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Committees;