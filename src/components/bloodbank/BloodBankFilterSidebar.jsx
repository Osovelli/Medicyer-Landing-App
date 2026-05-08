"use client"
import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "../ui/slider"
import { Star } from "lucide-react"

export function BloodBankFilterSidebar({
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
    <aside className="w-full md:w-50 lg:w-64 rounded-lg p-6 border border-gray-200 h-fit">
      {/* Proximity Range Slider */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-start text-gray-900 mb-4">Proximity (km)</h3>
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
        <h3 className="text-lg text-start font-bold text-gray-900 mb-4">Rating</h3>
        <div className="space-y-3">
          {ratingOptions.map((option) => (
            <label key={option.id} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedRating.includes(option.value)}
                className={'data-[state=checked]:bg-[#BD8CBF] data-[state=checked]:border-[#BD8CBF] rounded-sm'}
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
                  <Star 
                  key={i} 
                  fill="#FFCB00" 
                  className="text-[#FFCB00] w-4 h-4" 
                  />
                ))}
                {option.value < 5 && (
                  [...Array(5 - option.value)].map((_, i) => (
                    <Star 
                    key={`empty-${i}`} 
                    fill="#C1C3C7" 
                    className="text-gray-300 w-4 h-4" 
                    />
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
