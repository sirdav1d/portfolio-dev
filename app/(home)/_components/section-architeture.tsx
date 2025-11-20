/** @format */

import { Hexagon } from 'lucide-react';
import Architeture from './architeture';

export default function SectionArchiteture() {
	return (
		<section
			id='arc'
			className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10  md:space-y-20'>
				<Hexagon
					fill='none'
					stroke='currentColor'
					strokeWidth={0.2}
					className='absolute left-0 top-0 h-96 w-96 text-foreground/10'
				/>

				<h2 className='text-4xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
					Arquitetura Frontend
				</h2>

				<div className='flex flex-col md:flex-row w-full gap-10 md:gap-20 items-start justify-center '>
					<div className='flex flex-col gap-10'>
						<p className='text-muted-foreground text-balance leading-normal md:text-lg'>
							O código é organizado em camadas claras, combinando ideias de{' '}
							<span className='text-foreground italic'>Atomic Design</span> e{' '}
							<span className='text-foreground italic'>
								Feature-Sliced Design.
							</span>
						</p>
						<ul className='space-y-5 text-sm list-disc text-muted-foreground text-left px-4'>
							<li>
								As rotas vivem em{' '}
								<code className='bg-muted text-foreground px-1 rounded'>
									app/
								</code>
								, com seções do portfólio agrupadas por segmento (ex.:
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									app/(home)
								</code>
								,{' '}
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									app/(skills)
								</code>
								).
							</li>
							<li>
								Componentes usados em múltiplas partes do site são tratados como
								blocos reutilizáveis globais em{' '}
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									components/ (botões, cards, grids, tipografia).
								</code>
							</li>
							<li>
								Já os componentes que fazem sentido apenas dentro de uma seção
								(por exemplo, a demo de Context vs Zustand) ficam colados à rota
								correspondente em pastas de{' '}
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									_components
								</code>{' '}
								dentro de{' '}
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									app/
								</code>
								.
							</li>
							<li>
								Utilitários, hooks e providers globais ficam isolados em{' '}
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									lib/
								</code>
								,{' '}
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									hooks/
								</code>{' '}
								e{' '}
								<code className='bg-muted text-foreground px-1 mx-1 rounded'>
									providers/
								</code>
								, o que ajuda a manter UI, regra de negócio e infraestrutura
								desacopladas.
							</li>
						</ul>
					</div>
					<div className='w-full'>
						<Architeture />
					</div>
				</div>
			</div>
		</section>
	);
}
