"use client";
import React from "react";

type Props = {
  innerPage?: boolean;
};

const ContactForm = ({ innerPage }: Props) => {
  return (
    <form
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
