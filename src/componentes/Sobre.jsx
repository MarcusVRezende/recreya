import React from "react";
import "../styles/sobre.css";
import fotoSobre from "../assets/foto_equipe.png";
// Importados os novos ícones lúdicos e profissionais para a Recreya
import { ShieldCheck, Sparkles, Smile } from "lucide-react";

function Sobre() {
  return (
    <div className="sessao-sobre-container" id="sobre">
      <div className="sessao-sobre">
        <h2
          style={{
            color: "#FFE04C",
            WebkitTextFillColor: "#FFE04C",
            textAlign: "center",
            padding: "20px 0px",
          }}
          className="font-luckiest !text-5xl md:!text-7xl text-stroke-blue drop-shadow-md relative z-10"
        >
          SOBRE NÓS
        </h2>
        <div className="sobre">
          <div className="primeira-parte">
            <div className="foto-sobre-container">
              <img
                src={fotoSobre}
                alt="Equipe da empresa Recreya"
                className="foto-sobre"
              />
            </div>

            <div className="init-hidden">
              <div className="texto-foto-container">
                <p className="texto-foto">
                  A Recreya nasceu com o propósito de transformar festas infantis em verdadeiros 
                  mundos de imaginação e alegria. Unimos profissionais apaixonados por brincar 
                  e criar experiências únicas para que cada comemoração seja inesquecível, dinâmica 
                  e cheia de sorrisos contagiantes de Brasília a Goiânia!
                </p>
              </div>
            </div>
          </div>
          <div className="segunda-parte">
            <div className="init-hidden">
              <div className="bloco-sobre-um">
                <div className="figura-titulo-bloco">
                  <div className="logo-bloco-sobre">
                    {/* Substituído o coração pelo ícone de escudo/segurança */}
                    <ShieldCheck className="icone-sobre"/>
                  </div>
                  <div className="titulo-bloco-container">
                    <h2 className="titulo-bloco">SEGURANÇA TOTAL</h2>
                  </div>
                </div>
                <div className="texto-bloco-container">
                  <p className="texto-bloco">
                    Monitores treinados e qualificados para cuidar e entreter os pequenos com total 
                    atenção, garantindo a tranquilidade que os pais merecem durante todo o evento.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="init-hidden">
              <div className="bloco-sobre-dois">
                <div className="figura-titulo-bloco">
                  <div className="logo-bloco-sobre-dois">
                    <Sparkles className="icone-sobre-dois"/>
                  </div>
                  <div className="titulo-bloco-container">
                    <h2 className="titulo-bloco-dois">MUITA MAGIA</h2>
                  </div>
                </div>
                <div className="texto-bloco-container">
                  <p className="texto-bloco-dois">
                    Brincadeiras dinâmicas, oficinas criativas e atividades pensadas para prender a 
                    atenção das crianças de forma mágica, saudável e longe das telas.
                  </p>
                </div>
              </div>
            </div>

            <div className="init-hidden">
              <div className="bloco-sobre-um">
                <div className="figura-titulo-bloco">
                  <div className="logo-bloco-sobre">
                    <Smile className="icone-sobre" />
                  </div>
                  <div className="titulo-bloco-container">
                    <h2 className="titulo-bloco">DIVERSÃO COMPLETA</h2>
                  </div>
                </div>
                <div className="texto-bloco-container">
                  <p className="texto-bloco">
                    Do primeiro convidado até o parabéns, nossa energia não para! Atendemos todas as 
                    idades com jogos adaptados e materiais de altíssima qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;