import { Button } from "../ui/button";
import { CustomButton } from "./CustomButton";

export function DoctorCard({ imageUrl, specialty, name, rating, location, onBook }) {
  return (
    <div className="flex flex-col bg-white rounded-4xl overflow-hidden shadow-md  border hover:shadow-lg transition-shadow h-full">
      {/* Doctor Image */}
      <div className="w-full h-48 md:h-56 rounded-r-3xl overflow-hidden shrink-0">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-5 md:p-3 gap-3 md:gap-1 items-start">
        {/* Specialty */}
        <p className="text-xs md:text-sm text-sky leading-5 y font-medium">{specialty}</p>

        {/* Doctor Name */}
        <h3 className="text-lg md:text-xl leading-5 font-semibold text-sky">{name}</h3>

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
        {/* <Button
          onClick={onBook}
          variant="soft"
          size={'custom'}
          className="mt-auto w-full  text-white font-semibold py-3 md:py-3.5 rounded-full transition-colors text-sm md:text-base"
        >
          Book
        </Button> */}
        <CustomButton
         size='lg'
         className='xl:w-[250px] lg:px-20 w-32 lg:h-[63px] rounded-full mt-3'
        >
          Book
        </CustomButton>
      </div>
    </div>
  )
}
