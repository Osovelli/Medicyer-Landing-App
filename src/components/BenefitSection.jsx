import { ImageContainer } from "./custom/ImageContainer"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { CustomButton } from "./custom/CustomButton"

export function BenefitsSection() {
    const [bannerOffset, setBannerOffset] = useState(0) 
    // Animate banners continuously

    useEffect(() => {
        const interval = setInterval(() => {
        setBannerOffset((prev) => (prev + 1) % 100)
        }, 50)
        return () => clearInterval(interval)
    }, [])

  return (
    <div className="relative w-full bg-slate-900 py-16 md:py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('benefit background image.jpg')",
            backgroundSize: "300px 300px",
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left card */}
          <div className="border border-r-0 border-white my-3 rounded-bl-2xl rounded-tl-2xl p-4 md:p-6 text-left">
            <p className="text-gray-300 text-sm md:text-sm font-semibold mb-4">Earning benefits section</p>
            <h2 className="text-3xl max-w-xs  md:text-2xl lg:text-3xl font-normal leading-8 text-white mb-8">
              Make money on medicyer, as a healthcare service provider
            </h2>

             {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
                <CustomButton 
                className="w-46 px-6 py-2 bg-white text-sky border border-sky hover:bg-transparent hover:border-white hover:text-white transition-colors"
                >
                Learn more
                </CustomButton>
                <CustomButton
                className="px-6 py-2 bg-transparent text-white border border-white hover:bg-sky hover:border-sky transition-colors"
                >
                Get Started
                </CustomButton>
            </div>
          </div>

          {/* Right image card */}
          <div>
            <img src="image cut out.png" alt='celebration image' className="mr-4" />
          </div>

        {/* <div className="relative max-w-md">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
                
                <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/celebration.jpg')" }}
                />
                </div>
                <button
                    aria-label="Open"
                    className="absolute bg-transparent bottom-0 right-0 h-12 w-12 rounded-lg border-indigo-950/90  border-10 border-solid flex items-center justify-center"
                    style={{
                    WebkitBackdropFilter: "blur(6px)",
                    backdropFilter: "blur(10px)",
                    mixBlendMode: "overlay",
                    }}
                >
                    <span className="rounded-lg bg-white p-2 flex items-center justify-center">
                    <ArrowUpRight className="text-black rounded-2xl" />
                    </span>
                </button>
            </div> */}
        </div>
      </div>

      <div className="relative w-full py-10 overflow-hidden">
        {/* First Banner - Dark Blue */}
        <div className="relative h-8 md:h-10 bg-primary flex items-center overflow-hidden">
          <div
            className="flex whitespace-nowrap gap-8 text-white font-semibold text-sm md:text-base"
            style={{
              transform: `translateX(-${bannerOffset}%)`,
              animation: "scroll 20s linear infinite",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                <span>Enjoy comprehensive healthcare services remotely</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Second Banner - Purple/Pink with skew */}
        <div className="relative h-8 md:h-10 bg-linear-to-r from-purple-500 to-pink-500 flex items-center overflow-hidden -skew-y-2 md:-skew-y-3 -mt-4 md:-mt-6">
          <div
            className="flex whitespace-nowrap gap-8 text-white font-semibold text-sm md:text-base"
            style={{
              transform: `translateX(${bannerOffset}%)`,
              animation: "scroll-reverse 20s linear infinite",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                <span>Enjoy comprehensive healthcare services remotely</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Animation styles */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
          
      `}
      </style>
    </div>
  )
}
