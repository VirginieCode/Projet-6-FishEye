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

  const gallery = [];

  //Action pour chaque media

  for (let i = 0; i < media.length; i++) {
    if (media[i].photographerId === id) {
      console.log(media[i]);
      const galleryModel = MediaFactory(media[i]);
      const galleryDOM = galleryModel.getMedia();
      mediaSection.appendChild(galleryDOM);

      const image = galleryDOM.querySelector(".imageVideoMedia");
      const video = galleryDOM.querySelector(".imageVideoMedia video");
      if (image) {
        gallery.push(image);
      } else if (video) {
        gallery.push(video);
      }
    }
  }

  // Création de la lightbox

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  const slide = document.createElement("div");
  slide.id = "lightbox-slide";
  lightbox.appendChild(slide);
  const previousBtn = document.createElement("div");
  previousBtn.id = "previousBtn";
  previousBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  const nextBtn = document.createElement("div");
  nextBtn.id = "nextBtn";
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  const closeBtn = document.createElement("div");
  closeBtn.id = "lightboxClose";
  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  lightbox.appendChild(previousBtn);
  lightbox.appendChild(nextBtn);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);

  // Initialisation de l'index a 0

  let slideIndex = 0;

  // Si image ou vidéo

  function showSlide(index) {
    slideIndex = index;
    const currentMedia = gallery[index];
    if (currentMedia.tagName === "IMG") {
      slide.innerHTML = `<img src="${currentMedia.src}" alt="${currentMedia.alt}">`;
    } else if (currentMedia.tagName === "VIDEO") {
      slide.innerHTML = `<video src="${currentMedia.src}" controls></video>`;
    }
  }

  showSlide(slideIndex);

  //Création du système de slider

  gallery.forEach((media, index) => {
    media.addEventListener("click", () => {
      showSlide(index);
      lightbox.classList.add("active");
    });
  });

  previousBtn.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + gallery.length) % gallery.length;
    showSlide(slideIndex);
  });

  nextBtn.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % gallery.length;
    showSlide(slideIndex);
  });

  closeBtn.addEventListener("click", (event) => {
    lightbox.classList.remove("active");
  });

  // Mise en place de l'accssibilité du slider avec les touches right, left et escape

  document.addEventListener("keydown", (event) => {
    if (lightbox.classList.contains("active")) {
      if (event.key === "ArrowLeft") {
        slideIndex = (slideIndex - 1 + gallery.length) % gallery.length;
        showSlide(slideIndex);
      } else if (event.key === "ArrowRight") {
        slideIndex = (slideIndex + 1) % gallery.length;
        showSlide(slideIndex);
      } else if (event.key === "Escape") {
        lightbox.classList.remove("active");
      }
    }
  });

  //Création de l'encart

  const encartModel = MediaFactory(media);
  const encartDOM = encartModel.getEncartInfos();
  mediaSection.appendChild(encartDOM);
}

async function initialisation() {
  // Récupère les datas des photographes
  const { media } = await getMedias();
  mediaData(media);
}

initialisation();
