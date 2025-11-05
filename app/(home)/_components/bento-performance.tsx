/** @format */

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { Images, Layers2, LoaderPinwheel, Save, Zap } from 'lucide-react';
import LazySkeletons from './lazy-skeletons';
import PixxelImageAnimated from './pixxel-image-animated';
import PPR from './ppr';

export function BentoGridSecondDemo() {
	return (
		<BentoGrid className='max-w-4xl mx-auto md:auto-rows-[20rem] z-20 bg-background'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	);
}

const items = [
	{
		title: 'Lazy Loading',
		description:
			'Componentes mais pesados são carregados conforme o usuário navega, mantendo a aplicação ágil e leve.',
		header: <LazySkeletons />,
		className: 'md:col-span-2',
		icon: <LoaderPinwheel className='h-4 w-4 ' />,
	},
	{
		title: 'PPR (Partial Prerendering)',
		description:
			'A página começa a ser exibida enquanto o restante é preparado em paralelo, unindo o melhor do SSR e do SSG.',
		header: <PPR />,
		className: 'md:col-span-1',
		icon: <Zap className='h-4 w-4' />,
	},
	{
		title: 'Arquivos Estáticos Otimizadas',
		description:
			'Imagens, fontes e recursos estáticos são entregues otimizados w compactados',
		header: (
			<div className='mx-auto  flex items-center justify-center h-full '>
				<PixxelImageAnimated />
			</div>
		),
		className: 'md:col-span-1',
		icon: <Images className='h-4 w-4 ' />,
	},
	{
		title: 'Cache Inteligente',
		description:
			'Temos maneiras de armazenar em cache dados e recursos estrategicamente para reaproveitamento.',
		header: (
			<div className='h-full w-full mx-auto flex gap-5 lg:gap-20 items-center justify-center text-muted-foreground relative'>
				<DottedGlowBackground
					className='pointer-events-none mask-radial-to-90% mask-radial-at-center'
					opacity={1}
					gap={10}
					radius={1.6}
					colorLightVar='--color-neutral-500'
					glowColorLightVar='--color-neutral-600'
					colorDarkVar='--color-neutral-500'
					glowColorDarkVar='--color-sky-800'
					backgroundOpacity={0}
					speedMin={0.3}
					speedMax={1.6}
					speedScale={1}
				/>
				<div className=' relative group'>
					<Layers2
						size={30}
						fill='none'
						strokeWidth={1}
						className=' lg:scale-200 transition-all ease-in-out duration-200  hover:text-foreground '
					/>
					<p className='hidden group-hover:block absolute -bottom-10 text-nowrap -left-15 text-xs text-foreground'>
						Request Memoization Cache
					</p>
				</div>
				<div className=' relative group'>
					<Layers2
						size={30}
						fill='none'
						strokeWidth={1}
						className=' lg:scale-200 transition-all ease-in-out duration-200  hover:text-foreground '
					/>
					<p className='hidden group-hover:block absolute -bottom-10 text-nowrap -left-5 text-xs text-foreground '>
						Data Cache
					</p>
				</div>
				<div className=' relative group'>
					<Layers2
						size={30}
						fill='none'
						strokeWidth={1}
						className=' lg:scale-200 transition-all ease-in-out duration-200  hover:text-foreground '
					/>
					<p className='hidden group-hover:block absolute -bottom-10 text-nowrap -left-8 text-xs text-foreground'>
						Full Route Cache
					</p>
				</div>
				<div className=' relative group'>
					<Layers2
						size={30}
						fill='none'
						strokeWidth={1}
						className=' lg:scale-200 transition-all ease-in-out duration-200  hover:text-foreground '
					/>
					<p className='hidden group-hover:block absolute -bottom-10 text-nowrap -left-20 text-xs text-foreground'>
						Router Cache (Client-side Cache)
					</p>
				</div>
				<div className=' relative group'>
					<Layers2
						size={30}
						fill='none'
						strokeWidth={1}
						className=' lg:scale-200 transition-all ease-in-out duration-200  hover:text-foreground '
					/>
					<p className='hidden group-hover:block absolute -bottom-10 text-nowrap -left-20 text-xs text-foreground'>
						“use cache” / Cache Components
					</p>
				</div>
			</div>
		),
		className: 'md:col-span-2',
		icon: <Save className='h-4 w-4 ' />,
	},
];
