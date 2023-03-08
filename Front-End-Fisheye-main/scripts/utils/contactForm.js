function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const pagePhotographe = document.getElementById("main");
    pagePhotographe.style.display ="none";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    const pagePhotographe = document.getElementById("main");
    pagePhotographe.style.display ="block";
}
