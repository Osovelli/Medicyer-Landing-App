import { Button } from "@/components/ui/button"

export function PharmacyCTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-[#F3F3FF] rounded-md">
          {/* Left Section - Image with Overlay */}
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden bg-linear-to-br from-blue-900/60 to-blue-800/40">
            <img
              src="/doctor cta.jpg"
              alt="Healthcare professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 to-blue-800/20" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl text-left font-light max-w-72 text-white leading-tight">
                Connect with Trusted <strong>specialist</strong> in real-time
              </h3>
            </div>
          </div>

          {/* Right Section - Content and CTA */}
          <div className="space-y-6">
            <div className="text-left max-w-80">
              <p className="text-sm text-muted-foreground mb-2">Label</p>
              <h2 className="text-2xl md:text-4xl font-normal text-sky mb-4">
                Trusted & Verified specialist in realtime
              </h2>
              <p className="text-lg font-normal text-sky leading-tight">
                We provide a range of comprehensive medical services to meet your healthcare needs
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="soft" className="px-8 py-2">
                    Get Started
                </Button>
                <Button variant="outline" className="px-8 py-2 bg-transparent">
                    Learn more
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
