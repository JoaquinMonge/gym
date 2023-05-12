import { Route, Routes } from "react-router-dom";
import Body from "./xtremeVIP/components/Body";
import { Busqueda } from "./xtremeVIP/components/Busqueda";
import Footer from "./xtremeVIP/components/Footer";
import Navbar from "./xtremeVIP/components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Busqueda" element={<Busqueda />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
