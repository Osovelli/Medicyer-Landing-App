import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const CustomInput = ({
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange = () => {},
  error = '',
  disabled = false,
  icon = null,
  maxLength = null,
  required = false,
  helperText = '',
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === 'password';
  const inputType = isPasswordType && showPassword ? 'text' : type;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-900 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          className={`
            w-full px-4 py-3 border border-gray-300 rounded-lg
            bg-white text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
            transition-colors
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />

        {/* Icon on the left */}
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center">
            {icon}
          </div>
        )}

        {/* Password toggle on the right */}
        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>
      )}

      {/* Helper text */}
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}

      {/* Character count */}
      {maxLength && (
        <p className="mt-1 text-xs text-gray-400">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
