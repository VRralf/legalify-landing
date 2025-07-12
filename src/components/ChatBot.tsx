import React, { useState } from "react";

interface Props {}

const PopupButton: React.FC<Props> = () => {
  const [showPopup, setShowPopup] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 10000);
  }, []);

  return (
    <div className="chatContainer">
      <button onClick={() => setShowPopup(!showPopup)} className="button-popup">
        <img src="Flags/telefonista.png" className="imgButton" />
      </button>
      {showPopup && (
        <div className="popUp">
          <button
            onClick={() => setShowPopup(!showPopup)}
            style={{ color: "red", fontWeight: "bold" }}
          >
            X
          </button>
          <h3
            className="textPopup"
            data-desktoptext="Bienvenido a Legalify! Si necesitas información acerca del
            funcionamiento de nuestra plataforma o ayuda con el registro puedes
            contactarte con nuestros asesores por WhatsApp haciendo click aquí"
            data-moviletext="¿ Necesitas ayuda ?"
            style={{ textAlign: "left" }}
          ></h3>
          <div className="whatsapp-center">
            <a
              href="https://api.whatsapp.com/send?phone=5491169820611&text="
              rel="noreferrer"
              target="_blank"
              className="whatsapp-button"
            >
              Ir a WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
