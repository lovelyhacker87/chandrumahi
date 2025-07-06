import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  color: string;
  type: 'heart' | 'emoji';
  emoji?: string;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const colors = ['text-pink-400', 'text-red-400', 'text-purple-400', 'text-rose-400', 'text-pink-300', 'text-red-300'];
    const loveEmojis = ['💕', '💖', '💗', '💘', '💝', '💞', '💓', '💌', '🌹', '✨', '🦋', '🌸'];
    const newHearts: FloatingHeart[] = [];

    // Add heart icons
    for (let i = 0; i < 12; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 12 + Math.random() * 8,
        size: 14 + Math.random() * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: 'heart'
      });
    }

    // Add love emojis
    for (let i = 12; i < 25; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 10,
        size: 16 + Math.random() * 12,
        color: '',
        type: 'emoji',
        emoji: loveEmojis[Math.floor(Math.random() * loveEmojis.length)]
      });
    }

    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${Math.random() * 8}s`
          }}
        >
          {heart.type === 'heart' ? (
            <Heart
              size={heart.size}
              className={`${heart.color} animate-pulse opacity-40 hover:opacity-70 transition-opacity duration-300`}
              fill="currentColor"
            />
          ) : (
            <span 
              className="animate-pulse opacity-40 hover:opacity-70 transition-opacity duration-300"
              style={{ fontSize: `${heart.size}px` }}
            >
              {heart.emoji}
            </span>
          )}
        </div>
      ))}
      
      {/* Particle stars */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full animate-shooting-star opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}

      {/* Floating petals */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`petal-${i}`}
          className="absolute w-3 h-3 bg-pink-200 rounded-full animate-fall opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${10 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;