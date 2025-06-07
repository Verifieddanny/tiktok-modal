"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  X,
  Zap,
  Users,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

interface AnimatedNumbers {
  views: number;
  likes: number;
  followers: number;
}

const TikTokModalVariant1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
          @font-face {
          font-family: "GT Walsheim Pro";
          src: url("/fonts/GTWalsheimPro-Regular.woff2") format("woff2"),
            url("/fonts/GTWalsheimPro-Regular.woff") format("woff");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
          font-display: block;
        }
        @font-face {
          font-family: "GT Walsheim Pro";
          src: url("/fonts/GTWalsheimPro-Medium.woff2") format("woff2"),
            url("/fonts/GTWalsheimPro-Medium.woff") format("woff");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
          font-display: block;
        }
        @font-face {
          font-family: "GT Walsheim Pro";
          src: url("/fonts/GTWalsheimPro-Bold.woff2") format("woff2"),
            url("/fonts/GTWalsheimPro-Bold.woff") format("woff");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
          font-display: block;
        }

        .gt-walsheim {
          font-family: "GT Walsheim Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, sans-serif;
        }
        .gradient-bg-variant1 {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .glassmorphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto gt-walsheim">
        <div
          className={`${
            isMobile
              ? "rounded-none w-full max-w-sm"
              : "rounded-3xl max-w-4xl w-full flex flex-row"
          } shadow-2xl overflow-hidden transform transition-all duration-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {/* Left Side - Clean White Panel */}
          <div className={`${isMobile ? "p-6 w-full" : "flex-1 p-8"} bg-white relative`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-500">
                  Personalizing Your Growth
                </div>
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
                Competitors & Similar People
              </h1>
              <p className="text-gray-600 mb-6">
                Which TikTok accounts are similar to yours?
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Please add between 3 and 5 competitors or similar accounts to yours.
              </p>

              {/* Input Field */}
              <div className="relative mb-6">
                <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="w-5 h-5 mr-3">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-gray-400">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="flex-1 bg-transparent border-none outline-none text-gray-700"
                  />
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-sm">→</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Confirm
                </button>
                <button className="w-full border border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  Optimize with AI
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                I'll do that later
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                Connect TikTok Account 🎉
              </button>
            </div>
          </div>

          {/* Right Side - TikTok Grid Display */}
          {!isMobile && (
            <div className="flex-1 backgroundy p-8 relative overflow-hidden">
            {/* <div className="flex-1 gradient-bg-variant1 p-8 relative overflow-hidden"> */}

              {/* Grid of TikTok-style content */}
              <div className="grid grid-cols-3 gap-4 h-full">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`glassmorphism rounded-2xl p-4 flex flex-col justify-between floating-element`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {/* Mock TikTok content */}
                    <div className="relative">
                      <div className="w-full h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl mb-3 flex items-center justify-center">
                        {i % 3 === 0 && <Heart className="w-6 h-6 text-white" fill="currentColor" />}
                        {i % 3 === 1 && <MessageCircle className="w-6 h-6 text-white" />}
                        {i % 3 === 2 && <Share2 className="w-6 h-6 text-white" />}
                      </div>
                      <div className="text-white text-xs font-medium">
                        @user{i + 1}
                      </div>
                      <div className="text-white/70 text-xs">
                        {i % 2 === 0 ? "Dance trends" : "Comedy skits"}
                      </div>
                    </div>
                    <div className="flex justify-between text-white/80 text-xs mt-2">
                      <span>{(Math.random() * 10 + 1).toFixed(1)}K</span>
                      <Heart className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating stats */}
              <div className="absolute top-6 right-6 glassmorphism rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">+{animatedNumbers.views.toLocaleString()}</div>
                <div className="text-sm opacity-80">Total Reach</div>
              </div>

              <div className="absolute bottom-6 left-6 glassmorphism rounded-xl p-4 text-white">
                <div className="text-2xl font-bold">+{animatedNumbers.followers}</div>
                <div className="text-sm opacity-80">New Followers</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TikTokModalVariant1;
