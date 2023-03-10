function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  const main = document.getElementById("main");
  main.style.opacity = "50%";
  main.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");



}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  modal.style.display = "none";
  const pagePhotographe = document.getElementById("main");
  pagePhotographe.style.display = "block";
  pagePhotographe.style.opacity = "100%";
  main.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
}

//Creation des querySelector

const form = document.querySelector("form");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");



console.log(nom);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validInputs();
});

validInputs = () => {
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  formData = [];

  if (prenomValue === "") {
    prenom.style.border = "solid";
    prenom.style.borderColor = "red";
  } else {
    prenom.style.border = "none";
  }

  if (nomValue === "") {
    nom.style.border = "solid";
    nom.style.borderColor = "red";
  } else {
    nom.style.border = "none";
  }

  if (emailValue === "") {
    email.style.border = "solid";
    email.style.borderColor = "red";
  } else {
    email.style.border = "none";
  }

  if (messageValue === "") {
    message.style.border = "solid";
    message.style.borderColor = "red";
  } else {
    message.style.border = "none";
  }

  if (prenomValue && nomValue && emailValue && messageValue !== "") {
    formData.push(
      `Prénom : ${prenomValue}, Nom : ${nomValue}, Email : ${emailValue}, Message : ${messageValue}  `
    );
    console.log(formData);
    window.location.reload();
  }
};
