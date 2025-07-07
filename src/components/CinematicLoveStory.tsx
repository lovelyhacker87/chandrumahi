
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, MessageCircle, Camera, Home } from 'lucide-react';

const CinematicLoveStory = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const loveStories = [
    {
      id: 1,
      title: "First Sight",
      date: "June 2019",
      emoji: "👫",
      description: "In 9th grade at school, two souls found each other in silent admiration. No words were spoken, but hearts whispered secrets only they could hear.",
      color: "from-purple-400 via-pink-400 to-red-400",
      bgColor: "from-purple-100 to-pink-100",
      icon: <Heart className="text-pink-500" size={32} />
    },
    {
      id: 2,
      title: "Divine Intervention",
      date: "August 31, 2020",
      emoji: "📱",
      description: "COVID couldn't stop destiny! Our Tamil teacher created a WhatsApp group for online classes. That's when fate gave me your number - the beginning of everything.",
      color: "from-blue-400 via-purple-400 to-pink-400",
      bgColor: "from-blue-100 to-purple-100",
      icon: <MessageCircle className="text-blue-500" size={32} />
    },
    {
      id: 3,
      title: "First Words",
      date: "September 1, 2020",
      emoji: "💬",
      description: "Our first conversation on WhatsApp. Too shy for calls, but our texts carried the weight of unspoken love growing day by day.",
      color: "from-green-400 via-teal-400 to-blue-400",
      bgColor: "from-green-100 to-teal-100",
      icon: <MessageCircle className="text-green-500" size={32} />
    },
    {
      id: 4,
      title: "The Heartbreak",
      date: "September 2020",
      emoji: "💔",
      description: "When you called me 'bro', my heart shattered. But true love doesn't give up - I kept texting like a lover, believing in our destiny.",
      color: "from-gray-400 via-purple-400 to-pink-400",
      bgColor: "from-gray-100 to-purple-100",
      icon: <Heart className="text-gray-500" size={32} />
    },
    {
      id: 5,
      title: "The Proposal",
      date: "December 19, 2020",
      emoji: "💍",
      description: "10:58 AM - I poured my heart out in a proposal. 11:01 AM - You said 'YES!' Three magical minutes that changed our lives forever.",
      color: "from-yellow-400 via-pink-400 to-red-400",
      bgColor: "from-yellow-100 to-pink-100",
      icon: <Sparkles className="text-yellow-500" size={32} />,
      special: true
    },
    {
      id: 6,
      title: "First Meeting as Lovers",
      date: "January 17, 2021",
      emoji: "😍",
      description: "School reopened! I couldn't attend but waited outside during dismissal just to see your face. That glimpse was worth every second of waiting.",
      color: "from-purple-400 via-pink-400 to-red-400",
      bgColor: "from-purple-100 to-pink-100",
      icon: <Heart className="text-purple-500" size={32} />
    },
    {
      id: 7,
      title: "Our First Kiss",
      date: "February 17, 2021",
      emoji: "📸",
      description: "Schools closed again, but we captured our first memory together on the same day. One kiss, infinite emotions - a treasure I'll cherish forever.",
      color: "from-orange-400 via-pink-400 to-purple-400",
      bgColor: "from-orange-100 to-pink-100",
      icon: <Camera className="text-orange-500" size={32} />
    },
    {
      id: 8,
      title: "First Kiss & Embrace",
      date: "February 10, 2022",
      emoji: "💋",
      description: "At your home, acting as your brother's friend, we found our moment. Our first kiss, our first embrace - pure magic in stolen time. Seven beautiful visits total.",
      color: "from-red-400 via-pink-400 to-purple-400",
      bgColor: "from-red-100 to-pink-100",
      icon: <Home className="text-red-500" size={32} />,
      special: true
    },
    {
      id: 9,
      title: "Long Distance Love",
      date: "May 2023 - Present",
      emoji: "🚗",
      description: "150km apart between Dindigul and Tiruppur, but our hearts beat as one. Daily chats, calls, video calls - distance means nothing when love means everything.",
      color: "from-indigo-400 via-blue-400 to-purple-400",
      bgColor: "from-indigo-100 to-blue-100",
      icon: <MessageCircle className="text-indigo-500" size={32} />
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % loveStories.length);
    }, 10000); // 5 second delay as requested
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced magical background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full animate-twinkle opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-romantic-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-love-glow font-script">
            Our Cinematic Love Story
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <Sparkles className="text-yellow-400 animate-gentle-spin" size={32} />
            <Heart className="text-pink-500 animate-love-beat" size={36} fill="currentColor" />
            <Sparkles className="text-yellow-400 animate-gentle-spin" size={32} />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed font-handwriting">
            Every love story is beautiful, but ours is extraordinary. Journey through the moments that made us who we are today.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {loveStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`px-4 py-2 rounded-full transition-all duration-700 transform animate-gentle-float ${
                activeStory === index
                  ? `bg-gradient-to-r ${story.color} text-white shadow-2xl scale-110 animate-love-glow`
                  : 'bg-white/70 text-gray-600 hover:bg-white hover:shadow-lg hover:scale-105'
              }`}
            >
              <span className="text-lg mr-2">{story.emoji}</span>
              <span className="font-medium text-sm">{story.title}</span>
            </button>
          ))}
        </div>

        {/* Main Story Display with enhanced animations */}
        <div className="relative">
          {loveStories.map((story, index) => (
            <div
              key={story.id}
              className={`absolute inset-0 transition-all duration-1500 ${
                activeStory === index
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : 'opacity-0 transform translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              <div className={`bg-gradient-to-br ${story.bgColor} rounded-3xl p-8 md:p-16 shadow-2xl border-4 ${
                story.special ? 'border-pink-300 animate-love-glow' : 'border-white/50'
              } relative overflow-hidden animate-romantic-slide-in`}>
                
                {/* Enhanced floating elements for special moments */}
                {story.special && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(25)].map((_, i) => (
                      <Heart
                        key={i}
                        size={16 + Math.random() * 16}
                        className="absolute text-pink-400 animate-romantic-float opacity-50"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${4 + Math.random() * 2}s`
                        }}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                )}

                <div className="text-center relative z-10">
                  <div className="text-8xl md:text-9xl mb-8 animate-gentle-bounce">
                    {story.emoji}
                  </div>
                  
                  <div className="mb-6 animate-gentle-pulse">
                    {story.icon}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-script animate-romantic-fade-in">
                    {story.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-purple-600 font-medium mb-8 animate-gentle-pulse">
                    {story.date}
                  </p>
                  
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-4xl mx-auto animate-romantic-fade-in">
                    {story.description}
                  </p>

                  {story.special && (
                    <div className="mt-8 flex justify-center space-x-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          className="text-yellow-400 animate-twinkle"
                          fill="currentColor"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute top-6 left-6 text-pink-300 opacity-60 animate-gentle-pulse">
                  <Heart size={24} fill="currentColor" />
                </div>
                <div className="absolute top-6 right-6 text-purple-300 opacity-60 animate-twinkle">
                  <Sparkles size={24} />
                </div>
                <div className="absolute bottom-6 left-6 text-purple-300 opacity-60 animate-twinkle">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="absolute bottom-6 right-6 text-pink-300 opacity-60 animate-gentle-pulse">
                  <Heart size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
          
          {/* Placeholder for consistent height */}
          <div className="opacity-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-16">
            <div className="text-center">
              <div className="text-8xl md:text-9xl mb-8">💕</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Placeholder</h3>
              <p className="text-lg md:text-xl mb-8">Date</p>
              <p className="text-xl md:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
                Placeholder description for maintaining consistent height across all story cards.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced bottom message */}
        <div className="mt-32 text-center animate-romantic-fade-in">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto border-2 border-pink-200 animate-love-glow">
            <div className="text-6xl mb-6 animate-love-beat">💖</div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-script">
              And Our Story Continues...
            </h3>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light font-handwriting">
              Every day writes a new chapter in our love story. With you, every moment becomes a beautiful memory, 
              every challenge becomes an adventure, and every tomorrow holds the promise of forever.
            </p>
            <div className="flex justify-center mt-8 space-x-6">
              <Heart size={36} className="text-pink-500 animate-love-beat" fill="currentColor" />
              <Sparkles size={36} className="text-yellow-400 animate-gentle-spin" />
              <Heart size={36} className="text-pink-500 animate-love-beat" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicLoveStory;
