import React from 'react';

// IMPORTANTE: Ajuste o caminho das suas imagens aqui
import iconFace from '../assets/Logo1.png'; 
import logoText from '../assets/Logo2.png';

const Letreiro = () => {
  
  // Array para repetição dos itens
  const items = Array(8).fill(null);

  return (
    // Aumentei de py-4 para py-6 para caber os ícones maiores sem ficar apertado
    <div className="w-full bg-white py-6 overflow-hidden relative border-y-4 border-yellow-300">
      
      {/* CSS da Animação */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: fit-content;
            /* Se ficar muito rápido no mobile por ser maior, aumente para 15s ou 20s */
            animation: scroll 15s linear infinite; 
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="animate-infinite-scroll">
        
        {/* GRUPO 1 */}
        <div className="flex items-center gap-12 px-6">
          {items.map((_, index) => (
            <div key={`g1-${index}`} className="flex items-center gap-4 select-none">
              
              {/* Ícone do Rosto */}
              {/* MUDANÇA AQUI: h-16 (mobile) e md:h-20 (desktop) */}
              <img 
                src={iconFace} 
                alt="Ícone" 
                className="!h-16 !md:h-20 w-auto object-contain" 
              />
              
              {/* Texto Recreya */}
              {/* MUDANÇA AQUI: h-10 (mobile) e md:h-14 (desktop) */}
              <img 
                src={logoText} 
                alt="Recreya" 
                className="!h-10 !md:h-14 w-auto object-contain" 
              />
            </div>
          ))}
        </div>

        

      </div>
    </div>
  );
};

export default Letreiro;