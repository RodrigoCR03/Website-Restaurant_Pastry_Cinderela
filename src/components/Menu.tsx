import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("petiscos");
  
  const categories = [
    { id: "petiscos", name: "Petiscos" },
    { id: "principais", name: "Principais" },
    { id: "especialidades", name: "Especialidades" },
    { id: "bar", name: "Bar" },
    { id: "eventos", name: "Eventos" }
  ];
  
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">O Nosso Menu</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Descubra a nossa seleção de pratos portugueses autênticos, preparados com os melhores ingredientes e receitas tradicionais.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors text-center ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="mt-8">
          {activeCategory === "petiscos" && (
            <div className="grid grid-cols-1 place-items-center">
              <a 
                href="#" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full max-w-xs"
                onClick={(e) => {
                  e.preventDefault();
                  alert('PDF de Menu de Petiscos em breve disponível');
                }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Petiscos</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </a>
            </div>
          )}
          
          {activeCategory === "principais" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 place-items-center max-w-2xl mx-auto">
              <a 
                href="#" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                onClick={(e) => {
                  e.preventDefault();
                  alert('PDF de Menu de Pratos Principais em breve disponível');
                }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Principais</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </a>
              
              <a 
                href="/docs/Menu_Buffet.pdf" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-bold text-primary mb-2">Buffet</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </a>
            </div>
          )}
          
          {activeCategory === "especialidades" && (
            <div className="grid grid-cols-1 place-items-center">
              <a 
                href="/docs/CARDAPIO_2024._RIBEYE.pdf" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full max-w-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-bold text-primary mb-2">Carnes Angus</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </a>
            </div>
          )}
          
          {activeCategory === "bar" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 place-items-center max-w-2xl mx-auto">
              <a 
                href="#" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                onClick={(e) => {
                  e.preventDefault();
                  alert('PDF de Menu de Vinhos em breve disponível');
                }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Vinhos</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </a>
              
              <a 
                href="#" 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                onClick={(e) => {
                  e.preventDefault();
                  alert('PDF de Menu de Cocktails em breve disponível');
                }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">Cocktails</h3>
                <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
              </a>
            </div>
          )}
          
          {activeCategory === "eventos" && (
            <div className="mb-8 p-6 bg-[#FDF5E6] rounded-lg shadow-md">
              {/* Featured University Menu Section */}
              <div className="mb-8 p-6 bg-primary rounded-lg text-white text-center">
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
                      <a 
                        href="/docs/BENCAO_DAS_FITAS_2022.pdf" 
                        className="inline-block bg-secondary text-primary font-bold py-3 px-6 rounded-full hover:bg-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Menu Universitário
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img 
                      src="/images/462258278_3807988702778033_5078099732875333599_n.jpg" 
                      alt="Momentos Académicos" 
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Menu Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 place-items-center">
                <a 
                  href="/docs/BENCAO_DAS_FITAS_2022.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menu Universitário</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </a>
                
                <a 
                  href="/docs/Menus_Aniversario.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Aniversário</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </a>
                
                <a 
                  href="/docs/Menus_Natal.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Natal</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </a>
                
                <a 
                  href="/docs/Menus_Casamento.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Casamento</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </a>
                
                <a 
                  href="/docs/Menus_Batizado.pdf" 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center justify-center min-h-[150px] mx-auto w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">Menus de Batizado</h3>
                  <div className="text-sm text-gray-500 mt-2">Clique para ver o PDF</div>
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">Informações Importantes para Eventos</h3>
              
              {/* Seção de Sinal */}
              <div className="mb-6">
                <p className="font-semibold mb-3">Depois de confirmada, deve ser efectuado pagamento do sinal da reserva:</p>
                <ul className="list-none space-y-2 ml-4">
                  <li>• Até 5 pessoas, sem sinal</li>
                  <li>• Até 20 pessoas, 17.50€</li>
                  <li>• Até 30 pessoas, 35€</li>
                  <li>• Até 50 pessoas, 75€</li>
                  <li>• Acima das 50 pessoas, com a confirmação pagamento de 100€</li>
                </ul>
                <p className="mt-2 text-sm italic">
                  Alerta-se que no dia anterior ou no próprio dia até às 12 horas deve ser paga a totalidade ou pelo menos 80% do valor, sendo o restante pago, no acto, antes da refeição.
                </p>
              </div>

              {/* Seção de Pagamento */}
              <div className="mb-6">
                <p className="font-semibold mb-2">O valor de sinal deve ser efectuado por MB WAY para os números</p>
                <p className="text-lg font-bold text-[#D4AF37] mb-4">+351 964 549 147 ou +351 969 524 991 com nome da reserva</p>
              </div>

              {/* Alerta */}
              <div className="mb-6 p-4 bg-[#FFF3CD] border border-[#FFE69C] rounded-lg">
                <p className="font-semibold text-[#856404]">ALERTAMOS:</p>
                <p className="text-[#856404]">
                  Caso haja redução drástica (+25%) do nº de pessoas indicadas na confirmação da reserva (no próprio dia), perderá o valor do sinal.
                </p>
              </div>

              {/* Horário */}
              <div className="mb-6">
                <p className="font-semibold mb-2">Horário:</p>
                <p>das 20 horas às 23.00 horas</p>
                <p className="text-sm italic">(Excepto menu académico: 20 às 22.30 horas)</p>
              </div>

              {/* Nota Final */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">NOTA:</p>
                <p>O pagamento total será efectuado pelo responsável da marcação da mesa, não aceitamos pagamentos individuais.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;