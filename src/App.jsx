import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

//componentes
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Context from "./Componentes/Context";

function App() {
    const [coordenadas, setCoordenadas] = useState({ latitud: "", longitud: "" });
    const baseUrl = "https://api.openweathermap.org/data/2.5";

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos) {
        const crd = pos.coords;

        const nuevasCoordenadas = {
            latitud: crd.latitud,
            longitud: crd.longitude,
        }

        setCoordenadas({ nuevasCoordenadas });
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    const handleButton = () => {
        console.log(`${baseUrl}/air_pollution?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&appid=${process.env.API_KEY}`);
        axios
            .get(
                `${baseUrl}/air_pollution?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&appid=${process.env.API_KEY}`,
            )
            .then((res) => console.log(res).catch((err) => console.log(err)));
    };


    return (
        <>
            <Navbar />
            <button onClick={handleButton}>Ver calidad de aire</button>
            <Footer />
        </>
    );
}

export default App;
