import React from 'react';
import { cn } from '../../utils/luxury-utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'gradient' | 'icon';
  hover?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'glass',
      hover = true,
      glow = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-3xl transition-all relative overflow-hidden';

    const variants = {
      glass: `
        bg-[#111111]/50 backdrop-blur-sm
        border border-[#C9A14A]/10
        ${hover ? 'hover:border-[#C9A14A]/50' : ''}
        ${hover ? 'cursor-pointer' : ''}
      `,
      solid: `
        bg-gradient-to-br from-[#111111] to-[#070707]
        border border-[#C9A14A]/10
        ${hover ? 'hover:border-[#C9A14A]/50' : ''}
      `,
      gradient: `
        bg-gradient-to-br from-[#111111] to-[#070707]
        border-2 border-[#C9A14A]/20
        ${hover ? 'hover:border-[#C9A14A]/50 hover:shadow-2xl hover:shadow-[#C9A14A]/20' : ''}
      `,
      icon: `
        bg-[#111111]/50 backdrop-blur-sm
        border border-[#C9A14A]/10
        ${hover ? 'hover:border-[#C9A14A]/50 hover:bg-[#111111]' : ''}
      `
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          'group',
          className
        )}
        {...props}
      >
        {/* Hover Glow Effect */}
        {glow && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/0 to-[#C9A14A]/0 group-hover:from-[#C9A14A]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
        )}

        {/* Top Corner Accent */}
        {variant === 'icon' && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A14A]/5 rounded-full blur-3xl group-hover:bg-[#C9A14A]/10 transition-all duration-500 transform translate-x-16 -translate-y-16 pointer-events-none"></div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

// Icon Card Sub-component
interface IconCardProps extends CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const IconCard = React.forwardRef<HTMLDivElement, IconCardProps>(
  ({ icon, title, description, className, ...props }, ref) => {
    return (
      <Card ref={ref} variant="icon" className={cn('p-8', className)} {...props}>
        <div className="w-16 h-16 rounded-2xl bg-[#C9A14A]/10 flex items-center justify-center text-[#C9A14A] mb-6 group-hover:bg-[#C9A14A] group-hover:text-[#070707] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#C9A14A]/20">
          {icon}
        </div>
        <h3 className="text-xl mb-4 group-hover:text-[#C9A14A] transition-colors">{title}</h3>
        <p className="text-[#BDBDBD] leading-relaxed group-hover:text-[#F5F5F5]/80 transition-colors">{description}</p>
      </Card>
    );
  }
);

IconCard.displayName = 'IconCard';
