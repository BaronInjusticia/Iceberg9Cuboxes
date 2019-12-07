/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.scss";

import logo from "./logo.png";
import slack from "./slack.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";

function Footer() {
  return (
    <div className="container-footer">
      <div className="container footer">
        <div className="footer-logo">
          <img src={logo} />
        </div>

        <div className="social-footer">
          <div className="content-footer-social">
            <div className="content-footer">
              <img src={facebook} />

              <img src={twitter} />
              <img src={slack} />
            </div>
          </div>

          <nav className="navbar-footer">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Aviso de privacidad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Soporte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
