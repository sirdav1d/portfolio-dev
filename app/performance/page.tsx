/** @format */

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Performance',
	description: 'Prticas de otimizao e mtricas de desempenho monitoradas.',
};

export default function PerformancePage() {
	return (
		<main className='px-6 py-16'>
			<h1 className='text-4xl'>Performance</h1>
			<p className='mt-6 max-w-2xl text-lg text-balance'>
				Aqui voc encontrar estratgias e medies de performance que garantem uma
				experincia rpida e responsiva para os usurios.
			</p>
		</main>
	);
}
