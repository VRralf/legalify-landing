import React, { useEffect, useState } from "react";
import { useTranslation } from "next-export-i18n";
import styles from "@/styles/components/PlansAbogados.module.css";

import { IPlanCicloPlanAmount, getPlanInfos, getPCPASafeMX } from "../services/PlanInfoService"
import { Logger } from "../utils/Logger";

const PlansAbogados = () => {
  const { t } = useTranslation();
  const [planInfos, setPlanInfos] = useState<IPlanCicloPlanAmount>({});

  useEffect(() => {
    doLoadPlanInfo();
  }, []);

  function doLoadPlanInfo(): void {
    getPlanInfos([]).then(resp => {
      setPlanInfos(resp);
      Logger.log("[getPlanInfos] Data obtenida: ", resp);
    });
  }

  return (
    <div className={styles.container}>
      {/* Title Section */}
      <div className={styles.titleSection}>
        <h2 className={styles.title}>
          {t("abogadoTitle")}
        </h2>
      </div>

      {/* Plans Grid */}
      <div className={styles.grid}>
        {/* Premium Plan */}
        <div className={`${styles.card} ${styles.cardPremium}`}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeText}>
              {t("clientRecommended")}
            </span>
          </div>

          {/* Header */}
          <div className={`${styles.header} ${styles.headerPremium}`}>
            <h3 className={styles.planTitle}>
              {getPCPASafeMX(5, 1, "planNombre", "Premium", planInfos)}
            </h3>
          </div>

          {/* Features */}
          <div className={styles.content}>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("paymentTitleDescription")}
                </span>
              </li>

              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("paymentMens")}<br/>
                  {t("paymentAnu")}
                </span>
              </li>

              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("premiumSpeciaty")}<br/>
                  {t("premiumJurisdict")}
                </span>
              </li>

              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("paymentReun")}<br/>
                  {t("paymentEmer")}
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/redes?rol=2"}>
              <button className={`${styles.button} ${styles.buttonPremium}`}>
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>

        {/* Corporate Plan */}
        <div className={styles.card}>
          {/* Header */}
          <div className={`${styles.header} ${styles.headerStandard}`}>
            <h3 className={styles.planTitle}>
              {getPCPASafeMX(6, 1, "planNombre", t("corporateTitle"), planInfos)}
            </h3>
          </div>

          {/* Features */}
          <div className={styles.content}>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("paymentTitleDescription")}
                </span>
              </li>

              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("paymentMens")}<br/>
                  {t("paymentAnu")}
                </span>
              </li>

              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("corporateSpeciaty")}<br/>
                  {t("corporateJurisdict")}
                </span>
              </li>

              <li className={styles.feature}>
                <div className={styles.featureIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className={styles.featureText}>
                  {t("paymentReun")}<br/>
                  {t("paymentEmer")}
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/redes?rol=2"}>
              <button className={styles.button}>
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAbogados;
