import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, RefreshCw, Mail } from 'lucide-react';

const Maintenance: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-800 to-orange-700 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center"
            >
              <Wrench className="w-12 h-12 text-yellow-300" />
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Under Maintenance
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold mb-6 text-yellow-200"
          >
            We're making K-MUN 2025 even better!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Our team is working hard to improve your experience. We'll be back soon with 
            exciting updates and enhanced features for K-MUN 2025.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <div className="flex justify-center mb-4">
              <Clock className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="font-semibold mb-2">Estimated Time</h3>
            <p className="text-sm text-orange-100">2-3 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <div className="flex justify-center mb-4">
              <Wrench className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="font-semibold mb-2">What We're Doing</h3>
            <p className="text-sm text-orange-100">Performance improvements & new features</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-orange-100">Follow us on social media</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={handleRefresh}
            className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Check Again
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-orange-200 text-sm"
        >
          <p>For urgent inquiries, contact us at support@kmun2025.com</p>
          <p className="mt-2">Follow us on Instagram and Twitter for live updates</p>
        </motion.div>

        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mt-8 mx-auto h-2 bg-white/20 rounded-full overflow-hidden max-w-md"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 2 }}
            className="h-full bg-yellow-400 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Maintenance; 