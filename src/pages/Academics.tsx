import React, { useState } from 'react';

const Academics = () => {
  const [selectedCategory, setSelectedCategory] = useState('programs');

  const programs = [
    {
      id: 1,
      title: 'Undergraduate Programs',
      description: 'Comprehensive bachelor degree programs across various disciplines',
      icon: '🎓',
      pdfName: 'UG_Programs_2024.pdf',
      pdfUrl: '/pdfs/ug-programs.pdf',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Postgraduate Programs',
      description: 'Advanced master and doctoral programs for specialized knowledge',
      icon: '📚',
      pdfName: 'PG_Programs_2024.pdf',
      pdfUrl: '/pdfs/pg-programs.pdf',
      color: 'green'
    },
    {
      id: 3,
      title: 'Professional Courses',
      description: 'Industry-oriented certificate and diploma programs',
      icon: '💼',
      pdfName: 'Professional_Courses_2024.pdf',
      pdfUrl: '/pdfs/professional-courses.pdf',
      color: 'orange'
    },
    {
      id: 4,
      title: 'Online Programs',
      description: 'Flexible online learning programs for working professionals',
      icon: '💻',
      pdfName: 'Online_Programs_2024.pdf',
      pdfUrl: '/pdfs/online-programs.pdf',
      color: 'cyan'
    }
  ];

  const syllabi = [
    {
      id: 1,
      department: 'Computer Science',
      icon: '🖥️',
      pdfName: 'CS_Syllabus_2024.pdf',
      pdfUrl: '/pdfs/cs-syllabus.pdf'
    },
    {
      id: 2,
      department: 'Engineering',
      icon: '⚙️',
      pdfName: 'Engineering_Syllabus_2024.pdf',
      pdfUrl: '/pdfs/engineering-syllabus.pdf'
    },
    {
      id: 3,
      department: 'Business Management',
      icon: '📊',
      pdfName: 'MBA_Syllabus_2024.pdf',
      pdfUrl: '/pdfs/mba-syllabus.pdf'
    },
    {
      id: 4,
      department: 'Sciences',
      icon: '🔬',
      pdfName: 'Science_Syllabus_2024.pdf',
      pdfUrl: '/pdfs/science-syllabus.pdf'
    }
  ];

  const academicDocs = [
    {
      id: 1,
      title: 'Academic Calendar 2024-25',
      description: 'Complete academic calendar with important dates',
      icon: '📅',
      pdfName: 'Academic_Calendar_2024.pdf',
      pdfUrl: '/pdfs/academic-calendar.pdf'
    },
    {
      id: 2,
      title: 'Examination Guidelines',
      description: 'Rules and regulations for examinations',
      icon: '📝',
      pdfName: 'Exam_Guidelines_2024.pdf',
      pdfUrl: '/pdfs/exam-guidelines.pdf'
    },
    {
      id: 3,
      title: 'Grading System',
      description: 'Complete grading and evaluation criteria',
      icon: '📈',
      pdfName: 'Grading_System_2024.pdf',
      pdfUrl: '/pdfs/grading-system.pdf'
    },
    {
      id: 4,
      title: 'Research Opportunities',
      description: 'Research programs and funding information',
      icon: '🔍',
      pdfName: 'Research_Guide_2024.pdf',
      pdfUrl: '/pdfs/research-guide.pdf'
    }
  ];

  const handleDownload = (pdfUrl: string, pdfName: string) => {
    // Simulated download - in real implementation, this would trigger actual PDF download
    console.log(`Downloading: ${pdfName} from ${pdfUrl}`);
    alert(`Downloading: ${pdfName}\n\nIn production, this would download the PDF file.`);
  };

  const handleView = (pdfUrl: string, pdfName: string) => {
    // Simulated view - in real implementation, this would open PDF in new tab or modal
    console.log(`Viewing: ${pdfName} from ${pdfUrl}`);
    alert(`Opening: ${pdfName}\n\nIn production, this would open the PDF in a new tab or viewer.`);
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; hover: string }> = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        hover: 'hover:border-blue-400'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        hover: 'hover:border-green-400'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        hover: 'hover:border-orange-400'
      },
      cyan: {
        bg: 'bg-cyan-50',
        border: 'border-cyan-200',
        text: 'text-cyan-600',
        hover: 'hover:border-cyan-400'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-10">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            Academics
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive academic programs, syllabi, and resources designed to foster innovation and excellence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('programs')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'programs'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Programs
          </button>
          <button
            onClick={() => setSelectedCategory('syllabus')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'syllabus'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Syllabus
          </button>
          <button
            onClick={() => setSelectedCategory('documents')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === 'documents'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Academic Documents
          </button>
        </div>

        {/* Programs Section */}
        {selectedCategory === 'programs' && (
          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
            {programs.map((program) => {
              const colorClasses = getColorClasses(program.color);
              return (
                <div
                  key={program.id}
                  className={`border-2 ${colorClasses.border} ${colorClasses.bg} rounded-xl p-6 ${colorClasses.hover} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{program.icon}</div>
                    <span className={`${colorClasses.text} text-sm font-semibold px-3 py-1 bg-white rounded-full`}>
                      PDF Available
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{program.pdfName}</span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => handleView(program.pdfUrl, program.pdfName)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <span>👁️</span> View
                    </button>
                    <button
                      onClick={() => handleDownload(program.pdfUrl, program.pdfName)}
                      className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <span>⬇️</span> Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Syllabus Section */}
        {selectedCategory === 'syllabus' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {syllabi.map((syllabus) => (
              <div
                key={syllabus.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl mb-4 text-center">{syllabus.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {syllabus.department}
                </h3>
                <div className="text-center mb-4">
                  <span className="text-xs text-gray-500 font-medium bg-white px-3 py-1 rounded-full">
                    {syllabus.pdfName}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleView(syllabus.pdfUrl, syllabus.pdfName)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm"
                  >
                    View Syllabus
                  </button>
                  <button
                    onClick={() => handleDownload(syllabus.pdfUrl, syllabus.pdfName)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Academic Documents Section */}
        {selectedCategory === 'documents' && (
          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
            {academicDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{doc.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                        📄 {doc.pdfName}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleView(doc.pdfUrl, doc.pdfName)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-sm"
                      >
                        View PDF
                      </button>
                      <button
                        onClick={() => handleDownload(doc.pdfUrl, doc.pdfName)}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm"
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need More Information?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our academic counselors are here to help you choose the right program
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Contact Academic Office
          </button>
        </div>
      </div>

      <style >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Academics;