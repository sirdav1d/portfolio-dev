/** @format */

'use client';

import { useRef } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import { AtomIcon } from '@/components/ui/atom';
import { BlocksIcon } from '@/components/ui/blocks';
import { ContrastIcon } from '@/components/ui/contrast';
import { EyeIcon } from '@/components/ui/eye';
import { ShieldCheckIcon } from '@/components/ui/shield-check';
import { ZapIcon } from '@/components/ui/zap';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import type {
	ComponentPropsWithoutRef,
	ForwardRefExoticComponent,
	RefAttributes,
} from 'react';

type AnimatedIconHandle = {
	startAnimation: () => void;
	stopAnimation: () => void;
};

type AnimatedIconComponent = ForwardRefExoticComponent<
	ComponentPropsWithoutRef<'div'> & {
		size?: number;
	} & RefAttributes<AnimatedIconHandle>
>;

type NavItem = {
	href: string;
	label: string;
	icon: AnimatedIconComponent;
};

const navItems: NavItem[] = [
	{ href: '#arc', label: 'Arquitetura Frontend', icon: BlocksIcon },
	{ href: '#perf', label: 'Performance', icon: ZapIcon },
	{ href: '#state', label: 'Estado & Comunicação', icon: AtomIcon },
	{ href: '#test', label: 'Testes & Qualidade', icon: ShieldCheckIcon },
	{ href: '#access', label: 'Acessibilidade', icon: ContrastIcon },
	{ href: '#observer', label: 'Observabilidade', icon: EyeIcon },
];

export function SectionNav({
	orientation = 'horizontal',
	className,
}: {
	orientation?: 'horizontal' | 'vertical';
	className?: string;
}) {
	const isVertical = orientation === 'vertical';
	const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});

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
					<li
						key={item.href}
						onMouseEnter={() => iconRefs.current[item.href]?.startAnimation()}
						onMouseLeave={() => iconRefs.current[item.href]?.stopAnimation()}>
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
										<Icon
											ref={(instance) => {
												iconRefs.current[item.href] = instance;
											}}
											size={24}
										/>
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
