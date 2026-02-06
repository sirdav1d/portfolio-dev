/** @format */

import { BorderBeam } from '@/components/ui/border-beam';

function Node({
	label,
	accent,
}: {
	label: string;
	accent: 'amber' | 'cyan' | 'slate';
}) {
	const color =
		accent === 'amber'
			? { from: '#b45309', to: '#f59e0b' }
			: accent === 'cyan'
			? { from: '#0e7490', to: '#06b6d4' }
			: { from: '#334155', to: '#64748b' };

	return (
		<span className='relative z-10 flex items-center justify-center rounded-full border border-border/70 bg-background px-4 py-2 text-xs sm:text-sm'>
			<BorderBeam
				duration={2}
				colorFrom={color.from}
				colorTo={color.to}
			/>
			{label}
		</span>
	);
}

function Arrow() {
	return (
		<span className='text-muted-foreground/70 text-lg sm:text-xl'>
			→
		</span>
	);
}

export default function FlowState() {
	return (
		<div className='rounded-xl border border-border/60 bg-background/70 p-4 md:p-6 shadow-lg'>
			<div className='space-y-6'>
				<div className='space-y-3'>
					<div className='flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground'>
						<span>Leitura (read)</span>
						<span>UI renderiza dados consolidados</span>
					</div>
					<div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
						<Node
							label='Servidor'
							accent='amber'
						/>
						<Arrow />
						<Node
							label='Cache'
							accent='cyan'
						/>
						<Arrow />
						<Node
							label='Interface'
							accent='slate'
						/>
					</div>
				</div>

				<div className='h-px bg-border/60' />

				<div className='space-y-3'>
					<div className='flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground'>
						<span>Mutação (write)</span>
						<span>UI dispara ação e revalida</span>
					</div>
					<div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
						<Node
							label='Interface'
							accent='slate'
						/>
						<Arrow />
						<Node
							label='Action'
							accent='amber'
						/>
						<Arrow />
						<Node
							label='Servidor'
							accent='amber'
						/>
						<Arrow />
						<Node
							label='Cache'
							accent='cyan'
						/>
						<Arrow />
						<Node
							label='Interface'
							accent='slate'
						/>
					</div>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground pt-2'>
					<span className='inline-flex items-center gap-2'>
						<span className='size-2 rounded-full bg-amber-400' />
						Server-first
					</span>
					<span className='inline-flex items-center gap-2'>
						<span className='size-2 rounded-full bg-cyan-400' />
						Cache centralizado
					</span>
					<span className='inline-flex items-center gap-2'>
						<span className='size-2 rounded-full bg-slate-400' />
						UI reativa
					</span>
				</div>
			</div>
		</div>
	);
}
