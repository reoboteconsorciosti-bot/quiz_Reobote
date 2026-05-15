# Mapa da Conquista - Estrutura do Projeto

Este documento serve como referência para a estrutura e tecnologias utilizadas no projeto **Mapa da Conquista**, evitando alucinações e garantindo consistência no desenvolvimento.

## 🚀 Stack Tecnológica

- **Framework**: [TanStack Start](https://tanstack.com/router/latest/docs/framework/react/start/overview) (React + TanStack Router + SSR).
- **Core API**: [@tanstack/start](https://www.npmjs.com/package/@tanstack/start) (Utilizado para rotas de API/Webhooks).
- **Gerenciador de Pacotes**: [Bun](https://bun.sh/) (ou NPM).
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/).
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) (baseado em Radix UI).
- **Animações**: [Framer Motion](https://www.framer.com/motion/) e [Canvas Confetti](https://github.com/catdad/canvas-confetti).
- **Ícones**: [Lucide React](https://lucide.dev/).
- **Formulários**: [React Hook Form](https://react-hook-form.com/) com validação [Zod](https://zod.dev/).
- **Gerenciamento de Estado/Dados**: [TanStack Query](https://tanstack.com/query/latest) (React Query).
- **Deployment**: Configurado para [Cloudflare Pages/Workers](https://pages.cloudflare.com/) via `wrangler.jsonc`.

## 📂 Estrutura de Diretórios

```text
/
├── mapaDaConquista/
│   ├── .lovable/             # Configurações específicas da plataforma Lovable
│   ├── src/
│   │   ├── api/              # Lógica de integração com APIs externas (ex: BotConversa)
│   │   ├── assets/           # Imagens e recursos estáticos (avatars dos perfis)
│   │   ├── components/
│   │   │   ├── quiz/         # Lógica principal do Quiz (App, Particles, Data)
│   │   │   └── ui/           # Componentes base do Shadcn/UI
│   │   ├── hooks/            # Hooks customizados (ex: use-mobile)
│   │   ├── lib/              # Utilitários e configurações globais (utils, error-capture)
│   │   ├── routes/           # Definição de rotas do TanStack Router
│   │   │   ├── api/          # Endpoints de API (webhooks, etc.)
│   │   │   ├── __root.tsx    # Layout raiz da aplicação
│   │   │   └── index.tsx     # Página inicial (renderiza o QuizApp)
│   │   ├── routeTree.gen.ts  # Árvore de rotas gerada automaticamente
│   │   ├── router.tsx        # Configuração do roteador
│   │   ├── server.ts         # Wrapper de erro para o servidor SSR
│   │   ├── start.ts          # Ponto de entrada do TanStack Start
│   │   └── styles.css        # Estilos globais e Tailwind
│   ├── components.json       # Configuração do Shadcn/UI
│   ├── package.json          # Dependências e scripts
│   ├── tsconfig.json         # Configurações do TypeScript
│   ├── vite.config.ts        # Configuração do Vite (utiliza @lovable.dev/vite-tanstack-config)
│   └── wrangler.jsonc        # Configuração de deployment Cloudflare
```

## 🛠️ Arquivos Chave

- **[package.json](file:///c:/Users/Notebook%20Lenovo/mapadaconquista/mapaDaConquista/package.json)**: Define todas as dependências do projeto.
- **[vite.config.ts](file:///c:/Users/Notebook%20Lenovo/mapadaconquista/mapaDaConquista/vite.config.ts)**: Configuração central do build, integrada com o ecossistema Lovable/TanStack.
- **[src/components/quiz/data.ts](file:///c:/Users/Notebook%20Lenovo/mapadaconquista/mapaDaConquista/src/components/quiz/data.ts)**: Contém as perguntas, opções e definições de perfis do quiz.
- **[src/components/quiz/QuizApp.tsx](file:///c:/Users/Notebook%20Lenovo/mapadaconquista/mapaDaConquista/src/components/quiz/QuizApp.tsx)**: Componente principal que gerencia os estados do quiz (intro, perguntas, resultado, lead).
- **[src/routes/index.tsx](file:///c:/Users/Notebook%20Lenovo/mapadaconquista/mapaDaConquista/src/routes/index.tsx)**: Rota principal que serve como entry point da UI.
- **[src/api/bot-conversa.ts](file:///c:/Users/Notebook%20Lenovo/mapadaconquista/mapaDaConquista/src/api/bot-conversa.ts)**: Script de integração com a API do BotConversa.
- **[src/routes/api/webhook.ts](file:///c:/Users/Notebook%20Lenovo/mapadaconquista/mapaDaConquista/src/routes/api/webhook.ts)**: Endpoint de webhook para processar leads vindos do frontend.

## 📝 Convenções e Padrões

- **Componentes**: Utiliza-se componentes funcionais com React Hooks.
- **Estilos**: Tailwind CSS 4 com variáveis CSS para temas e gradientes.
- **Tipagem**: TypeScript rigoroso para garantir segurança de dados (especialmente no quiz).
- **Rotas**: Baseado em arquivos dentro de `src/routes`.
