import React from "react";
import { createPortal } from "react-dom";
import Colegioform from "../components/Colegioform";
import { useModal } from "./ModalContext";
import { getAssetPath } from "../utils/assetPath";
import styles from "../styles/components/ColegioAbo.module.css";

function ColegioAbo() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.imageContainer} onClick={openModal}>
              <img
                id="colegioAbo"
                src={getAssetPath("colegio1.png")}
                alt="Promoción para matriculados del Colegio Público de Abogados de la Capital Federal"
                width={700}
                height={700}
                className={styles.image}
              />
              <div className={styles.clickIndicator}>
                Ver detalles
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isModalOpen && createPortal(
        <>
          <div className={styles.modalBackdrop} onClick={closeModal} />
          <div className={styles.modal} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal} aria-label="Cerrar modal">
                ×
              </button>
              <Colegioform onClose={closeModal} />
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

export default ColegioAbo;
