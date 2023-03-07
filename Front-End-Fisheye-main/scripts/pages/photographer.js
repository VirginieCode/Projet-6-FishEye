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

console.log(getUserCardDOM)


async function displayData(photographers) {
  const mainSection = document.getElementById("main");


  for(let i=0; i<photographers.length; i++){
    

   /*let name =  photographers[i].name ;

     console.log(name)*/ 
    

    if(photographers[i].id === id){
    const photographerModel = photographerFactory(photographers[i]);
    const userCardDOM = photographerModel.getUserCardDOM();
    mainSection.appendChild(userCardDOM);
  }
  }

}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();












// if pour afficher les infos seulement si le id de l'url = id du photographe

/*

            if(photographers.id === id){
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                header.appendChild(userCardDOM);
            }
        

    */
        
    
  
  
        
/*

// FETCH POUR RÉCUPÉRER LES DONNÉES

fetch("data/photographers.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let leData = data;
    let dataPhotographers = leData.photographers;
    console.log(dataPhotographers);

//Boucle "for" pour récupérer chaque chaque id individuellement

    for(let i=0; i<dataPhotographers.length; i++){
        let photographerUnique = dataPhotographers[i];
        let idUnique = photographerUnique.id
        console.log(idUnique)

//Condition if pour comparer le id de l'url searchParams à l'id récupérer dans la boucle for


        if(idUnique === id){
            console.log(photographerUnique.name);

            const main = document.getElementById("main");
            const h1 = document.createElement("h1");
            h1.textContent = photographerUnique.name;
            main.appendChild(h1)

        }
        

    }
  });

*/
