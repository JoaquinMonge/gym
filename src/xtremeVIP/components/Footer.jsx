import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <Link to="/contacto">
        <p>Contacto</p>
      </Link>

      <p>Derechos de autor &copy; 2023 - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
