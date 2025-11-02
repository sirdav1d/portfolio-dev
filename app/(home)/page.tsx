/** @format */

import type { Metadata } from 'next';

import Hero from './_components/hero';

export const metadata: Metadata = {
	title: 'Inicio',
	description:
		'Portifolio tecnico com foco em produtos digitais escalaveis, cobrindo arquitetura, performance, estado, observabilidade, acessibilidade e testes.',
	keywords: [
		'frontend',
		'portifolio',
		'arquitetura',
		'performance',
		'estado',
		'observabilidade',
		'acessibilidade',
		'testes',
	],
};

export default function Home() {
	return (
		<main>
			<Hero />
		</main>
	);
}
