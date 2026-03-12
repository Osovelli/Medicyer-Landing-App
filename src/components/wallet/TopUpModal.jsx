import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  CreditCard,
  Calendar,
  Lock,
  Check,
} from 'lucide-react';
import Modal from '../custom/Modal';

const TopUpModal = ({ isOpen, onOpenChange, onProceedToPin }) => {
  const [activeTab, setActiveTab] = useState('transfer');
  const [amount, setAmount] = useState('₦ 23,400');
  const [bankAccount, setBankAccount] = useState('2345678901');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timer, setTimer] = useState(900); // 15 minutes in seconds

  // Timer countdown
  useEffect(() => {
    if (activeTab !== 'transfer' || !isOpen) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTab, isOpen]);

  // Reset timer when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimer(900);
    }
  }, [isOpen]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankAccount);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProceed = () => {
    // Call the function that opens the PIN modal
    onProceedToPin();
    //onOpenChange // Close the top-up modal
  };

  const handleClose = () => {
    setActiveTab('transfer');
    onOpenChange(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} title="">
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-sky">Top Up Wallet</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('transfer')}
            className={`flex-1 pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'transfer'
                ? 'text-[#272E6A] border-b-2 border-[#272E6A]'
                : 'text-gray-500 border-b border-transparent hover:text-gray-700'
            }`}
          >
            Transfer
          </button>
          <button
            onClick={() => setActiveTab('card')}
            className={`flex-1 pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'card'
                ? 'text-[#272E6A] border-b-2 border-[#272E6A]'
                : 'text-gray-500 border-b border-transparent hover:text-gray-700'
            }`}
          >
            Card
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-sky mb-2">
              Amount
            </label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full h-12 px-4 border border-gray-200 rounded-lg text-base tracking-wider font-normal text-[#272E6A] focus:outline-none focus:ring-2 focus:ring-[#272E6A] focus:border-transparent"
              />
            </div>
          </div>

          {activeTab === 'transfer' ? (
            <>
              {/* Bank Details Card */}
              <div className="bg-[#F9FAFB] rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-2">Bank Name</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-[#272E6A] tracking-wider">
                    {bankAccount}
                  </p>
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1 text-sm text-[#272E6A] hover:text-[#1a1f4a] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={16} />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-center mt-3">
                  <p className="text-sm text-gray-500">
                    Expires in {formatTime(timer)}
                  </p>
                </div>
              </div>

              {/* Footer Note */}
              <p className="text-xs text-gray-500 text-center">
                Powered by an open-banking infrastructure partner
              </p>
            </>
          ) : (
            <>
              {/* Card Number */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#272E6A] focus:border-transparent"
                  />
                  <CreditCard
                    size={20}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#272E6A] focus:border-transparent"
                    />
                    <Calendar
                      size={20}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#272E6A] focus:border-transparent"
                    />
                    <Lock
                      size={20}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#272E6A] border-gray-300 rounded focus:ring-[#272E6A]"
                />
                <span className="text-sm text-gray-600">
                  I have read and agree with the{' '}
                  <span className="text-[#272E6A] underline">Terms &amp; Conditions</span>
                </span>
              </label>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onOpenChange}
            className="flex-1 h-12 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            No, Cancel
          </button>
          <button
            onClick={handleProceed}
            disabled={activeTab === 'card' && !agreedToTerms}
            className={`flex-1 h-12 rounded-lg text-white font-medium transition-colors ${
              activeTab === 'card' && !agreedToTerms
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-[#272E6A] hover:bg-[#1a1f4a]'
            }`}
          >
            Yes, Proceed
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TopUpModal;