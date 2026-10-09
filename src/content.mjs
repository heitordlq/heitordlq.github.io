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
      pt: 'Transformação e evolução da plataforma bancária: arquitetura, produtos, canais digitais e engenharia, com foco em escala, eficiência operacional e qualidade.',
      en: 'Transformation and evolution of the banking platform: architecture, products, digital channels and engineering, focused on scale, operational efficiency and quality.'
    },
    bullets: {
      pt: [
        'Pix: lidero a implementação e a evolução, com integração a Internet Banking, App PF, App PJ e Backoffice. A migração da infraestrutura foi concluída, com redução de custos, melhor performance para o cliente e menos incidentes.',
        'Pessoas: time de 6 pessoas (desenvolvedores e QA), com 2 promoções conduzidas e reestruturação do time e dos processos.',
        'Produtos: evolução de produtos e jornadas para clientes PF, PJ, operadores e usuários Master.',
        'Engenharia: documentação técnica no Backstage (IDP open source da Spotify), melhoria do Git Flow e padronização do desenvolvimento com scaffolds.',
        'Alinhamento: integração entre Engenharia, Produto, QA, Negócio e parceiros estratégicos, conectando estratégia, arquitetura e execução.',
        'Modernização: base tecnológica mais escalável, resiliente e sustentável para suportar o crescimento da operação.'
      ],
      en: [
        'Pix: I lead the implementation and evolution, integrated with Internet Banking, the personal and business apps and the Back Office. The infrastructure migration was completed, with lower costs, better performance for customers and fewer incidents.',
        'People: a team of 6 (developers and QA), with 2 promotions led and a restructuring of the team and its processes.',
        'Products: evolution of products and journeys for personal and business customers, operators and Master users.',
        'Engineering: technical documentation on Backstage (Spotify’s open-source IDP), an improved Git Flow and standardized development with scaffolds.',
        'Alignment: integration between Engineering, Product, QA, Business and strategic partners, connecting strategy, architecture and execution.',
        'Modernization: a more scalable, resilient and sustainable technology base to support the growth of the operation.'
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
      pt: 'Liderei o time de engenharia da plataforma de apostas e cassino de {client}: 14 pessoas, sendo 12 desenvolvedores (6 fullstack, 4 backend, 2 front-end) e 2 QAs, em ambiente de alto volume transacional e disponibilidade crítica na indústria de iGaming.',
      en: 'I led the engineering team of the betting and casino platform of {client}: 14 people, 12 of them developers (6 fullstack, 4 backend, 2 front-end) and 2 QAs, in a high-volume, mission-critical iGaming environment.'
    },
    bullets: {
      pt: [
        'Gestão de pessoas: desenvolvimento de carreira e gestão de performance do time, com 1:1s, PDIs, feedbacks contínuos e cultura de melhoria contínua. Duas promoções conduzidas, de júnior para pleno e de desenvolvedor para tech lead.',
        'Contratação: mais de 20 entrevistas técnicas e 8 pessoas contratadas, da definição do perfil ao processo seletivo.',
        'Arquitetura e entrega: condução das discussões de arquitetura da plataforma distribuída, com tempo de resposta de até 400 ms por requisição, e coordenação de novas funcionalidades, gerenciando escopo, riscos e dependências.',
        'Stack: evolução para Node.js, Java com Quarkus e microfrontend em React, com microsserviços de alta volumetria em Kubernetes na AWS, elevando performance, escalabilidade e velocidade de entrega das squads.',
        'Processos de engenharia: melhoria do Git Flow, da documentação técnica, do IDP (Internal Developer Platform) e dos processos de deploy e de qualidade, padronizando o ciclo de desenvolvimento e ampliando a autonomia do time.',
        'Stakeholders: principal ponto de contato técnico com a gestão de produtos e o negócio, traduzindo necessidades em requisitos técnicos e antecipando riscos.'
      ],
      en: [
        'People management: career development and performance management, with 1:1s, development plans, continuous feedback and a continuous-improvement culture. Two promotions led: junior to mid-level, and developer to tech lead.',
        'Hiring: more than 20 technical interviews and 8 hires, from defining the profile to the selection process.',
        'Architecture and delivery: led the architecture discussions of the distributed platform, sustaining response times of up to 400 ms per request, and coordinated new features, managing scope, risks and dependencies.',
        'Stack: moved the stack to Node.js, Java with Quarkus and React microfrontends, with high-volume microservices on Kubernetes on AWS, raising performance, scalability and delivery speed of the squads.',
        'Engineering processes: improved Git Flow, technical documentation, the IDP (Internal Developer Platform) and the deploy and quality processes, standardizing the development cycle and increasing team autonomy.',
        'Stakeholders: main technical contact for product management and the business, translating needs into technical requirements and anticipating risks.'
      ]
    }
  },
  {
    role: 'Tech Lead',
    org: 'Crefisa',
    period: { pt: 'mai. 2022 – set. 2024', en: 'May 2022 – Sep 2024' },
    place: { pt: 'São Paulo, presencial', en: 'São Paulo, on site' },
    summary: {
      pt: 'Liderança técnica do programa estratégico de migração de serviços legados (Oracle OSB) para uma arquitetura moderna de microsserviços em .NET sobre OpenShift, em ambiente financeiro regulado. Time de 4 pessoas, com mais de 10 serviços migrados.',
      en: 'Technical lead of the strategic program to migrate legacy services (Oracle OSB) to a modern microservices architecture in .NET on OpenShift, in a regulated financial environment. Team of 4, with more than 10 services migrated.'
    },
    bullets: {
      pt: [
        'Gestão por OKRs: defini e gerenciei os OKRs da equipe em cascata com as metas da empresa, melhorando a previsibilidade e a qualidade das entregas.',
        'Governança de APIs: ciclo de vida e arquitetura de mais de 50 APIs em CA Layer 7, padronizando contratos, versionamento e segurança.',
        'Capacitação do time: transição da equipe de SOA/OSB para microsserviços, guiando a adoção de boas práticas de desenvolvimento e engenharia moderna.'
      ],
      en: [
        'OKR management: defined and managed the team OKRs cascaded from company goals, improving predictability and delivery quality.',
        'API governance: lifecycle and architecture of more than 50 APIs on CA Layer 7, standardizing contracts, versioning and security.',
        'Team enablement: moved the team from SOA/OSB to microservices, guiding the adoption of good development practices and modern engineering.'
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
      pt: 'Liderança técnica de projetos de integração e arquitetura no core digital de {client}, cobrindo aplicativo do banco, Internet Banking e PIX, em ambiente sujeito a SLA regulatório e a picos de volume transacional.',
      en: 'Technical lead of integration and architecture projects in the digital core of {client}, covering the bank app, Internet Banking and PIX, under regulatory SLAs and transaction volume peaks.'
    },
    bullets: {
      pt: [
        'Aplicativo e APIs: implementação do aplicativo do banco, definindo as APIs e a arquitetura que sustentam as jornadas do cliente e melhorando a experiência de uso.',
        'Performance: decisões de arquitetura por trás dos ganhos de performance no PIX e nas jornadas de conta corrente no Internet Banking.',
        'Facilitação técnica: workshops de arquitetura e sessões de design com stakeholders de negócio e de tecnologia, para definir soluções robustas e escaláveis.',
        'Governança tecnológica: avaliação e seleção de tecnologias e ferramentas, documentando as decisões e garantindo a aderência do time às boas práticas de desenvolvimento.'
      ],
      en: [
        'App and APIs: implementation of the bank app, defining the APIs and architecture behind the customer journeys and improving the user experience.',
        'Performance: architecture decisions behind the performance gains in PIX and in the checking-account journeys of Internet Banking.',
        'Technical facilitation: architecture workshops and design sessions with business and technology stakeholders, to define robust and scalable solutions.',
        'Technology governance: evaluation and selection of technologies and tools, documenting decisions and keeping the team aligned with good development practices.'
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
      pt: 'Projetei e implementei soluções complexas de integração, com foco em migração de tecnologia e definição de arquiteturas escaláveis. Referência técnica no gerenciamento de APIs com CA Layer 7, Oracle OSB e SOA, e na manipulação de dados (XPath, JSON), garantindo performance e segurança dos serviços.',
      en: 'Designed and implemented complex integration solutions, focused on technology migration and scalable architecture definition. Technical reference for API management with CA Layer 7, Oracle OSB and SOA, and for data handling (XPath, JSON), ensuring service performance and security.'
    },
    bullets: { pt: [], en: [] }
  },
  {
    role: 'Senior Software Engineer',
    org: 'GPA',
    period: { pt: 'mar. 2018 – nov. 2019', en: 'Mar 2018 – Nov 2019' },
    place: { pt: 'São Paulo e região, presencial', en: 'São Paulo area, on site' },
    summary: {
      pt: 'Arquitetura e desenvolvimento de projetos de integração com Oracle SOA Suite e OSB em um ambiente de varejo de grande porte, além do suporte crítico à produção e da sustentação da plataforma WebLogic.',
      en: 'Architecture and development of integration projects with Oracle SOA Suite and OSB in a large retail environment, plus critical production support and WebLogic platform maintenance.'
    },
    bullets: {
      pt: [
        'Evolução da arquitetura: início da transformação de sistemas monolíticos para microsserviços em Java com Spring Boot, executados em Docker Swarm, buscando mais escalabilidade, disponibilidade e resiliência.',
        'Alta demanda: sustentação e preparação da plataforma para períodos de pico, incluindo a Black Friday, suportando picos de acesso e transações sem ocorrências críticas e contribuindo para recordes de vendas da operação.'
      ],
      en: [
        'Architecture evolution: started the move from monolithic systems to microservices in Java with Spring Boot, running on Docker Swarm, aiming for more scalability, availability and resilience.',
        'High demand: maintained and prepared the platform for peak periods, including Black Friday, handling traffic and transaction peaks with no critical incidents and contributing to sales records.'
      ]
    }
  },
  {
    role: 'Mid Software Engineer',
    org: 'Embraer',
    period: { pt: 'set. 2016 – mar. 2018', en: 'Sep 2016 – Mar 2018' },
    place: { pt: 'São José dos Campos, presencial', en: 'São José dos Campos, on site' },
    summary: {
      pt: 'Desenvolvimento e suporte de integrações com Oracle SOA Suite e OSB em projetos do setor aeroespacial, atuando na definição de arquitetura e no ciclo de vida dos serviços.',
      en: 'Development and support of integrations with Oracle SOA Suite and OSB in aerospace projects, working on architecture definition and the service lifecycle.'
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
    role: 'Tech Lead. Gestão de times de engenharia, microsserviços e integração, no setor financeiro e de iGaming.',
    siteDesc: 'Portfólio de Heitor Queiroz, Tech Lead: experiência, projetos pessoais, stack e contato.',
    whoTitle: 'Quem sou',
    who: [
      'Tech Lead com mais de 10 anos de trajetória, ligando desafios técnicos complexos aos objetivos do negócio. Lidero arquiteturas de microsserviços de alta volumetria em Kubernetes na AWS, em plataformas de apostas (iGaming) e em aplicações bancárias e financeiras críticas.',
      'Acredito que a melhor arquitetura nasce em times motivados, bem mentorados e com senso de propósito. Minha gestão de pessoas se apoia em rituais consistentes: 1:1s recorrentes, feedback contínuo, PDI individualizado e priorização de demanda.'
    ],
    stackTitle: 'Stack',
    workTitle: 'Projetos pessoais',
    allProjects: 'Todos os projetos',
    viewProject: 'Ver projeto',
    projectsTitle: 'Projetos',
    projectsIntro: 'Projetos pessoais, com o código aberto no GitHub. São trabalhos próprios, em TypeScript.',
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
    role: 'Tech Lead. Engineering team management, microservices and integration, in finance and iGaming.',
    siteDesc: 'Portfolio of Heitor Queiroz, Tech Lead: experience, personal projects, stack and contact.',
    whoTitle: 'About me',
    who: [
      'Tech Lead with more than 10 years of experience, connecting complex technical challenges to business goals. I lead high-volume microservices architectures on Kubernetes on AWS, in betting (iGaming) platforms and in critical banking and financial applications.',
      'I believe the best architecture comes from motivated, well-mentored teams with a strong sense of purpose. My people management relies on consistent rituals: recurring 1:1s, continuous feedback, individual development plans and demand prioritization.'
    ],
    stackTitle: 'Stack',
    workTitle: 'Personal projects',
    allProjects: 'All projects',
    viewProject: 'View project',
    projectsTitle: 'Projects',
    projectsIntro: 'Personal projects, with the code open on GitHub. They are my own work, in TypeScript.',
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
      intro: 'Cada barbearia é um tenant. O cadastro público cria o dono e o tenant, e a plataforma entrega painel de gestão, site público de reservas e backoffice do SaaS.',
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
      intro: 'Each barbershop is a tenant. Public sign-up creates the owner and the tenant, and the platform delivers a management dashboard, a public booking site and a SaaS back office.',
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
