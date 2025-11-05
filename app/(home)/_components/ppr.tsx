/** @format */

'use client';

import { BorderBeam } from '@/components/ui/border-beam';
import { motion } from 'motion/react';

export default function PPR() {
	return (
		<div className='overflow-hidden w-full flex gap-3 flex-col h-full'>
			<motion.span
				className='w-full rounded-md h-10 md:h-20 bg-muted'
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
			/>
			<motion.span
				className='w-full rounded-md h-10 md:h-20  relative border'
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
				whileHover={{ opacity: 0, y: -40 }}
				transition={{
					duration: 0.5,
				}}>
				<BorderBeam
					duration={3}
					size={68}
					colorFrom='#b45309'
					colorTo='#f59e0b'
				/>
				<BorderBeam
					delay={1.5}
					duration={3}
					size={68}
					colorFrom='#0e7490'
					colorTo='#06b6d4'
				/>
			</motion.span>
			<motion.span
				className='w-full rounded-md h-10 md:h-20 bg-muted'
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
			/>
		</div>
	);
}
