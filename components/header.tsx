/** @format */

'use client';

import Link from 'next/link';

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
import { Contrast, Eye, Hexagon, Orbit, Shield, Zap } from 'lucide-react';

const topics = [
	{
		icon: Hexagon,
		title: 'Arquitetura',
		href: '/#arc',
		description: 'Principios e padroes para sustentar aplicacoes robustas.',
	},
	{
		icon: Zap,
		title: 'Performance',
		href: '/#perf',
		description: 'Estrategias para entregar experiencias rapidas e eficientes.',
	},
	{
		icon: Orbit,
		title: 'Gerenciamento de Estado',
		href: '/#state',
		description: 'Organize dados complexos sem perder previsibilidade.',
	},
	{
		icon: Shield,
		title: 'Testes',
		href: '/#test',
		description: 'Garanta qualidade continua com automacao inteligente.',
	},

	{
		icon: Contrast,
		title: 'Acessibilidade',
		href: '/#access',
		description: 'Interfaces inclusivas que funcionam para qualquer pessoa.',
	},
	{
		icon: Eye,
		title: 'Observabilidade',
		href: '/#observer',
		description: 'Monitore, trace e antecipe problemas em producao.',
	},
];

export default function Header() {
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
									{topics.map((topic) => (
										<li key={topic.title}>
											<NavigationMenuLink asChild>
												<Link
													href={topic.href}
													className='block w-full h-full rounded-md border border-border/60 bg-card/50 p-4 text-left transition-colors hover:border-border hover:bg-accent'>
													<div className='text-sm text-foreground mb-2 space-y-1'>
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
