import React from 'react';

interface CampusImage {
  image: string;
  title: string;
  subtitle: string;
}

const campusImages: CampusImage[] = [
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=500&fit=crop&auto=format",
    title: "Student Life",
    subtitle: "Vibrant community & activities"
  },
  {
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=500&fit=crop&auto=format",
    title: "Sports & Fitness",
    subtitle: "Olympic-standard facilities"
  },
  {
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=500&fit=crop&auto=format",
    title: "Dining",
    subtitle: "Diverse & healthy options"
  }
];

export default function CampusLife() {
  return (
    <section id="campus-life" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Campus <span className="bg-blue-900 bg-clip-text text-transparent">Life</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience a vibrant and diverse campus community with world-class facilities and endless opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {campusImages.map((item, index) => (
            <div key={index} className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-slate-200">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}