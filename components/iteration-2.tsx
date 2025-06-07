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
import Image from "next/image";

interface AnimatedNumbers {
  views: number;
  likes: number;
  followers: number;
}

const TikTokModalVariant2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("followers");
  const [animatedNumbers, setAnimatedNumbers] = useState<AnimatedNumbers>({
    views: 0,
    likes: 0,
    followers: 0,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    setIsVisible(true);

    const intervals = [
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          views: Math.min(prev.views + 180, 18700),
        }));
      }, 8),
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          likes: Math.min(prev.likes + 120, 3400),
        }));
      }, 8),
      setInterval(() => {
        setAnimatedNumbers((prev) => ({
          ...prev,
          followers: Math.min(prev.followers + 40, 1200),
        }));
      }, 8),
    ];

    return () => {
      intervals.forEach(clearInterval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const goals = [
    {
      id: "engagement",
      icon: Heart,
      title: "Engagement",
      description: "More likes, comments and reach on posts",
      color: "bg-pink-50 border-pink-200 text-pink-700",
      iconColor: "text-pink-500"
    },
    {
      id: "followers",
      icon: Users,
      title: "Followers",
      description: "More genuine, targeted followers",
      color: "bg-blue-50 border-blue-200 text-blue-700",
      iconColor: "text-blue-500"
    },
    {
      id: "both",
      icon: TrendingUp,
      title: "Followers & Engagement",
      description: "Both likes, reach and followers",
      color: "bg-purple-50 border-purple-200 text-purple-700",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <>
      <style jsx global>{`
        .gradient-bg-variant2 {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%);
        }
        
        .notification-card {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .goal-card {
          transition: all 0.3s ease;
        }
        
        .goal-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .goal-card.selected {
          transform: scale(1.02);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
        }
      `}</style>

      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto font-sans">
        <div
          className={`${
            isMobile
              ? "rounded-none w-full max-w-sm"
              : "rounded-3xl max-w-4xl w-full flex flex-row"
          } shadow-2xl overflow-hidden transform transition-all duration-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Left Side - Account Setup Style */}
          <div className={`${isMobile ? "p-6 w-full" : "flex-1 p-8"} bg-white relative`}>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-500">
                Welcome, Telvion Clark!
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Let's setup your account ✨
              </h1>
              <p className="text-gray-600 mb-8">
                It takes you just a minute to start your TikTok followers growth with Gainsty.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  What do you more prefer to get?
                </h3>

                <div className="space-y-4">
                  {goals.map((goal) => (
                    <div
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`goal-card p-4 rounded-xl border-2 cursor-pointer ${
                        selectedGoal === goal.id
                          ? "border-blue-500 bg-blue-50 selected"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${selectedGoal === goal.id ? "bg-blue-100" : "bg-gray-100"}`}>
                          <goal.icon className={`w-5 h-5 ${selectedGoal === goal.id ? "text-blue-600" : "text-gray-600"}`} />
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${selectedGoal === goal.id ? "text-blue-900" : "text-gray-900"}`}>
                            {goal.title}
                          </div>
                          <div className={`text-sm ${selectedGoal === goal.id ? "text-blue-700" : "text-gray-600"}`}>
                            {goal.description}
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedGoal === goal.id 
                            ? "border-blue-500 bg-blue-500" 
                            : "border-gray-300"
                        }`}>
                          {selectedGoal === goal.id && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button className="text-gray-400 hover:text-gray-600 transition-colors text-sm">
                I'll do that later
              </button>
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2">
                Continue
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Side - Analytics Display */}
          {!isMobile && (
            <div className="flex-1 backgroundy p-8 relative overflow-hidden">
              {/* Notification Cards Stack */}
              <div className="space-y-4">
                <div 
                  className="notification-card bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        +{animatedNumbers.views.toLocaleString()} people viewed your story
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="notification-card bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs ml-8"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        +{animatedNumbers.likes.toLocaleString()} people liked your post
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="notification-card bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        +{animatedNumbers.followers} people just followed you
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {/* <Zap className="w-8 h-8 text-white" /> */}
                  <Image src="/tiktok.png" alt="tiktok" width={45} height={45} quality={80} />
                </div>
              </div>

              <div className="absolute bottom-8 right-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="text-sm opacity-80 mb-1">Growth Rate</div>
                  <div className="text-2xl font-bold">+247%</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-12 w-3 h-3 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-32 left-8 w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="absolute top-32 left-12 w-4 h-4 bg-white/20 rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TikTokModalVariant2;
