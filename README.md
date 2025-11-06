# 🛒 Marketplace

Uma aplicação web moderna de marketplace para vendedores gerenciarem seus produtos, visualizarem estatísticas de vendas e acompanharem o desempenho de sua loja.

## 📋 Sobre o Projeto

O Marketplace é uma plataforma completa que permite aos vendedores:

- 🔐 Autenticação segura (login e cadastro)
- 📊 Dashboard com métricas e estatísticas dos últimos 30 dias
- 📦 Gerenciamento completo de produtos (criar, editar, listar, filtrar)
- 📈 Visualização de produtos vendidos e disponíveis
- 📉 Gráficos de visualizações por dia
- 🎨 Interface moderna e responsiva

## 🚀 Tecnologias Utilizadas

### Core
- **[React 19.1.0](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite 7.0.0](https://vite.dev/)** - Build tool e dev server ultrarrápido

### Roteamento e Estado
- **[React Router 7.6.3](https://reactrouter.com/)** - Roteamento declarativo
- **[TanStack Query 5.83.0](https://tanstack.com/query)** - Gerenciamento de estado assíncrono e cache

### Formulários e Validação
- **[React Hook Form 7.60.0](https://react-hook-form.com/)** - Gerenciamento de formulários performático
- **[Zod 4.0.0](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[@hookform/resolvers 5.1.1](https://github.com/react-hook-form/resolvers)** - Integração Zod + React Hook Form

### Estilização
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Framework CSS utility-first
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Utilitário para construção de classNames
- **[tailwind-merge 3.3.1](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind

### UI/UX
- **[Hugeicons React 1.0.5](https://hugeicons.com/)** - Biblioteca de ícones moderna
- **[Sonner 2.0.6](https://sonner.emilkowal.ski/)** - Notificações toast elegantes
- **[Recharts 3.1.0](https://recharts.org/)** - Biblioteca de gráficos para React

### HTTP Client
- **[Axios 1.11.0](https://axios-http.com/)** - Cliente HTTP baseado em Promises

### Qualidade de Código
- **[ESLint 8.57.1](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[@rocketseat/eslint-config 2.2.2](https://github.com/Rocketseat/eslint-config-rocketseat)** - Configuração ESLint da Rocketseat


## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com o Node.js)

## 🎯 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd marketplace
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o backend

O projeto está configurado para se conectar a uma API REST em `http://localhost:3333`. Certifique-se de que o backend esteja rodando neste endereço antes de iniciar o frontend.

> **Nota:** Se o backend estiver em outro endereço, edite o arquivo `src/lib/axios.ts` e altere a `baseURL`.

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em **http://localhost:5173/**

## 📦 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Compila o projeto para produção
npm run build

# Visualiza o build de produção localmente
npm run preview
```

## 🌐 Rotas da Aplicação

### Públicas
- `/sign-in` - Página de login
- `/sign-up` - Página de cadastro

### Autenticadas (prefixo `/app`)
- `/app/dashboard` - Dashboard com métricas e estatísticas
- `/app/produtos` - Lista de produtos com filtros
- `/app/novo-produto` - Cadastro de novo produto
- `/app/editar-produto` - Edição de produto existente

## 🎨 Funcionalidades

### Autenticação
- Login com email e senha
- Cadastro de novos vendedores
- Sessões com cookies (withCredentials)

### Dashboard
- Métricas dos últimos 30 dias
- Gráfico de visualizações por dia
- Estatísticas de produtos vendidos
- Visualizações recebidas

### Gerenciamento de Produtos
- Listagem com filtros (título e status)
- Criação de novos produtos
- Edição de produtos existentes
- Alteração de status (disponível/vendido/cancelado)
- Upload de imagens/anexos

## 🔒 Segurança

- Validação de formulários com Zod
- Autenticação baseada em sessão
- Cookies HTTP-only (withCredentials)
- TypeScript para type-safety

## 🎨 Design System

O projeto utiliza:
- **Fontes:** DM Sans e Poppins (Google Fonts)
- **Cores:** Sistema de cores customizado com Tailwind CSS
- **Ícones:** Hugeicons (biblioteca moderna e consistente)
- **Componentes:** Componentização modular e reutilizável

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela, proporcionando uma experiência consistente em:
- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commitar suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Fazer push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request
