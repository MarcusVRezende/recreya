import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/comentarios.css";

const NextArrow = ({ onClick }) => (
  <button className="arrow-btn next-arrow" onClick={onClick}>
    <ChevronRight size={30} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow-btn prev-arrow" onClick={onClick}>
    <ChevronLeft size={30} />
  </button>
);

const Comentarios = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Mariana Silva",
      rating: 5,
      text: "Contratei a Recreya para o aniversário de 6 anos do meu filho e foi a melhor escolha! Os monitores têm uma energia incrível, prenderam a atenção de todas as crianças do início ao fim com brincadeiras lúdicas incríveis. Consegui curtir a festa inteira tranquila!",
      photo: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 2,
      name: "Rodrigo Soares",
      rating: 5,
      text: "A oficina de slime e a pintura de rosto foram os grandes destaques da festa da minha filha! A equipe é super pontual, extremamente carinhosa com os pequenos e usam materiais de excelente qualidade. Recomendo de olhos fechados!",
      photo: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 3,
      name: "Juliana Mendes",
      rating: 5,
      text: "Sensacional! As esculturas de balão mania encantaram não só os pequenos, mas os adultos também. O atendimento desde o primeiro contato no WhatsApp até o dia do evento foi impecável. Com certeza faremos mais festas juntos!",
      photo: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 4,
      name: "Camila Rocha",
      rating: 5,
      text: "Equipe maravilhosa e super preparada! Conseguiram integrar crianças de várias idades na mesma gincana de um jeito super divertido e seguro. Valeu cada centavo investido, a animação deles é contagiante!",
      photo: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const [slides, setSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlides(1);
      } else if (window.innerWidth <= 1024) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: slides,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: slides > 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="comentarios-section">
      <div className="comentarios-container">
        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id} className="slide-item">
              <div className="testimonial-card">
                <img
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  className="user-photo"
                />

                <div className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < item.rating ? "#FACC15" : "none"}
                      color={i < item.rating ? "#FACC15" : "#ffffff44"}
                    />
                  ))}
                </div>

                <h3 className="user-name">{item.name}</h3>
                <p className="user-text">"{item.text}"</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="cta-container">
          <button className=" !no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-110 active:scale-95">
            <a
              href="https://api.whatsapp.com/message/Q6PAXQS4V6E4P1?autoload=1&app_absent=0&utm_source=ig"
              target="_blank"
              className="whatsapp-button !no-underline flex items-center justify-center"
            >
              Entrar em contato
              <FaWhatsapp size={32} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comentarios;
