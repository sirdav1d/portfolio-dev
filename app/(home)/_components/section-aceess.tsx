/** @format */

'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import type { LucideIcon } from 'lucide-react';
import { Contrast, Keyboard, LayoutGrid } from 'lucide-react';

type Language = 'PT' | 'EN';

const accessibilityPillars: Array<{
	title: string;
	description: string;
	icon: LucideIcon;
}> = [
	{
		title: 'Intera\u00E7\u00E3o',
		description:
			'Foco vis\u00EDvel, navega\u00E7\u00E3o por teclado e feedback claro em cada a\u00E7\u00E3o.',
		icon: Keyboard,
	},
	{
		title: ' Visual',
		description:
			'Contraste dentro do padr\u00E3o AA/AAA, espa\u00E7amento confort\u00E1vel e legibilidade.',
		icon: Contrast,
	},
	{
		title: 'Estrutura',
		description:
			'Sem\u00E2ntica correta e landmarks claros: <header> <main> <footer>.',
		icon: LayoutGrid,
	},
];

const languageOptions: Array<Language> = ['PT', 'EN'];

const languageLabels: Record<Language, string> = {
	PT: '\u{1F1E7}\u{1F1F7} PT',
	EN: '\u{1F1FA}\u{1F1F8} EN',
};

const impactMessages: Record<Language, string> = {
	PT: 'Acessibilidade \u00E9 parte da experi\u00EAncia, n\u00E3o uma camada adicional.',
	EN: 'Accessibility is part of the experience, not an afterthought.',
};

export default function SectionAccess() {
	const [language, setLanguage] = useState<Language>('PT');
	const prefersReducedMotion = useReducedMotion();
	const message = impactMessages[language];

	const initialMotion = prefersReducedMotion
		? { opacity: 1, y: 0 }
		: { opacity: 0, y: 10 };
	const exitMotion = prefersReducedMotion
		? { opacity: 1, y: 0 }
		: { opacity: 0, y: -10 };
	const transitionMotion = prefersReducedMotion
		? { duration: 0 }
		: { duration: 0.3, ease: 'easeOut' as const };

	return (
		<section
			id='access'
			className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<Contrast
					fill='none'
					stroke='currentColor'
					strokeWidth={0.2}
					className='absolute scale-90 -z-20 left-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Accessibilidade & <span className='lowercase'>i18n</span>
					</h2>
					<p className='text-muted-foreground md:text-lg text-balance'>
						Projeto interfaces acessíveis, responsivas e preparadas para
						qualquer contexto. Sigo o desenvolvimento orientado à{' '}
						<span className='text-foreground'>experiência do usuário</span>.
					</p>
				</div>
				<div className='grid gap-6 text-left sm:gap-8 md:grid-cols-3'>
					{accessibilityPillars.map(({ title, description, icon: Icon }) => (
						<Card
							key={title}
							className='flex h-full flex-col justify-between border-border/30 bg-muted/10 shadow-lg shadow-black/5 backdrop-blur'>
							<CardHeader className='flex flex-row items-center gap-4 space-y-0'>
								<span className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
									<Icon
										className='h-5 w-5'
										strokeWidth={1.5}
									/>
								</span>
								<CardTitle className='text-2xl tracking-wider font-light text-foreground max-md:text-lg'>
									{title}
								</CardTitle>
							</CardHeader>
							<CardContent className='pt-0'>
								<CardDescription className='text-sm text-muted-foreground md:text-base'>
									{description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
				<Card className='flex flex-col-reverse gap-10  p-6 text-left shadow-lg shadow-black/5 backdrop-blur md:flex-row md:items-center md:justify-between'>
					<AnimatePresence
						mode='wait'
						initial={false}>
						<motion.p
							key={language}
							initial={initialMotion}
							animate={{ opacity: 1, y: 0 }}
							exit={exitMotion}
							transition={transitionMotion}
							className='italic text-balance text-center tracking-wide leading-relaxed text-foreground text-lg'>
							{`"${message}"`}
						</motion.p>
					</AnimatePresence>
					<Select
						value={language}
						onValueChange={(value: Language) => setLanguage(value)}>
						<SelectTrigger className='w-full md:w-38 border-white/20 bg-white/10 text-sm font-medium tracking-widest text-foreground focus:ring-offset-background'>
							<SelectValue />
						</SelectTrigger>
						<SelectContent className='border-white/10 bg-background/90 backdrop-blur w-full md:w-38'>
							{languageOptions.map((option) => (
								<SelectItem
									className='md:w-38 w-full border'
									key={option}
									value={option}>
									{languageLabels[option]}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Card>
			</div>
		</section>
	);
}
