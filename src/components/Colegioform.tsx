import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Logger } from "../utils/Logger";

function Colegioform() {
  const [emailSent, setEmailSent] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        window.location.href = "http://www.legalify.app";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const serviceId = "service_7l8gafp";
    const templateId = "template_rqhx56a";
    const apiKey = "eci-tX5G--tBDlIEb";

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, apiKey)
        .then((result) => {
          Logger.log(result.text);
          setEmailSent(true);
        })
        .catch((error) => Logger.error(error));
    }
  };

  return (
    <>
      <h2 className="text-2xl mt-3 mb-3 text-legalify-primary font-semibold text-center">
        Completa estos datos para obtener la promoción
      </h2>

      <div className="section flex flex-col items-center border-b border-legalify-primary py-5 justify-center">
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="w-full px-5 grid grid-cols-3 gap-2"
        >
          <div>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              placeholder="Nombre"
            />
            <input
              type="text"
              name="apellido"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              placeholder="Apellido"
            />
          </div>
          <div>
            <input
              type="text"
              name="telefono"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              placeholder="telefono"
            />
            <input
              type="mail"
              name="mail"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="text"
              name="tomo"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              placeholder="Tomo"
            />
            <input
              type="text"
              name="folio"
              className="w-full border border-gray-300 rounded p-2 mt-1"
              placeholder="Folio"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-blue-500 text-white rounded p-2 mt-3 transform transition-transform duration-200 hover:bg-blue-700 hover:scale-105 col-span-3"
          >
            Enviar
          </button>
          {emailSent && (
            <div className="mt-3 p-2 bg-green-500 text-white rounded">
              ¡Mensaje enviado con éxito!
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Colegioform;
