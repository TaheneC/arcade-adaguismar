"use strict";

const categorias = ["Ação", "Aventura", "Educativo", "Estratégia", "Esporte", "Puzzle", "Outros"];
const busca = document.querySelector("#busca");
const filtro = document.querySelector("#categoria");
const ficha = document.querySelector("#ficha");
const jogos = document.querySelector("#jogos");
const estado = document.querySelector("#estado");
const resultado = document.querySelector("#resultado");
const enviarGithub = document.querySelector("#enviar-github");

function validarUrl(valor) {
  try {
    const url = new URL(valor);
    if (url.protocol === "https:" && /^[a-z0-9-]+\.github\.io$/i.test(url.hostname)
        && !url.username && !url.password && !url.port) return url.href;
  } catch {
    return null;
  }
  return null;
}

function normalizar(valor) {
  return valor.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function elemento(tag, texto, classe) {
  const item = document.createElement(tag);
  item.textContent = texto;
  if (classe) item.className = classe;
  return item;
}

const catalogo = (window.catalogoDeJogos || []).filter(jogo =>
  jogo && ["titulo", "autoria", "descricao"].every(chave =>
    typeof jogo[chave] === "string" && jogo[chave].trim()
  ) && categorias.includes(jogo.categoria) && validarUrl(jogo.url)
);
const repositorioInferido = /^([a-z0-9-]+)\.github\.io$/i.exec(location.hostname);
const pasta = location.pathname.split("/")[1];
const repositorio = window.repositorioDoPortal || (repositorioInferido
  ? repositorioInferido[1] + "/" + (pasta && !pasta.endsWith(".html") ? pasta : location.hostname)
  : "");
enviarGithub.hidden = !/^[a-z0-9-]+\/[a-z0-9_.-]+$/i.test(repositorio);

for (const categoria of categorias) {
  for (const seletor of [filtro, document.querySelector("#ficha-categoria")]) {
    seletor.add(new Option(categoria, categoria));
  }
}

function mostrarJogos() {
  const termo = normalizar(busca.value.trim());
  const filtrados = catalogo.filter(jogo =>
    (!filtro.value || jogo.categoria === filtro.value) &&
    normalizar(jogo.titulo + " " + jogo.autoria).includes(termo)
  );
  document.querySelector("#total").textContent = filtrados.length + (filtrados.length === 1 ? " jogo" : " jogos");
  estado.hidden = filtrados.length > 0;
  estado.textContent = catalogo.length
    ? "Nenhum jogo encontrado com esses filtros."
    : "O catálogo está pronto para receber os primeiros jogos da escola.";
  jogos.replaceChildren();
  for (const jogo of filtrados) {
    const card = elemento("article", "", "card");
    const link = elemento("a", "Jogar ↗", "button compact");
    link.href = validarUrl(jogo.url);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Jogar " + jogo.titulo + " em nova aba");
    card.append(elemento("span", jogo.categoria, "tag"), elemento("h3", jogo.titulo),
      elemento("p", jogo.autoria, "byline"), elemento("p", jogo.descricao), link);
    jogos.append(card);
  }
}

busca.addEventListener("input", mostrarJogos);
filtro.addEventListener("change", mostrarJogos);
mostrarJogos();

ficha.addEventListener("input", () => {
  ficha.elements.url.setCustomValidity("");
  resultado.textContent = "";
});

ficha.addEventListener("submit", evento => {
  evento.preventDefault();
  const jogo = Object.fromEntries(new FormData(ficha));
  for (const chave of Object.keys(jogo)) jogo[chave] = jogo[chave].trim();
  if (!jogo.titulo || !jogo.autoria || !jogo.descricao || !categorias.includes(jogo.categoria)) {
    resultado.textContent = "Preencha o título, a autoria, a descrição e a categoria.";
    return;
  }
  const endereco = validarUrl(jogo.url);
  if (!endereco) {
    ficha.elements.url.setCustomValidity("Informe um link HTTPS publicado em usuario.github.io.");
    ficha.elements.url.reportValidity();
    return;
  }
  jogo.url = endereco;
  const dados = JSON.stringify(jogo, null, 2);
  if (evento.submitter?.value === "github" && !enviarGithub.hidden) {
    const consulta = new URLSearchParams({ title: "Novo jogo: " + jogo.titulo, body: "Ficha para revisão\n\n" + dados });
    window.open("https://github.com/" + repositorio + "/issues/new?" + consulta, "_blank", "noopener,noreferrer");
    resultado.textContent = "Na aba do GitHub, revise a ficha e confirme a abertura da issue.";
    return;
  }
  const arquivo = URL.createObjectURL(new Blob([dados + "\n"], { type: "application/json" }));
  const download = document.createElement("a");
  download.href = arquivo;
  download.download = "ficha-do-jogo.json";
  document.body.append(download);
  download.click();
  download.remove();
  setTimeout(() => URL.revokeObjectURL(arquivo), 1000);
  resultado.textContent = "Ficha gerada. Compartilhe o arquivo com a pessoa responsável pelo catálogo.";
});
