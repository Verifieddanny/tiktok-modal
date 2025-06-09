"use client"

import { useState, useEffect } from "react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

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
        fixed z-50 font-brand
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

            <p className="mt-3 text-sm text-gray-700">
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
                    <div className="text-base font-bold leading-[auto] text-white !font-brand">
                      <div className="flex items-center justify-center">
                        <svg
                          className="size-4 mr-1 transition-transform duration-200 ease-in-out group-hover:-rotate-12"
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9807 1.80393C15.9348 1.57787 15.8122 1.37464 15.6336 1.22866C15.455 1.08268 15.2314 1.00293 15.0007 1.00293C14.7701 1.00293 14.5465 1.08268 14.3679 1.22866C14.1893 1.37464 14.0666 1.57787 14.0207 1.80393L13.7807 2.99593C13.7421 3.18956 13.6471 3.36743 13.5076 3.50713C13.3681 3.64682 13.1903 3.74209 12.9967 3.78093L11.8047 4.01893C11.5776 4.06385 11.3731 4.18621 11.2261 4.36511C11.0791 4.54402 10.9987 4.76839 10.9987 4.99993C10.9987 5.23148 11.0791 5.45585 11.2261 5.63475C11.3731 5.81366 11.5776 5.93601 11.8047 5.98093L12.9967 6.21893C13.1905 6.25759 13.3685 6.35279 13.5082 6.4925C13.6479 6.63221 13.7431 6.81017 13.7817 7.00393L14.0197 8.19593C14.0646 8.42308 14.187 8.6276 14.3659 8.77458C14.5448 8.92157 14.7692 9.00192 15.0007 9.00192C15.2323 9.00192 15.4566 8.92157 15.6355 8.77458C15.8144 8.6276 15.9368 8.42308 15.9817 8.19593L16.2197 7.00393C16.2584 6.81017 16.3536 6.63221 16.4933 6.4925C16.633 6.35279 16.811 6.25759 17.0047 6.21893L18.1967 5.98093C18.4239 5.93601 18.6284 5.81366 18.7754 5.63475C18.9224 5.45585 19.0027 5.23148 19.0027 4.99993C19.0027 4.76839 18.9224 4.54402 18.7754 4.36511C18.6284 4.18621 18.4239 4.06385 18.1967 4.01893L17.0047 3.78093C16.811 3.74227 16.633 3.64708 16.4933 3.50737C16.3536 3.36766 16.2584 3.18969 16.2197 2.99593L15.9817 1.80393H15.9807ZM6.94972 5.68393C6.8835 5.48459 6.75618 5.31117 6.58584 5.18826C6.4155 5.06535 6.21078 4.99921 6.00072 4.99921C5.79067 4.99921 5.58595 5.06535 5.41561 5.18826C5.24526 5.31117 5.11795 5.48459 5.05172 5.68393L4.36872 7.73493C4.31965 7.88237 4.23689 8.01634 4.12701 8.12622C4.01713 8.2361 3.88316 8.31886 3.73572 8.36793L1.68472 9.05093C1.48538 9.11716 1.31196 9.24447 1.18905 9.41481C1.06615 9.58516 1 9.78988 1 9.99993C1 10.21 1.06615 10.4147 1.18905 10.585C1.31196 10.7554 1.48538 10.8827 1.68472 10.9489L3.73572 11.6329C3.88305 11.6819 4.01696 11.7645 4.12683 11.8742C4.2367 11.9839 4.31952 12.1177 4.36872 12.2649L5.05172 14.3159C5.11795 14.5153 5.24526 14.6887 5.41561 14.8116C5.58595 14.9345 5.79067 15.0007 6.00072 15.0007C6.21078 15.0007 6.4155 14.9345 6.58584 14.8116C6.75618 14.6887 6.8835 14.5153 6.94972 14.3159L7.63272 12.2649C7.6818 12.1175 7.76456 11.9835 7.87444 11.8736C7.98431 11.7638 8.11829 11.681 8.26572 11.6319L10.3167 10.9489C10.5161 10.8827 10.6895 10.7554 10.8124 10.585C10.9353 10.4147 11.0014 10.21 11.0014 9.99993C11.0014 9.78988 10.9353 9.58516 10.8124 9.41481C10.6895 9.24447 10.5161 9.11716 10.3167 9.05093L8.26572 8.36793C8.11829 8.31886 7.98431 8.2361 7.87444 8.12622C7.76456 8.01634 7.6818 7.88237 7.63272 7.73493L6.94972 5.68393ZM13.9497 13.6839C13.8835 13.4846 13.7562 13.3112 13.5858 13.1883C13.4155 13.0654 13.2108 12.9992 13.0007 12.9992C12.7907 12.9992 12.5859 13.0654 12.4156 13.1883C12.2453 13.3112 12.1179 13.4846 12.0517 13.6839L11.8677 14.2349C11.8187 14.3823 11.7361 14.5162 11.6264 14.626C11.5167 14.7359 11.383 14.8187 11.2357 14.8679L10.6847 15.0509C10.4854 15.1172 10.312 15.2445 10.1891 15.4148C10.0661 15.5852 10 15.7899 10 15.9999C10 16.21 10.0661 16.4147 10.1891 16.585C10.312 16.7554 10.4854 16.8827 10.6847 16.9489L11.2357 17.1319C11.3832 17.181 11.5171 17.2638 11.627 17.3736C11.7369 17.4835 11.8196 17.6175 11.8687 17.7649L12.0517 18.3159C12.1179 18.5153 12.2453 18.6887 12.4156 18.8116C12.5859 18.9345 12.7907 19.0007 13.0007 19.0007C13.2108 19.0007 13.4155 18.9345 13.5858 18.8116C13.7562 18.6887 13.8835 18.5153 13.9497 18.3159L14.1337 17.7649C14.1827 17.6176 14.2653 17.4837 14.375 17.3738C14.4847 17.264 14.6185 17.1811 14.7657 17.1319L15.3167 16.9489C15.5161 16.8827 15.6895 16.7554 15.8124 16.585C15.9353 16.4147 16.0014 16.21 16.0014 15.9999C16.0014 15.7899 15.9353 15.5852 15.8124 15.4148C15.6895 15.2445 15.5161 15.1172 15.3167 15.0509L14.7657 14.8669C14.6184 14.818 14.4845 14.7353 14.3746 14.6257C14.2648 14.516 14.1819 14.3822 14.1327 14.2349L13.9497 13.6839Z"
                            fill="white"
                          />
                        </svg>
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