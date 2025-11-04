/** @format */

import React from 'react';

const CONTEXT_SNIPPET = [
	'const AuthContext = createContext(null);',
	'',
	'export function AuthProvider({ children }) {',
	'  const [currentUser, setCurrentUser] = useState(null);',
	'',
	'  const login = useCallback((response) => {',
	'    storeCredentials(response.credentials);',
	'    setCurrentUser(response.user);',
	'  }, []);',
	'',
	'  const value = useMemo(() => ({',
	'    currentUser,',
	'    login,',
	'  }), [currentUser, login]);',
	'',
	'  return <AuthContext value={value}>{children}</AuthContext>;',
	'}',
	'',
	'export function useAuth() {',
	'  return useContext(AuthContext);',
	'}',
].join('\n');

const ZUSTAND_SNIPPET = [
	'type CounterState = { count: number; };',
	'type CounterActions = { increment: () => void; };',
	'type CounterStore = CounterState & CounterActions;',
	'',
	'export const createCounterStore = () => {',
	'  return createStore<CounterStore>()((set) => ({',
	'    count: 0,',
	'    increment: () => {',
	'      set((state) => ({ count: state.count + 1 }));',
	'    },',
	'  }));',
	'};',
	'',
	'type CounterStoreApi = ReturnType<typeof createCounterStore>;',
	'',
	'const CounterStoreContext = ',
	'createContext<CounterStoreApi | undefined>(undefined);',
	'',
	'export function CounterStoreProvider({ children }) {',
	'  const storeRef = useRef<CounterStoreApi>();',
	'  if (!storeRef.current) {',
	'    storeRef.current = createCounterStore();',
	'  }',
	'',
	'  return (',
	'    <CounterStoreContext.Provider value={storeRef.current}>',
	'      {children}',
	'    </CounterStoreContext.Provider>',
	'  );',
	'}',
	'',
	'export function useCounter(selector) {',
	'  const store = useContext(CounterStoreContext);',
	'  if (!store){',
	"throw new Error('useCounter deve estar dentro do Provider');",
	'} ',
	'  return useStoreWithEqualityFn(store, selector, shallow);',
	'}',
].join('\n');

export default function ContextZustandExamples() {
	return (
		<section className='space-y-6 rounded-xl border border-border bg-background/90 md:p-6 p-3 shadow-lg'>
			<header className='space-y-2'>
				<h2 className='text-4xl  text-foreground'>Context API vs Zustand</h2>
				<p className=' text-balance text-muted-foreground'>
					Comparação rápida entre a abordagem declarativa do React Context e o
					gerenciador enxuto do Zustand para stores globais.
				</p>
			</header>

			<div className='grid md:grid-cols-2 gap-10 items-start'>
				<article className='space-y-4 text-left flex flex-col justify-between h-full'>
					<div className='space-y-2 w-fit'>
						<h3 className='font-mono text-sm uppercase tracking-wide text-foreground'>
							Context API
						</h3>
						<p className='text-sm text-muted-foreground'>
							Recomenda-se{' '}
							<code className='rounded bg-muted/60 px-1 py-0.5 font-mono text-xs text-foreground'>
								useMemo
							</code>{' '}
							e{' '}
							<code className='rounded bg-muted/60 px-1 py-0.5 font-mono text-xs text-foreground'>
								useCallback
							</code>{' '}
							para estabilizar valores contextuais e evitar renders. Com o React
							Compiler esses hooks passam a ser aplicados automáticamente
						</p>
					</div>
					<pre className='rounded-lg bg-muted/40 md:p-4 p-2   text-[9px] md:text-xs text-muted-foreground md:h-[596px]'>
						<code>{CONTEXT_SNIPPET}</code>
					</pre>
				</article>

				<article className='space-y-4 text-left'>
					<div className='space-y-2'>
						<h3 className='font-mono text-sm uppercase tracking-wide text-foreground'>
							Zustand
						</h3>
						<p className='text-sm text-muted-foreground'>
							Combinamos{' '}
							<code className='rounded bg-muted/60 px-1 py-0.5 font-mono text-xs text-foreground'>
								createStore
							</code>{' '}
							com contextos e{' '}
							<code className='rounded bg-muted/60 px-1 py-0.5 font-mono text-xs text-foreground'>
								useStoreWithEqualityFn
							</code>{' '}
							mais{' '}
							<code className='rounded bg-muted/60 px-1 py-0.5 font-mono text-xs text-foreground'>
								shallow
							</code>{' '}
							para selecionar fatias do estado com rerenders mínimos.
						</p>
					</div>
					<pre className='rounded-lg bg-muted/40 md:p-4 p-2 text-[9px] md:text-xs text-muted-foreground md:h-[596px]'>
						<code className=''>{ZUSTAND_SNIPPET}</code>
					</pre>
				</article>
			</div>

			<footer className='rounded-lg border border-border/70 bg-muted/10 p-4  text-muted-foreground  text-left'>
				<ul className='space-y-2'>
					<li>
						<span className='text-foreground'>Context:</span> ideal para
						configuração leve ou quando o custo de re-render não é relevante.
					</li>

					<li>
						<span className='text-foreground'>Zustand:</span> entrega
						modularização, middlewares e selectors memorizados com esforço
						mínimo.
					</li>
				</ul>
			</footer>
		</section>
	);
}
