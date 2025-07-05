import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Educational information (Institution, grade/year of study)',
        'Committee and portfolio preferences',
        'Payment information (processed securely through third-party providers)',
        'Communication records and correspondence',
        'Website usage data and analytics'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Process your registration for Kumaraguru MUN 2025',
        'Communicate important updates about the conference',
        'Allocate committees and portfolios based on preferences',
        'Process payments and issue invoices',
        'Provide customer support and respond to inquiries',
        'Improve our services and website functionality'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with committee chairs for allocation purposes',
        'Payment information is processed by secure third-party payment processors',
        'We may share information if required by law or to protect our rights',
        'Anonymous, aggregated data may be used for statistical purposes'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All sensitive information is encrypted during transmission',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates are performed',
        'Payment information is processed through PCI-compliant systems'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request corrections to inaccurate information',
        'Request deletion of your personal data (subject to legal requirements)',
        'Opt-out of non-essential communications',
        'Withdraw consent for data processing (where applicable)',
        'File a complaint with relevant data protection authorities'
      ]
    },
    {
      icon: Mail,
      title: 'Contact Information',
      content: [
        'For privacy-related questions or concerns, contact us at:',
        'Email: privacy@kumaraguruMUN.com',
        'Phone: +91 422 2669000',
        'Address: Kumaraguru College of Technology, Coimbatore - 641049',
        'Data Protection Officer: dpo@kumaraguruMUN.com'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            <strong>Last Updated:</strong> December 15, 2024
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Kumaraguru Model United Nations ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website and register for our conference. Please read this privacy policy carefully. 
              If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies and Tracking</h3>
                <p className="text-gray-700">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and understand where our visitors are coming from. You can 
                  control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h3>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites or services. We are not responsible 
                  for the privacy practices of these third parties. We encourage you to read their privacy 
                  policies before providing any information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h3>
                <p className="text-gray-700">
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this privacy policy, unless a longer retention period is required or 
                  permitted by law.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h3>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new privacy policy on this page and updating the "Last Updated" date.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-blue-50 rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Policy?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@kumaraguruMUN.com"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Email Privacy Team
              </a>
              <a
                href="/contact"
                className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold border border-blue-800 hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;