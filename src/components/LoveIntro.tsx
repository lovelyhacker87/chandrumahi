
import React, { useState, useEffect, useMemo } from 'react';
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

const fallingStars = useMemo(() => {
  return [...Array(80)].map(() => ({
    left: `${Math.random() * 100}%`,
    size: 0.5 + Math.random() * 1.2,
    duration: `${8 + Math.random() * 6}s`,
    delay: `${Math.random() * 5}s`,
  }));
}, []);


  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 z-50 flex items-center justify-center transition-all duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Smooth falling stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingStars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: `-10px`,
              opacity: 0.6,
              animation: `smooth-fall ${star.duration} linear infinite`,
              animationDelay: star.delay
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
                fontFamily: 'Edu NSW ACT Cursive, cursive',
                textShadow: '0 0 15px rgba(255, 182, 193, 0.6)',
                fontWeight: 500
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
