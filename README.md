# heitordlq.github.io

Portfólio de Heitor Queiroz: site estático e bilíngue (PT-BR e EN), sem framework e sem dependências.

**Online:** https://heitordlq.github.io/

## O que tem

- Início, lista de projetos, uma página por projeto (com arquitetura) e página Sobre, em português e em inglês.
- Troca de idioma e de tema (claro e escuro). O tema segue o sistema e a escolha fica salva no navegador.
- Fontes do sistema e nenhuma requisição a serviço externo. O único JavaScript é o do botão de tema.
- Skip link, foco visível, rótulos ARIA na navegação e `hreflang` entre os idiomas.
- Cerca de 4,5 kB por página, com CSS e JS, comprimidos (gzip). O build imprime a medida de cada página.

## Estrutura

```text
src/
  content.mjs      todo o texto do site, em PT-BR e EN
  assets/          site.css e site.js
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
- **Experiência e formação:** preencha `experience` e `education` no mesmo arquivo. As seções só aparecem na página Sobre quando há itens.
- **Visual:** `src/assets/site.css`. As cores são tokens na raiz do arquivo, com versão clara e escura.

Depois de editar, rode `npm run build` e faça commit de `docs/` junto com `src/`.

## Publicação

GitHub Pages, a partir da branch `main`, pasta `/docs`. Não há etapa de CI: o que está em `docs/` é o que vai ao ar.

## Decisões

- **Sem framework e sem dependências.** São poucas páginas, e um script de cerca de 360 linhas gera todas.
- **Sem fontes externas.** Evita requisição a terceiros e deixa a primeira renderização mais rápida.
- **Conteúdo só do que dá para verificar.** Os projetos descritos são repositórios públicos, e cada afirmação vem do README ou do código deles.
