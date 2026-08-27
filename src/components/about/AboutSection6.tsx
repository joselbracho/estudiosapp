import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const AboutSection6 = () => {
  return (
    <section className="rv-14-about rv-section-spacing pt-0" id="about">
      <div className="container">
        <div className="row g-4 align-items-center">
          <DivAnimateYAxis className="col-lg-6 col-md-8 col-10 col-xxs-12">
            <div className="rv-14-about__img">
              <div className="rv-14-about__img-container">
                <img src="/assets/img/logo-black.png" alt="Image" style={{ maxWidth: "70%", margin: "0 auto", display: "block" }} />
              </div>
            </div>
          </DivAnimateYAxis>

          <DivAnimateXAxis className="col-lg-6">
            <div className="rv-6-about__txt rv-14-about__txt">
              <h6 className="rv-14-section__sub-title rv-text-anime">
                Quiénes somos
              </h6>
              <h2 className="rv-7-section__title rv-text-anime">
                Ingeniería aplicada a problemas concretos de negocio.
              </h2>
              <p className="rv-6-about__descr rv-text-anime">
                Somos un estudio argentino de desarrollo e infraestructura. Venimos de la ingeniería de sistemas y del mundo cloud, y esa disciplina es la que aplicamos a cada proyecto: primero medir, después automatizar. Trabajamos con empresas de distintos rubros, con experiencia particular en el sector inmobiliario, donde el tiempo de respuesta define el resultado.
              </p>

              <ul
                className="rv-3-about__features rv-14-about__features"
                data-aos="fade-up"
              >
                <li>Arquitectura e infraestructura cloud</li>
                <li>Desarrollo web y aplicaciones a medida</li>
                <li>Agentes de IA y automatización de procesos</li>
                <li>Integración de sistemas y APIs</li>
                <li>Seguridad, monitoreo y soporte</li>
              </ul>

              <div
                className="rv-5-about__btns rv-14-about__btns"
                data-aos="fade-up"
              >
                <a href="#contact" className="rv-6-def-btn rv-14-about__btn">
                  Conocenos <i className="fa-solid fa-arrow-up-right"></i>
                </a>
                <div className="rv-5-about__call rv-6-about__call rv-14-about__call">
                  <span className="rv-5-about__call-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <div className="rv-5-about__call-txt">
                    <a href="tel:+5491127135053" className="">
                      (+54) 9 11 2713-5053
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default AboutSection6;
