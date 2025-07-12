import React from "react";
import styles from "../styles/components/AboutIcon.module.css";

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
    <div className={styles.container}>
      {/* Icon Container */}
      <div className={styles.iconContainer}>
        <img 
          src={icon} 
          alt={label}
          style={{ 
            width: `${Math.min(width * 0.8, 32)}px`, 
            height: `${Math.min(height * 0.8, 32)}px` 
          }}
          className={styles.icon}
        />
      </div>
      
      {/* Text Content */}
      <div className={styles.textContent}>
        <p className={styles.label}>
          {label}
        </p>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};
