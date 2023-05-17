import React from "react";
import { useNavigate } from "react-router-dom";
import "./suplementos.css";

const Suplementos = () => {
  const navigate = useNavigate();
  const suplementos = [
    {
      nombre: "Proteína en polvo",
      imagen:
        "https://media.revistagq.com/photos/63036191e5dd9abb1cd22556/master/w_1600,c_limit/61LUdzOBr+L._AC_SL1500_.jpg",
      precio: 89.99,
    },
    {
      nombre: "Barras energéticas",
      imagen:
        "https://bravachocolates.com/wp-content/uploads/2022/07/Energy-Bar-Premium.png",
      precio: 12.99,
    },
    {
      nombre: "Creatina",
      imagen:
        "https://puraprote.com/wp-content/uploads/2022/08/Creatina-1lb.jpg",
      precio: 39.99,
    },
  ];

  const handleClickVolver = () => {
    navigate("/inicio");
  };

  return (
    <div>
      <button className="btnVolver" onClick={handleClickVolver}>
        Volver
      </button>

      <h2>Suplementos de ejercicio</h2>
      <div className="suplementos-container">
        {suplementos.map((suplemento, index) => (
          <div key={index} className="suplemento-card">
            <img
              src={suplemento.imagen}
              alt={suplemento.nombre}
              className="suplemento-img"
            />
            <h3 className="suplemento-nombre">{suplemento.nombre}</h3>
            <p className="suplemento-precio">Precio: ${suplemento.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suplementos;
