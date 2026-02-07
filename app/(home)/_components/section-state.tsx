/** @format */

import { AtomIcon } from '@/components/ui/atom';
import FlowState from './flow-state';
import ContextZustandExamples from '@/components/context-zustand-examples';

export default function SectionState() {
	return (
		<section
			id='state'
			className='py-20 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<AtomIcon
					size={384}
					aria-hidden='true'
					className='absolute scale-90 z-20 left-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Estado & Comunicação
					</h2>
					<p className='text-muted-foreground md:text-lg text-balance'>
						Como os dados fluem entre{' '}
						<span className='text-foreground'>servidor</span>,{' '}
						<span className='text-foreground'>cache</span> e{' '}
						<span className='text-foreground'>interface</span> define
						previsibilidade e velocidade percebida.
					</p>
				</div>
				<FlowState />
				<ContextZustandExamples />
			</div>
		</section>
	);
}
