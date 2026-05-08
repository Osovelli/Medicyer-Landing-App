import { Badge } from "../ui/badge";

export default function DonorCard({ donor, onCardClick }) {
  return (
    <div 
      className="flex flex-col h-[273px]  lg:h-[300px] shrink-0 rounded-xl shadow-sm border cursor-pointer border-gray-200"
      onClick={() => onCardClick(donor)}
    >
      {/* Image Container with Yellow Background */}
      <div className="bg-yellow-400 rounded-t-xl overflow-hidden aspect-square">
        <img
          src={donor.image}
          alt={donor.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="bg-white rounded-b-xl p-4 flex justify-between gap-2 lg:gap-0">
        <div>

          {/* Verified Badge */}
          {donor.verified && (
            <div className="flex items-center gap-1.5">
              <Badge className=" px-4  bg-[#34A85333]/30 rounded-4xl flex items-center justify-center">  
              <p className="text-xs font-medium text-green-600">Verified</p>
              </Badge>
            </div>
          )}

          {/* Name */}
          <h3 className="text-base text-start font-normal text-sky">{donor.name}</h3>

          {/* Location */}
          <p className="text-xs text-start font-normal text-sky">{donor.location}</p>
        </div>

        {/* Blood Type Badge */}
        <div className="flex justify-between items-center ">
          <div className="border border-[#F0D869] text-sky px-3 py-1 rounded-md font-normal text-lg">
            {donor.bloodType}
          </div>
        </div>
      </div>
    </div>
  );
}
