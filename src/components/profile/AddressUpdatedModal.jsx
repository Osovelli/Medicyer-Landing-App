import { Dialog, DialogContent } from '@/components/ui/dialog';
import { SuccessIcon } from '../custom/Icons';
import { Button } from '../ui/button';
import { CustomButton } from '../custom/CustomButton';

export default function AddressUpdatedModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="flex flex-col items-center py-2">
          {/* Checkmark Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full">
                    <SuccessIcon className="w-full h-full" />
                </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Address Updated</h2>

          {/* Description */}
          <p className="text-gray-600 text-center mb-8">
            Your booking is confirmed. Please find the details for the appointment.
          </p>

          {/* Home Button */}
          <CustomButton
            onClick={onClose}
            className="w-full px-6 py-4 bg-sky hover:bg-blue-900 text-white font-semibold rounded-lg transition-colors"
            size={'lg'}
          >
            Home
          </CustomButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
