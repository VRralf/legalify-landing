import React from "react";
import { useTranslation } from "next-export-i18n";
import styles from "../styles/components/Modal.module.css";

interface Props {
  open: boolean;
  onClose: Function;
}

export const Modal: React.FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation();

  if (!open) {
    return <></>;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.container} onClick={handleContainerClick}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.headerCell}>Plan</th>
              <th className={styles.headerCell}>{t("modalSpecialty")}</th>
              <th className={styles.headerCell}>{t("modalJurisdiction")}</th>
              <th className={styles.headerCell}>{t("paymentReun")}</th>
              <th className={styles.headerCell}>{t("paymentEmer")}</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.bodyRow}>
              <td className={styles.bodyCell}>
                {t("modalDetails")}
              </td>
              <td className={styles.bodyCell}>
                {t("modalDetailsDescription")}
                <br />
                {t("modalDetailsExample")}
              </td>
              <td className={styles.bodyCell}>{t("modalDetails2")}</td>
              <td className={styles.bodyCell}>
                {t("modalDetailsDescription2")}
              </td>
              <td className={styles.bodyCell}>
                {t("modalDetailsDescription3")}
              </td>
            </tr>
            <tr className={styles.bodyRow}>
              <td className={styles.bodyCell}>Standard</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>1</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>1</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>X</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>X</td>
            </tr>
            <tr className={styles.bodyRow}>
              <td className={styles.bodyCell}>Premium</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>3</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>2</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>✔️</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>✔️</td>
            </tr>
            <tr className={styles.bodyRow}>
              <td className={styles.bodyCell}>
                {t("corporateTitle")}
              </td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>
                {t("modalLimit")}
              </td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>
                {t("modalLimit")}
              </td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>✔️</td>
              <td className={`${styles.bodyCell} ${styles.checkmark}`}>✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
