import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import CustomInput from '@/components/custom/CustomInput';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = { email: '', password: '' };
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    
    if (!newErrors.email && !newErrors.password) {
      // Handle sign-in logic here
      console.log('Sign in with:', { email, password });
    }
  };

  return (
    <div className="flex h-screen max-w-7xl mx-auto bg-white">
      {/* Left Section - Form */}
      <div className="lg:w-1/2 flex flex-col mx-auto justify-center px-16 py-12">
        {/* Back Button */}
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mb-12">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>

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
        <form onSubmit={handleSignIn} className="space-y-6 max-w-sm text-start">
          {/* Email Input */}
          <CustomInput
            label="Email"
            type="email"
            placeholder="user@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: '' });
            }}
            error={errors.email}
            required
          />

          {/* Password Input */}
          <CustomInput
            label="Password"
            type="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: '' });
            }}
            error={errors.password}
            required
          />

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-sky py-5 hover:bg-blue-950 text-white font-semibold rounded-lg transition-colors"
            size={'xl'}
            disabled={!email || !password}
          >
            Login
          </Button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-gray-700">
          Do you have an account?{' '}
          <a
            href="/signup"
            className="font-semibold text-gray-900 hover:text-blue-950 transition-colors"
          >
            Register Now
          </a>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="p-4 hidden lg:block relative overflow-hidden">
        <img
          src="/login doctor.svg"
          alt="Medical professional"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
