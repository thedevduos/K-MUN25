import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MUN</span>
              </div>
              <span className="text-xl font-bold">Kumaraguru MUN 2025</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Join us for an extraordinary Model United Nations experience where future leaders 
              engage in diplomatic discourse and tackle the world's most pressing challenges.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">mun@kct.ac.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+91 422 2669000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Kumaraguru Institutions, Coimbatore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/committees" className="text-gray-300 hover:text-white transition-colors">
                  Committees
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Campus Location</h3>
            <ul className="space-y-2 text-gray-300">
              <li>September 27-29, 2025</li>
              <li>Kumaraguru College of Technology</li>
              <li>Chinnavedampatti, Coimbatore</li>
              <li>Tamil Nadu - 641049</li>
              <li>Map Link</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Kumaraguru Model United Nations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/delegate-guidelines" className="text-gray-400 hover:text-white text-sm transition-colors">
              Delegate Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;