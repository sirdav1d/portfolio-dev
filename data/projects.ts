/** @format */

export type ProjectAssetKind = 'placeholder' | 'image' | 'video';

export type ProjectAsset = {
	kind: ProjectAssetKind;
	title: string;
	description: string;
	src?: string;
	alt?: string;
	poster?: string;
};

export type ProjectLink = {
	label: string;
	href?: string;
	note?: string;
};

export type Project = {
	slug: string;
	title: string;
	tagline: string;
	context: string;
	role: string;
	goals: string[];
	work: string[];
	impact: string[];
	stack: string[];
	links: ProjectLink[];
	assets: ProjectAsset[];
};

export const projects: Project[] = [
	{
		slug: 'jd-analytics',
		title: 'JD Analytics',
		tagline:
			'Dashboard B2B que consolida dados de marketing e operacao em um painel unico para leitura rapida e decisao.',
		context:
			'Plataforma de analytics para operacao B2B, consolidando multiplas fontes para visao executiva e acompanhamento continuo.',
		role: 'Atuei sozinho end to end no desenvolvimento do produto, incluindo frontend e integracoes.',
		goals: [
			'Centralizar KPIs em um unico lugar.',
			'Permitir analises por periodo e comparativos.',
			'Diminuir trabalho manual de coleta e conferencia de dados.',
		],
		work: [
			'Integrei fontes como Google Analytics, Google Ads e ERP Linx para compor visao unificada.',
			'Modelei a camada de dados e padronizei o pipeline de metricas para consistencia entre telas.',
			'Criei paginas e componentes focados em leitura, filtros e performance em ambiente real.',
			'Estruturei o produto para manutencao facil, com isolamento por feature e evolucao incremental.',
		],
		impact: [
			'Menos esforco manual para montar relatorios recorrentes.',
			'Mais confiabilidade na leitura dos numeros com fontes centralizadas e padronizadas.',
			'Tomada de decisao mais rapida com KPIs prontos para uso.',
		],
		stack: [
			'Next.js',
			'React',
			'Integracoes com APIs',
			'Modelagem de dados',
			'Performance',
			'Qualidade',
		],
		links: [{ label: 'Acesso privado' }],
		assets: [
			{
				kind: 'image',
				title: 'Executive Dashboard',
				description: 'Visao geral de KPIs, comparativos e tendencias.',
				src: '/projects/jd-analytics/landing.webp',
				alt: 'Landing page publica do JD Analytics',
			},
			{
				kind: 'image',
				title: 'Modulo de Integracoes',
				description: 'Consolidacao de fontes e padronizacao de metricas.',
				src: '/projects/jd-analytics/login.webp',
				alt: 'Tela de login publica do JD Analytics',
			},
			{
				kind: 'image',
				title: 'Analise por Periodo',
				description: 'Filtros com foco em leitura rapida e decisao.',
				src: '/projects/jd-analytics/perfil.webp',
				alt: 'Tela de perfil e configuracoes do usuario no JD Analytics',
			},
		],
	},
	{
		slug: 'lhg-analytics',
		title: 'LHG Analytics',
		tagline:
			'Plataforma de analytics para moteis, com visao executiva e modulos operacionais usando dados reais do cliente.',
		context:
			'Sistema web interno para operacao de motel, alimentado pelo banco de dados do cliente, com visao geral e modulos como Restaurantes, Reservas e Operacional.',
		role: 'Responsavel por frontend, design UI UX e integracao com backend em NestJS.',
		goals: [
			'Centralizar indicadores e rotinas de diferentes setores em um painel unico.',
			'Permitir analise por periodo e por intervalo de datas.',
			'Entregar leitura rapida com KPIs, comparativo com periodo anterior e graficos de tendencia.',
		],
		work: [
			'Desenhei a experiencia do produto e os fluxos de navegacao por modulos.',
			'Implementei painel web, layout e componentes de UI reutilizaveis.',
			'Integrei frontend com API em NestJS, garantindo consistencia de dados nos cards, filtros e graficos.',
			'Construi filtros de periodo e date range, incluindo visualizacoes como faturamento por tipo de locacao.',
		],
		impact: [
			'Visao unificada para tomada de decisao com leitura rapida dos principais KPIs.',
			'Reducao de atrito na operacao com modulos organizados e comparativos claros.',
			'Interface consistente e escalavel para evolucao de novas telas e metricas.',
		],
		stack: [
			'React',
			'Dashboard UI',
			'API NestJS',
			'Componentes reutilizaveis',
			'Visualizacao de dados',
			'UX',
		],
		links: [{ label: 'Acesso privado' }],
		assets: [
			{
				kind: 'image',
				title: 'Painel Executivo',
				description: 'KPIs principais com comparativo de periodo.',
				src: '/projects/lhg-analytics/painel-admin.png',
				alt: 'Painel administrativo do LHG Analytics',
			},
			{
				kind: 'image',
				title: 'Modulos Operacionais',
				description: 'Restaurantes, Reservas e Operacional no mesmo produto.',
				src: '/projects/lhg-analytics/operacional.webp',
				alt: 'Modulo operacional do LHG Analytics',
			},
			{
				kind: 'image',
				title: 'Filtro de Datas',
				description: 'Date range para leitura por unidade e tendencia.',
				src: '/projects/lhg-analytics/loading.png',
				alt: 'Tela de login do LHG Analytics',
			},
		],
	},
	{
		slug: 'jseg-equipamentos',
		title: 'JSEG Equipamentos',
		tagline:
			'Site institucional focado em captacao de leads, apresentacao da empresa e vitrine de solucoes.',
		context:
			'Website para divulgar empresa e servicos com paginas por categoria de solucao, como cameras de seguranca, equipamentos de rede e controle de acesso.',
		role: 'Projeto executado por completo, com foco em frontend e UI UX. Sem backend dedicado.',
		goals: [
			'Apresentar empresa e produtos de forma clara.',
			'Direcionar usuario para contato rapido e solicitacao de orcamento.',
			'Capturar leads com baixo atrito.',
		],
		work: [
			'Estruturei navegacao e hierarquia de conteudo por solucoes.',
			'Desenhei e implementei interface com foco em leitura e conversao.',
			'Implementei captacao de lead via formulario com envio por email.',
			'Integrei atalhos de contato, incluindo WhatsApp.',
		],
		impact: [
			'Canal direto e organizado para solicitacao de orcamento e contato.',
			'Portfolio de solucoes centralizado e facil de entender pelo cliente.',
		],
		stack: [
			'Frontend Web',
			'UI UX',
			'Formulario com envio por email',
			'Foco em conversao',
		],
		links: [
			{
				label: 'Site online',
				href: 'https://www.jsegequipamentos.com.br/',
			},
		],
		assets: [
			{
				kind: 'image',
				title: 'Home Institucional',
				description: 'Comunicacao clara de servicos e prova de credibilidade.',
				src: '/projects/jseg-equipamentos/hero.png',
				alt: 'Tela de hero do JSEG Equipamentos',
			},
			{
				kind: 'image',
				title: 'Paginas de Solucao',
				description: 'Navegacao por categorias para facilitar descoberta.',
				src: '/projects/jseg-equipamentos/cam.png',
				alt: 'Tela de câmeras do JSEG Equipamentos',
			},
			{
				kind: 'image',
				title: 'Captacao de Lead',
				description: 'Formulario e atalhos rapidos para contato.',
				src: '/projects/jseg-equipamentos/smart.png',
				alt: 'Tela de smart home do JSEG Equipamentos',
			},
		],
	},
	{
		slug: 'infinit-multigestao',
		title: 'Infinit Multigestao',
		tagline:
			'Site institucional focado em conversao, direcionando para WhatsApp ou formulario com envio por email.',
		context:
			'Presenca digital para apresentar servicos com foco em eficiencia e credibilidade, cobrindo gestao de obras, reformas e administracao de condominios.',
		role: 'Fiz todo o projeto, do design UI UX ao desenvolvimento e publicacao.',
		goals: [
			'Explicar servicos e diferenciais de forma rapida e confiavel.',
			'Transformar visitas em conversas via WhatsApp ou formulario.',
			'Capturar leads com minimo de friccao.',
		],
		work: [
			'Estruturei arquitetura de paginas e hierarquia de conteudo pensando em conversao.',
			'Desenhei e implementei interface com foco em escaneabilidade e CTAs bem posicionados.',
			'Implementei formulario de contato com envio por email e caminho rapido para WhatsApp.',
			'Ajustei responsividade e consistencia visual para manter credibilidade em desktop e mobile.',
		],
		impact: [
			'Canal institucional claro para apresentar servicos e direcionar para o comercial.',
			'Jornada curta ate contato com CTAs diretos e opcao de WhatsApp ou formulario.',
		],
		stack: [
			'Frontend Web',
			'UI UX',
			'Responsividade',
			'Foco em conversao',
			'Formulario com envio por email',
		],
		links: [
			{
				label: 'Site online',
				href: 'https://www.infinitmultigestao.com.br/',
			},
		],
		assets: [
			{
				kind: 'image',
				title: 'Pagina Institucional',
				description: 'Mensagem direta para servicos e diferenciais.',
				src: '/projects/infinit/hero.png',
				alt: 'Tela de smart home do Infinit Multigestao',
			},
			{
				kind: 'image',
				title: 'Jornada de Conversao',
				description: 'CTAs para WhatsApp e formulario de contato.',
				src: '/projects/infinit/project.png',
				alt: 'Tela de projetos do Infinit Multigestao',
			},
			{
				kind: 'image',
				title: 'Mobile Experience',
				description:
					'Layout responsivo para manter confianca em qualquer tela.',
				src: '/projects/infinit/contact.png',
				alt: 'Tela de contato do Infinit Multigestao',
			},
		],
	},
];
