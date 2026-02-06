/** @format */

import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';

export const metadata: Metadata = {
	title: 'Contato',
	description:
		'Formulário de contato e chamada direta no WhatsApp para falar sobre projetos.',
};

const WHATSAPP_NUMBER = '5511950826317';

export default function ContatoPage() {
	return (
		<main className='min-h-[calc(100vh-5rem)] flex items-center justify-center'>
			<div className='mx-auto w-full max-w-7xl px-5 py-16 space-y-10'>
				<header className='text-center space-y-4'>
					<h1 className='text-4xl md:text-5xl text-foreground'>Contato</h1>
					<p className='text-muted-foreground text-balance md:text-lg'>
						Me conta sobre o projeto e vamos fazer isso acontecer
					</p>
				</header>

				<div className='grid gap-10'>
					<form className='rounded-xl border border-border/60 bg-background/70 p-6 space-y-8 text-left'>
						<div className='grid gap-6 sm:grid-cols-2'>
							<label className='space-y-3 text-sm text-muted-foreground'>
								<span className='text-xs uppercase tracking-widest'>Nome</span>
								<input
									type='text'
									name='name'
									placeholder='Seu nome'
									className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
								/>
							</label>
							<label className='space-y-3 text-sm text-muted-foreground'>
								<span className='text-xs uppercase tracking-widest'>Email</span>
								<input
									type='email'
									name='email'
									placeholder='voce@email.com'
									className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
								/>
							</label>
						</div>
						<div>
							<label className='space-y-3 text-sm text-muted-foreground mb-8'>
								<span className='text-xs uppercase tracking-widest'>
									Assunto
								</span>
								<input
									type='text'
									name='subject'
									placeholder='Novo produto, consultoria, redesign...'
									className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
								/>
							</label>
						</div>

						<label className='space-y-3 text-sm text-muted-foreground'>
							<span className='text-xs uppercase tracking-widest'>
								Mensagem
							</span>
							<textarea
								name='message'
								rows={6}
								placeholder='Descreva contexto, prazo e objetivos.'
								className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
							/>
						</label>

						<Button
							type='submit'
							className='w-full mt-5 text-xl'>
							Enviar
						</Button>
					</form>

					<div className='rounded-xl border border-border/60 bg-background/70 p-6 text-left flex justify-between'>
						<div className='space-y-2'>
							<h2 className='text-2xl text-foreground'>
								Falar diretamente comigo
							</h2>
							<p className='text-sm text-muted-foreground'>
								Resposta rápida para propostas, dúvidas e disponibilidade.
							</p>
						</div>
						<div className='space-y-2'>
							<RainbowButton asChild>
								<a
									href={`https://wa.me/${WHATSAPP_NUMBER}`}
									target='_blank'
									rel='noreferrer'>
									Chamar no WhatsApp
								</a>
							</RainbowButton>
							<p className='text-xs text-muted-foreground text-center'>
								+55 11 95082-6317
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
