import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import CustomInput from '../custom/CustomInput';
import { CustomButton } from '../custom/CustomButton';

export default function AuthorizationModal({ isOpen, onClose, onConfirm }) {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onConfirm(password);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">Authorization</DialogTitle>
        </DialogHeader>
        <CustomInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='********'
        />
        <div className="flex gap-3 pt-4">
          <CustomButton 
          onClick={handleSubmit} 
          className="flex-1 p-6 bg-sky hover:bg-blue-950 rounded-xl"
          size={'xl'}
          >
            Confirm
          </CustomButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}