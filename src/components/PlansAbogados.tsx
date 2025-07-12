import React, { useEffect, useState } from "react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

import { IPlanCicloPlanAmount, getPlanInfos, getPCPASafe, getPCPASafeMX } from "../services/PlanInfoService"
import { Logger } from "../utils/Logger";

const PlansAbogados = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const [showPlanAbogados, setShowPlanAbogados] = useState(false);
  
  const [planInfos, setPlanInfos] = useState<IPlanCicloPlanAmount>({});

  const handleClick = () => {
    setShowPlanAbogados(!showPlanAbogados);
  };

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
    <div className="lawyers-plans-container">
      {/* Title Section */}
      <div className="lawyers-plans-title-section">
        <h2 className="lawyers-plans-title">
          {t("abogadoTitle")}
        </h2>
      </div>

      {/* Plans Grid */}
      <div className="lawyers-plans-grid">
        {/* Premium Plan */}
        <div className="lawyer-plan-card lawyer-plan-card-premium">
          {/* Badge */}
          <div className="lawyer-plan-badge">
            <span className="lawyer-plan-badge-text">
              {t("clientRecommended")}
            </span>
          </div>

          {/* Header */}
          <div className="lawyer-plan-header lawyer-plan-header-premium">
            <h3 className="lawyer-plan-title">
              {getPCPASafeMX(5, 1, "planNombre", "Premium", planInfos)}
            </h3>
          </div>

          {/* Features */}
          <div className="lawyer-plan-features">
            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("paymentTitleDescription")}
              </span>
            </div>

            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("paymentMens")}<br/>
                {t("paymentAnu")}
              </span>
            </div>

            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("premiumSpeciaty")}<br/>
                {t("premiumJurisdict")}
              </span>
            </div>

            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("paymentReun")}<br/>
                {t("paymentEmer")}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="lawyer-plan-cta">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/redes?rol=2"}>
              <button className="lawyer-plan-button lawyer-plan-button-premium">
                <span>{t("buttonContract")}</span>
              </button>
            </a>
          </div>
        </div>

        {/* Corporate Plan */}
        <div className="lawyer-plan-card lawyer-plan-card-corporate">
          {/* Header */}
          <div className="lawyer-plan-header lawyer-plan-header-corporate">
            <h3 className="lawyer-plan-title">
              {getPCPASafeMX(6, 1, "planNombre", t("corporateTitle"), planInfos)}
            </h3>
          </div>

          {/* Features */}
          <div className="lawyer-plan-features">
            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("paymentTitleDescription")}
              </span>
            </div>

            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("paymentMens")}<br/>
                {t("paymentAnu")}
              </span>
            </div>

            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("corporateSpeciaty")}<br/>
                {t("corporateJurisdict")}
              </span>
            </div>

            <div className="lawyer-plan-feature">
              <div className="lawyer-plan-feature-icon">
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
              <span className="lawyer-plan-feature-text">
                {t("paymentReun")}<br/>
                {t("paymentEmer")}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="lawyer-plan-cta">
            <a href={process.env.NEXT_PUBLIC_URL_APP + "/redes?rol=2"}>
              <button className="lawyer-plan-button lawyer-plan-button-corporate">
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
