import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  PartyPopper,
  Palette,
  Baby,
  Rocket,
  ChevronRight,
  Balloon,
  Puzzle,
} from "lucide-react";

const servicesData = [
  {
    id: "recreacao",
    label: "RECREAÇÃO",
    title: "RECREAÇÃO",
    icon: PartyPopper,
    description:
      "Nossa recreação transforma qualquer espaço em um universo de aventura e energia! Com brincadeiras cantadas, gincanas dinâmicas, jogos de cooperação, caça ao tesouro temática e atividades lúdicas adaptadas para cada faixa etária. Garantimos o entretenimento saudável da garotada do início ao fim da festa, mantendo todos engajados, seguros e criando memórias inesquecíveis fora das telas.",
    image1: "src/assets/Fotos_servicos/recreacao/recreacao1.png",
    image2: "src/assets/Fotos_servicos/recreacao/recreacao2.png",
    image3: "src/assets/Fotos_servicos/recreacao/recreacao3.png",
  },
  {
    id: "oficinas",
    label: "OFICINAS",
    title: "OFICINAS",
    icon: Palette,
    description:
      "O espaço perfeito para despertar o lado artístico e a imaginação dos pequenos artistas! Promovemos oficinas completas e interativas de Slime personalizado e confecção de pulseiras de Miçangas. O melhor de tudo é que as crianças se divertem criando, desenvolvem a coordenação e ainda levam suas próprias obras de arte para casa como uma lembrancinha exclusiva da sua festa.",
    image1: "src/assets/Fotos_servicos/oficinas/oficina1.png",
    image2: "src/assets/Fotos_servicos/oficinas/oficina2.png",
    image3: "src/assets/Fotos_servicos/oficinas/oficina3.png",
  },
  {
    id: "pintura-de-rosto",
    label: "PINTURA DE ROSTO",
    title: "PINTURA DE ROSTO",
    icon: Baby,
    description:
      "Transformamos fantasias em realidade através de traços coloridos e cheios de brilho! Nossa maquiagem artística utiliza materiais profissionais totalmente hipoalergênicos e específicos para a pele sensível das crianças. Com designs incríveis de heróis, princesas, animais, flores e elementos abstratos cheios de glitter, os pequenos entram no personagem com segurança, levando mais cor, encanto e magia para as fotos do evento.",
    image1: "src/assets/Fotos_servicos/pintura_de_rosto/pintura1.png",
    image2: "src/assets/Fotos_servicos/pintura_de_rosto/pintura2.png",
    image3: "src/assets/Fotos_servicos/pintura_de_rosto/pintura3.png",
  },
  {
    id: "balao-mania",
    label: "BALÃO MANIA",
    title: "BALÃO MANIA",
    icon: Rocket,
    description:
      "Arte e modelagem em balões que encantam e fascinam os convidados de todas as idades! Nossos recreadores criam esculturas dinâmicas em tempo real, desde espadas, cachorrinhos, coroas e corações até flores coloridas. É uma atração super interativa onde cada balão ganha vida nas mãos da nossa equipe e vira um acessório divertido para as brincadeiras da festa, garantindo que ninguém saia de mãos vazias.",
    image1: "src/assets/Fotos_servicos/balao_mania/balao1.png",
    image2: "src/assets/Fotos_servicos/balao_mania/balao2.png",
    image3: "src/assets/Fotos_servicos/balao_mania/balao3.png",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("recreacao");
  const activeContent = servicesData.find((s) => s.id === activeTab);

  return (
    <section className="py-10 relative w-full overflow-hidden" id='servicos'>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
          
          .font-luckiest {
            font-family: 'Luckiest Guy', cursive;
            letter-spacing: 1px;
          }

          .text-stroke-blue {
            -webkit-text-stroke: 4px #38BDF8;
            paint-order: stroke fill;
          }
          
          .text-stroke-orange {
            -webkit-text-stroke: 4px #FF9141;
            paint-order: stroke fill;
          }
        `}
      </style>

      <Container>
        <div className="relative text-center mb-12">
          <h2
            style={{ color: "#FFE04C", WebkitTextFillColor: "#FFE04C", padding: "0px 10px"}}
            className="font-luckiest !text-5xl md:!text-6xl text-stroke-blue drop-shadow-md relative z-10 "
          >
            NOSSOS SERVIÇOS
          </h2>

          <div className="absolute top-5 -right-4 md:right-10 animate-bounce ">
            <Balloon className="text-red-400 fill-red-100 rotate-12 opacity-80 w-12 h-12 md:w-20 md:h-20" />
          </div>

          <div className="absolute top-5 -left-4 md:left-10 animate-bounce ">
            <Balloon className="text-blue-400 fill-blue-100 rotate-12 opacity-80 w-12 h-12 md:w-20 md:h-20" />
          </div>
        </div>

        <div className="init-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2 md:gap-10 mb-[-15px] relative z-20 px-2 md:px-0 max-w-md mx-auto md:max-w-none">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    !rounded-full !py-2 !px-3 !md:px-8 !md:py-3 
                    !flex items-center !justify-center !gap-2
                    !border-2 !border-white !shadow-lg
                    font-luckiest text-sm !md:text-xl !tracking-wider !transition-all duration-300
                    !w-full md:w-auto
                    group hover:-translate-y-1 hover:scale-100 active:scale-95
                    ${activeTab === service.id
                      ? "bg-[#FF9141] text-white transform scale-105 z-30"
                      : "bg-[#38BDF8] text-white hover:bg-[#30aadd]"
                    }
                  `}
                >
                  <Icon
                    size={18}
                    strokeWidth={2.5}
                    className="md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  />
                  <span className="truncate">{service.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="init-hidden">
          <div
            className="bg-white rounded-[40px] !p-6 md:p-10 shadow-2xl relative z-10 flex flex-col lg:flex-row gap-10 items-center border-8 border-gray-50"
            style={{ marginBottom: "0px", marginTop: "25px" }}
          >
            <div className="flex-1 w-full text-center lg:text-left">
              <h3 className="font-luckiest !text-4xl md:!text-6xl text-white text-stroke-orange drop-shadow-sm mb-4 uppercase">
                {activeContent.title}
              </h3>

              <div className="text-sm md:text-lg font-sans text-gray-600 font-bold leading-relaxed mb-5 text-justify">
                <p className="first-letter:text-3xl first-letter:text-[#FF9141]">
                  {activeContent.description}
                </p>
              </div>

              <button className="bg-[#38BDF8] hover:bg-[#FF9141] text-white font-luckiest text-2xl py-4 px-10 !rounded-full shadow-[0_6px_0_#0ea5e9] hover:shadow-[0_6px_0_#e67e22] active:shadow-none active:translate-y-1 transition-all flex items-center gap-1 mx-auto lg:mx-0 group hover:scale-105 hover:brightness-110">
                EU QUERO SABER MAIS
                <ChevronRight
                  size={30}
                  strokeWidth={4}
                  className="transition-transform duration-300 group-hover:translate-x-3 group-hover:scale-125"
                />
              </button>
            </div>

            <div className="flex-1 w-full h-[400px] md:h-[500px] grid grid-cols-2 grid-rows-2 gap-4 relative">
              <div className="absolute -bottom-4 -left-4 animate-pulse z-30">
                <Puzzle className="text-blue-400 rotate-12 w-10 h-10 md:w-16 md:h-16" />
              </div>

              <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden border-8 border-white shadow-lg">
                <img
                  src={activeContent.image1}
                  alt={`Serviço ${activeContent.title} 1`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="col-span-2 md:col-span-1 row-span-1 rounded-3xl overflow-hidden border-8 border-white shadow-lg">
                <img
                  src={activeContent.image2}
                  alt={`Serviço ${activeContent.title} 2`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="col-span-2 md:col-span-1 row-span-1 rounded-3xl overflow-hidden border-8 border-white shadow-lg">
                <img
                  src={activeContent.image3}
                  alt={`Serviço ${activeContent.title} 3`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;