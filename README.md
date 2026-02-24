<!-- @format -->

# Portfolio Tecnico Frontend

Portfolio interativo pensado como walkthrough das decisões que tomo em projetos reais de frontend. Em vez de só listar stacks, mostro trade-offs de arquitetura, performance, estado, testes, acessibilidade e observabilidade -- os mesmos temas cobrados em entrevistas para dev frontend pleno.

## Destaques tecnicos

- Arquitetura: camadas inspiradas em Atomic + Feature-Sliced; isolamento de componentes globais vs. de feature.
- Performance: PPR (Partial Prerendering), lazy loading, múltiplos niveis de cache, otimizacao de assets.
- Estado: orquestracao servidor/cache/UI, comparacao pratica de Context vs. Zustand.
- Testes & QA: foco no que protege confianca e ritmo de entrega; mocks realistas para demonstrar fluxo.
- Acessibilidade & i18n: acessibilidade como parte da experiencia, troca de idioma, foco visivel, contraste, landmarks.
- Observabilidade: secao dedicada a metricas e monitoramento para acompanhar o que foi para producao.

## Stack

- Next.js (App Router), React, TypeScript.
- Tailwind CSS + shadcn/ui + icones Lucide.
- motion/react para animacoes com `useReducedMotion`.
- Utilitarios proprios (`lib/utils`, hooks de device, etc.).

## Navegacao

- Hero com âncoras para: Arquitetura (#arc), Performance (#perf), Estado (#state), Testes (#test), Acessibilidade (#access), Observabilidade (#observer).
- Quebras visuais leves entre seções para respirar a leitura.

## Rodando local

```bash
  npm install
  npm run dev
# acessar http://localhost:3000
```

## Formulario de contato (Resend)

O envio da pagina ` /contato ` usa Server Action com Resend.

1. Crie seu arquivo `.env.local` com base em `.env.example`.
2. Configure:
- `RESEND_API_KEY`
- `RESEND_ACCOUNT_EMAIL`
3. Rode o projeto e envie o formulario em `/contato`.

Obs:
- Enquanto o remetente estiver em `onboarding@resend.dev`, o Resend permite envio apenas para o e-mail da propria conta (mesmo valor de `RESEND_ACCOUNT_EMAIL`).
- Para enviar para terceiros, verifique um dominio no Resend e troque o campo `from` para seu dominio.

## Estrutura relevante

- `app/(home)/page.tsx` e `_components/*`: secoes da landing (arquitetura, performance, estado, testes, acessibilidade, observabilidade).
- `components/`: UI compartilhada (botoes, cards, grid bento, tooltips, etc.) e demos (fetch/cache, Context vs. Zustand).
- `providers/`: tema e configuracao global.
- `hooks/`: utilitarios (ex.: detecao de mobile).
- `public/`: assets usados nos mocks e secoes.

## Decisoes e trade-offs

- Preferi App Router + Server Components para reduzir payload e aproveitar cache em rotas.
- PPR e lazy loading para mostrar prioridades de rendering e tempo de resposta percebido.
- Comparativos Context vs. Zustand para discutir escala de estado global e rerenders.
- Testes como camada de confianca: mocks em Safari/iPhone para ilustrar cenarios reais.
- Acessibilidade integrada (foco, contraste, i18n) em vez de pos-adocao.
- Observabilidade no final para fechar o ciclo de entrega e operacao.

## Como avaliar

- Use o menu superior ou os ícones do Hero para saltar entre as seções.
- Em Performance, observe PPR, lazy skeletons e niveis de cache.
- Em Estado, veja o fluxo servidor-cache-UI e os snippets comparativos.
- Em Testes, note o foco no que protege confianca e ritmo.
- Em Acessibilidade, troque idioma e valide foco/contraste.
- Em Observabilidade, confira a enfase em metricas de operação.
