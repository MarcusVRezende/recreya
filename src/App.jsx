import React, { useEffect } from "react";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MyNavbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Sobre from "./componentes/Sobre";
import Inicio from "./componentes/Inicio";
import Services from "./componentes/Services";
import Comentarios from "./componentes/comentarios";
import Letreiro from "./componentes/Letreiro";
import Portfolio from "./componentes/Portfolio";
import Fale_Conosco from "./componentes/Fale_conosco";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("init-hidden-off");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
      },
    );
    const elements = document.querySelectorAll(".init-hidden");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
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
          <Fale_Conosco />
          <Letreiro />
        </main>
      </div>
      
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
