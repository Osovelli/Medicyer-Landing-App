import React from 'react';
import Modal from '../custom/Modal';

export default function LoadingModal() {
  return (
    <Modal isOpen={true} onOpenChange={() => {}} title="">
      <div className="flex flex-col items-center justify-center py-12">
        {/* Spinner */}
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-900 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-600 text-center text-lg">Loading, please wait...</p>
      </div>
    </Modal>
  );
}
