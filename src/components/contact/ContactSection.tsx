import React from "react";
import ContactForm from "../form/ContactForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  innerPage?: boolean;
};
const ContactSection = ({ innerPage }: Props) => {
  return (
    <section
      className={`rv-2-contact ${
        innerPage ? "rv-inner-contact rv-section-spacing" : ""
      }`}
      id="contact"
    >
      <div className="container">
        {innerPage ? (
          <DivAnimateYAxis className="d-flex justify-content-center flex-wrap gap-4 mb-5">
            <div className="rv-5-about__call rv-6-about__call rv-14-about__call">
              <span className="rv-5-about__call-icon">
                <i className="fa-solid fa-phone"></i>
              </span>
              <div className="rv-5-about__call-txt">
                <h6 style={{ fontSize: '14px', marginBottom: '2px', color: 'var(--rv-color-text)' }}>Teléfono</h6>
                <a href="tel:+5491127135053" className="">
                  (+54) 9 11 2713-5053
                </a>
              </div>
            </div>

            <div className="rv-5-about__call rv-6-about__call rv-14-about__call">
              <span className="rv-5-about__call-icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <div className="rv-5-about__call-txt">
                <h6 style={{ fontSize: '14px', marginBottom: '2px', color: 'var(--rv-color-text)' }}>Email</h6>
                <a href="mailto:infoestudiosapp@gmail.com" className="">
                  infoestudiosapp@gmail.com
                </a>
              </div>
            </div>
          </DivAnimateYAxis>
        ) : (
          <h2 className="rv-2-section-title rv-text-anime text-center">
            Ready to bring your ideas to life? I'm here to help.
          </h2>
        )}

        <div className="row gy-3 gy-sm-4 justify-content-center mt-4">
          <DivAnimateXAxis position={-60} className="col-xxl-8 col-lg-10">
            <div
              className={`rv-2-contact__txt ${
                innerPage ? "rv-inner-contact__txt" : ""
              }`}
            >
              <h3 className="rv-2-contact-form-title text-center">Hablemos de tu proyecto.</h3>

              <ContactForm innerPage={innerPage ? true : false} />
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
