# Frontend Test

Este projeto foi desenvolvido como parte de um teste técnico para avaliação de habilidades em frontend, com foco em:

- Componentização
- Organização de estilos
- Responsividade
- Clareza de decisões técnicas

### Como rodar o projeto

## Pré-requisitos

- Node.js recomendado: 20.19+ ou 22.12+ (Versão mínima para funcionamento adequado do Vite)
- npm ou yarn

### Passos para execução

# Execução Local

Para executar o projeto localmente, é necessário criar o repositório, instalar as depedências e finalmente executar o projeto:

```bash
git clone git@github.com:gusholz/desafio-front-end.git
npm install
npm run dev
```

# Execução Remota

É possível executar o projeto utilizando o recurso Codespaces do Github (Ambiente remoto de desenvolvimento)
Para criar um, basta clickar em Code e inicializar um novo codespace
Dentro do ambiente, basta executar o seguinte comando no terminal integrado:

```bash
npm run dev
```

O projeto estárá disponível em http://localhost:5173

## Decisões Técnicas

# Frameworks

React + Vite
O Vite foi escolhido pela rapidez no setup, hot reload eficiente e simplicidade para projetos frontend. Além da ótima integração com o ambiente de desenvolvimento oferecido pelo Github

# Estilização

CSS Modules
A escolha por CSS Modules foi feita com base na facilidade de manter o escopo local de estilização, a facilidade de manutenção do código e a possibilidade de não adicionar dependências extras para tal finalidade.

# Organização de estilos:

Tokens globais definidos via CSS Variables (:root)
Separação entre estilos globais, estilos de pages e estilos por componente
Design system simples com tokens
Foi implementado um pequeno design system baseado em variáveis CSS, incluindo:
Cores (neutras, primárias e auxiliares)
Tipografia (Familias e tamanhos de fonte padronizados)

# DX

Com a finalidade de melhorar a experiência do desenvolvedor, foi configurado um ambiente com ESLint + Prettier com formatação automática, definida nos arquivos:

```bash
.editorconfig
.eslintconfig
```

# Navegação

React Router DOM foi utilizado para permitir uma navegação simples entre as duas telas desenvolvidas
home -> http://localhost:5173/
paymentDetails -> http://localhost:5173/payment

# Testes

Adicionei um ambiente de testes simples utilizando Vitest, considerando sua ótima integração com um ambiente Vite. Criou-se uma Suite de testes, cobrindo um hook personalizado criado para permitir o uso do swipe em dispositivos móveis. Essa decisão foi feita por concentrar lógica isolada, relevante e testável para o comportamento da aplicação.
