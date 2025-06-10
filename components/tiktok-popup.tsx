"use client"

import { useState, useEffect } from "react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Inter } from "next/font/google"
import { TwitterIcon as TikTok } from "lucide-react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function TikTokPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsAnimating(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleDismiss()
      }
    }

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isVisible])

  const handleDismiss = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleAddTikTok = () => {
    // Handle TikTok account addition
    console.log("Add TikTok account clicked")
    handleDismiss()
  }

  if (!isVisible) return null

  return (
    <div
      className={`
        fixed z-50 gt-walsheim
        w-[calc(100%-32px)] bottom-4 left-4 right-4
        lg:w-[21.6rem] lg:right-4 lg:left-auto lg:bottom-[135px]
        transition-all duration-500 ease-in-out
        ${
          isAnimating
            ? "translate-y-0 lg:translate-x-0 lg:translate-y-0 lg:rotate-0"
            : "translate-y-[63%] lg:translate-x-[240px] lg:translate-y-[10px] lg:-rotate-[15deg]"
        }
        lg:hover:-translate-x-6 lg:hover:rotate-0
        lg:transition-transform lg:duration-300
      `}
      role="dialog"
      aria-labelledby="tiktokModalTitle"
    >
      <div className="relative h-full rounded-3xl border md:rounded-3xl ">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex flex-col overflow-hidden rounded-3xl border border-[#DEE5EE] bg-white">
          {/* Hero Image */}
          <div className="relative overflow-hidden">
            <img
              src="/tiktok-hero.png"
              alt="TikTok Growth Service with UpGrow"
              className="h-[200px] w-full object-cover object-[center_5%]"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-6 pt-4">
            <h2 id="tiktokModalTitle" className="text-xl font-bold tracking-tight text-black">
              <span className="text-[#fe2858]">NEW:</span> Grow your TikTok account with Gainsty ✨
            </h2>

            <p className={`mt-3 text-sm text-gray-700 ${inter.className}`}>
              The TikTok integration is finally here! 🤩<br />
              Get more <strong>real</strong> TikTok followers, likes, and comments and grow your TikTok account with
              Gainsty — <em>limited availability</em>
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex items-center gap-2">
              <button
                type="button"
                onClick={handleAddTikTok}
                className="group flex-1 rounded-xl p-1 cursor-pointer outline-none bg-[rgba(42,_240,_234,_0.25)]"
              >
                <div className="flex items-center h-[52px] md:h-10 justify-center text-sm font-bold bg-[#2af0ea] group-hover:bg-[#4df5ef] rounded-xl p-[1px] outline-none">
                  <div
                    className="grid h-full w-full place-items-center rounded-xl px-3 outline-none"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px -0.5px 0.5px inset, rgba(255, 255, 255, 0.8) 0px 0.5px 0.5px inset",
                    }}
                  >
                    <div className="text-base font-bold leading-[auto] text-white">
                      <div className="flex items-center justify-center">
                        <svg className="size-5 mr-1 transition-transform duration-200 ease-in-out group-hover:-rotate-12"  fill="#ffffff" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="7.168000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M224,80a52.059,52.059,0,0,1-52-52,4.0002,4.0002,0,0,0-4-4H128a4.0002,4.0002,0,0,0-4,4V156a24,24,0,1,1-34.28418-21.69238,3.99957,3.99957,0,0,0,2.28369-3.61279L92,89.05569a3.99948,3.99948,0,0,0-4.70117-3.938A72.00522,72.00522,0,1,0,172,156l-.00049-42.56348A99.27749,99.27749,0,0,0,224,128a4.0002,4.0002,0,0,0,4-4V84A4.0002,4.0002,0,0,0,224,80Zm-4,39.915a91.24721,91.24721,0,0,1-49.66455-17.1792,4.00019,4.00019,0,0,0-6.33594,3.24707L164,156A64,64,0,1,1,84,94.01223l-.00049,34.271A32.00156,32.00156,0,1,0,132,156V32h32.13184A60.09757,60.09757,0,0,0,220,87.86819Z"></path> </g></svg>
                        <span className="font-bold text-xs">Add TikTok account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={handleDismiss}
                className="px-3 py-2 text-xs font-medium cursor-pointer transition-colors hover:text-gray-800 flex-shrink-0"
                style={{ color: "#C1C1C1" }}
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
