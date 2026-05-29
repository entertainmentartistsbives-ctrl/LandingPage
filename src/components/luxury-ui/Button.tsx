import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/luxury-utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-3 rounded-lg transition-all font-medium';

    const variants = {
      primary: `
        relative bg-[#C9A14A] text-[#070707]
        shadow-lg shadow-[#C9A14A]/30
        hover:shadow-xl hover:shadow-[#C9A14A]/50
        overflow-hidden group
      `,
      secondary: `
        border-2 border-[#C9A14A] text-[#C9A14A]
        hover:bg-[#C9A14A]/10
        backdrop-blur-sm
      `,
      tertiary: `
        relative border-2 border-[#C9A14A] text-[#C9A14A]
        overflow-hidden group
      `,
      outline: `
        border border-[#C9A14A]/50 text-[#C9A14A]
        hover:bg-[#C9A14A]/10
        backdrop-blur-sm
      `
    };

    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-10 py-4 text-base',
      lg: 'px-12 py-5 text-lg'
    };

    const renderIcon = () => {
      const defaultIcon = <ArrowRight className={cn(
        'transition-transform',
        size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6',
        'group-hover:translate-x-1'
      )} />;

      return icon || defaultIcon;
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {/* Background gradient for primary variant */}
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#E0BC74] to-[#C9A14A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        )}

        {/* Fill animation for tertiary variant */}
        {variant === 'tertiary' && (
          <div className="absolute inset-0 bg-[#C9A14A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        )}

        <span className={cn(
          'relative z-10 inline-flex items-center gap-3',
          variant === 'tertiary' && 'group-hover:text-[#070707] transition-colors'
        )}>
          {iconPosition === 'left' && icon && renderIcon()}
          {children}
          {iconPosition === 'right' && renderIcon()}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
