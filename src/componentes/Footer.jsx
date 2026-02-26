import React from "react";
import logoFooter from "../assets/footer.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="rodape" id="contato">
      <div className="rodape-conteudo">
        <div className="init-hidden">
          <a href="/">
            <div className="foto-footer">
              <img src={logoFooter} alt="logo footer" className="foto" />
            </div>
          </a>
        </div>
        <div className="bloco2">
          <div className="secao-contatos">
            <h1 className=" titulo-footer"> Contatos </h1>

            <p className="contatos">
              {" "}
              <BsTelephone className="icone" /> (61) 9xxxx-xxxx
            </p>
            <p className="contatos">
              {" "}
              <MdOutlineEmail className="icone" /> email@gmail.com
            </p>
            <p className="contatos">
              {" "}
              <HiOutlineLocationMarker className="icone" /> Brasilia - DF
            </p>
          </div>

          <div className="secao-extras">
            <p className="contatos-informacoes">
              Transformando festas infatis em momentos mágicos e inesquecíveis
            </p>
            <div className="contatos-icones">
              <div className="instagram">
                <a href="https://www.instagram.com/recreya/">
                  <FaInstagram className="social" />
                </a>
              </div>
              <div className="whatsapp">
                <a href="https://www.instagram.com/recreya/">
                  <FaWhatsapp className="social" />
                </a>
              </div>
            </div>
            <p className="contatos-informacoes">
              Representanet Legal: Yasmin Daniele Cassiano Vieira
            </p>
          </div>
        </div>
      </div>
      <div className="seguranca">
        <p className="seguranca-frase">
          © 2026 Recreya | Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
