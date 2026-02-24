import "./App.css";
import MyNavbar from "./components/Navbar";
import Footer from "./componentes/Footer";
import React from "react";
import Sobre from "./componentes/Sobre";
import Inicio from "./componentes/Inicio";
import Services from "./components/Services";
import Comentarios from "./components/comentarios";
import Letreiro from "./components/Letreiro";
import Portfolio from "./componentes/Portfolio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <div className="app-container">
        <div>
          <MyNavbar />
        </div>
        <main>
          <Inicio />
          <Portfolio />
          <Sobre />
          <Services />
          <Comentarios />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
