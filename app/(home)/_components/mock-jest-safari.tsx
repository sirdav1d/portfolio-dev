/** @format */

import { Safari } from '@/components/ui/safari';

export function MockJestSafari() {
	return (
		<div className='w-full max-md:hidden'>
			<Safari
				url='david.dev'
				imageSrc='/test.png'
			/>
		</div>
	);
}
