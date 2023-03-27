//Creation du Factory Media

function MediaFactory(media) {
  const { id, photographerId, title, image, video, likes, date, price } = media;

  const name = document.querySelector(".photographerName").innerHTML;

  const thePicture = `assets/SamplePhotos/${name}/${image}`;
  const theVideo = `assets/SamplePhotos/${name}/${video}`;
  const theImage = document.createElement("img");
  theImage.setAttribute("id", "mediaImagesVideos");
  const theClip = document.createElement("video");
  theClip.setAttribute("type", "video/mp4");

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

    likesDisplay.classList.add("likesDisplay");
    const titleLikesDisplay = document.createElement("div");
    titleLikesDisplay.appendChild(titleParagraphe);
    titleLikesDisplay.appendChild(likesDisplay);

    titleLikesDisplay.classList.add("titleLikesDisplay");

    heartLike.classList.add("heartLikePicture");

    // Ajout de la fonction like au clic sur le coeur sous l'image

    heartLike.onclick = function () {
      theLikes.textContent = likes + 1;
    };

    //Pour filtrer vidéos ou images :

    if (image) {
      cardMedia.appendChild(theImage);

      cardMedia.classList.add("cardMedia");

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
  };
}
