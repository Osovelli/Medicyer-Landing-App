export function DoctorCTA() {
  return (
    <section className="w-full py-8 md:py-20 px-4">
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left side - Download App */}
          <div className="bg-linear-to-br  from-purple-100 to-purple-50 rounded-2xl flex flex-col md:flex-row justify-between h-full min-h-[250px] p-2">
            <div className="">
                <div className="text-start">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Download the app to manage your healthcare on the go.
                    </h3>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        We provide a range of medical services to meet your healthcare needs
                    </p>
                </div>
                <div className="flex gap-1 md:gap-3 md:mt-8">
                   <button className="bg-black cursor-pointer text-white px-2 py-2 md:py-4 rounded-sm md:rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Apple.svg" alt="Apple Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[110px] leading-3">Download on the <strong>App store</strong></span>
                  </button>
                  <button className="bg-black cursor-pointer text-white px-2 py-2 md:py-4 rounded-sm md:rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Playstore.svg" alt="Playstore Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[100px] leading-3">Get It On <strong>Google Play</strong></span>
                  </button>
                </div>
            </div>
            {/* image banner */}
            <div className="" >
                {/* Middle - Phone Mockup (placeholder for design) */}
                <div className="rounded-xl overflow-hidden">
                    <img src="/iPhone 14 Pro.png" alt="App Mockup" className="object-cover w-3xl" />
                </div>
            </div>
          </div>

          {/* Right side - Stats and CTA */}
          <div className="space-y-4">
            {/* Top CTA Card */}
            <div className="bg-[#A3DAC2] rounded-2xl p-6  md:p-12">
              <h4 className="max-w-sm text-lg md:text-4xl font-normal text-gray-900 mb-4 tracking-tight text-left leading-9">
                Start a consultation with a verified pharmacist 
              </h4>
              <div className="flex gap-3">
                <button className="bg-black cursor-pointer text-white px-2 py-2 md:py-4 rounded-sm md:rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Apple.svg" alt="Apple Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[110px] leading-3">Download on the <strong>App store</strong></span>
                  </button>
                  <button className="bg-black cursor-pointer text-white px-2 py-2 md:py-4 rounded-sm md:rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Playstore.svg" alt="Playstore Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[100px] leading-3">Get It On <strong>Google Play</strong></span>
                  </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#BD8CBF] p-8  text-white text-left rounded-3xl ">
                <div className="text-3xl md:text-4xl font-bold mb-2">23K+</div>
                <p className="text-sm md:text-pretty md:text-2xl -tracking-wider leading-8 font-light max-w-36">Registered pharmacies and drug stores</p>
              </div>
              <div className="bg-linear-to-br from-blue-900 to-blue-950 p-8 text-white text-left rounded-3xl ">
                <div className="text-3xl md:text-4xl font-bold mb-2">4.5K+</div>
                <p className="text-sm md:text-pretty md:text-2xl -tracking-wider leading-8 font-light max-w-36">Certified & verified professionals in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
