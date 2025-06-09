import TikTokModal from "@/components/third--modal";
import UpGrowTikTokModal from "@/components/second-modal";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TikTokModal />
      // <UpGrowTikTokModal />
    // </div>
  );
}

// "use client"
// import { useState } from "react";
// import TikTokModal from "@/components/third--modal";
// import TikTokModalVariant1 from "@/components/iteration-1";
// import TikTokModalVariant2 from "@/components/iteration-2";

// const Index = () => {
//   const [activeModal, setActiveModal] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <div className="text-center space-y-8 p-8">
//         <h1 className="text-5xl font-bold text-white mb-4">
//           TikTok Modal Showcase
//         </h1>
//         <p className="text-xl text-gray-300 mb-12">
//           Choose from three beautifully designed TikTok modal variations
//         </p>
        
//         <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
//           {/* Original Modal */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
//             <h3 className="text-xl font-semibold text-white mb-4">Original Design</h3>
//             <p className="text-gray-300 mb-6 text-sm">
//               Dynamic TikTok interface with animated phone mockup and growth metrics
//             </p>
//             <button
//               onClick={() => setActiveModal("original")}
//               className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
//             >
//               View Original
//             </button>
//           </div>

//           {/* Variant 1 */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
//             <h3 className="text-xl font-semibold text-white mb-4">Competitor Analysis</h3>
//             <p className="text-gray-300 mb-6 text-sm">
//               Clean competitor selection interface with TikTok content grid display
//             </p>
//             <button
//               onClick={() => setActiveModal("variant1")}
//               className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all"
//             >
//               View Variant 1
//             </button>
//           </div>

//           {/* Variant 2 */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform">
//             <h3 className="text-xl font-semibold text-white mb-4">Goal Selection</h3>
//             <p className="text-gray-300 mb-6 text-sm">
//               Modern account setup with goal cards and animated notifications
//             </p>
//             <button
//               onClick={() => setActiveModal("variant2")}
//               className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all"
//             >
//               View Variant 2
//             </button>
//           </div>
//         </div>

//         <div className="mt-12">
//           <p className="text-gray-400 text-sm">
//             Each modal features unique aesthetics while maintaining TikTok functionality
//           </p>
//         </div>
//       </div>

//       {/* Render Modals */}
//       {activeModal === "original" && <TikTokModal />}
//       {activeModal === "variant1" && <TikTokModalVariant1 />}
//       {activeModal === "variant2" && <TikTokModalVariant2 />}
//     </div>
//   );
// };

// export default Index;
