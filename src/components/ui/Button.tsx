import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary:
    'bg-mln-gold text-mln-black hover:bg-mln-gold/90 shadow-lg shadow-mln-gold/20',
  secondary:
    'border border-mln-gold/40 text-mln-gold hover:bg-mln-gold/10 hover:border-mln-gold/70',
  ghost: 'text-mln-white/70 hover:text-mln-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mln-gold disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  ),
);

Button.displayName = 'Button';
