import "./App.css";
import MyNavbar from "./components/Navbar";
import Footer from "./componentes/Footer";
import React from "react";
import Sobre from "./componentes/Sobre";
import Inicio from "./componentes/Inicio";
import Services from "./components/Services";
import Comentarios from "./components/comentarios";
import Letreiro from "./components/Letreiro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(){


  return (
    <>
      <div className="app-container">
        <div>
        <MyNavbar />

        </div>
        <main>
          <Inicio />
          <Sobre />
        </main>
      </div>
    
      <div>
      <Services/>
      </div>
      <div>
        <Comentarios />
      </div>
      <div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;

