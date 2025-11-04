/** @format */

import Prism from '@/components/Prism';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Contrast, Eye, Hexagon, Orbit, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='min-h-[calc(100vh-4rem)] flex items-center w-full'>
			<div className='mx-auto grid md:grid-cols-2 w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0'>
				<div className='space-y-5 w-full h-full'>
					<div className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground border overflow-hidden w-fit p-2 rounded-md relative max-sm:mx-auto'>
						<BorderBeam
							borderWidth={1}
							reverse={false}
							duration={4}
							size={60}
						/>
						<AnimatedShinyText className='text-nowrap'>
							Engenheiro de Software
						</AnimatedShinyText>
					</div>
					<h1 className='text-5xl leading-tight 2xl:text-8xl text-foreground md:text-5xl capitalize mt-10'>
						Transformando <br />
						complexidade <br />
						em experiência
					</h1>
					<p className='text-base max-w-xl text-muted-foreground sm:text-xl'>
						Portfólio técnico interativo, focado em habilidades essenciais do{' '}
						<span className='text-foreground'>frontend moderno</span>
					</p>
					<div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-start'>
						<Button
							size='lg'
							className='text-xl capitalize'>
							Explorar Skills
						</Button>
						<Button
							variant='outline'
							className='text-xl capitalize'
							size='lg'
							asChild>
							<Link href='/contato'>Falar comigo</Link>
						</Button>
					</div>
				</div>
				<div className='w-full flex flex-col justify-between h-full'>
					<Prism
						animationType='hover'
						timeScale={0.2}
						height={3.5}
						baseWidth={5.0}
						transparent
						scale={1.6}
						offset={{ y: -60 }}
						hueShift={0}
						colorFrequency={1}
						noise={0.01}
						glow={1.1}
						bloom={1}
						hoverStrength={1}
					/>

					<ul className='flex justify-center gap-5  md:gap-10'>
						<li>
							<a href='#arc'>
								<Tooltip>
									<TooltipTrigger className='hover:text-cyan-500 transition-all ease-in-out duration-500 group '>
										<div className='group-hover:bg-linear-to-br from-amber-500/20 to-amber-500/20 via-transparent backdrop-blur-md group-hover:border-border border border-transparent p-1 rounded-md transition-all ease-in-out duration-300'>
											<Hexagon className='group-hover:-translate-y-1 transition-all ease-in-out duration-300' />
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Arquitetura Frontend</p>
									</TooltipContent>
								</Tooltip>
							</a>
						</li>
						<li>
							<a href='#perf'>
								<Tooltip>
									<TooltipTrigger className='hover:text-cyan-500 transition-all ease-in-out duration-500 group '>
										<div className='group-hover:bg-linear-to-br from-amber-500/20 to-amber-500/20 via-transparent backdrop-blur-md group-hover:border-border border border-transparent p-1 rounded-md transition-all ease-in-out duration-300'>
											<Zap className='group-hover:-translate-y-1 transition-all ease-in-out duration-300' />
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Performance</p>
									</TooltipContent>
								</Tooltip>
							</a>
						</li>
						<li>
							<a href='#state'>
								<Tooltip>
									<TooltipTrigger className='hover:text-cyan-500 transition-all ease-in-out duration-500 group '>
										<div className='group-hover:bg-linear-to-br from-amber-500/20 to-amber-500/20 via-transparent backdrop-blur-md group-hover:border-border border border-transparent p-1 rounded-md transition-all ease-in-out duration-300'>
											<Orbit className='group-hover:-translate-y-1 transition-all ease-in-out duration-300' />
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Estado & Comunicação</p>
									</TooltipContent>
								</Tooltip>
							</a>
						</li>
						<li>
							<a href='#test'>
								<Tooltip>
									<TooltipTrigger className='hover:text-cyan-500 transition-all ease-in-out duration-500 group '>
										<div className='group-hover:bg-linear-to-br from-amber-500/20 to-amber-500/20 via-transparent backdrop-blur-md group-hover:border-border border border-transparent p-1 rounded-md transition-all ease-in-out duration-300'>
											<Shield className='group-hover:-translate-y-1 transition-all ease-in-out duration-300' />
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Testes & Qualidade</p>
									</TooltipContent>
								</Tooltip>
							</a>
						</li>
						<li>
							<a href='#access'>
								<Tooltip>
									<TooltipTrigger className='hover:text-cyan-500 transition-all ease-in-out duration-500 group '>
										<div className='group-hover:bg-linear-to-br from-amber-500/20 to-amber-500/20 via-transparent backdrop-blur-md group-hover:border-border border border-transparent p-1 rounded-md transition-all ease-in-out duration-300'>
											<Contrast className='group-hover:-translate-y-1 transition-all ease-in-out duration-300' />
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Acessibilidade</p>
									</TooltipContent>
								</Tooltip>
							</a>
						</li>
						<li>
							<a href='#observer'>
								<Tooltip>
									<TooltipTrigger className='hover:text-cyan-500 transition-all ease-in-out duration-500 group '>
										<div className='group-hover:bg-linear-to-br from-amber-500/20 to-amber-500/20 via-transparent backdrop-blur-md group-hover:border-border border border-transparent p-1 rounded-md transition-all ease-in-out duration-300'>
											<Eye className='group-hover:-translate-y-1 transition-all ease-in-out duration-300' />
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>Observabilidade</p>
									</TooltipContent>
								</Tooltip>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
