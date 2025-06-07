"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  X,
  Zap,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

interface FloatingIconProps {
  Icon: React.ComponentType<{ className?: string }>;
  delay: number;
  className?: string;
}

interface AnimatedNumbers {
  views: number;
  likes: number;
  followers: number;
}

const TikTokModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<AnimatedNumbers>({
    views: 0,
    likes: 0,
    followers: 0,
  });

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    setIsVisible(true);

    // Slowed down the number animations
    const intervals = [
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          views: Math.min(prev.views + 150, 15600),
        }));
      }, 10),
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          likes: Math.min(prev.likes + 100, 2800),
        }));
      }, 10),
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          followers: Math.min(prev.followers + 30, 890),
        }));
      }, 10),
    ];

    return () => {
      intervals.forEach(clearInterval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
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
          will-change: transform;
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
          will-change: transform;
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
            transform: translate(
                calc(-50% + ${Math.random() * 40 - 20}px),
                calc(-50% - 40px)
              )
              scale(0.5);
            opacity: 0;
          }
        }
        .animate-float-away {
          animation: float-away 2s ease-out infinite;
          will-change: transform;
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
          will-change: transform;
        }
      `}</style>

      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto gt-walsheim">
        <div
          className={`${
            isMobile
              ? "rounded-none w-full h-full flex justify-center items-center"
              : "rounded-3xl max-w-4xl w-full flex flex-row"
          } shadow-2xl overflow-hidden transform transition-all duration-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Left Side - Content */}
          <div
            className={`${
              isMobile ? "p-4 w-full" : "flex-1 p-6 md:p-8"
            } bg-white h-[450px]  md:h-fit w-full md:min-h-[620px] relative overflow-x-hidden`}
          >
            <div className="flex items-center justify-between w-full mb-4 md:mb-6">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                  🚀 New Feature
                </span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl font-bold text-[#303030] mb-3 md:mb-4 leading-tight">
                Dominate TikTok with
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                  {" "}
                  Gainsty
                </span>{" "}
                ✨
              </h1>

              <p className="text-sm md:text-lg text-[#808080] leading-relaxed mb-4 md:mb-6">
                The TikTok revolution is finally here! 🎉 <br />
                Skyrocket your TikTok presence with{" "}
                <span className="font-semibold text-gray-800">
                  authentic followers
                </span>
                , explosive engagement, and viral-worthy content that gets you
                noticed.
                <span className="font-medium text-indigo-600">
                  {" "}
                  Limited time offer!
                </span>
              </p>

              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl border border-[#266CDF]">
                  <div className="text-xl md:text-2xl font-bold text-[#266CDF]">
                    +{animatedNumbers.views.toLocaleString()}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Video Views
                  </div>
                </div>
                <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl border border-[#266CDF]">
                  <div className="text-xl md:text-2xl font-bold text-[#266CDF]">
                    +{animatedNumbers.likes.toLocaleString()}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">Likes</div>
                </div>
                <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl border border-[#266CDF]">
                  <div className="text-xl md:text-2xl font-bold text-[#266CDF]">
                    +{animatedNumbers.followers}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    New Followers
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-between md:gap-4 md:mt-[8.5rem]">
              <button className="font-medium py-1 cursor-pointer rounded-md text-[#C1C1C1]">
                Maybe later
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none gap-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand text-primary-foreground hover:bg-brand/90 cursor-pointer h-10 px-4 py-2 bg-[#10B77F]">
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                Connect TikTok Account
              </button>
            </div>
          </div>

          {/* Right Side - Visual (Desktop only) */}
          {!isMobile && (
            <div className="flex-1  overflow-hidden md:p-8 backgroundy p-6 h-[80vh] md:h-fit w-screen md:min-h-[620px] _md:w-[90vw] sm:w-[460px] relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-[460px] bg-gray-800 rounded-[36px] p-1.5 shadow-2xl border-8 border-gray-900 relative overflow-hidden">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900 rounded-b-xl z-10"></div>

                  {/* Screen content */}
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[30px] relative overflow-hidden">
                    {/* TikTok Interface Header */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                      <div className="flex space-x-3 text-white text-xs">
                        <span className="font-bold border-b-2 border-white pb-1">
                          Following
                        </span>
                        <span className="font-bold">For You</span>
                      </div>
                      <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
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

                    {/* Video Content Area */}
                    <div className="absolute inset-0 mt-10 mb-16 bg-gradient-to-b from-indigo-400/20 to-blue-400/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-28 h-28">
                          {/* Pulsating heart background */}
                          <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
                            <Heart
                              className="w-24 h-24 text-pink-500/20"
                              fill="currentColor"
                            />
                          </div>

                          {/* Main heart with beat animation */}
                          <div className="absolute inset-0 flex items-center justify-center animate-heartbeat">
                            <Heart
                              className="w-16 h-16 text-pink-500"
                              fill="currentColor"
                            />
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
                                className="w-4 h-4"
                                style={{
                                  color:
                                    i % 2 === 0
                                      ? "rgba(236, 72, 153, 0.9)"
                                      : "rgba(244, 114, 182, 0.9)",
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
                                left: `${
                                  50 + Math.cos((i * 30 * Math.PI) / 180) * 60
                                }%`,
                                top: `${
                                  50 + Math.sin((i * 30 * Math.PI) / 180) * 60
                                }%`,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="absolute bottom-3 left-3 text-white">
                        <div className="font-semibold text-sm">
                          @your_username
                        </div>
                        <div className="text-xs max-w-[180px]">
                          Check out this amazing content! #viral #trending
                        </div>
                      </div>
                    </div>

                    {/* Side Actions */}
                    <div className="absolute right-1.5 bottom-20 space-y-4 flex flex-col items-center">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-1">
                          <Heart className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white">24.5K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-1">
                          <MessageCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white">3.2K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mb-1">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-white">Share</span>
                      </div>
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mt-1">
                        <img
                          src="/tiktok.png"
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover border-2 border-pink-500"
                        />
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-black flex justify-around items-center px-3">
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-5 h-5 text-white"
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
                          className="w-5 h-5 text-gray-400"
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
                        <div className="absolute -top-6 w-12 h-1 bg-white rounded-full"></div>
                        <svg
                          className="w-5 h-5 text-white"
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
                          className="w-5 h-5 text-gray-400"
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
                        <div className="w-5 h-5 rounded-full bg-gray-400 overflow-hidden">
                          <img
                            src="/tiktok.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Cards */}
              <div className="absolute top-6 left-6 space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg transform hover:scale-105 transition-transform w-48">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-500" />
                    <div className="text-xs">
                      <div className="font-semibold text-gray-800">
                        📈 Trending Alert
                      </div>
                      <div className="text-gray-600">
                        Your video is going viral!
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg transform hover:scale-105 transition-transform w-48">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <div className="text-xs">
                      <div className="font-semibold text-gray-800">
                        👥 +47 new followers
                      </div>
                      <div className="text-gray-600">in the last hour</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TikTokModal;
