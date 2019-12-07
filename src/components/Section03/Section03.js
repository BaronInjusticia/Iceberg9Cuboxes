/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Section03.scss";

import Modal from "../Modal";
import ContactForm from "../ContactForm";

import image from "./image.png";

export default function Section03() {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="container">
      <div className="admin-botton">
        <button type="submit" class="btn btn-primary" onClick={openModal}>
          Quiero aplicar para ser un Cuboxer
        </button>
        <Modal title="Quiero ser Cuboxer" open={modalOpen} onClose={closeModal}>
          <ContactForm />
        </Modal>
      </div>
      <div className="content-section03">
        <div className="content-image">
          <img src={image} />
        </div>
        <div className="content-text">
          <h3>Invierte tu tiempo en cosas más importantes</h3>
          <p>
            Administra todas tus suscripciones desde un solo lugar y paga solo
            un envío por todas.
          </p>
        </div>
      </div>
    </div>
  );
}
