/** @format */

import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import { FloatingElements } from '@/components/floating-elements';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const layers = [
  {
    id: 'memo',
    title: 'Request Memoization',
    description: 'Dedupe de fetch no mesmo request.',
    dot: 'bg-sky-400',
    offset: 'translate-y-2 md:-translate-y-1',
  },
  {
    id: 'data',
    title: 'Data Cache',
    description: 'Persistência com revalidação e tags.',
    dot: 'bg-lime-400',
    offset: '-translate-y-1 md:translate-y-2',
  },
  {
    id: 'route',
    title: 'Full Route Cache',
    description: 'HTML pronto na borda para rotas estáveis.',
    dot: 'bg-amber-400',
    offset: 'translate-y-1',
  },
  {
    id: 'router',
    title: 'Router Cache',
    description: 'Navegação client-side mais rápida.',
    dot: 'bg-cyan-400',
    offset: '-translate-y-2 md:translate-y-1',
  },
  {
    id: 'components',
    title: 'use cache / Components',
    description: 'Cache granular por componente.',
    dot: 'bg-violet-400',
    offset: 'translate-y-3 md:-translate-y-2',
  },
];

export default function CacheIntelligence({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl',
        className,
      )}
    >
      <DottedGlowBackground
        className='pointer-events-none mask-radial-to-90% mask-radial-at-center'
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar='--color-zinc-500'
        glowColorLightVar='--color-zinc-600'
        colorDarkVar='--color-zinc-500'
        glowColorDarkVar='--color-cyan-800'
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className='relative z-10 w-full px-4 py-6'>
        <FloatingElements
          className='w-full max-w-none space-y-0'
          gridClassName='flex flex-wrap justify-center gap-6 md:gap-8 py-2'
          elementClassName='flex'
          animationConfig={{
            minDistance: 0,
            maxDistance: 36,
            duration: 5200,
            shouldRandomizeInitialPosition: true,
          }}
        >
          {layers.map((layer) => (
            <Tooltip key={layer.id}>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-full border border-border/60 bg-background/70 px-5 py-2',
                    layer.offset,
                  )}
                >
                  <span className={cn('size-2 rounded-full', layer.dot)} />
                  <p className='text-xs font-semibold text-foreground text-nowrap'>
                    {layer.title}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{layer.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </FloatingElements>
      </div>
    </div>
  );
}
