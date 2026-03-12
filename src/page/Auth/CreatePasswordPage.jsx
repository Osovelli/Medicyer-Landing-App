import React, { useMemo, useState } from 'react';
import { Check, ChevronLeft, X } from 'lucide-react';
import CustomInput from '@/components/custom/CustomInput';
import { Button } from '@/components/ui/button';
import LoadingFullScreen from './LoadingFullscreen';
import OTPValidator from './OTPValidator';
import PasswordSuccessPage from './PasswordSuccessPage';
import { useNavigate } from 'react-router-dom';

export default function CreatePasswordPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  //const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [step, setStep] = useState(0); // 0 = password form, 1 = loading, 2 = otp, 3 = loading, 4 = success

  // Password requirement checks
  const passwordRequirements = useMemo(() => {
    const password = formData.password;
    return {
      minLength: password.length >= 6,
      hasUpperAndLower: /[a-z]/.test(password) && /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
  }, [formData.password]);

  const allRequirementsMet = Object.values(passwordRequirements).every(req => req);

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { password: '', confirmPassword: '' };

    // Validate password requirements
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!allRequirementsMet) {
      newErrors.password = 'Password does not meet all requirements';
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (!newErrors.password && !newErrors.confirmPassword) {
      // Show loading state and then OTP
      setStep(1);
      setTimeout(() => {
        setStep(2);
      }, 2000);
    }
  };

 /*  const handleSuccessComplete = () => {
    // Redirect to dashboard or next step
    window.location.href = '/';
  }; */

  const handleOTPSubmit = () => {
    // Show loading state and then success
    setStep(3);
    setTimeout(() => {
      setStep(4);
    }, 2000);
  };

  // Don't show form if we're in OTP or success steps
  if (step >= 2) {
    return (
      <>
        {step === 1 && <LoadingFullScreen />}
        {step === 2 && (
          <OTPValidator 
            email="user@email.com"
            onSubmit={handleOTPSubmit}
          />
        )}
        {step === 3 && <LoadingFullScreen />}
        {step === 4 && (
          <PasswordSuccessPage />
        )}
      </>
    );
  }

  return (
    <div className="flex h-screen lg:max-w-7xl mx-auto bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 w-2xl  flex flex-col mx-auto  lg:justify-start px-16 py-12">
        {/* Back Button */}
        <button 
         className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mb-12"
         onClick={()=> navigate(-1)}>
          <ChevronLeft size={20} className="text-gray-600" />
        </button>

        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center">
              <img src="/logo2.svg" alt="Medicyer Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Create Password</h1>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-sm text-start">
          {/* Password Input */}
          <CustomInput
            label="Password"
            type="password"
            placeholder="********"
            value={formData.password}
            onChange={handleInputChange('password')}
            error={errors.password}
            required
          />

          {/* Password Requirements Checklist */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-900">Password must contain:</p>
            
            <div className="space-y-2">
              {/* Minimum 6 characters */}
              <div className="flex items-center gap-2">
                {passwordRequirements.minLength ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
                <span className={`text-sm ${passwordRequirements.minLength ? 'text-green-600' : 'text-gray-600'}`}>
                  A minimum of 6 characters
                </span>
              </div>

              {/* Uppercase and lowercase */}
              <div className="flex items-center gap-2">
                {passwordRequirements.hasUpperAndLower ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
                <span className={`text-sm ${passwordRequirements.hasUpperAndLower ? 'text-green-600' : 'text-gray-600'}`}>
                  Uppercase and lowercase letters
                </span>
              </div>

              {/* Number */}
              <div className="flex items-center gap-2">
                {passwordRequirements.hasNumber ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
                <span className={`text-sm ${passwordRequirements.hasNumber ? 'text-green-600' : 'text-gray-600'}`}>
                  A number
                </span>
              </div>

              {/* Special character */}
              <div className="flex items-center gap-2">
                {passwordRequirements.hasSpecialChar ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
                <span className={`text-sm ${passwordRequirements.hasSpecialChar ? 'text-green-600' : 'text-gray-600'}`}>
                  A special character
                </span>
              </div>
            </div>
          </div>

          {/* confirm password input */}
          <CustomInput
            label={'Confirm Password'}
            type='password'
            placeholder='********'
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            required
          />


          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-sky py-5 hover:bg-blue-950 text-white font-semibold rounded-lg transition-colors"
            size={'xl'}
            disabled={!formData.password}
          >
            Submit
          </Button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="p-4 hidden lg:block relative overflow-hidden">
        <img
          src="/forgot lock.svg"
          alt="Medical professional"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
