// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
  const href = link.href;
  const url = location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLinks);

// Ativar itens do Orçamento
const url = new URLSearchParams(location.search);

function ativar(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
};

url.forEach(ativar);


// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarIMG(event){
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 941px)").matches;
  if(media){
  galeriaContainer.prepend(img);
}
}

function eventosGaleria(img){
  img.addEventListener("click", trocarIMG);
}

galeria.forEach(eventosGaleria);

// ANIMATION

if(window.SimpleAnime){
  new SimpleAnime();
}