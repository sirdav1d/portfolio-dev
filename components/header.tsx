/** @format */

'use client';

import Link from 'next/link';

import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuViewport,
	NavigationMenuIndicator,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
import { Contrast, Eye, Hexagon, Orbit, Shield, Zap } from 'lucide-react';

const topics = [
	{
		icon: Zap,
		title: 'Performance',
		href: '/performance',
		description: 'Estrategias para entregar experiencias rapidas e eficientes.',
	},
	{
		icon: Orbit,
		title: 'Gerenciamento de Estado',
		href: '/gerenciamento-de-estado',
		description: 'Organize dados complexos sem perder previsibilidade.',
	},
	{
		icon: Eye,
		title: 'Observabilidade',
		href: '/observabilidade',
		description: 'Monitore, trace e antecipe problemas em producao.',
	},
	{
		icon: Contrast,
		title: 'Acessibilidade',
		href: '/acessibilidade',
		description: 'Interfaces inclusivas que funcionam para qualquer pessoa.',
	},
	{
		icon: Hexagon,
		title: 'Arquitetura',
		href: '/arquitetura',
		description: 'Principios e padroes para sustentar aplicacoes robustas.',
	},
	{
		icon: Shield,
		title: 'Testes',
		href: '/testes',
		description: 'Garanta qualidade continua com automacao inteligente.',
	},
];

export default function Header() {
	return (
		<header className='sticky top-0 z-40 w-full border-b border-border/60 bg-background/50 backdrop-blur'>
			<div className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5'>
				<Link
					href='/'
					className='text-base font-semibold uppercase tracking-[0.2em] text-foreground'>
					david.dev
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href='/'
									className={navigationMenuTriggerStyle()}>
									Inicio
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuTrigger>Habilidades</NavigationMenuTrigger>
							<NavigationMenuContent className='bg-background/50 backdrop-blur-md'>
								<ul className='grid p-2 gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 '>
									{topics.map((topic) => (
										<li key={topic.title}>
											<NavigationMenuLink asChild>
												<Link
													href={topic.href}
													className='block w-full h-full rounded-md border border-border/60 bg-card p-4 text-left transition-colors hover:border-border hover:bg-accent'>
													<div className='text-sm font-medium text-foreground mb-2 space-y-1'>
														<topic.icon
															size={16}
															className='mb-1'
														/>
														{topic.title}
													</div>
													<p className='text-sm text-muted-foreground'>
														{topic.description}
													</p>
												</Link>
											</NavigationMenuLink>
										</li>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href='/contato'
									className={navigationMenuTriggerStyle()}>
									Contato
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<AnimatedThemeToggler className='cursor-pointer' />
					</NavigationMenuList>
					<NavigationMenuIndicator />
					<NavigationMenuViewport />
				</NavigationMenu>
			</div>
		</header>
	);
}
