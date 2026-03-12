import { useState, useEffect } from 'react';
import CheckoutModal from './CheckoutModal';
import TransactionPINModal from './TransactionPinModal';
import LoadingModal from './LoadingModal';
import PaymentConfirmationModal from './PaymentConfirmationModal';
import OrderDetailsModal from './OrderDetailsModal';

export default function CheckoutFlowManager({ isOpen, onClose, totalAmount }) {
  const [currentStep, setCurrentStep] = useState('checkout');
  const [paymentData, setPaymentData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const handleCheckoutProceed = (method, cardData) => {
    setPaymentData({
      method,
      cardData,
      amount: totalAmount,
      channel: method === 'wallet' ? 'Wallet' : 'Card'
    });
    setCurrentStep('pin');
  };

  const handlePINConfirm = (pin) => {
    setCurrentStep('loading');
    
    // Simulate loading for 2 seconds, then show confirmation
    setTimeout(() => {
      const mockOrderId = Math.random().toString(36).substr(2, 11).toUpperCase();
      const mockRefNo = 'A23S4R5TCGVBN';
      
      setOrderData({
        subtotal: totalAmount - 1000,
        deliveryFee: 1000,
        total: totalAmount,
        status: 'Success',
        channel: paymentData.channel,
        datePlaced: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        orderId: mockOrderId,
        itemCount: 3
      });
      
      setPaymentData(prev => ({
        ...prev,
        orderId: mockOrderId,
        refNo: mockRefNo,
        status: 'Successful'
      }));
      
      setCurrentStep('confirmation');
    }, 2000);
  };

  const handleSeeOrder = () => {
    setCurrentStep('orderDetails');
  };

  const handleCloseFlow = () => {
    setCurrentStep('checkout');
    setPaymentData(null);
    setOrderData(null);
    onClose();
  };

  return (
    <>
      <CheckoutModal
        isOpen={isOpen && currentStep === 'checkout'}
        onClose={handleCloseFlow}
        totalAmount={totalAmount}
        onProceed={handleCheckoutProceed}
      />

      <TransactionPINModal
        isOpen={currentStep === 'pin'}
        onClose={() => {
          setCurrentStep('checkout');
          setPaymentData(null);
        }}
        totalAmount={totalAmount}
        onConfirm={handlePINConfirm}
      />

      <LoadingModal isOpen={currentStep === 'loading'} />

      <PaymentConfirmationModal
        isOpen={currentStep === 'confirmation'}
        onClose={handleCloseFlow}
        paymentData={paymentData}
        onSeeOrder={handleSeeOrder}
      />

      <OrderDetailsModal
        isOpen={currentStep === 'orderDetails'}
        onClose={handleCloseFlow}
        orderData={orderData}
      />
    </>
  );
}
