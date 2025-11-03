/** @format */

import { BorderBeam } from '@/components/ui/border-beam';

export default function FlowState() {
	return (
		<div className='flex w-full justify-between items-center max-w-2xl mx-auto'>
			<span className='border rounded-full py-2 px-4 md:px-6 relative text-sm md:text-base'>
				<BorderBeam
					duration={2}
					colorFrom='#b45309'
					colorTo='#f59e0b'
				/>
				Servidor
			</span>
			<span className='relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20 border rounded-md'>
				<BorderBeam
					duration={3}
					colorFrom='#b45309'
					colorTo='#f59e0b'
				/>
				<BorderBeam
					delay={1.5}
					duration={3}
					colorFrom='#0e7490'
					colorTo='#06b6d4'
				/>
				<span className='pointer-events-none absolute text-sm font-medium leading-tight  md:text-base'>
					Cache
				</span>
			</span>
			<span className='border rounded-full py-2 px-4 md:px-6 relative text-sm md:text-base'>
				<BorderBeam
					duration={2}
					colorFrom='#0e7490'
					colorTo='#06b6d4'
					reverse
				/>
				Interface
			</span>
		</div>
	);
}
