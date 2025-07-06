
import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const LoveIntro = () => {
  const [currentText, setCurrentText] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const texts = [
    "Once upon a time...",
    "In a quiet school in June 2019",
    "Two hearts found each other",
    "But destiny had bigger plans...",
    "December 19, 2020 at 10:58 AM",
    "Forever began with a simple 'Yes' 💕"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        if (prev < texts.length - 1) {
          return prev + 1;
        } else {
          // Start fade out after showing all texts
          setTimeout(() => setFadeOut(true), 2000);
          clearInterval(interval);
          return prev;
        }
      });
    }, 1800); // Slower, more elegant timing

    setTimeout(() => setShowHearts(true), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 z-50 flex items-center justify-center transition-all duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Refined starry background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `gentle-twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Elegant floating hearts */}
      <div className="absolute inset-0">
        {showHearts && [...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              animation: `elegant-fall ${12 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          >
            <Heart
              size={12 + Math.random() * 16}
              className="text-pink-200"
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Subtle sparkles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            size={8 + Math.random() * 8}
            className="absolute text-yellow-200 opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `soft-sparkle ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-4 max-w-4xl">
        <div className="mb-12 space-y-8">
          {texts.map((text, index) => (
            <div
              key={index}
              className={`text-2xl md:text-4xl lg:text-5xl text-white font-light transition-all duration-1000 ${
                index <= currentText 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4'
              }`}
              style={{ 
                transitionDelay: `${index * 0.2}s`,
                fontFamily: 'Dancing Script, cursive',
                textShadow: '0 0 15px rgba(255, 182, 193, 0.6)'
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {currentText >= texts.length - 1 && (
          <div className="mt-12" style={{ animation: 'soft-bounce 2s ease-in-out infinite' }}>
            <div className="flex justify-center space-x-6 text-yellow-200 mb-6">
              <Star size={32} fill="currentColor" style={{ animation: 'gentle-rotate 8s linear infinite' }} />
              <Heart size={36} className="text-pink-200" fill="currentColor" style={{ animation: 'soft-pulse 2s ease-in-out infinite' }} />
              <Star size={32} fill="currentColor" style={{ animation: 'gentle-rotate 8s linear infinite reverse' }} />
            </div>
            <p className="text-lg text-pink-100 font-light opacity-80">
              Click anywhere to enter our love story...
            </p>
          </div>
        )}
      </div>

      {/* Subtle magical aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent" style={{ animation: 'soft-pulse 4s ease-in-out infinite' }}></div>
    </div>
  );
};

export default LoveIntro;
