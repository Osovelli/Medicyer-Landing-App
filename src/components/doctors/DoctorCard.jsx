import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'


export function DoctorCard({
  imageUrl,
  specialty,
  name,
  rating,
  location,
  onBook,
}) {
  return (
    <div className="flex shrink w-full bg-white flex-col overflow-hidden border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      {/* Doctor Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gray-50">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col m-2 text-start gap-1 pt-4">
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
        <Button
          onClick={onBook}
          className="mt-2 w-full h-14 rounded-full bg-[#1a1a4d] py-2 text-white hover:bg-[#1a1a4d]/90"
        >
          Book
        </Button>
      </div>
    </div>
  )
}
