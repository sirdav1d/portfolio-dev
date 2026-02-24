/** @format */

'use server';

import { redirect } from 'next/navigation';
import { Resend } from 'resend';

type ContactField = 'name' | 'email' | 'subject' | 'message';

type ContactPayload = {
	name: string;
	email: string;
	subject: string;
	message: string;
	company: string;
};

export type ContactFormState = {
	status: 'idle' | 'error';
	message?: string;
	fieldErrors?: Partial<Record<ContactField, string>>;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getField(formData: FormData, key: string) {
	const value = formData.get(key);
	return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

function getValidationErrors(payload: ContactPayload) {
	const fieldErrors: Partial<Record<ContactField, string>> = {};

	if (payload.name.length < 2 || payload.name.length > 80) {
		fieldErrors.name = 'Informe um nome entre 2 e 80 caracteres.';
	}

	if (!emailRegex.test(payload.email)) {
		fieldErrors.email = 'Informe um e-mail valido.';
	}

	if (payload.subject.length < 3 || payload.subject.length > 120) {
		fieldErrors.subject = 'Informe um assunto entre 3 e 120 caracteres.';
	}

	if (payload.message.length > 5000) {
		fieldErrors.message = 'A mensagem deve ter até 5000 caracteres.';
	}

	return fieldErrors;
}

function getFriendlyErrorState(
	message = 'Nao foi possivel enviar sua mensagem. Tente novamente em instantes.',
): ContactFormState {
	return {
		status: 'error',
		message,
	};
}

export async function sendContactEmail(
	_previousState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	const payload: ContactPayload = {
		name: getField(formData, 'name'),
		email: getField(formData, 'email'),
		subject: getField(formData, 'subject'),
		message: getField(formData, 'message'),
		company: getField(formData, 'company'),
	};

	if (payload.company) {
		return getFriendlyErrorState();
	}

	const fieldErrors = getValidationErrors(payload);
	if (Object.keys(fieldErrors).length > 0) {
		return {
			status: 'error',
			message: 'Revise os campos destacados e tente novamente.',
			fieldErrors,
		};
	}

	const apiKey = process.env.RESEND_API_KEY;
	const destinationEmail = process.env.RESEND_ACCOUNT_EMAIL;

	if (!apiKey || !destinationEmail) {
		console.error('Resend configuration is missing required env vars.');
		return getFriendlyErrorState();
	}

	const resend = new Resend(apiKey);

	const safeName = escapeHtml(payload.name);
	const safeEmail = escapeHtml(payload.email);
	const safeSubject = escapeHtml(payload.subject);
	const safeMessage = escapeHtml(payload.message).replaceAll('\n', '<br />');

	try {
		const { error } = await resend.emails.send({
			from: 'Portfolio <onboarding@resend.dev>',
			to: [destinationEmail],
			replyTo: payload.email,
			subject: `[Contato Portfolio] ${payload.subject}`,
			html: `
				<div>
					<h2>Novo contato pelo portfolio</h2>
					<p><strong>Nome:</strong> ${safeName}</p>
					<p><strong>Email:</strong> ${safeEmail}</p>
					<p><strong>Assunto:</strong> ${safeSubject}</p>
					<p><strong>Mensagem:</strong></p>
					<p>${safeMessage}</p>
				</div>
			`,
			text: [
				'Novo contato pelo portfolio',
				`Nome: ${payload.name}`,
				`Email: ${payload.email}`,
				`Assunto: ${payload.subject}`,
				'Mensagem:',
				payload.message,
			].join('\n'),
		});

		if (error) {
			console.error('Resend send error:', {
				name: error.name,
				message: error.message,
				statusCode: error.statusCode,
			});
			return getFriendlyErrorState();
		}
	} catch (error) {
		console.error('Unexpected resend error:', error);
		return getFriendlyErrorState();
	}

	redirect('/contato/sucesso');
}
