import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Informações de contato e formas de alcançar o autor do portfólio.",
};

export default function ContatoPage() {
  return (
    <main className="px-6 py-16">
      <h1 className="text-4xl">Contato</h1>
      <p className="mt-6 max-w-2xl text-lg text-balance">
        Em breve você encontrará aqui todos os canais para entrar em contato. Enquanto
        isso, fique à vontade para explorar as outras seções.
      </p>
    </main>
  );
}
