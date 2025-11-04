/** @format */

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SectionTestQA() {
	return (
		<section
			id='test'
			className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<Shield
					fill='none'
					stroke='currentColor'
					strokeWidth={0.2}
					className='absolute scale-90 -z-20 right-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Testes & Qualidade
					</h2>
					<p className='text-muted-foreground md:text-lg text-balance'>
						Testes existem para proteger o que importa —{' '}
						<span className='text-foreground'>
							confiança, estabilidade e ritmo de entrega.
						</span>
					</p>
				</div>
				<div className='grid lg:grid-cols-2 gap-5'>
					<div className='col-span-2 flex'>
						<p className='text-muted-foreground  md:text-xl italic w-1/2'>
							&quot;Uso <span className='text-foreground'>Jest</span> para
							validações rápidas e{' '}
							<span className='text-foreground'>
								Faker para gerar dados realistas
							</span>
							. Não aplico TDD formalmente, mas sigo a lógica de{' '}
							<span className='text-foreground'>planejar o comportamento</span>{' '}
							antes de codar.&quot;
						</p>
					</div>
					<div className='col-span-2 flex justify-end text-right'>
						<p className='text-muted-foreground md:text-xl italic w-1/2 text-balance'>
							&quot;Entendo que em uma pipeline ideal, cada PR executaria testes
							que{' '}
							<span className='text-foreground'>
								confirmam que o sistema continua estável
							</span>
							. Defino o que deve ser testado pelo{' '}
							<span className='text-foreground'>
								impacto no negócio e na experiência do usuário,
							</span>{' '}
							o que quebra confiança é o que precisa de proteção. &quot;
						</p>
					</div>
				</div>
				<div className='grid md:grid-cols-3 gap-5'>
					<Card>
						<CardHeader>
							<CardTitle className='font-normal font-sans tracking-wider'>
								Testes Unitários
							</CardTitle>
							<CardDescription>Base de estabilidade</CardDescription>
						</CardHeader>
						<CardContent className='text-balance text-muted-foreground'>
							Garantem que cada função e regra de negócio se comportem como
							esperado. São rápidos, previsíveis e formam a base da qualidade
							técnica.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className='font-normal font-sans tracking-wider'>
								Testes de Integração
							</CardTitle>
							<CardDescription>Conexões confiáveis</CardDescription>
						</CardHeader>
						<CardContent className='text-balance text-muted-foreground'>
							Validam como módulos, hooks e APIs se comunicam. Evito
							dependências externas usando dados gerados com Faker, simulando
							cenários reais.
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle className='font-normal font-sans tracking-wider'>
								Testes End-to-End
							</CardTitle>
							<CardDescription>Experiência de ponta a ponta</CardDescription>
						</CardHeader>
						<CardContent className='text-balance text-muted-foreground'>
							Garantem que o sistema funcione como o usuário espera. O foco é o
							fluxo crítico e a jornada do usuário
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
