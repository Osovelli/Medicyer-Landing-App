import { Button } from "../ui/button";

export function TrendingProductsCTA() {
  return (
    <section className="w-full py-12 md:py-20  bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Top Section - Dark Blue with Phone Mockups */}
        <div className="bg-[#252B61] rounded-3xl p-8 md:p-12 mb-8 md:mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            {/* Left Content */}
            <div className="text-white text-left">
              <h2 className="text-3xl md:text-4xl leading-8 font-normal mb-4">
                Download Medicyer to manage your healthcare on the go.
              </h2>
              <p className="text-blue-100 mb-8 text-[18px] font-normal leading-6">
                We provide a range of comprehensive medical services to meet your healthcare needs
              </p>
              <div className="flex gap-1 md:gap-3 md:mt-8">
                <button className="bg-black text-white px-2 md:py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                    <img src="/Apple.svg" alt="Apple Logo" className="h-4 w-4" />              
                    <span className="text-xs md:text-sm font-light max-w-[110px] leading-3">Download on the <strong>App store</strong></span>
                </button>
                <button className="bg-black text-white px-2 md:py-2 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                    <img src="/Playstore.svg" alt="Playstore Logo" className="h-4 w-4" />              
                    <span className="text-xs md:text-sm font-light max-w-[100px] leading-3">Get It On <strong>Google Play</strong></span>
                </button>
                </div>
            </div>

            {/* Right Phone Mockups */}
            <div className="relative h-48 md:h-96 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center gap-4">
                {/* Left Phone */}
                <div className="absolute top-0 -left-11 md:-left-10 z-10 border-0 overflow-hidden">
                  <img src="/phone 1.png" alt="App Mockup" className="object-cover w-full h-full" />
                </div>

                {/* Right Phone */}
                <div className="absolute top-8 md:top-25 right-0">
                    <img src="/phone 2.png" alt="App Mockup" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card - Purple Rider Program */}
          <div className="bg-[#BD8CBF] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 text-sky  text-left max-w-xs">
              <h3 className="text-2xl md:text-3xl font-normal leading-8 mb-4">Start making money as a Medicyer rider.</h3>
              <p className="mb-8 text-lg leading-5">
                We provide a range of comprehensive medical services to meet your healthcare needs
              </p>
              <Button 
              variant="soft" 
              className="w-full md:w-auto  text-white shrink md:px-12 py-3 rounded-md font-semibold transition"
              >
                Register
              </Button>
            </div>
            {/* Placeholder for rider image */}
            <div className="absolute -bottom-10 -right-5 md:right-4 w-48 h-48 rounded-full">
                <img src="/bike.png" alt="bike rider" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Card - Yellow Download */}
          <div className="bg-[#F0D869] text-left rounded-3xl p-8 md:p-12 text-gray-900">
            <div className="md:max-w-xs text-sky">
                <h3 className="text-2xl md:text-3xl font-normal leading-8 mb-4">
                Download Medicyer to manage your healthcare on the go.
                </h3>
                <p className="text-gray-800 mb-8 text-lg leading-5">
                We provide a range of comprehensive medical services to meet your healthcare needs
                </p>
            </div>
            <div className="flex gap-1 md:gap-3 md:mt-8">
                <button className="bg-black text-white px-2 md:py-2 rounded-sm font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                    <img src="/Apple.svg" alt="Apple Logo" className="h-4 w-4" />              
                    <span className="text-xs md:text-sm font-light max-w-[110px] leading-3">Download on the <strong>App store</strong></span>
                </button>
                <button className="bg-black text-white px-2 md:py-2 rounded-sm font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                    <img src="/Playstore.svg" alt="Playstore Logo" className="h-4 w-4" />              
                    <span className="text-xs md:text-sm font-light max-w-[100px] leading-3">Get It On <strong>Google Play</strong></span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
