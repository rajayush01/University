import React, { useState } from 'react';
import UGApplicationForm from '@/components/ui/UGApplicationForm';
import PGApplicationForm from '@/components/ui/PGApplicationForm';
import InternationalApplicationForm from '@/components/ui/InternationalApplicationForm';
import TransferApplicationForm from '@/components/ui/TransferApplicationForm';

type FormType = 'undergraduate' | 'postgraduate' | 'international' | 'transfer';

interface ApplicationForm {
  id: number;
  title: string;
  description: string;
  icon: string;
  deadline: string;
  color: string;
  formType: FormType;
}

const Admissions = () => {

  const [activeTab, setActiveTab] = useState('application');
const [selectedForm, setSelectedForm] = useState<FormType | null>(null);

const applicationForms: ApplicationForm[] = [
    {
      id: 1,
      title: 'Undergraduate Admission Form',
      description: 'Application form for bachelor degree programs',
      icon: '📝',
      deadline: 'June 30, 2024',
      color: 'blue',
      formType: 'undergraduate'
    },
    {
      id: 2,
      title: 'Postgraduate Admission Form',
      description: 'Application form for master and doctoral programs',
      icon: '🎓',
      deadline: 'July 15, 2024',
      color: 'green',
      formType: 'postgraduate'
    },
    {
      id: 3,
      title: 'International Student Form',
      description: 'Special application for international applicants',
      icon: '🌍',
      deadline: 'May 31, 2024',
      color: 'orange',
      formType: 'international'
    },
    {
      id: 4,
      title: 'Transfer Application Form',
      description: 'Form for students transferring from other institutions',
      icon: '🔄',
      deadline: 'July 1, 2024',
      color: 'cyan',
      formType: 'transfer'
    }
  ];

  const admissionDocs = [
    {
      id: 1,
      title: 'Admission Brochure 2024',
      description: 'Complete guide to admission process and requirements',
      icon: '📘',
      pdfName: 'Admission_Brochure_2024.pdf',
      pdfUrl: '/pdfs/admission-brochure.pdf',
      size: '5.2 MB'
    },
    {
      id: 2,
      title: 'Fee Structure',
      description: 'Detailed breakdown of tuition and other fees',
      icon: '💰',
      pdfName: 'Fee_Structure_2024.pdf',
      pdfUrl: '/pdfs/fee-structure.pdf',
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Scholarship Information',
      description: 'Available scholarships and financial aid options',
      icon: '🏆',
      pdfName: 'Scholarship_Guide_2024.pdf',
      pdfUrl: '/pdfs/scholarship-guide.pdf',
      size: '2.3 MB'
    },
    {
      id: 4,
      title: 'Hostel & Accommodation',
      description: 'Information about campus housing facilities',
      icon: '🏠',
      pdfName: 'Hostel_Information_2024.pdf',
      pdfUrl: '/pdfs/hostel-info.pdf',
      size: '3.1 MB'
    }
  ];

  const requirements = [
    {
      id: 1,
      title: 'Eligibility Criteria',
      description: 'Minimum qualification requirements for admission',
      icon: '✅',
      pdfName: 'Eligibility_Criteria_2024.pdf',
      pdfUrl: '/pdfs/eligibility.pdf'
    },
    {
      id: 2,
      title: 'Document Checklist',
      description: 'List of required documents for application',
      icon: '📋',
      pdfName: 'Document_Checklist_2024.pdf',
      pdfUrl: '/pdfs/document-checklist.pdf'
    },
    {
      id: 3,
      title: 'Entrance Exam Syllabus',
      description: 'Syllabus and pattern for entrance examinations',
      icon: '📚',
      pdfName: 'Entrance_Exam_Syllabus_2024.pdf',
      pdfUrl: '/pdfs/entrance-syllabus.pdf'
    },
    {
      id: 4,
      title: 'Important Dates',
      description: 'Timeline for admission process and key deadlines',
      icon: '📅',
      pdfName: 'Important_Dates_2024.pdf',
      pdfUrl: '/pdfs/important-dates.pdf'
    },
    {
      id: 5,
      title: 'Selection Process',
      description: 'Details about the admission selection procedure',
      icon: '🎯',
      pdfName: 'Selection_Process_2024.pdf',
      pdfUrl: '/pdfs/selection-process.pdf'
    },
    {
      id: 6,
      title: 'FAQs',
      description: 'Frequently asked questions about admissions',
      icon: '❓',
      pdfName: 'Admission_FAQs_2024.pdf',
      pdfUrl: '/pdfs/admission-faqs.pdf'
    }
  ];

  const handleDownload = (pdfUrl:string, pdfName:string) => {
    console.log(`Downloading: ${pdfName} from ${pdfUrl}`);
    alert(`Downloading: ${pdfName}\n\nIn production, this would download the PDF file.`);
  };

  const handleView = (pdfUrl:string, pdfName:string) => {
    console.log(`Viewing: ${pdfName} from ${pdfUrl}`);
    alert(`Opening: ${pdfName}\n\nIn production, this would open the PDF in a new tab or viewer.`);
  };



  const handleOpenForm = (formType: FormType) => {
  setSelectedForm(formType);
};

  const handleCloseForm = () => {
    setSelectedForm(null);
  };

  // Render the selected form
  const renderForm = () => {
    switch (selectedForm) {
      case 'undergraduate':
        return <UGApplicationForm onClose={handleCloseForm} />;
      case 'postgraduate':
        return <PGApplicationForm onClose={handleCloseForm} />;
      case 'international':
        return <InternationalApplicationForm onClose={handleCloseForm} />;
      case 'transfer':
        return <TransferApplicationForm onClose={handleCloseForm} />;
      default:
        return null;
    }
  };

  // If a form is selected, show only the form
  if (selectedForm) {
    return renderForm();
  }

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-10">
          <h2 className="text-sm font-semibold text-green-600 tracking-wide uppercase mb-3">
            Admissions
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Join Our University
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey with us. Fill out application forms and download necessary documents for a smooth admission process.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-700 font-medium">Applications/Year</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-700 font-medium">Acceptance Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium">Programs Offered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl">
            <div className="text-3xl font-bold text-cyan-600 mb-2">30+</div>
            <div className="text-gray-700 font-medium">Countries</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('application')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'application'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Application Forms
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'documents'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Admission Documents
          </button>
          <button
            onClick={() => setActiveTab('requirements')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'requirements'
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Requirements
          </button>
        </div>

        {/* Application Forms Tab */}
        {activeTab === 'application' && (
          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
            {applicationForms.map((form) => (
              <div
                key={form.id}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{form.icon}</div>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                    DEADLINE: {form.deadline}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{form.title}</h3>
                <p className="text-gray-600 mb-6">{form.description}</p>
                <button
                  onClick={() => handleOpenForm(form.formType)}
                  className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>📝</span> Fill Application Form
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Admission Documents Tab */}
        {activeTab === 'documents' && (
          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
            {admissionDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{doc.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                        📄 {doc.pdfName}
                      </span>
                      <span className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium">
                        {doc.size}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleView(doc.pdfUrl, doc.pdfName)}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleDownload(doc.pdfUrl, doc.pdfName)}
                        className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
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

        {/* Requirements Tab */}
        {activeTab === 'requirements' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {requirements.map((req) => (
              <div
                key={req.id}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 text-center">{req.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{req.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{req.description}</p>
                <div className="text-center mb-4">
                  <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full font-medium">
                    {req.pdfName}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleView(req.pdfUrl, req.pdfName)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    View PDF
                  </button>
                  <button
                    onClick={() => handleDownload(req.pdfUrl, req.pdfName)}
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Application Process Timeline */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Choose Form</h4>
              <p className="text-sm text-gray-600">Select the application form for your desired program</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fill Details</h4>
              <p className="text-sm text-gray-600">Complete the form with accurate information</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Submit Documents</h4>
              <p className="text-sm text-gray-600">Upload required documents and certificates</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Get Admitted</h4>
              <p className="text-sm text-gray-600">Receive confirmation and join our university</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need Help with Admissions?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our admission counselors are available to assist you throughout the process
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Contact Admission Office
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </div>

      <style>{`
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

export default Admissions;