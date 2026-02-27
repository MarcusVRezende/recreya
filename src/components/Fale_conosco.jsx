import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 

const FaleConosco = () => {
    return (
        <div className="max-w-[1000px] mx-auto px-5 py-10 flex flex-col md:flex-row items-center gap-10 font-sans antialiased">

            <div className="flex-1 text-center md:text-left text-gray-800 flex flex-col items-center md:items-start">
                <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Fale Conosco</h2>

                <p className="text-lg leading-relaxed mb-10 text-gray-600 max-w-md md:max-w-none mx-auto md:mx-0">
                    Entre em contato conosco para tirar suas dúvidas ou realizar seu agendamento clicando no botão abaixo.
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

            <div className="flex-1 w-full h-[350px] border-2 border-[#E05A5A] rounded-[20px] overflow-hidden shadow-inner">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964344.40951168!2d-48.974868!3d-15.774545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31eb58a9df67%3A0x6b5c00b0f4553b3b!2sDistrito%20Federal!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
          className="w-full h-full border-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa do Distrito Federal"
                />
            </div>

        </div>
    );
};

export default FaleConosco;