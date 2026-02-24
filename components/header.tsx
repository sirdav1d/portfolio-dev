/** @format */

'use client';

import Link from 'next/link';
import { FileDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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

const primaryLinks = [
	{ href: '/', label: 'Inicio' },
	{ href: '/projetos', label: 'Projetos' },
	{ href: '/contato', label: 'Contato' },
] as const;

const CURRICULO_PATH = '/downloads/david-diniz-dos-santos-curriculo-2026.pdf';

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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		if (!isMobileMenuOpen || typeof window === 'undefined') {
			return;
		}

		const mediaQueryList = window.matchMedia('(max-width: 767px)');
		if (!mediaQueryList.matches) {
			return;
		}

		const { body, documentElement } = document;
		const previousBodyOverflow = body.style.overflow;
		const previousBodyTouchAction = body.style.touchAction;
		const previousHtmlOverscroll = documentElement.style.overscrollBehavior;

		body.style.overflow = 'hidden';
		body.style.touchAction = 'none';
		documentElement.style.overscrollBehavior = 'none';

		const onViewportChange = (event: MediaQueryListEvent) => {
			if (!event.matches) {
				setIsMobileMenuOpen(false);
			}
		};

		mediaQueryList.addEventListener('change', onViewportChange);

		return () => {
			mediaQueryList.removeEventListener('change', onViewportChange);
			body.style.overflow = previousBodyOverflow;
			body.style.touchAction = previousBodyTouchAction;
			documentElement.style.overscrollBehavior = previousHtmlOverscroll;
		};
	}, [isMobileMenuOpen]);

	useEffect(() => {
		if (!isMobileMenuOpen || typeof window === 'undefined') {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isMobileMenuOpen]);

	const mobileNavigation =
		isMobileMenuOpen && typeof window !== 'undefined'
			? createPortal(
					<nav
						id='mobile-navigation'
						className='fixed inset-0 z-999 bg-background/40 backdrop-blur-md md:hidden'
						aria-label='Navegacao principal'>
						<div className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between border-b border-border/60 px-5'>
							<Link
								href='/'
								onClick={closeMobileMenu}
								className='text-base font-semibold uppercase tracking-[0.2em] text-foreground'>
								david.dev
							</Link>

							<button
								type='button'
								className='inline-flex size-9 items-center justify-center rounded-md border border-border/60 bg-card/60 text-foreground transition-colors hover:bg-accent'
								aria-label='Fechar menu de navegacao'
								onClick={closeMobileMenu}>
								<X
									size={18}
									aria-hidden='true'
								/>
							</button>
						</div>

						<div className='mx-auto h-[calc(100dvh-4rem)] w-full max-w-7xl overflow-y-auto overscroll-contain px-5 py-4'>
							<div className='space-y-4'>
								<ul className='space-y-1'>
									{primaryLinks.map((link) => (
										<li key={link.href}>
											<Link
												href={link.href}
												onClick={closeMobileMenu}
												className='block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground'>
												{link.label}
											</Link>
										</li>
									))}
									<li>
										<a
											href={CURRICULO_PATH}
											download
											onClick={closeMobileMenu}
											className='flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent hover:text-accent-foreground'>
											<FileDown
												size={14}
												aria-hidden='true'
											/>
											<span>Curriculo</span>
										</a>
									</li>
								</ul>

								<div className='border-t border-border/60 pt-4'>
									<p className='px-3 text-xs uppercase tracking-[0.16em] text-muted-foreground'>
										Habilidades
									</p>

									<ul className='mt-2 space-y-1'>
										{topics.map((topic) => (
											<li key={topic.href}>
												<Link
													href={topic.href}
													onClick={closeMobileMenu}
													className='block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground'>
													{topic.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</nav>,
					document.body,
				)
			: null;

	return (
		<>
			<header className='sticky top-0 z-60 w-full border-b border-border/60 bg-background/40 backdrop-blur-md '>
				<div className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5'>
					<Link
						href='/'
						className='text-base font-semibold uppercase tracking-[0.2em] text-foreground'>
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

							<NavigationMenuItem>
								<NavigationMenuLink
									asChild
									className='font-normal'>
									<a
										href={CURRICULO_PATH}
										download
										className={navigationMenuTriggerStyle()}>
										<span className='inline-flex items-center gap-1.5'>
											<FileDown
												size={14}
												aria-hidden='true'
											/>
											<span>Curriculo</span>
										</span>
									</a>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
						<NavigationMenuIndicator />
						<NavigationMenuViewport />
					</NavigationMenu>

					<button
						type='button'
						className='inline-flex size-9 items-center justify-center rounded-md border border-border/60 bg-card/60 text-foreground transition-colors hover:bg-accent md:hidden'
						aria-expanded={isMobileMenuOpen}
						aria-controls='mobile-navigation'
						onClick={() => setIsMobileMenuOpen((previous) => !previous)}>
						<span className='sr-only'>
							{isMobileMenuOpen
								? 'Fechar menu de navegacao'
								: 'Abrir menu de navegacao'}
						</span>
						{isMobileMenuOpen ? (
							<X
								size={18}
								aria-hidden='true'
							/>
						) : (
							<Menu
								size={18}
								aria-hidden='true'
							/>
						)}
					</button>
				</div>
			</header>

			{mobileNavigation}
		</>
	);
}
