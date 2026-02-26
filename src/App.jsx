import React, { useEffect } from "react";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MyNavbar from "./components/Navbar";
import Footer from "./componentes/Footer";
import Sobre from "./componentes/Sobre";
import Inicio from "./componentes/Inicio";
import Services from "./components/Services";
import Comentarios from "./components/comentarios";
import Letreiro from "./components/Letreiro";
import Portfolio from "./componentes/Portfolio";



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
        </main>
      </div>
    
      <div>
        <Letreiro />
      </div>
      <div>
      <Services/>
      </div>
      <div>
        <Comentarios />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
