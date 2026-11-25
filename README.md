# Arcade Adaguismar

Portal de jogos do **Colégio Estadual Adaguismar de Oliveira**. Alunos e professores podem compartilhar jogos criados na escola. O catálogo permite buscar por título ou autoria, filtrar por categoria e abrir cada jogo no navegador.

**[Acesse o Arcade Adaguismar](https://tahenec.github.io/arcade-adaguismar/)**

## Como publicar e enviar seu jogo

1. Crie um repositório na sua conta do GitHub e adicione os arquivos do jogo. Coloque o `index.html` na pasta que será publicada.
2. Em **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch e a pasta que contêm o jogo e clique em **Save**. Abra e teste o endereço HTTPS gerado pelo GitHub Pages.
3. No portal, abra **Enviar jogo** e preencha título, autoria ou equipe, link, categoria e descrição.
4. Clique em **Abrir envio no GitHub** e confirme a criação da issue para revisão. Como as issues são públicas, use o nome de apresentação ou da equipe. Você também pode baixar a ficha e entregá-la diretamente à pessoa responsável pelo catálogo.

Cada jogo permanece hospedado na conta de quem o publicou. O portal reúne os links aprovados.

## Como incluir um jogo no catálogo

1. Consulte as [fichas enviadas nas Issues](https://github.com/TaheneC/arcade-adaguismar/issues) e teste o link do jogo.
2. Depois da aprovação, adicione o objeto da ficha à lista `window.catalogoDeJogos` em [`catalogo.js`](catalogo.js). Separe os objetos com vírgulas.
3. Salve a alteração na branch `main` e confira se o jogo aparece no portal após a atualização do GitHub Pages.

## Arquivos do projeto

- [`index.html`](index.html) organiza as seções do portal.
- [`style.css`](style.css) define o visual e a adaptação a telas pequenas.
- [`portal.js`](portal.js) controla a busca, os filtros e o formulário.
- [`catalogo.js`](catalogo.js) reúne as fichas aprovadas.

O portal é feito com HTML, CSS e JavaScript e publicado pelo GitHub Pages a partir da raiz da branch `main`.
