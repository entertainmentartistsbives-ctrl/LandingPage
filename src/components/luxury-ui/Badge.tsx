import React from 'react';
import { cn } from '../../utils/luxury-utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'pill' | 'status' | 'interactive';
  icon?: React.ReactNode;
  pulse?: boolean;
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = 'gold',
      icon,
      pulse = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center gap-2 rounded-full backdrop-blur-sm';

    const variants = {
      gold: `
        px-4 py-2
        bg-[#C9A14A]/10
        border border-[#C9A14A]/30
        text-sm text-[#C9A14A]
      `,
      pill: `
        px-6 py-3
        bg-[#070707]/80
        border border-[#C9A14A]/30
        hover:border-[#C9A14A]
        hover:bg-[#C9A14A]/10
        hover:scale-105
        transition-all cursor-pointer
        text-sm text-[#C9A14A]
      `,
      status: `
        px-6 py-3
        bg-[#070707]
        border border-[#C9A14A]/30
        text-sm text-[#C9A14A]
      `,
      interactive: `
        px-6 py-3
        bg-[#070707]/80
        border border-[#C9A14A]/30
        hover:border-[#C9A14A]
        hover:bg-[#C9A14A]/10
        hover:scale-105
        hover:shadow-lg hover:shadow-[#C9A14A]/20
        transition-all cursor-pointer
        text-sm text-[#C9A14A]
      `
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        {...props}
      >
        {pulse && (
          <div className="w-2 h-2 bg-[#C9A14A] rounded-full animate-pulse"></div>
        )}

        {icon && (
          <div className={cn(
            variant === 'interactive' && 'group-hover:rotate-12 transition-transform'
          )}>
            {icon}
          </div>
        )}

        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
