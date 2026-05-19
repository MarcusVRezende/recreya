import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foto1 from "../assets/fotos_carrocel/carrocel1.png";
import foto2 from "../assets/fotos_carrocel/carrocel2.png";
import foto3 from "../assets/fotos_carrocel/carrocel3.png";
import foto4 from "../assets/fotos_carrocel/carrocel4.png";
import fotoFixa from "../assets/fotos_carrocel/foto-fixa.png";
import "../styles/Inicio.css";

function Inicio() {
  return (
    <div className="inicio" id="home">
      <div className="primeira-parte-inicio">
        <div className="titulo-inicio-container">
          <h1 className="titulo-inicio">Sua Festa Mágica Começa aqui!</h1>
        </div>
        <p className="subtitulo-inicio">
          Levamos diversão, criatividade e entretenimento inesquecível para o
          evento do seu filho. Recreação completa com segurança e muita magia!
        </p>
        <div className="botao-inicio-container">
          <a
            href="https://api.whatsapp.com/message/Q6PAXQS4V6E4P1?autoload=1&app_absent=0&utm_source=ig"
            target="_blank"
            className="botao-inicio !no-underline flex items-center justify-center"
          >
            Quero uma festa
          </a>
          <a
            href="#servicos"
            className="botao-inicio botao-secundario !no-underline flex items-center justify-center"
          >
            Ver Serviços
          </a>
        </div>
      </div>

      <div className="segunda-parte-inicio">
        <div className="imagem-fixa-container">
          <img
            src={fotoFixa}
            alt="foto da empresa recreya"
            className="imagem-fixa"
          />
        </div>
        <div className="carrocel-container">
          <Carousel controls={false} indicators={false} interval={2000}>
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
