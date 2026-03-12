import { Dialog, DialogContent } from '@/components/ui/dialog';
import { SuccessIcon } from '../custom/Icons';
import { Button } from '../ui/button';

export default function ProfileUpdatedModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col items-center justify-center p-12 bg-white border-0 max-w-md">
        <div className="flex flex-col items-center gap-6">
            {/* Success Checkmark Icon */}
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full">
                    <SuccessIcon className="w-full h-full" />
                </div>
            </div>

          <h2 className="text-2xl font-bold text-gray-900">Profile updated</h2>

          <p className="text-center text-gray-600 text-sm">
            Your booking is confirmed. Please find the details for the appointment.
          </p>

          <Button
            onClick={onClose}
            className="w-full bg-sky hover:bg-sky-950 text-white font-medium py-4 px-6 rounded-lg transition-colors mt-4"
            size={'xl'}
          >
            Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
