import React, { useEffect } from "react";
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
  const handleNutricionClick = () => {
    navigate("/nutricion");
  };
  const handleCalendarioClick = () => {
    navigate("/calendario");
  };
  const handlePagosClick = () => {
    navigate("/pagos");
  };
  const handleSuplementosClick = () => {
    navigate("/suplementos");
  };

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/usuarios?limite=5")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Aquí puedes utilizar los datos obtenidos
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       // Manejo de errores
  //       console.error("Error al obtener los datos:", error);
  //     });
  // }, []);

  return (
    <div className="inicio">
      <div className="top">
        <button className="cuadro" onClick={handleRutinasClick}>
          Rutinas
        </button>
        <button className="cuadro" onClick={handleNutricionClick}>
          Nutricion
        </button>
      </div>
      <div className="bottom">
        <button className="cuadro" onClick={handlePagosClick}>
          Pagos
        </button>
        <button className="cuadro" onClick={handleCalendarioClick}>
          Horarios
        </button>
      </div>
      <div className="bottom">
        <button className="cuadro" onClick={handleEjerciciosClick}>
          Ejercicios
        </button>
        <button className="cuadro" onClick={handleSuplementosClick}>
          Suplementos
        </button>
      </div>
    </div>
  );
};
