// Define a global variable to keep track of the current image index
let currentIndex = 0;

function openLightBox(className) {
 // Update currentIndex based on className
 const classes = ['product-one', 'product-two', 'product-three', 'product-four'];
 currentIndex = classes.indexOf(className);

 // Get the main-pic element
 const mainPicElement = document.querySelector('.main-pic');

 // Hide all images in the .main-pic div
 Array.from(mainPicElement.children).forEach(img => img.style.display = 'none');

 // Show the corresponding image in the .main-pic div
 mainPicElement.querySelector('.' + className).style.display = 'block';

 // Show the lightbox
 document.getElementById('lightbox').style.display = 'flex';
}

function closeLightBox() {
 // Hide the lightbox
 document.getElementById('lightbox').style.display = 'none';
}

function changeImage(offset) {
 // Calculate the new index
 const newIndex = (currentIndex + offset + 4) % 4; // +4 because of modulo operation

 // Hide all images in the .main-pic div
 const mainPicElement = document.querySelector('.main-pic');
 Array.from(mainPicElement.children).forEach(img => img.style.display = 'none');

 // Show the corresponding image in the .main-pic div
 mainPicElement.children[newIndex].style.display = 'block';

 // Update currentIndex
 currentIndex = newIndex;
}

// Add event listeners to the previous and next icons
document.getElementById('prev-icon').addEventListener('click', function() {
 changeImage(-1);
});

document.getElementById('next-icon').addEventListener('click', function() {
 changeImage(1);
});
