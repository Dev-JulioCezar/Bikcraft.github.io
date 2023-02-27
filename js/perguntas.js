// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativar(event) {
  const qPergunta = event.currentTarget;
  const controls = qPergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  qPergunta.setAttribute("aria-expanded", ativa);
}

function ativarP(pergunta) {
  pergunta.addEventListener("click", ativar)
}

perguntas.forEach(ativarP);