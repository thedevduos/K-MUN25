import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  ChevronRight,
  Globe,
  BookOpen,
  Target
} from 'lucide-react';
import CountdownTimer from '../components/Common/CountdownTimer';

const Home: React.FC = () => {
  const committees = [
    { name: 'United Nations Security Council', logo: '🛡️' },
    { name: 'General Assembly', logo: '🌍' },
    { name: 'Economic and Social Council', logo: '💼' },
    { name: 'Human Rights Council', logo: '⚖️' },
    { name: 'International Court of Justice', logo: '🏛️' },
    { name: 'World Health Organization', logo: '🏥' }
  ];

  const stats = [
    { icon: Users, label: 'Delegates', value: '500+' },
    { icon: Globe, label: 'Countries', value: '50+' },
    { icon: BookOpen, label: 'Committees', value: '15' },
    { icon: Award, label: 'Awards', value: '100+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Kumaraguru Model United Nations
                <span className="block text-2xl md:text-4xl text-blue-200 mt-2">
                  2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                "Diplomacy in Action: Shaping Tomorrow's World"
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 mb-12">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>March 15-17, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Kumaraguru College of Technology, Coimbatore</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <CountdownTimer />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Link
                to="/register"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Kumaraguru MUN 2025
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Join the most prestigious Model United Nations conference in South India. 
                Kumaraguru MUN brings together exceptional students from across the country to 
                engage in meaningful diplomatic discourse and tackle the world's most 
                pressing challenges.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Excellence in Diplomacy</h3>
                    <p className="text-gray-600">Experience world-class committee sessions led by expert chairs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">National Perspective</h3>
                    <p className="text-gray-600">Engage with delegates from institutions across India</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium transition-colors"
              >
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="MUN Conference"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Committees
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of committees, each tackling crucial global issues 
              with authentic UN procedures and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-6xl mb-4">{committee.logo}</div>
                <h3 className="text-lg font-bold text-gray-900">{committee.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/committees"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Keynote Speakers - Commented out as requested */}
      {/*
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keynote Speakers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from distinguished diplomats, policy experts, and thought leaders 
              who have shaped international relations.
            </p>
          </motion.div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join Kumaraguru MUN 2025 and be part of an unforgettable diplomatic experience. 
              Registration is now open for a limited time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/register"
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
              >
                Register Now
              </Link>
              <Link
                to="/login"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;