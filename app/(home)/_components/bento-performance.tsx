/** @format */

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Images, LoaderPinwheel, Save, Zap } from 'lucide-react';
import CacheIntelligence from './cache-intelligence';
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
		title: 'Arquivos Estáticos Otimizados',
		description:
			'Imagens, fontes e recursos estáticos são entregues otimizados e compactados.',
		header: (
			<div className='mx-auto flex items-center justify-center h-full'>
				<PixxelImageAnimated />
			</div>
		),
		className: 'md:col-span-1',
		icon: <Images className='h-4 w-4 ' />,
	},
	{
		title: 'Cache Inteligente',
		description:
			'Camadas de cache bem definidas evitam refetch desnecessário e reduzem latência.',
		header: <CacheIntelligence />,
		className: 'md:col-span-2',
		icon: <Save className='h-4 w-4 ' />,
	},
];
