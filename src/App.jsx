import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/LoginPage";
import { AcercaDe } from "./xtremeVIP/components/AcercaDe";
import Body from "./xtremeVIP/components/Body";
import { Busqueda } from "./xtremeVIP/components/Busqueda";
import { Contacto } from "./xtremeVIP/components/Contacto";
import Footer from "./xtremeVIP/components/Footer";
import Navbar from "./xtremeVIP/components/navbar";
import { Inicio } from "./xtremeVIP/pages/Inicio";

import { useContext } from "react";
import UserContext from "./hooks/UserContext";
import { Rutinas } from "./xtremeVIP/pages/Rutinas";

function App() {
  const { isAuthenticated } = useContext(UserContext);
  console.log(isAuthenticated);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {isAuthenticated ? (
          <>
            <Route path="/hola" element={<Body />} />
            <Route path="/busqueda" element={<Busqueda />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/*" element={<Navigate to="/inicio" />} />
            <Route path="/acerca" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/rutinas" element={<Rutinas />} />
          </>
        ) : (
          <>
            <Route path="/acerca" element={<AcercaDe />} />

            <Route path="/contacto" element={<Contacto />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
