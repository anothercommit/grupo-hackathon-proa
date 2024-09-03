import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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
        console.log(crd.latitude);
        console.log(crd.longitude);
        const nuevasCoordenadas = {
            latitud: crd.latitude,
            longitud: crd.longitude,
        }

        setCoordenadas({ nuevasCoordenadas });
        console.log(coordenadas);
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
