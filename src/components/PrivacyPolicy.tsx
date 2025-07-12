import React from "react";
import { useTranslation } from "next-export-i18n";

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("privacyPolicy")}</h1>
            <p>
                {t("privacyPolicyText")}
            </p>
        </div>
    );
};