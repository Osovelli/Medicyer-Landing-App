import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { BoxCutContainer } from "./custom/BoxCutContainer"
import { CustomButton } from "./custom/CustomButton"

export function HeroSection() {
  const [bannerOffset, setBannerOffset] = useState(0)

  const imageUrl = "/aea3d9f88604f3c10386fe4fff5c941e8292bb85.jpg" 
  const gradient = "linear-gradient(135deg, transparent 10%, rgba(72, 52, 212, 0.2) 100%)"

  // Animate banners continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerOffset((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-3 max-w-md">
            <p className="text-sm font-normal text-[#353849] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <div className="space-y-4 text-left">
              <h1 className="text-xl md:text-2xl font-bold text-sky text-balance">
                We provide a range of comprehensive medical services to meet your healthcare needs
              </h1>

              <h2 className="text-4xl md:text-5xl font-light tracking-wide text-sky mt-10">Trusted & Verified specialist in realtime</h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-12">
              <CustomButton variant="outline" size='lg' className='rounded-2xl border-sky'>
                Learn more
              </CustomButton>
              <CustomButton size='lg' className=" rounded-2xl w-56">
                Get Started
              </CustomButton>
              {/*<Button variant="outline" className="px-6 py-2 bg-transparent">
                Learn more
              </Button>
               <Button variant="soft" className="px-6 py-2">
                Get Started
              </Button> */}
            </div>
          </div>

          {/* Right Image Container */}
          {/* <BoxCutContainer 
          imageUrl={imageUrl} 
          gradient={gradient} 
          className="h-96 md:h-[500px]" 
          text={"Connect with Trusted specialist in real-time"}
          textPosition="top-30 md:top-55 left-4 md:left-10 md:left-34"
          /> */}
          <div className="relative overflow-hidden">
            <img src="/hero image.png" alt="Hero image" className="lg:max-w-[449px] xl:max-w-[549px] h-full object-cover"/>
          </div>
          
        </div>
      </div>

      {/* Promotional Banners Section */}
      <div className="relative w-full  py-18  overflow-hidden">
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
        <div className="relative h-8 md:h-10 bg-linear-to-r from-purple-500 to-pink-500 flex items-center overflow-hidden -skew-y-2 md:-skew-y-5 -mt-4 md:-mt-6">
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
      `}</style>
    </section>
  )
}
