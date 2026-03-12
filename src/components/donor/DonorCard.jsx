import { Badge } from "../ui/badge";

export default function DonorCard({ donor, onCardClick }) {
  return (
    <div 
      className="flex flex-col h-[273px] lg:h-[300px] shrink-0 rounded-xl shadow-sm border cursor-pointer border-gray-200"
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
      <div className="bg-white rounded-b-xl p-4 flex flex-col gap-2 lg:gap-0">
        {/* Verified Badge */}
        {donor.verified && (
          <div className="flex items-center gap-1.5">
            <Badge className=" px-4 py-2 bg-[#34A85333]/30 rounded-4xl flex items-center justify-center">  
            <p className="text-xs font-medium text-green-600">Verified</p>
            </Badge>
          </div>
        )}

        {/* Name */}
        <h3 className="text-lg text-start font-medium text-gray-900">{donor.name}</h3>

        {/* Location */}
        <p className="text-sm text-start font-normal text-gray-600">{donor.location}</p>

        {/* Blood Type Badge */}
        <div className="flex justify-between items-center ">
          <span className="text-sm text-start font-normal text-gray-600">{donor.donorType}</span>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-semibold text-sm">
            {donor.bloodType}
          </div>
        </div>
      </div>
    </div>
  );
}
