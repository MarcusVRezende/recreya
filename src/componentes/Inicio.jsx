import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foto1 from "../assets/fotos_carrocel/imagem-temporaria-hihi.jpg";
import foto2 from "../assets/fotos_carrocel/imagem-temporaria3-hihi.jpg";
import foto3 from "../assets/fotos_carrocel/imagem-temporaria4-hihi.jpg";
import foto4 from "../assets/fotos_carrocel/imagem-temporaria2-hihi.webp";
import fotoFixa from "../assets/imagem-temporaria-hihi.jpg";
import "../styles/Inicio.css";

function Inicio() {
  return (
    
    <div className="inicio" id="home">
      <div className="primeira-parte-inicio">
        <div className="titulo-inicio-container">
          <h1 className="titulo-inicio">Sua Festa Mágica Começa aqui!</h1>
        </div>
        <p className="subtitulo-inicio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In sint iure
          voluptatum doloremque,
        </p>
        <div className="botao-inicio-container">
          <button className="botao-inicio">Quero uma festa</button>
          <button className="botao-inicio">Quero uma festa</button>
        </div>
        <p className="subtitulo-inicio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque,
          quam id eos dignissimos praesentium corporis, culpa.
        </p>
      </div>

      <div className="segunda-parte-inicio">
        <div className="imagem-fixa-container">
          <img src={fotoFixa} alt="foto da empresa recreya" className="imagem-fixa" />
        </div>
        <div className="carrocel-container">
          <Carousel>
            <Carousel.Item>
              <img src={foto1} alt="First slide" className="foto-carrocel" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={foto2}
                alt="Second slide"
                className="foto-carrocel"
              />{" "}
            </Carousel.Item>
            <Carousel.Item>
              <img src={foto3} alt="Third slide" className="foto-carrocel" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={foto4} alt="Fourth slide" className="foto-carrocel" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Inicio;
