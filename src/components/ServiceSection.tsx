import React from "react";
import Image from "next/image";
import { Rounded } from "./Rounded";
import { useTranslation } from "next-export-i18n";
import styles from "../styles/components/ServiceSection.module.css";

export const ServiceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} id="service">
      {/* Modern Section Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          {t("serviceTitle")}
        </h2>
      </div>
      
      {/* Modern Services Grid */}
      <div className={styles.grid}>
        {/* Service Item 1 */}
        <div className={`${styles.card} group`}>
          <div className={styles.cardContent}>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image 
                  src="/component02.svg" 
                  alt="Component illustration" 
                  width={120} 
                  height={120}
                  priority
                  className={styles.serviceImage}
                />
                <Image 
                  src="/component05.svg" 
                  alt="Component illustration" 
                  width={120} 
                  height={120}
                  priority
                  className={styles.serviceImage}
                />
              </div>
            </div>
            <div className={styles.contentSection}>
              <div className={styles.cardHeader}>
                <Rounded label="1" />
                <div className={styles.textContent}>
                  <p className={styles.description}>
                    {t("serviceItem1")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 2 */}
        <div className={`${styles.card} group`}>
          <div className={styles.cardContent}>
            <div className={styles.imageSection}>
              <Image 
                src="/scenes08.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.contentSection}>
              <div className={styles.cardHeader}>
                <Rounded label="2" />
                <div className={styles.textContent}>
                  <p className={styles.description}>
                    {t("serviceItem2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 3 - Full Width */}
        <div className={`${styles.card} ${styles.cardFullWidth} group`}>
          <div className={styles.cardContent}>
            <div className={styles.imageSection}>
              <Image 
                src="/scenes05.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.contentSection}>
              <div className={styles.cardHeader}>
                <Rounded label="3" />
                <div className={styles.textContent}>
                  <p className={styles.description}>
                    <span className={styles.descriptionBlock}>{t("serviceItem3_1")}</span>
                    <span className={styles.descriptionBlock}>{t("serviceItem3_2")}</span>
                    <span className={styles.descriptionBlock}>{t("serviceItem3_3")}</span>
                    <span className={styles.descriptionBlock}>{t("serviceItem3_4")}</span>
                    <span className={styles.descriptionBlock}>{t("serviceItem3_5")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 4 */}
        <div className={`${styles.card} group`}>
          <div className={styles.cardContent}>
            <div className={styles.imageSection}>
              <Image 
                src="/scenes04.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.contentSection}>
              <div className={styles.cardHeader}>
                <Rounded label="4" />
                <div className={styles.textContent}>
                  <p className={styles.description}>
                    {t("serviceItem4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Item 5 */}
        <div className={`${styles.card} group`}>
          <div className={styles.cardContent}>
            <div className={styles.imageSection}>
              <Image 
                src="/scenes03.svg" 
                alt="Service illustration" 
                width={120} 
                height={120}
                priority
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.contentSection}>
              <div className={styles.cardHeader}>
                <Rounded label="5" />
                <div className={styles.textContent}>
                  <p className={styles.description}>
                    {t("serviceItem5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
