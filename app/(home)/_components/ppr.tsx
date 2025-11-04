/** @format */

'use client';

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
				className='w-full rounded-md h-10 md:h-20 bg-linear-to-r from-cyan-500 to-amber-500'
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.5,
					repeatType: 'mirror',
					repeat: Infinity,
					repeatDelay: 2,
					duration: 1,
				}}
			/>
			<motion.span
				className='w-full rounded-md h-10 md:h-20 bg-muted'
				initial={{ opacity: 0, y: -40 }}
				whileInView={{ opacity: 1, y: 0 }}
			/>
		</div>
	);
}
