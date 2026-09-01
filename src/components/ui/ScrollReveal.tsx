import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  delay?: number;
}

/**
 * Static container component replacing dynamic scroll reveal animations
 * to ensure all content renders immediately without viewport delays or opacity shifts.
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
}: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
