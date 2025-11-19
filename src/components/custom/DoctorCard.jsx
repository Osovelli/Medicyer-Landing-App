import { Button } from "../ui/button";

export function DoctorCard({ imageUrl, specialty, name, rating, location, onBook }) {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
      {/* Doctor Image */}
      <div className="w-full h-48 md:h-56 overflow-hidden shrink-0">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-5 md:p-6 gap-3 md:gap-2 items-start">
        {/* Specialty */}
        <p className="text-xs md:text-sm text-gray-600 font-medium">{specialty}</p>

        {/* Doctor Name */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900">{name}</h3>

        {/* Rating and Location */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            {rating}
          </span>
          <span>•</span>
          <span>{location}</span>
        </div>

        {/* Book Button */}
        <Button
          onClick={onBook}
          variant="soft"
          size={'custom'}
          className="mt-auto w-full  text-white font-semibold py-3 md:py-3.5 rounded-full transition-colors text-sm md:text-base"
        >
          Book
        </Button>
      </div>
    </div>
  )
}
