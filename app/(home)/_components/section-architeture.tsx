/** @format */

import { BlocksIcon } from '@/components/ui/blocks';
import Architeture from './architeture';

export default function SectionArchiteture() {
	return (
		<section
			id='arc'
			className='min-h-[calc(100vh-5rem)] scroll-mt-24 flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 md:space-y-16'>
				<BlocksIcon
					size={384}
					aria-hidden='true'
					className='absolute z-20 left-0 top-0 h-96 w-96 text-foreground/10'
				/>

				<header className='space-y-4 text-center'>
					<h2 className='text-4xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Arquitetura Frontend
					</h2>
					<p className='text-muted-foreground text-balance leading-normal md:text-lg max-w-3xl mx-auto'>
						Decisões de arquitetura que tornam o{' '}
						<strong className='text-foreground'>
							código previsível, escalável e fácil de manter
						</strong>
						, mesmo com crescimento de features e time.
					</p>
				</header>

				<div className='grid gap-6 lg:grid-cols-3'>
					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left space-y-4'>
						<h3 className='text-xl text-foreground'>Princípios</h3>
						<ul className='list-disc space-y-4 text-sm text-muted-foreground pl-4'>
							<li>Isolamento por feature para reduzir acoplamento.</li>
							<li>Reuso consciente entre UI global e UI local.</li>
							<li>Fluxo de dados explícito e rastreável.</li>
							<li>Convenções claras para acelerar onboarding.</li>
						</ul>
					</div>
					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left space-y-4'>
						<h3 className='text-xl text-foreground'>Modelo</h3>
						<ul className='list-disc space-y-4 text-sm text-muted-foreground pl-4'>
							<li>
								Atomic Design para componentes reutilizáveis e consistência
								visual.
							</li>
							<li>
								Feature-Sliced para agrupar lógica, UI e ações por contexto.
							</li>
							<li>
								Camadas separadas para rotas, UI compartilhada e infraestrutura.
							</li>
						</ul>
					</div>
					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left space-y-4'>
						<h3 className='text-xl text-foreground'>Regras</h3>
						<ul className='list-disc space-y-4 text-sm text-muted-foreground pl-4'>
							<li>UI não acessa dados diretamente.</li>
							<li>Ações centralizam fetch e integrações.</li>
							<li>Compartilhados não dependem de features.</li>
						</ul>
					</div>
				</div>

				<div className='space-y-8 text-left'>
					<div className='space-y-4'>
						<div className='space-y-2 text-center sm:text-left'>
							<h3 className='text-2xl text-foreground'>Mapa visual</h3>
						</div>

						<div className='flex flex-wrap gap-3 text-xs text-muted-foreground justify-center sm:justify-start'>
							<span className='inline-flex items-center gap-2'>
								<span className='size-2 rounded-full bg-sky-400' />
								Rotas
							</span>
							<span className='inline-flex items-center gap-2'>
								<span className='size-2 rounded-full bg-amber-400' />
								UI compartilhada
							</span>
							<span className='inline-flex items-center gap-2'>
								<span className='size-2 rounded-full bg-violet-400' />
								Infra (hooks, lib, providers)
							</span>
							<span className='inline-flex items-center gap-2'>
								<span className='size-2 rounded-full bg-lime-400' />
								Ações e dados
							</span>
							<span className='inline-flex items-center gap-2'>
								<span className='size-2 rounded-full bg-rose-400' />
								Qualidade
							</span>
							<span className='inline-flex items-center gap-2'>
								<span className='size-2 rounded-full bg-emerald-400' />
								Docs
							</span>
							<span className='inline-flex items-center gap-2'>
								<span className='size-2 rounded-full bg-fuchsia-400' />
								Assets
							</span>
						</div>

						<div className='rounded-xl border border-border/60 bg-background/70 p-3 md:p-4'>
							<Architeture />
						</div>
					</div>

					<div className='rounded-xl border border-border/60 bg-background/70 p-5 space-y-5'>
						<h3 className='text-xl md:text-3xl text-foreground text-center'>
							O que evitamos
						</h3>
						<ul className='flex flex-col md:flex-row gap-5 justify-between max-md:text-sm text-muted-foreground'>
							<li className='flex items-center gap-2'>
								<span className='size-2 rounded-full bg-gray-100' />
								Componentes globais com lógica de feature.
							</li>
							<li className='flex items-center gap-2'>
								<span className='size-2 rounded-full bg-gray-100' />
								Imports cruzados entre features.
							</li>
							<li className='flex items-center gap-2'>
								<span className='size-2 rounded-full bg-gray-100' />
								Providers empilhados sem necessidade real.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
