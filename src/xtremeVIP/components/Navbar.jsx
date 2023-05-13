import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import UserContext from "../../hooks/UserContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <nav>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/acerca">
          <span className="acercaDe">Acerca de</span>
        </Link>

        {!isAuthenticated ? (
          <Link to="/login">
            <button>Iniciar Sesión</button>
          </Link>
        ) : (
          <button>Cerrar Sesion</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
