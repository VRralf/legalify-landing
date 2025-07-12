import React from "react";
import { getAssetPath } from "../utils/assetPath";
import styles from "../styles/components/AfiliadosTributoSimple.module.css";

const AfiliadosTributoSimple = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getAssetPath("afiliados/tributoSimple/TributoSimpleLogo.jpeg")}
          alt="Logo de Tributo Simple - Aliado estratégico de Legalify"
          className={styles.logo}
        />
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Tributo Simple y Legalify.
          </h2>
          <p className={styles.description}>
            Tributo Simple es una App que facilita a los pequeños
            contribuyentes de LATAM llevar su administración y contabilidad de
            forma sencilla, segura y accesible. Se descarga de forma gratuita
            y cuenta con servicios gratis, como la facturación, y pagos, como
            las declaraciones juradas.
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={() =>
                (window.location.href = `/aliados/tributoSimple`)
              }
              aria-label="Ir a la promoción de Tributo Simple"
            >
              <p className={styles.buttonText}>Ir a promoción</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfiliadosTributoSimple;
