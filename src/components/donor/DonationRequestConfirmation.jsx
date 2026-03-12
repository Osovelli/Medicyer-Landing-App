import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlertCircle, MapPin, DollarSign, AlertTriangle } from "lucide-react";

export default function DonationRequestConfirmation({ isOpen, onClose, donor, onProceed }) {
  if (!donor) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0 gap-0">
        {/* Header with Icon */}
        <div className="pt-8 pb-6 px-6 text-center">
          <div className="flex justify-center mb-4">
            {/* Warning icon */}
            <div className="w-28 h-28 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <AlertTriangle className="w-12 h-12 text-purple-300" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-sky">New Donation Request</h2>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Donor Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src={donor.image} alt={donor.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900">{donor.name}</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Verified</span>
                </div>
                <p className="text-xs text-gray-600">{donor.location}</p>
              </div>
              <span className="text-lg font-bold text-gray-900">{donor.bloodType}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <DollarSign size={16} />
                <span>N 15,000.00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin size={16} />
                <span>Gwarinpa - Abuja, NG</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="flex-1 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50"
            >
              No, Cancel
            </button>
            <button 
              onClick={onProceed}
              className="flex-1 py-3 bg-sky text-white font-semibold rounded-lg hover:bg-sky-900"
            >
              Yes, Proceed
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
