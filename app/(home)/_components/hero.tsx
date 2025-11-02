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
					<span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground border w-fit p-2 rounded-md relative'>
						<BorderBeam
							duration={8}
							size={100}
						/>
						<AnimatedShinyText>Engenheiro de Software</AnimatedShinyText>
					</span>
					<h1 className='text-5xl leading-tight 2xl:text-8xl text-foreground md:text-5xl capitalize mt-10'>
						Transformando <br />
						complexidade <br />
						em experiência
					</h1>
					<p className='text-base max-w-xl text-muted-foreground sm:text-xl'>
						Portfólio técnico interativo, focado em habilidades essenciais do
						frontend moderno
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
						glow={1}
						bloom={1}
						hoverStrength={1}
					/>

					<ul className='flex justify-center gap-5  md:gap-10'>
						<li>
							<Tooltip>
								<TooltipTrigger className='hover:text-red-600 transition-all ease-in-out duration-500'>
									<Hexagon />
								</TooltipTrigger>
								<TooltipContent>
									<p>Arquitetura Frontend</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger className='hover:text-amber-600 transition-all ease-in-out duration-500'>
									<Zap />
								</TooltipTrigger>
								<TooltipContent>
									<p>Performance</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger className='hover:text-lime-600 transition-all ease-in-out duration-500'>
									<Orbit />
								</TooltipTrigger>
								<TooltipContent>
									<p>Estado & Comunicação</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger className='hover:text-emerald-600 transition-all ease-in-out duration-500'>
									<Shield />
								</TooltipTrigger>
								<TooltipContent>
									<p>Testes & Qualidade</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger className='hover:text-cyan-600 transition-all ease-in-out duration-500'>
									<Contrast />
								</TooltipTrigger>
								<TooltipContent>
									<p>Acessibilidade</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger className='hover:text-indigo-600 transition-all ease-in-out duration-500'>
									<Eye />
								</TooltipTrigger>
								<TooltipContent>
									<p>Observabilidade</p>
								</TooltipContent>
							</Tooltip>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
