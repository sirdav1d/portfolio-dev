/** @format */

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Images, LoaderPinwheel, Save, Zap } from 'lucide-react';
import { AvatarCirclesGroup } from './avatar-group';
import LazySkeletons from './lazy-skeletons';
import PPR from './ppr';
import CacheIntelligence from './cache-intelligence';

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
			<div className='mx-auto flex items-center justify-center h-full scale-200'>
				<AvatarCirclesGroup />
			</div>
		),
		className: 'md:col-span-1',
		icon: <Images className='h-4 w-4 ' />,
	},
	{
		title: 'Cache Inteligente',
		description:
			'Dados e recursos são armazenados estrategicamente para reaproveitamento.',
		header: <CacheIntelligence />,
		className: 'md:col-span-2',
		icon: <Save className='h-4 w-4 ' />,
	},
];
