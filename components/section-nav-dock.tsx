/** @format */

'use client';

import { useRef } from 'react';
import { AnimatePresence, LayoutGroup, motion, useInView } from 'motion/react';
import { SectionNav } from '@/components/section-nav';

export function SectionNavDock() {
	const sentinelRef = useRef<HTMLDivElement | null>(null);
	const isHeroVisible = useInView(sentinelRef, {
		margin: '0px 0px 0px 0px',
	});
	const isDocked = !isHeroVisible;

	return (
		<LayoutGroup>
			<div
				ref={sentinelRef}
				className='h-px w-full'
				aria-hidden='true'
			/>

			<div className='relative'>
				<AnimatePresence initial={false}>
					{!isDocked && (
						<motion.div
							layoutId='section-nav'
							layout='position'
							transition={{ type: 'spring', stiffness: 400, damping: 35 }}>
							<SectionNav
								orientation='horizontal'
								className='justify-center max-md:mt-10'
							/>
						</motion.div>
					)}
				</AnimatePresence>

				<AnimatePresence initial={false}>
					{isDocked && (
						<motion.div
							layoutId='section-nav'
							layout='position'
							transition={{ type: 'spring', stiffness: 400, damping: 35 }}
							className='fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block'>
							<SectionNav
								orientation='vertical'
								className='rounded-2xl border border-border/60 bg-background/70 p-2 backdrop-blur-md shadow-lg'
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</LayoutGroup>
	);
}
