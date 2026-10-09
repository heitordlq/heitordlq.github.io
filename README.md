# heitordlq.github.io

Portfólio de Heitor Queiroz: site estático e bilíngue (PT-BR e EN), sem framework e sem dependências.

**Online:** https://heitordlq.github.io/

## O que tem

- Início, experiência, lista de projetos, uma página por projeto (com arquitetura) e página Sobre (experiência completa, formação, certificações e idiomas), em português e em inglês.
- Troca de idioma e de tema (claro e escuro). O tema segue o sistema e a escolha fica salva no navegador.
- As páginas do portfólio usam fontes do sistema e não fazem requisição a serviço externo. O único JavaScript delas é o do botão de tema.
- `/curriculo/` é à parte: currículo interativo em 3D, com cerca de 12,8 kB comprimido (gzip). Ele carrega three.js (cdnjs) e fontes do Google.
- Skip link, foco visível, rótulos ARIA na navegação e `hreflang` entre os idiomas.
- Entre 3,7 e 6,8 kB por página do portfólio, com CSS e JS, comprimidos (gzip). O build imprime a medida de cada página.

## Estrutura

```text
src/
  content.mjs      todo o texto do site, em PT-BR e EN
  assets/          site.css e site.js
  curriculo.html   currículo interativo em 3D, copiado como está para docs/curriculo/
build.mjs          gera o site em docs/ (só biblioteca padrão do Node)
docs/              saída gerada, é o que o GitHub Pages publica
```

## Como rodar

Precisa de Node 20 ou mais novo.

```bash
npm run build      # gera docs/ e confere os links internos
npm run preview    # build e servidor local em http://localhost:4173
```

O build falha se algum link interno apontar para uma página que não existe.

## Como editar

- **Texto, projetos e stack:** `src/content.mjs`.
- **Experiência, formação e certificações:** `experience`, `education`, `certifications` e `languages` no mesmo arquivo.
- **Nome dos clientes:** `site.showClients` mostra ou oculta o nome dos clientes atendidos pela Opah IT. Com `false`, aparece só o setor.
- **Visual:** `src/assets/site.css`. As cores são tokens na raiz do arquivo, com versão clara e escura.

Depois de editar, rode `npm run build` e faça commit de `docs/` junto com `src/`.

## Publicação

GitHub Pages, a partir da branch `main`, pasta `/docs`. Não há etapa de CI: o que está em `docs/` é o que vai ao ar.

## Decisões

- **Sem framework e sem dependências.** São poucas páginas, e um script de cerca de 360 linhas gera todas.
- **Sem fontes externas.** Evita requisição a terceiros e deixa a primeira renderização mais rápida.
- **Conteúdo só de fontes do próprio autor.** Experiência e certificações vêm do LinkedIn e do CV, e os projetos vêm dos repositórios públicos.
