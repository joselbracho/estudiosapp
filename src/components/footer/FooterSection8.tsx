import Link from "next/link";
import React from "react";

const FooterSection8 = () => {
  return (
    <footer className="rv-1-footer rv-6-footer">
      <div className="container">
        <div className="rv-1-footer-top rv-6-footer-top">
          <div className="row gy-4 gy-sm-5 rv-6-footer-top__row">
            <div className="col-lg-4 col-md-8">
              <div className="rv-1-footer__about">
                <Link href="/">
                  <img
                    src="/assets/img/e-studios-app-white.png"
                    alt="Logo"
                    className="logo"
                  />
                </Link>
                <p className="rv-1-footer__about-txt">
                  Soluciones cloud, desarrollo de software e inteligencia artificial aplicada. Buenos Aires, Argentina.
                </p>
                <div className="rv-1-socials">
                  <a href="https://www.facebook.com/estudiosapp" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/estudiosapp" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 offset-lg-1 col-sm-6">
              <div className="rv-1-footer-widget rv-6-footer-widget">
                <h5 className="rv-1-footer-widget__title">Servicios</h5>
                <ul className="rv-6-footer-widget__links">
                  <li>
                    <a href="#">Cloud e infraestructura</a>
                  </li>
                  <li>
                    <a href="#">Desarrollo a medida</a>
                  </li>
                  <li>
                    <a href="#">Inteligencia artificial</a>
                  </li>
                  <li>
                    <a href="#">Automatización e integración</a>
                  </li>
                  <li>
                    <a href="#">Soporte y mantenimiento</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="rv-1-footer-widget rv-6-footer-widget">
                <h5 className="rv-1-footer-widget__title">Enlaces</h5>
                <ul className="rv-6-footer-widget__links">
                  <li>
                    <a href="/#home">Inicio</a>
                  </li>
                  <li>
                    <a href="/#about">Nosotros</a>
                  </li>
                  <li>
                    <a href="/#services">Servicios</a>
                  </li>
                  <li>
                    <a href="/#contact">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-xl-3 col-md-8">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Suscribite al newsletter</h5>
                <form action="#" className="rv-6-footer-nwsltr__form">
                  <div className="nwsltr-top">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Ingresa tu email..."
                    />
                    <button>
                      <i className="fa-light fa-paper-plane"></i>{" "}
                      <span className="txt">Suscribirme</span>
                    </button>
                  </div>
                  <div className="rv-6-footer-nwsltr__checkbox">
                    <input
                      type="checkbox"
                      id="nwsltr-checkbox"
                      name="checkbox"
                      value="1"
                    />
                    <label htmlFor="nwsltr-checkbox">
                      {" "}
                      Acepto la <a href="#">Política de Privacidad</a>.
                    </label>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>

        <div className="rv-2-footer rv-6-footer-bottom">
          <div className="row gy-4 align-items-center">
            <div className="col-md-7">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; 2026 eStudiosapp All Rights Reserved by site
              </p>
            </div>
            <div className="col-md-5">
              <div className="rv-2-footer__nav rv-14-footer-bottom__nav">
                {/* <a href="#">Política de Privacidad</a>
                <a href="#">Términos del Servicio</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection8;
