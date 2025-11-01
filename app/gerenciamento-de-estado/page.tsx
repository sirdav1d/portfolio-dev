import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gerenciamento de Estado",
  description: "Estratégias e bibliotecas usadas para gerenciar o estado da aplicação.",
};

export default function GerenciamentoDeEstadoPage() {
  return (
    <main className="px-6 py-16">
      <h1 className="text-4xl">Gerenciamento de Estado</h1>
      <p className="mt-6 max-w-2xl text-lg text-balance">
        Detalhes sobre como o estado global e local é organizado, incluindo padrões,
        ferramentas e justificativas para as escolhas adotadas.
      </p>
    </main>
  );
}
