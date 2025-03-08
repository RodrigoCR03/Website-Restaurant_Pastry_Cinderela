import React, { useState, useEffect } from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollToSection } = useSmoothScroll();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "/images/Imagem WhatsApp 2025-03-04 às 22.25.37_dcbb5c26.jpg",
      alt: "Interior do Restaurante Cinderela"
    },
    {
      src: "/images/Imagem WhatsApp 2025-03-08 às 00.13.26_cfcac16e.jpg",
      alt: "Restaurante Cinderela"
    },
    {
      src: "/images/IMG-20250304-WA0010.jpg",
      alt: "Especialidades do Restaurante Cinderela"
    },
    {
      src: "/images/IMG-20250304-WA0016.jpg",
      alt: "Ambiente do Restaurante Cinderela"
    },
    {
      src: "/images/436907319_7594177130643911_5218796424270003036_n.jpg",
      alt: "Pastelaria Cinderela"
    },
    {
      src: "/images/470137426_9055215441206732_3026385478431515673_n.jpg",
      alt: "Restaurante Cinderela"
    },
    {
      src: "/images/118309576_4740694492611177_2643396005104335448_n.jpg",
      alt: "Especialidades da Pastelaria Cinderela"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${image.src}')` }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
          </div>
        ))}
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-secondary' : 'bg-white bg-opacity-60'}`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            <span className="block">Cinderela de Entrecampos</span>
            <span className="text-secondary">Restaurante & Pastelaria</span>
          </h1>
          <p className="text-lg md:text-xl text-light mb-8">
            Experimente os ricos sabores de Portugal no coração de Lisboa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#menu" 
              onClick={(e) => scrollToSection(e, 'menu')}
              className="btn-secondary"
            >
              Ver a Nossa Ementa
            </a>
            <a 
              href="#reservation" 
              onClick={(e) => scrollToSection(e, 'reservation')}
              className="btn-primary"
            >
              Fazer Reserva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;