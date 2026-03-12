import React, { useState, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function OTPValidator({ email, onSubmit }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isOTPComplete = otp.every(digit => digit !== '');
  const maskedEmail = email.replace(/(.{3})(.*)(@.*)/, '$1***$3');

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center px-4 z-50">
      {/* Back Button */}
      <div className="absolute top-8 left-8">
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="max-w-md w-full">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Authentication</h1>

        {/* OTP Section */}
        <div className="mt-8 mb-8">
          <p className="text-sm font-medium text-gray-900 mb-6">One-Time Password (OTP)</p>

          {/* OTP Input Fields */}
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 border border-gray-300 rounded-lg text-center font-semibold text-gray-600 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
              />
            ))}
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-600 text-left mb-6">
            We just sent an email to <span className="font-medium">{maskedEmail}</span>. Enter the code to verify your account.
          </p>

          {/* Resend Code Link */}
          <div className="text-center mb-8">
            <a href="#" className="text-sm font-semibold text-blue-900 hover:text-blue-950 transition-colors">
              Resend code
            </a>
          </div>
        </div>

        {/* Authenticate Button */}
        <Button
          onClick={onSubmit}
          disabled={!isOTPComplete}
          className="w-full bg-sky p-6 hover:bg-blue-950 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          size={'xl'}
        >
          Authenticate
        </Button>
      </div>
    </div>
  );
}
