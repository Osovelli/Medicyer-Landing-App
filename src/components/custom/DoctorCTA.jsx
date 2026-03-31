export function DoctorCTA() {
  return (
    <section className="w-full py-8 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  items-start">
          {/* Left side - Download App */}
          <div className=" bg-linear-to-br from-purple-100 to-purple-50 rounded-2xl flex flex-wrap flex-col md:flex-row justify-between h-full min-h-[250px] pl-8 pt-8">
            <div className="p-4 md:w-1/2">
                <div className="text-start">
                    <h3 className="text-2xl text-sky md:text-4xl font-normal tracking-wide leading-8 text-gray-900 mb-4">
                        Download the app to manage your healthcare on the go.
                    </h3>
                    <p className="text-sky text-sm md:text-lg leading-relaxed">
                        We provide a range of medical services to meet your healthcare needs
                    </p>
                </div>
                <div className="flex gap-1 md:gap-3 md:mt-8">
                   <button className="bg-black md:w-44  cursor-pointer text-white px-2 py-2  rounded-sm md:rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Apple.svg" alt="Apple Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[110px] leading-3">Download on the <strong>App store</strong></span>
                  </button>
                  <button className="bg-black md:w-44 cursor-pointer text-white px-2 py-2  rounded-sm md:rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Playstore.svg" alt="Playstore Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[100px] leading-3">Get It On <strong>Google Play</strong></span>
                  </button>
                </div>
            </div>
            {/* image banner */}
            <div className="md:w-1/2" >
                {/* Middle - Phone Mockup (placeholder for design) */}
                <div className="rounded-xl overflow-hidden">
                    <img src="/iPhone 14 Pro.png" alt="App Mockup" className="object-cover md:max-w-7xl" />
                </div>
            </div>
          </div>

          {/* Right side - Stats and CTA */}
          <div className="space-y-4 shrink">
            {/* Top CTA Card */}
            <div className="bg-[#A3DAC2] rounded-2xl p-6 md:p-12">
              <h4 className="max-w-sm text-sky text-lg md:text-4xl font-normal text-gray-900 mb-4 tracking-tight text-left leading-9">
                Start a consultation with a verified pharmacist 
              </h4>
              <div className="flex gap-3">
                <button className="bg-black  cursor-pointer text-white px-2 py-2 rounded-sm md:rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Apple.svg" alt="Apple Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[110px] leading-3">Download on the <strong>App store</strong></span>
                  </button>
                  <button className="bg-black cursor-pointer text-white px-2 py-2 rounded-sm md:rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center">
                      <img src="/Playstore.svg" alt="Playstore Logo" className="h-4 w-4" />              
                      <span className="text-xs md:text-sm font-light max-w-[100px] leading-3">Get It On <strong>Google Play</strong></span>
                  </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#BD8CBF] p-8  text-white text-left rounded-3xl ">
                <div className="text-3xl md:text-xl font-normal mb-2">23K+</div>
                <p className="text-sm md:text-pretty md:text-2xl -tracking-wider leading-8 font-normal max-w-42">Registered pharmacies and drug stores</p>
              </div>
              <div className="bg-linear-to-br from-blue-900 to-blue-950 p-8 text-white text-left rounded-3xl ">
                <div className="text-3xl md:text-4xl font-normal mb-2">4.5K+</div>
                <p className="text-sm md:text-pretty md:text-2xl -tracking-wider leading-8 font-normal max-w-36">Certified & verified professionals in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
