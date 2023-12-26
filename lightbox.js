function openLightBox(imageSrc) {
  let lightbox = document.getElementById("lightbox");
  let mainImageContainer = document.querySelector("#lightbox .main-product");
  let lightboxContainer = document.getElementById("lightbox-container");

  // Setze das Hauptbild in der Lightbox
  let mainImage = document.createElement("img");
  mainImage.src = mainImageContainer.querySelector(".product-main").src;
  mainImage.alt = "main-pic";
  mainImage.classList.add("product-main");
  mainImageContainer.innerHTML = "";
  mainImageContainer.appendChild(mainImage);

  // Lösche alle vorhandenen Bilder im Lightbox-Container
  lightboxContainer.innerHTML = "";

  // Füge die Miniaturansichten in den Lightbox-Container ein
  let thumbOne = createThumbnail("./img/image-product-1-thumbnail.jpg");
  let thumbTwo = createThumbnail("./img/image-product-2-thumbnail.jpg");
  let thumbThree = createThumbnail("./img/image-product-3-thumbnail.jpg");
  let thumbFour = createThumbnail("./img/image-product-4-thumbnail.jpg");

  lightboxContainer.appendChild(thumbOne);
  lightboxContainer.appendChild(thumbTwo);
  lightboxContainer.appendChild(thumbThree);
  lightboxContainer.appendChild(thumbFour);

  // Zeige die Lightbox an
  lightbox.style.display = "block";

}

function createThumbnail(src) {
  let thumbnail = document.createElement("img");
  thumbnail.src = src;
  thumbnail.alt = "thumb";
  thumbnail.classList.add("thumb");
  thumbnail.onclick = function () {
    openLightBox(src);
  };
  return thumbnail;
}

function closeLightBox() {
  document.getElementById("lightbox").style.display = "none";
}
