import "./App.css";
import MyNavbar from "./components/Navbar/Navbar";
import Footer from "./componentes/Footer";
import React from "react";
import Sobre from "./componentes/Sobre";

function App(){


  return (
    <>
      <div className="app-container">
        <MyNavbar />
        <main>
          <h1>Sua Festa Mágica Começa aqui!</h1>
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

