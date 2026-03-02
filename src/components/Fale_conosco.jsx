import React from "react";
import { FaWhatsapp, FaMapMarkedAlt } from "react-icons/fa";

const FaleConosco = () => {
  return (
    <div
      style={{ marginBottom: "2%" }}
      className="!max-w-[1000px] !mx-auto !px-5 !py-1 !flex flex-col md:flex-row items-center !gap-10 font-sans antialiased"
    >
      <div className="!flex-1 !text-center md:text-left flex flex-col !items-center md:items-start font-sans">
        <h2
          style={{
            color: "black",
            WebkitTextFillColor: "white",
            padding: "20px 0px",
          }}
          className="font-luckiest !text-4xl md:!text-4xl text-stroke-blue drop-shadow-md relative z-10 md:-mt-10"
        >
          Fale conosco
        </h2>

        <p className=" text-lg leading-relaxed !mb-5 text-slate-600 max-w-md md:max-w-[100%] mx-auto md:mx-0 font-medium">
          Ficou com alguma dúvida ou quer garantir o seu agendamento? Clique no
          botão abaixo e fale diretamente com a nossa equipe de forma rápida!
        </p>

        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="
    !no-underline
    inline-flex items-center gap-3 
    bg-[#25D366] 
    text-white font-bold text-lg 
    !py-4 !px-10 
    !rounded-full 
    transition-all duration-300 ease-in-out 
    shadow-xl 
    hover:shadow-2xl hover:bg-[#20bd5c] hover:scale-105 
    !active:scale-95 active:shadow-md 
  "
        >
          <FaWhatsapp className="text-2xl" />
          Mandar mensagem
        </a>
      </div>
      <div>
        <div className="flex-1 w-full md:h-[350px] border-2 border-[#E05A5A] rounded-[20px] overflow-hidden shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491356.90739743033!2d-48.04754358445082!3d-15.818403744954075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3af2108804d7%3A0x3eba2390c9145056!2sBras%C3%ADlia%20-%20Distrito%20Federal!5e0!3m2!1spt-BR!2sbr!4v1772482450210!5m2!1spt-BR!2sbr"
            className="md:w-[500px] h-full border-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Distrito Federal"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="w-full text-center mt-2 text-sm text-gray-500 display-flex items-center gap-2"
        >
          <FaMapMarkedAlt className="text-[#2FB5FF] text-3xl" />
          <h3 className="md:text-5xl">Atuação: Distrito Federal</h3>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
