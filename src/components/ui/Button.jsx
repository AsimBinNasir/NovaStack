import React from 'react';

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  // Base styles applied to all buttons
  const baseStyles = "inline-flex items-center justify-center font-display font-medium transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-nova-purple focus:ring-offset-2 focus:ring-offset-nova-dark disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Styles based on the 'variant' prop
  const variants = {
    primary: "bg-white text-nova-dark hover:bg-nova-peach hover:text-nova-dark border border-transparent",
    secondary: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-nova-dark",
  };

  // Styles based on the 'size' prop
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      // Combines base, variant, size, and any custom class names
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      // Spreads all other standard button props (e.g., onClick, type, disabled)
      {...props}
    >
      {children}
    </button>
  );
};