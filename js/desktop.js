// Auswahl der Menge des Produkts
function updateQuantity(change) {
  const quantityElement = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityElement.innerText);
  let newQuantity = Math.max(0, currentQuantity + change);
  quantityElement.innerText = newQuantity;
}
