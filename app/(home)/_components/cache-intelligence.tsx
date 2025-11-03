/** @format */

import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import { cn } from '@/lib/utils';

const gauges = [
	{
		id: 'edge-hit',
		value: 84,
		label: 'Edge hit',
		gaugePrimaryColor: '#22c55e',
		gaugeSecondaryColor: '#166534',
	},
	{
		id: 'refresh-window',
		value: 68,
		label: 'Revalidação',
		gaugePrimaryColor: '#f59e0b',
		gaugeSecondaryColor: '#9a3412',
	},
];

export default function CacheIntelligence({
	className,
}: {
	className?: string;
}) {
	return (
		<div
			className={cn(
				'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl scale-90',

				className,
			)}>
			<header className='relative flex w-full flex-col items-center justify-center gap-6 sm:flex-row mt-5'>
				{gauges.map((gauge, index) => (
					<div
						key={gauge.id}
						className={cn(
							'relative flex flex-col items-center gap-2 text-center transition-transform duration-500',
							index === 0
								? 'group-hover/bento:-translate-y-1'
								: 'group-hover/bento:translate-y-1',
						)}>
						<AnimatedCircularProgressBar
							value={gauge.value}
							gaugePrimaryColor={gauge.gaugePrimaryColor}
							gaugeSecondaryColor={gauge.gaugeSecondaryColor}
							className='size-36 sm:size-40 '
						/>
						<span className='text-xs uppercase tracking-wide text-muted-foreground absolute top-12'>
							{gauge.label}
						</span>
					</div>
				))}
			</header>
		</div>
	);
}
