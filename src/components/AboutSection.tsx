import React from "react";
import { AboutIcon } from "./AboutIcon";
import Scene06 from "../../public/scenes06.svg";
import { useTranslation } from "next-export-i18n";
import styles from "../styles/components/AboutSection.module.css";

interface AboutIconData {
  icon: string;
  width: number;
  height: number;
  label: string;
  description: string;
}

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const aboutIconData: AboutIconData[] = [
    {
      icon: "/simple.svg",
      width: 48,
      height: 39,
      label: t("IconAboutLabel1"),
      description: t("IconAboutDescription1"),
    },
    {
      icon: "/economico.svg",
      width: 37,
      height: 38,
      label: t("IconAboutLabel2"),
      description: t("IconAboutDescription2"),
    },
    {
      icon: "/segura.svg",
      width: 36,
      height: 39,
      label: t("IconAboutLabel3"),
      description: t("IconAboutDescription3"),
    },
    {
      icon: "/confiable.svg",
      width: 36,
      height: 39,
      label: t("IconAboutLabel4"),
      description: t("IconAboutDescription4"),
    },
    {
      icon: "/rentable.svg",
      width: 54,
      height: 39,
      label: t("IconAboutLabel5"),
      description: t("IconAboutDescription5"),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        {/* Illustration Column */}
        <div className={styles.illustrationColumn}>
          <div className="w-full max-w-lg">
            <Scene06 className={styles.illustration} />
          </div>
        </div>
        
        {/* Content Column */}
        <div className={styles.contentColumn}>
          
          {/* Title and Description */}
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>
              {t("titleAbout")}
            </h2>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                {t("descriptionAbout")}
              </p>
              <p className={styles.descriptionSecondary}>
                {t("descriptionAbout2")}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Icons Section - Below everything */}
      <div className={styles.featuresGrid}>
        {aboutIconData.map(
          ({ icon, width, height, label, description }, index) => (
            <div 
              key={`feature-${index}`}
              className={styles.featureCard}
            >
              <AboutIcon
                icon={icon}
                width={width}
                height={height}
                label={label}
                description={description}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
