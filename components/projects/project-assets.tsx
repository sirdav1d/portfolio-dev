/** @format */

'use client';

import { LayoutGroup, motion, useReducedMotion } from 'motion/react';
import { useMemo, useState } from 'react';
import type { ProjectAsset } from '@/data/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type ProjectAssetsProps = {
	projectTitle: string;
	assets: ProjectAsset[];
};

function AssetCard({
	projectTitle,
	asset,
	assetId,
	isActive,
	onClick,
	className,
}: {
	projectTitle: string;
	asset: ProjectAsset;
	assetId: string;
	isActive: boolean;
	onClick: () => void;
	className?: string;
}) {
	return (
		<motion.button
			type='button'
			layout
			layoutId={`${assetId}-card`}
			onClick={onClick}
			aria-label={`Destacar asset: ${asset.title}`}
			aria-pressed={isActive}
			className={cn(
				'w-full overflow-hidden rounded-xl border bg-background/60 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40',
				isActive
					? 'border-foreground/30'
					: 'border-border/60 hover:border-foreground/20',
				className,
			)}>
			<div className='relative aspect-video w-full overflow-hidden bg-linear-to-br from-zinc-950/70 to-zinc-900/20 rounded-xl'>
				{asset.kind === 'image' && asset.src ? (
					<Image
						src={asset.src}
						alt={asset.alt || `${projectTitle} - ${asset.title}`}
						fill
						className='object-contain rounded-xl px-2 md:px-4'
					/>
				) : null}

				{asset.kind === 'video' && asset.src ? (
					<video
						className='h-full w-full object-cover'
						autoPlay
						muted
						loop
						playsInline
						poster={asset.poster}>
						<source src={asset.src} />
					</video>
				) : null}

				{asset.kind === 'placeholder' || !asset.src ? (
					<div className='absolute inset-0 flex items-center justify-center'>
						<span className='rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.15em] text-muted-foreground'>
							Asset em preparo
						</span>
					</div>
				) : null}
			</div>
		</motion.button>
	);
}

export function ProjectAssets({ projectTitle, assets }: ProjectAssetsProps) {
	const prefersReducedMotion = useReducedMotion();
	const projectAssets = useMemo(() => assets.slice(0, 3), [assets]);
	const [activeIndex, setActiveIndex] = useState(0);

	if (projectAssets.length === 0) {
		return null;
	}

	const safeActiveIndex = Math.min(activeIndex, projectAssets.length - 1);
	const secondaryIndices = projectAssets
		.map((_, index) => index)
		.filter((index) => index !== safeActiveIndex);
	const orderedIndices = [safeActiveIndex, ...secondaryIndices];

	const transition = prefersReducedMotion
		? { duration: 0 }
		: { type: 'spring' as const, stiffness: 280, damping: 32, mass: 0.5 };

	return (
		<LayoutGroup id={`project-assets-${projectTitle}`}>
			<div className='grid gap-4 sm:grid-cols-2'>
				{orderedIndices.map((index, orderedIndex) => (
					<motion.div
						key={`${projectTitle}-asset-slot-${index}`}
						layout
						transition={transition}
						className={orderedIndex === 0 ? 'sm:col-span-2' : ''}>
						<AssetCard
							assetId={`${projectTitle}-asset-${index}`}
							projectTitle={projectTitle}
							asset={projectAssets[index]}
							isActive={index === safeActiveIndex}
							onClick={() => setActiveIndex(index)}
						/>
					</motion.div>
				))}
			</div>
		</LayoutGroup>
	);
}
