# Quiz Reobote - Arquitetura Fullstack

Este projeto foi reestruturado para utilizar uma arquitetura limpa e independente, separando o Frontend (React/Vite) do Backend (Express).

## 📁 Estrutura

- `frontend/`: Aplicação React criada com Vite.
- `backend/`: Servidor Express que processa os webhooks e integra com o BotConversa.

## 🚀 Como Rodar

### 1. Configurar o Backend
Acesse a pasta do backend, instale as dependências e configure o seu arquivo `.env`.

```bash
cd backend
npm install
# Edite o arquivo .env com sua API-KEY do BotConversa
npm run dev
```

O backend estará rodando em `http://localhost:3001`.

### 2. Configurar o Frontend
Acesse a pasta do frontend e inicie o servidor de desenvolvimento do Vite.

```bash
cd frontend
npm install
npm run dev
```

O frontend estará rodando em `http://localhost:5173` (ou a porta padrão do Vite).

## 📡 Fluxo de Dados

1. O usuário finaliza o quiz no **Frontend**.
2. O Frontend chama `POST http://localhost:3001/api/webhook` enviando o payload.
3. O **Backend** valida os dados e chama a API do **BotConversa**.
4. O BotConversa cria o lead, aplica a tag `quiz`, salva o `perfil` e `objetivo` e inicia o fluxo no WhatsApp.

## 🛠️ Tecnologias
- **Frontend**: React, Vite, TypeScript, Fetch API.
- **Backend**: Node.js, Express, Axios, TypeScript, Dotenv, CORS.
