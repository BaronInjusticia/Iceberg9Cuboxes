/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Section02.scss";

import billing from "./billing.png";
import shipping from "./shipping.png";
import time from "./time.png";

function Section02() {
  return (
    <div className="container">
      <div className="content-section02">
        <div className="content-text">
          <img src={time} />
          <p>
            <strong>Ahorra Tiempo</strong> al gestionar todas tus suscripciones
            en un solo lugar. Deja que el menu simplificado de Cuboxes haga el
            trabajo duro por ti.
          </p>
        </div>

        <div className="content-text">
          <img src={billing} />
          <p>
            <strong>Un solo</strong> cargo al pagar en Cuboxes todas tus
            suscripciones se aplican en un solo cargo, no mas suscribciones
            duplicadas ni olvidadas.
          </p>
        </div>

        <div className="content-text">
          <img src={shipping} />
          <p>
            <strong>Paga un</strong> solo envío al hacer tus suscripciones con
            Cuboxes, puedes hacer que todas te lleguen al mismo tiempo, evitando
            pagar envíos adicionales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section02;
