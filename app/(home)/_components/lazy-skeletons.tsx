/** @format */

'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'motion/react';

export default function LazySkeletons() {
	return (
		<div className='w-full flex items-center justify-center gap-2 md:gap-5 h-full'>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 0.5 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-40 h-40' />
			</motion.span>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 0.7 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-40 h-40' />
			</motion.span>
			<motion.span
				className='max-md:hidden'
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 0.9 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-40 h-40' />
			</motion.span>
			<motion.span
				className='max-md:hidden'
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 2 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-40 h-40' />
			</motion.span>
		</div>
	);
}
