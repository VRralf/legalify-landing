import React, { useEffect, useState } from "react";

interface Props {
  label: string;
  paramQuery?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ 
  label, 
  paramQuery, 
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}) => {
  const [appendUrlQuery, setAppendUrlQuery] = useState("");

  useEffect(() => {
    if (!paramQuery) paramQuery = "";
    setAppendUrlQuery(paramQuery);
  }, [paramQuery]);

  const baseClasses = "legal-button inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 min-h-[3rem] uppercase tracking-wide";
  
  const variants = {
    primary: "bg-gradient-legal-primary text-legal-white hover:bg-gradient-legal-accent shadow-lg hover:shadow-xl focus:ring-legal-blue/30 hover:scale-105",
    secondary: "bg-legal-cream text-legal-navy hover:bg-legal-gold hover:text-legal-white shadow-md hover:shadow-lg focus:ring-legal-gold/30 hover:scale-105 border-2 border-legal-gold",
    outline: "border-2 border-legal-blue text-legal-blue hover:bg-legal-blue hover:text-legal-white shadow-md hover:shadow-lg focus:ring-legal-blue/30 hover:scale-105 bg-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(`${process.env.NEXT_PUBLIC_URL_APP}/login${appendUrlQuery}`, '_blank');
    }
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={handleClick}
      type="button"
    >
      {label}
    </button>
  );
};
