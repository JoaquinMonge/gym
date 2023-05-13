import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio.css";

export const Inicio = () => {
  const navigate = useNavigate();

  const handleEjerciciosClick = () => {
    navigate("/busqueda");
  };
  const handleRutinasClick = () => {
    navigate("/rutinas");
  };

  return (
    <div className="inicio">
      <div className="top">
        <button className="cuadro" onClick={handleRutinasClick}>
          Rutinas
        </button>
        <button className="cuadro">Nutricion</button>
      </div>
      <div className="bottom">
        <button className="cuadro">Pagos</button>
        <button className="cuadro">Horarios</button>
      </div>
      <div className="bottom">
        <button className="cuadro" onClick={handleEjerciciosClick}>
          Ejercicios
        </button>
        <button className="cuadro">Otros</button>
      </div>
    </div>
  );
};
