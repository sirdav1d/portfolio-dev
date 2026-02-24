/** @format */

import Link from 'next/link';
import type { Metadata } from 'next';
import ColorBends from '@/components/ColorBends';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
	title: 'Contato enviado',
	description: 'Mensagem enviada com sucesso pelo formulario de contato.',
};

const prismLikeColors = ['#2ad1ff', '#4f46e5', '#f59e0b', '#f43f5e'];

export default function ContatoSucessoPage() {
	return (
		<main className='relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden'>
			<div className='pointer-events-none absolute inset-0'>
				<ColorBends
					className='h-full w-full'
					colors={prismLikeColors}
					rotation={25}
					speed={0.2}
					scale={1.15}
					frequency={1}
					warpStrength={1}
					noise={0.01}
					transparent
				/>
				<div className='absolute inset-0 bg-background/25 backdrop-blur-[1px]' />
			</div>

			<div className='relative z-10 mx-auto w-full max-w-3xl px-5 py-16'>
				<section className='rounded-xl border border-border/60 bg-background/40 backdrop-blur-lg p-8 text-center space-y-4'>
					<h1 className='text-3xl md:text-4xl text-foreground text-pretty'>
						Mensagem enviada com sucesso
					</h1>
					<p className='text-muted-foreground text-balance'>
						Recebi seu contato e vou retornar o quanto antes.
					</p>
					<div className='pt-4'>
						<Button asChild>
							<Link href='/'>Voltar ao inicio</Link>
						</Button>
					</div>
				</section>
			</div>
		</main>
	);
}
