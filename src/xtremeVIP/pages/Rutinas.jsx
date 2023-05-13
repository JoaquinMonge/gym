import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./rutinas.css";

export const Rutinas = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickVolver=()=>{
    navigate("/inicio");
  }

  return (
    <div className="rutinas-container">
      <h2>Rutinas de Ejercicios</h2>

      <button className="btnVolver" onClick={handleClickVolver}>Volver</button>
      <div className="rutina-card">
        <h3>Rutina 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn" onClick={openModal}>
          Ver Detalles
        </button>
      </div>
      <div className="rutina-card">
        <h3>Rutina 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn" onClick={openModal}>
          Ver Detalles
        </button>
      </div>
      <div className="rutina-card">
        <h3>Rutina 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn" onClick={openModal}>
          Ver Detalles
        </button>
      </div>
      <div className="rutina-card">
        <h3>Rutina 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn" onClick={openModal}>
          Ver Detalles
        </button>
      </div>
      <div className="rutina-card">
        <h3>Rutina 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn" onClick={openModal}>
          Ver Detalles
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Detalles de la Rutina</h3>
            <p>Contenido del modal...</p>
            <button className="btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
