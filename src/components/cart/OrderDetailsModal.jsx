import { Dialog, DialogContent } from '@/components/ui/dialog';
import { SuccessIcon } from '../custom/Icons';
import { Button } from '../ui/button';
import { CustomButton } from '../custom/CustomButton';

export default function OrderDetailsModal({ isOpen, onClose, orderData }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md px-6 py-4 gap-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full">
              <SuccessIcon className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">Order Details</h2>

        {/* Payment Details Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-900">Payment Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-medium text-gray-900">₦{orderData?.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Delivery Fee</span>
              <span className="text-sm font-medium text-gray-900">₦{orderData?.deliveryFee.toLocaleString()}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <span className="text-sm font-bold text-gray-900">₦{orderData?.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Order Information */}
        <div className="space-y-2 border-t border-b border-gray-200 py-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Status</span>
            <span className="text-sm font-medium text-gray-900">{orderData?.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Channel</span>
            <span className="text-sm font-medium text-gray-900">{orderData?.channel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Date placed</span>
            <span className="text-sm font-medium text-gray-900">{orderData?.datePlaced}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Order ID</span>
            <span className="text-sm font-medium text-gray-900">{orderData?.orderId}</span>
          </div>
        </div>

        {/* Items Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">Items in this Order ({orderData?.itemCount})</h3>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-200 rounded-md shrink-0"></div>
              <span className="text-sm text-gray-700">Provider name</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <CustomButton
            variant={'outline'}
            onClick={onClose}
            className="px-10 py-3 border border-sky text-sky font-medium rounded-lg hover:bg-gray-50 transition-colors"
            size={'lg'}
          >
            See Bookings
          </CustomButton>
          <CustomButton
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-sky text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
            size={'lg'}
          >
            Home
          </CustomButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
