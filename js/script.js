const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes 

const perguntas = document.querySelectorAll(".question-btn");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);
  
    resposta.classList.toggle("active");
    const active = resposta.classList.contains("active");
    pergunta.setAttribute("aria-expanded", active);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}
  
perguntas.forEach(eventosPerguntas);


