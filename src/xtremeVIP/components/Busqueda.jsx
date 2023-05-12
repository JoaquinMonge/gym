import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import "./busqueda.css";

export const Busqueda = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicio, setEjercicio] = useState("chest");
  const [isLoading, setIsLoading] = useState(false);
  const [titulo, setTitulo] = useState("Pecho");

  useEffect(() => {
    fetchData(ejercicio);
  }, [ejercicio]);

  const fetchData = async (eje) => {
    setIsLoading(true);
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${eje}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bc954a180cmsh0859538016f0ec6p1143c0jsnf7c4d13d5f20",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setEjercicios(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = (nombreEjercicio, nombreBoton) => {
    setEjercicio(nombreEjercicio);
    setTitulo(nombreBoton);
  };

  return (
    <div className="body-container">
      <button
        className="btnEj"
        onClick={() => handleButtonClick("chest", "Pecho")}
      >
        Pecho
      </button>
      <button
        className="btnEj"
        onClick={() => handleButtonClick("upper legs", "Piernas")}
      >
        Piernas
      </button>
      <button
        className="btnEj"
        onClick={() => handleButtonClick("upper arms", "Bicep")}
      >
        Bicep
      </button>
      <button
        className="btnEj"
        onClick={() => handleButtonClick("back", "Espalda")}
      >
        Espalda
      </button>
      <div className="card-container">
        <h1>{titulo}</h1>

        {isLoading ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : (
          ejercicios.map((ej) => (
            <div key={ej.id} className="card">
              <img src={ej.gifUrl} alt={ej.name} />
              <h3>{ej.name}</h3>
              <p>{"Equipo requrido: " + ej.equipment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
