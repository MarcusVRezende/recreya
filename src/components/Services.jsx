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
  ClipboardList,
} from "lucide-react";

const servicesData = [
  {
    id: "recreacao",
    label: "RECREAÇÃO",
    title: "RECREAÇÃO",
    icon: PartyPopper,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione quaerat repudiandae velit amet natus, facere soluta architecto quidem quia obcaecati laborum numquam dolorem! Saepe voluptates ipsum doloremque nemo quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui hic ex iste cumque rerum eligendi accusamus culpa earum? Placeat quibusdam natus non cum quod recusandae veniam dicta quidem maiores?",
  },
  {
    id: "oficinas",
    label: "OFICINAS",
    title: "OFICINAS",
    icon: Palette,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione quaerat repudiandae velit amet natus, facere soluta architecto quidem quia obcaecati laborum numquam dolorem! Saepe voluptates ipsum doloremque nemo quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui hic ex iste cumque rerum eligendi accusamus culpa earum? Placeat quibusdam natus non cum quod recusandae veniam dicta quidem maiores? a criatividade da criançada! Oficinas de Slime, Pintura em Tela, Miçangas, Jardinagem e Culinária. As crianças se divertem criando e levam suas obras de arte para casa como lembrancinha da festa.",
  },
  {
    id: "personagens",
    label: "PERSONAGENS",
    title: "PERSONAGENS",
    icon: Baby,
    description:
      "A magia acontece Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione quaerat repudiandae velit amet natus, facere soluta architecto quidem quia obcaecati laborum numquam dolorem! Saepe voluptates ipsum doloremque nemo quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui hic ex iste cumque rerum eligendi accusamus culpa earum? Placeat quibusdam natus non cum quod recusandae veniam dicta quidem maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione quaerat repudiandae velit amet natus, facere soluta architecto quidem quia obcaecati laborum numquam dolorem! Saepe voluptates ipsum doloremque nemo quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui hic ex iste cumque rerum eligendi accusamus culpa earum? Placeat quibusdam natus non cum quod recusandae veniam dicta quidem maiores? personagem favorito do seu filho aparece na festa! Temos princesas, heróis e mascotes que interagem, tiram fotos e participam do momento do parabéns.",
  },
  {
    id: "brinquedos",
    label: "BRINQUEDOS",
    title: "BRINQUEDOS",
    icon: Rocket,
    description:
      "Complete a festa com noLorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione quaerat repudiandae velit amet natus, facere soluta architecto quidem quia obcaecati laborum numquam dolorem! Saepe voluptates ipsum doloremque nemo quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo qui hic ex iste cumque rerum eligendi accusamus culpa earum? Placeat quibusdam natus non cum quod recusandae veniam dicta quidem maiores?ssa locação de brinquedos: Cama Elástica, Piscina de Bolinhas, Tobogã Inflável e Área Baby. Diversão garantida do início ao fim do evento.",
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
            style={{ color: "#FFE04C", WebkitTextFillColor: "#FFE04C", padding: "0 10px", marginBottom: "-20px" }}
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
          <div
            className="
    grid grid-cols-2 md:grid-cols-4        
    !md:flex md:flex-wrap      
    justify-center 
    gap-2 md:gap-10 
    mb-[-15px] 
    relative z-20 
    px-2 md:px-0 
    max-w-md mx-auto             /* Limita a largura no mobile para os botões não esticarem muito */
    md:max-w-none                /* Libera a largura no desktop */
">
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

              <div className="text-sm md:text-lg font-sans  text-gray-600 font-bold text-lg leading-relaxed mb-5 text-justify">
                <p className="first-letter:text-3xl first-letter:text-[#FF9141]">
                  {activeContent.description}
                </p>
              </div>

              <button className="
  bg-[#38BDF8] hover:bg-[#FF9141] 
  text-white font-luckiest text-2xl py-4 px-10 
  !rounded-full shadow-[0_6px_0_#0ea5e9] hover:shadow-[0_6px_0_#e67e22] 
  active:shadow-none active:translate-y-1 
  transition-all flex items-center gap-1 mx-auto lg:mx-0 group
  /* NOVAS CLASSES ABAIXO */
  hover:scale-105 hover:brightness-110
">
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
                  src="src/assets/Fotos_servicos/imagem-temporaria-1.jpg"
                  alt="Serviço"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="col-span-2 md:col-span-1 row-span-1 rounded-3xl overflow-hidden border-8 border-white shadow-lg">
                <img
                  src="src/assets/Fotos_servicos/imagem-temporaria-2.jpg"
                  alt="Detalhe"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-2 md:col-span-1 row-span-1 rounded-3xl overflow-hidden border-8 border-white shadow-lg">
                <img
                  src="src/assets/Fotos_servicos/imagem-temporaria-3.jpg"
                  alt="Momento"
                  className="w-full h-full object-cover"
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
