import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/comentarios.css";

const Comentarios = () => {
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
      text: "blablablablablablablablabla lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, blablablablablablablablabla",
      photo: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: 4,
      name: "Teste 4",
      rating: 5,
      text: "Qualidade nota 10, voltarei com certeza!",
      photo: "https://i.pravatar.cc/150?img=12",
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

    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
          <button className="whatsapp-button transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-110 active:scale-95">
            <span>Entrar em contato</span>
            <FaWhatsapp size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comentarios;
