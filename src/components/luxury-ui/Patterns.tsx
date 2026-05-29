import React from 'react';
import { cn } from '../../utils/luxury-utils';

interface BackgroundPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: 'grid' | 'dots' | 'radial' | 'none';
  opacity?: number;
}

export const BackgroundPattern = React.forwardRef<HTMLDivElement, BackgroundPatternProps>(
  ({ pattern = 'grid', opacity = 0.02, className, ...props }, ref) => {
    const patterns = {
      grid: {
        backgroundImage: 'linear-gradient(#C9A14A 1px, transparent 1px), linear-gradient(90deg, #C9A14A 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      },
      dots: {
        backgroundImage: 'radial-gradient(circle, #C9A14A 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      },
      radial: {
        backgroundImage: 'radial-gradient(circle at center, #C9A14A 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      },
      none: {}
    };

    if (pattern === 'none') return null;

    return (
      <div
        ref={ref}
        className={cn('absolute inset-0 pointer-events-none', className)}
        style={{
          ...patterns[pattern],
          opacity
        }}
        {...props}
      />
    );
  }
);

BackgroundPattern.displayName = 'BackgroundPattern';

interface GlowOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'gold' | 'light-gold';
  size?: 'sm' | 'md' | 'lg';
  blur?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  position?: string;
  delay?: string;
}

export const GlowOrb = React.forwardRef<HTMLDivElement, GlowOrbProps>(
  (
    {
      color = 'gold',
      size = 'md',
      blur = 'lg',
      animate = true,
      position = 'top-1/4 left-1/4',
      delay = '0s',
      className,
      ...props
    },
    ref
  ) => {
    const colors = {
      gold: 'bg-[#C9A14A]',
      'light-gold': 'bg-[#E0BC74]'
    };

    const sizes = {
      sm: 'w-64 h-64',
      md: 'w-96 h-96',
      lg: 'w-[600px] h-[600px]'
    };

    const blurs = {
      sm: 'blur-[80px]',
      md: 'blur-[120px]',
      lg: 'blur-[200px]'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'absolute rounded-full opacity-20 pointer-events-none',
          colors[color],
          sizes[size],
          blurs[blur],
          position,
          animate && 'animate-pulse',
          className
        )}
        style={{ animationDelay: delay }}
        {...props}
      />
    );
  }
);

GlowOrb.displayName = 'GlowOrb';

interface DecorativeShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  shape?: 'square' | 'circle';
  color?: 'gold' | 'light-gold';
  size?: 'sm' | 'md' | 'lg';
  position?: string;
  rotation?: number;
  hoverRotation?: number;
}

export const DecorativeShape = React.forwardRef<HTMLDivElement, DecorativeShapeProps>(
  (
    {
      shape = 'square',
      color = 'gold',
      size = 'md',
      position = '-top-6 -right-6',
      rotation = 12,
      hoverRotation = 45,
      className,
      ...props
    },
    ref
  ) => {
    const colors = {
      gold: 'bg-[#C9A14A]/20',
      'light-gold': 'bg-[#E0BC74]/20'
    };

    const sizes = {
      sm: 'w-16 h-16',
      md: 'w-24 h-24',
      lg: 'w-32 h-32'
    };

    const shapes = {
      square: 'rounded-2xl',
      circle: 'rounded-full'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'absolute transition-transform duration-700 pointer-events-none',
          colors[color],
          sizes[size],
          shapes[shape],
          position,
          className
        )}
        style={{
          transform: `rotate(${rotation}deg)`
        }}
        {...props}
      />
    );
  }
);

DecorativeShape.displayName = 'DecorativeShape';

// Background Effects Container
interface BackgroundEffectsProps {
  children?: React.ReactNode;
  patterns?: boolean;
  glows?: boolean;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  children,
  patterns = true,
  glows = true
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {glows && (
        <>
          <GlowOrb position="top-1/4 left-1/4" delay="0s" />
          <GlowOrb
            position="bottom-1/4 right-1/4"
            color="light-gold"
            delay="1s"
          />
        </>
      )}

      {patterns && <BackgroundPattern pattern="grid" />}

      {children}
    </div>
  );
};
