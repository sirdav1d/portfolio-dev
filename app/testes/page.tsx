/** @format */

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Testes',
	description:
		'Cobertura, ferramentas e filosofia de testes adotadas no projeto.',
};

export default function TestesPage() {
	return (
		<main className='px-6 py-16'>
			<h1 className='text-4xl'>Testes</h1>
			<p className='mt-6 max-w-2xl text-lg text-balance'>
				Esta rea apresenta a estratgia de testes automatizados, ferramentas
				utilizadas e como garantimos a qualidade contnua da aplicao.
			</p>
		</main>
	);
}
