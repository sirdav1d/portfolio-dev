/** @format */

import { CodeBlock } from '@/components/ui/code-block';

const WITHOUT_CACHE_SNIPPET = `async function getTodoWithoutCache() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar os dados em tempo real');
  }

  return response.json();
}`;

const WITH_CACHE_SNIPPET = `async function getTodoWithCache() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    next: {
      revalidate: 60,
      tags: ['todo'],
    },
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar os dados com cache');
  }

  return response.json();
}`;

export default function FethExamples() {
	return (
		<section className='space-y-6 rounded-xl border border-border bg-background/90 md:p-6 shadow-lg overflow-x-hidden p-3'>
			<header className='space-y-2'>
				<h2 className='text-2xl text-foreground'>Estratégias de Fetch</h2>
				<p className='text-sm text-muted-foreground'>
					Contraste entre uma chamada sem cache e uma versão otimizada para o
					Next.js.
				</p>
			</header>

			<div className='grid gap-4 md:grid-cols-2'>
				<article className='rounded-lg border border-border/60 bg-background/70 p-4 space-y-3 text-left'>
					<div className='space-y-1'>
						<h3 className='font-mono text-xs uppercase tracking-wide text-foreground'>
							Sem cache
						</h3>
					</div>
					<ul className='list-disc space-y-2 text-sm text-muted-foreground pl-4'>
						<li>Dados sempre frescos com cache: no-store.</li>
						<li>Maior latência e custo por chamada.</li>
						<li>Ideal para dados sensíveis ou tempo real.</li>
					</ul>
				</article>

				<article className='rounded-lg border border-border/60 bg-background/70 p-4 space-y-3 text-left'>
					<div className='space-y-1'>
						<h3 className='font-mono text-xs uppercase tracking-wide text-foreground'>
							Com cache e revalidação
						</h3>
					</div>
					<ul className='list-disc space-y-2 text-sm text-muted-foreground pl-4'>
						<li>Revalidação incremental controlada.</li>
						<li>Invalidação seletiva por tags.</li>
						<li>Melhor tempo de resposta percebido.</li>
					</ul>
				</article>
			</div>

			<div className='rounded-xl border border-border/60 bg-background/70 p-4'>
				<CodeBlock
					language='ts'
					filename='fetch.ts'
					tabs={[
						{
							name: 'Sem cache',
							code: WITHOUT_CACHE_SNIPPET,
							language: 'ts',
							highlightLines: [3],
						},
						{
							name: 'Com cache',
							code: WITH_CACHE_SNIPPET,
							language: 'ts',
							highlightLines: [4, 5],
						},
					]}
				/>
			</div>
		</section>
	);
}
