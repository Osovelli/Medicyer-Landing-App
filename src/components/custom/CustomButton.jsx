import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default: 'bg-sky text-white hover:bg-blue-950 dark:bg-blue-800',
        destructive: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-700',
        outline: 'border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
        ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
        link: 'text-blue-900 underline-offset-4 hover:underline dark:text-blue-400',
        success: 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-700',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-600',
      },
      size: {
        xs: 'h-7 px-2.5 text-xs gap-1.5',
        sm: 'h-8 rounded-md px-3 text-sm gap-1.5',
        default: 'h-10 px-4 py-2',
        lg: 'h-12 rounded-md px-10 text-base font-normal',
        xl: 'h-14 rounded-lg px-8 text-lg',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
);

const CustomButton = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      isError = false,
      loadingText,
      leftIcon,
      rightIcon,
      tooltip,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || isLoading || isError;

    return (
      <Comp
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-label={props['aria-label'] || (typeof children === 'string' ? children : 'Button')}
        aria-busy={isLoading}
        aria-disabled={isDisabled}
        aria-invalid={isError}
        title={tooltip}
        className={cn(
          buttonVariants({ variant, size, fullWidth: props['data-full-width'] === 'true', className }),
          isLoading && 'pointer-events-none opacity-70',
          isError && 'ring-2 ring-destructive/20'
        )}
        {...props}
      >
        {/* Left Icon */}
        {leftIcon && !isLoading && <span className="flex items-center">{leftIcon}</span>}

        {/* Loading Spinner */}
        {isLoading && (
          <span className="flex items-center">
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          </span>
        )}

        {/* Error Icon */}
        {isError && !isLoading && (
          <span className="flex items-center text-destructive">
            <AlertCircle className="size-4" aria-hidden="true" />
          </span>
        )}

        {/* Button Text */}
        <span className={cn(isLoading && 'ml-1')}>
          {isLoading && loadingText ? loadingText : children}
        </span>

        {/* Right Icon */}
        {rightIcon && !isLoading && <span className="flex items-center">{rightIcon}</span>}
      </Comp>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton, buttonVariants };
