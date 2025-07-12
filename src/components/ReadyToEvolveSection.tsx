import React from "react";
import EvolveScene from "../../public/evolveScene.svg";
import YouTubeLogo from "../../public/youTubeLogo.svg";
import { useTranslation } from "next-export-i18n";
import styles from "@/styles/components/ReadyToEvolveSection.module.css";

interface Props {
  id: string;
}

const ReadyToEvolveSection: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} id={id}>
      <div className={styles.grid}>
        {/* Content Section */}
        <div className={styles.content}>
          <div className={styles.textWrapper}>
            {/* Title */}
            <div className={styles.titleSection}>
              <h2 className={styles.title}>
                {t("ReadyTitle")}
              </h2>
            </div>
            
            {/* Description */}
            <div className={styles.descriptionSection}>
              <p className={styles.descriptionPrimary}>
                {t("ReadyDescription")}
              </p>
              <p className={styles.descriptionSecondary}>
                {t("ReadyDescription2")}
              </p>
            </div>
            
            {/* YouTube CTA */}
            <div className={styles.ctaSection}>
              <a
                href="https://www.youtube.com/playlist?list=PLPcJgVIaFR40H38ttI3QDVHGP7HB-moe-"
                rel="noreferrer"
                target="_blank"
                className={styles.youtubeLink}
                aria-label="Ver tutoriales de Legalify en YouTube"
              >
                <div className={styles.youtubeIcon}>
                  <YouTubeLogo />
                </div>
                <span className={styles.youtubeText}>
                  {t("ReadyDescription3")}
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <EvolveScene />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToEvolveSection;
