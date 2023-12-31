// Globale Variable, um den aktuellen Bildindex zu verfolgen
let currentIndex = 0;

function openLightBox(className) {
  // Aktualisierung des currentIndex basierend auf className
  const classes = [
    "product-one",
    "product-two",
    "product-three",
    "product-four",
  ];
  currentIndex = classes.indexOf(className);

  // Hauptbild-Element
  const mainPicElement = document.querySelector(".main-pic");

  // Verstecken aller Bilder im .main-pic div
  Array.from(mainPicElement.children).forEach(
    (img) => (img.style.display = "none")
  );

  // Bild im .main-pic
  mainPicElement.querySelector("." + className).style.display = "block";

  // Anzeigen der Lightbox
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightBox() {
  // Lightbox verstecken
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(offset) {
  // Berechnung des neuen Index
  const newIndex = (currentIndex + offset + 4) % 4;

  // Bilder im .main-pic verstecken
  const mainPicElement = document.querySelector(".main-pic");
  Array.from(mainPicElement.children).forEach(
    (img) => (img.style.display = "none")
  );

  // Anzeigen des entsprechenden Hauptbilds im .main-pic div
  mainPicElement.children[newIndex].style.display = "block";

  // Aktualisierung des currentIndex
  currentIndex = newIndex;
}

function initializeEventListeners() {
  const prevIcon = document.getElementById("prev-icon");
  const nextIcon = document.getElementById("next-icon");

  prevIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    changeImage(-1);
  });

  nextIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    changeImage(1);
  });
}

document.addEventListener("DOMContentLoaded", initializeEventListeners);
