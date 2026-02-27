import "../styles/sobre.css";
import fotoSobre from "../assets/imagem-temporaria-hihi.jpg";
import { FaRegHeart } from "react-icons/fa";

function Sobre() {
  return (
    <div className="sessao-sobre-container" id="sobre">
      <div className="sessao-sobre">
        <h2
          style={{
            color: "#FFE04C",
            WebkitTextFillColor: "#FFE04C",
            textAlign: "center",
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  ratione quaerat repudiandae velit amet natus, facere soluta
                  architecto quidem quia obcaecati laborum numquam dolorem!
                  Saepe voluptates ipsum doloremque nemo quibusdam? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Illo qui hic ex
                  iste cumque rerum eligendi accusamus culpa earum? Placeat
                  quibusdam natus non cum quod recusandae veniam dicta quidem
                  maiores?
                </p>
              </div>
            </div>
          </div>
          <div className="segunda-parte">
            <div className="init-hidden">
              <div className="bloco-sobre-um">
                <div className="figura-titulo-bloco">
                  <div className="logo-bloco-sobre">
                    <FaRegHeart className="icone-sobre" />
                  </div>
                  <div className="titulo-bloco-container">
                    <h2 className="titulo-bloco">titulooo</h2>
                  </div>
                </div>
                <div className="texto-bloco-container">
                  <p className="texto-bloco">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam distinctio neque natus corporis libero aspernatur
                    blanditiis quis quae commodi eos magnam repellendus nulla
                    nobis, aliquam ut aliquid fugiat, dolore deleniti.
                  </p>
                </div>
              </div>
            </div>
            <div className="init-hidden">
              <div className="bloco-sobre-dois">
                <div className="figura-titulo-bloco">
                  <div className="logo-bloco-sobre-dois">
                    <FaRegHeart className="icone-sobre-dois" />
                  </div>
                  <div className="titulo-bloco-container">
                    <h2 className="titulo-bloco-dois">titulooo</h2>
                  </div>
                </div>
                <div className="texto-bloco-container">
                  <p className="texto-bloco-dois">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam distinctio neque natus corporis libero aspernatur
                    blanditiis quis quae commodi eos magnam repellendus nulla
                    nobis, aliquam ut aliquid fugiat, dolore deleniti.
                  </p>
                </div>
              </div>
            </div>
            <div className="init-hidden">
              <div className="bloco-sobre-um">
                <div className="figura-titulo-bloco">
                  <div className="logo-bloco-sobre">
                    <FaRegHeart className="icone-sobre" />
                  </div>
                  <div className="titulo-bloco-container">
                    <h2 className="titulo-bloco">titulooo</h2>
                  </div>
                </div>
                <div className="texto-bloco-container">
                  <p className="texto-bloco">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam distinctio neque natus corporis libero aspernatur
                    blanditiis quis quae commodi eos magnam repellendus nulla
                    nobis, aliquam ut aliquid fugiat, dolore deleniti.
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
