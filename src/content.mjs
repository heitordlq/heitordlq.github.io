// Todo o texto do site mora aqui, em PT-BR e EN. O build gera uma página por idioma a partir deste arquivo.
// Só entra o que dá para verificar nos repositórios públicos. Experiência e formação ficam vazias até virem do CV.

export const site = {
  name: 'Heitor Queiroz',
  initials: 'HQ',
  handle: 'heitordlq',
  base: 'https://heitordlq.github.io',
  linkedin: 'https://www.linkedin.com/in/heitorqueiroz/',
  github: 'https://github.com/heitordlq',
  repo: 'https://github.com/heitordlq/heitordlq.github.io'
};

export const experience = []; // { role, org, period, summary: { pt, en } }
export const education = []; // { title, org, period }

export const stack = [
  { k: { pt: 'Linguagens', en: 'Languages' }, v: ['TypeScript', 'JavaScript', 'Java'] },
  { k: { pt: 'Web', en: 'Web' }, v: ['React', 'Next.js', 'Tailwind CSS'] },
  { k: { pt: 'Mobile', en: 'Mobile' }, v: ['React Native'] },
  { k: { pt: 'Back-end', en: 'Back-end' }, v: ['Node.js', 'NestJS', 'Prisma', { pt: 'Spring Boot (curso)', en: 'Spring Boot (course)' }] },
  { k: { pt: 'Dados e infra', en: 'Data and infra' }, v: ['PostgreSQL', 'Redis', 'Docker', 'Turborepo', 'pnpm'] },
  { k: { pt: 'Pagamentos', en: 'Payments' }, v: [{ pt: 'Stripe: checkout, webhooks e Connect', en: 'Stripe: checkout, webhooks and Connect' }] }
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
    role: 'Desenvolvedor de software. Aplicações web e mobile em TypeScript, da API à interface.',
    siteDesc: 'Portfólio de Heitor Queiroz, desenvolvedor de software: projetos, stack e contato.',
    whoTitle: 'Quem sou',
    who: [
      'Trabalho o ciclo completo de um produto: modelagem de dados, API, interface web e aplicativo mobile. A maior parte do meu código público é em TypeScript.',
      'Nos projetos abaixo, a arquitetura aparece no desenho: multi-tenant, monorepo, filas e pagamentos reais.'
    ],
    stackTitle: 'Stack',
    workTitle: 'Trabalhos selecionados',
    allProjects: 'Todos os projetos',
    viewProject: 'Ver projeto',
    projectsTitle: 'Projetos',
    projectsIntro: 'Repositórios públicos, com o código aberto no GitHub.',
    aboutTitle: 'Sobre',
    experienceTitle: 'Experiência',
    educationTitle: 'Formação',
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
    role: 'Software developer. Web and mobile applications in TypeScript, from the API to the interface.',
    siteDesc: 'Portfolio of Heitor Queiroz, software developer: projects, stack and contact.',
    whoTitle: 'About me',
    who: [
      'I work across the whole product cycle: data modeling, API, web interface and mobile app. Most of my public code is in TypeScript.',
      'In the projects below the architecture shows in the design: multi-tenancy, a monorepo, queues and real payments.'
    ],
    stackTitle: 'Stack',
    workTitle: 'Selected work',
    allProjects: 'All projects',
    viewProject: 'View project',
    projectsTitle: 'Projects',
    projectsIntro: 'Public repositories, with the code open on GitHub.',
    aboutTitle: 'About',
    experienceTitle: 'Experience',
    educationTitle: 'Education',
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
