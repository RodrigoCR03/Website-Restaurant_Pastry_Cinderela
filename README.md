# Website - Restaurante&Pastelaria Cinderela

Este é o repositório do website oficial do Restaurante&Pastelaria Cinderela, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Vite](https://vitejs.dev/) - Build tool e servidor de desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [ESLint](https://eslint.org/) - Linter para JavaScript/TypeScript

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## 🚀 Comandos Disponíveis

- Iniciar o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

- Construir o projeto para produção:
```bash
npm run build
# ou
yarn build
```

- Visualizar a versão de produção localmente:
```bash
npm run preview
# ou
yarn preview
```

- Executar o linter:
```bash
npm run lint
# ou
yarn lint
```

## 🌐 Estrutura do Projeto

- `/src` - Código fonte da aplicação
- `/public` - Arquivos estáticos
- `/src/components` - Componentes React reutilizáveis
- `/src/pages` - Páginas da aplicação
- `/src/assets` - Recursos estáticos (imagens, fontes, etc.)

## 📝 Desenvolvimento

O projeto utiliza:
- ESLint para garantir a qualidade do código
- TypeScript para tipagem estática
- Tailwind CSS para estilização
- Vite para um desenvolvimento rápido e eficiente

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

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

- Todas as chaves de API e dados sensíveis são armazenados no arquivo `.env`.
- Usa-se HTTPS em produção.
- Implementar rate limiting em APIs.
- Valida-se todos os inputs do usuário.
- Mantenhem-se logs de erro em produção sem expor detalhes sensíveis.
- Executa-se auditorias de segurança regularmente.