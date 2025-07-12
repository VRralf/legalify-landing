import React from "react";
import { Prices } from "./PaymentSection";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

interface Props {
  price: Prices;
  type: string;
}

export const PaymentCard: React.FC<Props> = ({ price, type }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const {
    title,
    monthly,
    quarterly,
    annual,
    specialty,
    jurisdiction,
    description,
    currencyMonthly,
    currencyYear,
  } = price;

  return (
    <div className="flex flex-col items-center p-2 py-10 lg:w-[20rem] h-[40rem] border-solid border-[1px] rounded border-legalify-border cursor-pointer">
      <div>
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div className="flex items-center m-8">
        <div className="ml-2 flex flex-col content-center">
          <p className="text-xl font-bold">
            {currencyMonthly ? currencyMonthly : "$"}
          </p>
        </div>
        <p className="text-6xl font-black">{monthly}</p>
      </div>
      <p className="iva">{t("paymentTitle")}</p>
      {type === "lawyer" ? (
        <>
          <div className="m-3">
            <p>{t("paymentTitleDescription")}</p>
          </div>
          <div className="m-3">
            <p className="font-medium">
              {t("paymentMens")} {currencyMonthly ? currencyMonthly : "$"}{" "}
              {monthly}
            </p>
          </div>
          {quarterly && (
            <div className="m-3">
              <p className="font-medium">
                {t("paymentTrim")} ${quarterly}
              </p>
            </div>
          )}
          {currencyYear && (
            <div className="m-3">
              <p className="font-medium">
                {t("paymentAnu")} {currencyYear ? currencyYear : "$"} {annual}
              </p>
            </div>
          )}
          <div className="m-3">
            <p>{specialty}</p>
          </div>
          <div className="m-3">
            <p>{jurisdiction}</p>
          </div>
          {title !== "Standard" && (
            <>
              <div className="m-3">
                <p>{t("paymentReun")}</p>
              </div>
              <div className="m-3">
                <p>{t("paymentEmer")}</p>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="m-3">{description}</div>
      )}
    </div>
  );
};
