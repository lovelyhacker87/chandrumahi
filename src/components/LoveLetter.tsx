
import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';

const LoveLetter = () => {
  const [isWriting, setIsWriting] = useState(false);
  const [visibleText, setVisibleText] = useState('');

  const loveLetterText = `My Dearest Maheswari,

From that very first moment in June 2019 when I saw you in 9th grade, my heart knew something magical was about to unfold. Though we never spoke during those school days, there was this silent connection - like our souls were already whispering to each other across the classroom.

When COVID-19 separated us physically, destiny had other plans. Our Tamil teacher unknowingly became cupid by creating that WhatsApp group on August 31, 2020. Getting your number felt like finding a treasure I'd been searching for my entire life.

Our first conversation on September 1, 2020, marked the beginning of something extraordinary. Through WhatsApp, Instagram, and Telegram, we built a world of our own - too shy for phone calls but brave enough to pour our hearts into text messages.

I still remember the moment you called me "bro" - it shattered my heart into a million pieces. But love doesn't give up easily. I kept texting you like a lover, believing that someday you'd see what I saw in us.

And then came December 19, 2020 - the most important day of my life. At exactly 10:58 AM, I gathered all my courage and proposed to you with my entire heart and soul. When you said "yes" at 11:01 AM, those three minutes felt like eternity and a single heartbeat all at once. That's when our beautiful love story officially began.

January 17, 2021, when school reopened - I couldn't attend the first day, but I waited outside during dismissal just to catch a glimpse of your face. That moment when I finally saw you as my girlfriend was pure magic.

February 17, 2021, brought us our first photograph together on the same day schools closed again. That picture became my most precious possession - a frozen moment of our love that I treasure every single day.

Then came February 10, 2022, during my 11th standard - a day that changed everything. Visiting your home for the first time, acting as your brother's friend while you were alone, led to our first kiss and embrace. That moment when our lips touched and I held you close, I knew I was exactly where I belonged. Those seven visits to your home created memories that live in my heart forever.

Since May 2023, we've been 150 kilometers apart - you in Tiruppur, me in Dindigul. This long-distance journey has only made our love stronger. Every day, through calls, video chats, and messages, we bridge the physical gap with our emotional connection.

My darling Maheswari, you are not just my girlfriend - you are my soulmate, my best friend, my greatest adventure, and my most beautiful dream come true. Your smile lights up my darkest days, your laughter is the sweetest symphony to my ears, and your love is the greatest blessing of my life.

I love how you scrunch your nose when you laugh, how you always know the right words to comfort me, and how you make every ordinary moment feel extraordinary just by being part of it.

As we look toward our future together, my heart is filled with excitement and infinite love. I can't wait to close the distance between us, to build our dream life together, to travel the world hand in hand, and to love you more deeply with each passing day.

You are my today, my tomorrow, and all the beautiful tomorrows that follow. Thank you for choosing to love me, for believing in us through the distance, and for making every day worth living.

I promise to love you with every fiber of my being, to support your dreams as if they were my own, to make you laugh when you're sad, to hold you when you need comfort, and to stand by your side through everything life brings our way.

Distance may separate our bodies, but nothing can separate our hearts. Until the day I can hold you in my arms forever, know that you carry my heart with you wherever you go.

Forever and always, with all my love and devotion,
Your Chandraprakash 💕

P.S. - You are the most beautiful miracle that has ever happened to me. Every day with you feels like a dream I never want to wake up from. I love you beyond words, beyond time, beyond everything! ✨💖`;

  useEffect(() => {
    if (isWriting) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < loveLetterText.length) {
          setVisibleText(loveLetterText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30); // Faster typing for better experience
      return () => clearInterval(timer);
    }
  }, [isWriting]);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative">
      {/* Enhanced floating hearts background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            size={20 + Math.random() * 20}
            className="absolute text-pink-200 animate-romantic-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-script animate-love-glow">
          A Letter From My Heart 💌
        </h2>
        
        <p className="text-xl text-center text-gray-600 mb-12 font-handwriting animate-romantic-fade-in">
          Words straight from my heart to yours, my beloved Maheswari ✨
        </p>

        {/* Enhanced love letter container */}
        <div className="relative animate-romantic-slide-in">
          <div className="bg-gradient-to-br from-white to-cream-50 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 relative overflow-hidden">
            {/* Enhanced paper texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20 to-transparent opacity-50"></div>
            
            {/* Animated decorative elements */}
            <div className="absolute top-4 left-4 text-pink-300 animate-gentle-pulse">
              <Heart size={24} fill="currentColor" />
            </div>
            <div className="absolute top-4 right-4 text-purple-300 animate-twinkle">
              <Star size={24} fill="currentColor" />
            </div>
            <div className="absolute bottom-4 left-4 text-purple-300 animate-twinkle">
              <Star size={24} fill="currentColor" />
            </div>
            <div className="absolute bottom-4 right-4 text-pink-300 animate-gentle-pulse">
              <Heart size={24} fill="currentColor" />
            </div>

            {/* Letter content */}
            <div className="relative z-10">
              {!isWriting ? (
                <div className="text-center animate-romantic-fade-in">
                  <div className="text-6xl mb-8 animate-gentle-bounce">💌</div>
                  <button
                    onClick={() => setIsWriting(true)}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-love-glow"
                  >
                    Open My Love Letter 💕
                  </button>
                </div>
              ) : (
                <div className="font-handwriting text-gray-800 leading-relaxed">
                  <pre className="whitespace-pre-wrap text-lg md:text-xl font-light">
                    {visibleText}
                    <span className="animate-gentle-pulse">|</span>
                  </pre>
                </div>
              )}
            </div>

            {/* Enhanced floating elements during writing */}
            {isWriting && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-pink-300 rounded-full animate-romantic-fall opacity-50"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${5 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Enhanced wax seal */}
          <div className="absolute -bottom-6 right-8 w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg transform rotate-12 animate-gentle-pulse">
            <Heart size={24} className="text-white" fill="currentColor" />
          </div>
        </div>

        {/* Enhanced bottom decoration */}
        {isWriting && (
          <div className="mt-16 text-center animate-romantic-fade-in">
            <div className="flex justify-center space-x-4 mb-6">
              <Heart size={32} className="text-pink-500 animate-love-beat" fill="currentColor" />
              <Star size={32} className="text-yellow-400 animate-gentle-spin" fill="currentColor" />
              <Heart size={32} className="text-pink-500 animate-love-beat" fill="currentColor" />
            </div>
            <p className="text-2xl text-gray-700 font-light italic font-handwriting">
              "Distance means nothing when love means everything" 💫
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveLetter;
