
import React from 'react';
import { Heart, Star } from 'lucide-react';

const FutureSection = () => {
  const dreams = [
    {
      icon: '✈️',
      title: 'Travel the World',
      description: 'Exploring beautiful destinations together, creating memories in every corner of the world'
    },
    {
      icon: '💍',
      title: 'Get Married',
      description: 'The most beautiful day when we officially become one, surrounded by love and blessings'
    },
    {
      icon: '🏠',
      title: 'Our Dream Home',
      description: 'Building a cozy home filled with love, laughter, and countless beautiful moments'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Happy Family',
      description: 'Growing our family and raising children with all the love in our hearts'
    },
    {
      icon: '🌟',
      title: 'Grow Old Together',
      description: 'Supporting each other through all of life\'s adventures, until we\'re old and gray'
    },
    {
      icon: '💫',
      title: 'Eternal Love',
      description: 'A love that transcends time, space, and everything in between - forever and always'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-8 text-white font-pacifico">
          Our Dreams Under the Stars ✨
        </h2>
        
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Looking up at the night sky, we dream of our beautiful future together. 
          Every star represents a wish, every constellation tells our story! 🌌
        </p>

        {/* Dream cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dreams.map((dream, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:bg-white/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="text-6xl mb-6 animate-bounce" style={{animationDelay: `${index * 0.3}s`}}>
                  {dream.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{dream.title}</h3>
                <p className="text-gray-300 leading-relaxed">{dream.description}</p>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Center message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-pink-300/30">
            <div className="text-7xl mb-6">🌙💕</div>
            <h3 className="text-4xl font-bold text-white mb-6">
              Together, We'll Make It All Come True
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              With you by my side, every dream feels possible. 
              Our love is the foundation upon which we'll build our beautiful future. 
              Forever starts now! ✨
            </p>
            <div className="flex justify-center mt-8 space-x-6">
              <Heart size={32} className="text-pink-400 animate-pulse" fill="currentColor" />
              <Star size={32} className="text-yellow-400 animate-spin" fill="currentColor" />
              <Heart size={32} className="text-pink-400 animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
