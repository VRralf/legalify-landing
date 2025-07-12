import React, { useState, useRef, useEffect } from "react";
import Image from "./Image";
import { LanguageSwitcher, useSelectedLanguage } from "next-export-i18n";
import styles from "../styles/components/Language.module.css";

const languages = [
  { code: 'es', name: 'Español', flag: '/Flags/ESFlag.png' },
  { code: 'en', name: 'English', flag: '/Flags/ENFlag.png' },
  { code: 'it', name: 'Italiano', flag: '/Flags/ITFlag.png' },
];

const Language: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang } = useSelectedLanguage();
  const currentLanguage = languages.find(language => language.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.selector} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={styles.trigger}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Image
          src={currentLanguage.flag}
          alt={`Bandera de ${currentLanguage.name}`}
          width={20}
          height={20}
          className={styles.flag}
        />
        <span className={`${styles.text} hidden sm:block`}>
          {currentLanguage.name}
        </span>
        <svg 
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {languages.map((language) => (
          <LanguageSwitcher key={language.code} lang={language.code} href="/">
            <a
              onClick={handleLanguageChange}
              className={`${styles.option} ${
                language.code === lang ? styles.active : ''
              }`}
              role="menuitem"
            >
              <Image
                src={language.flag}
                alt={`Bandera de ${language.name}`}
                width={24}
                height={24}
                className={styles.optionFlag}
              />
              <span className={styles.optionText}>{language.name}</span>
            </a>
          </LanguageSwitcher>
        ))}
      </div>
    </div>
  );
};

export default Language;
