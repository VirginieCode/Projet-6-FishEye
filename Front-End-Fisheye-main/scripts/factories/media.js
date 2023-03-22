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
  
      //Creation de la lightbox
  
      theImage.onclick = function () {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        const section = document.querySelector(".mediaSection");
        section.appendChild(lightbox);
        lightbox.classList.add("active");
  
        const slide = document.createElement("img");
        slide.setAttribute("id", "mediaImagesVideos");
        lightbox.appendChild(slide);
        slide.classList.add("slide");
  
        slide.setAttribute("src", thePicture);
  
        const arrows = document.createElement("div");
        const previous = document.createElement("p");
        const next = document.createElement("p");
        const close = document.createElement("p");
  
        previous.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
        next.innerHTML = ' <i class="fa-solid fa-chevron-right"></i>';
        close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  
        arrows.classList.add("arrowsContainer");
        previous.classList.add("previousArrow");
        next.classList.add("nextArrow");
        close.classList.add("lightboxClose");
  
        arrows.appendChild(previous);
        arrows.appendChild(next);
  
        lightbox.appendChild(arrows);
        lightbox.appendChild(close);
  
        close.onclick = function () {
          lightbox.style.display = "none";
          lightbox.classList.remove("active");
        };
  
        let slideIndex = 0;
        slideTotal = theImage.length;
     
        function changeImage() {
          theImage.forEach((image) => {
            image.style.display = 'none';
          });
          theImage[slideIndex].style.display = 'block';}
  
        const previousButton = document.querySelector(".previousArrow");
        const nextButton = document.querySelector(".nextArrow");
  
        previousButton.onclick = function () {
          slideIndex--;
          if (slideIndex < 0) {
            slideIndex = slideTotal - 1;
          }
          changeImage();
          console.log("previous");
        };
  
        nextButton.onclick = function () {
          slideIndex++;
          if (slideIndex >= slideTotal) {
            slideIndex = 0;
          }
          changeImage();
          console.log("next");
        };
  
        changeImage()
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
  
    function getEncartInfos() {
      /*
      const likesArray = [];
      likesArray.push(likes);
      likes
      console.log(likesArray)
  
  */
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
  
      /*const thePrice = document.querySelector(".priceParagraphe").innerHTML;
      encartInfos.textContent = `${thePrice}`;
  */
      encartInfos.appendChild(likesDisplay);
      // encartInfos.appendChild(thePrice);
  
      encartInfos.appendChild(encartpriceLikes);
  
      const sectionMedia = document.querySelector(".mediaSection");
  
      sectionMedia.appendChild(encartInfos);
  
      return encartInfos;
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
    };
  }
  