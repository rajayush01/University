import React, { useEffect, useState } from 'react';
import dpslogo from '../../assets/logo_main.jpg';

interface DPSLoadingProps {
  duration?: number;
  onLoadingComplete?: () => void;
}

const DPSLoadingCorporate: React.FC<DPSLoadingProps> = ({
  duration = 3000,
  onLoadingComplete,
}) => {
  const [done, setDone] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const fullText = 'EXCELLENCE UNIVERSITY';

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setLoadingText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(() => onLoadingComplete?.(), 600);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [duration, onLoadingComplete]);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center transition-all duration-700 ${
        done ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: '#ffffff',
      }}
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#690B22 1px, transparent 1px),
            linear-gradient(90deg, #690B22 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-16 px-4 mt-60">
        
        {/* ===== LOGO WITH MODERN FRAME ===== */}
        <div className="relative">
          
          {/* Animated corner frames */}
          <div className="absolute -inset-8">
            {/* Top-left corner */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#690B22]"
                 style={{ animation: 'drawCorner 1.5s ease forwards' }} />
            
            {/* Top-right corner */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#690B22]"
                 style={{ animation: 'drawCorner 1.5s ease forwards 0.2s' }} />
            
            {/* Bottom-left corner */}
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#690B22]"
                 style={{ animation: 'drawCorner 1.5s ease forwards 0.4s' }} />
            
            {/* Bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#690B22]"
                 style={{ animation: 'drawCorner 1.5s ease forwards 0.6s' }} />
          </div>

          {/* Scanning line effect */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ animation: 'fadeIn 2s ease forwards' }}
          >
            <div
              className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#690B22] to-transparent opacity-50"
              style={{ animation: 'scan 2s ease-in-out infinite' }}
            />
          </div>

          {/* Logo container */}
          <div
            className="relative bg-white rounded-lg p-4 shadow-xl"
            style={{
              animation: 'zoomIn 1s ease forwards',
              boxShadow: '0 25px 50px -12px rgba(105, 11, 34, 0.15)',
            }}
          >
            <img
              src={dpslogo}
              alt="University Logo"
              className="w-20 h-20 object-contain"
            />
            
            {/* Shine effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              style={{ animation: 'shine 3s ease-in-out 1s infinite' }}
            />
          </div>
        </div>

        {/* ===== TYPING TEXT ANIMATION ===== */}
        <div className="space-y-6">
          <div className="flex items-center justify-center min-h-[3rem]">
            <h1
              className="text-3xl md:text-4xl font-bold text-[#690B22] tracking-[0.2em] font-mono"
            >
              {loadingText}
              <span 
                className="inline-block w-0.5 h-8 bg-[#690B22] ml-1 align-middle"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            </h1>
          </div>

          <p
            className="text-sm md:text-base text-gray-600 text-center tracking-wide"
            style={{ animation: 'fadeIn 1s ease forwards 1.5s', opacity: 0 }}
          >
            Inspiring Knowledge · Empowering Futures
          </p>
        </div>

        {/* ===== LOADING BARS ===== */}
        <div 
          className="flex flex-col items-center space-y-6 w-80"
          style={{ animation: 'fadeIn 1s ease forwards 2s', opacity: 0 }}
        >
          {/* Animated bars */}
          <div className="flex items-end justify-center space-x-2 h-12">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 bg-[#690B22] rounded-full"
                style={{
                  animation: `barGrow 1.2s ease-in-out ${i * 0.1}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Loading text */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500 font-medium">
              Initializing Portal
            </p>
            <div className="flex items-center justify-center space-x-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#690B22]"
                  style={{
                    animation: `fade 1.5s ease-in-out ${i * 0.3}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===== MINIMAL PROGRESS INDICATOR ===== */}
        <div 
          className="w-64 space-y-2"
          style={{ animation: 'fadeIn 1s ease forwards 2.2s', opacity: 0 }}
        >
          <div className="flex justify-between text-xs text-gray-400 font-mono">
            <span>LOADING</span>
            <span>PLEASE WAIT</span>
          </div>
          <div className="relative h-px bg-gray-200">
            <div
              className="absolute h-full bg-[#690B22]"
              style={{
                width: '100%',
                animation: 'progressFill 2.5s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* ===== ANIMATIONS ===== */}
      <style>
        {`
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes drawCorner {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes scan {
            0% { transform: translateY(-100px); }
            100% { transform: translateY(200px); }
          }

          @keyframes shine {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateX(100%); opacity: 0; }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes barGrow {
            0%, 100% { height: 20%; opacity: 0.4; }
            50% { height: 100%; opacity: 1; }
          }

          @keyframes fade {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }

          @keyframes progressFill {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default DPSLoadingCorporate;