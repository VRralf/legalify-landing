import React from "react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
interface Props {
  open: boolean;
  onClose: Function;
}

export const Modal: React.FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  if (!open) {
    return <></>;
  }

  return (
    <div
      className={`fixed block inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20 outline-none focus:outline-none`}
      onClick={() => onClose()}
    >
      <div className="p-[12vh] bg-[rgb(15 23 42/.8)] fixed top-0 left-0 flex flex-col w-full h-[100vh]">
        <div className="bg-white w-full max-w-6xl m-auto flex-col flex rounded-lg">
          <table className="table-auto border-collapse rounded-lg border-slate-500">
            <thead>
              <tr className="text-xs font-bold">
                <th className="py-2.5 px-2">Plan</th>
                <th className="py-2.5 px-2">{t("modalSpecialty")}</th>
                <th className="py-2.5 px-2">{t("modalJurisdiction")}</th>
                <th className="py-2.5 px-2">{t("paymentReun")}</th>
                <th className="py-2.5 px-2">{t("paymentEmer")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xs">
                <td className="border border-l-0 py-2.5 px-2">
                  {t("modalDetails")}
                </td>
                <td className="border py-2.5 px-2">
                  {t("modalDetailsDescription")}
                  <br />
                  {t("modalDetailsExample")}
                </td>
                <td className="border py-2.5 px-2">{t("modalDetails2")}</td>
                <td className="border py-2.5 px-2">
                  {t("modalDetailsDescription2")}
                </td>
                <td className="border border-r-0 py-2.5 px-2">
                  {t("modalDetailsDescription3")}
                </td>
              </tr>
              <tr className="text-xs">
                <td className="border border-l-0 py-2.5 px-2">Standard</td>
                <td className="border py-2.5 px-2 text-center">1</td>
                <td className="border py-2.5 px-2 text-center">1</td>
                <td className="border py-2.5 px-2 font-bold text-center">X</td>
                <td className="border border-r-0 py-2.5 px-2 font-bold text-center">
                  X
                </td>
              </tr>
              <tr className="text-xs">
                <td className="border border-l-0 py-2.5 px-2">Premium</td>
                <td className="border py-2.5 px-2 text-center">3</td>
                <td className="border py-2.5 px-2 text-center">2</td>
                <td className="border py-2.5 px-2 text-center">✔️</td>
                <td className="border border-r-0 py-2.5 px-2 text-center">
                  ✔️
                </td>
              </tr>
              <tr className="text-xs">
                <td className="border-r-1 py-2.5 px-2">
                  {t("corporateTitle")}
                </td>
                <td className="border py-2.5 px-2 text-center">
                  {t("modalLimit")}
                </td>
                <td className="border py-2.5 px-2 text-center">
                  {t("modalLimit")}
                </td>
                <td className="border py-2.5 px-2 text-center">✔️</td>
                <td className="py-2.5 px-2 text-center">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
