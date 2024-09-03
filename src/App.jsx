import React from 'react'
import './App.css'
import axios from 'axios'
//componentes
import Footer from './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import Context from './Componentes/Context'

//componentes
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Context from "./Componentes/Context";

//componentes
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";

function App() {
  axios.get('').then(
    res => console.log(res.data)
  )
  return (
    <>
      <Navbar />
      <Context />
      <Footer />
    </>
  );
}

export default App;
