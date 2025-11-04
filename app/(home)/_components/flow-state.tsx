/** @format */

import { BorderBeam } from '@/components/ui/border-beam';

export default function FlowState() {
	return (
		<div className='relative flex w-full justify-between items-center max-w-2xl mx-auto'>
			<div className='pointer-events-none absolute left-10 right-10 top-1/2 -translate-y-1/2 h-px bg-linear-to-r from-amber-500/60 via-white/20 to-cyan-500/60 sm:left-16 sm:right-16 -z-20' />
			<span className='border rounded-full py-2 px-4 md:px-6 relative text-sm md:text-base z-20 bg-background'>
				<BorderBeam
					duration={2}
					colorFrom='#b45309'
					colorTo='#f59e0b'
				/>
				Servidor
			</span>
			<span className='relative z-20 flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20 border rounded-md bg-background'>
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
				<span className='pointer-events-none absolute text-sm font-medium leading-tight  md:text-base '>
					Cache
				</span>
			</span>
			<span className='border rounded-full py-2 px-4 md:px-6 relative z-10 text-sm md:text-base bg-background'>
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
