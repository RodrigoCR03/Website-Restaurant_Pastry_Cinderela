import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente Regular",
    content: "O Cinderela é o meu restaurante favorito em Lisboa! A comida é autêntica e deliciosa, e o serviço é sempre impecável. Recomendo especialmente o bacalhau à lagareiro.",
    rating: 5,
    image: "/images/71568794_2600412603353747_7893530285180977152_n.jpg"
  },
  {
    id: 2,
    name: "João Pereira",
    role: "Visitante",
    content: "Visitei o Cinderela durante as minhas férias em Portugal e fiquei impressionado com a qualidade da comida. Os pastéis de nata são os melhores que já provei!",
    rating: 5,
    image: "/images/82423185_2847850305276641_815238905073762304_n.jpg"
  },
  {
    id: 3,
    name: "Ana Martins",
    role: "Moradora Local",
    content: "Frequento o Cinderela há mais de 10 anos e nunca me desiludiu. A pastelaria é sempre fresca e os pratos principais são preparados com ingredientes de qualidade.",
    rating: 4,
    image: "/images/295099250_5487887607939551_8219764985073025120_n.jpg"
  },
  {
    id: 4,
    name: "António Costa",
    role: "Empresário",
    content: "Excelente local para reuniões de negócios. O ambiente é acolhedor, a comida é excelente e o serviço é rápido. O buffet ao almoço tem uma excelente relação qualidade-preço.",
    rating: 5
  },
  {
    id: 5,
    name: "Carla Santos",
    role: "Turista",
    content: "Descobri este restaurante por acaso e que sorte a minha! A comida portuguesa autêntica servida aqui é simplesmente maravilhosa. Voltarei certamente na minha próxima visita.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    // Pause autoplay temporarily when manually navigating
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  return (
    <section id="testimonials" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn('up', 0.3)}
        >
          <h2 className="section-title">O Que Dizem os Nossos Clientes</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Descubra o que os nossos clientes têm a dizer sobre a sua experiência no Restaurante & Pastelaria Cinderela.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            className="overflow-hidden rounded-lg shadow-lg bg-white p-6 md:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  y: index === currentIndex ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {testimonial.image && (
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-secondary">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={`${i < testimonial.rating ? 'text-secondary fill-secondary' : 'text-gray-300'} mr-1`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4 text-lg">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-bold text-primary text-xl">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation arrows */}
          <motion.button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white shadow-lg text-primary p-3 rounded-full z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white shadow-lg text-primary p-3 rounded-full z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-secondary w-6' : 'bg-gray-300'}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;