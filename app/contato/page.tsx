/** @format */

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contato',
	description:
		'Informaes de contato e formas de alcan�ar o autor do portf�lio.',
};

export default function ContatoPage() {
	return (
		<main className='px-6 py-16'>
			<h1 className='text-4xl'>Contato</h1>
			<p className='mt-6 max-w-2xl text-lg text-balance'>
				Em breve voc� encontrar� aqui todos os canais para entrar em contato.
				Enquanto isso, fique � vontade para explorar as outras se��es.
			</p>
		</main>
	);
}
