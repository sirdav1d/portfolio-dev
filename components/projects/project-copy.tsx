/** @format */

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import type { Project } from '@/data/projects';

type ProjectCopyProps = {
	project: Project;
};

export function ProjectCopy({ project }: ProjectCopyProps) {
	const primaryStack = project.stack.slice(0, 5);
	const sections = [
		{ value: 'goals', title: 'Objetivo', items: project.goals },
		{ value: 'work', title: 'O que eu fiz', items: project.work },
		{ value: 'impact', title: 'Impacto', items: project.impact },
	];

	return (
		<div className='space-y-6'>
			<div className='space-y-3'>
				<h2 className='text-3xl md:text-4xl text-foreground'>
					{project.title}
				</h2>
				<p className='text-base text-muted-foreground md:text-lg text-balance'>
					{project.tagline}
				</p>
			</div>

			<div className='space-y-3'>
				<Accordion
					type='multiple'
					defaultValue={['goals']}
					className='space-y-3'>
					{sections.map((section) => (
						<AccordionItem
							key={section.value}
							value={section.value}
							className='border-b-0! rounded-xl border border-border/60 bg-background/60 px-4'>
							<AccordionTrigger className='py-4 text-sm uppercase tracking-[0.16em] text-foreground cursor-pointer hover:no-underline'>
								{section.title}
							</AccordionTrigger>
							<AccordionContent className='pb-4'>
								<ul className='list-disc space-y-2 pl-4 text-sm text-muted-foreground'>
									{section.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>

			<div className='space-y-2'>
				<h3 className='text-sm uppercase tracking-[0.16em] text-foreground/80'>
					Stack e praticas
				</h3>
				<div className='flex flex-wrap gap-2'>
					{primaryStack.map((item) => (
						<span
							key={item}
							className='rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-muted-foreground'>
							{item}
						</span>
					))}
				</div>
			</div>

			<div className='space-y-2'>
				<h3 className='text-sm uppercase tracking-[0.16em] text-foreground/80'>
					Links
				</h3>
				<div className='flex flex-wrap gap-3'>
					{project.links.map((link) =>
						link.href ? (
							<a
								key={link.label}
								href={link.href}
								target='_blank'
								rel='noreferrer'
								className='rounded-md border border-border/60 bg-background/70 px-3 py-2 text-sm text-foreground transition-colors hover:border-foreground/40'>
								{link.label}
							</a>
						) : (
							<span
								key={link.label}
								className='rounded-md border border-border/60 bg-background/70 px-3 py-2 text-sm text-muted-foreground'>
								{link.label}
								{link.note ? ` - ${link.note}` : ''}
							</span>
						),
					)}
				</div>
			</div>
		</div>
	);
}
