/** @format */

'use client';

import Link from 'next/link';
import { useRef } from 'react';
import type {
	ComponentPropsWithoutRef,
	ForwardRefExoticComponent,
	RefAttributes,
} from 'react';
import { AtomIcon } from '@/components/ui/atom';
import { BlocksIcon } from '@/components/ui/blocks';
import { ContrastIcon } from '@/components/ui/contrast';
import { EyeIcon } from '@/components/ui/eye';
import { ShieldCheckIcon } from '@/components/ui/shield-check';
import { ZapIcon } from '@/components/ui/zap';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

type AnimatedIconHandle = {
	startAnimation: () => void;
	stopAnimation: () => void;
};

type AnimatedIconComponent = ForwardRefExoticComponent<
	ComponentPropsWithoutRef<'div'> & {
		size?: number;
	} & RefAttributes<AnimatedIconHandle>
>;

const topics = [
	{
		icon: BlocksIcon,
		title: 'Arquitetura',
		href: '/#arc',
		description: 'Principios e padroes para sustentar aplicacoes robustas.',
	},
	{
		icon: ZapIcon,
		title: 'Performance',
		href: '/#perf',
		description: 'Estrategias para entregar experiencias rapidas e eficientes.',
	},
	{
		icon: AtomIcon,
		title: 'Gerenciamento de Estado',
		href: '/#state',
		description: 'Organize dados complexos sem perder previsibilidade.',
	},
	{
		icon: ShieldCheckIcon,
		title: 'Testes',
		href: '/#test',
		description: 'Garanta qualidade continua com automacao inteligente.',
	},

	{
		icon: ContrastIcon,
		title: 'Acessibilidade',
		href: '/#access',
		description: 'Interfaces inclusivas que funcionam para qualquer pessoa.',
	},
	{
		icon: EyeIcon,
		title: 'Observabilidade',
		href: '/#observer',
		description: 'Monitore, trace e antecipe problemas em producao.',
	},
] satisfies {
	icon: AnimatedIconComponent;
	title: string;
	href: string;
	description: string;
}[];

export default function Header() {
	const iconRefs = useRef<Record<string, AnimatedIconHandle | null>>({});

	return (
		<header className='sticky top-0 z-60 w-full border-b border-border/60 bg-background/50 backdrop-blur-md '>
			<div className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5'>
				<Link
					href='/'
					className='text-base font-semibold uppercase tracking-[0.2em] text-foreground max-md:mx-auto'>
					david.dev
				</Link>

				<NavigationMenu className='max-md:hidden'>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className='font-normal'>
								<Link
									href='/'
									className={navigationMenuTriggerStyle()}>
									Inicio
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuTrigger className='font-normal'>
								Habilidades
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid p-2 gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 '>
									{topics.map((topic) => {
										const Icon = topic.icon;

										return (
											<li key={topic.title}>
												<NavigationMenuLink asChild>
													<Link
														href={topic.href}
														onMouseEnter={() =>
															iconRefs.current[topic.href]?.startAnimation()
														}
														onMouseLeave={() =>
															iconRefs.current[topic.href]?.stopAnimation()
														}
														onFocus={() =>
															iconRefs.current[topic.href]?.startAnimation()
														}
														onBlur={() =>
															iconRefs.current[topic.href]?.stopAnimation()
														}
														className='block w-full h-full rounded-md border border-border/60 bg-card/50 p-4 text-left transition-colors hover:border-border hover:bg-accent'>
														<div className='mb-2 space-y-2'>
															<span className='inline-flex h-5 w-5 items-center justify-center text-foreground'>
																<Icon
																	ref={(instance) => {
																		iconRefs.current[topic.href] = instance;
																	}}
																	aria-hidden='true'
																	size={20}
																/>
															</span>
															<p className='text-sm text-foreground'>
																{topic.title}
															</p>
														</div>
														<p className='text-sm text-muted-foreground'>
															{topic.description}
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										);
									})}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className='font-normal'>
								<Link
									href='/projetos'
									className={navigationMenuTriggerStyle()}>
									Projetos
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className='font-normal'>
								<Link
									href='/contato'
									className={navigationMenuTriggerStyle()}>
									Contato
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
					<NavigationMenuIndicator />
					<NavigationMenuViewport />
				</NavigationMenu>
			</div>
		</header>
	);
}
