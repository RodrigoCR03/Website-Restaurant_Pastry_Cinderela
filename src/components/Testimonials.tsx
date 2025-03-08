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
    name: "Paulo Teixeira",
    role: "Cliente Google",
    content: "Um lugar onde se come muito bem. Um ponto de encontro para amigos e familiares, sempre em boa companhia e com muita simpatia. Visitem que vale a pena. Top mesmo.",
    rating: 5
  },
  {
    id: 2,
    name: "Neward",
    role: "Cliente Google",
    content: "Foi uma ótima experiência, estivemos em grupo, para despedidas, e fomos muito bem recebidos. O atendimento foi ótimo e as bebidas foram um grande diferencial. Já tarde da noite, chegou outro grupo mas mesmo assim a qualidade do serviço não diminuiu.",
    rating: 5
  },
  {
    id: 3,
    name: "Teresa Mourão",
    role: "Cliente Google",
    content: "Vim a este restaurante jantar, sendo que é necessário realizar pré-pagamento. O menu incluía entradas, um prato de peixe, um prato de carne e buffet de sobremesas. Ideal para receber grupos grandes. O ambiente é descontraído e os funcionários são simpáticos. Tem uma boa localização em relação a transportes públicos.",
    rating: 4
  },
  {
    id: 4,
    name: "Marco Pinto",
    role: "Cliente Google",
    content: "Um local que já conta com alguma história e tradição académica em Lisboa. Foi recentemente restaurado estando atualmente com um aspeto novo e atual. Tem dois pisos e aceitam reservas para os mais variados jantares. Tem a possibilidade de comer a la carte, buffet ou escolhendo um dos variados menus para grupos. Vendem tabaco e aceitam pagamentos com multibanco. O staff é simpático e a comida é variada e bem confeccionada, não sendo no entanto um restaurante famoso pela sua gastronomia, mas sim pela capacidade de receber grandes grupos. Localizado numa zona com bastantes acessos e aberto até à meia noite.",
    rating: 5
  },
  {
    id: 5,
    name: "Vera Jacobetty",
    role: "Cliente Google",
    content: "Óptima Pastelaria com empregados sempre muito simpáticos. É onde vou comprar o meu Bolo Rainha todos os anos. Também servem refeições e já experimentei o Buffet. Boa sopa, boa Carne e boas sobremesas. Pena é a zona que é péssima para estacionar o carro. Aconselho a ir cedo para encomendas e se possível levar um acompanhante para esperar no carro",
    rating: 5
  },
  {
    id: 6,
    name: "Jorge Neto",
    role: "Cliente Google",
    content: "Pastelaria e Restaurante. Boa qualidade e bom ambiente. Atendimento a mesa. Tem pequena esplanada p/ fumadores e não só mas também.",
    rating: 5
  },
  {
    id: 7,
    name: "Alex Partida",
    role: "Cliente Google",
    content: "Boa comida, bom vinho, bons preços.",
    rating: 5
  },
  {
    id: 8,
    name: "Jimmy Allen",
    role: "Cliente Google",
    content: "Ótimas pessoas e vibrações ainda melhores. Para quem vem a Lisboa, não se vai realmente a Lisboa se não se sentar na Cinderela e ficar maluco. Antiguidade moderna.",
    rating: 5
  },
  {
    id: 9,
    name: "Susana Patricio",
    role: "Cliente Google",
    content: "Colaboradores sempre disponíveis. Atendimento perfeito. Bom ambiente. Comida parece caseira.",
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