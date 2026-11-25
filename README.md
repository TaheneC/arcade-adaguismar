# Arcade Adaguismar

Portal de jogos do **Colégio Estadual Adaguismar de Oliveira**. Alunos e professores podem compartilhar jogos criados na escola. O catálogo permite buscar por título ou autoria, filtrar por categoria e abrir cada jogo no navegador.

**[Acesse o Arcade Adaguismar](https://tahenec.github.io/arcade-adaguismar/)**

## Como publicar e enviar seu jogo

1. Crie um repositório na sua conta do GitHub e adicione os arquivos do jogo. Coloque o `index.html` na pasta que será publicada.
2. Em **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch e a pasta que contêm o jogo e clique em **Save**. Abra e teste o endereço HTTPS gerado pelo GitHub Pages.
3. No portal, abra **Enviar jogo** e preencha título, link, categoria e descrição. O nome da equipe é opcional. Use um nome que não identifique alunos.
4. Clique em **Baixar ficha** e entregue o arquivo ao professor pelo canal privado indicado pela escola.

Cada jogo permanece hospedado na conta de quem o publicou. O portal reúne os links aprovados.

## Como incluir um jogo no catálogo

1. Confira a ficha recebida em privado e teste o jogo. Verifique se a ficha, o endereço e as telas do jogo expõem nome completo, contato, matrícula, fotos ou outras informações que identifiquem alunos. Devolva a ficha ou o jogo para correção se houver exposição.
2. Depois da aprovação, adicione somente os campos públicos da ficha à lista `window.catalogoDeJogos` em [`catalogo.js`](catalogo.js). Separe os objetos com vírgulas.
3. Salve a alteração na branch `main` e confira se o jogo aparece no portal após a atualização do GitHub Pages.

## Protocolo de privacidade e segurança

- **Antes de receber fichas**, a escola deve identificar o órgão responsável pelo tratamento e o canal oficial para alunos e responsáveis, definir a finalidade, a base legal e o prazo de retenção, e registrar a avaliação do melhor interesse de crianças e adolescentes.
- **Durante a revisão**, mantenha as fichas no canal institucional privado, com acesso restrito aos revisores. Evite publicar fichas, dados pessoais ou credenciais em issues, commits e outros espaços públicos. Use autenticação de dois fatores nas contas com acesso de escrita.
- **Após a revisão**, guarde apenas o necessário pelo prazo definido pela escola e elimine cópias de trabalho conforme a orientação institucional. Revise periodicamente os jogos e remova entradas que perderam a finalidade.
- **Pedidos de titulares** devem ser encaminhados ao responsável institucional pela LGPD. Registre o recebimento e encaminhe pedidos de acesso, correção ou retirada pelo canal privado, com verificação de identidade proporcional.
- **Em caso de exposição**, retire a entrada do catálogo, restrinja o acesso à origem quando possível e avise de imediato o responsável institucional. Registre o ocorrido com acesso restrito. O responsável avalia o risco e as comunicações exigidas à ANPD e aos titulares. Se o dado estiver em um repositório público, trate também a origem e o histórico com o administrador, pois retirar o link do catálogo não apaga cópias.

[Aviso de privacidade do portal](https://tahenec.github.io/arcade-adaguismar/#privacidade) · [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm) · [Orientação da ANPD sobre dados de crianças e adolescentes](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-divulga-enunciado-sobre-o-tratamento-de-dados-pessoais-de-criancas-e-adolescentes)

## Arquivos do projeto

- [`index.html`](index.html) organiza as seções do portal.
- [`style.css`](style.css) define o visual e a adaptação a telas pequenas.
- [`portal.js`](portal.js) controla a busca, os filtros e o formulário.
- [`catalogo.js`](catalogo.js) reúne as fichas aprovadas.

O portal é feito com HTML, CSS e JavaScript e publicado pelo GitHub Pages a partir da raiz da branch `main`.
