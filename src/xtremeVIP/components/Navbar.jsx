import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <span>XTREME VIP</span>
      </div>
      <div className="navbar-right">
        {/* <Link to="/busqueda">
          {" "}
          <button>Iniciar Sesión</button>
        </Link> */}
        <button>Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
