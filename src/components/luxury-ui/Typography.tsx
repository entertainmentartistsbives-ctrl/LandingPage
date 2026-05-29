import React from 'react';
import { cn } from '../../utils/luxury-utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  direction?: 'r' | 'l' | 'b' | 't';
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ children, direction = 'r', className, ...props }, ref) => {
    const gradients = {
      r: 'bg-gradient-to-r',
      l: 'bg-gradient-to-l',
      b: 'bg-gradient-to-b',
      t: 'bg-gradient-to-t'
    };

    return (
      <span
        ref={ref}
        className={cn(
          gradients[direction],
          'from-[#C9A14A] to-[#E0BC74] bg-clip-text text-transparent',
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';

interface HighlightedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  underline?: boolean;
}

export const HighlightedText = React.forwardRef<HTMLSpanElement, HighlightedTextProps>(
  ({ children, underline = true, className, ...props }, ref) => {
    return (
      <span ref={ref} className={cn('relative inline-block', className)} {...props}>
        <span className="relative z-10 bg-gradient-to-r from-[#C9A14A] to-[#E0BC74] bg-clip-text text-transparent">
          {children}
        </span>
        {underline && (
          <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#C9A14A]/20 -rotate-1"></span>
        )}
      </span>
    );
  }
);

HighlightedText.displayName = 'HighlightedText';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  badge?: string;
  badgeIcon?: React.ReactNode;
  description?: string;
}

export const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ children, badge, badgeIcon, description, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('text-center mb-20', className)} {...props}>
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A14A]/10 border border-[#C9A14A]/30 mb-8">
            {badgeIcon && <div className="w-4 h-4 text-[#C9A14A]">{badgeIcon}</div>}
            <span className="text-sm text-[#C9A14A]">{badge}</span>
          </div>
        )}

        <h2 className="text-4xl md:text-5xl mb-4">
          {children}
        </h2>

        {description && (
          <p className="text-[#BDBDBD] max-w-3xl mx-auto text-lg">
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';
