import { Button } from "@/components/ui/button"
import { CustomButton } from "./CustomButton"

export function PharmacyCTA() {
  return (
    <section className="py-16 md:py-18 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-8 md:gap-12 items-center bg-[#F3F3FF] rounded-md">
          {/* Left Section - Image with Overlay */}
          <div className="relative md:col-span-2 xl:col-span-1 h-80 md:h-96 rounded-3xl overflow-hidden">
            <img
              src="/doctor cta.jpg"
              alt="Healthcare professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#131A61]/15 to-[#131A61]/80" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <h3 className="text-2xl md:text-4xl text-left font-normal max-w-82 text-white leading-tight">
                Connect with Trusted <strong>specialist</strong> in real-time
              </h3>
            </div>
          </div>

          {/* Right Section - Content and CTA */}
          <div className="space-y-6 colspan-1 md:col-span-2">
            <div className="text-left max-w-80 mx-auto">
              <p className="text-sm text-muted-foreground mb-2">Label</p>
              <h2 className="text-2xl md:text-4xl font-normal text-sky mb-4">
                Trusted & Verified specialist in realtime
              </h2>
              <p className="text-lg font-normal text-sky leading-tight">
                We provide a range of comprehensive medical services to meet your healthcare needs
              </p>

              {/* Buttons */}
            <div className="flex flex-wrap xl:flex-nowrap gap-4 pt-4">
                <CustomButton 
                className="px-8 py-2 w-54 rounded-xl"
                >
                    Get Started
                </CustomButton>
                <CustomButton 
                variant="outline" 
                className="px-8 py-2 border-sky bg-transparent rounded-xl"
                >
                    Learn more
                </CustomButton>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
