import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arquitetura",
  description: "Decisões arquiteturais e fundamentos técnicos do projeto.",
};

export default function ArquiteturaPage() {
  return (
    <main className="px-6 py-16">
      <h1 className="text-4xl">Arquitetura</h1>
      <p className="mt-6 max-w-2xl text-lg text-balance">
        Esta página descreve a visão arquitetural da aplicação, incluindo camadas,
        integrações e decisões que orientam o desenvolvimento.
      </p>
    </main>
  );
}
