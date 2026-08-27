"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  msg: string;
};
type Props = {
  innerPage?: boolean;
};
const ContactForm = ({ innerPage }: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Contact info submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rv-2-contact__form ${
        innerPage ? "rv-inner-contact__form" : ""
      }`}
    >
      <div className="row">
        <div className="col-sm-6">
          <input
            type="text"
            id="rv-2-contact-name"
            placeholder="Your Name"
            required
            {...register("name")}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="email"
            id="rv-2-contact-email"
            placeholder="Email"
            required
            {...register("email")}
          />
        </div>
        <div className="col-12">
          <select id="rv-2-contact-subject" required {...register("subject")}>
            <option value="Selects Subject" hidden>
              Select Subject
            </option>
            <option value="Consulta general">Consulta general</option>
            <option value="Proyecto a medida">Proyecto a medida</option>
            <option value="Infraestructura y soporte">Infraestructura y soporte</option>
            <option value="Propuesta de alianza">Propuesta de alianza</option>
          </select>
        </div>
        <div className="col-12">
          <textarea
            id="rv-2-contact-message"
            placeholder="Message"
            required
            {...register("msg")}
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
