import React, { useEffect } from "react";
import { useTranslation } from "next-export-i18n";

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
    <div className="plans-section-container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 
          id="payment"
          className="plans-section-title text-4xl lg:text-5xl xl:text-6xl font-bold mb-8"
        >
          {t("plansClientTitle")}
        </h2>
      </div>

      {/* Plans Grid */}
      <div className="plans-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
        
        {/* Standard Plan */}
        <div className="plan-card plan-card-standard">
          <div className="plan-header plan-header-standard">
            <h3 className="plan-title">
              {t("clientStandardTitle")}
            </h3>
          </div>
          
          <div className="plan-price-section">
            <div className="plan-price">
              {t("clientFreeTitle")}
            </div>
          </div>

          <div className="plan-category">
            <h4 className="plan-category-title">
              {t("layersTitle")}
            </h4>
          </div>

          <ul className="plan-features">
            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientMeetDescription")}</span>
            </li>

            <li className="plan-feature plan-feature-excluded">
              <div className="plan-feature-icon plan-feature-icon-cross">
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
              <span className="plan-feature-text">{t("clientMeetDescription2")}</span>
            </li>
            
            <li className="plan-feature plan-feature-excluded">
              <div className="plan-feature-icon plan-feature-icon-cross">
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
              <span className="plan-feature-text">{t("clientEmergDescription5")}</span>
            </li>
            
            <li className="plan-feature plan-feature-excluded">
              <div className="plan-feature-icon plan-feature-icon-cross">
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
              <span className="plan-feature-text">{t("clientEmergDescription4")}</span>
            </li>
          </ul>

          <div className="plan-disclaimer">
            ***{t("plansDisclaimer2")}
          </div>

          <div className="plan-cta">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className="plan-button plan-button-standard">
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>

        {/* Meeting Plan - Recommended */}
        <div className="plan-card plan-card-recommended">
          <div className="plan-badge">
            <span className="plan-badge-text">{t("clientRecommended")}</span>
          </div>
          
          <div className="plan-header plan-header-recommended">
            <h3 className="plan-title">
              {t("clientMeetTitle")}
            </h3>
          </div>
          
          <div className="plan-price-section">
            <div className="plan-price-dynamic">
              {t("planMeeting")}
            </div>
          </div>

          <ul className="plan-features">
            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientMeetDescription")}</span>
            </li>

            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientMeetDescription2")}</span>
            </li>
            
            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientEmergDescription5")}</span>
            </li>
            
            <li className="plan-feature plan-feature-excluded">
              <div className="plan-feature-icon plan-feature-icon-cross">
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
              <span className="plan-feature-text">{t("clientEmergDescription4")}</span>
            </li>
          </ul>

          <div className="plan-cta">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className="plan-button plan-button-recommended">
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>

        {/* Emergency Plan */}
        <div className="plan-card plan-card-emergency">
          <div className="plan-header plan-header-emergency">
            <h3 className="plan-title">
              {t("clientEmergTitle")}
            </h3>
          </div>
          
          <div className="plan-price-section">
            <div className="plan-price-dynamic">
              {t("paymentEmer")}
            </div>
          </div>

          <ul className="plan-features">
            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientMeetDescription")}</span>
            </li>

            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientMeetDescription2")}</span>
            </li>
            
            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientEmergDescription5")}</span>
            </li>
            
            <li className="plan-feature plan-feature-included">
              <div className="plan-feature-icon plan-feature-icon-check">
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
              <span className="plan-feature-text">{t("clientEmergDescription4")}</span>
            </li>
          </ul>

          <div className="plan-cta">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/registro-cliente"}>
              <button className="plan-button plan-button-emergency">
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Plans Footer */}
      <div className="plans-footer text-center mt-8">
        <p className="plans-disclaimer-main">
          {t("plansIva")}
        </p>
        <p className="plans-disclaimer-secondary">
          {t("plansDisclaimer")}
        </p>
      </div>
    </div>
  );
};

export default Plans;
