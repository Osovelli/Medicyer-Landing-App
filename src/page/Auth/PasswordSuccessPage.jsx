import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SuccessIcon } from '@/components/custom/Icons';
import BioDataModal from '@/components/onboarding/BioData';
import HealthInterestModal from '@/components/onboarding/HealthInterestModal';
import LoadingModal from '@/components/onboarding/LoadingModal';
import ProfileCompleteModal from '@/components/onboarding/ProfileCompleteModal';
import { useNavigate } from 'react-router-dom';



export default function PasswordSuccessPage({ onProceed }) {
    const navigate = useNavigate()
    // Onboarding state
    const [onboardingStep, setOnboardingStep] = useState('none');
    const [onboardingData, setOnboardingData] = useState({
      gender: '',
      dateOfBirth: '',
      healthInterests: [],
    });

  const handleGetProfiled = () => {
     setOnboardingStep('biodata');
  }

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
    //console.log('Complete onboarding with:', { formData, onboardingData });
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
  };


  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center px-4 z-50">
      <div className="max-w-md w-full flex flex-col items-center text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-full">
            <SuccessIcon className="w-full h-full" />
            </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Password Updated<br />Successfully
        </h1>

        {/* Button */}
        <Button
          onClick={handleGetProfiled}
          className="w-full my-3 bg-sky p-4 hover:bg-blue-950 text-white font-semibold  rounded-lg transition-colors"
          size={'xl'}
        >
          Get Profiled
        </Button>
      </div>

      {/* Onboarding Modals */}
      {onboardingStep === 'biodata' && (
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
      )} 
    </div>
  );
}
