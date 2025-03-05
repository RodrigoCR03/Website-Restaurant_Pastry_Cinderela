import React, { useState } from 'react';
import { X } from 'lucide-react';

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
    src: "/images/471321222_9089556924439250_6550247800126160064_n.jpg",
    alt: "Sabores únicos do Cinderela"
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
  },
  {
    src: "/images/135852911_3787307171330945_5727389573875374983_n.jpg",
    alt: "Sabores autênticos portugueses"
  },
  {
    src: "/images/136658678_3787216411340021_8129164563763993682_n.jpg",
    alt: "Tradição portuguesa na cozinha"
  },
  {
    src: "/images/132747338_3755363351191994_1536272411686920328_n.jpg",
    alt: "Ambiente acolhedor e familiar"
  },
  {
    src: "/images/132428288_3749515101776819_1675201730182194239_n.jpg",
    alt: "Momentos únicos com os clientes"
  },
  {
    src: "/images/123296527_3607502159311448_6696524829656636373_n.jpg",
    alt: "Pratos especiais do dia"
  },
  {
    src: "/images/120459379_3516897705038561_3341209099923319315_n.jpg",
    alt: "Experiências gastronómicas memoráveis"
  },
  {
    src: "/images/118537276_3426272940767705_2950302828037540808_n.jpg",
    alt: "Tradição culinária no Cinderela"
  },
  {
    src: "/images/118309576_4740694492611177_2643396005104335448_n.jpg",
    alt: "Momentos especiais na cozinha"
  },
  {
    src: "/images/107039196_3268644906530510_8307745193904691013_n.jpg",
    alt: "Sabores únicos do Cinderela"
  },
  {
    src: "/images/104476437_3231943610200640_1789843781520989585_n.jpg",
    alt: "Gastronomia portuguesa autêntica"
  },
  {
    src: "/images/105285440_3214841525244182_3134958986738293441_n.jpg",
    alt: "Pratos tradicionais do dia"
  },
  {
    src: "/images/465053671_8798525883542357_1251735962029844238_n.jpg",
    alt: "Experiência única no Cinderela"
  },
  {
    src: "/images/70978840_2728519657209707_5271319576922030080_n.jpg",
    alt: "Momentos gastronómicos especiais"
  },
  {
    src: "/images/76776575_2702047506523589_257801469162422272_n.jpg",
    alt: "Tradição e qualidade no serviço"
  },
  {
    src: "/images/72365810_2642702875791386_2900689030452609024_n.jpg",
    alt: "Sabores autênticos de Portugal"
  },
  {
    src: "/images/72051579_2633877373340603_3340392882975539200_n.jpg",
    alt: "Especialidades portuguesas"
  },
  {
    src: "/images/71380594_2622287421166265_2037420322151464960_n.jpg",
    alt: "Pratos deliciosos do dia"
  },
  {
    src: "/images/71498229_2606194039442270_1467184154280984576_n.jpg",
    alt: "Ambiente familiar do Cinderela"
  },
  {
    src: "/images/69578678_2562016823859992_139407543142187008_n.jpg",
    alt: "Momentos especiais com os clientes"
  },
  {
    src: "/images/67601808_2500248366703505_6405839161005178880_n.jpg",
    alt: "Experiências gastronómicas únicas"
  },
  {
    src: "/images/67550340_2496288343766174_6906567712755941376_n.jpg",
    alt: "Sabores tradicionais do Cinderela"
  },
  {
    src: "/images/67528032_2463369033724772_6748630392208621568_n.jpg",
    alt: "Tradição culinária portuguesa"
  },
  {
    src: "/images/66113271_2425071717554504_4183798471339278336_n.jpg",
    alt: "Pratos típicos portugueses"
  },
  {
    src: "/images/62364382_2389620041099672_2964490842649133056_n.jpg",
    alt: "Gastronomia portuguesa no Cinderela"
  },
  {
    src: "/images/62433807_2385964421465234_5358958393186844672_n.jpg",
    alt: "Momentos únicos no Cinderela"
  },
  {
    src: "/images/465123492_8798554313539514_1277494827060319143_n.jpg",
    alt: "Especialidades da casa"
  },
  {
    src: "/images/462258278_3807988702778033_5078099732875333599_n.jpg",
    alt: "Sabores autênticos do Cinderela"
  },
  {
    src: "/images/52592624_2214161625312182_5072175863395516416_n.jpg",
    alt: "Pratos tradicionais portugueses"
  },
  {
    src: "/images/52602967_2203978866330458_855976777250504704_n.jpg",
    alt: "Experiência gastronómica no Cinderela"
  },
  {
    src: "/images/49103468_2133445556717123_3130174952758575104_n.jpg",
    alt: "Ambiente acolhedor do Cinderela"
  },
  {
    src: "/images/49667073_2133445493383796_8687134306113421312_n.jpg",
    alt: "Momentos especiais no Cinderela"
  },
  {
    src: "/images/Captura de ecrã 2025-03-04 165447Mesa.png",
    alt: "Mesa preparada no Restaurante Cinderela"
  },
  {
    src: "/images/Captura de ecrã 2025-03-04 164940Natal.png",
    alt: "Decoração de Natal no Cinderela"
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Galeria</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Faça uma viagem visual pelo nosso restaurante e descubra os nossos deliciosos pratos e ambiente acolhedor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg cursor-pointer h-64"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 hover:opacity-100 text-lg font-bold">Ver</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Imagem ampliada" 
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;