/** @format */

import { Hexagon } from 'lucide-react';
import React from 'react';

export default function SectionSkill() {
	return (
		<section className='min-h-[calc(100vh-5rem)] flex items-center justify-center relative'>
			<div className='mx-auto grid w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 '>
				<Hexagon
					fill='none'
					stroke='currentColor'
					strokeWidth={0.2}
					className='absolute animate-shiny-text duration-1000 left-0 top-0 h-96 w-96 text-foreground/5'
				/>
				<div>
					<h2 className='text-3xl leading-tight 2xl:text-5xl text-foreground md:text-5xl capitalize'>
						Arquitetura Frontend
					</h2>
					<p className='text-muted-foreground'>
						A fundação que conecta performance, reuso e previsibilidade. Cada
						decisão nasce para tornar o código replicável e o fluxo de dados
						previsível — independente de quem continue o projeto.
					</p>
				</div>
			</div>
		</section>
	);
}
