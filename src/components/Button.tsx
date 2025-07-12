import React, { useEffect, useState } from "react";
import styles from "../styles/components/Button.module.css";

interface Props {
  label: string;
  paramQuery?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<Props> = ({ 
  label, 
  paramQuery, 
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick,
  disabled = false,
  loading = false
}) => {
  const [appendUrlQuery, setAppendUrlQuery] = useState("");

  useEffect(() => {
    if (!paramQuery) paramQuery = "";
    setAppendUrlQuery(paramQuery);
  }, [paramQuery]);

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    loading ? styles.loading : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (disabled || loading) return;
    
    if (onClick) {
      onClick();
    } else {
      window.open(`${process.env.NEXT_PUBLIC_URL_APP}/login${appendUrlQuery}`, '_blank');
    }
  };

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      type="button"
      disabled={disabled || loading}
    >
      {loading ? '' : label}
    </button>
  );
};
