import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Logger } from "../utils/Logger";
import styles from "../styles/components/Colegioform.module.css";

interface ColegioformProps {
  onClose?: () => void;
}

function Colegioform({ onClose }: ColegioformProps) {
  const [emailSent, setEmailSent] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        window.location.href = "http://www.legalify.app";
      }, 5000);
      return () => clearTimeout(timer);
    }
    return; // Explicit return for when emailSent is false
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
    <div className={styles.container}>
      <h2 className={styles.title}>
        Completa estos datos para obtener la promoción
      </h2>

      <div className={styles.section}>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className={styles.form}
        >
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Nombre"
              required
              aria-label="Nombre"
            />
            <input
              type="text"
              name="apellido"
              className={styles.input}
              placeholder="Apellido"
              required
              aria-label="Apellido"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="tel"
              name="telefono"
              className={styles.input}
              placeholder="Teléfono"
              required
              aria-label="Teléfono"
            />
            <input
              type="email"
              name="mail"
              className={styles.input}
              placeholder="Email"
              required
              aria-label="Email"
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="tomo"
              className={styles.input}
              placeholder="Tomo"
              required
              aria-label="Tomo"
            />
            <input
              type="text"
              name="folio"
              className={styles.input}
              placeholder="Folio"
              required
              aria-label="Folio"
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={emailSent}
            aria-label="Enviar formulario"
          >
            <span>{emailSent ? "Enviado" : "Enviar"}</span>
          </button>
          {emailSent && (
            <div className={styles.successMessage} role="alert">
              ¡Mensaje enviado con éxito! Serás redirigido en unos segundos...
            </div>
          )}
          {onClose && (
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Cerrar modal"
            >
              <span>Cerrar</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Colegioform;
