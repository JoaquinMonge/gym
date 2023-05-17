import React from "react";
import { useNavigate } from "react-router-dom";
import "./nutricion.css";

const Nutricion = () => {
  const navigate = useNavigate();
  const handleClickVolver = () => {
    navigate("/inicio");
  };
  return (
    <div className="menu-nutricion">
      <button className="btnVolver" onClick={handleClickVolver}>
        Volver
      </button>

      <h2>Menú de Nutrición Semanal</h2>
      <div className="menu-items">
        <div className="menu-item">
          <h3>Lunes</h3>
          <p>Desayuno: Omelette de espinacas</p>
          <p>Almuerzo: Ensalada de pollo</p>
          <p>Cena: Salmón a la parrilla con vegetales</p>
        </div>
        <div className="menu-item">
          <h3>Martes</h3>
          <p>Desayuno: Batido de frutas</p>
          <p>Almuerzo: Pasta integral con salsa de tomate</p>
          <p>Cena: Ensalada de quinoa y aguacate</p>
        </div>
        <div className="menu-item">
          <h3>Miércoles</h3>
          <p>Desayuno: Yogur con granola</p>
          <p>Almuerzo: Sopa de verduras</p>
          <p>Cena: Tacos de pescado con guacamole</p>
        </div>
        {/* Agrega el resto de los días de la semana */}
      </div>
    </div>
  );
};

export default Nutricion;
