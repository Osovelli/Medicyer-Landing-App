import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import CustomInput from '../custom/CustomInput';
import { Search } from 'lucide-react';

export default function AddressInputModal({ isOpen, onClose, onSubmit, currentAddress }) {
  const [address, setAddress] = useState(currentAddress || '');
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    if (address.trim()) {
      onSubmit(`${address}${city ? `. ${city}` : ''}`);
      setAddress('');
      setCity('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">Set Location</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Enter street address</label>
            <CustomInput
              type="text"
              icon={<Search />}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Search"
              className="w-full  pl-10 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Map Container */}
            <div className="w-full h-20 sm:h-46 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
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

          {/* <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">City/Area</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city or area"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div> */}
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 px-2 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            size={'xl'}
          >
            No, Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!address.trim()}
            className="flex-1 px-4 py-3 bg-sky text-white font-semibold rounded-lg hover:bg-blue-950 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            size={'xl'}
          >
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
