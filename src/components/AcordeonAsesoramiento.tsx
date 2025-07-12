import React, { useState } from "react";
import Asesor360 from "./Asesor360";
import PackStartups from "./PackStartups";
import styles from "@/styles/components/AcordeonAsesoramiento.module.css";

function AcordeonAsesoramiento() {
  const [isOpenAsesor, setIsOpenAsesor] = useState(false);
  const [isOpenStartup, setIsOpenStartup] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.accordionContainer}>
        {/* Asesor 360 Section */}
        <div className={`${styles.accordionItem} ${isOpenAsesor ? styles.isOpen : ''}`}>
          <button
            onClick={() => setIsOpenAsesor(!isOpenAsesor)}
            className={styles.accordionButton}
            aria-expanded={isOpenAsesor}
            aria-controls="asesor-content"
          >
            <div className={styles.buttonContent}>
              <div className={styles.buttonIcon}>
                👥
              </div>
              <div className={styles.buttonText}>
                <h3 className={styles.buttonTitle}>
                  Programa asesoramiento 360 para colaboradores de empresas
                </h3>
                <p className={styles.buttonSubtitle}>
                  Consultoría legal integral para equipos de trabajo
                </p>
              </div>
            </div>
            <div className={`${styles.chevron} ${isOpenAsesor ? styles.isOpen : ''}`}>
              ▼
            </div>
          </button>
          <div 
            className={`${styles.accordionContent} ${isOpenAsesor ? styles.isOpen : ''}`}
            id="asesor-content"
          >
            <div className={styles.contentWrapper}>
              <Asesor360 />
            </div>
          </div>
        </div>

        {/* Pack Startups Section */}
        <div className={`${styles.accordionItem} ${isOpenStartup ? styles.isOpen : ''}`}>
          <button
            onClick={() => setIsOpenStartup(!isOpenStartup)}
            className={styles.accordionButton}
            aria-expanded={isOpenStartup}
            aria-controls="startup-content"
          >
            <div className={styles.buttonContent}>
              <div className={styles.buttonIcon}>
                🚀
              </div>
              <div className={styles.buttonText}>
                <h3 className={styles.buttonTitle}>
                  Packs de asesoramiento legal para startups
                </h3>
                <p className={styles.buttonSubtitle}>
                  Soluciones legales especializadas para emprendimientos
                </p>
              </div>
            </div>
            <div className={`${styles.chevron} ${isOpenStartup ? styles.isOpen : ''}`}>
              ▼
            </div>
          </button>
          <div 
            className={`${styles.accordionContent} ${isOpenStartup ? styles.isOpen : ''}`}
            id="startup-content"
          >
            <div className={styles.contentWrapper}>
              <PackStartups />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcordeonAsesoramiento;
