import React from "react";
import { useTranslation } from "next-export-i18n";
import Link from "next/link";

const Policies = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-5 text-legalify-primary font-bold">
      <Link href="/tyc">
        <a>
          Términos y condiciones
        </a>
      </Link>

      {" "}
      y{" "}
      <a href={t("cookiePolicy")} target="_blank" rel="noreferrer">
        política de cookies
      </a>
    </div>
  );
};

export default Policies;
