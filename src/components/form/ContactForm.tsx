"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Script from "next/script";

type Props = {
  innerPage?: boolean;
};

const ContactForm = ({ innerPage }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;

    const executeRecaptchaAndSubmit = () => {
      const grecaptcha = (window as any).grecaptcha;
      if (grecaptcha) {
        grecaptcha.ready(function() {
          grecaptcha.execute('6LdVdJwtAAAAAFeZXWAOb7VbQaglKh5bcYOPpbPy', {action: 'submit'}).then(async function(token: string) {
            
            // Asigna el token al input oculto
            const recaptchaInput = document.getElementById('g-recaptcha-response') as HTMLInputElement;
            if (recaptchaInput) {
               recaptchaInput.value = token;
            }

            const formData = new FormData(form);
            // Asegura que el token vaya en formData para Formspree
            formData.set("g-recaptcha-response", token);

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
          });
        });
      } else {
        toast.error("Error cargando reCAPTCHA. Refresca la página.");
        setIsSubmitting(false);
      }
    };

    executeRecaptchaAndSubmit();
  };

  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js?render=6LdVdJwtAAAAAFeZXWAOb7VbQaglKh5bcYOPpbPy" strategy="lazyOnload" />
      <form
        onSubmit={handleSubmit}
        className={`rv-2-contact__form ${
          innerPage ? "rv-inner-contact__form" : ""
        }`}
      >
        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
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
    </>
  );
};

export default ContactForm;
