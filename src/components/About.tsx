import React from 'react';
import { Utensils, Coffee, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

const About: React.FC = () => {
  const images = [
    {
      src: "/images/Imagem WhatsApp 2025-03-04 às 22.25.37_dcbb5c26.jpg",
      alt: "Interior da Sala de Baixo"
    },
    {
      src: "/images/Imagem WhatsApp 2025-03-08 às 00.13.26_cfcac16e.jpg",
      alt: "Interior da Sala de Cima"
    }
  ];
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn('up', 0.3)}
        >
          <h2 className="section-title mb-4">A Nossa História</h2>
          <p className="max-w-3xl mx-auto text-gray-600 italic">
            "Neste espaço, o compromisso com a qualidade e o carinho em cada detalhe transformam cada visita a uma experiência memorável, 
            consolidando a Cinderela de Entrecampos como um nome querido por todos os que cruzam as suas portas."
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {images.map((image, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 0.3 + index * 0.2)}
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-[300px]">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-30 hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="text-lg font-semibold">{image.alt}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn('left', 0.5)}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4 font-serif">Um Ícone de Lisboa</h3>
              <div className="w-20 h-1 bg-secondary mb-6"></div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Cinderela de Entrecampos é um restaurante e pastelaria icónico, situado no coração de Lisboa, 
                que desde 1995 tem vindo a encantar tanto os locais como os visitantes. Localizado na zona central 
                de Entrecampos, este espaço tornou-se um ponto de referência pela sua autenticidade e qualidade, 
                oferecendo o melhor da gastronomia portuguesa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <p className="text-gray-600 italic">
                Como restaurante, destaca-se pela confeção de pratos típicos que refletem a riqueza da cozinha 
                tradicional, servindo refeições reconfortantes que aquecem a alma de quem por lá passa. É, também, 
                um lugar de eleição para momentos marcantes da vida académica – como os tradicionais Jantares de 
                Curso e a Benção das Fitas – e um ponto de encontro para clubes desportivos de todo o país.
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Na vertente de pastelaria, a Cinderela de Entrecampos orgulha-se de produzir os seus próprios bolos, 
              feitos com dedicação e savoir-faire. Entre as suas criações, brilha com especial destaque o Bolo Rei 
              de Chocolate, uma reinterpretação inovadora do clássico natalício que se tornou a estrela do Natal 
              para muitos portugueses.
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={zoomIn(0.1)}
                whileHover={{ y: -5 }}
              >
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <Utensils size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-lg">Cozinha Autêntica</h4>
                  <p className="text-gray-600">Sabores tradicionais portugueses</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={zoomIn(0.2)}
                whileHover={{ y: -5 }}
              >
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <Coffee size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-lg">Pastelaria Artesanal</h4>
                  <p className="text-gray-600">Doces e bolos feitos à mão</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={zoomIn(0.3)}
                whileHover={{ y: -5 }}
              >
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <Award size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-lg">Tradição & Inovação</h4>
                  <p className="text-gray-600">O clássico com toques modernos</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={zoomIn(0.4)}
                whileHover={{ y: -5 }}
              >
                <div className="bg-secondary p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-lg">Desde 1995</h4>
                  <p className="text-gray-600">Um espaço de convívio e celebração</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;