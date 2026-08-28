"use client";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useForm, ValidationError } from "@formspree/react";

type Props = {
  innerPage?: boolean;
};

const ContactForm = ({ innerPage }: Props) => {
  const [state, handleSubmit] = useForm("mnpqqavb");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("¡Mensaje enviado con éxito!");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
    // Mostramos error genérico si lo hay
    if (state.errors && state.errors.length > 0) {
      const errorMsg = state.errors.map(err => err.message).join(", ") || "Hubo un problema al enviar el formulario.";
      toast.error(errorMsg);
    }
  }, [state.succeeded, state.errors]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
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
            disabled={state.submitting}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="col-sm-6">
          <input
            type="email"
            id="rv-2-contact-email"
            name="email"
            placeholder="Email"
            required
            disabled={state.submitting}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="col-12">
          <textarea
            id="rv-2-contact-message"
            name="message"
            placeholder="Message"
            required
            disabled={state.submitting}
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className="col-12">
          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
