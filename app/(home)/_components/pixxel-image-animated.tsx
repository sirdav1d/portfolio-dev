/** @format */

'use client';

import { PixelImage } from '@/components/ui/shadcn-io/pixel-image';
import { motion } from 'motion/react';

export default function PixxelImageAnimated() {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
			whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
			whileHover={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
			transition={{ delay: 0.5, duration: 0.5 }}
			exit={{ opacity: 0, display: 'hidden' }}>
			<PixelImage
				src={'/eu.jpg'}
				grid='6x4'
			/>
		</motion.div>
	);
}
