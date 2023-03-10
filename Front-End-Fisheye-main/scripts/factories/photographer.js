function photographerFactory(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.classList.add("photographerimg");
    const h2 = document.createElement("h2");
    const infos = document.createElement("div");
    const cityAndCountryDiv = document.createElement("div");

    const taglineParagraphe = document.createElement("p");
    const priceParagraphe = document.createElement("p");
    priceParagraphe.classList.add("priceParagraphe");
    const cityAndCountryParagraphe = document.createElement("p");
    cityAndCountryParagraphe.classList.add("cityAndCountryParagraphe");
    h2.textContent = name;
    h2.classList.add("photographerName");

    cityAndCountryParagraphe.textContent = `${city}, ${country}`;

    taglineParagraphe.textContent = tagline;
    priceParagraphe.textContent = `${price}€/jour`;
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(infos);

    infos.appendChild(cityAndCountryDiv);
    infos.appendChild(taglineParagraphe);
    infos.appendChild(priceParagraphe);

    infos.classList.add("infosPhotographer");
    cityAndCountryDiv.appendChild(cityAndCountryParagraphe);

    return article;
  }

  //Creation du dom pour le header de la page photographe

  function getHeaderPageDOM() {
    const header = document.createElement("header");

    const h1 = document.createElement("h1");
    h1.textContent = name;
    h1.classList.add("photographerName");

    const paragraphe = document.createElement("div");
    const cityAndCountryParagraphe = document.createElement("p");
    cityAndCountryParagraphe.textContent = `${city}, ${country}`;
    const taglineParagraphe = document.createElement("p");
    taglineParagraphe.textContent = tagline;

    const nameAndInfosContainer = document.createElement("div");
    nameAndInfosContainer.appendChild(h1);
    nameAndInfosContainer.appendChild(paragraphe);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.classList.add("photographerimg");

    paragraphe.appendChild(cityAndCountryParagraphe);
    paragraphe.appendChild(taglineParagraphe);
    paragraphe.classList.add("paragrapheHeaderInfos");

    header.appendChild(nameAndInfosContainer);
    header.appendChild(img);

    return header;
  }

  return {
    name,
    picture,
    id,
    city,
    country,
    tagline,
    price,
    getUserCardDOM,
    getHeaderPageDOM,
  };
}

//Creation du Factory Media

function MediaFactory(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;

  const thePicture = `assets/SamplePhotos/Mimi/${image}`;
  const theVideo = `assets/SamplePhotos/Mimi/${video}`;
  const theImage = document.createElement("img");
  const theClip = document.createElement("video");

  function getMedia() {
    const cardMedia = document.createElement("div");

    const titleParagraphe = document.createElement("p");
    titleParagraphe.textContent = title;
    const likesDisplay = document.createElement("div");
    const theLikes = document.createElement("p");
    theLikes.textContent = parseInt(likes);
    heartLike = document.createElement("p");
    heartLike.innerHTML =
      '<span id="heartLikePicture"><i class="fa-solid fa-heart"></i></span>';
    likesDisplay.appendChild(theLikes);
    likesDisplay.appendChild(heartLike);
    theLikes.classList.add("theLikeNumber");

    heartLike.classList.add("heartLikePicture");

    // Ajout de la fonction like au clic sur le coeur sous l'image

    heartLike.onclick = function () {
      theLikes.textContent = likes + 1;
    };

    //Creation du carroussel

    theImage.onclick = function () {
      console.log('test')
    };


    likesDisplay.classList.add("likesDisplay");
    const titleLikesDisplay = document.createElement("div");
    titleLikesDisplay.appendChild(titleParagraphe);
    titleLikesDisplay.appendChild(likesDisplay);

    titleLikesDisplay.classList.add("titleLikesDisplay");

    //Pour filtrer vidéos ou images :

    if (image) {
      cardMedia.appendChild(theImage);

      cardMedia.appendChild(titleLikesDisplay);

      theImage.classList.add("imageVideoMedia");

      theImage.setAttribute("src", thePicture);

    
    } else {
      theClip.classList.add("imageVideoMedia");
      cardMedia.appendChild(theClip);
      cardMedia.appendChild(titleLikesDisplay);
      theClip.setAttribute("src", theVideo);
    }

  

    return cardMedia;
  }

  function getEncartInfos() {
    const encartInfos = document.createElement("div");

    encartInfos.classList.add("encartInfos");

    const likesDisplay = document.createElement("div");

    likesDisplay.textContent = "Likes";

    heartLikeEncart = document.createElement("p");
    heartLikeEncart.innerHTML = '<i class="fa-solid fa-heart"></i>';

    heartLikeEncart.classList.add("heartLikeEncart");

    likesDisplay.appendChild(heartLikeEncart);

    likesDisplay.classList.add("likesDisplayEncart");

    const encartpriceLikes = document.createElement("p");
    encartpriceLikes.textContent = "Prix journalier";

    encartInfos.appendChild(likesDisplay);

    encartInfos.appendChild(encartpriceLikes);

    const sectionMedia = document.querySelector(".mediaSection");

    sectionMedia.appendChild(encartInfos);

    return encartInfos;
  }

  //test pour full image

  function fullImage() {
    console.log(theImage);
  }

  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    getMedia,
    getEncartInfos,
    fullImage,
  };
}
