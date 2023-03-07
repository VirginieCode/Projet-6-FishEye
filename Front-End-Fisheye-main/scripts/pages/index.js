async function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

  async function data() {
    const response = await fetch("data/photographers.json");
    const photographersData = await response.json();
    const unPhotographe = photographersData.photographers;

    // console.log(unPhotographe);

    let onePhotographer = unPhotographe.map((obj) => {
      let name = obj.name;
      let portrait = obj.portrait;
      let id = obj.id;
      let city = obj.city;
      let country = obj.country;
      let tagline = obj.tagline;
      let price = obj.price;
      return { name, portrait, id, city, country, tagline, price };
    });

    return {
      photographers: [...onePhotographer],
    };
  }
  try {
    photographersData = await data;
  } catch {
    console.error("il y a une erreur");
    console.log(error);
  }

  return data();


}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);

    // Renvoie vers la page du photographe

    userCardDOM.addEventListener("click", photographerPage);

    function photographerPage() {
      window.location.href = `photographer.html?id=${photographer.id}`;
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
