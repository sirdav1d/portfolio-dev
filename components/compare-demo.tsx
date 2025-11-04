/** @format */

import { Compare } from '@/components/ui/compare';

export function CompareDemo() {
	return (
		<div className=' '>
			<Compare
				firstImage='https://assets.aceternity.com/code-problem.png'
				secondImage='https://assets.aceternity.com/code-solution.png'
				firstImageClassName='object-cover object-left-top'
				secondImageClassname='object-cover object-left-top'
				className='h-[150px] w-[200px] md:h-[200px] md:w-[500px] '
				slideMode='hover'
			/>
		</div>
	);
}
