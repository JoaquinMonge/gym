import React, { useEffect } from "react";
import { useState } from "react";
import "./body.css";

const Body = () => {
  const [ejercicios, setEjercicios] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest";
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
      console.log(result);
      setEjercicios(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="body-container">
      <h1>Ejercicios para el pecho</h1>
      <div className="card-container">
        {ejercicios.map((ejercicio) => (
          <div key={ejercicio.id} className="card">
            <img src={ejercicio.gifUrl} alt={ejercicio.name} />
            <h3>{ejercicio.name}</h3>
            <p>{ejercicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
