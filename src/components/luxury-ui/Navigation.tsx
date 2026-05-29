import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/luxury-utils';
import { Button } from './Button';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, active = false, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'relative text-[#BDBDBD] hover:text-[#C9A14A] transition-colors group',
          active && 'text-[#C9A14A]',
          className
        )}
        {...props}
      >
        {children}
        <span className={cn(
          'absolute -bottom-1 left-0 h-0.5 bg-[#C9A14A] transition-all duration-300',
          active ? 'w-full' : 'w-0 group-hover:w-full'
        )}></span>
      </a>
    );
  }
);

NavLink.displayName = 'NavLink';

interface LuxuryNavbarProps {
  logo?: React.ReactNode;
  links?: Array<{ href: string; label: string }>;
  ctaText?: string;
  onCtaClick?: () => void;
  children?: React.ReactNode;
}

export const LuxuryNavbar: React.FC<LuxuryNavbarProps> = ({
  logo,
  links = [],
  ctaText = 'Get Started',
  onCtaClick,
  children
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#070707]/95 backdrop-blur-xl shadow-lg shadow-[#C9A14A]/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl tracking-tight group cursor-pointer">
          {logo || (
            <>
              <span className="text-[#C9A14A] inline-block group-hover:scale-110 transition-transform">
                Your
              </span>{' '}
              <span className="text-[#F5F5F5]">Brand</span>
            </>
          )}
        </div>

        {/* Nav Links */}
        {links.length > 0 && (
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
        )}

        {/* Custom Children or CTA Button */}
        {children || (
          <Button variant="tertiary" size="sm" onClick={onCtaClick}>
            {ctaText}
          </Button>
        )}
      </div>
    </nav>
  );
};
