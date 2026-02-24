/** @format */

import type { Metadata } from 'next';
import { RainbowButton } from '@/components/ui/rainbow-button';
import ContactForm from './_components/contact-form';

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
						Vamos tirar sua ideia do papel e transformar em produto.
					</p>
				</header>

				<div className='grid gap-10'>
					<ContactForm />

					<div className='rounded-xl border border-border/60 bg-background/70 p-6 text-left flex justify-between max-md:flex-col'>
						<div className='space-y-2'>
							<h2 className='text-2xl text-foreground'>
								Falar diretamente comigo
							</h2>
							<p className='text-sm text-muted-foreground'>
								Resposta rápida para propostas, dúvidas e disponibilidade.
							</p>
						</div>
						<div className='space-y-2'>
							<RainbowButton
								asChild
								className='max-md:w-full max-md:mt-5'>
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
