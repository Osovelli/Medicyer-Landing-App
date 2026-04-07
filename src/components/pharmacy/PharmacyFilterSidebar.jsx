import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star } from "lucide-react"

export function PharmacyFilterSidebar({
  onProximityChange,
  onRatingChange,
  selectedProximity,
  selectedRating,
}) {
  /* const availabilityOptions = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "this-week", label: "This week" },
  ] */

  /* const specialtyOptions = [
    { id: "cardiologist", label: "Cardiologist" },
    { id: "dermatologist", label: "Dermatologist" },
    { id: "neurologist", label: "Neurologist" },
    { id: "orthopedic", label: "Orthopedic Surgeon" },
    { id: "psychiatrist", label: "Psychiatrist" },
  ] */

  const ratingOptions = [
    { id: "5", label: "5 Stars", value: 5 },
    { id: "4", label: "4+ Stars", value: 4 },
    { id: "3", label: "3+ Stars", value: 3 },
    { id: "2", label: "2+ Stars", value: 2 },
    { id: "1", label: "1+ Stars", value: 1 },
  ]

  return (
    <aside className="w-full bg-white xl:w-72 shadow-sm rounded-lg p-6">
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
        <div className="space-y-3 w-full">
          {ratingOptions.map((option) => (
            <label key={option.id} className="flex flex-wrap  items-center gap-3 cursor-pointer">
              <Checkbox
              className='data-[state=checked]:bg-[#BD8CBF] data-state:checked:border-[#BD8CBF] data-[state=checked]:border-[#BD8CBF]'
                checked={selectedRating.includes(option.value)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    onRatingChange([...selectedRating, option.value])
                  } else {
                    onRatingChange(selectedRating.filter((val) => val !== option.value))
                  }
                }}
              />
              <div className="flex items-center gap-1 ">
                {[...Array(option.value)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    <Star className="w-4 h-4" fill="#FFCB00" />
                  </span>
                ))}
                {/* <span className="text-sm text-gray-700 ml-2">{option.label}</span> */}
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
