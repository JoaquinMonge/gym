import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import "./busqueda.css";
import { useNavigate } from "react-router-dom";

export const Busqueda = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicio, setEjercicio] = useState("chest");
  const [isLoading, setIsLoading] = useState(false);
  const [titulo, setTitulo] = useState("Pecho");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);
  const [results, setResults] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetchData(ejercicio);
  }, [ejercicio]);

  useEffect(() => {
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    setResults(ejercicios.slice(indexOfFirstResult, indexOfLastResult));
  }, [ejercicios, currentPage, resultsPerPage]);

  const fetchData = async (eje) => {
    setIsLoading(true);

    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${eje}`;

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "73f4063f2bmshf2830aa2fc75f67p1b7183jsn83f1c23c6455",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setCurrentPage(1);
      setEjercicios(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setResults(ejercicios.slice(indexOfFirstResult, indexOfLastResult));
    }
  };

  const handleMenuClick = () => {
    navigate("/inicio");
  };

  const handleButtonClick = (nombreEjercicio, nombreBoton) => {
    setEjercicio(nombreEjercicio);
    setTitulo(nombreBoton);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(ejercicios.length / resultsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="body-container">
      <div className="btnContainer">
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
      </div>

      <div className="titulo">
        <h1>{titulo}</h1>
      </div>

      <div className="volverContainer">
        <button className="btnMenu" onClick={handleMenuClick}>
          Volver al menu
        </button>
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          className="previous"
        >
          {"<"}
        </button>
        <span className="pagination-info">
          {currentPage} de {Math.ceil(ejercicios.length / resultsPerPage)}
        </span>
        <button
          disabled={
            currentPage === Math.ceil(ejercicios.length / resultsPerPage)
          }
          onClick={handleNextPage}
          className="previous"
        >
          {">"}
        </button>
      </div>

      <div className="card-container">
        {isLoading ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : (
          results.map((ej) => (
            <div key={ej.id} className="card">
              <img src={ej.gifUrl} alt={ej.name} loading="lazy" />
              <h3>{ej.name}</h3>
              <h4>{ej.bodyPart}</h4>
              <h4>{ej.equipment}</h4>
              <h4>{ej.target}</h4>
              <p>{"Equipo requrido: " + ej.equipment}</p>
            </div>
          ))
        )}
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            className="previous"
          >
            Anterior
          </button>
          <span className="pagination-info">
            {currentPage} de {Math.ceil(ejercicios.length / resultsPerPage)}
          </span>
          <button
            disabled={
              currentPage === Math.ceil(ejercicios.length / resultsPerPage)
            }
            onClick={handleNextPage}
            className="next"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
