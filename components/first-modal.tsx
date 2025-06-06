'use client'
import React, { useState } from 'react';
import { Heart, Music, Play, Plus, User, Users, MessageCircle, X } from 'lucide-react';

type TikTokPost = {
  id: number;
  views: string;
  likes: string;
};

const TikTokModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('followers-engagement');
  const [competitors, setCompetitors] = useState<string[]>(['']);

  const addCompetitor = (): void => {
    if (competitors.length < 5) {
      setCompetitors([...competitors, '']);
    }
  };

  const updateCompetitor = (index: number, value: string): void => {
    const updated = [...competitors];
    updated[index] = value;
    setCompetitors(updated);
  };

  const removeCompetitor = (index: number): void => {
    setCompetitors(competitors.filter((_, i) => i !== index));
  };

  const mockTikTokPosts: TikTokPost[] = [
    { id: 1, views: '2.1M', likes: '143K' },
    { id: 2, views: '856K', likes: '67K' },
    { id: 3, views: '1.3M', likes: '92K' },
    { id: 4, views: '743K', likes: '51K' },
    { id: 5, views: '2.8M', likes: '198K' },
    { id: 6, views: '1.1M', likes: '78K' },
  ];

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
        >
          Open TikTok Growth Modal
        </button>
      </div>
    );
  }

  const renderStep1 = () => (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex">
      {/* Left Panel */}
      <div className="flex-1 p-8">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          New Feature
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          UpGrow
          <br />
          <span className="text-3xl">for TikTok</span>
        </h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            <span className="text-pink-500">NEW:</span> Grow your TikTok account with UpGrow ✨
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The TikTok integration is finally here! 🚨<br />
            Get more <strong>real</strong> TikTok followers, likes, and comments and grow your TikTok account with UpGrow – <em>limited availability</em>
          </p>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentStep(2)}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Add TikTok account
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 px-6 py-3 rounded-lg font-semibold hover:text-gray-700 transition-colors"
          >
            No, thanks
          </button>
        </div>
      </div>
      
      {/* Right Panel - TikTok Preview */}
      <div className="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10">
          {/* Floating Hearts */}
          <div className="absolute top-4 right-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`absolute animate-bounce`} style={{ animationDelay: `${i * 0.5}s` }}>
                <Heart className="w-6 h-6 text-red-500 fill-current" style={{ transform: `translate(${i * 15}px, ${i * 20}px)` }} />
              </div>
            ))}
          </div>
          
          {/* Phone Mockup */}
          <div className="mt-12 mx-auto w-64 h-96 bg-black rounded-3xl p-1 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center p-4 text-white text-xs">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-1 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              
              {/* TikTok Interface */}
              <div className="flex-1 bg-gradient-to-b from-purple-900 to-pink-900 relative">
                <div className="absolute right-4 bottom-20 flex flex-col gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-white text-xs">125K</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-gray-800" />
                    </div>
                    <span className="text-white text-xs">2.1K</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-gray-800" />
                    </div>
                    <span className="text-white text-xs">Share</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-16">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                    <span className="text-white font-semibold">@yourusername</span>
                  </div>
                  <p className="text-white text-sm">Growing my TikTok with UpGrow! 🚀</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex">
      {/* Left Panel */}
      <div className="flex-1 p-8">
        <div className="text-gray-500 text-sm mb-2">Personalizing Your Growth</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Competitors & Similar People</h2>
        
        <div className="mb-6">
          <p className="text-gray-700 font-semibold mb-2">Which TikTok accounts are similar to yours?</p>
          <p className="text-gray-500 text-sm mb-4">Please add between 3 and 5 competitors or similar accounts to yours.</p>
          
          <div className="space-y-3 mb-4">
            {competitors.map((competitor, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Music className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={competitor}
                    onChange={(e) => updateCompetitor(index, e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {competitors.length > 1 && (
                  <button
                    onClick={() => removeCompetitor(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                {index === competitors.length - 1 && competitors.length < 5 && (
                  <button
                    onClick={addCompetitor}
                    className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentStep(3)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-full flex items-center justify-center gap-2"
          >
            <User className="w-4 h-4" />
            Confirm
          </button>
        </div>
        
        <button
          onClick={() => setCurrentStep(4)}
          className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
        >
          I'll do that later
        </button>
      </div>
      
      {/* Right Panel - TikTok Grid */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-8 relative overflow-hidden">
        <div className="grid grid-cols-3 gap-3 h-full">
          {mockTikTokPosts.map((post) => (
            <div key={post.id} className="aspect-square bg-gray-800 rounded-xl overflow-hidden relative group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-80"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <div className="text-white text-xs font-semibold">{post.views}</div>
                <div className="text-white text-xs opacity-80">{post.likes} likes</div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex">
      {/* Left Panel */}
      <div className="flex-1 p-8">
        <div className="text-gray-500 text-sm mb-2">Link Your Socials</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect account</h2>
        
        <p className="text-gray-600 mb-6">
          In order to start growing your TikTok account you need to connect your profile to our growth system.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">@verifieddanny___</div>
                <div className="text-sm text-gray-500">Not Connected</div>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Connect
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Music className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">TikTok</div>
                <div className="text-sm text-gray-500">Request beta access</div>
              </div>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Request
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-600">Change my username</span>
          <span className="text-blue-500">→</span>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentStep(2)}
            className="text-gray-600 px-6 py-3 rounded-lg font-semibold hover:text-gray-800 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => setCurrentStep(4)}
            className="text-gray-600 px-6 py-3 rounded-lg font-semibold hover:text-gray-800 transition-colors flex items-center gap-2"
          >
            Skip for now
            <span>→</span>
          </button>
        </div>
      </div>
      
      {/* Right Panel - Growth Stats */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8 flex flex-col justify-center space-y-6">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5" />
            <span className="font-semibold">817 people viewed your story</span>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">+12 people liked your post</span>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-5 h-5" />
            <span className="font-semibold">+36 people just followed you</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex">
      {/* Left Panel */}
      <div className="flex-1 p-8">
        <div className="text-gray-500 text-sm mb-2">Welcome, Nwachukwu Daniel Chigozrim!</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          Let's setup your account ✨
        </h2>
        
        <p className="text-gray-600 mb-8">
          It takes you just a minute to start your TikTok followers growth with Gainsty.
        </p>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What do you more prefer to get?</h3>
          
          <div className="space-y-3">
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="goal"
                value="engagement"
                checked={selectedGoal === 'engagement'}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center gap-3 flex-1">
                <MessageCircle className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-semibold text-gray-900">Engagement</div>
                  <div className="text-sm text-gray-500">More likes, comments and reach on posts</div>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedGoal === 'engagement' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                {selectedGoal === 'engagement' && <div className="w-3 h-3 bg-white rounded-full"></div>}
              </div>
            </label>
            
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="goal"
                value="followers"
                checked={selectedGoal === 'followers'}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center gap-3 flex-1">
                <User className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-semibold text-gray-900">Followers</div>
                  <div className="text-sm text-gray-500">More genuine, targeted followers</div>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedGoal === 'followers' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                {selectedGoal === 'followers' && <div className="w-3 h-3 bg-white rounded-full"></div>}
              </div>
            </label>
            
            <label className="flex items-center p-4 border-2 border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="goal"
                value="followers-engagement"
                checked={selectedGoal === 'followers-engagement'}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center gap-3 flex-1">
                <Users className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Followers & Engagement</div>
                  <div className="text-sm text-gray-500">Both likes, reach and followers</div>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-blue-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </label>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 px-6 py-3 rounded-lg font-semibold hover:text-gray-700 transition-colors"
          >
            I'll do that later
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors flex items-center gap-2"
          >
            Continue
            <span>→</span>
          </button>
        </div>
      </div>
      
      {/* Right Panel - Same as Step 3 */}
      <div className="flex-1 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8 flex flex-col justify-center space-y-6">
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5" />
            <span className="font-semibold">817 people viewed your story</span>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">+12 people liked your post</span>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-5 h-5" />
            <span className="font-semibold">+36 people just followed you</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 z-50 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Modal Content */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
        
        {/* Step Indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentStep === step ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TikTokModal;