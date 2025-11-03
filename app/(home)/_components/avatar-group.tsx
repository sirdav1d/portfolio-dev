/** @format */

import { AvatarCircles } from '@/components/ui/avatar-circles';

const avatars = [
	{
		imageUrl: '/eu.jpg',
		profileUrl: '',
	},
];

export function AvatarCirclesGroup() {
	return (
		<AvatarCircles
			numPeople={99}
			avatarUrls={avatars}
		/>
	);
}
