// Define a global variable to keep track of the current image index
let currentIndex = 0;

function openLightBox(className) {
  // Update currentIndex based on className
  const classes = [
    "product-one",
    "product-two",
    "product-three",
    "product-four",
  ];
  currentIndex = classes.indexOf(className);

  // Get the main-pic element
  const mainPicElement = document.querySelector(".main-pic");

  // Hide all images in the .main-pic div
  Array.from(mainPicElement.children).forEach(
    (img) => (img.style.display = "none")
  );

  // Show the corresponding image in the .main-pic div
  mainPicElement.querySelector("." + className).style.display = "block";

  // Show the lightbox
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightBox() {
  // Hide the lightbox
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(offset) {
  // Calculate the new index
  const newIndex = (currentIndex + offset + 4) % 4;

  // Hide all images in the .main-pic div
  const mainPicElement = document.querySelector(".main-pic");
  Array.from(mainPicElement.children).forEach(
    (img) => (img.style.display = "none")
  );

  // Show the corresponding image in the .main-pic div
  mainPicElement.children[newIndex].style.display = "block";

  // Update currentIndex
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
