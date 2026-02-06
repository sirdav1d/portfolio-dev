/** @format */

import { CodeBlock } from '@/components/ui/code-block';
import { Activity, Eye, LineChart } from 'lucide-react';

const LIGHTHOUSE_SNIPPET = `// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
      settings: { preset: 'desktop' },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
      },
    },
  },
};`;

const POSTHOG_SNIPPET = `import posthog from 'posthog-js';

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: 'https://app.posthog.com',
  autocapture: false,
  capture_pageview: false,
});

posthog.capture('cta_click', {
  location: 'hero',
  variant: 'primary',
});`;

const SENTRY_SNIPPET = `import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  profilesSampleRate: 0.1,
});

try {
  await fetch('/api/checkout');
} catch (error) {
  Sentry.captureException(error);
}`;

export default function SectionObserver() {
	return (
		<section
			id='observer'
			className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<Eye
					fill='none'
					stroke='currentColor'
					strokeWidth={0.2}
					className='absolute scale-90 -z-20 right-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Observabilidade & Métricas
					</h2>
					<p className='text-muted-foreground md:text-lg text-balance'>
						Medir, detectar e aprender: performance, comportamento e erros em
						produção com foco em impacto real.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-3'>
					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left'>
						<div className='flex items-center gap-2 text-sm text-muted-foreground'>
							<LineChart className='h-4 w-4' />
							Lighthouse
						</div>
						<h3 className='mt-2 text-lg text-foreground font-mono'>
							Performance
						</h3>
						<p className='mt-2 text-sm text-muted-foreground'>
							Budgets de LCP/CLS/INP e CI falhando em regressões.
						</p>
					</div>
					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left'>
						<div className='flex items-center gap-2 text-sm text-muted-foreground'>
							<Activity className='h-4 w-4' />
							PostHog
						</div>
						<h3 className='mt-2 text-lg text-foreground font-mono'>Produto</h3>
						<p className='mt-2 text-sm text-muted-foreground'>
							Eventos críticos e funis, evitando autocapture sem objetivo.
						</p>
					</div>
					<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left'>
						<div className='flex items-center gap-2 text-sm text-muted-foreground'>
							<Eye className='h-4 w-4' />
							Sentry
						</div>
						<h3 className='mt-2 text-lg text-foreground font-mono'>Erros</h3>
						<p className='mt-2 text-sm text-muted-foreground'>
							Sampling e tracing com alertas úteis e custo previsível.
						</p>
					</div>
				</div>

				<div className='rounded-xl border border-border/60 bg-background/70 p-4 text-left'>
					<CodeBlock
						language='ts'
						filename='observability.ts'
						tabs={[
							{
								name: 'Lighthouse CI',
								code: LIGHTHOUSE_SNIPPET,
								language: 'ts',
								highlightLines: [8, 9],
							},
							{
								name: 'PostHog',
								code: POSTHOG_SNIPPET,
								language: 'ts',
								highlightLines: [3, 8],
							},
							{
								name: 'Sentry',
								code: SENTRY_SNIPPET,
								language: 'ts',
								highlightLines: [4, 10],
							},
						]}
					/>
				</div>
			</div>
		</section>
	);
}
