import React from "react";
import "../styles/sobre.css";
import fotoSobre from "../assets/fundos/fundo1.png";

function Sobre() {
  return (
    <div className="sessao-sobre">
      <h1 className="titulo-sessao">Sobre Nós</h1>

      <div className="sobre">
        <div className="primeira-parte">
          <div className="foto">
            <img src={fotoSobre} alt="Equipe da empresa Recreya" />
          </div>
          <div className="texto-foto">
            <p>
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
        
          <div className="blocos">

            <div className="figura-titulo-bloco">

              <div className="logo-bloco">// aqui adiciona um icone</div>
              <div className="titulo-bloco">
                <h2 className="titulo-bloco-texto">titulooo</h2>
              </div>

            </div>
            <div className="texto-bloco">
              <p>
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
