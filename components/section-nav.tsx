/** @format */

'use client';

import { BorderBeam } from '@/components/ui/border-beam';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
	Contrast,
	Eye,
	Hexagon,
	Orbit,
	Shield,
	Zap,
	type LucideIcon,
} from 'lucide-react';

type NavItem = {
	href: string;
	label: string;
	icon: LucideIcon;
};

const navItems: NavItem[] = [
	{ href: '#arc', label: 'Arquitetura Frontend', icon: Hexagon },
	{ href: '#perf', label: 'Performance', icon: Zap },
	{ href: '#state', label: 'Estado & Comunicação', icon: Orbit },
	{ href: '#test', label: 'Testes & Qualidade', icon: Shield },
	{ href: '#access', label: 'Acessibilidade', icon: Contrast },
	{ href: '#observer', label: 'Observabilidade', icon: Eye },
];

export function SectionNav({
	orientation = 'horizontal',
	className,
}: {
	orientation?: 'horizontal' | 'vertical';
	className?: string;
}) {
	const isVertical = orientation === 'vertical';

	return (
		<ul
			className={cn(
				'flex items-center',
				isVertical ? 'flex-col gap-4' : 'flex-row gap-5 md:gap-10',
				className,
			)}>
			{navItems.map((item) => {
				const Icon = item.icon;

				return (
					<li key={item.href}>
						<a href={item.href}>
							<Tooltip>
								<TooltipTrigger className='hover:text-cyan-500 transition-all ease-in-out duration-500 group'>
									<div className='backdrop-blur-md group-hover:border-border/20 border border-transparent p-1 rounded transition-all ease-in-out duration-300 relative overflow-visible'>
										<BorderBeam
											className='invisible group-hover:visible'
											size={20}
											duration={3}
											colorFrom='#b45309'
											colorTo='#f59e0b'
										/>
										<BorderBeam
											className='invisible group-hover:visible'
											size={20}
											delay={1.5}
											duration={3}
											colorFrom='#0e7490'
											colorTo='#06b6d4'
										/>
										<Icon />
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
