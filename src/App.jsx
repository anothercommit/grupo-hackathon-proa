import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//componentes
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Context from "./Componentes/Context";

function App() {
  const [coordenadas, setCoordenadas] = useState({ latitud: "", longitud: "" });
  const baseUrl = "http://api.openweathermap.org/data/2.5";

  useEffect(() => {}, []);

  const handleButton = () => {
    axios
      .get(
        `${baseUrl}/air_pollution?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&appid=${process.env.API_KEY}`,
      )
      .then((res) => console.log(res).catch((err) => console.log(err)));
  };

  axios.get("").then((res) => console.log(res.data));

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
