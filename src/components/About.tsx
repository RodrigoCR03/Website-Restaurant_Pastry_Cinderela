import React, { useState, useEffect } from 'react';
import { Utensils, Coffee, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "/images/Imagem WhatsApp 2025-03-04 às 22.25.37_dcbb5c26.jpg",
      alt: "Interior do Restaurante Cinderela"
    },
    {
      src: "/images/Imagem WhatsApp 2025-03-08 às 00.13.26_cfcac16e.jpg",
      alt: "Restaurante Cinderela"
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
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">A Nossa História</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
          O Cinderela tem vindo a servir cozinha portuguesa e pastelaria artesanal desde 1995,
            trazendo as ricas tradições culinárias de Portugal tanto aos locais como aos visitantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px]">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-secondary' : 'bg-white bg-opacity-50'}`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">O Sabor de Portugal</h3>
            <p className="text-gray-600 mb-6">
              No Cinderela, orgulhamo-nos de preservar os sabores da cozinha portuguesa. 
              As nossas receitas foram transmitidas ao longo de gerações, assegurando que cada prato reflete 
              a essência da rica herança culinária de Portugal.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Utensils className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Cozinha Tradicional</h4>
                  <p className="text-sm text-gray-600">Pratos portugueses autênticos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Coffee className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Pastelaria Artesanal</h4>
                  <p className="text-sm text-gray-600">Feita à mão com amor</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Award className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Ingredientes de Qualidade</h4>
                  <p className="text-sm text-gray-600">Produtos de origem local</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Experiência</h4>
                  <p className="text-sm text-gray-600">Mais de 28 anos de tradição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;