import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';


const testimonialsData = [
  {
    id: 1,
    name: 'teste1',
    rating: 5, 
    text: '',
    
    photo: 'https://i.pravatar.cc/150?img=7', 
  },
  {
    id: 2,
    name: 'teste2',
    rating: 5,
    text: 'blablablablablablablablablablablablablablabla',
    photo: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 3,
    name: 'teste3',
    rating: 4,
    text: 'blablablablablablablablabla',
    photo: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 4,
    name: 'teste4',
    rating: 5,
    text: 'blablablablablablablablablablablabla',
    photo: 'https://i.pravatar.cc/150?img=9',
  },
];



const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star 
        key={i} 
        size={20} 
       
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    );
  }
  return stars;
};



const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#38BDF8] hover:bg-[#30aadd] text-yellow-400 p-2 rounded-full shadow-lg transition-all hidden md:block">
        <ChevronRight size={32} strokeWidth={3} />
      </button>
    );
  };
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#38BDF8] hover:bg-[#30aadd] text-yellow-400 p-2 rounded-full shadow-lg transition-all hidden md:block">
        <ChevronLeft size={32} strokeWidth={3} />
      </button>
    );
  };



const Comentarios = () => {


  const settings = {
    dots: true,             
    infinite: true,          
    speed: 500,             
    slidesToShow: 3,         
    slidesToScroll: 1,       
    nextArrow: <CustomNextArrow />, 
    prevArrow: <CustomPrevArrow />,
   
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          arrows: false,   
        }
      }
    ]
  };

  return (
    <section>
      
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap'); .font-luckiest { font-family: 'Luckiest Guy', cursive; }`}</style>

      <div className="container mx-auto px-4 relative md:px-12">
        
        <Slider {...settings} className="px-2 py-8">
          {testimonialsData.map((item) => (
            <div key={item.id} className="px-3 md:px-4 h-full">
                
                <div className="bg-[#38BDF8] rounded-[30px] p-6 md:p-8 flex flex-col items-center text-center text-white h-full !shadow-[0_1px_0_rgba(251,191,36,0.8)] border-b-2 border-yellow-400 transition-transform hover:-translate-y-1">
                    
                    <img 
                        src={item.photo} 
                        alt={`Foto de ${item.name}`}
                        className="w-20 h-20 rounded-full border-4 border-white shadow-sm mb-4 object-cover"
                    />

                    <div className="flex gap-1 mb-3">
                        {renderStars(item.rating)}
                    </div>

                    <h3 className="font-bold text-xl md:text-2xl mb-2">{item.name}</h3>

                    <p className="text-sm md:text-base font-medium leading-relaxed opacity-95 line-clamp-5">
                        "{item.text}"
                    </p>
                </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-12 relative z-20">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-3 transition-all transform hover:scale-105 group border-b-4 border-orange-700">
                <span className="text-lg">Entrar em contato</span>
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform"/>
            </button>
        </div>

      </div>
    </section>
  );
};

export default Comentarios;