/** @format */

import Prism from '@/components/Prism';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
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
		<section className='min-h-[calc(100vh-5rem)] flex items-center w-full'>
			<div className='mx-auto grid md:grid-cols-2 w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0'>
				<div className='space-y-5 w-full h-full'>
					<span className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground border w-fit p-2 rounded-md'>
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
						animationType='rotate'
						timeScale={0.02}
						height={4.0}
						baseWidth={5.1}
						scale={1.8}
						offset={{ y: -80 }}
						hueShift={0}
						colorFrequency={1}
						noise={0.01}
						glow={1}
					/>

					<ul className='flex justify-center gap-5  md:gap-10'>
						<li>
							<Tooltip>
								<TooltipTrigger>
									<Hexagon />
								</TooltipTrigger>
								<TooltipContent>
									<p>Arquitetura Frontend</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger>
									<Zap />
								</TooltipTrigger>
								<TooltipContent>
									<p>Performance</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger>
									<Orbit />
								</TooltipTrigger>
								<TooltipContent>
									<p>Estado & Comunicação</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger>
									<Shield />
								</TooltipTrigger>
								<TooltipContent>
									<p>Testes & Qualidade</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger>
									<Contrast />
								</TooltipTrigger>
								<TooltipContent>
									<p>Acessibilidade</p>
								</TooltipContent>
							</Tooltip>
						</li>
						<li>
							<Tooltip>
								<TooltipTrigger>
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
