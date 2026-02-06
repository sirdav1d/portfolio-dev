/** @format */

import { CodeBlock } from '@/components/ui/code-block';

const CONTEXT_SNIPPET = `const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const value = useMemo(() => ({
    currentUser,
    login,
  }), [currentUser, login]);

  return <AuthContext value={value}>{children}</AuthContext>;
}

export function useAuth() {
  return useContext(AuthContext);
}`;

const ZUSTAND_SNIPPET = `type CounterState = { count: number; };
type CounterActions = { increment: () => void; };
type CounterStore = CounterState & CounterActions;

export const createCounterStore = () => {
  return createStore<CounterStore>()((set) => ({
    count: 0,
    increment: () => {
      set((state) => ({ count: state.count + 1 }));
    },
  }));
};

type CounterStoreApi = ReturnType<typeof createCounterStore>;

const CounterStoreContext =
  createContext<CounterStoreApi | undefined>(undefined);

export function CounterStoreProvider({ children }) {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
}

export function useCounter(selector) {
  const store = useContext(CounterStoreContext);
  if (!store){
    throw new Error('useCounter deve estar dentro do Provider');
  }
  return useStoreWithEqualityFn(store, selector, shallow);
}`;

export default function ContextZustandExamples() {
	return (
		<section className='space-y-6 rounded-xl  border-border bg-background/90 md:p-6 p-3 shadow-lg'>
			<header className='space-y-2'>
				<h2 className='text-2xl text-center text-foreground'>
					Context API vs Zustand
				</h2>
			</header>

			<div className='grid gap-4 md:grid-cols-2'>
				<article className='rounded-lg border border-border/60 bg-background/70 p-4 space-y-3 text-left'>
					<div className='space-y-1'>
						<h3 className='font-mono text-xs uppercase tracking-wide text-foreground'>
							Context API
						</h3>
					</div>
					<ul className='list-disc space-y-2 text-sm text-muted-foreground pl-4'>
						<li>Configuração leve e rápida.</li>
						<li>Bom para temas, auth simples, toggles.</li>
						<li>Evite em árvores muito profundas.</li>
						<li>
							Custo mínimo e setup rápido, mas re-render fácil de espalhar.
						</li>
					</ul>
				</article>

				<article className='rounded-lg border border-border/60 bg-background/70 p-4 space-y-3 text-left'>
					<div className='space-y-1'>
						<h3 className='font-mono text-xs uppercase tracking-wide text-foreground'>
							Zustand
						</h3>
					</div>
					<ul className='list-disc space-y-2 text-sm text-muted-foreground pl-4'>
						<li>Selectors e updates controlados.</li>
						<li>Modulariza store por domínio.</li>
						<li>Escala melhor com time e features.</li>
						<li>Mais controle e performance em troca de estrutura extra.</li>
					</ul>
				</article>
			</div>

			<div className='rounded-xl border border-border/60 bg-background/70 p-4'>
				<CodeBlock
					language='ts'
					filename='store.ts'
					tabs={[
						{
							name: 'Context',
							code: CONTEXT_SNIPPET,
							language: 'ts',
							highlightLines: [7, 12, 13],
						},
						{
							name: 'Zustand',
							code: ZUSTAND_SNIPPET,
							language: 'ts',
							highlightLines: [6, 24, 25],
						},
					]}
				/>
			</div>
		</section>
	);
}
