import React, { useState, useEffect } from 'react';
import { ChevronRight, Award } from 'lucide-react';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&auto=format",
      alt: "University Campus Building"
    },
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&auto=format",
      alt: "Students in Library"
    },
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&auto=format",
      alt: "Graduation Ceremony"
    },
    {
      url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop&auto=format",
      alt: "Campus Courtyard"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

const getStackPosition = (index: number): number => {
    const diff = (index - activeIndex + images.length) % images.length;
    return diff;
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block rounded-full px-6 py-2">
              <span className="text-indigo-600 font-semibold text-sm">🏆 NAAC A++ Accredited</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Shape Your
              <span className="bg-blue-900 bg-clip-text text-transparent"> Future</span>
              <br />With Excellence
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Join a century-old legacy of academic brilliance, groundbreaking research, and transformative education. 
              Discover your potential at one of India's most prestigious universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Explore Programs</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-900 hover:bg-opacity-10 transition-all duration-300">
                Virtual Campus Tour
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[500px] perspective-1000">
              {images.map((image, index) => {
                const stackPos = getStackPosition(index);
                const isActive = stackPos === 0;
                const isMovingToBack = isTransitioning && isActive;
                const isVisible = stackPos <= 3;
                
                // Calculate final stacked position
                const finalStackPos = isMovingToBack ? 3 : stackPos;
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all ease-out"
                    style={{
                      zIndex: isMovingToBack ? 1 : (images.length - stackPos),
                      transform: isVisible 
                        ? `translateY(${-finalStackPos * 15}px) translateX(${finalStackPos * 10}px) scale(${1 - finalStackPos * 0.04}) rotateY(${finalStackPos * 3}deg)`
                        : 'translateY(60px) translateX(40px) scale(0.8) rotateY(12deg)',
                      opacity: 1,
                      transitionDuration: isMovingToBack ? '1000ms' : '600ms',
                      filter: `brightness(${1 - finalStackPos * 0.15})`,
                      pointerEvents: isActive && !isMovingToBack ? 'auto' : 'none'
                    }}
                  >
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"
                      style={{ 
                        opacity: isActive && !isMovingToBack ? 1 : 0.3 
                      }}
                    ></div>
                  </div>
                );
              })}

              {/* Rank badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform z-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">NIRF Rank 5</p>
                    <p className="text-sm text-slate-600">Among Universities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1500px;
        }
      `}</style>
    </section>
  );
}