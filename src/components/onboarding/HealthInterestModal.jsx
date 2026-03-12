import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Modal from '../custom/Modal';
import { LocateFixedIcon } from 'lucide-react';

const HEALTH_INTERESTS = [
  'Fitness & Exercise',
  'Diet & Nutrition',
  'Weight Loss',
  'Women\'s Health',
  'General Health Education',
  'Child Health',
  'Chronic Condition Management',
  'Random Facts',
];

export default function HealthInterestModal({ onClose, onSubmit }) {
  const [selectedInterests, setSelectedInterests] = useState([
    'Diet & Nutrition',
    'General Health Education',
    'Chronic Condition Management',
  ]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedInterests);
  };

  return (
    <Modal isOpen={true} onOpenChange={onClose} title="Health Interest">
      {/* Progress */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-3">Step 2 of 2</p>
        <div className="w-full h-2 bg-purple-200 rounded-full overflow-hidden flex">
          <div className="w-full bg-blue-900 rounded-full"></div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
          {/* Health Interests Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {HEALTH_INTERESTS.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`px-4 h-12 w-38 rounded-full text-xs  font-medium transition-all flex items-center justify-center gap-2 ${
                  selectedInterests.includes(interest)
                    ? 'bg-sky text-white'
                    : 'border-2 border-gray-300 text-sky hover:border-sky'
                }`}
              >
                <LocateFixedIcon className='w-5 h-5 shrink-0' />
                {interest}
              </button>
            ))}
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
            Yes, Submit
          </Button>
        </div>
      </form>
    </Modal>
  );
}
