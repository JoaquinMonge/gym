import React from "react";
import "./acerca.css";

import espalda from "../../assets/espalda.jpeg";
import frente from "../../assets/frente.jpeg";
import { useNavigate } from "react-router-dom";
export const AcercaDe = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/login");
  };
  return (
    <div className="acercaDE">
      <button onClick={handleMenuClick}>Volver al menu</button>
      <h1>Alberto Castro Porras </h1>
      <h3>IFBB PRO</h3>

      <p>
        Graduado de educacion fisica en la Universidad de Costa Rica. Obtuvo la
        PRO Card en el 2022.
      </p>

      <img className="frente" src={frente} alt="" />
      <img className="frente" src={espalda} alt="" />
    </div>
  );
};
