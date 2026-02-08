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
		slug: 'sodre-revestimentos',
		title: 'Sodre Revestimentos',
		tagline:
			'Landing page institucional focada em conversao, redirecionando o visitante para WhatsApp.',
		context:
			'Website enxuto para apresentar a marca e reduzir atrito na captacao de leads, com CTA direto para contato via WhatsApp.',
		role: 'Fiz tudo no projeto, do design UI UX ao desenvolvimento e publicacao. Sem backend, a conversao acontece via WhatsApp.',
		goals: [
			'Apresentar a empresa de forma clara e objetiva.',
			'Direcionar o usuario para contato rapido no WhatsApp.',
			'Capturar leads com o minimo de friccao.',
		],
		work: [
			'Desenhei a estrutura da landing page com foco em escaneabilidade e credibilidade.',
			'Implementei a interface e responsividade para desktop e mobile.',
			'Configurei CTAs e links de contato para WhatsApp, reduzindo o caminho ate a conversa.',
			'Ajustei consistencia visual e hierarquia de conteudo para favorecer conversao.',
		],
		impact: [
			'Canal direto para novos contatos e pedidos de orcamento.',
			'Jornada curta ate o WhatsApp, com chamada clara e acessivel.',
		],
		stack: [
			'Frontend Web',
			'UI UX',
			'Responsividade',
			'Foco em conversao',
			'Deep link para WhatsApp',
		],
		links: [
			{
				label: 'Site online',
				href: 'https://www.sodrerevestimentos.com.br/',
			},
		],
		assets: [
			{
				kind: 'image',
				title: 'Hero com CTA Principal',
				description:
					'Abertura institucional com proposta de valor e atalho direto para solicitar orcamento.',
				src: '/projects/sodre/hero.png',
				alt: 'Hero da Sodre Revestimentos com botao de solicitar orcamento',
			},
			{
				kind: 'image',
				title: 'Secao de Beneficios',
				description:
					'Cards destacando diferenciais de servico para reforcar credibilidade e confianca.',
				src: '/projects/sodre/recursos.png',
				alt: 'Secao de beneficios da Sodre Revestimentos com cards informativos',
			},
			{
				kind: 'image',
				title: 'Produtos e CTA de Conversao',
				description:
					'Apresentacao de produtos com chamada final para falar com consultor via WhatsApp.',
				src: '/projects/sodre/produtos.png',
				alt: 'Secao de produtos mais vendidos e CTA para falar com consultor',
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
