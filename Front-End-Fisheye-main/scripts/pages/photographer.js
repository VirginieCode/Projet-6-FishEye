//Mettre le code JavaScript lié à la page photographer.html

//Clic sur le logo renvoie à la page d'acceuil

const logo = document.querySelector(".logo");

logo.addEventListener("click", backHome);

function backHome() {
  window.location.href = "index.html";
}

//Récupérer l'ID du bon photographe avec searchParams

let params = new URL(document.location).searchParams;
console.log(params);
let id = parseInt(params.get("id"));
console.log(id);

//Création du dislayHeader

async function headerData(photographers) {
  const headerSection = document.querySelector(".photograph-header");

  for (let i = 0; i < photographers.length; i++) {
    if (photographers[i].id === id) {
      const headerModel = photographerFactory(photographers[i]);
      const userheaderpageDOM = headerModel.getHeaderPageDOM();
      headerSection.appendChild(userheaderpageDOM);

      let name = photographers[i].name;
      console.log(name);
    }
  }
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  headerData(photographers);
}

init();
