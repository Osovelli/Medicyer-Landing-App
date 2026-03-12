import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { SuccessIcon } from '../custom/Icons';

export default function SuccessModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900"></DialogTitle>
        </DialogHeader>
            <div className="flex flex-col items-center gap-6">
                {/* Success Checkmark Icon */}
                <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <div className="w-14 h-14 rounded-full">
                        <SuccessIcon className="w-full h-full" />
                    </div>
                </div>
                <h3 className='text-sky text-2xl font-bold '>Account Deleted</h3>
                <p className='text-center text-sky text-sm font-normal'>Lorem ipsum dolor sit amet consectetur. In vel diam in rutrum pulvinar at nisi at. Ut arcu ut venenatis q</p>
                  
                <div className="flex w-full gap-3 pt-4">
                <Button 
                onClick={onClose} 
                className="flex-1 bg-sky p-5 rounded-xl hover:bg-blue-950"
                size={'xl'}
                >
                    Home
                </Button>
                </div>
            </div>
      </DialogContent>
    </Dialog>
  );
}