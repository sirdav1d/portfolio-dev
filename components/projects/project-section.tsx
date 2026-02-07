/** @format */

import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ProjectAssets } from './project-assets';
import { ProjectCopy } from './project-copy';

type ProjectSectionProps = {
	project: Project;
	reverse?: boolean;
};

export function ProjectSection({
	project,
	reverse = false,
}: ProjectSectionProps) {
	return (
		<section
			id={project.slug}
			className='rounded-2xl  bg-background/40 p-4   scroll-mt-24 my-40'>
			<div className='grid items-start gap-8 lg:grid-cols-12'>
				<div className={cn('lg:col-span-7', reverse ? 'lg:order-2' : '')}>
					<ProjectAssets
						projectTitle={project.title}
						assets={project.assets}
					/>
				</div>

				<div className={cn('lg:col-span-5', reverse ? 'lg:order-1' : '')}>
					<ProjectCopy project={project} />
				</div>
			</div>
		</section>
	);
}
