import React, { useState } from 'react';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
};

const menuItems: MenuItem[] = [
  // Petiscos (anteriormente Entradas)
  { name: "Caldo Camarão", description: "Caldo tradicional de camarão", price: "3.80", category: "starters" },
  { name: "Sopa Alentejana", description: "Sopa tradicional da região do Alentejo", price: "2.50", category: "starters" },
  { name: "Queijo da Serra com Tostinhas", description: "Queijo da Serra com tostas", price: "10.00", category: "starters" },
  { name: "Prato de Caracóis", description: "Prato de caracóis cozinhados com ervas e alho", price: "7.50", category: "starters" },
  { name: "Travessa de Caracoletas", description: "Travessa de caracoletas grandes (12 unidades)", price: "15.00", category: "starters" },
  { name: "Pica-Pau", description: "Pequenos pedaços de carne com pickles", price: "10.00", category: "starters" },
  { name: "Prato de Presunto", description: "Prato de presunto", price: "10.00", category: "starters" },
  { name: "Tábua de Presunto com Queijo", description: "Tábua com presunto e queijo", price: "15.00", category: "starters" },
  { name: "Fatia de Queijo da Serra", description: "Fatia de queijo da Serra", price: "7.50", category: "starters" },
  { name: "Moelas com Pickles", description: "Moelas com pickles", price: "10.00", category: "starters" },
  { name: "Camarão Cozido", description: "Camarão cozido", price: "17.50", category: "starters" },
  { name: "Camarão à Guilho", description: "Camarão ao alho", price: "17.50", category: "starters" },
  { name: "Camarão à la Plancha", description: "Camarão grelhado", price: "25.00", category: "starters" },
  { name: "Ovos Mexidos com Farinheira", description: "Ovos mexidos com farinheira", price: "9.00", category: "starters" },
  { name: "Ovos Mexidos, Tomate, Cogumelos", description: "Ovos mexidos com tomate e cogumelos", price: "9.00", category: "starters" },
  { name: "Chouriço Assado", description: "Chouriço assado", price: "8.50", category: "starters" },
  { name: "Morcela Assada com Ananás", description: "Morcela assada com ananás", price: "9.00", category: "starters" },
  // Adicionando os itens que estavam em "snacks"
  { name: "Prego no Pão", description: "Prego no pão", price: "5.50", category: "starters" },
  { name: "Prego Especial Queijo e Bacon", description: "Prego especial com queijo e bacon", price: "8.50", category: "starters" },
  { name: "Bifana no Pão", description: "Bifana no pão", price: "4.50", category: "starters" },
  { name: "Panado Porco no Pão", description: "Panado de porco no pão", price: "4.50", category: "starters" },
  { name: "Tosta Mista", description: "Tosta mista de fiambre e queijo", price: "5.00", category: "starters" },
  
  // Pratos Principais - Peixe
  { name: "Bacalhau à Chefe", description: "Bacalhau preparado à moda do chef", price: "20.00", category: "fish" },
  { name: "Bacalhau à Lagareiro", description: "Bacalhau grelhado com azeite e alho", price: "20.00", category: "fish" },
  { name: "Douradinha Grelhada na Brasa", description: "Dourada grelhada na brasa", price: "18.50", category: "fish" },
  { name: "Peixe Espada Grelhado", description: "Peixe espada grelhado", price: "18.50", category: "fish" },
  { name: "Lombinhos Peixe Riscado Arroz e Salada", description: "Lombinhos de peixe com arroz e salada", price: "16.50", category: "fish" },
  { name: "Posta de Garoupa Grelhada", description: "Posta de garoupa grelhada", price: "22.50", category: "fish" },
  { name: "Posta de Salmão Grelhada", description: "Posta de salmão grelhada", price: "18.50", category: "fish" },
  
  // Pratos Principais - Carne
  { name: "Bife Cinderela", description: "Bife especial Cinderela", price: "20.00", category: "meat" },
  { name: "Bife de Vitela à Portuguesa", description: "Bife de vitela à portuguesa", price: "20.00", category: "meat" },
  { name: "Bife de Vaca à Café", description: "Bife de vaca com molho de café", price: "20.00", category: "meat" },
  { name: "Bifinhos de Vitela c/ Champinhons", description: "Bifinhos de vitela com cogumelos", price: "19.00", category: "meat" },
  { name: "Bitoque", description: "Bife com ovo estrelado e batatas fritas", price: "13.50", category: "meat" },
  { name: "Escalopes Panados c/ Batata Frita", description: "Escalopes panados com batata frita", price: "17.50", category: "meat" },
  { name: "Lombinhos Porco na Grelha", description: "Lombinhos de porco grelhados", price: "17.50", category: "meat" },
  { name: "Bife da Vazia de Vitela Grelhado", description: "Bife da vazia de vitela grelhado", price: "20.00", category: "meat" },
  { name: "Alheira com Batata Frita e Ovo", description: "Alheira com batata frita e ovo", price: "13.50", category: "meat" },
  { name: "Hambúrguer de Vitela com Ovo", description: "Hambúrguer de vitela com ovo", price: "13.50", category: "meat" },
  
  // Omeletes
  { name: "Omelete de Camarão", description: "Omelete de camarão", price: "18.50", category: "omelets" },
  { name: "Omelete Fiambre/Queijo/Cogumelos", description: "Omelete de fiambre, queijo ou cogumelos", price: "15.00", category: "omelets" },
  { name: "Omelete de Presunto", description: "Omelete de presunto", price: "16.00", category: "omelets" },
  { name: "Omelete Mista, Queijo/Fiambre", description: "Omelete mista com queijo e fiambre", price: "16.00", category: "omelets" },
  { name: "Omelete Mista, Queijo/Presunto", description: "Omelete mista com queijo e presunto", price: "19.00", category: "omelets" },
  { name: "Tortilha", description: "Tortilha de batata à espanhola", price: "16.00", category: "omelets" },
  
  // Saladas
  { name: "Salada Cinderela", description: "Salada especial Cinderela", price: "16.00", category: "salads" },
  { name: "Salada Tropical", description: "Salada tropical com frutas frescas", price: "16.00", category: "salads" },
  { name: "Salada Mista", description: "Salada mista", price: "4.50", category: "salads" },
  
  // Buffet
  { name: "Buffet Adolescente (até 8 anos)", description: "Buffet para adolescentes (até 8 anos)", price: "10.00", category: "buffet" },
  { name: "Buffet Adulto", description: "Buffet para adultos", price: "14.90", category: "buffet" },
  { name: "Buffet Sobremesa", description: "Buffet de sobremesas variadas", price: "3.50", category: "buffet" },
  
  // Extras
  { name: "Pão", description: "Pão", price: "1.30", category: "extras" },
  { name: "Patés", description: "Patés", price: "1.90", category: "extras" },
  
  // Bebidas
  { name: "Sumo Natural", description: "Sumo natural", price: "3.00", category: "drinks" },
  { name: "Caneca de Cerveja", description: "Caneca de cerveja", price: "3.00", category: "drinks" },
  { name: "Imperial/Fino", description: "Imperial/Fino", price: "1.40", category: "drinks" },
  { name: "Copo de Vinho", description: "Copo de vinho", price: "1.80", category: "drinks" },
  
  // Vinhos Recomendados - DOURO
  { name: "Barca Velha Legado (Douro)", description: "Vinho tinto premium do Douro", price: "890.00", category: "wines" },
  { name: "Barca Velha Reserva Especial Ferreira (Douro)", description: "Vinho tinto reserva exclusivo do Douro", price: "360.00", category: "wines" },
  { name: "Quinta das Carvalhas V. Velhas (Douro)", description: "Vinho tinto de vinhas velhas do Douro", price: "81.50", category: "wines" },
  { name: "C.A.R.M C.M. (Douro)", description: "Vinho tinto premium do Douro", price: "65.00", category: "wines" },
  { name: "Quinta do Cidrô Marquiz (Douro)", description: "Vinho tinto elegante do Douro", price: "55.00", category: "wines" },
  { name: "Quinta dos Aciprestes (Douro)", description: "Vinho tinto encorpado do Douro", price: "55.00", category: "wines" },
  { name: "Sousão (Douro)", description: "Vinho tinto de casta única do Douro", price: "49.00", category: "wines" },
  { name: "Vale do Tua Vinhas Grandes Reserva 2011 (Douro)", description: "Vinho tinto grande reserva envelhecido do Douro", price: "45.00", category: "wines" },
  { name: "EPTUS (Douro)", description: "Vinho tinto encorpado do Douro", price: "35.00", category: "wines" },
  { name: "Vale do Tua G. Reserva (Douro)", description: "Vinho tinto grande reserva do Douro", price: "27.50", category: "wines" },
  { name: "Vale do Tua T. Nacional (Douro)", description: "Vinho tinto Touriga Nacional do Douro", price: "27.50", category: "wines" },
  { name: "Alta Pontuação V. Velhas (Douro)", description: "Vinho tinto de vinhas velhas do Douro", price: "25.00", category: "wines" },
  { name: "Arizo G. Reserva (Douro)", description: "Vinho tinto grande reserva do Douro", price: "25.00", category: "wines" },
  { name: "Casa Velha Reserva (Douro)", description: "Vinho tinto reserva do Douro", price: "25.00", category: "wines" },
  { name: "Cedro do Noval Reserva (Douro)", description: "Vinho tinto reserva do Douro", price: "20.00", category: "wines" },
  { name: "Desnível Sousão (Douro)", description: "Vinho tinto de casta Sousão do Douro", price: "20.00", category: "wines" },
  { name: "Quinta da Basilia Reserva (Douro)", description: "Vinho tinto reserva do Douro", price: "19.50", category: "wines" },
  { name: "Quinta do Cidrô Touriga N. (Douro)", description: "Vinho tinto Touriga Nacional do Douro", price: "19.50", category: "wines" },
  { name: "Quinta dos Aciprestes Reserva (Douro)", description: "Vinho tinto reserva do Douro", price: "17.50", category: "wines" },
  { name: "Quinta dos Aciprestes T. Nacional (Douro)", description: "Vinho tinto Touriga Nacional do Douro", price: "17.50", category: "wines" },
  { name: "Alta Pontuação Reserva (Douro)", description: "Vinho tinto reserva do Douro", price: "20.00", category: "wines" },
  { name: "Quinta do Cidrô Alvarinho (Douro)", description: "Vinho branco Alvarinho do Douro", price: "20.00", category: "wines" },
  { name: "Couvada Reserva (Douro)", description: "Vinho tinto reserva do Douro", price: "17.50", category: "wines" },
  { name: "Montaleire Vinhas Velhas (Douro)", description: "Vinho tinto de vinhas velhas do Douro", price: "17.50", category: "wines" },
  { name: "Mira Mansa (Douro)", description: "Vinho tinto clássico do Douro", price: "16.00", category: "wines" },
  { name: "Almotriga (Douro)", description: "Vinho tinto frutado do Douro", price: "15.50", category: "wines" },
  { name: "Alta Pontuação (Douro)", description: "Vinho tinto bem pontuado do Douro", price: "17.50", category: "wines" },
  { name: "Casa de Sócalcos (Douro)", description: "Vinho tinto tradicional do Douro", price: "16.00", category: "wines" },
  { name: "Dandy Cidrô (Douro)", description: "Vinho tinto elegante do Douro", price: "15.00", category: "wines" },
  { name: "Esteva (Douro)", description: "Vinho tinto fresco do Douro", price: "15.00", category: "wines" },
  { name: "Evel (Douro)", description: "Vinho tinto equilibrado do Douro", price: "16.00", category: "wines" },
  { name: "Montaleire Branco (Douro)", description: "Vinho branco do Douro", price: "17.50", category: "wines" },
  { name: "Papa Figos (Douro)", description: "Vinho tinto frutado do Douro", price: "17.50", category: "wines" },
  { name: "Planalto (Douro)", description: "Vinho branco aromático do Douro", price: "16.00", category: "wines" },
  { name: "Porca de Murça (Douro)", description: "Vinho tinto popular do Douro", price: "15.00", category: "wines" },
  { name: "Quinta da Basilia (Douro)", description: "Vinho tinto elegante do Douro", price: "17.50", category: "wines" },
  { name: "Quinta dos Aciprestes (Douro)", description: "Vinho tinto estruturado do Douro", price: "17.50", category: "wines" },
  
  // Vinhos Recomendados - DÃO
  { name: "Quinta de Carvalhais Reserva (Dão)", description: "Vinho tinto reserva premium do Dão", price: "45.00", category: "wines" },
  { name: "Quinta Monteirinhos M. Chaves (Dão)", description: "Vinho tinto exclusivo do Dão", price: "39.50", category: "wines" },
  { name: "Quinta Monteirinhos G. Reserva (Dão)", description: "Vinho tinto grande reserva do Dão", price: "20.00", category: "wines" },
  { name: "Adega da Corga (Dão)", description: "Vinho tinto tradicional do Dão", price: "19.50", category: "wines" },
  { name: "Quinta da Fata (Dão)", description: "Vinho tinto elegante do Dão", price: "18.50", category: "wines" },
  { name: "Quinta Monteirinhos Reserva (Dão)", description: "Vinho tinto reserva do Dão", price: "20.00", category: "wines" },
  { name: "Quinta Monteirinhos Encuzado (Dão)", description: "Vinho branco Encruzado do Dão", price: "20.00", category: "wines" },
  { name: "Penalva Monocastas (Dão)", description: "Vinho de casta única do Dão", price: "16.50", category: "wines" },
  { name: "Penalva G. Reserva (Dão)", description: "Vinho tinto grande reserva do Dão", price: "16.50", category: "wines" },
  { name: "Quinta Monteirinhos M. Afonso (Dão)", description: "Vinho de seleção especial do Dão", price: "15.00", category: "wines" },
  { name: "Grão Vasco (Dão)", description: "Vinho tinto clássico do Dão", price: "15.00", category: "wines" },
  { name: "Mélange a 3 (Dão)", description: "Blend de três castas do Dão", price: "17.50", category: "wines" },
  { name: "Milénio (Dão)", description: "Vinho tinto moderno do Dão", price: "15.00", category: "wines" },
  { name: "Quinta de Carvalhais (Dão)", description: "Vinho tinto premium do Dão", price: "17.50", category: "wines" },
  { name: "Quinta de Fafide Reserva (Dão)", description: "Vinho tinto reserva do Dão", price: "17.50", category: "wines" },
  { name: "Encostas de Penalva/Pias (Dão)", description: "Vinho tinto de valor do Dão", price: "9.50", category: "wines" },
  
  // Vinhos Recomendados - ALENTEJO
  { name: "Pêra Manca (Alentejo)", description: "Vinho tinto premium do Alentejo", price: "595.00", category: "wines" },
  { name: "Equinoccio Branco Reserva (Alentejo)", description: "Vinho branco reserva premium do Alentejo", price: "35.00", category: "wines" },
  { name: "Revelado (Alentejo)", description: "Vinho tinto encorpado do Alentejo", price: "27.50", category: "wines" },
  { name: "Grande - Trinca Bolotas (Alentejo)", description: "Vinho tinto encorpado do Alentejo", price: "22.50", category: "wines" },
  { name: "Monte Barbo Reserva (Alentejo)", description: "Vinho tinto reserva do Alentejo", price: "20.00", category: "wines" },
  { name: "Planura (Alentejo)", description: "Vinho tinto clássico do Alentejo", price: "15.00", category: "wines" },
  { name: "Planura Reserva (Alentejo)", description: "Vinho tinto reserva do Alentejo", price: "20.00", category: "wines" },
  { name: "Trinca Bolotas (Alentejo)", description: "Vinho tinto frutado do Alentejo", price: "16.00", category: "wines" },
  
  // Vinhos Recomendados - VINHO VERDE
  { name: "Quinta de Azevedo Alvarinho (Vinho Verde)", description: "Vinho branco Alvarinho refrescante", price: "17.50", category: "wines" },
  { name: "Avelda (Vinho Verde)", description: "Vinho verde branco fresco", price: "15.00", category: "wines" },
  { name: "Gazela (Vinho Verde)", description: "Vinho verde branco leve e fresco", price: "15.00", category: "wines" },
  { name: "Muralhas (Vinho Verde)", description: "Vinho verde branco tradicional", price: "15.00", category: "wines" },
  { name: "Quinta da Avelda (Vinho Verde)", description: "Vinho verde branco premium", price: "15.00", category: "wines" },
  
  // Vinhos Recomendados - OUTRAS REGIÕES
  { name: "Caloyo Reserva (Outras Regiões)", description: "Vinho tinto reserva", price: "29.50", category: "wines" },
  { name: "Fundão Alpedrinha Reserva (Outras Regiões)", description: "Vinho tinto reserva da região de Fundão", price: "17.50", category: "wines" },
  { name: "Quinta das Garrafouchas (Outras Regiões)", description: "Vinho tinto tradicional", price: "15.00", category: "wines" },
  { name: "Ilha Tinta Negra (Outras Regiões)", description: "Vinho tinto de casta Tinta Negra da região insular", price: "26.00", category: "wines" },
  { name: "Marques de Tomar Reserva (Outras Regiões)", description: "Vinho tinto reserva da região de Tomar", price: "20.00", category: "wines" },
  { name: "Marques de Tomar Superior (Outras Regiões)", description: "Vinho tinto superior da região de Tomar", price: "17.50", category: "wines" },
  { name: "Galelo (Outras Regiões)", description: "Vinho tinto distintivo português", price: "17.50", category: "wines" },
  { name: "Mateus Rosé (Outras Regiões)", description: "Famoso vinho rosé português", price: "15.00", category: "wines" },
  { name: "Bucelas Arinto (Outras Regiões)", description: "Vinho branco Arinto da região de Bucelas", price: "16.00", category: "wines" },
  
  // Sobremesas
  { name: "Pastel de Nata", description: "Tradicional pastel de nata português", price: "2.50", category: "desserts" },
  { name: "Arroz Doce", description: "Arroz doce português com canela", price: "3.50", category: "desserts" },
  { name: "Pudim Flan", description: "Pudim flan de caramelo", price: "3.50", category: "desserts" },
  { name: "Mousse de Chocolate", description: "Mousse de chocolate caseira", price: "4.00", category: "desserts" },
  { name: "Omelete de Chouriço", description: "Omelete com chouriço", price: "18.50", category: "omelets" },
  { name: "Omelete Mista", description: "Omelete com queijo, presunto e cogumelos", price: "15.00", category: "omelets" },

  // Eventos - Menus de Aniversário (agora primeiro)
  {
    name: "Menu 1 de Aniversário",
    description: "Entradas: Pão Manteiga / Pasta, Paté de atum, Queijo alentejanos, Salgadinhos diversos. | 1º Prato: Bacalhau Espiritual. | 2º Prato: Lombinhos com Cogumelos. | Bebidas: Água, Sumos, Sangria, cerveja, Vinhos: tinto e branco. | Sobremesa: Pudim flan, leite creme, Salada de frutas, Bolo de Chocolate, Bolo de Amêndoa, Bolo de Aniversário. | 1 garrafa de espumante.",
    price: "27.50",
    category: "snacks"
  },
  {
    name: "Menu 2 de Aniversário",
    description: "Entradas: Martini ou moscatel, Pão Manteiga / Pasta, Paté de atum, Bóia de Favalos, Queijinhos alentejanos, Salgadinhos diversos, Ovos mexidos com farinheira. | Quentes: 1º Prato: Bacalhau com Natas, 2º Prato: Bifinhos de Vitela com Cogumelos. | Bebidas: Água, Sumos, Sangria, cerveja, Vinhos: Douro Reserva, tinto e branco. | Mesa de Sobremesas: Pudim flan, leite-creme, Salada de frutas, Bolo de Chocolate, Bolo de Amêndoa. | Café: Porto, Amêndoa Amarga, whisky novo. | Bolo de Aniversário + 1 garrafa de champanhe.",
    price: "30.00",
    category: "snacks"
  },
  {
    name: "Menu 3 de Aniversário",
    description: "Entradas: Martini ou moscatel. | Bebidas: Água, Sumos, Sangria, cerveja. | Vinhos: Dão, tinto e branco. | Entradas: Pão Manteiga, presunto fatiado, Alheira Mirandela, Queijinhos alentejanos, Salgadinhos diversos, Ovos mexidos com farinheira, Camarão flambeado, Santola recheada. | Quentes: 1º Prato: Arroz de Polvo com Camarão, 2º Prato: Vitela à Lafões. | Mesa de Sobremesas: Pudim flan, leite-creme, Salada de frutas, Bolo de Chocolate, Bolo de Amêndoa, Bolo Rei. | Café: 1 G. Porto, 1 G. Amêndoa Amarga.",
    price: "32.50",
    category: "snacks"
  },

  // Eventos - Menu Académico (segundo)
  {
    name: "Menu Académico",
    description: "Entradas: Pão, manteigas, patês, queijinhos fatiados, Salgadinhos diversos, Presunto fatiado. | Sopa: Creme de cenoura. | Peixes: Bacalhau espiritual com salada juliana, Lombinhos de peixe com salada russa. | Carnes: Lombo de porco assado à padeiro, Nacos de vitela à Beirão. | Sobremesas: Tarte de Amêndoa, Pudim flã, Bolo de chocolate, Arroz doce, Brigadeiro, gelatinas, frutas diversas. | Bebidas: Vinho branco e tinto, águas, sumos, cerveja, sangria. | Café: Amêndoa amarga, Porto, Bagaceira.",
    price: "20.00",
    category: "snacks"
  },

  // Eventos - Menus de Natal (por último)
  {
    name: "Menu 1 de Natal",
    description: "Entradas: Pão, Manteiga, presunto fatiado, Queijinhos fatiados, Ovos mexidos com farinheira, Alheira c/picles. | Quentes: 1º Prato à escolha entre Lombo Assado no Forno com Batata Assada, Bacalhau Espiritual com Camarão, Massada de Garoupa com Camarão. | Bebidas: Água, Sumos, Sangria, cerveja, Vinhos: Tinto e branco. | Mesa de Sobremesas: Pudim flan, leite-creme, molotov, salada de frutas, Bolo de Chocolate, Bolo de Amêndoa.",
    price: "30.00",
    category: "snacks"
  },
  {
    name: "Menu 2 de Natal",
    description: "Entradas: Pão Manteiga / Pasta, Paté de atum, Queijinhos alentejanos, Salgadinhos diversos. | 1º Prato: Bacalhau folhado com saladinha francesa. | 2º Prato: Vitela à Lafões. | Bebidas: Água, Sumos, Sangria, cerveja, Vinhos: tinto e branco. | Sobremesas: Pudim flan, leite-creme, Salada de frutas, Bolo de Chocolate, Bolo de Amêndoa. | Café.",
    price: "25.00",
    category: "snacks"
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("starters");
  
  const categories = [
    { id: "starters", name: "Petiscos" },  // Mudando nome de "Entradas" para "Petiscos"
    { id: "omelets", name: "Omeletes" },
    { id: "salads", name: "Saladas" },
    { id: "meat", name: "Carne" },
    { id: "fish", name: "Peixe" },
    { id: "buffet", name: "Buffet" },
    { id: "desserts", name: "Sobremesas" },
    { id: "wines", name: "Vinho" },
    { id: "drinks", name: "Bebidas" },
    { id: "snacks", name: "Eventos" }  // Mudando nome de "Petiscos" para "Eventos" e movendo para o final
  ];
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
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
          {activeCategory === "buffet" && (
            <div className="mb-6 p-4 bg-[#FFF3CD] border border-[#FFE69C] rounded-lg text-center">
              <p className="text-[#856404] font-medium">
                O serviço de Buffet está disponível apenas durante o almoço
              </p>
            </div>
          )}
          
          {activeCategory === "snacks" && (
            <div className="mb-8 p-6 bg-[#FDF5E6] rounded-lg shadow-md">
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
          
          <div className={`grid ${
            activeCategory === "snacks" 
              ? "grid-cols-1" 
              : "grid-cols-1 md:grid-cols-2"
          } gap-6`}>
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                  activeCategory === "snacks" ? "col-span-1" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                  <span className="text-lg font-semibold text-[#D4AF37]">{item.price}€</span>
                </div>
                {item.category === "snacks" ? (
                  <div className="text-gray-600">
                    {item.description.split('|').map((section, idx) => (
                      <p key={idx} className="mb-2">
                        <span className="font-medium">{section.trim()}</span>
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/files/menu.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver Menu Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;