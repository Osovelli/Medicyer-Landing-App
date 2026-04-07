import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'
import { CustomButton } from "../custom/CustomButton"


export function DoctorCard({
  imageUrl,
  specialty,
  name,
  rating,
  location,
  onBook,
}) {
  return (
    <div className="peer flex shrink-0 min-h-40 w-full rounded-4xl bg-white flex-col overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Doctor Image */}
      <div className="relative h-48 w-full  overflow-hidden ">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="absolute inset-0 h-full w-full object-cover rounded-br-4xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col m-2 text-start gap-1 px-2 pt-4 my-4">
        {/* Specialty Label */}
        <div className="text-xs font-medium text-gray-600">{specialty}</div>

        {/* Doctor Name */}
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
        </div>

        {/* Rating and Location */}
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span>•</span>
          <span>{location}</span>
        </div>

        {/* Book Button */}
        <CustomButton
          onClick={onBook}
          className="mt-2 w-full h-14 rounded-full bg-[#1a1a4d] py-2 text-white hover:bg-[#1a1a4d]/90"
        >
          Book
        </CustomButton>
      </div>
    </div>
  )
}
