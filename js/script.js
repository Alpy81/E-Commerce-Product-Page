// Zählerfunktion bei Mengenauswahl des Products
function updateQuantity(change) {
  const quantityElement = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityElement.innerText);
  let newQuantity = Math.max(0, currentQuantity + change);
  quantityElement.innerText = newQuantity;
}

// Funktion zum Löschen des Warenkorbs
function deleteCartItem() {
  const cartWindow = document.getElementById("cart-window");
  if (cartWindow) {
    cartWindow.parentNode.removeChild(cartWindow);
  }
}

// Funktion zum Anzeigen des Warenkorbfensters
function showCartWindow() {
  const productImage = document.getElementById("product-main");
  const productName = "Autum Limited Edition..";
  const selectedQuantity = parseInt(
    document.getElementById("quantity").innerText
  );
  const basePrice = 125.0;
  const totalPrice = selectedQuantity * basePrice;

  // Erstellen des Warenkorbfensters
  const cartWindow = document.createElement("div");
  cartWindow.id = "cart-window";
  cartWindow.style.position = "fixed";
  cartWindow.style.top = "23%";
  cartWindow.style.left = "50%";
  cartWindow.style.transform = "translate(-50%, -50%)";
  cartWindow.style.width = "300px";
  cartWindow.style.height = "220px";
  cartWindow.style.padding = "20px";
  cartWindow.style.backgroundColor = "#fff";
  cartWindow.style.border = "1px solid #ccc";
  cartWindow.style.borderRadius = "10px";
  cartWindow.style.zIndex = "1000";

  // Inhalt des Warenkorbs
  cartWindow.innerHTML = `
    <h4 style="margin-bottom: 10px; font-family: KumbhSans-Bold; border-radius: 10px;">Cart</h4>
    <hr style="margin-bottom: 10px; border-radius: 10px;">
    <div style="display: flex; align-items: center; margin-bottom: 15px; border-radius: 10px;">
      <img src="${
        productImage.src
      }" alt="${productName}" style="width: 50px; height: 50px; margin-right: 10px; border-radius: 5px;">
      <div>
        <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 14px;">${productName}</p>
        <p style="margin: 0; color: hsl(219, 9%, 45%); font-family: KumbhSans-Regular; font-size: 14px;">$${basePrice.toFixed(
          2
        )} x ${selectedQuantity} = <span style="color: black; font-family: KumbhSans-Bold;">$${totalPrice.toFixed(
    2
  )}</span></p>
      </div>
      <img src="./img/image-delete.png" alt="delete" style="cursor: pointer; margin-top: 1rem; margin-left: auto;" onclick="deleteCartItem()">
    </div>
    <button id="checkoutButton" style="padding: 10px; background-color: hsl(26, 100%, 55%); margin-bottom: 5px; color: #fff; border: none; border-radius: 10px; cursor: pointer;">Checkout</button>
  `;

  document.body.appendChild(cartWindow);

  const checkoutButton = document.getElementById("checkoutButton");
  checkoutButton.addEventListener("click", function () {
    alert("Checkout clicked!");
  });
}

// Event Listener für den "Add to Cart" Button
const addToCartButton = document.getElementById("addToCartButton");
addToCartButton.addEventListener("click", showCartWindow);

// Event Listener für das Schließen des Warenkorbs bei Klick außerhalb
document.addEventListener("click", function (event) {
  const sidebarContainer = document.getElementById("sidebarContainer");
  if (sidebarContainer && !sidebarContainer.contains(event.target)) {
    hideSidebar();
  }
});
