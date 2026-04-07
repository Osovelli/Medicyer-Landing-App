"use client"
import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "../ui/slider"

export function LabsFilterSidebar({
  onProximityChange,
  selectedProximity,
  onRatingChange,
  proximityRange,
  selectedRating,  
}) {
  const [localMin, setLocalMin] = useState(proximityRange?.min || 2)
  const [localMax, setLocalMax] = useState(proximityRange?.max || 75)

  useEffect(() => {
    const timer = setTimeout(() => {
      onProximityChange({ min: localMin, max: localMax })
    }, 300)
    return () => clearTimeout(timer)
  }, [localMin, localMax, onProximityChange])

  const ratingOptions = [
    { id: "5", label: "5 Stars", value: 5 },
    { id: "4", label: "4+ Stars", value: 4 },
    { id: "3", label: "3+ Stars", value: 3 },
    { id: "2", label: "2+ Stars", value: 2 },
    { id: "1", label: "1+ Star", value: 1 },
  ]

  return (
    <aside className="w-full md:w-56 bg-white rounded-lg p-6 border border-gray-200 h-fit">
      {/* Proximity Range Slider */}
      {/* <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Proximity</h3>
        <div className="space-y-4">
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-2 bg-blue-900 rounded-full"
              style={{
                left: `${(localMin / 75) * 100}%`,
                right: `${100 - (localMax / 75) * 100}%`,
              }}
            />
          </div>
          <div className="flex gap-4">
            <input
              type="range"
              min="2"
              max="75"
              value={localMin}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (val < localMax) setLocalMin(val)
              }}
              className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer pointer-events-none absolute top-12"
              style={{
                zIndex: localMin > 37 ? 5 : 3,
              }}
            />
            <input
              type="range"
              min="2"
              max="75"
              value={localMax}
              onChange={(e) => {
                const val = parseInt(e.target.value)
                if (val > localMin) setLocalMax(val)
              }}
              className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer pointer-events-none absolute top-12"
              style={{
                zIndex: localMax < 37 ? 3 : 5,
              }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-6">
            <span>{localMin}KM</span>
            <span>{localMax}KM</span>
          </div>
        </div>
      </div> */}
      {/* Proximity */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Proximity (km)</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={selectedProximity}
            onValueChange={onProximityChange}
            max={50}
            step={1}
          />
          <p className="text-sm text-gray-600 text-center">{`${selectedProximity[0]}km - ${selectedProximity[1]}km`}</p>
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Rating</h3>
        <div className="space-y-3">
          {ratingOptions.map((option) => (
            <label key={option.id} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedRating.includes(option.value)}
                className={'data-[state=checked]:bg-[#BD8CBF] data-[state=checked]:border-transparent rounded focus:ring-0'}
                onCheckedChange={(checked) => {
                  if (checked) {
                    onRatingChange([...selectedRating, option.value])
                  } else {
                    onRatingChange(selectedRating.filter((val) => val !== option.value))
                  }
                }}
              />
              <div className="flex items-center gap-1">
                {[...Array(option.value)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
                {option.value < 5 && (
                  [...Array(5 - option.value)].map((_, i) => (
                    <span key={`empty-${i}`} className="text-gray-300">
                      ★
                    </span>
                  ))
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
