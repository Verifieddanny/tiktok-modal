"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { X, Zap, TrendingUp, Users, Heart, MessageCircle, Share2 } from "lucide-react"

interface FloatingIconProps {
  Icon: React.ComponentType<{ className?: string }>
  delay: number
  className?: string
}

interface AnimatedNumbers {
  views: number
  likes: number
  followers: number
}

const TikTokModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState<AnimatedNumbers>({
    views: 0,
    likes: 0,
    followers: 0,
  })

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    setIsVisible(true)

    // Slowed down the number animations
    const intervals = [
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          views: Math.min(prev.views + 150, 15600),
        }))
      }, 10),
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          likes: Math.min(prev.likes + 100, 2800),
        }))
      }, 10),
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          followers: Math.min(prev.followers + 30, 890),
        }))
      }, 10),
    ]

    return () => {
      intervals.forEach(clearInterval)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden transform transition-all duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Left Side - Content */}
        <div className="flex-1 p-6 md:p-8 relative order-2 md:order-1">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                🚀 New Feature
              </span>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              Dominate TikTok with
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Gainsty
              </span>{" "}
              ✨
            </h1>

            <p className="text-sm md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
              The TikTok revolution is finally here! 🎉 <br />
              Skyrocket your TikTok presence with{" "}
              <span className="font-semibold text-gray-800">authentic followers</span>, explosive engagement, and
              viral-worthy content that gets you noticed.
              <span className="font-medium text-indigo-600"> Limited time offer!</span>
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="text-center p-3 md:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl border border-blue-100">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  +{animatedNumbers.views.toLocaleString()}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Video Views</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl md:rounded-2xl border border-indigo-100">
                <div className="text-xl md:text-2xl font-bold text-indigo-600">
                  +{animatedNumbers.likes.toLocaleString()}
                </div>
                <div className="text-xs md:text-sm text-gray-600">Likes</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl md:rounded-2xl border border-violet-100">
                <div className="text-xl md:text-2xl font-bold text-violet-600">+{animatedNumbers.followers}</div>
                <div className="text-xs md:text-sm text-gray-600">New Followers</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <button className="flex-1 bg-gradient-to-r cursor-pointer from-blue-500 via-indigo-500 to-violet-600 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-xl md:rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
              <Zap className="w-4 h-4 md:w-5 md:h-5" />
              Connect TikTok Account
            </button>
            <button className="px-4 md:px-6 py-3 cursor-pointer md:py-4 text-gray-500 hover:text-gray-700 font-medium transition-colors text-sm md:text-base">
              Maybe later
            </button>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div
          className={`${
            isMobile ? "h-64" : "h-96 md:h-auto"
          } flex-1 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 relative overflow-hidden order-1 md:order-2`}
        >
          {/* Floating Hearts Animation - Slowed down */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(isMobile ? 5 : 10)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-super-slow-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 20}s`, // Much longer delay - 20 seconds between each
                  animationDuration: `${120 + Math.random() * 60}s`, // 2-3 minutes duration
                  opacity: 0.2 + Math.random() * 0.5,
                }}
              >
                <Heart
                  className={`w-${2 + (i % 3)} h-${2 + (i % 3)}`}
                  style={{
                    color: `rgba(255, ${50 + Math.random() * 100}, ${
                      100 + Math.random() * 155
                    }, ${0.3 + Math.random() * 0.4})`,
                    fontSize: `${6 + Math.random() * 10}px`,
                  }}
                  fill="currentColor"
                />
              </div>
            ))}
          </div>

          {/* Floating Sparkles - Slowed down */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(isMobile ? 8 : 15)].map((_, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute animate-super-slow-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 15}s`, // Much longer delay - 15 seconds between each
                  animationDuration: `${100 + Math.random() * 50}s`, // 1.5-2.5 minutes duration
                  opacity: 0.1 + Math.random() * 0.4,
                }}
              >
                <div
                  className="rounded-full shadow-lg"
                  style={{
                    width: `${1 + Math.random() * 2}px`,
                    height: `${1 + Math.random() * 2}px`,
                    background: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.4})`,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Phone Mockup - Responsive */}
          {!isMobile && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 md:w-64 h-[345px] md:h-[460px] bg-gray-800 rounded-[28px] md:rounded-[36px] p-1 md:p-1.5 shadow-2xl border-6 md:border-8 border-gray-900 relative overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 md:w-1/3 h-4 md:h-5 bg-gray-900 rounded-b-lg md:rounded-b-xl z-10"></div>

                {/* Screen content */}
                <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[24px] md:rounded-[30px] relative overflow-hidden">
                  {/* TikTok Interface Header */}
                  <div className="absolute top-2 md:top-3 left-2 md:left-3 right-2 md:right-3 flex justify-between items-center">
                    <div className="flex space-x-2 md:space-x-3 text-white text-xs">
                      <span className="font-bold border-b-2 border-white pb-0.5 md:pb-1">Following</span>
                      <span className="font-bold">For You</span>
                    </div>
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-white/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 md:w-3 md:h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Video Content Area with floating hearts */}
                  <div className="absolute inset-0 mt-8 md:mt-10 mb-12 md:mb-16 bg-gradient-to-b from-indigo-400/20 to-blue-400/20 flex items-center justify-center overflow-hidden">
                    {/* Floating hearts on the video - Slowed down
                    {[...Array(isMobile ? 4 : 8)].map((_, i) => (
                      <div
                        key={`video-heart-${i}`}
                        className="absolute animate-float"
                        style={{
                          left: `${10 + i * 10}%`,
                          top: `${20 + i * 5}%`,
                          animationDelay: `${i * 2.5}s`, // Increased delay
                          animationDuration: `${15 + Math.random() * 18}s`, // Increased duration
                          opacity: 0.4 + Math.random() * 0.6,
                        }}
                      >
                        <Heart
                          className="w-3 h-3 md:w-4 md:h-4"
                          style={{
                            color: `rgba(255, ${50 + Math.random() * 100}, ${
                              100 + Math.random() * 155
                            }, 0.7)`,
                          }}
                          fill="currentColor"
                        />
                      </div>
                    ))} */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-20 h-20 md:w-28 md:h-28">
                        {/* Pulsating heart background */}
                        <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
                          <Heart className="w-16 h-16 md:w-24 md:h-24 text-pink-500/20" fill="currentColor" />
                        </div>

                        {/* Main heart with beat animation */}
                        <div className="absolute inset-0 flex items-center justify-center animate-heartbeat">
                          <Heart className="w-12 h-12 md:w-16 md:h-16 text-pink-500" fill="currentColor" />
                        </div>

                        {/* Small floating hearts */}
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={`heart-particle-${i}`}
                            className="absolute animate-float-away"
                            style={{
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                              animationDelay: `${i * 0.4}s`,
                            }}
                          >
                            <Heart
                              className="w-3 h-3 md:w-4 md:h-4"
                              style={{
                                color: i % 2 === 0 ? "rgba(236, 72, 153, 0.9)" : "rgba(244, 114, 182, 0.9)",
                              }}
                              fill="currentColor"
                            />
                          </div>
                        ))}

                        {/* Sparkles around heart */}
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={`sparkle-particle-${i}`}
                            className="absolute animate-sparkle"
                            style={{
                              left: `${50 + Math.cos((i * 30 * Math.PI) / 180) * 60}%`,
                              top: `${50 + Math.sin((i * 30 * Math.PI) / 180) * 60}%`,
                              animationDelay: `${i * 0.2}s`,
                            }}
                          >
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 text-white">
                      <div className="font-semibold text-xs md:text-sm">@your_username</div>
                      <div className="text-xxs md:text-xs max-w-[120px] md:max-w-[180px]">
                        Check out this amazing content! #viral #trending
                      </div>
                    </div>

                  </div>

                  {/* Side Actions */}
                  <div className="absolute right-1 md:right-1.5 bottom-14 md:bottom-20 space-y-2 md:space-y-4 flex flex-col items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center mb-0.5 md:mb-1">
                        <Heart className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
                      </div>
                      <span className="text-xxs md:text-xs text-white">24.5K</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center mb-0.5 md:mb-1">
                        <MessageCircle className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
                      </div>
                      <span className="text-xxs md:text-xs text-white">3.2K</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center mb-0.5 md:mb-1">
                        <Share2 className="w-2.5 h-2.5 md:w-4 md:h-4 text-white" />
                      </div>
                      <span className="text-xxs md:text-xs text-white">Share</span>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center mt-0.5 md:mt-1">
                      <img
                        src="/tiktok.png"
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover border border-pink-500 md:border-2"
                      />
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 md:h-14 bg-black flex justify-around items-center px-2 md:px-3">
                    <div className="flex flex-col items-center">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                      </svg>
                      <div className="w-1 h-1 bg-white rounded-full mt-0.5"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center relative">
                      <div className="absolute -top-4 md:-top-6 w-8 md:w-12 h-0.5 md:h-1 bg-white rounded-full"></div>
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-400 overflow-hidden">
                        <img src="/tiktok.png" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notification Cards - Hidden on mobile */}
          {!isMobile && (
            <div className="absolute top-4 md:top-6 left-4 md:left-6 space-y-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg transform hover:scale-105 transition-transform w-40 md:w-48">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-indigo-500" />
                  <div className="text-xxs md:text-xs">
                    <div className="font-semibold text-gray-800">📈 Trending Alert</div>
                    <div className="text-gray-600">Your video is going viral!</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg transform hover:scale-105 transition-transform w-40 md:w-48">
                <div className="flex items-center gap-2">
                  <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                  <div className="text-xxs md:text-xs">
                    <div className="font-semibold text-gray-800">👥 +47 new followers</div>
                    <div className="text-gray-600">in the last hour</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-1/4 right-0 w-16 md:w-24 h-16 md:h-24 bg-white/5 rounded-full"></div>
            <div className="absolute bottom-1/4 left-0 w-14 md:w-20 h-14 md:h-20 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Add custom animations to your CSS */}
      <style jsx global>{`
        @keyframes super-slow-float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-120px) rotate(12deg);
            opacity: 0;
          }
        }
        .animate-super-slow-float {
          animation: super-slow-float ease-in-out infinite;
          animation-duration: 150s; /* Much slower - 2.5 minutes */
        }

        @keyframes blink {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          20% {
            opacity: 1;
            transform: scale(1.1);
          }
          40% {
            opacity: 0.8;
            transform: scale(1);
          }
          60% {
            opacity: 1;
            transform: scale(1.05);
          }
          80% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
        .animate-blink {
          animation: blink ease-in-out infinite;
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          40% {
            transform: scale(1);
          }
          60% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.4;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes float-away {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          20% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + ${Math.random() * 40 - 20}px), calc(-50% - 40px)) scale(0.5);
            opacity: 0;
          }
        }
        .animate-float-away {
          animation: float-away 2s ease-out infinite;
        }

        @keyframes sparkle {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default TikTokModal
