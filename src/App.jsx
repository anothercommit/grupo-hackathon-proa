import React, { useEffect, useState } from "react";
import "./App.css";

//componentes
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Context from "./Componentes/Context";

function App() {
  const [latitud_altitud, setLatitud_altitud] = useState([]);

  const handleButton = () => {
    axios.get(
      "http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=2ca3a7c5d310204cd624d782488f7690",
    );
  };

  return (
    <>
      <Navbar />
      <Context />
      <Footer />
      <button onClick={handleButton}>Ver calidad de aire</button>
    </>
  );
}

export default App;
