/** @format */

import { Eye } from 'lucide-react';

export default function SectionObserver() {
	return (
		<section
			id='observer'
			className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<Eye
					fill='none'
					stroke='currentColor'
					strokeWidth={0.2}
					className='absolute scale-90 -z-20 right-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Observabilidade & Métricas
					</h2>
					{/* <p className='text-muted-foreground md:text-lg text-balance'>
						Interfaces amigáveis, visuais consistentes e navegação acessível são
						parte da{' '}
						<span className='text-foreground'>experiência do usuário.</span>
					</p> */}
				</div>
			</div>
		</section>
	);
}
