import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlertCircle, MapPin, DollarSign, AlertTriangle } from "lucide-react";
import { MapIcon } from "../custom/Icons";
import { CustomButton } from "../custom/CustomButton";

export default function DonationRequestConfirmation({ isOpen, onClose, donor, onProceed }) {
  if (!donor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0 gap-0">
        {/* Header with Icon */}
        <div className="pt-8 pb-6 px-6 text-center">
          <div className="flex justify-center mb-4">
            {/* Warning icon */}
            <div className="w-28 h-28 rounded-full bg-[#BD8CBF26] dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-16 h-16 text-[#BD8CBF]" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-sky">New Donation Request</h2>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Donor Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-15 h-15 bg-yellow-400 rounded-l-2xl flex items-center justify-center shrink-0 overflow-hidden">
                <img src={donor.image} alt={donor.name} className="w-full h-full object-cover " />
              </div>
              <div className="flex-1">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Verified</span>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-normal text-sky">{donor.name}</h3>
                </div>
                <p className="text-xs font-normal text-sky">{donor.location}</p>
              </div>
              <span className="text-lg font-bold text-sky">{donor.bloodType}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapIcon size={16} />
                <span className="text-sm font-semibold">N 15,000.00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin size={18} />
                <span className="text-sm font-normal">Gwarinpa - Abuja, NG</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <CustomButton 
              onClick={onClose}
              size="lg"
              variant="outline"
              className="py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50"
            >
              No, Cancel
            </CustomButton>
            <CustomButton
              onClick={onProceed}
              size="lg"
              className="flex-1 py-3 bg-sky text-white font-semibold rounded-lg hover:bg-blue-900"
            >
              Yes, Proceed
            </CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
