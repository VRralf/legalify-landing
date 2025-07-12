import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  background?: 'white' | 'gray' | 'gradient';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'md',
  background = 'white'
}) => {
  const baseClasses = "rounded-2xl border transition-all duration-300";
  
  const hoverClasses = hover ? "card-hover" : "";
  
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const backgroundClasses = {
    white: "bg-white border-gray-200 shadow-soft",
    gray: "bg-gray-50 border-gray-200 shadow-soft",
    gradient: "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-medium"
  };

  return (
    <div className={`${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
