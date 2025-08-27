import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  Lightbulb,
  BookOpen,
  Users,
  Handshake,
  MessageSquare,
  Calendar,
  MapPin
} from 'lucide-react';

const Home: React.FC = () => {
  const featuredCommittees = [
    {
      id: 1,
      name: 'United Nations Security Council',
      image: '/committee-1.png' // Placeholder for committee image
    },
    {
      id: 2,
      name: 'General Assembly',
      image: '/committee-2.png' // Placeholder for committee image
    },
    {
      id: 3,
      name: 'Economic and Social Council',
      image: '/committee-3.png' // Placeholder for committee image
    }
  ];

  const whyKmunFeatures = [
    { icon: Lightbulb, label: 'SKILLS REQUIRED' },
    { icon: BookOpen, label: 'LEADERSHIP TRAINING' },
    { icon: Users, label: 'CREATIVE SKILLS' },
    { icon: Handshake, label: 'BUILDING RELATIONSHIPS' },
    { icon: MessageSquare, label: 'NEGOTIATION SKILLS' }
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#172d9d] to-[#797dfa] text-white py-20 overflow-hidden">
        {/* Background Image Provision */}
        <div className="absolute inset-0">
          <img 
            src="/hero-background.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                KUMARAGURU MODEL UNITED NATIONS
              </h1>
              <div className="text-2xl md:text-3xl font-bold mb-6">
                26, 27 & 28 SEPTEMBER 2025
              </div>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                to="/register"
                className="inline-block bg-white text-[#172d9d] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                onClick={() => toast.success('Welcome to K-MUN 2025 Registration!')}
                onClick={() => toast.success('Welcome to K-MUN 2025 Registration!')}
              >
                REGISTER NOW
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Building Silhouette */}
              <div className="w-full h-96 bg-[#37c9ee]/30 rounded-lg flex items-center justify-center">
                <div className="text-8xl text-[#37c9ee]/50">🏛️</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-[#37c9ee] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold">550+</div>
              <div className="text-lg font-medium">DELEGATES</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold">50+</div>
              <div className="text-lg font-medium">COUNTRIES</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold">15</div>
              <div className="text-lg font-medium">COMMITTEES</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold">100+</div>
              <div className="text-lg font-medium">AWARDS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Secretary General Letter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#37c9ee] mb-6">
                A LETTER FROM THE SECRETARY-GENERAL
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="text-lg font-bold text-[#172d9d]">
                Regards,<br />
                G.Priyansh<br />
                Secretary-General, KMUN 2025
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Secretary General Image */}
              <div className="w-64 h-80 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <div className="text-6xl">👩‍💼</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About KMUN 2025 */}
      <section className="py-20 bg-[#172d9d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ABOUT KMUN 2025
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Kumaraguru MUN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#172d9d] mb-6">
              WHY KUMARAGURU MUN
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {whyKmunFeatures.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-[#37c9ee]/10 p-6 rounded-lg"
              >
                <div className="w-16 h-16 bg-[#37c9ee] rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-[#172d9d]">
                  {feature.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Committees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#172d9d] mb-4">
              FEATURED COMMITTEES
            </h2>
            <p className="text-lg text-gray-600">
              We have a list of 15 dynamic committees lined up for you this year!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredCommittees.map((committee, index) => (
              <motion.div
                key={committee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-4xl">🏛️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#172d9d] text-center">
                    {committee.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-3 h-3 bg-[#172d9d] rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>

          <div className="text-center">
            <Link
              to="/committees"
              className="inline-block bg-[#172d9d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#797dfa] transition-colors"
              onClick={() => toast('Explore our amazing committees!')}
              onClick={() => toast('Explore our amazing committees!')}
            >
              CHECK THEM OUT
            </Link>
          </div>
        </div>
      </section>

      {/* Registration Details & Cash Prizes */}
      <section className="py-20 bg-gradient-to-br from-[#172d9d] to-[#797dfa] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Registration Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Individual Delegate</span>
                  <span className="text-2xl font-bold">₹1,599</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Per Delegate for Group Delegation</span>
                  <span className="text-2xl font-bold">₹1,399</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Cash Prizes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Best Delegate</span>
                  <span className="text-2xl font-bold">₹5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Outstanding Delegate</span>
                  <span className="text-2xl font-bold">₹2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Honourable Delegate</span>
                  <span className="text-2xl font-bold">₹1,250</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;