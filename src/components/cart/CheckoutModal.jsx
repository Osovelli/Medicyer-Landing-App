import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { CustomButton } from '../custom/CustomButton';

export default function CheckoutModal({ isOpen, onClose, totalAmount, onProceed }) {
  const [activeTab, setActiveTab] = useState('wallet');
  const [agreed, setAgreed] = useState(false);
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleProceed = () => {
    if (agreed) {
      onProceed(activeTab, activeTab === 'card' ? cardData : null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-6 gap-6">
        <DialogHeader className="text-left">
          <DialogTitle className="text-lg font-bold">Checkout</DialogTitle>
          <DialogClose className="absolute right-4 top-4" />
        </DialogHeader>

        {/* Tabs */}
        <div className="flex justify-between border-gray-200 gap-8">
          <button
            onClick={() => setActiveTab('wallet')}
            className={`pb-3 flex-1 font-medium text-sm transition-colors ${
              activeTab === 'wallet'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-400'
            }`}
          >
            Wallet
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`pb-3 flex-1 font-medium text-sm transition-colors ${
              activeTab === 'card'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-400'
            }`}
          >
            Card
          </button>
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Amount</label>
          <div className="border border-gray-300 rounded-lg p-3">
            <span className="text-sm text-gray-900">₦{totalAmount.toLocaleString()}</span>
          </div>
        </div>

        {/* Card Fields - Only show when Card tab is active */}
        {activeTab === 'card' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Card Number</label>
              <Input
                placeholder="0000 0000 0000 0000"
                value={cardData.cardNumber}
                onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                className="rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Expiry</label>
                <Input
                  placeholder="mm / yy"
                  value={cardData.expiry}
                  onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">CVV</label>
                <Input
                  placeholder="000"
                  value={cardData.cvv}
                  onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Terms & Conditions */}
        <div className="flex items-start gap-3">
          <Checkbox
            checked={agreed}
            onCheckedChange={setAgreed}
            className="mt-1 data-[state=checked]:bg-sky data-[state=checked]:border-blue-900"
          />
          <label className="text-sm text-gray-700">
            I have read and agree with the Medicyer's{' '}
            <a href="#" className="text-blue-600 underline">Terms & Conditions</a>.
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <CustomButton
            onClick={onClose}
            variant="outline"
            size="lg"
            className="px-4 py-3 border border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            No, Cancel
          </CustomButton>
          <button
            onClick={handleProceed}
            size="lg"
            disabled={!agreed}
            className="flex-1 px-4 py-3 bg-sky text-white font-medium rounded-lg hover:bg-blue-900 disabled:opacity-50 transition-colors"
          >
            Yes, Proceed
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
