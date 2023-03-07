function photographerFactory(data) {
 

  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/PhotographersIDPhotos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.classList.add('photographerimg');
    const h2 = document.createElement("h2");
    const infos = document.createElement("div");
    const cityAndCountryDiv = document.createElement("div");

    const taglineParagraphe = document.createElement("p");
    const priceParagraphe = document.createElement("p");
    const cityAndCountryParagraphe = document.createElement("p");
    h2.textContent = name;
    h2.classList.add('photographerName')

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

function getHeaderPageDOM(){

const header = document.createElement("header");

const h1 = document.createElement("h1");
h1.textContent = name;
h1.classList.add('photographerName')

const paragraphe = document.createElement("div");
const cityAndCountryParagraphe = document.createElement("p");
cityAndCountryParagraphe.textContent = `${city}, ${country}`;
const taglineParagraphe = document.createElement("p");
taglineParagraphe.textContent = tagline;


const img = document.createElement("img");
img.setAttribute("src", picture);
img.classList.add('photographerimg');

paragraphe.appendChild(cityAndCountryParagraphe);
paragraphe.appendChild(taglineParagraphe);
paragraphe.classList.add("paragrapheHeaderInfos")

header.appendChild(h1);
header.appendChild(paragraphe);
header.appendChild(img);

return header;

  }

/*function getMainPageDOM(){

const realisation = document.createElement("section");
const img = document.createElement("img");


  } */

  return { name, picture, id, city, country, tagline, price, getUserCardDOM, getHeaderPageDOM };
}



