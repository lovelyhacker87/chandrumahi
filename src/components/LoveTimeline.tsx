
import React, { useState } from 'react';
import { Heart, MessageCircle, Camera, Home, MapPin, Phone } from 'lucide-react';

const LoveTimeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const timelineEvents = [
    {
      date: "June 2019",
      title: "First Sight 👀",
      description: "We first saw each other when we began 9th grade. Silent admiration filled our hearts.",
      icon: <Heart className="text-pink-500" size={24} />,
      color: "from-pink-400 to-red-400",
      emoji: "👫"
    },
    {
      date: "August 31, 2020",
      title: "Divine WhatsApp Group 📱",
      description: "Our Tamil teacher created a WhatsApp group for online classes. Fate brought us her number!",
      icon: <MessageCircle className="text-blue-500" size={24} />,
      color: "from-blue-400 to-purple-400",
      emoji: "📲"
    },
    {
      date: "September 1, 2020",
      title: "First Chat 💬",
      description: "We started talking through WhatsApp, Instagram, and Telegram. Both too shy for calls!",
      icon: <MessageCircle className="text-green-500" size={24} />,
      color: "from-green-400 to-teal-400",
      emoji: "💬"
    },
    {
      date: "December 19, 2020",
      title: "The Proposal 💍",
      description: "10:58 AM - I proposed with all my heart. 11:01 AM - She said YES! We became official! 👫❤️",
      icon: <Heart className="text-red-500" size={24} />,
      color: "from-red-400 to-pink-400",
      emoji: "💍",
      special: true
    },
    {
      date: "January 17, 2021",
      title: "First Meeting as Couple 😍",
      description: "School reopened! I waited outside during dismissal just to see her face after becoming a couple.",
      icon: <Heart className="text-purple-500" size={24} />,
      color: "from-purple-400 to-pink-400",
      emoji: "😍"
    },
    {
      date: "February 17, 2021",
      title: "First Photo Together 📸",
      description: "Schools closed again due to second wave, but we took our first photo together - a memory to cherish forever!",
      icon: <Camera className="text-yellow-500" size={24} />,
      color: "from-yellow-400 to-orange-400",
      emoji: "📸"
    },
    {
      date: "February 10, 2022",
      title: "First Kiss & Hug 💋",
      description: "Visited her house for the first time during 11th standard. Our first kiss and tight hug - unforgettable!",
      icon: <Home className="text-red-500" size={24} />,
      color: "from-red-400 to-pink-400",
      emoji: "💋",
      special: true
    },
    {
      date: "May 2023",
      title: "Long Distance Journey 🚗",
      description: "After 12th, I returned to Dindigul while she stayed in Tiruppur (150km apart). Our long-distance love began.",
      icon: <MapPin className="text-blue-500" size={24} />,
      color: "from-blue-400 to-indigo-400",
      emoji: "🚗"
    },
    {
      date: "Present Day",
      title: "Forever Strong 💪",
      description: "Despite distance, we talk daily through chats, calls, and video calls. Our love stays unbreakable! 💑📱",
      icon: <Phone className="text-green-500" size={24} />,
      color: "from-green-400 to-emerald-400",
      emoji: "💪"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 md:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-pacifico">
          Our Love Timeline 💕
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-red-400 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
                onClick={() => setActiveEvent(index)}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg z-10 ${
                  event.special ? 'animate-heartbeat ring-4 ring-pink-300' : 'animate-pulse'
                }`}>
                  {event.icon}
                </div>

                {/* Event Card */}
                <div className={`ml-12 sm:ml-0 sm:w-5/12 ${
                  index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                } ${activeEvent === index ? 'animate-scale-in' : ''}`}>
                  <div className={`bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border-2 ${
                    event.special ? 'border-pink-300 glow-pink' : 'border-purple-200'
                  } transform hover:scale-105 transition-all duration-300 cursor-pointer`}>
                    <div className="flex items-center mb-3">
                      <span className="text-2xl sm:text-3xl mr-3 animate-bounce">{event.emoji}</span>
                      <div>
                        <p className="text-xs sm:text-sm text-purple-600 font-medium">{event.date}</p>
                        <h3 className="text-base sm:text-lg font-bold text-gray-800">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{event.description}</p>
                    
                    {event.special && (
                      <div className="mt-3 flex justify-center space-x-2">
                        <span className="text-lg animate-pulse">💖</span>
                        <span className="text-lg animate-pulse">✨</span>
                        <span className="text-lg animate-pulse">💖</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Love Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            >
              <span className="text-pink-400 text-lg">
                {['💕', '💖', '💗', '💘', '💝'][Math.floor(Math.random() * 5)]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveTimeline;
