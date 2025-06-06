'use client';
import React, { useState } from 'react';
import { Heart, X, Sparkles } from 'lucide-react';

const UpGrowTikTokModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
        >
          Open UpGrow TikTok Modal
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative w-full max-w-md mx-auto">
        {/* Close Button
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button> */}

        {/* Modal Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex w-[700px] modal-container">

                  {/* Content Section */}
          <div className="px-6 py-6 w-1/2">
            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                UpGrow
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                for TikTok
              </h2>
              
              {/* NEW Badge */}
              <div className="mb-4">
                <span className="text-lg font-bold">
                  <span className="text-pink-500">NEW:</span>
                  <span className="text-gray-900"> Grow your TikTok account with UpGrow </span>
                  <Sparkles className="inline w-5 h-5 text-yellow-400" />
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="text-center mb-8 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                The TikTok integration is finally here! 
                <span className="inline-block ml-1">🚨</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Get more <span className="font-semibold">real</span> TikTok followers, likes, and comments and grow your TikTok account with UpGrow – <span className="italic">limited availability</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-center">
                Add TikTok account
              </button>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full text-gray-500 hover:text-gray-700 font-semibold py-3 px-6 transition-colors duration-200 text-center"
              >
                No, thanks
              </button>
            </div>
          </div>


          {/* Header Section with Gradient Background */}
          <div className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 px-6 py-8 w-1/2 text-center overflow-hidden">
            {/* Floating Hearts Animation */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${15 + (i * 15)}%`,
                    top: `${10 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                >
                  <Heart 
                    className={`text-white opacity-30 ${i % 2 === 0 ? 'w-4 h-4' : 'w-6 h-6'}`} 
                    fill="currentColor" 
                  />
                </div>
              ))}
            </div>

            {/* New Feature Badge */}
            <div className="relative z-10 mb-4">
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                New Feature
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative z-10 mb-4">
              <div className="w-24 h-44 mx-auto bg-black rounded-2xl p-1 shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-b from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-xs font-bold">TikTok</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(-5px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .modal-container {
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default UpGrowTikTokModal;