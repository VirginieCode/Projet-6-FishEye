function photographerFactory(data) {
 

  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    const infos = document.createElement("div");
    const cityAndCountryDiv = document.createElement("div");

    const taglineParagraphe = document.createElement("p");
    const priceParagraphe = document.createElement("p");
    const cityAndCountryParagraphe = document.createElement("p");
    h2.textContent = name;

    cityAndCountryParagraphe.textContent = `${city}, ${country}`;

    taglineParagraphe.textContent = tagline;
    priceParagraphe.textContent = `${price}€/jour` ;
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(infos);

    infos.appendChild(cityAndCountryDiv);
    infos.appendChild(taglineParagraphe);
    infos.appendChild(priceParagraphe);
    cityAndCountryDiv.appendChild(cityAndCountryParagraphe);

    
   
    return article;

    
    
  }
  return { name, picture, id, city, country, tagline, price, getUserCardDOM };

  
}



