/** @format */

'use client';

import { StripedPattern } from '@/components/magicui/striped-pattern';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'motion/react';

export default function LazySkeletons() {
	return (
		<div className='w-full flex items-center justify-between gap-2  h-full relative'>
			<StripedPattern
				direction='left'
				className='-z-10 opacity-5'
			/>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 0.5 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-36 md:w-48  h-40' />
			</motion.span>
			<motion.span
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 0.7 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-36 md:w-48 h-40' />
			</motion.span>
			<motion.span
				className='max-md:hidden'
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 0.9 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-40 md:w-48 h-40' />
			</motion.span>
			<motion.span
				className='max-md:hidden'
				initial={{ opacity: 0, filter: 'blur(4px)' }}
				transition={{ duration: 2, delay: 2 }}
				whileInView={{ opacity: 1, filter: 'blur(0px)' }}>
				<Skeleton className='w-48 h-40' />
			</motion.span>
		</div>
	);
}
