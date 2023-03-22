function photographerFactory(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;

  //const pictureName = portrait.innerHTML;
  //console.log(pictureName)

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

