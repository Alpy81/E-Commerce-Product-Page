document.addEventListener("DOMContentLoaded", function () {
  // Finde die Hauptbild- und Daumen-Elemente
  const mainPic = document.querySelector("#lightbox .product-main");
  const thumbs = document.querySelectorAll("#lightbox-container img.thumb");

  // Füge Klick-Eventlistener zu den Daumen-Bildern hinzu
  thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
          mainPic.src = thumb.src; // Ersetze das Hauptbild durch das angeklickte Daumen-Bild
          closeLightBox(); // Schließe die Lightbox nach dem Klick auf einen Daumen
      });
  });
});

// Öffne die Lightbox
function openLightBox() {
  document.getElementById("lightbox").style.display = "block";
}

// Schließe die Lightbox
function closeLightBox() {
  document.getElementById("lightbox").style.display = "none";
}
