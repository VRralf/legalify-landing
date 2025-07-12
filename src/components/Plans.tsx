import React, { useEffect } from "react";
import { useTranslation } from "next-export-i18n";
import styles from "@/styles/components/Plans.module.css";

const Plans = () => {

  useEffect(() => {
    if (!localStorage.getItem("hasRedirected")) {
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          const ip = data.ip;
          fetch(`https://ipapi.co/${ip}/json/`)
            .then((response) => response.json())
            .then((data) => {
              let url;
              switch (data.country_name) {
                case "Argentina":
                  url = "https://www.legalify.app/";
                  break;
                case "Spain":
                  url = "https://www.legalify.app/?lang=es";
                  break;
                case "United States":
                  url = "https://www.legalify.app/?lang=en";
                  break;
                case "Italy":
                  url = "https://www.legalify.app/?lang=it";
                  break;
                case "Mexico":
                  url = "https://www.legalify.app/?lang=mx";
                  break;
                default:
                  url = "https://www.legalify.app/";
              }
              window.location.href = url;
              localStorage.setItem("hasRedirected", "true");
            });
        });
    }
  }, []);

  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 
          id="payment"
          className={`${styles.title} text-4xl lg:text-5xl xl:text-6xl font-bold mb-8`}
        >
          {t("plansClientTitle")}
        </h2>
      </div>

      {/* Plans Grid */}
      <div className={`${styles.grid} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8`}>
        
        {/* Standard Plan */}
        <div className={styles.card}>
          <div className={`${styles.header} ${styles.headerStandard}`}>
            <h3 className={styles.planTitle}>
              {t("clientStandardTitle")}
            </h3>
          </div>
          
          <div className={styles.priceSection}>
            <div className={styles.price}>
              {t("clientFreeTitle")}
            </div>
          </div>

          <div className={styles.category}>
            <h4 className={styles.categoryTitle}>
              {t("layersTitle")}
            </h4>
          </div>

          <ul className={styles.features}>
            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientMeetDescription")}</span>
            </li>

            <li className={`${styles.feature} ${styles.featureExcluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCross}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.featureText}>{t("clientMeetDescription2")}</span>
            </li>
            
            <li className={`${styles.feature} ${styles.featureExcluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCross}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.featureText}>{t("clientEmergDescription5")}</span>
            </li>
            
            <li className={`${styles.feature} ${styles.featureExcluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCross}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.featureText}>{t("clientEmergDescription4")}</span>
            </li>
          </ul>

          <div className={styles.disclaimer}>
            ***{t("plansDisclaimer2")}
          </div>

          <div className={styles.cta}>
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className={styles.button}>
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>

        {/* Meeting Plan - Recommended */}
        <div className={`${styles.card} ${styles.cardRecommended}`}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>{t("clientRecommended")}</span>
          </div>
          
          <div className={`${styles.header} ${styles.headerRecommended}`}>
            <h3 className={styles.planTitle}>
              {t("clientMeetTitle")}
            </h3>
          </div>
          
          <div className={styles.priceSection}>
            <div className={styles.priceDynamic}>
              {t("planMeeting")}
            </div>
          </div>

          <ul className={styles.features}>
            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientMeetDescription")}</span>
            </li>

            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientMeetDescription2")}</span>
            </li>
            
            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientEmergDescription5")}</span>
            </li>
            
            <li className={`${styles.feature} ${styles.featureExcluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCross}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className={styles.featureText}>{t("clientEmergDescription4")}</span>
            </li>
          </ul>

          <div className={styles.cta}>
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className={`${styles.button} ${styles.buttonRecommended}`}>
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>

        {/* Emergency Plan */}
        <div className={styles.card}>
          <div className={`${styles.header} ${styles.headerEmergency}`}>
            <h3 className={styles.planTitle}>
              {t("clientEmergTitle")}
            </h3>
          </div>
          
          <div className={styles.priceSection}>
            <div className={styles.priceDynamic}>
              {t("paymentEmer")}
            </div>
          </div>

          <ul className={styles.features}>
            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientMeetDescription")}</span>
            </li>

            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientMeetDescription2")}</span>
            </li>
            
            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientEmergDescription5")}</span>
            </li>
            
            <li className={`${styles.feature} ${styles.featureIncluded}`}>
              <div className={`${styles.featureIcon} ${styles.featureIconCheck}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span className={styles.featureText}>{t("clientEmergDescription4")}</span>
            </li>
          </ul>

          <div className={styles.cta}>
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className={`${styles.button} ${styles.buttonEmergency}`}>
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Plans Footer */}
      <div className={`${styles.footer} text-center mt-8`}>
        <p className={styles.disclaimerMain}>
          {t("plansIva")}
        </p>
        <p className={styles.disclaimerSecondary}>
          {t("plansDisclaimer")}
        </p>
      </div>
    </div>
  );
};

export default Plans;
