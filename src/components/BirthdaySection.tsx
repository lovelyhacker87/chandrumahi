
import React from 'react';
import { Cake, Star } from 'lucide-react';

const BirthdaySection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-pacifico">
          Our Special Days 🎂
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Chandraprakash's Birthday */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="text-center text-white">
                <div className="text-6xl mb-4 animate-bounce">🎂</div>
                <h3 className="text-3xl font-bold mb-4">Chandraprakash</h3>
                <div className="text-5xl font-bold mb-2">08-12-2005</div>
                <p className="text-xl opacity-90">The day an amazing soul was born! 🌟</p>
                
                {/* Floating balloons */}
                <div className="absolute -top-4 -left-4 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🎈</div>
                <div className="absolute -top-6 -right-2 text-3xl animate-bounce" style={{animationDelay: '1s'}}>🎈</div>
                <div className="absolute -bottom-2 -left-6 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🎈</div>
              </div>
              
              {/* Confetti effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-70"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Maheswari's Birthday */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-pink-400 to-red-600 rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <div className="text-center text-white">
                <div className="text-6xl mb-4 animate-bounce">🎂</div>
                <h3 className="text-3xl font-bold mb-4">Maheswari</h3>
                <div className="text-5xl font-bold mb-2">07-05-2006</div>
                <p className="text-xl opacity-90">The day my princess came to earth! 👑</p>
                
                {/* Floating balloons */}
                <div className="absolute -top-4 -left-4 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🎈</div>
                <div className="absolute -top-6 -right-2 text-3xl animate-bounce" style={{animationDelay: '1s'}}>🎈</div>
                <div className="absolute -bottom-2 -right-6 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🎈</div>
              </div>

              {/* Confetti effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-70"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special message */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="text-5xl mb-4">🎉</div>
            <p className="text-2xl text-gray-700 font-light leading-relaxed">
              Two special days that brought two amazing souls into this world. 
              Now we celebrate these days together, making them even more magical! ✨
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <Cake className="text-pink-500 animate-pulse" size={32} />
              <Star className="text-yellow-400 animate-spin" size={32} />
              <Cake className="text-purple-500 animate-pulse" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdaySection;
