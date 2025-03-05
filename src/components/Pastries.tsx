import React from 'react';

const pastries = [
  {
    name: "Pastel de Nata",
    image: "/images/IMG-20250304-WA0003.jpg",
    description: "Massa folhada crocante recheada com creme de leite e polvilhada com canela"
  },
  {
    name: "Bolo Rei de Chocolate",
    image: "/images/470881033_9100669876661288_425584432431487969_n.jpg",
    description: "Como seria o Natal sem o irresistível Bolo Rei de Chocolate"
  },
  {
    name: "Arroz Doce",
    image: "/images/AvoRosa3.jpg",
    description: "Tradicional arroz doce português, cremoso e perfumado com canela e casca de limão"
  },
  {
    name: "Pudim Flan",
    image: "/images/UB5A6262-2-1050x1313.jpg",
    description: "Delicioso pudim flan caseiro com calda de caramelo dourada"
  },
  {
    name: "Lampreia de Ovos",
    image: "/images/472225853_9141959952532280_3806924327252153959_n.jpg",
    description: "Doce tradicional português em forma de lampreia, feito com gemas de ovos e fios de ovos"
  },
  {
    name: "Bolo Rei",
    image: "/images/471435025_9166740933387515_6565691308498729452_n.jpg",
    description: "O tradicional bolo das festas natalícias, rico em frutos secos e frutas cristalizadas"
  },
  {
    name: "Tronco de Natal",
    image: "/images/Captura de ecrã 2025-03-04 164940Natal.png",
    description: "Delicioso bolo em forma de tronco, recheado com creme e decorado com chocolate"
  },
  {
    name: "Pastel de Feijão",
    image: "/images/66113271_2425071717554504_4183798471339278336_n.jpg",
    description: "Pastel tradicional com recheio cremoso de feijão branco e amêndoa"
  },
  {
    name: "Croissant de Amêndoa",
    image: "/images/IMG-20250304-WA0004.jpg",
    description: "Croissant folhado coberto com amêndoas laminadas e recheado com creme de amêndoa"
  },
  {
    name: "Mil Folhas",
    image: "/images/IMG-20250304-WA0014.jpg",
    description: "Delicada sobremesa de massa folhada com camadas de creme pasteleiro e açúcar em pó"
  },
  {
    name: "Salame de Chocolate",
    image: "/images/IMG-20250304-WA0012.jpg",
    description: "Sobremesa tradicional portuguesa feita com chocolate, bolachas e frutos secos"
  },
  {
    name: "Trança de Coco",
    image: "/images/IMG-20250304-WA0002.jpg",
    description: "Massa doce trançada com recheio de coco ralado e cobertura dourada"
  },
  {
    name: "Bolo de Chocolate",
    image: "/images/IMG-20250304-WA0008.jpg",
    description: "Bolo húmido de chocolate com cobertura de ganache e decoração artesanal"
  },
  {
    name: "Frutas da Época",
    image: "/images/IMG-20250304-WA0009.jpg",
    description: "Seleção de frutas frescas da época, cuidadosamente escolhidas para sua sobremesa"
  },
  {
    name: "Bolo de Amêndoa",
    image: "/images/IMG-20250304-WA0011.jpg",
    description: "Bolo tradicional português feito com amêndoas moídas, leve e aromático"
  },
  {
    name: "Delícia Folhada & Jesuíta",
    image: "/images/IMG-20250304-WA0005.jpg",
    description: "Duo de doces folhados: delícia com creme suave e jesuíta com cobertura de amêndoa"
  },
  {
    name: "Bolo de Aniversário de Frutos-Vermelhos",
    image: "/images/IMG-20250304-WA0020.jpg",
    description: "Delicioso bolo recheado com creme e frutos vermelhos frescos, decorado artesanalmente"
  },
  {
    name: "Bolo de Aniversário de Chocolate-de-Leite",
    image: "/images/IMG-20250304-WA0021.jpg",
    description: "Bolo especial com camadas de chocolate de leite, recheio cremoso e decoração elegante"
  },
  {
    name: "Bolo de Aniversário de Chocolate-branco",
    image: "/images/IMG-20250304-WA0022.jpg",
    description: "Bolo sofisticado de chocolate branco com recheio especial e acabamento refinado"
  },
  {
    name: "Bolo de Aniversário de Caramelo",
    image: "/images/IMG-20250304-WA0023.jpg",
    description: "Bolo festivo com delicioso sabor de caramelo, decorado com detalhes dourados"
  }
];

const Pastries: React.FC = () => {
  return (
    <section id="pastries" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Pastelaria</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A nossa pastelaria oferece uma variedade de doces tradicionais portugueses, 
            feitos à mão diariamente usando receitas autênticas transmitidas através de gerações.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8">
          {pastries.map((pastry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative pb-[75%]">
                <img 
                  src={pastry.image} 
                  alt={pastry.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary mb-2">{pastry.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pastry.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Visite a nossa pastelaria para descobrir mais delícias. 
            Também aceitamos encomendas especiais para eventos e celebrações.
          </p>
          <a href="#contact" className="btn-secondary">Encomendar Pastelaria</a>
        </div>
      </div>
    </section>
  );
};

export default Pastries;