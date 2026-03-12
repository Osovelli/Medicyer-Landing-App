import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Star, Share2, Droplet, Users, Weight, DollarSign, MapPin, Calendar } from "lucide-react";

export default function DonorProfileModal({ isOpen, onClose, donor, onRequestDonation }) {
  if (!donor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Donor Profile</h2>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="flex gap-8 mb-8">
            {/* Left - Avatar and Name */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <img src={donor.image} alt={donor.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center">{donor.name}</h3>
              <div className="mt-3 flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-900">3.5/503</span>
              </div>
            </div>

            {/* Right - Information Grid */}
            <div className="flex-1 grid grid-cols-2 gap-6">
                <div className="shadow-sm w-full rounded-lg p-4 space-y-4 bg-gray-50/20 col-span-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <Droplet size={20} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Blood Type</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{donor.bloodType}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <Users size={20} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Gender</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Male</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <Users size={20} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Age</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">35 yrs</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Weight size={20} className="text-gray-600" />
                            <span className="text-sm text-gray-600">Weight</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">60 KG</span>
                    </div>
                </div>

                <div className="shadow-sm w-full rounded-lg p-4 space-y-4 bg-gray-50/20 col-span-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                        <Users size={20} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Donations</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">45</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <DollarSign size={20} className="text-gray-600" />
                            <span className="text-sm text-gray-600">Donor Price</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">N 4,500</span>
                    </div>
                    <div className="flex items-center  justify-between">
                        <div className="flex items-center gap-3">
                            <MapPin size={20} className="text-gray-600" />
                            <span className="text-sm text-gray-600">Location</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{donor.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Users size={20} className="text-gray-600" />
                            <span className="text-sm text-gray-600">Availability</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Yes</span>
                    </div>
                    <div className="flex items-center justify-between col-span-2">
                        <div className="flex items-center gap-3">
                            <Calendar size={20} className="text-gray-600" />
                            <span className="text-sm text-gray-600">Last Donation</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">July, 2025</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="flex-1 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
              <Share2 size={18} />
              Share
            </button>
            <button 
              onClick={onRequestDonation}
              className="flex-1 py-3 bg-sky text-white font-semibold rounded-lg hover:bg-sky-900"
            >
              Request Donation
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
