import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/animations';

const galleryImages = [
  // Momentos Académicos Inesquecíveis
  {
    src: "/images/462258278_3807988702778033_5078099732875333599_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/57154534_2323533821032941_7037100582154272768_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/52592624_2214161625312182_5072175863395516416_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/71380594_2622287421166265_2037420322151464960_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/465053671_8798525883542357_1251735962029844238_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/465123492_8798554313539514_1277494827060319143_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/71498229_2606194039442270_1467184154280984576_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/70978840_2728519657209707_5271319576922030080_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  {
    src: "/images/475896413_9314867945241479_1329711212415206935_n.jpg",
    alt: "Momentos Académicos Inesquecíveis"
  },
  // Momentos Especiais
  {
    src: "/images/62364382_2389620041099672_2964490842649133056_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/82423185_2847850305276641_815238905073762304_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/448594631_7916137771781177_6968230560924564767_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/346466904_2187631314770834_8963888581703757855_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/443716016_7749532231775066_6750533162037137797_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/71568794_2600412603353747_7893530285180977152_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/72365810_2642702875791386_2900689030452609024_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/67528032_2463369033724772_6748630392208621568_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/62433807_2385964421465234_5358958393186844672_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/107039196_3268644906530510_8307745193904691013_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/118537276_3426272940767705_2950302828037540808_n.jpg",
    alt: "Momentos Especiais"
  },
  // Momentos Especiais
  {
    src: "/images/132428288_3749515101776819_1675201730182194239_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/52602967_2203978866330458_855976777250504704_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/IMG-20250304-WA0017.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/471212240_9083780598350216_4620509615416171463_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/470137426_9055215441206732_3026385478431515673_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/436907319_7594177130643911_5218796424270003036_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/132633406_3754802351248094_4540047659558004573_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/363452103_6627035530691414_301000128759262619_n.jpg",
    alt: "Momentos Especiais"
  },
  {
    src: "/images/295099250_5487887607939551_8219764985073025120_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/470868009_9072296342831975_5077639077277876139_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/204011364_4252370664824591_3372468539489034191_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/188539220_4162371707157821_1750132819983852316_n.jpg",
    alt: "Especialidades da Cinderela"
  },
  {
    src: "/images/183600892_4128708567190802_684146871855558555_n.jpg",
    alt: "Especialidades da Cinderela"
  },

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
            Explore alguns dos muitos momentos especiais no Restaurante & Pastelaria Cinderela de Entrecampos.
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