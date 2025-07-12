import React, { useState } from "react";
import Colegioform from "../components/Colegioform";
import { useModal } from "./ModalContext";

function ColegioAbo() {
  const [, setIsOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="containerCol">
      <div className="rowCol">
        <div className="columnCol">
          <img
            id="colegioAbo"
            src="colegio1.png"
            alt="Colegio 1"
            width={700}
            height={700}
            onClick={openModal}
          />
          {isModalOpen && (
            <>
              <div className="fixed inset-0 bg-blur" onClick={closeModal} />
              <div className="modal-backdrop" onClick={closeModal} />
              <div className="modal" onClick={closeModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="close" onClick={closeModal}>
                    ×
                  </span>
                  <Colegioform />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ColegioAbo;
