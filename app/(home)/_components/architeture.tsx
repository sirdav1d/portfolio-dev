/** @format */

'use client';

import {
	expandAllFeature,
	hotkeysCoreFeature,
	selectionFeature,
	syncDataLoaderFeature,
} from '@headless-tree/core';
import { useTree } from '@headless-tree/react';
import {
	FolderIcon,
	FolderOpenIcon,
	ListCollapseIcon,
	ListTreeIcon,
} from 'lucide-react';

import { Tree, TreeItem, TreeItemLabel } from '@/components/tree';
import { Button } from '@/components/ui/button';

type Tone =
	| 'routes'
	| 'ui'
	| 'infra'
	| 'data'
	| 'quality'
	| 'public'
	| 'docs'
	| 'meta';

const TONE_CLASSES: Record<Tone, string> = {
	routes: 'text-sky-400',
	ui: 'text-amber-400',
	infra: 'text-violet-400',
	data: 'text-lime-400',
	quality: 'text-rose-400',
	public: 'text-fuchsia-400',
	docs: 'text-emerald-400',
	meta: 'text-muted-foreground',
};

interface Item {
	name: string;
	children?: string[];
	tone?: Tone;
}

// Estrutura de pastas simulando um projeto real,
// com separação entre rotas, UI global, camada de dados,
// testes, assets públicos e documentação viva em IA/.
const items: Record<string, Item> = {
	'aurora-root': {
		name: 'aurora-dashboard/',
		children: [
			'app-dir',
			'components-dir',
			'hooks-dir',
			'lib-dir',
			'providers-dir',
			'tests-dir',
			'public-dir',
			'ia-dir',
			'proxy',
			'readme',
			'git',
			'actions',
		],
	},

	proxy: { name: 'proxy.ts' },
	readme: { name: 'README.md', tone: 'docs' },
	git: { name: '.gitignore', tone: 'meta' },

	actions: {
		name: 'actions',
		children: ['action-session', 'action-audit-log'],
		tone: 'data',
	},
	'action-session': { name: 'session.ts' },
	'action-audit-log': { name: 'audit-log.ts' },

	// Rotas (App Router)
	'app-dir': {
		name: 'app/',
		children: ['app-layout', 'app-globals', 'public-group', 'private-group'],
		tone: 'routes',
	},
	'app-layout': { name: 'layout.tsx' },
	'app-globals': { name: 'globals.css' },

	// Superfície pública
	'public-group': {
		name: '(public)/',
		children: [
			'public-layout',
			'home-group',
			'signin-feature',
			'signup-feature',
		],
	},
	'public-layout': { name: 'layout.tsx' },

	// Home (landing / portfólio)
	'home-group': {
		name: '(home)/',
		children: [
			'home-layout',
			'home-components',
			'home-actions',
			'home-constants',
			'home-page',
		],
	},
	'home-layout': { name: 'layout.tsx' },
	'home-components': {
		name: '_components/',
		children: ['home-hero', 'home-metrics', 'home-cta'],
	},
	'home-hero': { name: 'hero.tsx' },
	'home-metrics': { name: 'metrics.tsx' },
	'home-cta': { name: 'call-to-action.tsx' },

	'home-actions': { name: '_actions/', children: ['home-newsletter-action'] },
	'home-newsletter-action': { name: 'subscribe-newsletter.ts' },
	'home-constants': { name: '_constants/', children: ['home-copy'] },
	'home-copy': { name: 'copy.ts' },
	'home-page': { name: 'page.tsx' },

	// Sign in
	'signin-feature': {
		name: 'signin/',
		children: [
			'signin-components',
			'signin-actions',
			'signin-validation',
			'signin-page',
		],
	},
	'signin-components': {
		name: '_components/',
		children: ['signin-form', 'signin-social'],
	},
	'signin-form': { name: 'form.tsx' },
	'signin-social': { name: 'social-buttons.tsx' },
	'signin-actions': { name: '_actions/', children: ['signin-auth-action'] },
	'signin-auth-action': { name: 'authenticate-user.ts' },
	'signin-validation': { name: '_constants/', children: ['signin-schema'] },
	'signin-schema': { name: 'schema.ts' },
	'signin-page': { name: 'page.tsx' },

	// Sign up
	'signup-feature': {
		name: 'signup/',
		children: [
			'signup-components',
			'signup-actions',
			'signup-validation',
			'signup-page',
		],
	},
	'signup-components': {
		name: '_components/',
		children: ['signup-form', 'signup-progress'],
	},
	'signup-form': { name: 'form.tsx' },
	'signup-progress': { name: 'progress-step.tsx' },
	'signup-actions': { name: '_actions/', children: ['signup-create-action'] },
	'signup-create-action': { name: 'create-account.ts' },
	'signup-validation': { name: '_constants/', children: ['signup-schema'] },
	'signup-schema': { name: 'schema.ts' },
	'signup-page': { name: 'page.tsx' },

	// Superfície privada (área logada / dashboard)
	'private-group': {
		name: '(private)/',
		children: [
			'private-layout',
			'dashboard-route',
			'settings-route',
			'profile-route',
		],
	},
	'private-layout': { name: 'layout.tsx' },

	'dashboard-route': {
		name: 'dashboard/',
		children: [
			'dashboard-layout',
			'dashboard-components',
			'dashboard-actions',
			'dashboard-page',
			'dashboard-loading',
		],
	},
	'dashboard-layout': { name: 'layout.tsx' },
	'dashboard-components': {
		name: '_components/',
		children: ['dashboard-shell', 'dashboard-widget', 'dashboard-sidebar'],
	},
	'dashboard-shell': { name: 'shell.tsx' },
	'dashboard-widget': { name: 'kpi-widget.tsx' },
	'dashboard-sidebar': { name: 'sidebar.tsx' },
	'dashboard-actions': {
		name: '_actions/',
		children: ['dashboard-fetch-kpis', 'dashboard-sync-widget'],
	},
	'dashboard-fetch-kpis': { name: 'fetch-kpis.ts' },
	'dashboard-sync-widget': { name: 'sync-widget.ts' },
	'dashboard-page': { name: 'page.tsx' },
	'dashboard-loading': { name: 'loading.tsx' },

	'settings-route': {
		name: 'settings/',
		children: ['settings-components', 'settings-actions', 'settings-page'],
	},
	'settings-components': {
		name: '_components/',
		children: ['settings-preferences', 'settings-security'],
	},
	'settings-preferences': { name: 'preferences-form.tsx' },
	'settings-security': { name: 'security-form.tsx' },
	'settings-actions': {
		name: '_actions/',
		children: ['settings-update-profile', 'settings-update-security'],
	},
	'settings-update-profile': { name: 'update-profile.ts' },
	'settings-update-security': { name: 'update-security.ts' },
	'settings-page': { name: 'page.tsx' },

	'profile-route': {
		name: 'profile/',
		children: ['profile-components', 'profile-actions', 'profile-page'],
	},
	'profile-components': {
		name: '_components/',
		children: ['profile-avatar', 'profile-details'],
	},
	'profile-avatar': { name: 'avatar-upload.tsx' },
	'profile-details': { name: 'details-card.tsx' },
	'profile-actions': {
		name: '_actions/',
		children: ['profile-save', 'profile-revalidate'],
	},
	'profile-save': { name: 'save-profile.ts' },
	'profile-revalidate': { name: 'revalidate-session.ts' },
	'profile-page': { name: 'page.tsx' },

	// Componentes globais / design system
	'components-dir': {
		name: 'components/',
		children: ['components-ui', 'components-feedback'],
		tone: 'ui',
	},
	'components-ui': {
		name: 'ui/',
		children: ['ui-button', 'ui-input', 'ui-card', 'ui-dialog'],
	},
	'ui-button': { name: 'button.tsx' },
	'ui-input': { name: 'input.tsx' },
	'ui-card': { name: 'card.tsx' },
	'ui-dialog': { name: 'dialog.tsx' },

	'components-feedback': {
		name: 'feedback/',
		children: ['feedback-toast', 'feedback-empty'],
	},
	'feedback-toast': { name: 'toast.tsx' },
	'feedback-empty': { name: 'empty-state.tsx' },

	// Hooks reutilizáveis
	'hooks-dir': {
		name: 'hooks/',
		children: [
			'hook-use-auth',
			'hook-use-feature-flags',
			'hook-use-breadcrumbs',
		],
		tone: 'infra',
	},
	'hook-use-auth': { name: 'use-auth.ts' },
	'hook-use-feature-flags': { name: 'use-feature-flags.ts' },
	'hook-use-breadcrumbs': { name: 'use-breadcrumbs.ts' },

	// Camada de dados e integrações
	'lib-dir': {
		name: 'lib/',
		children: ['lib-auth', 'lib-utils', 'lib-rest-client', 'lib-query-client'],
		tone: 'infra',
	},
	'lib-auth': { name: 'auth/', children: ['lib-auth-adapter'] },
	'lib-auth-adapter': { name: 'adapter.ts' },

	'lib-utils': {
		name: 'utils/',
		children: ['lib-format-date', 'lib-logger'],
	},
	'lib-format-date': { name: 'format-date.ts' },
	'lib-logger': { name: 'logger.ts' },

	'lib-rest-client': { name: 'rest-client.ts' },
	'lib-query-client': { name: 'query-client.ts' },

	// Providers globais
	'providers-dir': {
		name: 'providers/',
		children: ['provider-auth', 'provider-query', 'provider-theme'],
		tone: 'infra',
	},
	'provider-auth': { name: 'auth-provider.tsx' },
	'provider-query': { name: 'query-provider.tsx' },
	'provider-theme': { name: 'theme-provider.tsx' },

	// Testes e qualidade
	'tests-dir': {
		name: 'tests/',
		children: ['test-dashboard', 'test-auth-smoke'],
		tone: 'quality',
	},
	'test-dashboard': { name: 'dashboard.feature.test.ts' },
	'test-auth-smoke': { name: 'auth.smoke.test.ts' },

	// Assets públicos
	'public-dir': {
		name: 'public/',
		children: ['public-favicon', 'public-robots', 'public-og'],
		tone: 'public',
	},
	'public-favicon': { name: 'favicon.ico' },
	'public-robots': { name: 'robots.txt' },
	'public-og': { name: 'og-image.png' },

	// Documentação viva (PRDs, contexto de arquitetura, etc.)
	'ia-dir': {
		name: 'IA/',
		children: ['ia-arquitetura'],
		tone: 'docs',
	},
	'ia-arquitetura': { name: 'Arquitetura_Frontend_Contexto.md' },
};

const parentById = Object.entries(items).reduce(
	(acc, [parentId, item]) => {
		item.children?.forEach((childId) => {
			acc[childId] = parentId;
		});
		return acc;
	},
	{} as Record<string, string>,
);

const getTone = (itemId: string): Tone | undefined => {
	let currentId: string | undefined = itemId;

	while (currentId) {
		const tone = items[currentId]?.tone;
		if (tone) {
			return tone;
		}
		currentId = parentById[currentId];
	}

	return undefined;
};

const getToneClass = (itemId: string) => {
	const tone = getTone(itemId);
	return tone ? TONE_CLASSES[tone] : '';
};

const indent = 20;

export default function ArchitectureTree() {
	const tree = useTree<Item>({
		initialState: {
			// Deixo a raiz e as principais camadas expandidas por padrão
			expandedItems: [],
			selectedItems: ['dashboard-page'],
		},
		indent,
		rootItemId: 'aurora-root',
		getItemName: (item) => item.getItemData()?.name ?? '',
		isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
		dataLoader: {
			getItem: (itemId) => items[itemId],
			getChildren: (itemId) => items[itemId]?.children ?? [],
		},
		features: [
			syncDataLoaderFeature,
			selectionFeature,
			hotkeysCoreFeature,
			expandAllFeature,
		],
	});

	return (
		<div className='flex h-full flex-col gap-2'>
			<div className='flex items-center gap-2'>
				<Button
					size='sm'
					variant='outline'
					onClick={() => tree.expandAll()}
					aria-label='Expandir toda a árvore de pastas'
					title='Expandir toda a árvore'>
					<ListTreeIcon
						className='-ms-1 mr-2 opacity-60'
						size={16}
						aria-hidden='true'
					/>
					Expandir tudo
				</Button>

				<Button
					size='sm'
					variant='outline'
					onClick={tree.collapseAll}
					aria-label='Recolher toda a árvore de pastas'
					title='Recolher toda a árvore'>
					<ListCollapseIcon
						className='-ms-1 mr-2 opacity-60'
						size={16}
						aria-hidden='true'
					/>
					Recolher tudo
				</Button>
			</div>

			<div className='min-h-0 flex-1'>
				<Tree
					indent={indent}
					tree={tree}>
					{tree.getItems().map((item) => {
						const toneClass = getToneClass(item.getId());

						return (
							<TreeItem
								key={item.getId()}
								item={item}>
								<TreeItemLabel className={toneClass}>
									<span className='flex items-center gap-2'>
										{item.isFolder() &&
											(item.isExpanded() ? (
												<FolderOpenIcon
													className='pointer-events-none size-4 text-muted-foreground'
													aria-hidden='true'
												/>
											) : (
												<FolderIcon
													className='pointer-events-none size-4 text-muted-foreground'
													aria-hidden='true'
												/>
											))}
										{item.getItemName()}
										{item.isFolder() && (
											<span className='-ms-1 text-muted-foreground'>
												({item.getChildren().length})
											</span>
										)}
									</span>
								</TreeItemLabel>
							</TreeItem>
						);
					})}
				</Tree>
			</div>
		</div>
	);
}
