import { useState } from "react"
import { Search, MapPin, ArrowUpDown, Menu } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DoctorsSearchHeader({ onLocationChange, onSortChange, doctorCount, onSpecialtyChange }) {
  const [location, setLocation] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("cardio")

  const SPECIALTIES = [
    { id: "all", label: "All", selected: true },
    { id: "cardio", label: "Cardio"},
    { id: "orthopedic", label: "Orthopedic Surgeon" },
    { id: "general", label: "General Surgeon" },
    { id: "surgeon", label: "Surgeon" },
    { id: "dermatologist", label: "Dermatologist" },
    { id: "neurologist", label: "Neurologist" },
    { id: "psychiatrist", label: "Psychiatrist" },
  ]

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="md:text-3xl font-bold text-[#1a1a4d]">Doctors near you</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{doctorCount} listed</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {SPECIALTIES.map((specialty) => (
            <button
              key={specialty.id}
              onClick={setSelectedSpecialty(specialty.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedSpecialty === specialty.id
                  ? "bg-[#1a1a4d] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {specialty.label}
            </button>
          ))}
          <button className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 whitespace-nowrap transition-all duration-200 flex-shrink-0">
            More
          </button>
        </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search and Location */}
        {/* <div className="flex-1 flex gap-3 w-full">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search doctors..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
                onLocationChange(e.target.value)
              }}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div> */}

        {/* Sort and Count */}
        <div className="flex gap-3 w-full md:w-auto">
          {/* <div className="flex-1 md:flex-none">
            <Select onValueChange={onSortChange}>
              <SelectTrigger className="w-full md:w-auto">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating-high">Highest Rating</SelectItem>
                <SelectItem value="rating-low">Lowest Rating</SelectItem>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          {/* <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            More
          </button> */}
        </div>
      </div>

      {/* Results Count */}
      {/* <p className="text-sm text-gray-600 mt-4">{doctorCount} doctors available</p> */}
    </div>
  )
}
