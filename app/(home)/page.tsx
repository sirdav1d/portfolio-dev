/** @format */

import type { Metadata } from 'next';

import BreakSection from '@/components/break-section';
import Hero from './_components/hero';
import SectionArchiteture from './_components/section-architeture';
import SectionPerformance from './_components/section-performance';
import SectionState from './_components/section-state';
import SectionTestQA from './_components/section-test-qa';
import SectionAccess from './_components/section-aceess';

export const metadata: Metadata = {
	title: 'Portfólio',
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
		<main className='overflow-x-hidden'>
			<Hero />
			<BreakSection />
			<SectionArchiteture />
			<BreakSection />
			<SectionPerformance />
			<BreakSection />
			<SectionState />
			<BreakSection />
			<SectionTestQA />
			<BreakSection />
			<SectionAccess />
			<BreakSection />
		</main>
	);
}
