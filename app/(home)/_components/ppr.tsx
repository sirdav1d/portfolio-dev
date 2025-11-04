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
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					repeatType: 'mirror',
					repeat: Infinity,
					repeatDelay: 4,
					duration: 1,
				}}>
				<BorderBeam
					borderWidth={1}
					reverse={false}
					duration={4}
					size={60}
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
