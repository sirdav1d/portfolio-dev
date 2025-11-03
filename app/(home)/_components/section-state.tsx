/** @format */

import { Orbit } from 'lucide-react';

export default function SectionState() {
	return (
		<section className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<Orbit
					fill='none'
					stroke='currentColor'
					strokeWidth={0.2}
					className='absolute scale-90 -z-20 left-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Estado & Comunicação
					</h2>
					<p className='text-muted-foreground text-sm md:text-lg text-balance'>
						Gerenciar o estado é sobre entender o{' '}
						<span className='text-foreground'>fluxo natural da aplicação</span>.
						A forma como os dados circulam entre o{' '}
						<span className='text-foreground'>
							servidor, o cache e a interface
						</span>{' '}
						define a previsibilidade e a fluidez da experiência.
					</p>
				</div>
			</div>
		</section>
	);
}
