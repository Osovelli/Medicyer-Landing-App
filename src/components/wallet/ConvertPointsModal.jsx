import React, { useState } from 'react';
import Modal from '../custom/Modal';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { CustomButton } from '../custom/CustomButton';

const ConvertPointsModal = ({ isOpen, onOpenChange, onProceed }) => {
  const [points, setPoints] = useState('');

  const handleProceed = () => {
    onOpenChange(false); // Close the convert modal
    onProceed(points); // Pass the points to the parent component
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} title="Convert Points">
      <div>
        <Input 
          type="number" 
          value={points} 
          onChange={(e) => setPoints(e.target.value)} 
          placeholder="Points" 
          className="border rounded p-2 w-full" 
        />
        <p className="text-xs font-normal text-left mt-2">Conversion rates details goes here & more. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="mt-4 flex gap-2 justify-between">
        <CustomButton
            variant={'outline'}
            onClick={() => onOpenChange(false)} 
            className="border px-6 border-sky rounded-lg hover:bg-gray-100"
            size={'lg'}
        >
            No, Cancel
        </CustomButton>
        <CustomButton 
            onClick={handleProceed} 
            className="flex-1 bg-sky text-white hover:bg-blue-950 rounded-lg p-4" 
            size={'lg'}
        >
            Yes, Proceed
        </CustomButton>
      </div>
    </Modal>
  );
};

export default ConvertPointsModal;