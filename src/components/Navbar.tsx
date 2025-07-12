import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import Language from "./Language";
import MenuButton from "../../public/ic-menu.svg";
import { useTranslation } from "next-export-i18n";
import { useModal } from "./ModalContext";
import styles from "../styles/components/Navbar.module.css";

interface Props {
  openNavbar: Function;
}

export const Navbar: React.FC<Props> = ({ openNavbar }) => {
  const { t } = useTranslation();
  const { isModalOpen } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state with smooth threshold
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down fast, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isModalOpen) {
    return null;
  }

  const navItems = [
    { href: "/#service", label: t("NavBarServices"), priority: 1 },
    { href: "/#payment", label: t("NavBarPrices"), priority: 2 },
    { href: "/#evolve", label: t("NavBarLawyers"), priority: 3 },
    { href: "/#enterprise-services", label: t("NavBarEnterprises"), priority: 4 },
    { href: "/#aliados", label: t("NavBarAliance"), priority: 5 },
    { href: "/#testimonials", label: t("NavBarTestimonials"), priority: 6 },
  ];

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className={styles.skipLink}>
        {t("SkipToContent") || "Saltar al contenido principal"}
      </a>
      
      <nav 
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${!isVisible ? styles.hidden : ''}`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className={styles.container}>
          <div className={styles.content}>
            
            {/* Logo Section */}
            <div className={styles.logoSection}>
              <Link href="/">
                <a className={styles.logo} aria-label="Ir a la página de inicio">
                  <img
                    src="/logo_legalify_azul_transparente.png"
                    alt="Legalify - Servicios Legales"
                    className={styles.logoImage}
                    loading="eager"
                    width="160"
                    height="48"
                  />
                </a>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.navigation} aria-label="Menú principal">
              <ul className={styles.navList} role="menubar">
                {navItems.map((item, index) => (
                  <li key={index} className={styles.navItem} role="none">
                    <Link href={item.href}>
                      <a 
                        className={styles.navLink}
                        role="menuitem"
                        tabIndex={0}
                      >
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
                
                {/* Login button */}
                <li className={styles.navItem} role="none">
                  <button
                    onClick={() => window.open(`${process.env.NEXT_PUBLIC_URL_APP}/login`, "_blank")}
                    className={styles.loginButton}
                    role="menuitem"
                    aria-label="Iniciar sesión en la aplicación"
                  >
                    {t("NavBarLogin")}
                  </button>
                </li>
              </ul>
            </nav>

            {/* Actions Section */}
            <div className={styles.actions}>
              {/* CTA Button */}
              <div className={styles.ctaContainer}>
                <Button 
                  label={t("NavBarButton")} 
                  size="small" 
                  aria-label="Comenzar ahora con Legalify"
                />
              </div>
              
              {/* Language Selector */}
              <div className={styles.languageSelector}>
                <Language />
              </div>
              
              {/* Mobile menu button */}
              <button
                className={styles.mobileMenuButton}
                onClick={() => openNavbar()}
                aria-label="Abrir menú de navegación"
                aria-expanded="false"
                aria-controls="mobile-menu"
              >
                <MenuButton className={styles.hamburgerIcon} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className={styles.spacer} aria-hidden="true" />
    </>
  );
};
