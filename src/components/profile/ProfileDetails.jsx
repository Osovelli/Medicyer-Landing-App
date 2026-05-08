import { useState } from 'react';
import CustomInput from '../custom/CustomInput';
import ProfileLoadingModal from './ProfileLoadingModal';
import ProfileUpdatedModal from './ProfileUpdatedModal';
import { Button } from '../ui/button';
import { CustomButton } from '../custom/CustomButton';

export default function ProfileDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Sharafadeen',
    lastName: '',
    phoneNo: '234',
    email: 'user@email.com'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccess(false);
  };

  return (
    <div className="bg-white text-left rounded-lg p-8">
      <h1 className="text-xl font-bold text-sky mb-8">Profile Details</h1>

      <div className="space-y-6 max-w-2xl">
        <CustomInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
        />

        <CustomInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
        />

        <CustomInput
          label="Phone No."
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        />

        <CustomInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="user@email.com"
        />

        <CustomButton
          onClick={handleUpdateProfile}
          className="hover:bg-blue-950 text-white text-base font-medium py-4 px-20 rounded-lg transition-colors mt-8"
          size={'xl'}
        >
          Update Profile
        </CustomButton>
      </div>

      <ProfileLoadingModal isOpen={isLoading} />
      <ProfileUpdatedModal isOpen={isSuccess} onClose={handleCloseSuccess} />
    </div>
  );
}
