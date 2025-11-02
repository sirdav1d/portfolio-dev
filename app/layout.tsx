/** @format */

import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import Header from '@/components/header';

const inter = Inter({
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

const instrument = Instrument_Serif({
	variable: '--font-instrument',
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: { default: 'David Dev', template: 'David Dev | %s' },
	description: 'Portifolio tecnico com foco em produtos digitais escalaveis',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='pt-BR'
			suppressHydrationWarning>
			<body className={`${inter.variable} ${instrument.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					disableTransitionOnChange>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
