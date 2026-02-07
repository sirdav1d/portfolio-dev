/** @format */

import type { Metadata } from 'next';
import PrismaticBurst from '@/components/PrismaticBurst';
import { ProjectSection } from '@/components/projects/project-section';
import { projects } from '@/data/projects';
import { RainbowButton } from '@/components/ui/rainbow-button';

export const metadata: Metadata = {
	title: 'Projetos',
	description:
		'Portfolio de projetos com foco em contexto, responsabilidades e impacto.',
};

export default function ProjetosPage() {
	return (
		<main className='overflow-x-hidden pb-16 bg-none'>
			<section className='relative min-h-dvh flex items-center justify-center overflow-hidden bg-none mask-alpha mask-b-from-70%'>
				<div
					aria-hidden='true'
					className='pointer-events-none absolute inset-0'>
					<PrismaticBurst
						intensity={2}
						speed={0.35}
						animationType='rotate3d'
						distort={0.1}
						rayCount={10}
						hoverDampness={0.25}
						mixBlendMode='lighten'
					/>
				</div>

				<div className='relative z-10 mx-auto w-full max-w-360 px-5'>
					<div className='mx-auto max-w-3xl space-y-6 text-center'>
						<h1 className='text-5xl text-foreground text-balance md:text-6xl 2xl:text-8xl'>
							Projetos reais, com contexto e impacto
						</h1>
						<p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg text-balance'>
							Cada projeto abaixo possui uma seção dedicada com ativos visuais,{' '}
							<strong className='text-foreground'>
								responsabilidades, decisões técnicas
							</strong>{' '}
							e resultados observados.
						</p>
						<RainbowButton
							size={'lg'}
							className='text-xl max-md:w-full'>
							<a href={`#${projects[0].slug}`}>Ver projetos</a>
						</RainbowButton>{' '}
					</div>
				</div>
			</section>

			<section className='mx-auto w-full max-w-360 px-5 py-16 md:py-20'>
				<div className='space-y-10 md:space-y-12'>
					{projects.map((project, index) => (
						<ProjectSection
							key={project.slug}
							project={project}
							reverse={index % 2 === 1}
						/>
					))}
				</div>
			</section>
		</main>
	);
}
