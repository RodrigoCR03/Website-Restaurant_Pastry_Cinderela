# 🌐 WEBSITE - Restaurante&Pastelaria Cinderela

[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-brightgreen)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blueviolet)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Este é o repositório do website oficial do Restaurante&Pastelaria Cinderela, desenvolvido com tecnologias modernas para proporcionar a melhor experiência aos nossos clientes.

## ✨ Funcionalidades

- 🎨 Design moderno e responsivo
- 📱 Experiência mobile-first
- 🗺️ Integração com Google Maps
- 📝 Sistema de reservas online
- 🍽️ Cardápio digital atualizado
- 📸 Galeria de fotos
- 📞 Formulário de contato

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript
- **Vercel** - Para Deployment do website com dominio.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd Website_Restaurante-Pastry-Cinderela
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## 🌐 Estrutura do Projeto

```
/
├── public/          # Arquivos estáticos
├── src/
│   ├── assets/     # Recursos (imagens, fontes, etc.)
│   ├── components/ # Componentes React reutilizáveis
│   ├── config/     # Configurações da aplicação
│   ├── hooks/      # Custom hooks
│   ├── pages/      # Páginas da aplicação
│   └── types/      # Definições de tipos TypeScript
├── .env.example    # Template para variáveis de ambiente
├── .gitignore     # Arquivos ignorados pelo git
├── package.json    # Dependências e scripts
└── README.md       # Este arquivo
```

## 🔒 Segurança

Consulte nossa [seção de segurança](#-configuração-do-ambiente-e-segurança) para informações sobre:
- Configuração de variáveis de ambiente
- Boas práticas de segurança
- Manutenção de dependências

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🔒 Configuração do Ambiente e Segurança

1. Crie um arquivo `.env` baseado no `.env.example`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env` com seus valores reais:
```env
VITE_API_URL=sua_url_api
VITE_EMAIL_SERVICE_KEY=sua_chave_email
VITE_GOOGLE_MAPS_API_KEY=sua_chave_google_maps
VITE_NODE_ENV=development
```

3. Nunca compartilhe ou comite o arquivo `.env` no repositório
4. Mantenha as dependências atualizadas executando regularmente:
```bash
npm audit
npm update
```

### 🛡️ Boas Práticas de Segurança

- Todas as chaves de API e dados sensíveis devem ser armazenados no arquivo `.env`
- Use HTTPS em produção
- Implemente rate limiting em APIs
- Valide todos os inputs do usuário
- Mantenha logs de erro em produção sem expor detalhes sensíveis
- Execute auditorias de segurança regularmente