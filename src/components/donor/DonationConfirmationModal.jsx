import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { SuccessIcon } from "../custom/Icons";

export default function DonationConfirmationModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm p-0 gap-0">
        {/* Header with Icon */}
        <div className="pt-8 pb-6 px-6 text-center">
          <div className="flex justify-center mb-4">
            {/* Success icon */}
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <div className="w-14 h-14 rounded-full">
                <SuccessIcon className="w-full h-full" />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900">Donation Request Sent</h2>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <p className="text-sm text-gray-600 text-center mb-6">
            Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua em ipsum dolor sit amet.
          </p>

          {/* Button */}
          <button 
            onClick={onClose}
            className="w-full py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
