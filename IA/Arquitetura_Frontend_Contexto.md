
# 🧱 Arquitetura Frontend

## 🎯 Filosofia
A arquitetura frontend é guiada por três princípios: **reutilização de componentes**, **isolamento de features** e **previsibilidade**.  
Cada decisão busca criar uma base clara, replicável e fácil de evoluir.  
Quem lê o código deve entender rapidamente o fluxo, as dependências e os limites de cada parte.

---

## 🧩 Estrutura de Código
O modelo combina conceitos do **Atomic Design** e do **Feature-Sliced Design**, permitindo clareza nas responsabilidades e escalabilidade em projetos de qualquer porte.

### Critério de componentização
- **Global (reutilizável):** componentes usados em múltiplas features são estruturados dentro de `components/`, seguindo o padrão Atomic Design.
- **Local (específico):** componentes exclusivos de uma página ou domínio permanecem isolados dentro de sua própria feature.

### Padrão de pastas
```bash
app/
  (feature)/
    _components/
    _actions/
    _constants/
  components/
  hooks/
  lib/
  styles/
```

O padrão baseia-se no modelo do **Next.js**, com subpastas prefixadas por `_` para sinalizar funções internas e evitar importações acidentais.

---

## ⚙️ Limites e Dependências
Regras de fronteira fundamentais:
- A **UI não acessa regras de negócio** diretamente.  
- O **acesso a dados** é centralizado em `_actions`.  
- **Server Actions** e **Client Components** coexistem de forma controlada.  

Essas divisões tornam as refatorações seguras e previsíveis.

---

## ⚡ Estratégia de Rendering e Dados
Prioridade total para **performance e consistência**.  
A estratégia é **server-first**, garantindo inicialização rápida e sincronização entre UI e dados.

### Padrões aplicados
- **SSR:** para conteúdo dinâmico e indexável.  
- **Lazy Loading e Suspense:** para seções pesadas.  
- **React Query:** gerencia cache e mutações client-side.  
- **URL States e Props:** preservam estado sem `useEffect`.  

Resultado: dados e interface chegam juntos, sem re-renderizações desnecessárias.

---

## 🤝 Escalabilidade de Times
A arquitetura funciona como um **contrato coletivo**.  
- Revisões são compartilhadas.  
- Convenções são definidas antes da implementação.  
- Decisões são comunicadas e documentadas.  

Isso mantém consistência e reduz o tempo de onboarding.

---

## 🧠 Design System e UX
Baseado no **ShadCN UI**, integrado aos tokens do **Tailwind CSS**.

### Blocos principais
- Componentes: `Button`, `Input`, `Select`, `Card`, `Dialog`, `Form`.  
- Tokens: cores, espaçamento, tipografia, radius, sombras.

Esses padrões garantem acessibilidade, coerência visual e produtividade sem reinventar a base.

---

## 🔍 Síntese
> Arquitetura é sobre clareza e previsibilidade.  
> Cada camada serve para transformar complexidade em experiência.

O foco é permitir que performance, isolamento e reuso coexistam de forma natural e escalável.
