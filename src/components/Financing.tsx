import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

const Financing = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  function handleContactClick() {
    if (typeof window !== "undefined") {
      // Accedemos al objeto "fbq" del objeto global "window"
      (window as any).fbq("track", "Contact");
    }
  }

  return (
    <div
      className="flex flex-col justify-center mt-3 lg:mt-3 lg:mb-[2rem] lg:m-3"
      id="service"
    >
      <div>
        <h2 className="text-4xl text-legalify-primary font-semibold text-center">
          {t("servicesEmpre")}
        </h2>
      </div>
      <div className="grid-container services">
        <div className="grid-item">
          <h2 className="text-2xl text-legalify-primary font-semibold text-center">
            {t("servicesEmpre1")}
          </h2>
          <Link href="mailto:info@legalify.app?subject=Programa de sistencia a colaboradores">
            <div className="btn-info1" onClick={handleContactClick}>
              <Button label={t("labelInfo")} />
            </div>
          </Link>
        </div>
        <div className="grid-item">
          <h2 className="text-2xl text-legalify-primary font-semibold text-center">
            {t("servicesEmpre2")}
          </h2>
          <Link href="mailto:info@legalify.app?subject=Asesoramiento PYMES">
            <div className="btn-info4" onClick={handleContactClick}>
              <Button label={t("labelInfo")} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Financing;
