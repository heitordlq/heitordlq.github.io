// Todo o texto do site mora aqui, em PT-BR e EN. O build gera uma página por idioma a partir deste arquivo.
// Experiência e certificações vêm do perfil público do LinkedIn do próprio Heitor. Projetos vêm dos repositórios públicos.

export const site = {
  name: 'Heitor Queiroz',
  initials: 'HQ',
  handle: 'heitordlq',
  base: 'https://heitordlq.github.io',
  linkedin: 'https://www.linkedin.com/in/heitorqueiroz/',
  github: 'https://github.com/heitordlq',
  repo: 'https://github.com/heitordlq/heitordlq.github.io',
  location: { pt: 'São Paulo, Brasil', en: 'São Paulo, Brazil' },
  // Clientes atendidos pela Opah IT. false troca o nome por uma descrição genérica do setor.
  showClients: false
};

// Substituído por {client} nos textos das experiências em que o trabalho foi feito para um cliente da Opah IT.
const crefisa = { name: 'Crefisa', generic: { pt: 'uma instituição financeira', en: 'a financial institution' } };
const protege = { name: 'Protege Cash', generic: { pt: 'uma plataforma bancária', en: 'a banking platform' } };
const h2bet = { name: 'H2 Bet', generic: { pt: 'uma empresa de iGaming', en: 'an iGaming company' } };

export const experience = [
  {
    role: 'Tech Lead',
    org: 'Opah IT',
    client: protege,
    period: { pt: 'set. 2026 – atual', en: 'Sep 2026 – present' },
    place: { pt: 'São Paulo', en: 'São Paulo' },
    summary: {
      pt: 'Evolução da plataforma bancária: arquitetura, produtos, canais digitais e engenharia.',
      en: 'Evolution of the banking platform: architecture, products, digital channels and engineering.'
    },
    bullets: {
      pt: [
        'Pix: lidero a implementação e a evolução, integrado ao Internet Banking, aos apps PF e PJ e ao Backoffice. Concluímos a migração da infraestrutura: custo menor, resposta mais rápida para o cliente e menos incidentes.',
        'Pessoas: time de 6 pessoas (desenvolvedores e QA). Conduzi 2 promoções e reestruturei o time e os processos.',
        'Produtos: evolução de produtos e jornadas para clientes PF, PJ, operadores e usuários Master.',
        'Engenharia: documentação técnica no Backstage (IDP open source da Spotify), melhoria do Git Flow e padronização do desenvolvimento com scaffolds.',
        'Alinhamento: faço a ponte entre Engenharia, Produto, QA, Negócio e parceiros.',
        'Modernização: a base tecnológica está sendo reformulada para aguentar o crescimento da operação.'
      ],
      en: [
        'Pix: I lead the implementation and evolution, integrated with Internet Banking, the personal and business apps and the Back Office. We finished the infrastructure migration: lower cost, faster responses for customers and fewer incidents.',
        'People: a team of 6 (developers and QA). I led 2 promotions and restructured the team and its processes.',
        'Products: evolution of products and journeys for personal and business customers, operators and Master users.',
        'Engineering: technical documentation on Backstage (Spotify’s open-source IDP), an improved Git Flow and standardized development with scaffolds.',
        'Alignment: I bridge Engineering, Product, QA, Business and partners.',
        'Modernization: the technology base is being reworked to handle the growth of the operation.'
      ]
    }
  },
  {
    role: 'Tech Lead',
    org: 'Opah IT',
    client: h2bet,
    period: { pt: 'out. 2024 – set. 2026', en: 'Oct 2024 – Sep 2026' },
    place: { pt: 'Brasil, híbrido', en: 'Brazil, hybrid' },
    summary: {
      pt: 'Liderei o time de engenharia da plataforma de apostas e cassino de {client}: 14 pessoas, sendo 12 desenvolvedores (6 fullstack, 4 backend, 2 front-end) e 2 QAs, com alto volume de transações e pouca tolerância a indisponibilidade.',
      en: 'I led the engineering team of the betting and casino platform of {client}: 14 people, 12 of them developers (6 fullstack, 4 backend, 2 front-end) and 2 QAs, with high transaction volume and little tolerance for downtime.'
    },
    bullets: {
      pt: [
        'Gestão de pessoas: carreira e performance do time, com 1:1s, PDIs e feedback frequente. Conduzi duas promoções, de júnior para pleno e de desenvolvedor para tech lead.',
        'Contratação: mais de 20 entrevistas técnicas e 8 pessoas contratadas, da definição do perfil ao processo seletivo.',
        'Arquitetura e entrega: conduzi as discussões de arquitetura da plataforma distribuída (resposta de até 400 ms por requisição) e coordenei novas funcionalidades, com escopo, riscos e dependências.',
        'Stack: Node.js, Java com Quarkus e microfrontend em React, com microsserviços de alta volumetria em Kubernetes na AWS. A mudança melhorou performance, escalabilidade e a velocidade de entrega das squads.',
        'Processos de engenharia: melhorei o Git Flow, a documentação técnica, o IDP (Internal Developer Platform) e os processos de deploy e qualidade. O time ganhou autonomia.',
        'Stakeholders: principal contato técnico com Produto e Negócio. Traduzo necessidades em requisitos técnicos e aviso os riscos cedo.'
      ],
      en: [
        'People management: career and performance of the team, with 1:1s, development plans and frequent feedback. I led two promotions, junior to mid-level and developer to tech lead.',
        'Hiring: more than 20 technical interviews and 8 hires, from defining the profile to the selection process.',
        'Architecture and delivery: I led the architecture discussions of the distributed platform (responses within 400 ms per request) and coordinated new features, including scope, risks and dependencies.',
        'Stack: Node.js, Java with Quarkus and React microfrontends, with high-volume microservices on Kubernetes on AWS. The change improved performance, scalability and the squads’ delivery speed.',
        'Engineering processes: I improved Git Flow, technical documentation, the IDP (Internal Developer Platform) and the deploy and quality processes. The team gained autonomy.',
        'Stakeholders: main technical contact for Product and the business. I turn needs into technical requirements and flag risks early.'
      ]
    }
  },
  {
    role: 'Tech Lead',
    org: 'Crefisa',
    period: { pt: 'mai. 2022 – set. 2024', en: 'May 2022 – Sep 2024' },
    place: { pt: 'São Paulo, presencial', en: 'São Paulo, on site' },
    summary: {
      pt: 'Liderei tecnicamente a migração de serviços legados (Oracle OSB) para microsserviços em .NET sobre OpenShift, em ambiente financeiro regulado. Time de 4 pessoas, mais de 10 serviços migrados.',
      en: 'I was the technical lead of the migration of legacy services (Oracle OSB) to microservices in .NET on OpenShift, in a regulated financial environment. Team of 4, more than 10 services migrated.'
    },
    bullets: {
      pt: [
        'OKRs: defini e acompanhei os OKRs da equipe, alinhados às metas da empresa. As entregas ficaram mais previsíveis.',
        'Governança de APIs: ciclo de vida e arquitetura de mais de 50 APIs em CA Layer 7, com padrão para contratos, versionamento e segurança.',
        'Time: acompanhei a transição da equipe de SOA/OSB para microsserviços.'
      ],
      en: [
        'OKRs: I defined and tracked the team OKRs, aligned with company goals. Deliveries became more predictable.',
        'API governance: lifecycle and architecture of more than 50 APIs on CA Layer 7, with a standard for contracts, versioning and security.',
        'Team: I guided the team’s transition from SOA/OSB to microservices.'
      ]
    }
  },
  {
    role: 'Tech Lead',
    org: 'Opah IT',
    client: crefisa,
    period: { pt: 'abr. 2021 – abr. 2022', en: 'Apr 2021 – Apr 2022' },
    place: { pt: 'São Paulo, presencial', en: 'São Paulo, on site' },
    summary: {
      pt: 'Liderei tecnicamente projetos de integração e arquitetura no core digital de {client}: aplicativo do banco, Internet Banking e PIX, com SLA regulatório e picos de transações.',
      en: 'I was the technical lead of integration and architecture projects in the digital core of {client}: the bank app, Internet Banking and PIX, with regulatory SLAs and transaction peaks.'
    },
    bullets: {
      pt: [
        'Aplicativo e APIs: implementei o aplicativo do banco e defini as APIs e a arquitetura por trás das jornadas do cliente.',
        'Performance: decisões de arquitetura que melhoraram o PIX e as jornadas de conta corrente no Internet Banking.',
        'Workshops: sessões de arquitetura e design com Negócio e Tecnologia para decidir as soluções.',
        'Tecnologia: avaliei e escolhi tecnologias e ferramentas, e documentei as decisões.'
      ],
      en: [
        'App and APIs: I implemented the bank app and defined the APIs and architecture behind the customer journeys.',
        'Performance: architecture decisions that improved PIX and the checking-account journeys in Internet Banking.',
        'Workshops: architecture and design sessions with Business and Technology to decide on solutions.',
        'Technology: I evaluated and chose technologies and tools, and documented the decisions.'
      ]
    }
  },
  {
    role: 'Senior Software Engineer',
    org: 'Opah IT',
    client: crefisa,
    period: { pt: 'nov. 2019 – abr. 2021', en: 'Nov 2019 – Apr 2021' },
    place: { pt: 'São Paulo', en: 'São Paulo' },
    summary: {
      pt: 'Projetei e implementei integrações complexas, com foco em migração de tecnologia e arquitetura. Fui a referência técnica em APIs com CA Layer 7, Oracle OSB e SOA, e em manipulação de dados (XPath, JSON).',
      en: 'Designed and implemented complex integrations, focused on technology migration and architecture. I was the technical reference for APIs with CA Layer 7, Oracle OSB and SOA, and for data handling (XPath, JSON).'
    },
    bullets: { pt: [], en: [] }
  },
  {
    role: 'Senior Software Engineer',
    org: 'GPA',
    period: { pt: 'mar. 2018 – nov. 2019', en: 'Mar 2018 – Nov 2019' },
    place: { pt: 'São Paulo e região, presencial', en: 'São Paulo area, on site' },
    summary: {
      pt: 'Arquitetura e desenvolvimento de integrações com Oracle SOA Suite e OSB em uma grande rede de varejo, além de suporte à produção e manutenção da plataforma WebLogic.',
      en: 'Architecture and development of integrations with Oracle SOA Suite and OSB at a large retailer, plus production support and WebLogic platform maintenance.'
    },
    bullets: {
      pt: [
        'Arquitetura: comecei a quebrar sistemas monolíticos em microsserviços Java com Spring Boot, rodando em Docker Swarm.',
        'Alta demanda: preparei e sustentei a plataforma nos períodos de pico, como a Black Friday, sem ocorrências críticas, e a operação bateu recordes de vendas.'
      ],
      en: [
        'Architecture: I started breaking monolithic systems into Java microservices with Spring Boot, running on Docker Swarm.',
        'High demand: I prepared and kept the platform running through peak periods such as Black Friday, with no critical incidents, and the operation hit sales records.'
      ]
    }
  },
  {
    role: 'Mid Software Engineer',
    org: 'Embraer',
    period: { pt: 'set. 2016 – mar. 2018', en: 'Sep 2016 – Mar 2018' },
    place: { pt: 'São José dos Campos, presencial', en: 'São José dos Campos, on site' },
    summary: {
      pt: 'Desenvolvimento e suporte de integrações com Oracle SOA Suite e OSB em projetos aeroespaciais, incluindo arquitetura e ciclo de vida dos serviços.',
      en: 'Development and support of integrations with Oracle SOA Suite and OSB in aerospace projects, including architecture and the service lifecycle.'
    },
    bullets: { pt: [], en: [] }
  },
  {
    role: 'Junior Software Engineer',
    org: 'Computer Sciences Corporation (CSC)',
    period: { pt: 'out. 2014 – set. 2016', en: 'Oct 2014 – Sep 2016' },
    place: { pt: 'Alocado na Embraer, São José dos Campos, presencial', en: 'Allocated at Embraer, São José dos Campos, on site' },
    summary: {
      pt: 'Suporte à produção e desenvolvimento de projetos de integração de sistemas com Oracle Service Bus (OSB) e SOA.',
      en: 'Production support and development of system integration projects with Oracle Service Bus (OSB) and SOA.'
    },
    bullets: { pt: [], en: [] }
  },
  {
    role: { pt: 'Consultor de Integração de Sistemas', en: 'Systems Integration Consultant' },
    org: 'Apdata do Brasil',
    period: { pt: 'jun. 2012 – out. 2014', en: 'Jun 2012 – Oct 2014' },
    place: { pt: '', en: '' },
    summary: {
      pt: 'Consultoria e implementação de projetos de integração de sistemas.',
      en: 'Consulting and implementation of system integration projects.'
    },
    bullets: { pt: [], en: [] }
  },
  {
    role: { pt: 'Consultor de Vendas', en: 'Sales Consultant' },
    org: 'LATAM Airlines',
    period: { pt: 'jun. 2011 – mai. 2012', en: 'Jun 2011 – May 2012' },
    place: { pt: '', en: '' },
    summary: { pt: '', en: '' },
    bullets: { pt: [], en: [] }
  }
];

// Formação e idioma vêm do CV.
export const education = [
  {
    title: { pt: 'Pós-graduação em Desenvolvimento Estratégico e Liderança de Resultados', en: 'Postgraduate degree in Strategic Development and Results Leadership' },
    org: 'Bússola Executiva',
    period: { pt: 'jun. 2025 – jun. 2026', en: 'Jun 2025 – Jun 2026' }
  },
  {
    title: { pt: 'Bacharelado em Ciência da Computação', en: 'Bachelor’s degree in Computer Science' },
    org: 'Uninove',
    period: { pt: '2009 – 2013', en: '2009 – 2013' }
  }
];

export const languages = [{ pt: 'Inglês, proficiência profissional plena', en: 'English, full professional proficiency' }];

export const certifications = [
  { title: 'Pré-MBA em Liderança e Gestão', org: 'Saint Paul Escola de Negócios', date: { pt: 'jun. 2025', en: 'Jun 2025' } },
  { title: 'Governança na Prática: Cobit, ITIL, Scrum e PMBOK', org: 'Ka Solution', date: { pt: 'set. 2024', en: 'Sep 2024' } },
  { title: 'Liderança Executiva para Resultados', org: 'Bússola Executiva', date: { pt: 'ago. 2024', en: 'Aug 2024' } },
  { title: 'Dominando o Microsoft Copilot', org: 'Ka Solution', date: null },
  { title: 'Oracle Enterprise Manager Cloud Control 12c: Cloud Mgmt Wkshp Ed 1 PRV', org: 'Oracle', date: { pt: 'nov. 2018', en: 'Nov 2018' } },
  { title: 'Microsoft SQL Server 2012 MCSA', org: 'Ka Solution', date: { pt: 'mar. 2014', en: 'Mar 2014' } }
];

export const stack = [
  {
    k: { pt: 'Liderança e gestão', en: 'Leadership and management' },
    v: [
      { pt: 'Gestão de equipes de alta performance', en: 'High-performance team management' },
      'OKRs',
      { pt: '1:1 e feedback contínuo', en: '1:1s and continuous feedback' },
      { pt: 'PDI', en: 'Individual development plans' },
      { pt: 'Gestão de demanda e priorização', en: 'Demand management and prioritization' },
      { pt: 'Mentoria técnica', en: 'Technical mentoring' },
      { pt: 'Contratação', en: 'Hiring' },
      { pt: 'Governança (Cobit, ITIL, Scrum e PMBOK)', en: 'Governance (Cobit, ITIL, Scrum and PMBOK)' }
    ]
  },
  {
    k: { pt: 'Arquitetura e integração', en: 'Architecture and integration' },
    v: [
      { pt: 'Arquitetura de software', en: 'Software architecture' },
      { pt: 'Microsserviços de alta volumetria', en: 'High-volume microservices' },
      { pt: 'Governança de APIs', en: 'API governance' },
      'Oracle SOA Suite / OSB',
      'CA Layer 7',
      'WebLogic'
    ]
  },
  {
    k: { pt: 'Linguagens e plataformas', en: 'Languages and platforms' },
    v: ['Node.js', 'Java', 'Quarkus', 'Spring Boot', '.NET', { pt: 'React (microfrontend)', en: 'React (microfrontend)' }, 'SQL Server']
  },
  { k: { pt: 'Cloud e infraestrutura', en: 'Cloud and infrastructure' }, v: ['AWS', 'Kubernetes', 'OpenShift', 'Docker'] },
  {
    k: { pt: 'Domínios de negócio', en: 'Business domains' },
    v: [
      { pt: 'iGaming e apostas online', en: 'iGaming and online betting' },
      { pt: 'Bancário e financeiro', en: 'Banking and finance' },
      { pt: 'Aviação', en: 'Aviation' },
      { pt: 'Varejo', en: 'Retail' }
    ]
  },
  {
    k: { pt: 'Projetos pessoais', en: 'Personal projects' },
    v: ['TypeScript', 'React', 'Next.js', 'React Native', 'NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'Stripe']
  }
];

export const ui = {
  pt: {
    htmlLang: 'pt-BR',
    other: { code: 'en', title: 'Switch to English' },
    kicker: 'Portfólio',
    skip: 'Ir para o conteúdo',
    nav: { home: 'Início', projects: 'Projetos', about: 'Sobre' },
    navLabel: 'Principal',
    theme: 'Alternar tema',
    role: 'Tech Lead. Times de engenharia, microsserviços e integração, no setor financeiro e de iGaming.',
    siteDesc: 'Portfólio de Heitor Queiroz, Tech Lead: experiência, projetos pessoais, stack e contato.',
    whoTitle: 'Quem sou',
    who: [
      'Sou Tech Lead e trabalho com tecnologia há mais de 10 anos. Hoje lidero times que constroem microsserviços de alto volume em Kubernetes na AWS, em plataformas de apostas (iGaming) e em sistemas bancários e financeiros.',
      'Acho que boa arquitetura sai de time motivado e bem acompanhado. Na gestão de pessoas, faço 1:1 com regularidade, dou feedback no dia a dia e mantenho um PDI para cada pessoa.'
    ],
    stackTitle: 'Stack',
    workTitle: 'Projetos pessoais',
    allProjects: 'Todos os projetos',
    viewProject: 'Ver projeto',
    projectsTitle: 'Projetos',
    projectsIntro: 'Projetos pessoais, com o código aberto no GitHub.',
    aboutTitle: 'Sobre',
    experienceTitle: 'Experiência',
    educationTitle: 'Formação',
    certsTitle: 'Certificações e cursos',
    languagesTitle: 'Idiomas',
    fullExperience: 'Ver a experiência completa',
    contactTitle: 'Contato',
    contactText: 'Prefiro conversar pelo LinkedIn.',
    whatItDoes: 'O que faz',
    architecture: 'Arquitetura',
    repository: 'Repositório',
    back: 'Todos os projetos',
    notFoundTitle: 'Página não encontrada',
    notFoundText: 'O endereço não existe neste site.',
    footer: 'Site estático, sem framework. Código-fonte no GitHub.'
  },
  en: {
    htmlLang: 'en',
    other: { code: 'pt', title: 'Mudar para português' },
    kicker: 'Portfolio',
    skip: 'Skip to content',
    nav: { home: 'Home', projects: 'Projects', about: 'About' },
    navLabel: 'Main',
    theme: 'Toggle theme',
    role: 'Tech Lead. Engineering teams, microservices and integration, in finance and iGaming.',
    siteDesc: 'Portfolio of Heitor Queiroz, Tech Lead: experience, personal projects, stack and contact.',
    whoTitle: 'About me',
    who: [
      'I am a Tech Lead and have worked in technology for more than 10 years. Today I lead teams that build high-volume microservices on Kubernetes on AWS, in betting (iGaming) platforms and in banking and financial systems.',
      'I think good architecture comes from a motivated, well-supported team. For people management, I hold regular 1:1s, give feedback day to day and keep a development plan for each person.'
    ],
    stackTitle: 'Stack',
    workTitle: 'Personal projects',
    allProjects: 'All projects',
    viewProject: 'View project',
    projectsTitle: 'Projects',
    projectsIntro: 'Personal projects, with the code open on GitHub.',
    aboutTitle: 'About',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
    certsTitle: 'Certifications and courses',
    languagesTitle: 'Languages',
    fullExperience: 'See the full experience',
    contactTitle: 'Contact',
    contactText: 'I prefer to talk on LinkedIn.',
    whatItDoes: 'What it does',
    architecture: 'Architecture',
    repository: 'Repository',
    back: 'All projects',
    notFoundTitle: 'Page not found',
    notFoundText: 'This address does not exist on this site.',
    footer: 'Static site, no framework. Source code on GitHub.'
  }
};

export const projects = [
  {
    slug: 'barbearia-saas',
    repo: 'https://github.com/heitordlq/barber-shop-app',
    repoLabel: 'github.com/heitordlq/barber-shop-app',
    tech: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'MinIO', 'Next.js', 'Turborepo', 'pnpm', 'Stripe'],
    diagram: true,
    tree: {
      root: 'barber-shop-app/',
      lines: {
        pt: ['backend/|API NestJS · Prisma · PostgreSQL · Redis · MinIO', 'apps/|', '  backoffice/|Next.js · operação do SaaS', '  barbershop/|Next.js · painel da barbearia', '  client/|Next.js · reservas públicas', 'packages/|código compartilhado'],
        en: ['backend/|NestJS API · Prisma · PostgreSQL · Redis · MinIO', 'apps/|', '  backoffice/|Next.js · SaaS operations', '  barbershop/|Next.js · barbershop dashboard', '  client/|Next.js · public booking', 'packages/|shared code']
      }
    },
    pt: {
      title: 'Barbearia SaaS',
      summary: 'Plataforma multi-tenant para barbearias, com agendamento, fidelidade e pagamentos.',
      intro: 'Cada barbearia é um tenant. O cadastro público cria o dono e o tenant. A plataforma tem painel de gestão, site público de reservas e backoffice do SaaS.',
      features: [
        'Agenda que respeita os horários da unidade e, quando configurado, os horários de cada barbeiro, com bloqueios e pausas.',
        'O dono cadastra barbeiros, define horários de trabalho e permissões de acesso ao painel.',
        'Planos de fidelidade e assinaturas, conforme as regras do backend.',
        'Pagamentos com Stripe (checkout e webhooks) e repasse via Stripe Connect.',
        'Backoffice do SaaS com barbearias, planos da plataforma e financeiro agregado.'
      ],
      archNote: 'Monorepo com pnpm workspaces e Turborepo. A API usa o prefixo global /api.',
      caption: 'Visão geral simplificada, montada a partir da estrutura do repositório.'
    },
    en: {
      title: 'Barbershop SaaS',
      summary: 'Multi-tenant platform for barbershops, with booking, loyalty and payments.',
      intro: 'Each barbershop is a tenant. Public sign-up creates the owner and the tenant. The platform has a management dashboard, a public booking site and a SaaS back office.',
      features: [
        'A schedule that respects the shop hours and, when configured, each barber’s own hours, with blocks and breaks.',
        'The owner registers barbers, sets working hours and dashboard access permissions.',
        'Loyalty plans and subscriptions, following the backend rules.',
        'Payments with Stripe (checkout and webhooks) and payouts through Stripe Connect.',
        'SaaS back office with barbershops, platform plans and aggregated finance.'
      ],
      archNote: 'Monorepo with pnpm workspaces and Turborepo. The API uses the global /api prefix.',
      caption: 'Simplified overview, drawn from the repository structure.'
    }
  },
  {
    slug: 'assessor-app',
    repo: 'https://github.com/heitordlq/assessorapp',
    repoLabel: 'github.com/heitordlq/assessorapp',
    tech: ['React Native', 'TypeScript', 'React Navigation', 'React Native Paper', 'Axios', 'AsyncStorage', 'Jest'],
    diagram: false,
    pt: {
      title: 'Assessor App',
      summary: 'Aplicativo mobile para gerenciamento de mensagens e relatórios.',
      intro: 'App em React Native e TypeScript que consome uma API configurável.',
      features: [
        'Navegação entre telas com React Navigation.',
        'Interface com componentes do React Native Paper.',
        'Requisições HTTP com Axios e armazenamento local com AsyncStorage.',
        'Testes automatizados com Jest.'
      ]
    },
    en: {
      title: 'Assessor App',
      summary: 'Mobile app for managing messages and reports.',
      intro: 'A React Native and TypeScript app that talks to a configurable API.',
      features: [
        'Screen navigation with React Navigation.',
        'Interface built with React Native Paper components.',
        'HTTP requests with Axios and local storage with AsyncStorage.',
        'Automated tests with Jest.'
      ]
    }
  }
];
