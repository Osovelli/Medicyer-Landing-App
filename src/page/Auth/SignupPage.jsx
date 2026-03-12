import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import CustomInput from '@/components/custom/CustomInput';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import BioDataModal from '@/components/onboarding/BioData';
import HealthInterestModal from '@/components/onboarding/HealthInterestModal';
import ProfileCompleteModal from '@/components/onboarding/ProfileCompleteModal';
import LoadingModal from '@/components/onboarding/LoadingModal';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({ email: '', phone: '', firstName: '', lastName: '', terms: '' });
  
  // Onboarding state
 /*  const [onboardingStep, setOnboardingStep] = useState('none');
  const [onboardingData, setOnboardingData] = useState({
    gender: '',
    dateOfBirth: '',
    healthInterests: [],
  }); */

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/create-password')
  }

  /* const handleSignIn = (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = { email: '', phone: '', firstName: '', lastName: '' };
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.firstName && !newErrors.lastName && !newErrors.phone && !newErrors.terms) {
      // Start onboarding flow
      setOnboardingStep('biodata');
    }
  };


  const handleBioDataSubmit = (data) => {
    setOnboardingData((prev) => ({
      ...prev,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
    }));
    setOnboardingStep('health');
  };

  const handleHealthInterestSubmit = (interests) => {
    setOnboardingData((prev) => ({
      ...prev,
      healthInterests: interests,
    }));
    setOnboardingStep('loading');
    
    // Simulate API call
    setTimeout(() => {
      setOnboardingStep('complete');
    }, 3000);
  };

  const handleProceedToDashboard = () => {
    // Here you would redirect to dashboard
    console.log('Complete onboarding with:', { formData, onboardingData });
    // window.location.href = '/dashboard';
    navigate('/')
  };

  const handleCancelOnboarding = () => {
    setOnboardingStep('none');
    setOnboardingData({
      gender: '',
      dateOfBirth: '',
      healthInterests: [],
    });
  }; */

  return (
    <div className='py-20'>

    <div className="flex h-screen mb-10 max-w-7xl mx-auto bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 flex flex-col gap-4 mx-auto justify-center px-16 py-12">
        <div className='flex items-center gap-2'>
            {/* Back Button */}
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <h2 className='text-lg font-semibold tracking-wide text-sky'>Register</h2>
        </div>
        
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center">
              <img src="/logo2.svg" alt="Medicyer Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome to Medicyer,</h1>
              <p className="text-lg text-gray-700">Glad to have you here.</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-sm text-start">
            {/* name */}
            <CustomInput
            label="First Name"
            type="text"
            value={formData?.firstName}
            placeholder="John Doe"
            onChange={handleInputChange('firstName')}
            error={errors.firstName}
            required
            />

           {/*  last name */}
            <CustomInput
            label="Last Name"
            type="text"
            value={formData.lastName}
            placeholder="John Doe"
            onChange={handleInputChange('lastName')}
            error={errors.lastName}
            required
            />

            {/* phone number */}
            <CustomInput
            label="Phone Number"
            type="tel"
            value={formData.phone}
            placeholder="123-456-7890"
            onChange={handleInputChange('phone')}
            error={errors.phone}
            required
            />

          {/* Email Input */}
          <CustomInput
            label="Email"
            type="email"
            placeholder="user@email.com"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
            required
          />

          {/* Terms and Conditions Checkbox */}
            <div className="flex items-start gap-3 py-2">
                <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={setAgreedToTerms}
                className="mt-1 data-[state=checked]:bg-sky"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                I have read and agree with the Medicyer's{' '}
                <a
                    href="/terms"
                    className="text-gray-900 font-semibold underline hover:text-blue-950 transition-colors"
                >
                    Terms & Conditions
                </a>
                .
                </label>
            </div>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}


          {/* Forgot Password Link */}
          {/* <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Forgot Password
            </a>
          </div> */}

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-sky py-5 hover:bg-blue-950 text-white font-semibold rounded-lg transition-colors"
            size={'xl'}
            disabled={ !formData.email || !formData.firstName || !formData.lastName || !formData.phone }
          >
            Login
          </Button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-8 text-left text-gray-700">
          Do you have an account?{' '}
          <a
            href="/signin"
            className="font-semibold text-gray-900 hover:text-blue-950 transition-colors"
          >
            Sign In
          </a>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="p-4 hidden lg:block relative overflow-hidden">
        <img
          src="/signup doctor.svg"
          alt="Medical professional"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    {/* Onboarding Modals */}
    {/*   {onboardingStep === 'biodata' && (
        <BioDataModal
          onSubmit={handleBioDataSubmit}
          onClose={handleCancelOnboarding}
        />
      )}
      
      {onboardingStep === 'health' && (
        <HealthInterestModal
          onSubmit={handleHealthInterestSubmit}
          onClose={handleCancelOnboarding}
        />
      )}
      
      {onboardingStep === 'loading' && <LoadingModal/>}
      
      {onboardingStep === 'complete' && (
        <ProfileCompleteModal 
        onProceed={handleProceedToDashboard}
        onClose={handleCancelOnboarding}
         />
      )}   */} 
    </div>
  );
}








