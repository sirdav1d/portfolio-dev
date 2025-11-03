/** @format */

'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface Avatar {
	imageUrl: string;
	profileUrl: string;
}
interface AvatarCirclesProps {
	className?: string;
	numPeople?: number;
	avatarUrls: Avatar[];
}

export const AvatarCircles = ({
	className,
	avatarUrls,
}: AvatarCirclesProps) => {
	return (
		<motion.div
			initial={{ filter: 'blur(2px)' }}
			whileInView={{ filter: 'blur(0px)' }}
			transition={{
				delay: 0.5,
				duration: 1,
			}}
			className={cn('z-10 flex -space-x-4 rtl:space-x-reverse', className)}>
			{avatarUrls.map((url, index) => (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					key={index}
					className='h-20 w-20 max-md:scale-[60%] max-md:translate-y-1 rounded-full border-2 border-zinc-50 dark:border-zinc-800'
					src={url.imageUrl}
					width={40}
					height={40}
					alt={`Avatar ${index + 1}`}
				/>
			))}
		</motion.div>
	);
};
