/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.scss";

import Modal from "../Modal";
import ContactForm from "../ContactForm";

import logo from "./logo.png";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="content-nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>

          <div className="collapse navbar-collapse content-navs" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Características <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Precios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Soporte
                </a>
              </li>
              <li className="nav-item">
                <button
                  onClick={openModal}
                  type="submit"
                  class="btn btn-primary"
                >
                  Quiero ser Cuboxer
                </button>
              </li>

              <Modal
                title="Quiero ser Cuboxer"
                open={modalOpen}
                onClose={closeModal}
              >
                <ContactForm />
              </Modal>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
