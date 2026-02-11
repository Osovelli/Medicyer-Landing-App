import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"



export function DrugImageGallery({ mainImage, thumbnails, drugName }) {
  const [selectedImage, setSelectedImage] = useState(mainImage)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-4 bg-white shadow-sm h-62 sm:h-[567px] rounded-3xl overflow-hidden p-4">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="Go back"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Two-column layout: main image (2/3) + vertical thumbnail column (1/3) */}
      <div className="flex gap-4 items-start mx-auto">
        {/* Main image: takes ~2/3 of the horizontal space */}
        <div className="flex-4 rounded-3xl overflow-hidden sm:h-[480px]">
          <img
            src={selectedImage || "/placeholder.svg"}
            alt={drugName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnails column: takes ~1/3 of the horizontal space and scrolls vertically */}
        <div className="flex-1 flex flex-col gap-2 max-h-[480px]">
          <div className="flex flex-col sm:w-[134px] gap-2 overflow-y-auto pr-1 scrollbar-hide">
            {thumbnails.map((thumbnail, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(thumbnail)}
                className={`w-full rounded-2xl overflow-hidden transition-colors shrink-0 ${
                  selectedImage === thumbnail ? "border-[#1a1a4d]" : "border-transparent hover:border-gray-300"
                }`}
                style={{ aspectRatio: "1/1" }}
                aria-label={`${drugName} thumbnail ${index + 1}`}
              >
                <img
                  src={thumbnail || "/placeholder.svg"}
                  alt={`${drugName} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
