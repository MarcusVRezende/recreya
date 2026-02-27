import React from "react";
// IMPORTANTE: Ajuste o caminho das suas imagens aqui
import iconFace from "../assets/Logo1.png";
import logoText from "../assets/Logo2.png";

const Letreiro = () => {
  // Criamos um array de itens para o conteúdo
  const items = Array(10).fill(null);

  return (
    <div className="letreiro-container ">
      <div className="w-full bg-white !py-2 overflow-hidden relative border-y-2 border-yellow-400/50 shadow-sm">
        {/* Efeito de Fade nas bordas para elegância visual */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
            .letreiro-container{
            padding-top: 1%;
            padding-bottom: 1%;
          }
        `}
        </style>
        {/* Container da Animação - Ele contém duas vezes o mesmo grupo de itens */}
        <div className="animate-infinite-scroll flex items-center">
          {/* GRUPO 1 e GRUPO 2 (Duplicados para o loop infinito) */}
          {[1, 2].map((group) => (
            <div
              key={group}
              className="letreiro flex items-center !gap-16 !px-8"
            >
              {items.map((_, index) => (
                <div
                  key={`${group}-${index}`}
                  className="flex items-center !gap-4 !transition-transform duration-300 hover:scale-105 select-none"
                >
                  {/* Ícone do Rosto */}
                  <img
                    src={iconFace}
                    alt="Ícone Recreya"
                    className="!h-10 md:h-16 w-auto !object-contain filter drop-shadow-sm"
                  />

                  {/* Texto Recreya */}
                  <img
                    src={logoText}
                    alt="Recreya"
                    className="!h-8 md:!h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Letreiro;
