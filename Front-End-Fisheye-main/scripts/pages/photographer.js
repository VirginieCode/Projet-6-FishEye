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

//Fonction pour récupérer les médias

async function getMedias() {
  async function dataMedia() {
    const response = await fetch("data/photographers.json");
    const photographersData = await response.json();
    const medias = photographersData.media;

    console.log(medias);

    let unMedia = medias.map((obj) => {
      let id = obj.id;
      let photographerId = obj.photographerId;
      let title = obj.title;
      let image = obj.image;
      let video = obj.video;
      let likes = obj.likes;
      let date = obj.date;
      let price = obj.price;
      return { id, photographerId, title, image, video, likes, date, price };
    });

    console.log(unMedia);

    return {
      media: [...unMedia],
    };
  }
  try {
    photographersData = await dataMedia;
  } catch {
    console.error("il y a une erreur");
    console.log(error);
  }

  return dataMedia();
}

// Creation section + ajout des médias dedans

async function mediaData(media) {
  const themain = document.getElementById("main");
  const mediaSection = document.createElement("section");
  themain.appendChild(mediaSection);
  mediaSection.classList.add("mediaSection");

  for (let i = 0; i < media.length; i++) {
    if (media[i].photographerId === id) {
      console.log(media[i]);
      const galleryModel = MediaFactory(media[i]);
      const galleryDOM = galleryModel.getMedia();
      mediaSection.appendChild(galleryDOM);
    }
  }

  const encartModel = MediaFactory(media);
  const encartDOM = encartModel.getEncartInfos();
  mediaSection.appendChild(encartDOM);

  /*

//Test pour full image 

      const testModel = MediaFactory(media);
      const testDOM = testModel.fullImage();
      mediaSection.appendChild(testDOM); */
}

async function initialisation() {
  // Récupère les datas des photographes
  const { media } = await getMedias();
  mediaData(media);
}

initialisation();

