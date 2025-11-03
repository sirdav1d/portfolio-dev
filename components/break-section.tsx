/** @format */

import Image from 'next/image';

export default function BreakSection() {
	return (
		<div className='mx-auto w-full max-w-7xl flex items-center justify-center my-5 opacity-10'>
			<Image
				src='/divider_circles.svg'
				width={400}
				height={100}
				alt='divider'
				className='dark:invert'
			/>
			<Image
				src='/divider_circles.svg'
				width={400}
				height={100}
				alt='divider'
				className='dark:invert'
			/>
			<Image
				src='/divider_circles.svg'
				width={400}
				height={100}
				alt='divider'
				className='dark:invert'
			/>
		</div>
	);
}
