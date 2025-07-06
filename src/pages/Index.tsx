
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, VolumeX, Star } from 'lucide-react';
import FloatingHearts from '../components/FloatingHearts';
import LoveIntro from '../components/LoveIntro';
import CinematicLoveStory from '../components/CinematicLoveStory';
import PhotoGallery from '../components/PhotoGallery';
import LoveTimeline from '../components/LoveTimeline';
import BirthdaySection from '../components/BirthdaySection';
import FutureSection from '../components/FutureSection';
import LoveLetter from '../components/LoveLetter';

const Index = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);


  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      setPageLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fixed intro timing
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleSkipIntro = () => {
    setShowIntro(false);
  };


{[...Array(30)].map((_, i) => (
  <div
    key={i}
    className={`absolute text-pink-400 text-2xl pointer-events-none ${
      musicPlaying ? 'animate-move-heart' : 'animate-float-heart'
    }`}
    style={{
      left: `${Math.random() * 100}%`,
      bottom: '-20px',
      animationDelay: `${Math.random() * 4}s`,
    }}
  >
    💖
  </div>
))}

useEffect(() => {
  const handleClickPlay = () => {
    if (audioRef.current && !musicPlaying) {
      audioRef.current.play()
        .then(() => {
          setMusicPlaying(true);
        })
        .catch((err) => {
          console.log('Autoplay failed:', err);
        });
    }

    // Remove the listener after first interaction regardless of result
    window.removeEventListener('click', handleClickPlay);
  };

  window.addEventListener('click', handleClickPlay);

  return () => {
    window.removeEventListener('click', handleClickPlay);
  };
}, []);




  return (
    
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      <audio ref={audioRef} autoPlay={false} loop>
        <source src="/music/love-song.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
      </audio>

      <FloatingHearts />
      
      {/* Enhanced Music Toggle */}
      <button
        onClick={() => {
  if (audioRef.current) {
    if (!musicPlaying) {
      audioRef.current.play();
      setMusicPlaying(true);
    } else {
      audioRef.current.pause();
      setMusicPlaying(false);
    }
  }
}}

      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-pink-200"
      >
      {musicPlaying ? (
        <Music className="text-pink-500 animate-love-beat" size={24} />
      ) : (
        <VolumeX className="text-gray-500" size={24} />
      )}
    </button>


      {/* Enhanced Animated Intro */}
      {showIntro && (
        <div onClick={handleSkipIntro}>
          <LoveIntro />
        </div>
      )}

      {/* Main Content with enhanced animations */}
      <div className={`transition-all duration-2000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        {/* Enhanced Hero Section with original design but better animations */}
        <section className="min-h-screen flex items-center justify-center relative px-4 py-8">
          <div className="text-center z-10 animate-romantic-fade-in max-w-6xl mx-auto">
            <div className="mb-12 space-y-6">
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent animate-love-glow leading-tight px-2 font-script">
                  Chandraprakash
                </h1>
                
                <div className="flex items-center justify-center my-6 sm:my-8 animate-love-beat">
                  <Heart className="text-red-500 animate-love-beat mr-3 sm:mr-6" size={34} fill="currentColor" />
                  <span className="text-2xl sm:text-3xl md:text-4xl font-handwriting text-purple-600 animate-gentle-bounce">&</span>
                  <Heart className="text-green-500 animate-love-beat ml-3 sm:ml-6" size={34} fill="currentColor" />
                </div>
                
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent animate-love-glow leading-tight px-2 font-script">
                  Maheswari
                </h1>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light mb-8 sm:mb-12 animate-romantic-fade-in px-4">
              A Love Story Written in the Stars Since December 19, 2020 ✨
            </p>
            
            <div className="flex justify-center space-x-3 sm:space-x-6 animate-gentle-bounce mb-12">
              <Star className="text-yellow-400 animate-twinkle" size={24} fill="currentColor" />
              <Heart className="text-pink-500 animate-love-beat" size={28} fill="currentColor" />
              <Star className="text-yellow-400 animate-twinkle" size={24} fill="currentColor" />
            </div>

            {/* Enhanced romantic floating elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-romantic-float opacity-60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${6 + Math.random() * 4}s`
                  }}
                >
                  <div className="text-pink-400 text-xl animate-gentle-pulse">💕</div>
                </div>
              ))}
            </div>

            {/* Enhanced magical aura */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-100/30 to-transparent animate-gentle-pulse"></div>
          </div>
        </section>

        <CinematicLoveStory />
        <BirthdaySection />
        <PhotoGallery />
        <LoveTimeline />
        <FutureSection />
        <LoveLetter />

        {/* Restored original "Words From My Heart" section with enhanced animations */}
        <section className="py-20 sm:py-24 px-4 md:px-8 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <Heart
                key={i}
                size={20 + Math.random() * 20}
                className="absolute text-pink-300 animate-romantic-float opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
                fill="currentColor"
              />
            ))}
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 sm:mb-16 text-purple-800 font-handwriting animate-love-glow">
              Words Straight From My Heart 💕
            </h2>
            <div className="space-y-8 sm:space-y-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-romantic-fade-in border-2 border-pink-200">
                <div className="text-6xl mb-6 animate-love-beat">💫</div>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 italic font-light font-handwriting">
                  "Every moment with you feels like pure magic"
                </p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-romantic-fade-in border-2 border-pink-200">
                <div className="text-6xl mb-6 animate-gentle-pulse">❤️</div>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 italic font-light font-handwriting">
                  "You're the rhythm in my every heartbeat"
                </p>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-romantic-fade-in border-2 border-pink-200">
                <div className="text-6xl mb-6 animate-gentle-bounce">🌟</div>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 italic font-light font-handwriting">
                  "Distance means nothing when love means everything"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-16 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.6 + 0.2
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="text-5xl sm:text-7xl mb-6 animate-love-beat">💕</div>
            <p className="text-xl sm:text-2xl mb-6 px-4 font-handwriting">
              Made with infinite love for my dearest Maheswari
            </p>
            <p className="text-base sm:text-lg opacity-80 px-4">
              Our love story continues to write itself every single day... 🌟
            </p>
            <div className="flex justify-center mt-8 space-x-4">
              <Heart className="text-pink-400 animate-love-beat" size={32} fill="currentColor" />
              <Star className="text-yellow-400 animate-gentle-spin" size={32} fill="currentColor" />
              <Heart className="text-pink-400 animate-love-beat" size={32} fill="currentColor" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
