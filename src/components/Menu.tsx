import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("eventos");
  const { scrollToSection } = useSmoothScroll();
  
  const categories = [
    { id: "eventos", name: "Eventos" },
    { id: "petiscos", name: "Petiscos" },
    { id: "principais", name: "Principais" },
    { id: "especialidades", name: "Especialidades" },
    { id: "bar", name: "Vinhos" }
  ];
  
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn('up', 0.3)}
        >
          <h2 className="section-title">O Nosso Menu</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Descubra a nossa seleção de pratos portugueses autênticos, preparados com os melhores ingredientes e receitas tradicionais.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={zoomIn(0.1 * index)}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-colors text-center ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
        
        <div className="mt-8">
          {activeCategory === "petiscos" && (
            <motion.div 
              className="grid grid-cols-1 place-items-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn('up', 0.3)}
            >
              <motion.a 
                href="/docs/Menu_Petiscos.pdf" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full max-w-xs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Petiscos</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </motion.a>
            </motion.div>
          )}
          
          {activeCategory === "principais" && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 place-items-center max-w-2xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                variants={zoomIn(0.1)}
                href="/docs/Menu_Principais.pdf" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Principais</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </motion.a>
              
              <motion.a 
                variants={zoomIn(0.2)}
                href="/docs/Menu_Buffet.pdf" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Buffet</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </motion.a>
            </motion.div>
          )}
          
          {activeCategory === "especialidades" && (
            <motion.div 
              className="grid grid-cols-1 place-items-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn('up', 0.3)}
            >
              <motion.a 
                href="/docs/CARDAPIO_2024._RIBEYE.pdf" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full max-w-xs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Carnes Angus</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </motion.a>
            </motion.div>
          )}
          
          {activeCategory === "bar" && (
            <motion.div 
              className="grid grid-cols-1 place-items-center max-w-xs mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn('up', 0.3)}
            >
              <motion.a 
                href="/docs/Menu_Vinhos.pdf" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Vinhos</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </motion.a>
            </motion.div>
          )}
          
          {activeCategory === "eventos" && (
            <motion.div 
              className="mb-8 p-6 bg-[#FDF5E6] rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn('up', 0.3)}
            >
              {/* Featured University Menu Section */}
              <motion.div 
                className="mb-8 p-6 bg-primary rounded-lg text-white text-center"
                variants={fadeIn('up', 0.4)}
              >
                <h3 className="text-2xl font-bold mb-4">Destaque: Menu Universitário</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-4">Celebre os seus momentos académicos connosco! Oferecemos menus especiais para:</p>
                    <ul className="list-none space-y-2 text-left ml-4">
                      <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Bênção das Fitas</li>
                      <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Jantares de Curso</li>
                      <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Convívios Académicos</li>
                      <li className="flex items-center"><span className="text-secondary mr-2">✓</span> Festas de Finalistas</li>
                    </ul>
                    <div className="mt-6">
                      <motion.a 
                        href="/docs/BENCAO_DAS_FITAS_2022.pdf" 
                        className="inline-block bg-secondary text-primary font-bold py-3 px-6 rounded-full hover:bg-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver Menu Universitário
                      </motion.a>
                    </div>
                  </div>
                  <motion.div 
                    className="hidden md:block"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src="/images/462258278_3807988702778033_5078099732875333599_n.jpg" 
                      alt="Momentos Académicos" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Menu Boxes */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 place-items-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a 
                  variants={zoomIn(0.1)}
                  href="/docs/BENCAO_DAS_FITAS_2022.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menu Universitário</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </motion.a>
                
                <motion.a 
                  variants={zoomIn(0.2)}
                  href="/docs/Menus_Aniversario.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Aniversário</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </motion.a>
                
                <motion.a 
                  variants={zoomIn(0.3)}
                  href="/docs/Menus_Natal.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Natal</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </motion.a>
                
                <motion.a 
                  variants={zoomIn(0.4)}
                  href="/docs/Menus_Casamento.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Casamento</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </motion.a>
                
                <motion.a 
                  variants={zoomIn(0.5)}
                  href="/docs/Menus_Batizado.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Batizado</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </motion.a>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-4 text-center"
                variants={fadeIn('up', 0.5)}
              >
                Informações Importantes para Eventos
              </motion.h3>
              
              {/* Seção de Sinal */}
              <motion.div 
                className="mb-6"
                variants={fadeIn('up', 0.6)}
              >
                <p className="font-semibold mb-3">Depois de confirmada, deve ser efectuado pagamento do sinal da reserva:</p>
                <ul className="list-none space-y-2 ml-4">
                  <motion.li 
                    className="flex items-center"
                    variants={fadeIn('left', 0.7)}
                  >
                    <span className="text-primary mr-2">•</span> 30% do valor total para Jantares de Curso e Bênção das Fitas
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    variants={fadeIn('left', 0.8)}
                  >
                    <span className="text-primary mr-2">•</span> 50% do valor total para Casamentos, Batizados e outros eventos
                  </motion.li>
                </ul>
              </motion.div>
              
              {/* Seção de Cancelamento */}
              <motion.div 
                className="mb-6"
                variants={fadeIn('up', 0.9)}
              >
                <p className="font-semibold mb-3">Política de Cancelamento:</p>
                <ul className="list-none space-y-2 ml-4">
                  <motion.li 
                    className="flex items-center"
                    variants={fadeIn('left', 1.0)}
                  >
                    <span className="text-primary mr-2">•</span> Cancelamentos com mais de 30 dias de antecedência: devolução de 50% do sinal
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    variants={fadeIn('left', 1.1)}
                  >
                    <span className="text-primary mr-2">•</span> Cancelamentos com menos de 30 dias de antecedência: sem devolução do sinal
                  </motion.li>
                </ul>
              </motion.div>
              
              {/* Seção de Contacto */}
              <motion.div 
                className="text-center mt-8"
                variants={fadeIn('up', 1.2)}
              >
                <p className="mb-4">Para mais informações ou para fazer uma reserva, contacte-nos:</p>
                <motion.a 
                  href="#reservation" 
                  onClick={(e) => scrollToSection(e, 'reservation')}
                  className="inline-block bg-[#D4AF37] text-[#1C2E4A] px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fazer Reserva
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;