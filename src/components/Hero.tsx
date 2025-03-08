import React, { useState, useEffect } from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, pulseAnimation } from '../utils/animations';

const Hero: React.FC = () => {
  const { scrollToSection } = useSmoothScroll();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
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
    },
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
    }, 3000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${image.src}')` }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
          </div>
        ))}
        
        {/* Navigation arrows - Removed as requested */}
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-secondary' : 'bg-white bg-opacity-60'}`}
              aria-label={`Ir para slide ${index + 1}`}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn('up', 0.3)}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-2 font-serif italic tracking-wide"
            >
            <span className="text-secondary">Cinderela de Entrecampos</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8"
            variants={fadeIn('up', 0.5)}
          >
            Restaurante & Pastelaria
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-white mb-8"
            variants={fadeIn('up', 0.5)}
          >
            Sabores autênticos da gastronomia portuguesa desde 1995
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.7)}
          >
            <motion.button 
              onClick={() => scrollToSection('gallery')}
              className="btn-secondary mr-4 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={pulseAnimation}
              animate="pulse"
            >
              Galeria
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('menu')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Menu
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;