import React, { useState } from 'react';

interface TransferApplicationFormProps {
  onClose: () => void;
}

const TransferApplicationForm: React.FC<TransferApplicationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    studentId: '',
    
    // Current Institution
    currentUniversity: '',
    currentProgram: '',
    currentYear: '',
    expectedCredits: '',
    currentGPA: '',
    
    // Transfer Information
    reasonForTransfer: '',
    desiredProgram: '',
    desiredYear: '',
    startSemester: '',
    
    // Academic History
    previousInstitutions: '',
    completedCredits: '',
    
    // Documents
    transcripts: null,
    syllabusDocuments: null,
    recommendationLetter: null,
    goodStanding: null,
    
    // Additional
    extracurriculars: '',
    personalStatement: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleInputChange = (  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

  if (!files || files.length === 0) return;

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
    console.log('Transfer Form submitted:', formData);
    alert('Transfer application submitted successfully! Our transfer admissions team will evaluate your credits and contact you soon.');
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
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
                  Current Student ID
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="At current institution"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Institution Information</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current University/College <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="currentUniversity"
                value={formData.currentUniversity}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Program/Major <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="currentProgram"
                value={formData.currentProgram}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Year <span className="text-red-500">*</span>
                </label>
                <select
                  name="currentYear"
                  value={formData.currentYear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Completed Credits <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="completedCredits"
                  value={formData.completedCredits}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current GPA <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="currentGPA"
                  value={formData.currentGPA}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="e.g., 3.5/4.0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Expected Transfer Credits
              </label>
              <input
                type="number"
                name="expectedCredits"
                value={formData.expectedCredits}
                onChange={handleInputChange}
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Number of credits you expect to transfer"
              />
              <p className="text-xs text-gray-500 mt-1">Our admissions team will evaluate your credits for transfer</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Previous Institutions (if any)
              </label>
              <textarea
                name="previousInstitutions"
                value={formData.previousInstitutions}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="List any other colleges or universities you've attended..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Transfer Details</h3>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Desired Program at Our University <span className="text-red-500">*</span>
              </label>
              <select
                name="desiredProgram"
                value={formData.desiredProgram}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="">Select a program</option>
                <option value="computer-science">Computer Science</option>
                <option value="engineering">Engineering</option>
                <option value="business">Business Administration</option>
                <option value="medicine">Medicine</option>
                <option value="law">Law</option>
                <option value="psychology">Psychology</option>
                <option value="biology">Biology</option>
                <option value="economics">Economics</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Desired Entry Year <span className="text-red-500">*</span>
                </label>
                <select
                  name="desiredYear"
                  value={formData.desiredYear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select year</option>
                  <option value="1">First Year</option>
                  <option value="2">Second Year</option>
                  <option value="3">Third Year</option>
                  <option value="4">Fourth Year</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Intended Start Semester <span className="text-red-500">*</span>
                </label>
                <select
                  name="startSemester"
                  value={formData.startSemester}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Select semester</option>
                  <option value="fall-2024">Fall 2024</option>
                  <option value="spring-2025">Spring 2025</option>
                  <option value="fall-2025">Fall 2025</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Reason for Transfer <span className="text-red-500">*</span>
              </label>
              <textarea
                name="reasonForTransfer"
                value={formData.reasonForTransfer}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Please explain why you wish to transfer to our university. Include academic goals, program interests, and how our university aligns with your aspirations..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Word count: {formData.reasonForTransfer.split(' ').filter(word => word.length > 0).length}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Extracurricular Activities & Leadership
              </label>
              <textarea
                name="extracurriculars"
                value={formData.extracurriculars}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="List any clubs, sports, volunteer work, or leadership positions..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">📌 Transfer Requirements:</span> We need official transcripts from all institutions attended and course syllabi to evaluate transfer credits.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Official Transcripts <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="transcripts"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
              />
              <p className="text-xs text-gray-500 mt-1">From all colleges/universities attended</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Course Syllabi / Course Descriptions <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="syllabusDocuments"
                onChange={handleFileChange}
                accept=".pdf,.zip"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
              />
              <p className="text-xs text-gray-500 mt-1">Required for credit evaluation (can upload as ZIP file)</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Letter of Good Standing <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="goodStanding"
                onChange={handleFileChange}
                accept=".pdf"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
              />
              <p className="text-xs text-gray-500 mt-1">From your current institution</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Recommendation Letter
              </label>
              <input
                type="file"
                name="recommendationLetter"
                onChange={handleFileChange}
                accept=".pdf"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
              />
              <p className="text-xs text-gray-500 mt-1">Optional but recommended from a professor or academic advisor</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Personal Statement
              </label>
              <textarea
                name="personalStatement"
                value={formData.personalStatement}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Optional: Share any additional information about your academic journey, challenges overcome, or unique perspectives you bring..."
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2">Credit Transfer Policy:</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Maximum 60 credits can be transferred</li>
                <li>• Minimum grade of C required for transfer</li>
                <li>• Credits must be from accredited institutions</li>
                <li>• Evaluation takes 2-3 weeks after submission</li>
              </ul>
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
            className="flex items-center text-cyan-600 hover:text-cyan-700 font-semibold mb-4 transition-colors"
          >
            <span className="mr-2">←</span> Back to Admissions
          </button>
          
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">🔄 Transfer Student Application</h1>
            <p className="text-cyan-50">Continue your academic journey with us</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-cyan-600 h-3 rounded-full transition-all duration-300"
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
                className="px-8 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300 shadow-lg"
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                Submit Application 🔄
              </button>
            )}
          </div>
        </form>

        <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <p className="text-sm text-purple-800">
            <span className="font-semibold">💡 Transfer Advantage:</span> We offer personalized credit evaluation and academic advising to ensure a smooth transition. Most transfer students complete their degree within 2-3 years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransferApplicationForm;