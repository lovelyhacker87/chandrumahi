import React, { useState } from 'react';
import { Camera, Heart, Star } from 'lucide-react';
import firstPhoto from '../photos/first-photo.jpg';
import funnyMoment from '../photos/funny-moment.jpg';
import secretMeet from '../photos/secret-meet.jpg'
import laughingTogether from '../photos/laughing-together.jpg';
import foreverTogether from '../photos/forever-together.jpg';
import perfectSelfie from '../photos/perfect-selfie.jpg'
import studyDate from '../photos/study-date.jpg'
import cuteSelfie from '../photos/cute-selfie.jpg'
import theatreDate from '../photos/theatre-date.jpg'
import earlyDays from '../photos/early-days.jpg'
import walkingTogether from '../photos/walking-together.jpg'
import funnyMoment1 from '../photos/funny.jpg'


const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photoCategories = [
    { id: 'all', name: 'All Photos', icon: '📷' },
    { id: 'first', name: 'First Photo Together', icon: '💕' },
    { id: 'funny', name: 'Funny Moments', icon: '😄' },
    { id: 'college', name: 'Secret Meets', icon: '🙈' },
    { id: 'selfies', name: 'Favorite Selfies', icon: '🤳' },
    { id: 'forever', name: 'Forever Love', icon: '💖' }
  ];

  const photos = [
    { id: 1, category: 'first', title: 'Our First Photo Together', src: firstPhoto },
    { id: 2, category: 'funny', title: 'Making Silly Faces', src: funnyMoment },
    { id: 3, category: 'college', title: 'Secret Meet', src: secretMeet },
    { id: 4, category: 'selfies', title: 'Perfect Selfie', src: perfectSelfie},
    { id: 5, category: 'forever', title: 'Forever Together', src: foreverTogether },
    { id: 6, category: 'funny', title: 'Laughing Together', src: laughingTogether },
    { id: 7, category: 'college', title: 'Study Date', src: studyDate },
    { id: 8, category: 'selfies', title: 'Cute Couple Selfie', src: cuteSelfie },
    { id: 9, category: 'forever', title: 'Theate Date', src: theatreDate },
    { id: 10, category: 'first', title: 'Early Days', src: earlyDays },
    { id: 11, category: 'funny', title: 'Walking Together', src: walkingTogether },
    { id: 12, category: 'selfies', title: 'Funny Moments', src: funnyMoment1 }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold font-pacifico text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Beautiful Memories 📸
        </h2>
        
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Every photo tells a story, every moment captures our love. 
          Here's our journey in pictures - from the first click to forever! 💕
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {photoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo placeholder with gradient */}
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center relative">
                <Camera className="text-gray-400" size={48} />
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    // Keep the placeholder if image fails toload
                    e.currentTarget.style.opacity = '0';
                  }}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                  </div>
                </div>

                {/* Floating hearts on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      size={16}
                      className="absolute text-pink-400 opacity-0 group-hover:opacity-100 animate-pulse"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 1}s`
                      }}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              {/* Photo info */}
              <div className="p-4">
                <p className="text-sm text-gray-600 text-center">{photo.title}</p>
                <div className="flex justify-center mt-2">
                  <Star className="text-yellow-400" size={16} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="text-5xl mb-4">📷💕</div>
            <p className="text-2xl text-gray-700 font-light leading-relaxed">
              Each photo is a frozen moment of our love story. 
              Together, they create the beautiful album of our journey! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
