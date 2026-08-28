"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  innerPage?: boolean;
};

const ContactForm = ({ innerPage }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Limpia el formulario al montar por si el navegador autocompleta tras regresar
    if (formRef.current) {
      formRef.current.reset();
    }

    // Limpia el formulario si se restaura desde la caché (bfcache) al usar el botón Atrás
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted && formRef.current) {
        formRef.current.reset();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return (
    <form
      ref={formRef}
      action="https://formspree.io/f/mnpqqavb"
      method="POST"
      className={`rv-2-contact__form ${
        innerPage ? "rv-inner-contact__form" : ""
      }`}
    >
      <div className="row">
        <div className="col-sm-6">
          <input
            type="text"
            id="rv-2-contact-name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            type="email"
            id="rv-2-contact-email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-12">
          <textarea
            id="rv-2-contact-message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit">Enviar mensaje</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
