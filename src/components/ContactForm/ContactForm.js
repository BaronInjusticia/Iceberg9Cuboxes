import React, { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    tel: ""
  });

  function handleOnChange(name) {
    return function(e) {
      setFormValues({
        ...formValues,
        [name]: e.target.value
      });
    };
  }

  function onSubmit(e) {
    e.preventDefault();

    console.log({ ...formValues });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="subtitle">
        <p>
          Llena el siguiente formulario y en breve un agente se pondrá en
          contacto.
        </p>
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          onChange={handleOnChange("email")}
          value={formValues.email}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="exampleInputName"
          placeholder="Nombre"
          value={formValues.name}
          onChange={handleOnChange("name")}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="exampleInputTel"
          placeholder="Telefono"
          onChange={handleOnChange("tel")}
          value={formValues.tel}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Envíar solicitud
      </button>
    </form>
  );
};

export default ContactForm;
