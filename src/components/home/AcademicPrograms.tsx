import React, { useState } from "react";

const AcademicPrograms = () => {
 const [hoveredCard, setHoveredCard] = useState<number | null>(null);

 const [playingVideo, setPlayingVideo] = useState<string | null>(null);


  const departments = [
    {
      id: 1,
      title: "Engineering",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      size: "big" // 1 col x 2 rows (tall)
    },
    {
      id: 2,
      title: "Economics",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      size: "tall" // 2 cols x 1 row (wide)
    },
    {
      id: 3,
      title: "Schools",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      size: "regular" // 1 col x 1 row (perfect square)
    },
    {
      id: 4,
      title: "Sciences",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      size: "big" // 2 cols x 2 rows (largest)
    },
    // {
    //   id: 5,
    //   title: "Humanities",
    //   image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    //   video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    //   size: "regular" // 1 col x 1 row
    // },
    {
      id: 6,
      title: "Management",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      size: "regular" // 1 col x 2 rows
    }
  ];

  const getSizeClasses = (size: string) => {

    switch(size) {
      case "big":
        return "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2"; // Largest - 2x2
      case "wide":
        return "col-span-1 sm:col-span-2 row-span-1"; // Wide - 2x1
      case "tall":
        return "col-span-1 row-span-2"; // Tall - 1x2
      case "regular":
        return "col-span-1 row-span-1"; // Perfect square - 1x1
      default:
        return "col-span-1 row-span-1";
    }
  };

  const handleCardClick = (videoUrl: string) => {

    setPlayingVideo(videoUrl);
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="bg-white py-3 sm:py-6 px-4 sm:px-10 text-center ">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Explore Our <span className="text-blue-900">Departments</span>
        </h2>
        <p className="text-md sm:text-lg text-gray-700 max-w-3xl mx-auto border-t-2 border-gray-300 pt-4">
          The aim of the University is to provide meaningful education, to conduct original research of the highest
          standard and  leadership in technological innovation.
        </p>
      </div>

      {/* Grid with varied sizes */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 auto-rows-[220px]">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className={`relative overflow-hidden rounded-lg group cursor-pointer transition-all duration-700 ${getSizeClasses(dept.size)}`}
            onMouseEnter={() => setHoveredCard(dept.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(dept.video)}
          >
            {/* Image */}
            <img
              src={dept.image}
              alt={dept.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            {/* Dark overlay - fades on hover */}
            <div className="absolute inset-0 bg-black/70 transition-all duration-700 group-hover:bg-black/20" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div></div>
              
              <div className="flex items-end justify-between">
                <h3 className="text-white text-2xl font-bold transition-all duration-500 group-hover:translate-y-[-8px]">
                  {dept.title}
                </h3>

                {/* Arrow Button with Circle Animation */}
                <div className="relative flex-shrink-0">
                  {/* Animated Circle Border */}
                  <svg
                    className="absolute inset-0 w-12 h-12 -rotate-90 transition-opacity duration-300"
                    style={{
                      opacity: hoveredCard === dept.id ? 1 : 0
                    }}
                  >
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="138.23"
                      strokeDashoffset="138.23"
                      className={hoveredCard === dept.id ? "animate-[drawCircle_0.8s_ease-out_forwards]" : ""}
                    />
                  </svg>

                  {/* Button Content */}
                  <div className="relative w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white/10 group-hover:scale-110">
                    {/* Arrow Icon */}
                    <svg
                      className={`w-5 h-5 text-white transition-all duration-500 ${
                        hoveredCard === dept.id ? "translate-x-1 opacity-0" : "opacity-100"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>

                    {/* Explore Now Text */}
                    <span
                      className={`absolute whitespace-nowrap text-white text-sm font-semibold transition-all duration-500 ${
                        hoveredCard === dept.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{ right: "60px" }}
                    >
                      Explore Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute -top-8 right-0 text-white text-4xl hover:text-red-500 transition-colors duration-300"
            >
              ×
            </button>
            <video
              src={playingVideo}
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default AcademicPrograms;