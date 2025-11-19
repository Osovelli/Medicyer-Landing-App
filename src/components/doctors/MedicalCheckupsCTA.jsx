export function MedicalCheckupsCTA() {
  return (
    <div className="bg-linear-to-r from-purple-200 to-purple-100 rounded-2xl p-8 md:p-12 my-12 flex flex-col md:flex-row items-center gap-8">
      {/* Left Content */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Save up on Medical Checkups</h3>
        <p className="text-gray-700 text-base md:text-lg">Get 40% OFF on all test & Packages</p>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <div className="bg-yellow-400 rounded-2xl p-8 flex items-center justify-center h-40 md:h-48">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-yellow-600">40%</div>
            <p className="text-sm text-yellow-700 font-medium mt-2">Special Offer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
