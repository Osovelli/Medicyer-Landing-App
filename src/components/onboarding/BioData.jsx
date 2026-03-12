import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Modal from '../custom/Modal';
import { FemaleIcon, MaleIcon } from '../custom/Icons';
import CustomInput from '../custom/CustomInput';


export default function BioDataModal({ onClose, onSubmit }) {
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [errors, setErrors] = useState({ gender: '', dateOfBirth: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { gender: '', dateOfBirth: '' };

    if (!gender) {
      newErrors.gender = 'Please select a gender';
    }

    if (!dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }

    setErrors(newErrors);

    if (gender && dateOfBirth) {
      onSubmit({ gender, dateOfBirth });
    }
  };

  return (
    <Modal isOpen={true} onOpenChange={onClose} title="Bio Data">
      {/* Progress */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-3">Step 1 of 2</p>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden flex">
          <div className="w-1/3 bg-blue-900 rounded-full"></div>
          <div className="w-2/3 bg-purple-200"></div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* Gender */}
          <div>
            <label className="block text-gray-900 font-medium mb-4">Gender</label>
            <div className="flex gap-8 justify-between max-w-xs mx-auto">
              {/* Male */}
              <button
                type="button"
                onClick={() => {
                  setGender('male');
                  setErrors({ ...errors, gender: '' });
                }}
                className={`flex h-20 w-20 shrink-0 flex-col items-center gap-3 p-4 rounded-full transition-all ${
                  gender === 'male'
                    ? 'bg-sky text-white'
                    : 'bg-gray-100 shadow-sm text-gray-900 hover:bg-gray-200'
                }`}
              >
                <MaleIcon className="w-6 h-6" />
                <span className="text-sm font-medium">Male</span>
              </button>

              {/* Female */}
              <button
                type="button"
                onClick={() => {
                  setGender('female');
                  setErrors({ ...errors, gender: '' });
                }}
                className={`flex h-20 w-20 flex-col shrink-0 items-center gap-2 p-4 rounded-full transition-all ${
                  gender === 'female'
                    ? 'bg-sky text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <FemaleIcon className="w-6 h-6" />
                <span className="text-sm font-medium">Female</span>
              </button>
            </div>
            {errors.gender && <p className="text-red-500 text-center text-sm mt-2">{errors.gender}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-900 font-medium mb-3">Date of Birth</label>
            <CustomInput
              type="date"
              placeholder="DD - MM - YY"
              value={dateOfBirth}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
                setErrors({ ...errors, dateOfBirth: '' });
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-gray-900 placeholder-gray-400"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-2">{errors.dateOfBirth}</p>
            )}
          </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Button
            type="button"
            onClick={onClose}
            className="flex-1 border-2 p-6 border-gray-300 text-sky hover:bg-gray-50 rounded-lg py-3 font-semibold transition-colors"
            variant="outline"
            size={'xl'}
          >
            No, Cancel
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-sky p-6 hover:bg-blue-950 text-white rounded-lg py-3 font-semibold transition-colors"
            size={'xl'}
          >
            Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
}
