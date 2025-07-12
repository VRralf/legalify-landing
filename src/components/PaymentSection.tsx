import React, { useState, useEffect } from "react";
import { PaymentCard } from "./PaymentCard";
import { Modal } from "./Modal";
import { useTranslation } from "next-export-i18n";
import { Logger } from "../utils/Logger";

export interface Prices {
  id?: number;
  title: string;
  monthly: string;
  description?: JSX.Element;
  quarterly?: string;
  annual?: string;
  currencyMonthly?: string;
  currencyYear?: string;
  specialty?: string;
  jurisdiction?: string;
}

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PaymentSection: React.FC<Props> = ({ checked, setChecked }) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const _pricesLawyer: Prices[] = [
    {
      id: 4,
      title: "Standard",
      monthly: "0",
      annual: "0",
      specialty: t("standardSpeciaty"),
      jurisdiction: t("standardJurisdict"),
    },
    {
      id: 5,
      title: "Premium",
      monthly: "1500",
      annual: "15000",
      specialty: t("premiumSpeciaty"),
      jurisdiction: t("premiumJurisdict"),
    },
    {
      id: 6,
      title: t("corporateTitle"),
      monthly: "5000",
      annual: "40000",
      specialty: t("corporateSpeciaty"),
      jurisdiction: t("corporateJurisdict"),
    },
  ];

  const _pricesClient: Prices[] = [
    {
      id: 1,
      title: "Standard",
      monthly: "0",
      description: (
        <div>
          <ul className="list-disc list-outside">
            <li>{t("clientStandardDescription")}</li>
            <li>{t("clientStandardDescription2")}</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: t("clientMeetTitle"),
      monthly: "7000",
      description: (
        <ul className="list-disc list-outside">
          <li>{t("clientMeetDescription")}</li>
          <li>{t("clientMeetDescription2")}</li>
          <li>{t("clientMeetDescription3")}</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: t("clientEmergTitle"),
      monthly: "9000",
      description: (
        <ul className="list-disc list-outside">
          <li>{t("clientEmergDescription1")}</li>
          <li>{t("clientEmergDescription2")}</li>
          <li>{t("clientEmergDescription3")}</li>
          <li>{t("clientEmergDescription4")}</li>
        </ul>
      ),
    },
  ];

  const emptyPrices: Prices[] = [];
  const [pricesLawyer, setPricesLawyer] = useState(emptyPrices);
  const [pricesClient, setPricesClient] = useState(emptyPrices);

  const handleOpen = () => {
    setShowModal(true);
  };

  function toggle(value: boolean) {
    return !value;
  }

  useEffect(() => {
    doPlanUpdatePrice();
  }, []);

  function getPriceById(prices: Prices[], id: number): Prices | null {
    let selPrice: Prices | null = null;

    prices.some((price) => {
      if (price.id == id) {
        selPrice = price;
        return true;
      }
      return false;
    });
    return selPrice;
  }

  function doPlanUpdatePrice(): void {
    let selPrice: Prices | null;
    let planId: number;

    let promise: Promise<string> = new Promise((resolve) => {
      const queryParams = new URLSearchParams(window.location.search);
      const paramPais: string | null = queryParams.get("pais");

      if (paramPais && paramPais != "") {
        Logger.log(`Obtencion del pais por parametro en URL: ${paramPais}`);
        resolve(paramPais);
      } else {
        fetch(`${process.env.NEXT_PUBLIC_URL_APP_API}/multipago/util/json`)
          .then((resp) => resp.json())
          .then((resp) => {
            Logger.log(`consulta IP: ${resp.countryCode}`);
            resolve(resp.countryCode);
          })
          .catch(() => {
            resolve("");
          });
      }
    });

    promise.then((countryCode) => {
      getPlanAmountsCountry2Digits(countryCode).then((resp) => {
        resp.forEach((row) => {
          planId = row.planId;

          if (6 >= planId && planId >= 4) {
            selPrice = getPriceById(_pricesLawyer, planId);
            if (row.ciclo == 1) {
              selPrice!.monthly = row.monto;
              selPrice!.currencyMonthly = row.monedaId;
              selPrice!.currencyMonthly = decodeHtml(`&#${row.monedaSimbolo};`);
            } else {
              selPrice!.annual = row.monto;
              selPrice!.currencyYear = row.monedaId;
              selPrice!.currencyYear = decodeHtml(`&#${row.monedaSimbolo};`);
            }
          } else if (1 <= planId && planId <= 3) {
            selPrice = getPriceById(_pricesClient, planId);

            selPrice!.monthly = row.monto;
            selPrice!.currencyMonthly = row.monedaId;
            selPrice!.currencyMonthly = decodeHtml(`&#${row.monedaSimbolo};`);
          }
        });

        let evalPricesLawyer = cleanNoSelPlanes(_pricesLawyer, [
          "currencyMonthly",
          "currencyYear",
        ]);
        let evalPricesClient = cleanNoSelPlanes(_pricesClient, [
          "currencyMonthly",
        ]);
        setPricesLawyer(evalPricesLawyer);
        setPricesClient(evalPricesClient);
        Logger.log(resp);
      });
    });
  }

  function cleanNoSelPlanes(prices: Prices[], fields: string[]): Prices[] {
    let values: Prices[] = [];

    prices.forEach((value) => {
      let entries = Object.entries(value);

      let valResult = entries.some((entry) => {
        let result = false;
        let [key, val] = entry;

        result = fields.some((field) => {
          if (key == field && val) return true;
          return false;
        });

        return result;
      });
      if (valResult) {
        values.push(value);
      }
    });
    return values;
  }

  function getPlanAmountsCountry2Digits(
    country2Code: string | null
  ): Promise<any[]> {
    const COUNTRY_AR = "AR";
    const promise: Promise<any> = new Promise((resolve) => {
      if (!country2Code) country2Code = COUNTRY_AR;

      let url: string = `${process.env.NEXT_PUBLIC_URL_APP_API}/jurisdiccion/country2Code/${country2Code}`;
      fetch(url)
        .then((response) => {
          Logger.log(response);
          return response.json();
        })
        .then((data) => {
          if (data && data.length > 0) {
            const { id_jurisdiccion } = data[data.length - 1];
            let defaultPlans = getPlanDefaultAmounts(
              -1,
              id_jurisdiccion,
              [2, 3, 4, 5, 6]
            );
            defaultPlans.then((resp) => {
              Logger.log(resp);

              resolve(resp);
            });
          } else if (country2Code != COUNTRY_AR) {
            getPlanAmountsCountry2Digits(COUNTRY_AR).then((rows) => {
              resolve(rows);
            });
          }
          Logger.log(data);
        })
        .catch((err) => {
          Logger.error(err.message);
          resolve([]);
        });
    });

    return promise;
  }

  async function getPlanDefaultAmounts(
    ciclo: number,
    jurisdiccionId: number,
    planIds: number[]
  ) {
    let params: string = "";
    let data: any = null;

    if (ciclo || ciclo === 0) {
      params = appendIfNotEmpty(params);
      params = `${params}ciclo=${ciclo}`;
    }
    if (jurisdiccionId) {
      params = appendIfNotEmpty(params);
      params = `${params}jurisdiccionId=${jurisdiccionId}`;
    }
    if (planIds) {
      planIds.forEach((planId) => {
        params = appendIfNotEmpty(params);
        params = `${params}planIds=${planId}`;
      });
    }

    let url: string = `${process.env.NEXT_PUBLIC_URL_APP_API}/multipago/cliente/plan/defaultamounts?${params}`;
    let response = await fetch(url);
    if (response.status < 400) {
      data = await response.json();
    }
    return data;
  }

  function appendIfNotEmpty(value: string): string {
    if (value) value = value + "&";
    return value;
  }

  function decodeHtml(text: string): string {
    let result;
    let txt = new DOMParser().parseFromString(text, "text/html");
    result = txt.documentElement.textContent;
    if (!result) result = "";
    return result;
  }
  Logger.log(pricesClient);
  Logger.log(pricesLawyer);

  return (
    <div className="flex flex-col m-6 my-12 lg:mb-[12rem]" id="payment">
      <div className="m-8 mt-[5rem] mb-6 flex flex-col justify-center items-center">
        <h2 className="m-6 text-4xl text-legalify-primary font-semibold">
          {t("paymentTitle2")}
        </h2>
        <div className="m-6 flex">
          <div className="m-2">
            <p className="text-legalify-primary font-semibold text-xl">
              {t("paymentType1")}
            </p>
          </div>
          <label
            htmlFor="toggleB"
            className="flex items-center cursor-pointer m-2"
          >
            {/* toggle */}
            <div className="relative">
              {/* input */}
              <input
                type="checkbox"
                id="toggleB"
                className="sr-only"
                checked={checked}
                onChange={() => setChecked(toggle)}
              />
              {/* line */}
              <div className="block bg-white w-14 h-8 rounded-full border-solid border-2 border-legalify-primary"></div>
              {/* dot */}
              <div className="dot absolute left-1 top-1 bg-legalify-primary w-6 h-6 rounded-full transition"></div>
            </div>
          </label>
          <div className="m-2">
            <p className="text-legalify-primary font-semibold text-xl">
              {t("paymentType2")}
            </p>
          </div>
        </div>
      </div>
      {checked ? (
        <div>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {pricesClient.map((price, index) => (
              <div key={index}>
                <PaymentCard price={price} type="client" />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <p className="text-legalify-grey text-xs text-center max-w-screen-lg my-8">
              {t("paymentFooter")}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          {pricesLawyer.map((price, index) => (
            <div key={index} onClick={handleOpen}>
              <PaymentCard price={price} type="lawyer" />
            </div>
          ))}
          <div className="hidden lg:flex">
            <Modal open={showModal} onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};
