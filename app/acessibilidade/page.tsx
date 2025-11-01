import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acessibilidade",
  description: "Princípios e recursos que tornam a aplicação inclusiva para todos.",
};

export default function AcessibilidadePage() {
  return (
    <main className="px-6 py-16">
      <h1 className="text-4xl">Acessibilidade</h1>
      <p className="mt-6 max-w-2xl text-lg text-balance">
        Conheça as práticas de acessibilidade implementadas, as ferramentas de
        verificação utilizadas e os requisitos que seguimos.
      </p>
    </main>
  );
}
