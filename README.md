# 🚀 Noah Template

O template Next.js moderno e opinativo para iniciar projetos rapidamente, seguindo as melhores práticas do mercado.

<div align="center">
  <img src="public/images/logo-banner.png" alt="Logo" />
</div>

## ⚡ Stack Tecnológica

- **Framework**: Next.js (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Arquitetura**: Feature-Based Architecture
- **Arquitetura**: Feature-Based Architecture
- **Containers**: Podman e Podman Compose
- **Node.js**: >= 22.x

## 🏗️ Arquitetura da Aplicação

Este template segue a **Feature-Based Architecture**

### 📁 Estrutura de Pastas

Abaixo está a organização recomendada para manter o projeto escalável e bem estruturado:

```
src/
├── app/                   # Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz da aplicação
│   └── page.tsx           # Página inicial
├── features/              # Funcionalidades por domínio
│   └── home/              # Feature da página inicial
│       ├── components/    # Componentes específicos
│       ├── hooks/         # Hooks personalizados
│       ├── services/      # Lógica de negócio
│       └── types/         # Tipos TypeScript
├── shared/                # Código compartilhado
│   ├── components/        # Componentes reutilizáveis
│   ├── hooks/             # Hooks globais
│   ├── services/          # APIs e integrações
│   ├── types/             # Tipos compartilhados
│   └── utils/             # Funções utilitárias
├── config/                # Configurações da aplicação
│   ├── config.ts          # Variáveis de ambiente
│   └── font.ts            # Configuração das fontes
└── lib/                   # Bibliotecas e utilitários externos
    ├── api.ts             # Cliente HTTP
    └── validations.ts     # Schemas de validação
```

### 🎯 Princípios Arquiteturais

#### **1. Separação por Funcionalidade**

- Cada `feature` contém tudo relacionado a uma funcionalidade específica
- Facilita manutenção e escalabilidade
- Reduz acoplamento entre diferentes partes da aplicação

#### **2. Colocation**

- Componentes, hooks e serviços ficam próximos ao seu uso
- Melhora a experiência do desenvolvedor
- Facilita refatoração e exclusão de código

#### **3. Shared vs Feature**

- **Shared**: Usado por múltiplas features
- **Feature**: Específico de uma funcionalidade

#### **4. TypeScript First**

- Tipagem forte em toda a aplicação
- Interfaces bem definidas
- Melhor experiência de desenvolvimento

### 📦 Convenções de Nomenclatura

- **Componentes**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase com prefixo "use" (`useUserData.ts`)
- **Services**: camelCase (`userService.ts`)
- **Types**: PascalCase com sufixo "Type" (`UserType.ts`)
- **Utilitários**: camelCase (`formatDate.ts`)
- **Diretórios**: kebab-Case (`hello-world/`)

### 🎨 Padrões de Componentes

```tsx
// Estrutura padrão de um componente
interface ComponentProps {
  // Props tipadas
}

export function Component({ prop }: ComponentProps) {
  // Hooks
  // Lógica
  // Return JSX
}

export default Component;
```

## 🚦 Como Executar o projeto

### ⚡ Instalação e Execução

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd noah-template

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

### 🛠️ Scripts Disponíveis

| Script              | Comando         | Descrição                                           |
| ------------------- | --------------- | --------------------------------------------------- |
| **Desenvolvimento** | `npm run dev`   | Inicia o servidor de desenvolvimento com hot reload |
| **Build**           | `npm run build` | Gera build otimizado para produção                  |
| **Produção**        | `npm run start` | Inicia servidor de produção (requer build)          |

### 🔐 Variáveis de Ambiente e Configurações Sensíveis

As variáveis necessárias estão no arquivo `.env.template`. Exemplo:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

*Nunca faça commit de arquivos com dados sensíveis! Use sempre variáveis de ambiente ou arquivos ignorados pelo Git.*

## 🎨 Qualidade de Código

Este projeto utiliza **ESLint** e **Prettier** para garantir qualidade e consistência do código.

### 📋 Configurações

As regras e definições aplicadas estão nos arquivos abaixo.

| Ferramenta | Arquivo de Configuração | Descrição                                    |
| ---------- | ----------------------- | -------------------------------------------- |
| ESLint     | `eslint.config.mjs`     | Regras de linting e integração com Prettier |
| Prettier   | `.prettierrc`           | Regras de formatação de código               |
| VS Code    | `.vscode/settings.json` | Configurações do editor                      |

### 🚀 Scripts de Qualidade

| Script                | Comando               | Descrição                                  |
| --------------------- | --------------------- | ------------------------------------------ |
| **Linting**           | `npm run lint`        | Verifica problemas de código com ESLint   |
| **Correção de Lint**  | `npm run lint:fix`    | Corrige automaticamente problemas ESLint  |
| **Formatação**        | `npm run format`      | Formata código com Prettier               |
| **Verificar Format.** | `npm run format:check`| Verifica formatação sem alterar arquivos  |
| **Verificação**       | `npm run check`       | Verifica formatação + lint (CI/CD)        |

> **💡 Dica**: Instale as extensões `ESLint` e `Prettier - Code formatter` no VS Code para melhor experiência de desenvolvimento.

## 🔒 Git Hooks e Automação (Husky)

Este projeto utiliza **Husky** para automatizar verificações de qualidade antes dos commits e pushes.

### 📋 Configuração Atual

**Pre-commit Hook**: Executa `lint-staged` para formatar e corrigir automaticamente apenas os arquivos modificados com Prettier e ESLint.

**Pre-push Hook**: Executa formatação, lint, build e protege a branch `main` antes do push.

**Commit-msg Hook**: Valida se a mensagem de commit segue o padrão Conventional Commits usando `.husky/commit-msg`.

### 🔧 Lint-staged

Executa ESLint e Prettier em arquivos JS/TS e apenas Prettier em JSON, CSS e Markdown antes do commit.

### 🎯 Benefícios

- **Qualidade Garantida**: Código sempre formatado e sem erros
- **Automação**: Verificações automáticas sem intervenção manual  
- **Proteção**: Evita commits problemáticos no repositório

### 📝 Tipos Válidos de Commit

`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`

**Exemplo**: `feat: add user authentication`

### 🚨 Bypass de Emergência

```bash
# Bypass hooks (use apenas em emergências)
git commit --no-verify
```

# 🎨 Boas Práticas - Tailwind CSS

## 📋 Configuração
- `tailwind.config.js` - Configuração principal e pastas monitoradas
- `src/style/globals.css` - Estilos globais e diretivas

## 🚀 Principais Práticas

1. **Ordem de Classes**: Layout → Dimensões → Espaçamento → Tipografia → Cores → Bordas → Efeitos → Responsividade → Estados
2. **Mobile-First**: `text-sm md:text-base lg:text-lg` em vez de desktop-first
3. **Organização**: Agrupe classes por função para melhor legibilidade
4. **Componentes Reutilizáveis**: Extraia patterns repetidos em componentes com variants
5. **Dark Mode**: Use `dark:` prefix para temas escuros (`bg-white dark:bg-gray-900`)
6. **Helper cn()**: Combine classes condicionais com `clsx` + `tailwind-merge`
7. **Evite**: Classes conflitantes (`p-4 p-6`), valores arbitrários desnecessários, classes não utilizadas

## 🔧 Ferramentas
- **VS Code**: Tailwind CSS IntelliSense, Headwind
- **Prettier**: prettier-plugin-tailwindcss (já configurado)
- **Configuração**: JIT mode + purge CSS otimizado para performance

## 🤝 Como contribuir

Suas contribuições são muito bem-vindas! Para colaborar com o projeto de forma eficiente e seguindo nossas diretrizes, consulte o guia completo no [CONTRIBUTING.md](CONTRIBUTING.md). Lá você encontrará um passo a passo detalhado, padrões de commit, regras de validação e dicas importantes para garantir que sua contribuição seja aceita rapidamente.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
