import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modal from '../custom/Modal';
import { SuccessIcon } from '../custom/Icons';


export default function ProfileCompleteModal({ onProceed, onClose }) {
  return (
    <Modal isOpen={true} onOpenChange={onClose} title="">
      <div className="flex flex-col items-center justify-center text-center py-8">

        {/* Success Checkmark Icon */}
        <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full">
                <SuccessIcon className="w-full h-full" />
            </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Profiling Complete</h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-8 leading-relaxed">
          Congratulations! Medicyer will use the information provided to tailor services to your needs
        </p>

        {/* Button */}
        <Button
          onClick={onProceed}
          className="w-full bg-sky p-6 hover:bg-blue-950 text-white rounded-lg font-semibold transition-colors"
          size={'xl'}
        >
          Proceed to Dashboard
        </Button>
      </div>
    </Modal>
  );
}
