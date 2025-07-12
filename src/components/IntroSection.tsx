import React from "react";
import Image from "./Image";
import { Button } from "./Button";
import Link from "next/link";
import Scene01 from "../../public/scenes01.svg";
import { useTranslation } from "next-export-i18n";
import { getAssetPath } from "../utils/assetPath";
import styles from "@/styles/components/IntroSection.module.css";

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IntroSection: React.FC<Props> = ({ setChecked }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={styles.heroContainer}>
        
        {/* Content Column */}
        <div className={styles.heroContent}>
          
          {/* Mobile Logo */}
          <div className={styles.mobileLogo}>
            <Image
              src={getAssetPath("logo_legalify_azul_transparente_white.png")}
              alt="Legalify logo"
              height={40}
              width={114}
              className={styles.logoImage}
              priority
            />
          </div>
          
          {/* Hero Title */}
          <h1 
            id="hero-title"
            className={styles.heroTitle}
          >
            {t("titleIntro")}
          </h1>
          
          {/* Hero Description */}
          <p className={styles.heroDescription}>
            {t("descriptionIntro")}
          </p>
          
          {/* Primary CTA */}
          <div className={styles.ctaSection}>
            <Link href="/#evolve">
              <a onClick={() => setChecked(false)}>
                <Button 
                  label={t("buttonIntro")} 
                  paramQuery="/../registro-cliente"
                  size="large"
                  className={styles.ctaButton}
                />
              </a>
            </Link>
          </div>
          
          {/* Financial Info Section */}
          <div className={styles.financialInfo}>
            <p className={styles.financialText}>
              {t("financialText")}
            </p>
            <Link href="mailto:info@legalify.app?subject=Solicitud de información de financiamiento">
              <a>
                <Button 
                  label={t("financialButton")} 
                  variant="outline"
                  size="medium"
                  className={styles.financialButton}
                />
              </a>
            </Link>
          </div>
        </div>
        
        {/* Illustration Column */}
        <div className={styles.heroIllustration}>
          <div className={styles.illustrationContainer}>
            <Scene01 className={styles.illustrationSvg} />
          </div>
        </div>
      </div>
    </section>
  );
};
