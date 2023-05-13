import React from "react";
import "./contacto.css";
export const Contacto = () => {
  return (
    <div className="contacto">
      <form className="form">
        <div className="usuario">
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div className="pwd">
          <label>Correo</label>
          <input type="text" />
        </div>
        <div className="pwd">
          <label>Telefono</label>
          <input type="text" />
        </div>
        <div className="pwd">
          <label>Mensaje</label>
          <textarea rows="4" style={{ width: "100%" }} />
        </div>

        <button className="btnSesi">Enviar</button>
      </form>
    </div>
  );
};
