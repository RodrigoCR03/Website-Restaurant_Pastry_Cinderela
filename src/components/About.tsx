import React from 'react';
import { Utensils, Coffee, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">A Nossa História</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            O Cinderela tem servido autêntica cozinha portuguesa e pastelaria artesanal desde 1995, 
            trazendo as ricas tradições culinárias de Portugal para os locais e visitantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/images/Imagem WhatsApp 2025-03-04 às 22.25.37_dcbb5c26.jpg" 
              alt="Interior do Restaurante Cinderela" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">O Sabor de Portugal</h3>
            <p className="text-gray-600 mb-6">
              No Cinderela, orgulhamo-nos de preservar os sabores autênticos da cozinha portuguesa. 
              As nossas receitas foram transmitidas através de gerações, garantindo que cada prato captura 
              a essência da rica herança culinária de Portugal.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Utensils className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Cozinha Tradicional</h4>
                  <p className="text-sm text-gray-600">Pratos portugueses autênticos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Coffee className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Pastelaria Artesanal</h4>
                  <p className="text-sm text-gray-600">Feita à mão com amor</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Award className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Ingredientes de Qualidade</h4>
                  <p className="text-sm text-gray-600">Produtos de origem local</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Experiência</h4>
                  <p className="text-sm text-gray-600">Mais de 28 anos de tradição</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;