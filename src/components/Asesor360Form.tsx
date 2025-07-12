import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Logger } from "../utils/Logger";

function Asesor360Form() {
  const [emailSent, setEmailSent] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const serviceId = "service_7l8gafp";
    const templateId = "template_34ytvn6";
    const apiKey = "eci-tX5G--tBDlIEb";

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, apiKey)
        .then((result) => {
          Logger.log(result.text);
          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 5000);
        })
        .catch((error) => Logger.error(error));
    }
  };

  return (
    <div className="section flex flex-col items-center border-b border-legalify-primary py-5">
      <h2 className="text-2xl mb-3 text-legalify-primary font-semibold text-center">
        Si quieres saber más, ponte en contacto con nosotros con este formulario
      </h2>
      <form
        className="w-full md:w-1/2 px-5"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </label>
        <label className="block mb-2">
          Empresa:
          <input
            type="text"
            name="company"
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </label>
        <label className="block mb-2">
          Mensaje:
          <textarea
            name="message"
            className="w-full h-32 border border-gray-300 rounded p-2 mt-1"
          />
        </label>
        <button
          type="submit"
          className="block w-full bg-blue-500 text-white rounded p-2 mt-3 transform transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
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
  );
}

export default Asesor360Form;
