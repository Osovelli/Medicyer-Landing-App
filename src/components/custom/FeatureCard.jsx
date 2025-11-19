import { Button } from "../ui/button";

export function FeatureCard({ imageUrl, name, description}) {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
      {/* Doctor Image */}
      <div className="w-full h-48 md:h-56 overflow-hidden shrink-0">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-5 md:p-6 gap-3 md:gap-5 items-start">
        {/* name */}
        <p className="text-base md:text-xl leading-0 text-gray-600 font-normal">{name}</p>

        {/* description */}
        <h3 className="text-xs md:text-sm font-normal text-gray-900 text-left leading-3.5 md:max-w-48">{description}</h3>
      </div>
    </div>
  )
}
