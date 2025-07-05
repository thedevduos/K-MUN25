import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  BookOpen, 
  Video,
  Search,
  Filter,
  Calendar,
  Eye
} from 'lucide-react';

const Resources: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All Resources' },
    { id: 'guides', label: 'Background Guides' },
    { id: 'rules', label: 'Rules & Procedures' },
    { id: 'templates', label: 'Templates' },
    { id: 'videos', label: 'Training Videos' }
  ];

  const resources = [
    {
      id: 1,
      title: 'UNSC Background Guide',
      description: 'Comprehensive guide for the United Nations Security Council committee',
      type: 'guides',
      format: 'PDF',
      size: '2.4 MB',
      uploadDate: '2024-12-15',
      downloads: 245,
      url: '/resources/unsc-bg.pdf'
    },
    {
      id: 2,
      title: 'General Assembly Rules of Procedure',
      description: 'Official rules and procedures for General Assembly committees',
      type: 'rules',
      format: 'PDF',
      size: '1.8 MB',
      uploadDate: '2024-12-10',
      downloads: 189,
      url: '/resources/ga-rules.pdf'
    },
    {
      id: 3,
      title: 'Position Paper Template',
      description: 'Standard template for writing position papers',
      type: 'templates',
      format: 'DOCX',
      size: '0.5 MB',
      uploadDate: '2024-12-08',
      downloads: 156,
      url: '/resources/position-paper-template.docx'
    },
    {
      id: 4,
      title: 'MUN Training Video Series',
      description: 'Complete video series on MUN procedures and best practices',
      type: 'videos',
      format: 'MP4',
      size: '150 MB',
      uploadDate: '2024-12-05',
      downloads: 98,
      url: '/resources/mun-training.mp4'
    },
    {
      id: 5,
      title: 'ECOSOC Background Guide',
      description: 'Economic and Social Council committee background guide',
      type: 'guides',
      format: 'PDF',
      size: '2.1 MB',
      uploadDate: '2024-12-12',
      downloads: 134,
      url: '/resources/ecosoc-bg.pdf'
    },
    {
      id: 6,
      title: 'Resolution Template',
      description: 'Standard format for drafting resolutions',
      type: 'templates',
      format: 'DOCX',
      size: '0.3 MB',
      uploadDate: '2024-12-07',
      downloads: 167,
      url: '/resources/resolution-template.docx'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getFileIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-8 h-8 text-red-600" />;
      case 'docx':
        return <BookOpen className="w-8 h-8 text-blue-600" />;
      case 'mp4':
        return <Video className="w-8 h-8 text-purple-600" />;
      default:
        return <FileText className="w-8 h-8 text-gray-600" />;
    }
  };

  const handleDownload = (resource: any) => {
    console.log('Downloading:', resource.title);
    // Implement download logic
  };

  const handlePreview = (resource: any) => {
    console.log('Previewing:', resource.title);
    // Implement preview logic
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Access all the essential documents, guides, and materials for Kumaraguru MUN 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getFileIcon(resource.format)}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                        <p className="text-sm text-gray-500">{resource.format} • {resource.size}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{resource.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <span>{resource.downloads} downloads</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePreview(resource)}
                      className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button
                      onClick={() => handleDownload(resource)}
                      className="flex-1 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Contact our team for assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Document Request</h3>
              <p className="text-gray-600 mb-4">Need a specific document that's not available?</p>
              <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                Request Document
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Training Materials</h3>
              <p className="text-gray-600 mb-4">Access additional training resources and guides</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                View Training
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Watch step-by-step video guides and tutorials</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Watch Videos
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;