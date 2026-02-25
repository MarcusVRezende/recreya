import React from "react";
import { PartyPopper, Smile, Star } from "lucide-react";
import foto1 from "../assets/fotos_carrocel/imagem-temporaria4-hihi.jpg";
import foto2 from "../assets/fotos_carrocel/imagem-temporaria4-hihi.jpg";
import foto3 from "../assets/fotos_carrocel/imagem-temporaria2-hihi.webp";
import foto4 from "../assets/fotos_carrocel/imagem-temporaria2-hihi.webp";
import fotoIcone from "../assets/icone-chapeu.png";

import { AiFillPushpin } from "react-icons/ai";

import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <div className="texto-portfolio-container">
          <div className="icone-chapeu-container">
            <img src={fotoIcone} alt="icone da empresa recreya" className="icone-chapeu" />
          </div>
          
          <h2 className="titulo-portfolio">
            Desde 20XX Atuando em festas para todas as famílias
          </h2>
          <p className="texto-portfolio">De Brasília a Goiânia </p>
        </div>
        <div className="imagens-portfolio-container">
          <div className="imagem-portfolio-um">
            <AiFillPushpin
              className="icone-foto-um"
              style={{ stroke: "black", strokeWidth: "25px" }}
            />

            <img
              src={foto1}
              alt="foto da empresa recreya"
              className="foto-portfolio"
            />
          </div>

          <div className="imagem-portfolio-dois">
            <AiFillPushpin
              className="icone-foto-dois"
              style={{ stroke: "black", strokeWidth: "25px" }}
            />
            <img
              src={foto4}
              alt="foto da empresa recreya"
              className="foto-portfolio"
            />
          </div>

          <div className="imagem-portfolio-tres">
            <AiFillPushpin
              className="icone-foto-tres"
              style={{ stroke: "black", strokeWidth: "25px" }}
            />
            <img
              src={foto2}
              alt="foto da empresa recreya"
              className="foto-portfolio"
            />
          </div>

          <div className="imagem-portfolio-quatro">
            <AiFillPushpin
              className="icone-foto-quatro"
              style={{ stroke: "black", strokeWidth: "25px" }}
            />
            <img
              src={foto3}
              alt="foto da empresa recreya"
              className="foto-portfolio"
            />
          </div>
        </div>
      </div>
      <div className="icones"></div>
    </div>
  );
}
export default Portfolio;
