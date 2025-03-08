import React from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Hero: React.FC = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Imagem WhatsApp 2025-03-04 às 22.25.37_dcbb5c26.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
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