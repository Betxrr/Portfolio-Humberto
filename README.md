# Portfólio - Humberto

## ✨ Objetivo

Desenvolver um portfólio pessoal e moderno para apresentar meus projetos e habilidades como desenvolvedor frontend. A aplicação será leve, responsiva e terá animações fluidas para uma experiência de usuário mais agradável.

## ⚙️ Tecnologias Principais

-   **React:** Biblioteca JavaScript para a construção da interface do usuário.
-   **Vite:** Ferramenta de build rápida e otimizada para o desenvolvimento.
-   **React Router:** Biblioteca para o gerenciamento da navegação entre as páginas.
-   **Tailwind CSS e CSS Module:** Para uma abordagem híbrida de estilização, combinando a velocidade do Tailwind com a flexibilidade do CSS.

## 🚀 Planejamento (Roadmap)

### Fase 1: Configuração e Estrutura Inicial
-   [ X ] Criar o projeto com o Vite.
-   [ X ] Instalar as dependências essenciais (`react-router-dom`, `framer-motion`).
-   [ X ] Configurar a estrutura de pastas.

### Fase 2: Desenvolvimento do Layout e Animações
-   [ X ]**Header e Footer:** Criar componentes de navegação e rodapé reutilizáveis.
-   [ X ]**Página Home:** Desenvolver a seção principal com uma apresentação pessoal e animações de entrada.
-   [  ]**Animações e Efeitos Visuais:**
    -   Implementar animações de rolagem para que elementos apareçam gradualmente.
    -   Criar efeitos dinâmicos, como o header que muda ao rolar a página.
    -   Adicionar micro-interações, como ícones flutuantes.
-   [ X ]**Seção Sobre Mim:** Criar uma seção para descrever minha trajetória e filosofia de trabalho.
-   [ X ]**Seção de Projetos:** Desenvolver uma área para exibir os projetos futuros com um design atraente.
-   [ X ]**Seção de Habilidades:** Listar as tecnologias que eu domino.

### Fase 3: Conteúdo e Refinamento
-   [ X ]Adicionar todo o conteúdo textual e visual do portfólio.
-   [ X ]Garantir que o portfólio seja totalmente responsivo em diferentes dispositivos.

### Fase 4: Deploy
-   [  ]Preparar a aplicação para produção.
-   [  ]Publicar o portfólio no GitHub Pages (`github.io`).


## 🛠️ Como Rodar o Projeto Localmente

Siga estes passos para ter uma cópia do projeto rodando na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

Certifique-se de que você tem o Node.js e o npm instalados em seu sistema.

### Instalação

1.  Clone o repositório para sua máquina:
    ```bash
    git clone [https://github.com/Betxrr/Portfolio-Humberto.git](https://github.com/Betxrr/Portfolio-Humberto.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd Portfolio-Humberto
    ```
3.  Navegue até a pasta Front-end:
    ```bash
    cd Front-end
    ```
4.  Instale as dependências:
    ```bash
    npm install
    ```
5.  Instale o plugin necessário para o Tailwind CSS funcionar com PostCSS:
    ```bash
    npm install @tailwindcss/postcss --save-dev
    ```
    > **Observação:** O Tailwind CSS agora depende do pacote `@tailwindcss/postcss` para funcionar corretamente com PostCSS. Sem ele, o projeto não irá compilar os estilos.

### Executando o Projeto

1.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
