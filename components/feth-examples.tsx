/** @format */

import React from 'react';

const WITHOUT_CACHE_SNIPPET = [
	'async function getTodoWithoutCache() {',
	'  const response = ',
	"await fetch('https://jsonplaceholder.typicode.com/todos/1', {",
	"    cache: 'no-store',",
	'  });',
	'',
	'  if (!response.ok) {',
	"    throw new Error('Falha ao buscar os dados em tempo real');",
	'  }',
	'',
	'  return response.json();',
	'}',
].join('\n');

const WITH_CACHE_SNIPPET = [
	'async function getTodoWithCache() {',
	'  const response = ',
	"await fetch('https://jsonplaceholder.typicode.com/todos/1', {",
	'    next: {',
	'      revalidate: 60,',
	"      tags: ['todo'],",
	'    },',
	'    headers: {',
	"      Accept: 'application/json',",
	'    },',
	'  });',
	'',
	'  if (!response.ok) {',
	"    throw new Error('Falha ao buscar os dados com cache');",
	'  }',
	'',
	'  return response.json();',
	'}',
].join('\n');

export default function FethExamples() {
	return (
		<section className='space-y-6 rounded-xl border border-border bg-background/90 md:p-6 shadow-lg overflow-x-hidden p-3'>
			<header className='space-y-2'>
				<h2 className='text-4xl text-foreground'>Estratégias de Fetch</h2>
				<p className='text-sm text-muted-foreground'>
					Contraste entre uma chamada sem cache e uma versão otimizada para o
					Next.js.
				</p>
			</header>

			<div className='grid lg:grid-cols-2 gap-10'>
				<article className='space-y-4 h-full  flex flex-col justify-between items-start text-left'>
					<div className='space-y-2'>
						<h3 className='font-mono text-sm uppercase tracking-wide text-foreground'>
							Sem Cache
						</h3>
						<p className='text-sm text-muted-foreground'>
							A requisição é marcada com{' '}
							<code className='rounded bg-muted/60 px-1 py-0.5 font-mono text-xs'>
								cache: &apos;no-store&apos;
							</code>{' '}
							para garantir dados sempre atualizados, ignorando qualquer camada
							intermediária.
						</p>
					</div>
					<pre className='overflow-x-auto rounded-lg bg-muted/40 p-2 md:p-4 md:text-xs text-muted-foreground md:h-80 text-[9px] w-full'>
						<code>{WITHOUT_CACHE_SNIPPET}</code>
					</pre>
				</article>

				<article className='space-y-4 text-left'>
					<div className='space-y-2'>
						<h3 className='font-mono text-sm uppercase tracking-wide text-foreground'>
							Com Cache e Revalidação
						</h3>
						<p className='text-sm text-muted-foreground'>
							<code className='rounded bg-muted/60 px-1 py-0.5 font-mono text-xs'>
								next.revalidate
							</code>{' '}
							e tags permitem revalidação incremental e invalidação seletiva, em
							linha com as práticas recomendadas para apps Server Components.
						</p>
					</div>
					<pre className='overflow-x-auto rounded-lg bg-muted/40 p-2 md:p-4 md:text-xs text-muted-foreground md:h-80 text-[9px]'>
						<code>{WITH_CACHE_SNIPPET}</code>
					</pre>
				</article>
			</div>
		</section>
	);
}
