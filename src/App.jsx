import "./App.css";
import MyNavbar from "./components/Navbar/Navbar";
import Footer from "./componentes/Footer";
import React from "react";
import Sobre from "./componentes/Sobre";
import Inicio from "./componentes/Inicio";

function App(){


  return (
    <>
      <div className="app-container">
        <MyNavbar />
        <main>
          <Inicio />
          <Sobre />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;

