
# 🤝 Como contribuir

Suas contribuições são muito bem-vindas! Se você tem uma ideia de melhoria, correção de bug ou nova funcionalidade, sinta-se à vontade para abrir uma issue ou pull request. Colaboração e novas perspectivas são altamente valorizadas aqui—vamos construir algo incrível juntos!

Por favor, siga nosso código de conduta em todas as interações com o projeto.

### Passo a passo para contribuir

1. **Crie uma branch**: Sempre crie uma nova branch a partir da `master` usando o padrão `feature/xxx`, `fix/xxx` ou outro prefixo apropriado.

2. **Faça commits pequenos e focados**: Cada commit deve representar uma alteração lógica única. Evite commits grandes com muitas mudanças não relacionadas. Isso facilita a revisão e validação do código.

3. **Padrão de mensagens de commit**: Todos os commits devem seguir a especificação [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) (Versionamento Semântico). Exemplos:
   - `feat: adicionar funcionalidade de login do usuário`
   - `fix: corrigir bug no login`
   - `chore: atualizar dependências`
   - `docs: atualizar README`
   - `test: adicionar testes para login`


  > **Recomendações:**
  > 
  > Prefira escrever as mensagens de commit em português e sem acentuação. Isso facilita a padronização e evita problemas de encoding em diferentes sistemas.
  >
  > Apenas commits do tipo `feat` e `fix` geram tag de deploy e disparam uma release. Outros tipos como `chore`, `docs`, `test`, etc., não geram tag de deploy.
  >
  > Commits que não seguirem esse padrão **não** serão mergeados, pois quebram o processo de geração de release.
  >
  > Nem todos os commits precisam ser `feat` ou `fix`, mas sempre use o tipo correto para sua alteração.

4. **Pull Request (PR)**: Abra um PR para a `master` com um título claro e descritivo. Na descrição do PR, explique o que está sendo feito e por quê. Referencie issues relacionadas, se aplicável.

5. **Validação**: O workflow do PR irá validar seu código (testes, lint, etc). Só é possível fazer merge se **todos os checks passarem**.

6. **Release e Deploy**: Para detalhes sobre deploy e versionamento, consulte a [seção de Versionamento no README.md](./README.md).

   > **Importante:** O Pull Request só será aceito se passar por todos os checks automáticos definidos no workflow `pr-checks.yml`.

Esse fluxo garante qualidade, rastreabilidade e entrega contínua de valor. Seguindo essas orientações você evita erros e agiliza o processo de revisão e release.

## 📜 Código de Conduta

### 📣 Nosso Compromisso

No interesse de promover um ambiente aberto e acolhedor, nós, como
contribuidores e mantenedores, nos comprometemos a tornar a participação em nosso projeto e
nossa comunidade uma experiência livre de assédio para todos, independentemente de idade, porte físico,
deficiência, etnia, identidade e expressão de gênero, nível de experiência,
nacionalidade, aparência pessoal e religião.

### 🌟 Nossos Padrões

Exemplos de comportamentos que contribuem para criar um ambiente positivo
incluem:

* Ser respeitoso com diferentes pontos de vista e experiências
* Aceitar críticas construtivas com elegância
* Focar no que é melhor para a comunidade

Exemplos de comportamentos inaceitáveis por participantes incluem:

* O uso de linguagem ou imagens sexualizadas
* Comentários insultuosos/depreciativos e ataques pessoais ou políticos
* Publicar informações privadas de outros, como endereço físico ou eletrônico, sem permissão explícita
* Código patenteado de terceiros
* Outras condutas que poderiam ser razoavelmente consideradas inadequadas em um ambiente profissional

### 🛡️ Nossas Responsabilidades

Os mantenedores do projeto são responsáveis por esclarecer os padrões de comportamento
aceitável e devem tomar ações corretivas apropriadas e justas em resposta
a qualquer instância de comportamento inaceitável.

Os mantenedores do projeto têm o direito e a responsabilidade de remover, editar ou
rejeitar comentários, commits, código, edições de wiki, issues e outras contribuições
que não estejam alinhadas a este Código de Conduta, ou banir temporária ou
permanentemente qualquer contribuidor por outros comportamentos que considerem prejudiciais.
