# Frontend Test

Este projeto foi desenvolvido como parte de um teste técnico para avaliação de habilidades em frontend, com foco em:
- Componentização
- Organização de estilos
- Responsividade
- Clareza de decisões técnicas

### Como rodar o projeto
## Pré-requisitos
- Node.js recomendado: 20.19+ ou 22.12+
- npm ou yarn

### Passos para execução

```bash
git clone git@github.com:gusholz/desafio-front-end.git
npm install
npm run dev
```
O projeto estárá disponível em http://localhost:5173

## Decisões Técnicas
# Frameworks
React + Vite
O Vite foi escolhido pela rapidez no setup, hot reload eficiente e simplicidade para projetos frontend.

# Estilização
CSS Modules
A escolha por CSS Modules garante escopo local de estilos, evita conflitos globais e mantém boa legibilidade e manutenção do código sem adicionar dependências extras.

# Organização de estilos:
Tokens globais definidos via CSS Variables (:root)
Separação clara entre estilos globais e estilos por componente
Design system (tokens)
Foi implementado um pequeno design system baseado em variáveis CSS, incluindo:
Cores (neutras, primárias e auxiliares)
Tipografia (tamanhos de fonte padronizados)

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







