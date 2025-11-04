/** @format */

import { Hexagon } from 'lucide-react';
import React from 'react';
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

				<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
					Arquitetura Frontend
				</h2>

				<div className='flex flex-col md:flex-row w-full gap-10 md:gap-20 items-start justify-center '>
					<p className='text-muted-foreground text-balance leading-normal md:text-lg'>
						O código é organizado com base em camadas bem definidas, unindo
						princípios do <span className='text-foreground'>Atomic Design</span>{' '}
						e do <span className='text-foreground'>Feature-Sliced Design.</span>
						<br />
						<br />
						Componentes usados em múltiplas features são tratados como{' '}
						<span className='text-foreground'>
							blocos reutilizáveis globais
						</span>
						, enquanto os específicos permanecem isolados dentro do{' '}
						<span className='text-foreground'>contexto de cada feature</span>.
					</p>
					<div className='w-full'>
						<Architeture />
					</div>
				</div>
			</div>
		</section>
	);
}
