import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

const galleryImages = [
  {
    src: "/images/IMG-20250304-WA0017.jpg",
    alt: "Momentos especiais no Cinderela"
  },
  {
    src: "/images/IMG-20250304-WA0016.jpg",
    alt: "Experiências gastronómicas únicas"
  },
  {
    src: "/images/IMG-20250304-WA0018.jpg",
    alt: "Ambiente acolhedor do restaurante"
  },
  {
    src: "/images/470798816_9085639024831040_5075154299729723081_n.jpg",
    alt: "Experiência gastronómica portuguesa"
  },
  {
    src: "/images/471212240_9083780598350216_4620509615416171463_n.jpg",
    alt: "Especialidades da casa"
  },
  {
    src: "/images/470137426_9055215441206732_3026385478431515673_n.jpg",
    alt: "Pratos típicos portugueses"
  },
  {
    src: "/images/71568794_2600412603353747_7893530285180977152_n.jpg",
    alt: "Momentos especiais no Cinderela"
  },
  {
    src: "/images/57154534_2323533821032941_7037100582154272768_n.jpg",
    alt: "Tradição e qualidade no Cinderela"
  },
  {
    src: "/images/471435025_9166740933387515_6565691308498729452_n.jpg",
    alt: "Gastronomia portuguesa no seu melhor"
  },
  {
    src: "/images/472225853_9141959952532280_3806924327252153959_n.jpg",
    alt: "Sabores autênticos portugueses"
  },
  {
    src: "/images/448594631_7916137771781177_6968230560924564767_n.jpg",
    alt: "Experiência culinária única"
  },
  {
    src: "/images/443716016_7749532231775066_6750533162037137797_n.jpg",
    alt: "Momentos gastronómicos no Cinderela"
  },
  {
    src: "/images/436907319_7594177130643911_5218796424270003036_n.jpg",
    alt: "Pratos tradicionais portugueses"
  },
  {
    src: "/images/132633406_3754802351248094_4540047659558004573_n.jpg",
    alt: "Ambiente acolhedor do restaurante"
  },
  {
    src: "/images/363452103_6627035530691414_301000128759262619_n.jpg",
    alt: "Especialidade da casa"
  },
  {
    src: "/images/346466904_2187631314770834_8963888581703757855_n.jpg",
    alt: "Pratos deliciosos do Cinderela"
  },
  {
    src: "/images/295099250_5487887607939551_8219764985073025120_n.jpg",
    alt: "Momento especial no Cinderela"
  },
  {
    src: "/images/470881033_9100669876661288_425584432431487969_n.jpg",
    alt: "Bolo Rei de Chocolate"
  },
  {
    src: "/images/475896413_9314867945241479_1329711212415206935_n.jpg",
    alt: "Sabores únicos de Portugal"
  },
  {
    src: "/images/470868009_9072296342831975_5077639077277876139_n.jpg",
    alt: "Gastronomia tradicional portuguesa"
  },
  {
    src: "/images/204011364_4252370664824591_3372468539489034191_n.jpg",
    alt: "Pratos típicos do Cinderela"
  },
  {
    src: "/images/188539220_4162371707157821_1750132819983852316_n.jpg",
    alt: "Tradição e qualidade na cozinha"
  },
  {
    src: "/images/183600892_4128708567190802_684146871855558555_n.jpg",
    alt: "Momentos especiais no restaurante"
  },
  {
    src: "/images/82423185_2847850305276641_815238905073762304_n.jpg",
    alt: "Experiência gastronómica única"
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn('up', 0.3)}
        >
          <h2 className="section-title">A Nossa Galeria</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore os momentos especiais e as deliciosas criações do Restaurante & Pastelaria Cinderela.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer"
              variants={zoomIn(0.1 * (index % 8))}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openModal(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500"
              />
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-primary bg-opacity-60 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-center text-sm">{image.alt}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <motion.button
              className="absolute top-4 right-4 z-10 bg-secondary rounded-full p-2 text-primary"
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <img 
              src={selectedImage} 
              alt="Imagem ampliada" 
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;