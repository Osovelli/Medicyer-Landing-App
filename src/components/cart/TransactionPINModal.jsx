import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';
import { CustomButton } from '../custom/CustomButton';

export default function TransactionPINModal({ isOpen, onClose, totalAmount, onConfirm }) {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);

  const handleConfirm = () => {
    if (pin.length === 6) {
      onConfirm(pin);
      setPin('');
    }
  };

  const handleClose = () => {
    setPin('');
    setShowPin(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md p-6 gap-6">
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg font-bold">Transaction PIN</DialogTitle>
          <DialogClose className="absolute right-4 top-4" />
        </DialogHeader>

        {/* PIN Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Transaction PIN</label>
          <div className="relative">
            <Input
              type={showPin ? 'text' : 'password'}
              placeholder="******"
              value={pin}
              onChange={(e) => setPin(e.target.value.slice(0, 6))}
              maxLength="6"
              className="rounded-lg pr-10 hover:ring-sky focus:ring-sky focus:ring-0 focus:ring-offset-0 focus:ring-offset-sky focus-visible:ring-sky focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-offset-sky"
            />
            <button
              type="button"
              onClick={() => setShowPin(!showPin)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Pay Button */}
        <CustomButton
          onClick={handleConfirm}
          size="lg"
          disabled={pin.length !== 6}
          className="w-full px-4 py-6 bg-sky text-white font-medium rounded-lg hover:bg-blue-900 disabled:opacity-50 transition-colors"
        >
          Pay ₦{totalAmount.toLocaleString()}
        </CustomButton>
      </DialogContent>
    </Dialog>
  );
}
