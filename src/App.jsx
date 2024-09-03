import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

//componentes
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import MainCard from "./Componentes/MainCard";

function App() {
    const [coordenadas, setCoordenadas] = useState({ latitud: "", longitud: "" });
    const [datos, setDatos] = useState();

    const baseUrl = "https://api.openweathermap.org/data/2.5";
    const API_KEY = "2ca3a7c5d310204cd624d782488f7690";

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

        setCoordenadas(nuevasCoordenadas);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    const handleButton = () => {
        axios
            .get(
                `${baseUrl}/air_pollution?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&appid=${API_KEY}`,
            )
            .then((res) => {
                console.log(res.data);
                setDatos(res.data);
            })
            .catch((err) => console.log(err));
    };


    return (
        <>
            <Navbar />
            {datos && <>
                <MainCard data={datos} />
            </>
            }
            <button className="boton" onClick={handleButton}>Ver calidad de aire</button>
            <Footer />
        </>
    );
}

export default App;
