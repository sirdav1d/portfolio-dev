/** @format */

import { CodeBlock } from '@/components/ui/code-block';
import { ShieldCheckIcon } from '@/components/ui/shield-check';

const E2E_SNIPPET = `import { test, expect } from '@playwright/test';

test('checkout crítico', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByLabel('Cartão').fill('4111111111111111');
  await page.getByRole('button', { name: 'Finalizar' }).click();

  await expect(page.getByText('Pedido confirmado')).toBeVisible();
});`;

export default function SectionTestQA() {
	return (
		<section
			id='test'
			className='min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center relative py-20'>
			<div className='mx-auto w-full max-w-7xl text-center px-5 sm:text-left gap-10 mt-10 md:mt-0 space-y-10 '>
				<ShieldCheckIcon
					size={384}
					aria-hidden='true'
					className='absolute scale-90 z-20 right-0 top-0 h-96 w-96 text-foreground/10'
				/>
				<div className='flex flex-col text-center max-w-4xl mx-auto gap-5'>
					<h2 className='text-3xl xl:text-7xl text-foreground md:text-5xl capitalize text-center'>
						Testes & Qualidade
					</h2>
					<p className='text-muted-foreground md:text-lg text-balance'>
						Testes protegem <span className='text-foreground'>confiança</span>,{' '}
						<span className='text-foreground'>estabilidade</span> e{' '}
						<span className='text-foreground'>ritmo de entrega</span>.
					</p>
				</div>

				<div className='rounded-xl border border-border/60 bg-background/70 p-5 text-left'>
					<div className='grid gap-5 md:grid-cols-3'>
						<div className='space-y-3'>
							<h3 className='text-lg text-foreground font-mono'>Princípios</h3>
							<ul className='list-disc space-y-2 text-sm text-muted-foreground pl-4'>
								<li>Foco no que quebra confiança.</li>
								<li>Teste rápido primeiro, profundo depois.</li>
								<li>Fluidez do usuário acima de métricas vaidosas.</li>
							</ul>
						</div>
						<div className='space-y-3'>
							<h3 className='text-lg text-foreground font-mono'>Priorização</h3>
							<ul className='list-disc space-y-2 text-sm text-muted-foreground pl-4'>
								<li>Checkout e pagamento (alto impacto).</li>
								<li>Login e sessão (alto risco).</li>
								<li>Fluxos críticos por etapa do funil.</li>
							</ul>
						</div>
						<div className='space-y-3'>
							<h3 className='text-lg text-foreground font-mono'>
								Quality Gates
							</h3>
							<ul className='list-disc space-y-2 text-sm text-muted-foreground pl-4'>
								<li>Lint + unit no PR.</li>
								<li>Integração no merge.</li>
								<li>E2E crítico no pré‑deploy.</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='rounded-xl border-border/60 bg-background/70 p-5'>
					<div className='relative'>
						<div className='relative place-items-center grid gap-6 sm:grid-cols-3 text-left'>
							<div className='space-y-2 text-center sm:text-left'>
								<span className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-mono text-foreground'>
									<span className='size-2 rounded-full bg-emerald-400' />
									Unit
								</span>
								<p className='text-sm text-muted-foreground'>
									Base de estabilidade: regra isolada e rápida.
								</p>
							</div>
							<div className='space-y-2 text-center sm:text-left'>
								<span className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-mono text-foreground'>
									<span className='size-2 rounded-full bg-sky-400' />
									Integração
								</span>
								<p className='text-sm text-muted-foreground'>
									Conexões confiáveis entre módulos e APIs.
								</p>
							</div>
							<div className='space-y-2 text-center sm:text-left'>
								<span className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-mono text-foreground'>
									<span className='size-2 rounded-full bg-amber-400' />
									E2E
								</span>
								<p className='text-sm text-muted-foreground'>
									Fluxo crítico completo sem regressões.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='rounded-xl border border-border/60 bg-background/70 p-4 text-left'>
					<h3 className='text-lg text-foreground font-mono mb-3'>
						Exemplo crítico
					</h3>
					<CodeBlock
						language='ts'
						filename='checkout.e2e.ts'
						code={E2E_SNIPPET}
						highlightLines={[3, 4, 5, 7]}
					/>
				</div>
			</div>
		</section>
	);
}
