import { useState } from 'react';
import { LocateFixed, Trash2 } from 'lucide-react';
import AddressInputModal from './AddressInputModal';
import ProfileLoadingModal from './ProfileLoadingModal';
import AddressUpdatedModal from './AddressUpdatedModal';
import { MapPinIcon } from '../custom/Icons';

export default function AddressDetails() {
  const [address, setAddress] = useState('No 397A, 62 Road off 6th Avenue. Gwarimpa. Abuja - Nigeria');
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [isUpdatedOpen, setIsUpdatedOpen] = useState(false);

  const handleAddressSubmit = (newAddress) => {
    setIsInputModalOpen(false);
    setIsLoadingOpen(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoadingOpen(false);
      setAddress(newAddress);
      setIsUpdatedOpen(true);
    }, 2000);
  };

  const handleDeleteAddress = () => {
    setAddress('');
  };

  const handleUpdatedClose = () => {
    setIsUpdatedOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center">
            <MapPinIcon className="w-16 h-16" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Location Saved</h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      {/* Address Input Section */}
      <div>
        <label className="block text-left text-sm font-semibold text-gray-900 mb-3">Address</label>
        <button
          onClick={() => setIsInputModalOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors bg-white group"
        >
          <LocateFixed size={20} className="text-gray-600 shrink-0" />
          <div className="flex-1 text-left">
            <p className="text-gray-900 font-medium text-sm">{address}</p>
            {address.includes('Abuja') && (
              <p className="text-gray-500 text-xs">Abuja - Nigeria</p>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteAddress();
            }}
            className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Trash2 size={20} className="text-gray-400" />
          </button>
        </button>
      </div>

      {/* Map Container */}
      <div className="w-full h-80 sm:h-96 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4788350410557!2d7.039!3d9.088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d6c3c3c3c3c3d%3A0x1234567890abcdef!2sGwarinpa%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
          title="Address Location Map"
        ></iframe>
      </div>

      {/* Modals */}
      <AddressInputModal
        isOpen={isInputModalOpen}
        onClose={() => setIsInputModalOpen(false)}
        onSubmit={handleAddressSubmit}
        currentAddress={address}
      />

      <ProfileLoadingModal isOpen={isLoadingOpen} />

      <AddressUpdatedModal isOpen={isUpdatedOpen} onClose={handleUpdatedClose} />
    </div>
  );
}
