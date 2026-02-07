/** @format */

'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CodeBlock } from '@/components/ui/code-block';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { ContrastIcon } from '@/components/ui/contrast';
import type { LucideIcon } from 'lucide-react';
import { Contrast as ContrastStroke, Keyboard, LayoutGrid } from 'lucide-react';
import MacBookKeyboard from '@/components/macbook-keyboard';

type Language = 'PT' | 'EN';

type Pillar = {
	title: string;
	description: string;
	icon: LucideIcon;
};

const accessibilityPillars: Pillar[] = [
	{
		title: 'Interação',
		description:
			'Foco visível, navegação por teclado e feedback claro em cada ação.',
		icon: Keyboard,
	},
	{
		title: 'Visual',
		description: 'Contraste AA/AAA, legibilidade e espaçamento confortável.',
		icon: ContrastStroke,
	},
	{
		title: 'Estrutura',
		description: 'Semântica correta e landmarks claros para leitores de tela.',
		icon: LayoutGrid,
	},
];

const languageOptions: Array<Language> = ['PT', 'EN'];

const languageLabels: Record<Language, string> = {
	PT: '🇧🇷 PT',
	EN: '🇺🇸 EN',
};

const i18nSamples: Record<
	Language,
	{ nav: string; cta: string; toast: string; helper: string; tagline: string }
> = {
	PT: {
		nav: 'Projetos',
		cta: 'Falar comigo',
		toast: 'Mensagem enviada com sucesso',
		helper: 'Use Tab para navegar pelos controles',
		tagline: 'Acessibilidade é parte da experiência, não um extra.',
	},
	EN: {
		nav: 'Projects',
		cta: 'Contact me',
		toast: 'Message sent successfully',
		helper: 'Use Tab to navigate the controls',
		tagline: 'Accessibility is part of the experience, not an extra.',
	},
};

const checklist = [
	'Contraste validado e foco sempre visível.',
	'Navegação completa por teclado e atalhos.',
	'Landmarks semânticos e rótulos claros.',
	'Anúncios para leitores (aria-live).',
];

const A11Y_SNIPPET = `button aria-label="Salvar" aria-busy={isSaving}>
  Salvar alterações
</button>

<p role="status" aria-live="polite">
  {statusMessage}
</p>

<nav aria-label="Navegação principal">
  ...
</nav>`;

export default function SectionAccess() {
	const [language, setLanguage] = useState<Language>('PT');
	const prefersReducedMotion = useReducedMotion();
	const sample = i18nSamples[language];

	const initialMotion = prefersReducedMotion
		? { opacity: 1, y: 0 }
		: { opacity: 0, y: 8 };
	const exitMotion = prefersReducedMotion
		? { opacity: 1, y: 0 }
		: { opacity: 0, y: -8 };
	const transitionMotion = prefersReducedMotion
		? { duration: 0 }
		: { duration: 0.25, ease: 'easeOut' as const };

	return (
		<section
			id='access'
			className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<ContrastIcon
					size={384}
					aria-hidden='true'
					className='absolute scale-90 z-20 left-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Acessibilidade & <span className='lowercase'>i18n</span>
					</h2>
					<p className='text-muted-foreground md:text-lg text-balance'>
						Interfaces acessíveis, responsivas e preparadas para qualquer
						contexto. Inclusão como parte do produto.
					</p>
				</div>

				<div className='grid gap-6 lg:grid-cols-12 items-stretch'>
					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left lg:col-span-7 h-full min-w-0'>
						<div className='relative'>
							<svg
								viewBox='0 0 1000 40'
								preserveAspectRatio='none'
								className='absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 w-full'
								aria-hidden='true'>
								<defs>
									<linearGradient
										id='a11y-line'
										x1='0%'
										y1='0%'
										x2='100%'
										y2='0%'>
										<stop
											offset='0%'
											stopColor='#f59e0b'
											stopOpacity='0.4'
										/>
										<stop
											offset='50%'
											stopColor='#38bdf8'
											stopOpacity='0.6'
										/>
										<stop
											offset='100%'
											stopColor='#10b981'
											stopOpacity='0.4'
										/>
									</linearGradient>
								</defs>
								<path
									d='M 20 20 H 980'
									stroke='url(#a11y-line)'
									strokeWidth='2'
									strokeDasharray='6 8'
									fill='none'>
									<animate
										attributeName='stroke-dashoffset'
										from='0'
										to='28'
										dur='2.4s'
										repeatCount='indefinite'
									/>
								</path>
							</svg>

							<div className='relative grid gap-6 sm:grid-cols-3 text-left'>
								{accessibilityPillars.map(
									({ title, description, icon: Icon }) => (
										<div
											key={title}
											className='space-y-2 text-left'>
											<span className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-base font-mono text-foreground '>
												<Icon className='h-6 w-6' />
												{title}
											</span>
											<p className='text-sm text-muted-foreground text-pretty'>
												{description}
											</p>
										</div>
									),
								)}
							</div>
						</div>

						<div className='mt-6 pt-4 border-t border-border/90'>
							<div className='flex items-center justify-between'>
								<h3 className='text-lg text-foreground font-mono'>Checklist</h3>
								<span className='text-xs uppercase tracking-wide text-muted-foreground'>
									WCAG
								</span>
							</div>
							<ul className='mt-3 grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground pl-4 list-disc'>
								{checklist.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>

					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left lg:col-span-5 h-full min-w-0'>
						<div className='flex items-center justify-between gap-4'>
							<h3 className='text-lg text-foreground font-mono'>i18n real</h3>
							<Select
								value={language}
								onValueChange={(value: Language) => setLanguage(value)}>
								<SelectTrigger className='w-24 border-white/20 bg-white/10 text-xs font-medium tracking-widest text-foreground focus:ring-offset-background'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent className='border-white/10 bg-background/90 backdrop-blur w-24'>
									{languageOptions.map((option) => (
										<SelectItem
											className='w-24'
											key={option}
											value={option}>
											{languageLabels[option]}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<AnimatePresence
							mode='wait'
							initial={false}>
							<motion.div
								key={language}
								initial={initialMotion}
								animate={{ opacity: 1, y: 0 }}
								exit={exitMotion}
								transition={transitionMotion}
								className='mt-10 space-y-3 text-sm text-muted-foreground'>
								<div className='flex items-center justify-between gap-3'>
									<span className='text-foreground/80'>Nav</span>
									<span className='text-foreground'>{sample.nav}</span>
								</div>
								<div className='flex items-center justify-between gap-3'>
									<span className='text-foreground/80'>CTA</span>
									<span className='text-foreground'>{sample.cta}</span>
								</div>
								<div className='flex items-center justify-between gap-3'>
									<span className='text-foreground/80'>Toast</span>
									<span className='text-foreground'>{sample.toast}</span>
								</div>
								<p className='pt-8 text-lg italic text-foreground text-center text-balance'>
									&quot;{sample.tagline}&quot;
								</p>
							</motion.div>
						</AnimatePresence>
					</div>

					<div className='rounded-xl border border-border/60 bg-background/70 p-4 text-left lg:col-span-8 h-full min-w-0'>
						<h3 className='text-lg text-foreground font-mono mb-3'>Exemplo</h3>
						<CodeBlock
							language='tsx'
							filename='a11y.tsx'
							code={A11Y_SNIPPET}
							highlightLines={[1, 5, 9]}
						/>
					</div>

					<div className='rounded-xl border border-border/60 bg-background/70 p-4 text-left lg:col-span-4 h-full flex flex-col gap-4 min-w-0'>
						<div>
							<h3 className='text-lg text-foreground font-mono'>Teclado</h3>
							<p className='text-sm text-muted-foreground mt-2'>
								{sample.helper}
							</p>
							<div className='flex flex-wrap gap-2 text-xs text-muted-foreground mt-3'>
								<span className='rounded-full border border-border/60 bg-background px-2 py-1'>
									Tab
								</span>
								<span className='rounded-full border border-border/60 bg-background px-2 py-1'>
									Shift + Tab
								</span>
								<span className='rounded-full border border-border/60 bg-background px-2 py-1'>
									Enter
								</span>
							</div>
						</div>
						<div className='relative mt-auto flex h-36 w-full items-end justify-center overflow-hidden sm:h-44 md:h-auto'>
							<div className='origin-top bg-red-500 border scale-[1.1] max-md:-translate-y-28 sm:scale-[0.5] md:scale-[0.6]'>
								<MacBookKeyboard />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
