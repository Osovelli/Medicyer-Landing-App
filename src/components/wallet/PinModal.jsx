import { useState } from "react";
import Modal from "../custom/Modal";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CustomButton } from "../custom/CustomButton";

const PinModal = ({ isOpen, onOpenChange, onSubmit }) => {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);

  const handleSubmit = () => {
    if (pin.length >= 4) {
      onSubmit(pin);  // Call the function to handle pin submission
      setPin('');
    }
  };


  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} title="Transaction PIN">
      <div className="space-y-6">
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
        <CustomButton 
        onClick={handleSubmit}
        size={'lg'}
        className="w-full font-medium rounded-lg hover:bg-blue-950 disabled:opacity-50 transition-colors"
        disabled={pin.length <= 3}
        >
          Pay ₦ {formatCurrency(23400)}
        </CustomButton>
      </div>
    </Modal>
  );
};

export default PinModal;