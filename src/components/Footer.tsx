import React from "react";
import InstagramIcon from "../../public/instagramIcon.svg";
import LinkedinIcon from "../../public/linkedinIcon.svg";
import FacebookIcon from "../../public/facebookIcon.svg";
import MediumIcon from "../../public/mediumIcon.svg";
import ChatBot from "./ChatBot";
import styles from '../styles/components/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.container} role="contentinfo" aria-labelledby="footer-heading">
      <div className={styles.grid}>
        {/* Brand Section */}
        <section className={styles.brandSection} aria-labelledby="brand-heading">
          <h2 id="brand-heading" className="sr-only">Información Corporativa</h2>
          <img
            src="/logo_legalify_azul_transparente.svg"
            alt="Legalify - Plataforma legal digital"
            width={220}
            height={78}
            className={styles.logo}
          />
          <p className={styles.brandDescription}>
            La plataforma legal digital que revoluciona el acceso a servicios jurídicos en Argentina
          </p>
          <div className={styles.companyInfo}>
            <p className={styles.companyDetail}>
              <strong>Legalify SAS</strong> - Marca registrada 2020
            </p>
            <p className={styles.companyDetail}>
              Tecnología jurídica para abogados y empresas
            </p>
            <p className={styles.companyDetail}>
              Buenos Aires, Argentina
            </p>
          </div>
        </section>

        {/* Social Media Section */}
        <section className={styles.socialSection} aria-labelledby="social-heading">
          <h2 id="social-heading" className="sr-only">Redes Sociales y Contacto</h2>
          <p className={styles.socialDescription}>
            Conectate con nuestra comunidad legal
          </p>
          <nav className={styles.socialLinks} aria-label="Enlaces de redes sociales">
            <a
              href="https://www.instagram.com/legalify.app/"
              rel="noreferrer"
              target="_blank"
              className={styles.socialLink}
              aria-label="Seguinos en Instagram (se abre en nueva ventana)"
            >
              <InstagramIcon className={styles.socialIcon} aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/legalify.latam.3"
              rel="noreferrer"
              target="_blank"
              className={styles.socialLink}
              aria-label="Seguinos en Facebook (se abre en nueva ventana)"
            >
              <FacebookIcon className={styles.socialIcon} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/legalify-latam/"
              rel="noreferrer"
              target="_blank"
              className={styles.socialLink}
              aria-label="Conectate en LinkedIn (se abre en nueva ventana)"
            >
              <LinkedinIcon className={styles.socialIcon} aria-hidden="true" />
            </a>
            <a
              href="https://medium.com/@Legalify.app"
              rel="noreferrer"
              target="_blank"
              className={styles.socialLink}
              aria-label="Lee nuestro blog en Medium (se abre en nueva ventana)"
            >
              <MediumIcon className={styles.socialIcon} aria-hidden="true" />
            </a>
          </nav>
          <p className={styles.socialSubtext}>
            Descubrí las últimas novedades del sector legal y mantente al día con nuestras actualizaciones
          </p>
        </section>
      </div>
      
      <ChatBot />
    </footer>
  );
};
