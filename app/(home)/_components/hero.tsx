/** @format */

import Prism from '@/components/Prism';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { SectionNavDock } from '@/components/section-nav-dock';
import Link from 'next/link';

export default function Hero() {
	return (
		<section className='min-h-[calc(100vh-4rem)] flex items-center w-full'>
			<div className='mx-auto grid md:grid-cols-2 w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0'>
				<div className='space-y-5 w-full h-full'>
					<div className='text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground border overflow-hidden w-fit p-2 rounded-md relative max-sm:mx-auto'>
						<BorderBeam
							duration={3}
							colorFrom='#b45309'
							colorTo='#f59e0b'
						/>
						<BorderBeam
							delay={1.5}
							duration={3}
							colorFrom='#0e7490'
							colorTo='#06b6d4'
						/>
						<AnimatedShinyText className='text-nowrap'>
							Engenheiro de Software
						</AnimatedShinyText>
					</div>
					<h1 className='text-4xl leading-tight 2xl:text-8xl text-foreground md:text-4xl capitalize mt-10'>
						Transformando <br />
						complexidade <br />
						em experiência
					</h1>
					<p className='text-base max-w-xl text-muted-foreground sm:text-xl'>
						Portfólio técnico interativo, focado em habilidades essenciais do{' '}
						<span className='text-foreground'>frontend moderno</span>
					</p>
					<div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-start'>
						<RainbowButton
							size={'lg'}
							className='text-xl max-md:w-full capitalize'
							asChild>
							<a href='#arc'>Explorar Skills</a>
						</RainbowButton>
						<Button
							variant='outline'
							className='text-xl capitalize max-md:hidden'
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

					<SectionNavDock />
				</div>
			</div>
		</section>
	);
}
