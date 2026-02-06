import React, { useState } from 'react';

interface PGApplicationFormProps {
  onClose: () => void;
}

const PGApplicationForm: React.FC<PGApplicationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    nationality: '',
    
    // Academic Background
    undergradUniversity: '',
    undergradDegree: '',
    undergradMajor: '',
    undergradGPA: '',
    undergradYear: '',
    
    // Program Details
    programLevel: '',
    desiredProgram: '',
    researchInterest: '',
    advisor: '',
    
    // Professional Experience
    workExperience: '',
    publications: '',
    
    // Documents
    transcripts: null,
    cv: null,
    researchProposal: null,
    recommendationLetter1: null,
    recommendationLetter2: null,
    
    // Statement of Purpose
    statementOfPurpose: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleInputChange = (  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, files } = e.target;
  if (!files) return;

  setFormData(prev => ({
    ...prev,
    [name]: files[0]
  }));
};


  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('PG Form submitted:', formData);
    alert('Postgraduate application submitted successfully! Our admissions committee will review your application.');
    onClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Background</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Undergraduate University <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="undergradUniversity"
                value={formData.undergradUniversity}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Degree Obtained <span className="text-red-500">*</span>
                </label>
                <select
                  name="undergradDegree"
                  value={formData.undergradDegree}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="honours">Honours Degree</option>
                  <option value="master">Master's Degree</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Major/Field of Study <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="undergradMajor"
                  value={formData.undergradMajor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  GPA / Grade <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="undergradGPA"
                  value={formData.undergradGPA}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="3.8/4.0 or First Class"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Year of Graduation <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="undergradYear"
                  value={formData.undergradYear}
                  onChange={handleInputChange}
                  required
                  min="1950"
                  max="2030"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Publications (if any)
              </label>
              <textarea
                name="publications"
                value={formData.publications}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="List any published papers, journals, or conference presentations..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Details</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Program Level <span className="text-red-500">*</span>
              </label>
              <select
                name="programLevel"
                value={formData.programLevel}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select program level</option>
                <option value="masters">Master's Program</option>
                <option value="phd">Doctoral (PhD) Program</option>
                <option value="postdoc">Post-Doctoral Research</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Desired Program <span className="text-red-500">*</span>
              </label>
              <select
                name="desiredProgram"
                value={formData.desiredProgram}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select a program</option>
                <option value="computer-science">Computer Science & AI</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business Administration (MBA)</option>
                <option value="medicine">Medical Sciences</option>
                <option value="law">Law</option>
                <option value="biotechnology">Biotechnology</option>
                <option value="data-science">Data Science</option>
                <option value="economics">Economics</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Research Interest <span className="text-red-500">*</span>
              </label>
              <textarea
                name="researchInterest"
                value={formData.researchInterest}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Describe your research interests, areas of focus, and what you hope to achieve in this program..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Advisor / Faculty Member
              </label>
              <input
                type="text"
                name="advisor"
                value={formData.advisor}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="If you have identified a potential advisor"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Work Experience
              </label>
              <textarea
                name="workExperience"
                value={formData.workExperience}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="List your relevant work experience including job titles, companies, duration, and key responsibilities..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Statement of Purpose <span className="text-red-500">*</span>
              </label>
              <textarea
                name="statementOfPurpose"
                value={formData.statementOfPurpose}
                onChange={handleInputChange}
                required
                rows={10}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Write a comprehensive statement explaining your academic goals, research interests, career aspirations, and why you are a good fit for this program (500-1000 words)..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Word count: {formData.statementOfPurpose.split(' ').filter(word => word.length > 0).length}
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">📌 Important:</span> All documents must be in PDF format. 
                Recommendation letters should be sent directly by your referees.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Academic Transcripts <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="transcripts"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Curriculum Vitae (CV) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Research Proposal <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="researchProposal"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-xs text-gray-500 mt-1">PhD applicants: 2000-3000 words</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recommendation Letter 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="recommendationLetter1"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recommendation Letter 2 <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="recommendationLetter2"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-20">
        <div className="mb-8">
          <button
            onClick={onClose}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-4 transition-colors"
          >
            <span className="mr-2">←</span> Back to Admissions
          </button>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Postgraduate Admission Form</h1>
            <p className="text-blue-50">Application for Master's and Doctoral Programs</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 mb-8">
            {renderStepContent()}
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
              >
                Submit Application 🎓
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PGApplicationForm;