import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About <span className="bg-blue-900 bg-clip-text text-transparent">Our Legacy</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Founded in 1922, we have been at the forefront of higher education, research, and innovation for over a century.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Vision & Mission</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              To be a globally recognized institution of higher learning, fostering intellectual excellence, 
              innovation, and social responsibility. We are committed to providing world-class education, 
              promoting cutting-edge research, and developing future leaders who contribute meaningfully to society.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h4 className="font-bold text-indigo-600 text-xl mb-2">Excellence</h4>
                <p className="text-slate-600">Pursuing the highest standards</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="font-bold text-purple-600 text-xl mb-2">Innovation</h4>
                <p className="text-slate-600">Fostering breakthrough research</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&auto=format" 
              alt="University Library Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-bold">State-of-the-art Library</p>
              <p className="text-indigo-200">Over 5 million volumes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}