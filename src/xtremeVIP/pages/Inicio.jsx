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

  // Función para crear un nuevo producto
  // const crearProducto = async (producto) => {
  //   try {
  //     // Realizar la petición POST al endpoint correspondiente
  //     const response = await fetch("http://localhost:8080/api/productos", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(producto),
  //     });

  //     // Verificar si la petición fue exitosa
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Producto creado:", data);
  //     } else {
  //       console.error("Error al crear el producto:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error en la solicitud:", error);
  //   }
  // };

  // // Ejemplo de uso de la función
  // const nuevoProducto = {
  //   nombre: "Nombre del producto",
  //   precio: 9.99,
  //   categoria: "ID de la categoría",
  //   descripcion: "Descripción del producto",
  // };

  // useEffect(() => {
  //   crearProducto(nuevoProducto);
  // }, []);

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
