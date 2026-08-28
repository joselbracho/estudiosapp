"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  innerPage?: boolean;
};

const ContactForm = ({ innerPage }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnpqqavb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado con éxito!");
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error: any) => error.message).join(", "));
        } else {
          toast.error("Hubo un problema al enviar el formulario.");
        }
      }
    } catch (error) {
      toast.error("Ocurrió un error inesperado. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
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
            disabled={isSubmitting}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="email"
            id="rv-2-contact-email"
            name="email"
            placeholder="Email"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="col-12">
          <textarea
            id="rv-2-contact-message"
            name="message"
            placeholder="Message"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
