import React from 'react';
import Modal from '../custom/Modal';
import { SuccessIcon } from '../custom/Icons';
import { Button } from '../ui/button';
import { CustomButton } from '../custom/CustomButton';

const shareOptions = [
    { icon: '/Telegram.svg', route: 'https://t.me/your_channel' },
    { icon: '/Twitter.svg', route: 'https://twitter.com/your_profile' },
    { icon: '/Whatsapp.svg', route: 'https://wa.me/your_number' },
    { icon: '/More.svg', route: 'https://yourwebsite.com/share' }
];

const SuccessModal = ({ isOpen, onOpenChange, paymentData }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <div className="flex flex-col items-center gap-2">
        {/* Success Icon */}
        <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full">
            <SuccessIcon className="w-full h-full" />
            </div>
        </div>
        </div>
        
        {/* Title and Description */}
        <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Payment Successful</h2>
            <p className="text-sm text-gray-600">
            Your booking is confirmed. Please find the details for the appointment.
            </p>
        </div>
        
        {/* Payment Details */}
        <div className="space-y-3 w-full justify-between bg-gray-50 p-4 rounded-lg border-t border-b border-gray-200 py-4">
            <div className="flex justify-between">
            <span className="text-sm text-gray-600">Amount:</span>
            <span className="text-sm font-medium text-gray-900">₦{paymentData?.amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
            <span className="text-sm text-gray-600">Channel</span>
            <span className="text-sm font-medium text-gray-900">{paymentData?.channel}</span>
            </div>
            <div className="flex justify-between">
            <span className="text-sm text-gray-600">Order ID</span>
            <span className="text-sm font-medium text-gray-900">{paymentData?.orderId}</span>
            </div>
            <div className="flex justify-between">
            <span className="text-sm text-gray-600">Status:</span>
            <span className="text-sm font-medium text-gray-900">{paymentData?.status}</span>
            </div>
            <div className="flex justify-between">
            <span className="text-sm text-gray-600">Ref No:</span>
            <span className="text-sm font-medium text-gray-900">{paymentData?.refNo}</span>
            </div>
        </div>

        {/* Share Options */}
        <div className="space-y-3">
            <p className="text-xs text-gray-600 font-medium">Share via</p>
            <div className="flex gap-4 justify-center">
            {shareOptions.map((option, idx) => (
                <a
                key={idx}
                href={option.route}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-gray-600 hover:opacity-80 transition-opacity"
                >
                <img src={option.icon} alt={option.label} className="w-20 h-20" />
                </a>
            ))}
            </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex w-full">
            {/* <Button
            variant={'outline'}
            onClick={onSeeOrder}
            size={'xl'}
            className="flex-1 px-4 py-3 border border-sky text-sky font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
            See Order
            </Button> */}
            <CustomButton
            onClick={onOpenChange}
            className="flex-1 px-4 py-3 bg-sky text-white font-medium rounded-lg hover:bg-blue-950 transition-colors"
            size={'lg'}
            >
            Home
            </CustomButton>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;