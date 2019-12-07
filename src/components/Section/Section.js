/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Section.scss";

import image from "./image.png";

function Section() {
  return (
    <div className="container">
      <div className="content-section">
        <div className="content-text-left">
          <h3>
            Todas tus <br /> Suscripciones
            <br /> en una sola Caja
          </h3>
          <p>
            Administra todas tus suscripciones desde <br /> un solo lugar y paga
            solo un envío por <br />
            todas.
          </p>
          <div className="botton-name">
            <button class="btn btn-primary">Quiero saber más</button>
          </div>
        </div>
        <div className="content-image">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default Section;
