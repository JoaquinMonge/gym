import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../hooks/UserContext";

import "./login.css";

export const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [vacio, setVacio] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.length === 0 || contraseña.length === 0) {
      console.log("error");
      setError(true);
      return;
    }

    if (usuario === "mento" && contraseña === "mento") {
      console.log("Bienvenido");
      console.log("Usuario:", usuario);
      console.log("Contraseña:", contraseña);
      setError(false);
      setContraseña("");
      setUsuario("");
      setVacio(false);
      login(); // Actualiza el estado del contexto a true
      navigate("/inicio");
    } else {
      console.log("Usuario o contraseña incorrecto");
      setError(false);
      setVacio(true);
    }
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <div className="usuario">
          <label>Usuario</label>
          <input type="text" value={usuario} onChange={handleUsuarioChange} />
        </div>
        <div className="pwd">
          <label>Contraseña</label>
          <input
            type="password"
            value={contraseña}
            onChange={handleContraseñaChange}
          />
        </div>
        {vacio ? <p className="error">Usuario o contraseña incorrecto</p> : ""}
        {error ? <p className="error">Ningún campo puede quedar vacío</p> : ""}

        <button className="btnSesi" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
