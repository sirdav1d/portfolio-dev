import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Observabilidade",
  description: "Monitoramento, logs e métricas que sustentam a observabilidade do sistema.",
};

export default function ObservabilidadePage() {
  return (
    <main className="px-6 py-16">
      <h1 className="text-4xl">Observabilidade</h1>
      <p className="mt-6 max-w-2xl text-lg text-balance">
        Um panorama das ferramentas e processos de observabilidade que garantem
        visibilidade sobre o comportamento da aplicação em produção.
      </p>
    </main>
  );
}
