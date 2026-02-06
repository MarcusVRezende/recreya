import React from "react";
import "../styles/sobre.css";
import fotoSobre from "../assets/fundos/fundo1.png";
import { FaRegHeart } from "react-icons/fa";


function Sobre() {
  return (
    <div className="sessao-sobre" id="sobre">
      <h1 className="titulo-sessao">Sobre Nós</h1>

      <div className="sobre">
        <div className="primeira-parte">
          <div className="foto-sobre-container">
            <img src={fotoSobre} alt="Equipe da empresa Recreya" className="foto-sobre" />
          </div>
          <div className="texto-foto-container">
            <p className="texto-foto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              ratione quaerat repudiandae velit amet natus, facere soluta
              architecto quidem quia obcaecati laborum numquam dolorem! Saepe
              voluptates ipsum doloremque nemo quibusdam? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illo qui hic ex iste cumque
              rerum eligendi accusamus culpa earum? Placeat quibusdam natus non
              cum quod recusandae veniam dicta quidem maiores?
            </p>
          </div>
        </div>

        <div className="segunda-parte">   

          <div className="bloco-sobre-um">
            <div className="figura-titulo-bloco">
              <div className="logo-bloco-sobre" >
                <FaRegHeart className="icone-sobre" />
              </div>
              <div className=".titulo-bloco-container">
                <h2 className="titulo-bloco">titulooo</h2>
              </div>
            </div>
            <div className="texto-bloco-container">
              <p className="texto-bloco">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                distinctio neque natus corporis libero aspernatur blanditiis
                quis quae commodi eos magnam repellendus nulla nobis, aliquam ut
                aliquid fugiat, dolore deleniti.
              </p>
            </div>
          </div>

          <div className="bloco-sobre-dois">
            <div className="figura-titulo-bloco">
              <div className="logo-bloco-sobre-dois" >
                <FaRegHeart className="icone-sobre-dois" />
              </div>
              <div className=".titulo-bloco-container">
                <h2 className="titulo-bloco-dois">titulooo</h2>
              </div>
            </div>
            <div className="texto-bloco-container">
              <p className="texto-bloco-dois">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                distinctio neque natus corporis libero aspernatur blanditiis
                quis quae commodi eos magnam repellendus nulla nobis, aliquam ut
                aliquid fugiat, dolore deleniti.
              </p>
            </div>
          </div>


          <div className="bloco-sobre-um">
            <div className="figura-titulo-bloco">
              <div className="logo-bloco-sobre" >
                <FaRegHeart className="icone-sobre" />
              </div>
              <div className=".titulo-bloco-container">
                <h2 className="titulo-bloco">titulooo</h2>
              </div>
            </div>
            <div className="texto-bloco-container">
              <p className="texto-bloco">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                distinctio neque natus corporis libero aspernatur blanditiis
                quis quae commodi eos magnam repellendus nulla nobis, aliquam ut
                aliquid fugiat, dolore deleniti.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Sobre;
