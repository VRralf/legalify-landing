import React from "react";
import Link from "next/link";
import Image from "./Image";
import { useTranslation } from "next-export-i18n";
import styles from "../styles/components/MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const menuItems = [
    { href: "/#service", label: t("NavBarServices") },
    { href: "/#payment", label: t("NavBarPrices") },
    { href: "/#evolve", label: t("NavBarLawyers") },
    { href: "/#enterprise-services", label: t("NavBarEnterprises") },
    { href: "/#aliados", label: t("NavBarAliance") },
    { href: "/#testimonials", label: t("NavBarTestimonials") },
  ];

  if (!isOpen) return null;

  return (
    <div 
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
    >
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Cerrar menú de navegación"
      >
        &times;
      </button>
      
      <div className={styles.content}>
        <Image
          src="/logo_legalify_azul_transparente_white.png"
          alt="Legalify logo"
          height={43}
          width={121}
          className={styles.logo}
        />

        <nav className={styles.navigation}>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <Link href={item.href}>
                <a className={styles.menuItem} onClick={onClose}>
                  {item.label}
                </a>
              </Link>
              {index < menuItems.length - 1 && (
                <div className={styles.separator} />
              )}
            </React.Fragment>
          ))}

          <div className={styles.separator} />
          
          <Link href={process.env.NEXT_PUBLIC_URL_APP + "/login"}>
            <a className={styles.menuItem} onClick={onClose}>
              {t("NavBarLogin")}
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};
