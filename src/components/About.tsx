import React, { useState, useEffect } from 'react';
import { Utensils, Coffee, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

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
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn('up', 0.3)}
        >
          <h2 className="section-title">A Nossa História</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
          O Cinderela tem vindo a servir cozinha portuguesa e pastelaria artesanal desde 1995,
            trazendo as ricas tradições culinárias de Portugal tanto aos locais como aos visitantes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn('right', 0.5)}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px]">
                {images.map((image, index) => (
                  <motion.div 
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <motion.button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Imagem anterior"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Próxima imagem"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-secondary' : 'bg-white bg-opacity-50'}`}
                  aria-label={`Ir para slide ${index + 1}`}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn('left', 0.5)}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">O Sabor de Portugal</h3>
            <p className="text-gray-600 mb-6">
              No Cinderela, orgulhamo-nos de preservar os sabores da cozinha portuguesa. 
              As nossas receitas foram transmitidas ao longo de gerações, assegurando que cada prato reflete 
              a essência da rica herança culinária de Portugal.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-6"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-start"
                variants={zoomIn(0.1)}
              >
                <div className="bg-secondary p-2 rounded-full mr-3">
                  <Utensils size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Cozinha Autêntica</h4>
                  <p className="text-sm text-gray-600">Sabores tradicionais portugueses</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={zoomIn(0.2)}
              >
                <div className="bg-secondary p-2 rounded-full mr-3">
                  <Coffee size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Pastelaria Artesanal</h4>
                  <p className="text-sm text-gray-600">Doces e pastéis feitos à mão</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={zoomIn(0.3)}
              >
                <div className="bg-secondary p-2 rounded-full mr-3">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Qualidade Premium</h4>
                  <p className="text-sm text-gray-600">Ingredientes frescos e selecionados</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={zoomIn(0.4)}
              >
                <div className="bg-secondary p-2 rounded-full mr-3">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Tradição desde 1995</h4>
                  <p className="text-sm text-gray-600">Mais de 25 anos de excelência</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça a Nossa História
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;