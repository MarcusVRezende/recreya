import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Star,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  MessageCircleCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Teste 1",
    rating: 5,
    text: "O atendimento foi excepcional, super recomendo a todos!",
    photo: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 2,
    name: "Teste 2",
    rating: 5,
    text: "blablablablablablablablablablablablablablabla",
    photo: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 3,
    name: "Teste 3",
    rating: 4,
    text: "blablablablablablablablabla",
    photo: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 4,
    name: "Teste 4",
    rating: 5,
    text: "blablablablablablablablablablablabla",
    photo: "https://i.pravatar.cc/150?img=9",
  },
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <Star
      key={i}
      size={18}
      className={`!inline-block ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400/20"}`}
    />
  ));
};

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="!absolute !-right-12 !top-1/2 !-translate-y-1/2 !z-30 bg-[#FFC107] hover:bg-[#ffb300] text-white !p-3 !rounded-full shadow-xl transition-all active:scale-90"
  >
    <ChevronRight size={24} strokeWidth={4} />
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="!absolute !-left-12 !top-1/2 !-translate-y-1/2 !z-30 bg-[#FFC107] hover:bg-[#ffb300] text-white !p-3 !rounded-full shadow-xl transition-all hidden md:block active:scale-90"
  >
    <ChevronLeft size={24} strokeWidth={4} />
  </button>
);

const Comentarios = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-transparent py-24 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        .font-luckiest { font-family: 'Luckiest Guy', cursive; }
        
        /* Remove o vazamento lateral dos cards */
        .slick-list { 
        padding-top: 0px !important;
            overflow: hidden !important; 
            margin: 0 -12px; /* Compensa o padding dos cards para alinhar com as setas */
        }
        .slick-track { display: flex !important; }
        .slick-slide { height: inherit !important; }

        /* Estilização dos pontinhos (dots) */
        .slick-dots li button:before { color: #38BDF8 !important; opacity: 0.5; font-size: 12px; }
        .slick-dots li.slick-active button:before { color: #38BDF8 !important; opacity: 1; }
      `}</style>

      <div className="container mx-auto px-10 relative" id="comentarios">
        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id} className="px-3 py-10">
              <div className="group bg-[#38BDF8] rounded-[40px] !p-8 !flex flex-col items-center text-center text-white h-[380px] border-b-[6px] border-[#2ba9e0] transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-20 h-20 rounded-full border-4 border-white object-cover mb-4"
                />
                <div className="flex gap-1 mb-4">
                  {renderStars(item.rating)}
                </div>
                <h3 className="font-luckiest text-2xl mb-3 tracking-widest uppercase">
                  {item.name}
                </h3>
                <p className="text-sm md:text-base font-medium opacity-90 italic line-clamp-4">
                  "{item.text || "Excelente serviço!"}"
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="!flex justify-center mt-12">
          <button className="bg-[#FF6B00] hover:bg-[#FF852D] text-white font-black !py-5 !px-14 !rounded-full shadow-[0_8px_0_#CC5500] hover:shadow-[0_4px_0_#CC5500] !flex items-center !gap-4 !transition-all transform !active:translate-y-2 !active:shadow-none group">
            <span className="text-2xl uppercase tracking-tighter font-luckiest">
              Entrar em contato
            </span>
            <div className=" !rounded-full !p-1 group-hover:rotate-12 transition-transform">
              <FaWhatsapp size={30} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comentarios;
