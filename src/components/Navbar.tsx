import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import Language from "./Language";
import MenuButton from "../../public/ic-menu.svg";
import { useTranslation } from "next-export-i18n";
import { useModal } from "./ModalContext";

interface Props {
  openNavbar: Function;
}

export const Navbar: React.FC<Props> = ({ openNavbar }) => {
  const { t } = useTranslation();
  const { isModalOpen } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isModalOpen) {
    return null;
  }

  const navItems = [
    { href: "/#service", label: t("NavBarServices") },
    { href: "/#payment", label: t("NavBarPrices") },
    { href: "/#evolve", label: t("NavBarLawyers") },
    { href: "/#enterprise-services", label: t("NavBarEnterprises") },
    { href: "/#aliados", label: t("NavBarAliance") },
    { href: "/#testimonials", label: t("NavBarTestimonials") },
  ];

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100' 
            : 'bg-white'
        } ${isModalOpen ? "bg-blur" : ""}`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-legalify-accent"
              onClick={() => openNavbar()}
              aria-label="Abrir menú de navegación"
              aria-expanded="false"
            >
              <MenuButton className="w-6 h-6 text-legalify-primary" />
            </button>

            {/* Logo */}
            <Link href="/">
              <a className="flex items-center group">
                <Image
                  src="/logo_legalify_azul_transparente.png"
                  width={139}
                  height={49}
                  alt="Legalify - Plataforma legal digital"
                  className="h-12 w-auto transition-transform group-hover:scale-105"
                  priority
                />
              </a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <a className="px-3 py-2 rounded-lg text-sm lg:text-base font-medium text-legalify-primary hover:text-legalify-accent hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-legalify-accent focus:ring-offset-2">
                    {item.label}
                  </a>
                </Link>
              ))}
              
              {/* External links */}
              <button
                onClick={() => window.open("https://blog.legalify.app/", "_blank")}
                className="px-3 py-2 rounded-lg text-sm lg:text-base font-medium text-legalify-primary hover:text-legalify-accent hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-legalify-accent focus:ring-offset-2"
              >
                Blog
              </button>
              
              <button
                onClick={() => window.open(`${process.env.NEXT_PUBLIC_URL_APP}/login`, "_blank")}
                className="px-3 py-2 rounded-lg text-sm lg:text-base font-medium text-legalify-primary hover:text-legalify-accent hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-legalify-accent focus:ring-offset-2"
              >
                {t("NavBarLogin")}
              </button>
            </div>

            {/* CTA and Language */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block">
                <Button label={t("NavBarButton")} />
              </div>
              <Language />
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
};
