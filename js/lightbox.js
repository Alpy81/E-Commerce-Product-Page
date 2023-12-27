function openLightBox(className) {
  // Hide all images in the .main-pic div
  Array.from(document.querySelectorAll('.main-pic img')).forEach(img => img.style.display = 'none');
  
  // Show the corresponding image in the .main-pic div
  document.querySelector('.main-pic .' + className).style.display = 'block';
  
  // Show the lightbox
  document.getElementById('lightbox').style.display = 'flex';
 }
 
 function closeLightBox() {
  // Hide the lightbox
  document.getElementById('lightbox').style.display = 'none';
 }
 
 // Add event listeners to the images in the lightbox container
 document.querySelectorAll('#lightbox-container img').forEach(function(img) {
  img.addEventListener('click', function() {
      openLightBox(this.classList[0]);
  });
 });
 