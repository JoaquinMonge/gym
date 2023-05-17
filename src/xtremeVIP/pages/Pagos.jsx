import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pagos.css";

const Pagos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const handleClickVolver = () => {
    navigate("/inicio");
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Aquí puedes realizar el envío de la imagen del comprobante de pago al servidor
    // Puedes utilizar la variable `selectedFile` para obtener la imagen seleccionada y enviarla al backend
    // Puedes usar librerías como axios para realizar la solicitud POST al servidor con la imagen adjunta
    // Ejemplo: axios.post("/api/upload", selectedFile);
  };

  return (
    <div className="payment-container">
      <button className="btnVolver" onClick={handleClickVolver}>
        Volver
      </button>

      <h2 className="payment-title">Pagos</h2>
      <label htmlFor="payment-file" className="payment-label">
        Adjuntar comprobante de pago:
      </label>
      <input
        type="file"
        id="payment-file"
        accept="image/*"
        onChange={handleFileChange}
        className="payment-input"
      />
      <button
        onClick={handleUpload}
        className="payment-button"
        disabled={!selectedFile}
      >
        Enviar
      </button>
    </div>
  );
};

export default Pagos;
