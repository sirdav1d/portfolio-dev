/** @format */

'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { sendContactEmail, type ContactFormState } from '../actions';

const initialState: ContactFormState = {
	status: 'idle',
};

type FieldErrorProps = {
	id: string;
	message?: string;
};

function FieldError({ id, message }: FieldErrorProps) {
	if (!message) {
		return null;
	}

	return (
		<p
			id={id}
			className='text-xs text-destructive'
			role='alert'>
			{message}
		</p>
	);
}

export default function ContactForm() {
	const [state, formAction, isPending] = useActionState(
		sendContactEmail,
		initialState,
	);

	return (
		<form
			action={formAction}
			noValidate
			className='rounded-xl border border-border/60 bg-background/70 p-6 space-y-8 text-left'>
			<input
				type='text'
				name='company'
				autoComplete='off'
				tabIndex={-1}
				aria-hidden='true'
				className='sr-only'
			/>

			<div className='grid gap-6 sm:grid-cols-2'>
				<label className='space-y-3 text-sm text-muted-foreground'>
					<span className='text-xs uppercase tracking-widest'>Nome</span>
					<input
						type='text'
						name='name'
						placeholder='Seu nome'
						disabled={isPending}
						aria-invalid={Boolean(state.fieldErrors?.name)}
						aria-describedby={
							state.fieldErrors?.name ? 'name-error' : undefined
						}
						className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
					/>
					<FieldError
						id='name-error'
						message={state.fieldErrors?.name}
					/>
				</label>

				<label className='space-y-3 text-sm text-muted-foreground'>
					<span className='text-xs uppercase tracking-widest'>Email</span>
					<input
						type='email'
						name='email'
						placeholder='voce@email.com'
						disabled={isPending}
						aria-invalid={Boolean(state.fieldErrors?.email)}
						aria-describedby={
							state.fieldErrors?.email ? 'email-error' : undefined
						}
						className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
					/>
					<FieldError
						id='email-error'
						message={state.fieldErrors?.email}
					/>
				</label>
			</div>

			<div>
				<label className='space-y-3 text-sm text-muted-foreground mb-8 block'>
					<span className='text-xs uppercase tracking-widest'>Assunto</span>
					<input
						type='text'
						name='subject'
						placeholder='Novo produto, consultoria, redesign...'
						disabled={isPending}
						aria-invalid={Boolean(state.fieldErrors?.subject)}
						aria-describedby={
							state.fieldErrors?.subject ? 'subject-error' : undefined
						}
						className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
					/>
					<FieldError
						id='subject-error'
						message={state.fieldErrors?.subject}
					/>
				</label>
			</div>

			<label className='space-y-3 text-sm text-muted-foreground'>
				<span className='text-xs uppercase tracking-widest'>Mensagem</span>
				<textarea
					name='message'
					rows={6}
					placeholder='Descreva contexto, prazo e objetivos.'
					disabled={isPending}
					aria-invalid={Boolean(state.fieldErrors?.message)}
					aria-describedby={
						state.fieldErrors?.message ? 'message-error' : undefined
					}
					className='w-full rounded-md border border-border/60 bg-background px-3 py-2 text-foreground outline-none focus:border-foreground/40'
				/>
				<FieldError
					id='message-error'
					message={state.fieldErrors?.message}
				/>
			</label>

			{state.status === 'error' && state.message ? (
				<p
					className='text-sm text-destructive'
					role='alert'>
					{state.message}
				</p>
			) : null}

			<Button
				type='submit'
				disabled={isPending}
				className='w-full mt-5 text-xl'>
				{isPending ? 'Enviando...' : 'Enviar'}
			</Button>
		</form>
	);
}
