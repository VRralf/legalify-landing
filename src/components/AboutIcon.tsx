import React from "react";

interface Props {
  icon: string;
  width: number;
  height: number;
  label: string;
  description: string;
}

export const AboutIcon: React.FC<Props> = ({
  icon,
  width,
  height,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col items-center space-y-3 text-center">
      {/* Icon Container */}
      <div className="about-icon-container">
        <img 
          src={icon} 
          alt={label}
          style={{ 
            width: `${Math.min(width * 0.8, 32)}px`, 
            height: `${Math.min(height * 0.8, 32)}px` 
          }}
          className="object-contain relative z-10" 
        />
      </div>
      
      {/* Text Content */}
      <div className="space-y-1">
        <p className="text-sm font-semibold text-legal-navy leading-tight">
          {label}
        </p>
        <p className="text-xs text-legal-silver leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};
