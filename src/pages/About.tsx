import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50+', label: 'Years of Excellence' },
    { number: '15K+', label: 'Students Enrolled' },
    { number: '500+', label: 'Expert Faculty' },
    { number: '95%', label: 'Placement Rate' }
  ];

  const features = [
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description: 'World-class curriculum designed by industry experts and academic leaders.'
    },
    {
      icon: '🔬',
      title: 'Research & Innovation',
      description: 'State-of-the-art labs and research facilities for groundbreaking discoveries.'
    },
    {
      icon: '🌍',
      title: 'Global Network',
      description: 'Partnerships with leading universities and institutions worldwide.'
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Dedicated placement cell with connections to top companies globally.'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 mt-10 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">About Us</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Building Tomorrow's Leaders
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing world-class education that empowers students to achieve their dreams and make a positive impact on society.
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                alt="University Campus"
                className="relative rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm">Years Legacy</p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to transform education, our university has been at the forefront of academic excellence for over five decades. We've grown from a small college to a premier institution recognized globally for our innovative programs and research contributions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our commitment to fostering critical thinking, creativity, and leadership has produced graduates who excel in diverse fields, from technology and business to arts and sciences.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
              Learn More About Us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold text-gray-900 text-center mb-12 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-5xl mb-4 animate-bounce">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Image Gallery */}
        <div className={`grid grid-cols-3 gap-4 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="col-span-1 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"
              alt="Students"
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="col-span-1 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80"
              alt="Library"
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="col-span-1 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&q=80"
              alt="Campus"
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;