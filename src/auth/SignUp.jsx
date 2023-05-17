import React, { useState } from "react";
import "./signup.css";

const CrearCuenta = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setContrasena] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos al backend para crear la cuenta
    const nuevoUsuario = {
      nombre,
      correo,
      password,
      rol: "USER_ROLE",
    };

    // console.log("Datos del nuevo usuario:", nuevoUsuario);

    crearUsuario(nuevoUsuario);

    // Lógica adicional para enviar los datos al backend...
  };

  const crearUsuario = async (usuario) => {
    try {
      const response = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuario creado:", data);
      } else {
        const errorData = await response.json();
        setError(errorData.errors[0].msg);
        console.log(error)
        // Almacena el mensaje de error en el estado
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="crear-cuenta-container">
      <h2>Crear una cuenta</h2>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Mostrar el mensaje de error si existe */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
    </div>
  );
};

export default CrearCuenta;
