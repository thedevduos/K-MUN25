import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  Shield, 
  CreditCard, 
  Users,
  Clock,
  Mail
} from 'lucide-react';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: Users,
      title: 'Registration and Eligibility',
      content: [
        'Participants must be currently enrolled students or working professionals',
        'All information provided during registration must be accurate and complete',
        'Each participant may register for only one committee',
        'Registration is subject to availability and committee allocation',
        'Participants under 18 must have parental consent',
        'False information may result in disqualification without refund'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      content: [
        'Registration fees must be paid within 48 hours of registration',
        'All payments are processed in Indian Rupees (INR)',
        'Payment confirmation is required for committee allocation',
        'Late payment may result in loss of registration',
        'Additional charges may apply for accommodation and meals',
        'All fees are inclusive of applicable taxes'
      ]
    },
    {
      icon: Clock,
      title: 'Cancellation and Refunds',
      content: [
        'Cancellations must be requested in writing via email',
        'Refunds are processed according to our refund policy',
        'Cancellations 30+ days before: 80% refund',
        'Cancellations 15-29 days before: 50% refund',
        'Cancellations less than 15 days: No refund',
        'Processing fees are non-refundable in all cases'
      ]
    },
    {
      icon: Shield,
      title: 'Code of Conduct',
      content: [
        'Maintain professional and respectful behavior at all times',
        'Follow all conference rules and delegate guidelines',
        'Respect fellow participants, staff, and venue property',
        'Adhere to dress code requirements throughout the conference',
        'No harassment, discrimination, or inappropriate conduct',
        'Violations may result in immediate removal without refund'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Liability and Disclaimers',
      content: [
        'Participants attend the conference at their own risk',
        'Organizers are not liable for personal injury or property damage',
        'Participants are responsible for their own travel and accommodation',
        'Conference schedule and content may change without notice',
        'Organizers are not responsible for technical issues or delays',
        'Participants must have adequate insurance coverage'
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        'All conference materials are protected by copyright',
        'Participants may not reproduce or distribute conference content',
        'Position papers and resolutions become property of the conference',
        'Photography and recording may occur during the event',
        'Participants consent to use of their likeness in promotional materials',
        'Plagiarism in any form will result in disqualification'
      ]
    }
  ];

  const importantNotes = [
    {
      title: 'Force Majeure',
      description: 'The conference may be cancelled or postponed due to circumstances beyond our control, including but not limited to natural disasters, government restrictions, or public health emergencies.'
    },
    {
      title: 'Governing Law',
      description: 'These terms are governed by the laws of India and the jurisdiction of Coimbatore courts.'
    },
    {
      title: 'Modifications',
      description: 'We reserve the right to modify these terms at any time. Participants will be notified of significant changes.'
    },
    {
      title: 'Contact for Disputes',
      description: 'Any disputes should be addressed to legal@kumaraguruMUN.com within 30 days of the incident.'
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
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before registering for Kumaraguru MUN 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            <strong>Last Updated:</strong> December 15, 2024 | <strong>Effective Date:</strong> January 1, 2025
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
              Welcome to Kumaraguru Model United Nations 2025. These Terms of Service ("Terms") govern your 
              participation in our conference and use of our website. By registering for the conference or 
              using our services, you agree to be bound by these terms. If you do not agree with any part 
              of these terms, please do not register or use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Important Notes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Legal Notes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Additional terms and conditions that apply to your participation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {importantNotes.map((note, index) => (
              <motion.div
                key={note.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{note.title}</h3>
                <p className="text-gray-700">{note.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-8"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Acceptance of Terms</h3>
                <p className="text-gray-700 mb-4">
                  By completing the registration process and/or attending Kumaraguru MUN 2025, you acknowledge 
                  that you have read, understood, and agree to be bound by these Terms of Service, our Privacy 
                  Policy, and Delegate Guidelines.
                </p>
                <p className="text-gray-700">
                  Your continued participation in the conference constitutes ongoing acceptance of these terms, 
                  including any modifications that may be made.
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
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service or need clarification 
              on any provisions, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@kumaraguruMUN.com"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Email Legal Team
              </a>
              <a
                href="/contact"
                className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold border border-blue-800 hover:bg-blue-50 transition-colors"
              >
                General Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;