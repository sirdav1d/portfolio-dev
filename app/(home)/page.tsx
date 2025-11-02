/** @format */

import type { Metadata } from 'next';

import Hero from './_components/hero';
import SectionSkill from './_components/section-skill';
import Image from 'next/image';

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
			<div className='mx-auto w-full max-w-7xl flex items-center justify-center my-5 opacity-10'>
				<Image
					src='/divider_circles.svg'
					width={400}
					height={100}
					alt='divider'
					className='dark:invert'
				/>
				<Image
					src='/divider_circles.svg'
					width={400}
					height={100}
					alt='divider'
					className='dark:invert'
				/>
				<Image
					src='/divider_circles.svg'
					width={400}
					height={100}
					alt='divider'
					className='dark:invert'
				/>
			</div>
			<SectionSkill />
		</main>
	);
}
